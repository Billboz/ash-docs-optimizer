# Spark.Options — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Options (spark v2.2.24)
  - __ Schema Options
  - __ Types
  - __ Example
  - __ Nested Option Items
    - __ Example
  - __ Validating Schemas
    - __ Example
- __ Summary
  - Types
  - Functions
- __ Types
- option_schema()
- schema()
- t()
- type()
- __ Functions
- docs(schema, options \\\ [])
  - __ Options
- merge(left, right, section \\\ nil)
- new!(schema)
- option_typespec(schema)
  - __ Usage
  - __ Example
- validate(options, schema)
- validate!(options, schema)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Options (spark v2.2.24)

Provides a standard API to handle keyword-list-based options.

This module began its life as a vendored form of [`NimbleOptions`](external_link). We had various features to add to it, and the spirit of nimble options is to be as lightweight as possible. With that in mind, we were advised to vendor [`NimbleOptions`](external_link). We would like to thank the authors of [`NimbleOptions`](external_link) for their excellent work, and their blessing to transplant their work into Spark.

[`Spark.Options`](external_link) allows developers to create schemas using a pre-defined set of options and types. The main benefits are:

  * A single unified way to define simple static options
  * Config validation against schemas
  * Automatic doc generation



Spark also uses this to power entity and section schemas.

##  __ Schema Options

These are the options supported in a _schema_. They are what defines the validation for the items in the given schema.

  * `:type` \- The type of the option item. The default value is `:any`.

  * `:required` ([`boolean/0`](external_link)) - Defines if the option item is required. The default value is `false`.

  * `:default` ([`term/0`](external_link)) - The default value for the option item if that option is not specified. This value is _validated_ according to the given `:type`. This means that you cannot have, for example, `type: :integer` and use `default: "a string"`.

  * `:keys` ([`keyword/0`](external_link)) - Available for types `:keyword_list`, `:non_empty_keyword_list`, and `:map`, it defines which set of keys are accepted for the option item. The value of the `:keys` option is a schema itself. For example: `keys: [foo: [type: :atom]]`. Use `:*` as the key to allow multiple arbitrary keys and specify their schema: `keys: [*: [type: :integer]]`.

  * `:deprecated` ([`String.t/0`](external_link)) - Defines a message to indicate that the option item is deprecated. The message will be displayed as a warning when passing the item.

  * `:private?` ([`boolean/0`](external_link)) - Defines an option as private, used with [`Spark.Options.Validator`](external_link) The default value is `false`.

  * `:hide` (one or a list of [`atom/0`](external_link)) - A list of keys that should be hidden when generating documentation

  * `:as` ([`atom/0`](external_link)) - A name to remap the option to when used in DSLs. Not supported in regular option parsing

  * `:snippet` ([`String.t/0`](external_link)) - A snippet to use when autocompleting DSLs. Not supported in regular option parsing

  * `:links` ([`term/0`](external_link)) - A keyword list of links to include in DSL documentation for the option item.

  * `:doc` ([`String.t/0`](external_link) or `false`) - The documentation for the option item.

  * `:subsection` ([`String.t/0`](external_link)) - The title of separate subsection of the options' documentation

  * `:type_doc` ([`String.t/0`](external_link) or `false`) - The type doc to use _in the documentation_ for the option item. If `false`, no type documentation is added to the item. If it's a string, it can be anything. For example, you can use `"a list of PIDs"`, or you can use a typespec reference that ExDoc can link to the type definition, such as `"`t:binary/0`"`. You can use Markdown in this documentation. If the `:type_doc` option is not present, Spark.Options tries to produce a type documentation automatically if it can do it unambiguously. For example, if `type: :integer`, Spark.Options will use [`integer/0`](external_link) as the auto-generated type doc.

  * `:type_spec` ([`Macro.t/0`](external_link)) - The quoted spec to use _in the typespec_ for the option item. You should use this when the auto-generated spec is not specific enough. For example, if you are performing custom validation on an option (with the `{:custom, ...}` type), then the generated type spec for that option will always be [`term/0`](external_link), but you can use this option to customize that. The value for this option **must** be a quoted Elixir term. For example, if you have an `:exception` option that is validated with a `{:custom, ...}` type (based on [`is_exception/1`](external_link)), you can override the type spec for that option to be `quote(do: Exception.t())`. _Available since v1.1.0_.




