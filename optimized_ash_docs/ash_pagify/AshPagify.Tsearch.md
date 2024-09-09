# AshPagify.Tsearch — ash_pagify v1.0.2

Project: ash_pagify v1.0.2

## Table of Contents

- [ __ View Source ](external_link) AshPagify.Tsearch (ash_pagify v1.0.2)
  - __ Installation
  - __ Configuration
  - __ Features
    - __ :prefix (PostgreSQL 8.4 and newer only)
    - __ :negation
    - __ :any_word
    - __ :tsvector_column
    - __ :dictionary
    - __ :weighting
  - __ Enhanced search
- __ Summary
  - Types
  - Functions
- __ Types
- tsearch_option()
- __ Functions
- default_opts()
- merge_opts(opts \\\ [])
- normalize(term)
- option_keys()
- query_terms(search)
- sanitize_term(term, bool)
- tsquery(search, opts \\\ [])
- tsquery_expression(term_sql, opts \\\ [])
- tsquery_for_term(unsanitized_term, opts \\\ [])
- tsvector(opts \\\ [])

__

Search documentation of ash_pagify __ __

__ Settings

#  [ __ View Source ](external_link) AshPagify.Tsearch (ash_pagify v1.0.2)

AshPagify full-text search utilities.

This module provides utilities for full-text search in AshPagify. For a basic usage you can `use AshPagify.Tsearch` and implement the `tsvector` calculation in your resource.
    
    
    defmodule MyApp.Resource do
      use AshPagify.Tsearch
      require Ash.Expr
    
      calculations do
        calculate :tsvector,
                  AshPostgres.Tsvector,
                  expr(
                    fragment(
                      "to_tsvector('simple', coalesce(?, '')) || to_tsvector('simple', coalesce(?, ''))",
                      name,
                      title
                    )
                  ),
                  public?: true
        end
      end
    end

AshPagify.Tsearch provides the following calculations which are used by `AshPagify.search` for full-text search:

  * `:tsquery` \- The tsquery to search for.
  * `:full_text_search` \- A boolean indicating whether the tsvector matches the tsquery.
  * `:full_text_search_rank` \- The rank of the tsvector against the tsquery.



If you need to provide a custom implementation for one of these calculations, you can do so by

  1. not require the calculation in your resource
  2. implementing the calculation in your resource


    
    
    defmodule MyApp.Resource do
      use AshPagify.Tsearch, only: [:full_text_search, :full_text_search_rank]
      require Ash.Expr
    
      calculations do
        calculate :tsquery,
                  AshPostgres.Tsquery,
                  # use english dictionary unaccent PostgreSQL extension
                  expr(fragment("to_tsquery('english', unaccent(?))", ^arg(:search))) do
          public? true
          argument :search, :string, allow_expr?: true, allow_nil?: false
        end
    
        ...
      end
    end

##  __ Installation

If you do not use any PostgreSQL specific full-text search extensions, you can skip this step.

Otherwise, you need to add the required extensions to your Repo.installed_extensions list.
    
    
    defmodule MyApp.Repo do
      use AshPostgres.Repo, otp_app: :my_app
    
      def installed_extensions do
        ["ash-functions", "uuid-ossp", "citext", "unaccent", AshUUID.PostgresExtension]
      end
    end

##  __ Configuration

You can configure the full-text search options globally, per resource, or locally. The options are merged in the following order:

  1. Function arguments (highest priority)
  2. Resource-level options (set in the resource module)
  3. Global options in the application environment (set in config files)
  4. Library defaults (lowest priority)



Have a look at `tsearch_option/0` for a list of available options.

##  __ Features

###  __ :prefix (PostgreSQL 8.4 and newer only)

PostgreSQL's full text search matches on whole words by default. If you want to search for partial words, however, you can set :prefix to true in one of the configuration options described above.

Default: `true`

###  __ :negation

PostgreSQL's full text search matches all search terms by default. If you want to exclude certain words, you can set :negation to true. Then any term that begins with an exclamation point `!` will be excluded from the results.

Default: `true`

###  __ :any_word

Setting this attribute to true will perform a search which will return all models containing any word in the search terms. If set to false, the search will return all models containing all words in the search terms.

Default: `false`

###  __ :tsvector_column

This option allows you to specify a custom tsvector column expression for dynamic tsvector column lookup. Have a look at the `Enhanced search` section for more information.

Default: `nil`

###  __ :dictionary

We do not provide a mechanisme to set the dictionary in the configuration options. You can set the dictionary in a custom `tsquery` calculation implementation in your resource.

###  __ :weighting

We do not provide a mechanisme to set the weighting in the configuration options. You can set the weighting in your `tsvector` calculation implementation in your resource (or in the tsvector column in your database).

##  __ Enhanced search

