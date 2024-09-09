# Ash.Resource.Preparation.Builtins — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Preparation.Builtins (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- after_action(callback)
  - __ Example
- before_action(callback)
  - __ Example
- build(options)
  - __ Examples
- set_context(context)
  - __ Examples

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Preparation.Builtins (ash v3.4.8)

Builtin query preparations

#  __ Summary

##  Functions

after_action(callback)

Directly attach an `after_action` function to the query.

before_action(callback)

Directly attach a `before_action` function to the query.

build(options)

Passes the given keyword list to [`Ash.Query.build/2`](external_link) with the query being prepared.

set_context(context)

Merges the given query context.

#  __ Functions

__ Link to this macro

# after_action(callback)

[ __ View Source ](external_link) (macro)

Directly attach an `after_action` function to the query.

This function will be called by [`Ash.Query.after_action/2`](external_link), with an additional `context` argument.

##  __ Example
    
    
    prepare after_action(fn query, records, _context ->
      Logger.debug("Query for #{query.action.name} on resource #{inspect(query.resource)} returned #{length(records)} records")
    
      {:ok, records}
    end)

__ Link to this macro

# before_action(callback)

[ __ View Source ](external_link) (macro)

Directly attach a `before_action` function to the query.

This function will be called by [`Ash.Query.before_action/2`](external_link), with an additional `context` argument.

##  __ Example
    
    
    prepare before_action(fn query, _context ->
      Logger.debug("About to execute query for #{query.action.name} on #{inspect(query.resource)}")
    
      query
    end)

__ Link to this function

# build(options)

[ __ View Source ](external_link)
    
    
    @spec build([Keyword.t](external_link)()) :: [Ash.Resource.Preparation.ref](external_link)()

Passes the given keyword list to [`Ash.Query.build/2`](external_link) with the query being prepared.

This allows declaring simple query modifications in-line.

To see the available options, see [`Ash.Query.build/2`](external_link)

##  __ Examples
    
    
    prepare build(sort: [song_rank: :desc], limit: 10)
    prepare build(load: [:friends])

__ Link to this function

# set_context(context)

[ __ View Source ](external_link)
    
    
    @spec set_context(context :: [map](external_link)() | [mfa](external_link)()) :: [Ash.Resource.Preparation.ref](external_link)()

Merges the given query context.

If an MFA is provided, it will be called with the changeset. The MFA should return `{:ok, context_to_be_merged}` or `{:error, term}`

##  __ Examples
    
    
    change set_context(%{something_used_internally: true})
    change set_context({MyApp.Context, :set_context, []})