##  __ Types

  * `:any` \- Any type.

  * `:keyword_list` \- A keyword list.

  * `:non_empty_keyword_list` \- A non-empty keyword list.

  * `:map` \- A map consisting of `:atom` keys. Shorthand for `{:map, :atom, :any}`. Keys can be specified using the `keys` option.

  * `{:map, key_type, value_type}` \- A map consisting of `key_type` keys and `value_type` values.

  * `:atom` \- An atom.

  * `:string` \- A string.

  * `:boolean` \- A boolean.

  * `:integer` \- An integer.

  * `:non_neg_integer` \- A non-negative integer.

  * `:pos_integer` \- A positive integer.

  * `:float` \- A float.

  * `:timeout` \- A non-negative integer or the atom `:infinity`.

  * `:pid` \- A PID (process identifier).

  * `:reference` \- A reference (see [`reference/0`](external_link)).

  * `nil` \- The value `nil` itself. Available since v1.0.0.

  * `:mfa` \- A named function in the format `{module, function, arity}` where `arity` is a list of arguments. For example, `{MyModule, :my_fun, [arg1, arg2]}`.

  * `:mod_arg` \- A module along with arguments, such as `{MyModule, arguments}`. Usually used for process initialization using `start_link` and similar. The second element of the tuple can be any term.

  * `:fun` \- Any function.

  * `{:fun, arity}` \- Any function with the specified arity.

  * `{:fun, args_types}` \- A function with the specified arguments.

  * `{:fun, args_types, return_type}` \- A function with the specified arguments and return type.

  * `{:in, choices}` or `{:one_of, choices}` \- A value that is a member of one of the `choices`. `choices` should be a list of terms or a [`Range`](external_link). The value is an element in said list of terms, that is, `value in choices` is `true`.

  * `{:struct, struct_name}` \- An instance of the struct type given.

  * `:struct` \- An instance of any struct

  * `{:tagged_tuple, tag, inner_type}` \- maps to `{tag, type}`

  * `{:spark_behaviour, behaviour}` \- expects a module that implements the given behaviour, and can be specified with options, i.e `mod` or `{mod, [opt: :val]}`

  * `{:spark_behaviour, behaviour, builtin_module}` \- Same as the above, but also accepts a `builtin_module`. The builtin_module is used to provide additional options for the elixir_sense plugin.

  * `{:spark_function_behaviour, behaviour, {function_mod, arity}}` \- expects a module that implements the given behaviour, and can be specified with options, i.e `mod` or `{mod, [opt: :val]}`, that also has a special module that supports being provided an anonymous function or MFA as the `:fun` option.

  * `{:spark_function_behaviour, behaviour, builtin_module, {function_mod, arity}}` \- Same as the above, but also accepts a `builtin_module`. The builtin_module is used to provide additional options for the elixir_sense plugin.

  * `{:behaviour, behaviour}` \- expects a module that implements a given behaviour.

  * `{:protocol, protocol}` \- expects a value for which the protocol is implemented.

  * `{:spark, dsl_module}` \- expects a module that is a [`Spark.Dsl`](external_link)

  * `{:mfa_or_fun, arity}` \- expects a function or MFA of a corresponding arity.

  * `{:spark_type, module, builtin_function}` \- a behaviour that defines `builtin_function/0` that returns a list of atoms that map to built in variations of that thing.

  * `{:spark_type, module, builtin_function, templates}` \- same as the above, but includes additional templates for elixir_sense autocomplete

  * `:literal` -> any literal value. Maps to `:any`, but is used for documentation.

  * `{:literal, value}` -> exactly the value specified.

  * `:quoted` -> retains the quoted value of the code provided to the option

  * `{:wrap_list, type}` -> Allows a single value or a list of values.

  * `{:custom, mod, fun, args}` \- A custom type. The related value must be validated by `mod.fun(values, ...args)`. The function should return `{:ok, value}` or `{:error, message}`.

  * `{:or, subtypes}` \- A value that matches one of the given `subtypes`. The value is matched against the subtypes in the order specified in the list of `subtypes`. If one of the subtypes matches and **updates** (casts) the given value, the updated value is used. For example: `{:or, [:string, :boolean, {:fun, 2}]}`. If one of the subtypes is a keyword list or map, you won't be able to pass `:keys` directly. For this reason, `:keyword_list`, `:non_empty_keyword_list`, and `:map` are special cased and can be used as subtypes with `{:keyword_list, keys}`, `{:non_empty_keyword_list, keys}` or `{:map, keys}`. For example, a type such as `{:or, [:boolean, keyword_list: [enabled: [type: :boolean]]]}` would match either a boolean or a keyword list with the `:enabled` boolean option in it.

  * `{:list, subtype}` \- A list where all elements match `subtype`. `subtype` can be any of the accepted types listed here. Empty lists are allowed. The resulting validated list contains the validated (and possibly updated) elements, each as returned after validation through `subtype`. For example, if `subtype` is a custom validator function that returns an updated value, then that updated value is used in the resulting list. Validation fails at the _first_ element that is invalid according to `subtype`. If `subtype` is a keyword list or map, you won't be able to pass `:keys` directly. For this reason, `:keyword_list`, `:non_empty_keyword_list`, and `:map` are special cased and can be used as the subtype by using `{:keyword_list, keys}`, `{:non_empty_keyword_list, keys}` or `{:keyword_list, keys}`. For example, a type such as `{:list, {:keyword_list, enabled: [type: :boolean]}}` would a _list of keyword lists_ , where each keyword list in the list could have the `:enabled` boolean option in it.

  * `{:tuple, list_of_subtypes}` \- A tuple as described by `tuple_of_subtypes`. `list_of_subtypes` must be a list with the same length as the expected tuple. Each of the list's elements must be a subtype that should match the given element in that same position. For example, to describe 3-element tuples with an atom, a string, and a list of integers you would use the type `{:tuple, [:atom, :string, {:list, :integer}]}`. _Available since v0.4.1_.