If you need to be able to change the `tsvector` column dynamically (e.g. based on some user input), you can use the `:tsvector_column` option. This option should be specified in your resource module. Then you need to pass the targeted tsvector calculation as `full_text_search: [tsvector: :custom_tsvector]` option to your [`AshPagify.validate_and_run/4`](external_link) call (or other functions provided by AshPagify). This approach is mandatory so we can serialize the custom tsvector in `AshPagify.query_to_filters_map` and restore it in `AshPagify.query_for_filters_map` accordingly.
    
    
    defmodule MyApp.Resource do
      use AshPagify.Tsearch
      require Ash.Expr
    
      def full_text_search do
        [
          tsvector_column: [
            custom_tsvector: Ash.Expr.expr(custom_tsvector),
            another_custom_tsvector: Ash.Expr.expr(another_custom_tsvector),
          ]
        ]
      end
    
      calculations do
        # default tsvector calculation
        calculate :tsvector,
                  AshPostgres.Tsvector,
                  expr(
                    fragment(
                      "to_tsvector('simple', coalesce(?, '')) || to_tsvector('simple', coalesce(?, ''))",
                      name,
                      title
                    )
                  ),
                  public?: true
        end
    
        # custom tsvector calculation
        calculate :custom_tsvector,
                  AshPostgres.Tsvector,
                  expr(
                    fragment(
                      "to_tsvector('simple', coalesce(?, ''))",
                      name
                    )
                  ),
                  public?: true
        end
    
        # another custom tsvector calculation
        calculate :another_custom_tsvector,
                  AshPostgres.Tsvector,
                  expr(
                    fragment(
                      "to_tsvector('simple', coalesce(?, ''))",
                      title
                    )
                  ),
                  public?: true
        end
      end
    end

The in your business logic:
    
    
    def search(query, opts \\ []) do
      opts = AshPagify.set_tsvector(:custom_tsvector, opts)
      query
      |> AshPagify.validate_and_run(MyApp.Resource, opts)
    end

#  __ Summary

##  Types

tsearch_option()

A list of options for full text search.

##  Functions

default_opts()

Returns the default full text search options.

merge_opts(opts \\\ [])

Merges the given options with the default options.

normalize(term)

Replaces disallowed characters in the term with spaces.

option_keys()

Returns the keys for the full text search options.

query_terms(search)

Splits the search term into terms and returns a list of trimmed terms.

sanitize_term(term, bool)

Handles the negation of the term.

tsquery(search, opts \\\ [])

Returns the tsquery expression for the given search term and options.

tsquery_expression(term_sql, opts \\\ [])

After this, the SQL expression evaluates to a string containing the term surrounded by single-quotes.

tsquery_for_term(unsanitized_term, opts \\\ [])

Returns the tsquery expression for the given term and options.

tsvector(opts \\\ [])

Returns the tsvector expression for the given options.

#  __ Types

__ Link to this type

# tsearch_option()

[ __ View Source ](external_link)
    
    
    @type tsearch_option() ::
      {:negation, [boolean](external_link)()}
      | {:prefix, [boolean](external_link)()}
      | {:any_word, [boolean](external_link)()}
      | {:tsvector_column, [Ash.Expr.t](3.3.3/Ash.Expr.html#t:t/0)() | [[Ash.Expr.t](3.3.3/Ash.Expr.html#t:t/0)()]}

A list of options for full text search.

  * `:negation` \- Whether to negate the search. Defaults to `true`.
  * `:prefix` \- Whether to prefix the search. Defaults to `true`.
  * `:any_word` \- Whether to combine multiple words with || or &&. Defaults to `false` (&&).
  * `:tsvector_column` \- Custom tsvector column expressions for dynamic tsvector column lookup. Defaults to `nil`.



#  __ Functions

__ Link to this function

# default_opts()

[ __ View Source ](external_link)
    
    
    @spec default_opts() :: [tsearch_option()]

Returns the default full text search options.

The default options are:

  * `:negation` \- `true`
  * `:prefix` \- `true`
  * `:any_word` \- `false`
  * `:tsvector_column` \- `nil`



__ Link to this function

# merge_opts(opts \\\ [])

[ __ View Source ](external_link)

Merges the given options with the default options.

The options are merged in the following order:

  1. Function arguments (highest priority)
  2. Resource-level options (set in the resource module)
  3. Global options in the application environment (set in config files)
  4. Library defaults (lowest priority)



__ Link to this function

# normalize(term)

[ __ View Source ](external_link)

Replaces disallowed characters in the term with spaces.

__ Link to this function

# option_keys()

[ __ View Source ](external_link)

Returns the keys for the full text search options.

__ Link to this function

# query_terms(search)

[ __ View Source ](external_link)

Splits the search term into terms and returns a list of trimmed terms.

__ Link to this function

# sanitize_term(term, bool)

[ __ View Source ](external_link)

Handles the negation of the term.

__ Link to this function

# tsquery(search, opts \\\ [])

[ __ View Source ](external_link)

Returns the tsquery expression for the given search term and options.

The search term is split into terms and each term is sanitized and normalized. The terms are then combined into a tsquery expression.

__ Link to this function

# tsquery_expression(term_sql, opts \\\ [])

[ __ View Source ](external_link)

After this, the SQL expression evaluates to a string containing the term surrounded by single-quotes.

If :prefix is true, then the term will have :* appended to the end. If :negated is true, then the term will have ! prepended to the front and be surrounded by brackets.

__ Link to this function

# tsquery_for_term(unsanitized_term, opts \\\ [])

[ __ View Source ](external_link)

Returns the tsquery expression for the given term and options.

__ Link to this function

# tsvector(opts \\\ [])

[ __ View Source ](external_link)

Returns the tsvector expression for the given options.

Respects the `:tsvector_column` option together with the `:tsvector` option. If both are set, the `:tsvector` option is used to lookup the tsvector column in the `:tsvector_column` option. If the custom tsvector column is not found, the default tsvector column is used.