##  __ Example
    
    
    iex> schema = [
    ...>   producer: [
    ...>     type: :non_empty_keyword_list,
    ...>     required: true,
    ...>     keys: [
    ...>       module: [required: true, type: :mod_arg],
    ...>       concurrency: [
    ...>         type: :pos_integer,
    ...>       ]
    ...>     ]
    ...>   ]
    ...> ]
    ...>
    ...> config = [
    ...>   producer: [
    ...>     concurrency: 1,
    ...>   ]
    ...> ]
    ...>
    ...> {:error, %Spark.Options.ValidationError{} = error} = Spark.Options.validate(config, schema)
    ...> Exception.message(error)
    "required :module option not found, received options: [:concurrency] (in options [:producer])"

##  __ Nested Option Items

[`Spark.Options`](external_link) allows option items to be nested so you can recursively validate any item down the options tree.

###  __ Example
    
    
    iex> schema = [
    ...>   producer: [
    ...>     required: true,
    ...>     type: :non_empty_keyword_list,
    ...>     keys: [
    ...>       rate_limiting: [
    ...>         type: :non_empty_keyword_list,
    ...>         keys: [
    ...>           interval: [required: true, type: :pos_integer]
    ...>         ]
    ...>       ]
    ...>     ]
    ...>   ]
    ...> ]
    ...>
    ...> config = [
    ...>   producer: [
    ...>     rate_limiting: [
    ...>       interval: :oops!
    ...>     ]
    ...>   ]
    ...> ]
    ...>
    ...> {:error, %Spark.Options.ValidationError{} = error} = Spark.Options.validate(config, schema)
    ...> Exception.message(error)
    "invalid value for :interval option: expected positive integer, got: :oops! (in options [:producer, :rate_limiting])"

##  __ Validating Schemas

Each time `validate/2` is called, the given schema itself will be validated before validating the options.

In most applications the schema will never change but validating options will be done repeatedly.

To avoid the extra cost of validating the schema, it is possible to validate the schema once, and then use that valid schema directly. This is done by using the `new!/1` function first, and then passing the returned schema to `validate/2`.

> #### Create the Schema at Compile Time
> 
> If your option schema doesn't include any runtime-only terms in it (such as anonymous functions), you can call `new!/1` to validate the schema and returned a _compiled_ schema **at compile time**. This is an efficient way to avoid doing any unnecessary work at runtime. See the example below for more information.

###  __ Example
    
    
    iex> raw_schema = [
    ...>   hostname: [
    ...>     required: true,
    ...>     type: :string
    ...>   ]
    ...> ]
    ...>
    ...> schema = Spark.Options.new!(raw_schema)
    ...> Spark.Options.validate([hostname: "elixir-lang.org"], schema)
    {:ok, hostname: "elixir-lang.org"}

Calling `new!/1` from a function that receives options will still validate the schema each time that function is called. Declaring the schema as a module attribute is supported:
    
    
    @options_schema Spark.Options.new!([...])

This schema will be validated at compile time. Calling `docs/1` on that schema is also supported.

#  __ Summary

##  Types

option_schema()

schema()

A schema.

t()

The [`Spark.Options`](external_link) struct embedding a validated schema.

type()

##  Functions

docs(schema, options \\\ [])

Returns documentation for the given schema.

merge(left, right, section \\\ nil)

Merges two schemas, and sets the `subsection` option on all options on the right side.

new!(schema)

Validates the given `schema` and returns a wrapped schema to be used with `validate/2`.

option_typespec(schema)

Returns the quoted typespec for any option described by the given schema.

validate(options, schema)

Validates the given `options` with the given `schema`.

validate!(options, schema)

Validates the given `options` with the given `schema` and raises if they're not valid.

#  __ Types

__ Link to this type

# option_schema()

[ __ View Source ](external_link)
    
    
    @type option_schema() :: [
      type: type(),
      required: [boolean](external_link)(),
      default: [any](external_link)(),
      keys: schema(),
      private?: [boolean](external_link)(),
      deprecated: [String.t](external_link)(),
      doc: [String.t](external_link)(),
      subsection: [String.t](external_link)() | nil,
      type_doc: false | [String.t](external_link)(),
      rename_to: [atom](external_link)(),
      hide: [[atom](external_link)()],
      as: [atom](external_link)(),
      snippet: [String.t](external_link)(),
      links: [keyword](external_link)()
    ]

__ Link to this type

# schema()

[ __ View Source ](external_link)
    
    
    @type schema() :: [{[atom](external_link)(), option_schema()}]

A schema.

See the module documentation for more information.

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Spark.Options{schema: schema()}

The [`Spark.Options`](external_link) struct embedding a validated schema.

See the _Validating Schemas_ section in the module documentation.

__ Link to this type

# type()

[ __ View Source ](external_link)
    
    
    @type type() ::
      :any
      | :keyword_list
      | :non_empty_keyword_list
      | :map
      | {:map, key_type :: type(), value_type :: type()}
      | :atom
      | :string
      | :boolean
      | :integer
      | :non_neg_integer
      | :pos_integer
      | :float
      | :timeout
      | :pid
      | :reference
      | :mfa
      | :mod_arg
      | :fun
      | {:fun, arity :: [non_neg_integer](external_link)()}
      | {:fun, [type()]}
      | {:fun, [type()], type()}
      | {:in, [[any](external_link)()] | [Range.t](external_link)()}
      | {:or,
         [
           type()
           | {:keyword_list, schema()}
           | {:non_empty_keyword_list, schema()}
           | {:map, schema()}
         ]}
      | {:list,
         type()
         | {:keyword_list, schema()}
         | {:non_empty_keyword_list, schema()}
         | {:map, schema()}}
      | {:tuple, [type()]}
      | {:one_of, [[any](external_link)()] | [Range.t](external_link)()}
      | {:tagged_tuple, tag :: [atom](external_link)(), inner_type :: type()}
      | {:spark_behaviour, [module](external_link)()}
      | {:spark_behaviour, [module](external_link)(), [module](external_link)()}
      | {:spark_function_behaviour, [module](external_link)(), {[module](external_link)(), [integer](external_link)()}}
      | {:spark_function_behaviour, [module](external_link)(), [module](external_link)(), {[module](external_link)(), [integer](external_link)()}}
      | {:behaviour, [module](external_link)()}
      | {:protocol, [module](external_link)()}
      | {:spark, [module](external_link)()}
      | {:mfa_or_fun, [non_neg_integer](external_link)()}
      | {:spark_type, [module](external_link)(), builtin_function :: [atom](external_link)()}
      | {:spark_type, [module](external_link)(), builtin_function :: [atom](external_link)(),
         templates :: [[String.t](external_link)()]}
      | {:struct, [module](external_link)()}
      | {:wrap_list, type()}
      | :literal
      | {:literal, [any](external_link)()}
      | :quoted
      | {:custom, [module](external_link)(), function :: [atom](external_link)(), args :: [[any](external_link)()]}

#  __ Functions

__ Link to this function

# docs(schema, options \\\ [])

[ __ View Source ](external_link)
    
    
    @spec docs(
      schema() | t(),
      [keyword](external_link)()
    ) :: [String.t](external_link)()

Returns documentation for the given schema.

You can use this to inject documentation in your docstrings. For example, say you have your schema in a module attribute:
    
    
    @options_schema [...]

With this, you can use `docs/1` to inject documentation:
    
    
    @doc "Supported options:\n#{Spark.Options.docs(@options_schema)}"

##  __ Options

  * `:nest_level` \- an integer deciding the "nest level" of the generated docs. This is useful when, for example, you use `docs/2` inside the `:doc` option of another schema. For example, if you have the following nested schema:
    
        nested_schema = [
      allowed_messages: [type: :pos_integer, doc: "Allowed messages."],
      interval: [type: :pos_integer, doc: "Interval."]
    ]

then you can document it inside another schema with its nesting level increased:
    
        schema = [
      producer: [
        type: {:or, [:string, keyword_list: nested_schema]},
        doc:
          "Either a string or a keyword list with the following keys:\n\n" <>
            Spark.Options.docs(nested_schema, nest_level: 1)
      ],
      other_key: [type: :string]
    ]




__ Link to this function

# merge(left, right, section \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec merge(schema(), schema(), [String.t](external_link)() | nil) :: schema()

Merges two schemas, and sets the `subsection` option on all options on the right side.

__ Link to this function

# new!(schema)

[ __ View Source ](external_link)
    
    
    @spec new!(schema()) :: t()

Validates the given `schema` and returns a wrapped schema to be used with `validate/2`.

If the given schema is not valid, raises a [`Spark.Options.ValidationError`](external_link).

__ Link to this function

# option_typespec(schema)

[ __ View Source ](external_link)
    
    
    @spec option_typespec(schema() | t()) :: [Macro.t](external_link)()

Returns the quoted typespec for any option described by the given schema.

The returned quoted code represents the **type union** for all possible keys in the schema, alongside their type. Nested keyword lists are spec'ed as [`keyword/0`](external_link).

##  __ Usage

Because of how typespecs are treated by the Elixir compiler, you have to use [`unquote/1`](external_link) on the return value of this function to use it in a typespec:
    
    
    @type option() :: unquote(Spark.Options.option_typespec(my_schema))

This function returns the type union for a single option: to give you flexibility to combine it and use it in your own typespecs. For example, if you only validate part of the options through Spark.Options, you could write a spec like this:
    
    
    @type my_option() ::
            {:my_opt1, integer()}
            | {:my_opt2, boolean()}
            | unquote(Spark.Options.option_typespec(my_schema))

If you want to spec a whole schema, you could write something like this:
    
    
    @type options() :: [unquote(Spark.Options.option_typespec(my_schema))]

##  __ Example
    
    
    schema = [
      int: [type: :integer],
      number: [type: {:or, [:integer, :float]}]
    ]
    
    @type option() :: unquote(Spark.Options.option_typespec(schema))

The code above would essentially compile to:
    
    
    @type option() :: {:int, integer()} | {:number, integer() | float()}

__ Link to this function

# validate(options, schema)

[ __ View Source ](external_link)
    
    
    @spec validate(
      [keyword](external_link)(),
      schema() | t()
    ) ::
      {:ok, validated_options :: [keyword](external_link)()}
      | {:error, [Spark.Options.ValidationError.t](external_link)()}

Validates the given `options` with the given `schema`.

See the module documentation for what a `schema` is.

If the validation is successful, this function returns `{:ok, validated_options}` where `validated_options` is a keyword list. If the validation fails, this function returns `{:error, validation_error}` where `validation_error` is a [`Spark.Options.ValidationError`](external_link) struct explaining what's wrong with the options. You can use [`raise/1`](external_link) with that struct or [`Exception.message/1`](external_link) to turn it into a string.

__ Link to this function

# validate!(options, schema)

[ __ View Source ](external_link)
    
    
    @spec validate!(
      [keyword](external_link)(),
      schema() | t()
    ) :: validated_options :: [keyword](external_link)()

Validates the given `options` with the given `schema` and raises if they're not valid.

This function behaves exactly like `validate/2`, but returns the options directly if they're valid or raises a [`Spark.Options.ValidationError`](external_link) exception otherwise.
