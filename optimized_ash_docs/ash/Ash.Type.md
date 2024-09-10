# Ash.Type — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type behaviour (ash v3.4.8)
  - __ Built in types
  - __ Lists/Arrays
  - __ Defining Custom Types
    - __ Short names
  - __ Composite Types
  - __ Constraints
    - __ Attribute example
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- constraint_error()
- constraints()
- error()
- load_context()
- merge_load_context()
- rewrite()
- rewrite_data()
- t()
- __ Callbacks
- apply_atomic_constraints(new_value, constraints)
- apply_atomic_constraints_array(new_value, constraints)
- apply_constraints(term, constraints)
- apply_constraints_array(list, constraints)
- array_constraints()
- can_load?(constraints)
- cast_atomic(new_value, constraints)
- cast_atomic_array(new_value, constraints)
- cast_in_query?(constraints)
- cast_input(term, constraints)
- cast_input_array(list, constraints)
- cast_stored(term, constraints)
- cast_stored_array(list, constraints)
- composite?(constraints)
- composite_types(constraints)
- constraints()
- custom_apply_constraints_array?()
- describe(constraints)
- dump_to_embedded(term, constraints)
- dump_to_embedded_array(list, constraints)
- dump_to_native(term, constraints)
- dump_to_native_array(list, constraints)
- ecto_type()
- embedded?()
- equal?(term, term)
- evaluate_operator(term)
- generator(constraints)
- get_rewrites(merged_load, calculation, path, constraints)
- handle_change(old_term, new_term, constraints)
- handle_change_array(old_term, new_term, constraints)
- handle_change_array?()
- include_source(constraints, t)
- init(constraints)
- load(values, load, constraints, context)
- loaded?(value, path_to_load, constraints, opts)
- matches_type?(term, constraints)
- merge_load(left, right, constraints, context)
- operator_overloads()
- prepare_change(old_term, new_uncasted_term, constraints)
- prepare_change_array(old_term, new_uncasted_term, constraints)
- prepare_change_array?()
- rewrite(value, list, constraints)
- simple_equality?()
- storage_type()
- storage_type(constraints)
- __ Functions
- apply_atomic_constraints(type, term, constraints)
- apply_constraints(type, term, constraints)
- array_constraints(type)
- ash_type?(module)
- builtin?(type)
- can_load?(type, constraints \\\ [])
- cast_atomic(type, term, constraints)
- cast_in_query?(type, constraints \\\ [])
- cast_input(type, term, constraints \\\ nil)
- cast_stored(type, term, constraints \\\ [])
- composite?(type, constraints)
- composite_types(type, constraints)
- constraints(type)
- describe(type, constraints)
- determine_types(types, values)
- dump_to_embedded(type, term, constraints \\\ [])
- dump_to_native(type, term, constraints \\\ [])
- ecto_type(type)
- embedded_type?(type)
- equal?(type, left, right)
- generator(type, constraints)
- get_rewrites(type, merged_load, calculation, path, constraints)
- get_type(value)
- handle_change(type, old_value, new_value, constraints)
- handle_change_array?(type)
- include_source(type, changeset_or_query, constraints)
- init(type, constraints)
- load(type, value, loads, constraints, context)
- loaded?(type, values, load, constraints, opts \\\ [])
- matches_type?(type, value, constraints \\\ [])
- merge_load(type, left, right, constraints, context)
- prepare_change(type, old_value, new_value, constraints)
- prepare_change_array?(type)
- rewrite(type, value, rewrites, constraints)
- short_names()
- simple_equality?(type)
- storage_type(type, constraints \\\ [])

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type behaviour (ash v3.4.8)

The [`Ash.Type`](external_link) behaviour is used to define a value type in Ash.

##  __ Built in types

  * `:map` \- [`Ash.Type.Map`](external_link)
  * `:keyword` \- [`Ash.Type.Keyword`](external_link)
  * `:term` \- [`Ash.Type.Term`](external_link)
  * `:atom` \- [`Ash.Type.Atom`](external_link)
  * `:string` \- [`Ash.Type.String`](external_link)
  * `:integer` \- [`Ash.Type.Integer`](external_link)
  * `:file` \- [`Ash.Type.File`](external_link)
  * `:float` \- [`Ash.Type.Float`](external_link)
  * `:duration_name` \- [`Ash.Type.DurationName`](external_link)
  * `:function` \- [`Ash.Type.Function`](external_link)
  * `:boolean` \- [`Ash.Type.Boolean`](external_link)
  * `:struct` \- [`Ash.Type.Struct`](external_link)
  * `:uuid` \- [`Ash.Type.UUID`](external_link)
  * `:uuid_v7` \- [`Ash.Type.UUIDv7`](external_link)
  * `:binary` \- [`Ash.Type.Binary`](external_link)
  * `:date` \- [`Ash.Type.Date`](external_link)
  * `:time` \- [`Ash.Type.Time`](external_link)
  * `:decimal` \- [`Ash.Type.Decimal`](external_link)
  * `:ci_string` \- [`Ash.Type.CiString`](external_link)
  * `:naive_datetime` \- [`Ash.Type.NaiveDatetime`](external_link)
  * `:utc_datetime` \- [`Ash.Type.UtcDatetime`](external_link)
  * `:utc_datetime_usec` \- [`Ash.Type.UtcDatetimeUsec`](external_link)
  * `:datetime` \- [`Ash.Type.DateTime`](external_link)
  * `:url_encoded_binary` \- [`Ash.Type.UrlEncodedBinary`](external_link)
  * `:union` \- [`Ash.Type.Union`](external_link)
  * `:module` \- [`Ash.Type.Module`](external_link)
  * `:vector` \- [`Ash.Type.Vector`](external_link)



##  __ Lists/Arrays

To specify a list of values, use `{:array, Type}`. Arrays are special, and have special constraints:

  * `:items` ([`term/0`](external_link)) - Constraints for the elements of the list. See the contained type's docs for more.

  * `:min_length` ([`non_neg_integer/0`](external_link)) - A minimum length for the items.

  * `:max_length` ([`non_neg_integer/0`](external_link)) - A maximum length for the items.

  * `:nil_items?` ([`boolean/0`](external_link)) - Whether or not the list can contain nil items. The default value is `false`.

  * `:remove_nil_items?` ([`boolean/0`](external_link)) - Whether or not to remove the nil items from the list instead of adding errors. The default value is `false`.

  * `:empty_values` (list of [`term/0`](external_link)) - A set of values that, if encountered, will be considered an empty list. The default value is `[""]`.




##  __ Defining Custom Types

Generally you add `use Ash.Type` to your module (it is possible to add `@behaviour Ash.Type` and define everything yourself, but this is more work and error-prone).

Overriding the `{:array, type}` behaviour. By defining the `*_array` versions of `cast_input`, `cast_stored`, `dump_to_native` and `apply_constraints`, you can override how your type behaves as a collection. This is how the features of embedded resources are implemented. No need to implement them unless you wish to override the default behaviour. Your type is responsible for handling nil values in each callback as well.

Simple example of a float custom type
    
    
    defmodule GenTracker.AshFloat do
      use Ash.Type
    
      @impl Ash.Type
      def storage_type(_), do: :float
    
      @impl Ash.Type
      def cast_input(nil, _), do: {:ok, nil}
      def cast_input(value, _) do
        Ecto.Type.cast(:float, value)
      end
    
      @impl Ash.Type
      def cast_stored(nil, _), do: {:ok, nil}
      def cast_stored(value, _) do
        Ecto.Type.load(:float, value)
      end
    
      @impl Ash.Type
      def dump_to_native(nil, _), do: {:ok, nil}
      def dump_to_native(value, _) do
        Ecto.Type.dump(:float, value)
      end
    end

All the Ash built-in types are implemented with `use Ash.Type` so they are good examples to look at to create your own [`Ash.Type`](external_link).

###  __ Short names

You can define short `:atom_names` for your custom types by adding them to your Ash configuration:
    
    
    config :ash, :custom_types, [ash_float: GenTracker.AshFloat]

Doing this will require a recompilation of the `:ash` dependency which can be triggered by calling:
    
    
    $ mix deps.compile ash --force
    

##  __ Composite Types

Composite types are composite _in the data layer_. Many data layers do not support this, but some (like AshPostgres), do. To define a composite type, the following things should be true:

  1. A casted value should be a map or struct, for example for a point: `%{x: 1, y: 2}`
  2. The data layer must support composite types, and the data layer representation will be a tuple, i.e `{1, 2}`
  3. Define `def composite?(_), do: true` in your composite type
  4. Define the type & constraints of each item in the tuple, and its name in the map representation: `def composite_types(_), do: [{:x, :integer, []}, {:y, :integer, []}]`. You can also define a storage key for each item in the tuple, if the underlying type implementation has a different reference for an item, i.e `def composite_types(_), do: [{:x, :x_coord, :integer, []}, {:y, :y_coord, :integer, []}]`



With the above implemented, your composite type can be used in expressions, for example:
    
    
    Ash.Query.filter(expr(coordinates[:x] == 1))k

And you can also _construct_ composite types in expressions, for example:
    
    
    calculate :coordinates, :composite_point, expr(composite_type(%{x: some_value, y: some_other_value}, Point))

##  __ Constraints

Constraints are a way of validating an input type. This validation can be used in both attributes and arguments. The kinds of constraints you can apply depends on the type of data. You can find all types in [`Ash.Type`](external_link) . Each type has its own page on which the available constraints are listed. For example in [`Ash.Type.String`](external_link) you can find 5 constraints:

  * `:max_length`
  * `:min_length`
  * `:match`
  * `:trim?`
  * `:allow_empty?`



You can also discover these constraints from iex:
    
    
    $ iex -S mix
    iex(1)> Ash.Type.String.constraints
    [
      max_length: [
        type: :non_neg_integer,
        doc: "Enforces a maximum length on the value"
      ],
      min_length: [
        type: :non_neg_integer,
        doc: "Enforces a minimum length on the value"
      ],
      match: [
        type: {:custom, Ash.Type.String, :match, []},
        doc: "Enforces that the string matches a passed in regex"
      ],
      trim?: [type: :boolean, doc: "Trims the value.", default: true],
      allow_empty?: [
        type: :boolean,
        doc: "If false, the value is set to `nil` if it's empty.",
        default: false
      ]
    ]
    

###  __ Attribute example

To show how constraints can be used in a attribute, here is an example attribute describing a username:
    
    
    defmodule MyProject.MyDomain.Account do
      # ...
    
      code_interface do
        define :create, action: :create
      end
    
      actions do
        default [:create, :read, :update, :destroy]
      end
    
      attributes do
        uuid_primary_key :id
    
        attribute :username, :string do
          constraints [
            max_length: 20,
            min_length: 3,
            match: ~r/^[a-z_-]*$/,
            trim?: true,
            allow_empty?: false
          ]
        end
      end
    
      # ...
    end

If, when creating or updating this attribute, one of the constraints are not met, an error will be given telling you which constraint was broken. See below:
    
    
    iex(1)> MyProject.MyDomain.Account.create!(%{username: "hi"})
    
    ** (Ash.Error.Invalid) Invalid Error
    
    * Invalid value provided for username: length must be greater than or equal to 3.
    
    "hi"
    
    iex(2)> MyProject.MyDomain.Account.create!(%{username: "Hello there this is a long string"})
    
    ** (Ash.Error.Invalid) Invalid Error
    
    * Invalid value provided for username: length must be less than or equal to 20.
    
    "Hello there this is a long string"
    
    iex(3)> MyProject.MyDomain.Account.create!(%{username: "hello there"})
    ** (Ash.Error.Invalid) Invalid Error
    
    * Invalid value provided for username: must match the pattern ~r/^[a-z_-]*$/.
    
    "hello there"
    
    iex(4)> MyProject.MyDomain.Account.create!(%{username: ""})
    ** (Ash.Error.Invalid) Invalid Error
    
    * attribute title is required

It will give you the resource as usual on successful requests:
    
    
    iex(5)> MyProject.MyDomain.Account.create!(%{username: "hello"})
    #MyProject.MyDomain.Account<
      __meta__: #Ecto.Schema.Metadata<:loaded, "account">,
      id: "7ba467dd-277c-4916-88ae-f62c93fee7a3",
      username: "hello",
      ...
    >

#  __ Summary

##  Types

constraint_error()

constraints()

error()

load_context()

merge_load_context()

rewrite()

rewrite_data()

t()

##  Callbacks

apply_atomic_constraints(new_value, constraints)

apply_atomic_constraints_array(new_value, constraints)

apply_constraints(term, constraints)

apply_constraints_array(list, constraints)

array_constraints()

can_load?(constraints)

cast_atomic(new_value, constraints)

cast_atomic_array(new_value, constraints)

cast_in_query?(constraints)

cast_input(term, constraints)

cast_input_array(list, constraints)

cast_stored(term, constraints)

cast_stored_array(list, constraints)

composite?(constraints)

composite_types(constraints)

constraints()

custom_apply_constraints_array?()

describe(constraints)

dump_to_embedded(term, constraints)

dump_to_embedded_array(list, constraints)

dump_to_native(term, constraints)

dump_to_native_array(list, constraints)

ecto_type()

embedded?()

equal?(term, term)

evaluate_operator(term)

The implementation for any overloaded implementations.

generator(constraints)

get_rewrites(merged_load, calculation, path, constraints)

handle_change(old_term, new_term, constraints)

handle_change_array(old_term, new_term, constraints)

handle_change_array?()

include_source(constraints, t)

init(constraints)

Useful for typed data layers (like ash_postgres) to instruct them not to attempt to cast input values.

load(values, load, constraints, context)

loaded?(value, path_to_load, constraints, opts)

matches_type?(term, constraints)

merge_load(left, right, constraints, context)

operator_overloads()

A map of operators with overloaded implementations.

prepare_change(old_term, new_uncasted_term, constraints)

prepare_change_array(old_term, new_uncasted_term, constraints)

prepare_change_array?()

rewrite(value, list, constraints)

simple_equality?()

storage_type()

storage_type(constraints)

##  Functions

apply_atomic_constraints(type, term, constraints)

apply_constraints(type, term, constraints)

Confirms if a casted value matches the provided constraints.

array_constraints(type)

Gets the array constraints for a type

ash_type?(module)

Returns true if the value is a builtin type or adopts the [`Ash.Type`](external_link) behaviour

builtin?(type)

Returns true if the type is an ash builtin type

can_load?(type, constraints \\\ [])

Returns true if the type supports nested loads

cast_atomic(type, term, constraints)

cast_in_query?(type, constraints \\\ [])

Returns `true` if the type should be cast in underlying queries

cast_input(type, term, constraints \\\ nil)

Casts input (e.g. unknown) data to an instance of the type, or errors

cast_stored(type, term, constraints \\\ [])

Casts a value from the data store to an instance of the type, or errors

composite?(type, constraints)

Returns true if the type is a composite type

composite_types(type, constraints)

Returns the wrapped composite types

constraints(type)

Returns the constraint schema for a type

describe(type, constraints)

Calls the type's `describe` function with the given constraints

determine_types(types, values)

Determine types for a given function or operator.

dump_to_embedded(type, term, constraints \\\ [])

Casts a value from the Elixir type to a value that can be embedded in another data structure.

dump_to_native(type, term, constraints \\\ [])

Casts a value from the Elixir type to a value that the data store can persist

ecto_type(type)

Returns the ecto compatible type for an Ash.Type.

embedded_type?(type)

Returns true if the type is an embedded resource

equal?(type, left, right)

Determines if two values of a given type are equal.

generator(type, constraints)

Returns the StreamData generator for a given type

get_rewrites(type, merged_load, calculation, path, constraints)

Gets the load rewrites for a given type, load, calculation and path.

get_type(value)

Gets the type module for a given short name or module

handle_change(type, old_value, new_value, constraints)

Process the old casted values alongside the new casted values.

handle_change_array?(type)

Handles the change of a given array of values for an attribute change. Runs after casting.

include_source(type, changeset_or_query, constraints)

init(type, constraints)

Initializes the constraints according to the underlying type

load(type, value, loads, constraints, context)

loaded?(type, values, load, constraints, opts \\\ [])

matches_type?(type, value, constraints \\\ [])

Detects as a best effort if an arbitrary value matches the given type

merge_load(type, left, right, constraints, context)

prepare_change(type, old_value, new_value, constraints)

Process the old casted values alongside the new _un_ casted values.

prepare_change_array?(type)

Prepares a given array of values for an attribute change. Runs before casting.

rewrite(type, value, rewrites, constraints)

Applies rewrites to a given value.

short_names()

Returns the list of available type short names

simple_equality?(type)

Determines if a type can be compared using the `==` operator.

storage_type(type, constraints \\\ [])

Returns the _underlying_ storage type (the underlying type of the _ecto type_ of the _ash type_)

#  __ Types

__ Link to this type

# constraint_error()

[ __ View Source ](external_link)
    
    
    @type constraint_error() :: [String.t](external_link)() | {[String.t](external_link)(), [Keyword.t](external_link)()}

__ Link to this type

# constraints()

[ __ View Source ](external_link)
    
    
    @type constraints() :: [Keyword.t](external_link)()

__ Link to this type

# error()

[ __ View Source ](external_link)
    
    
    @type error() :: :error | {:error, [String.t](external_link)() | [Keyword.t](external_link)()}

__ Link to this type

# load_context()

[ __ View Source ](external_link)
    
    
    @type load_context() :: %{
      domain: [Ash.Domain.t](external_link)(),
      actor: [term](external_link)() | nil,
      tenant: [term](external_link)(),
      tracer: [[Ash.Tracer.t](external_link)()] | [Ash.Tracer.t](external_link)() | nil,
      authorize?: [boolean](external_link)() | nil
    }

__ Link to this type

# merge_load_context()

[ __ View Source ](external_link)
    
    
    @type merge_load_context() :: %{
      domain: [Ash.Domain.t](external_link)(),
      calc_name: [term](external_link)(),
      calc_load: [term](external_link)(),
      calc_path: [[atom](external_link)()],
      reuse_values?: [boolean](external_link)(),
      strict_loads?: [boolean](external_link)(),
      initial_data: [term](external_link)(),
      relationship_path: [[atom](external_link)()],
      authorize?: [boolean](external_link)()
    }

__ Link to this type

# rewrite()

[ __ View Source ](external_link)
    
    
    @type rewrite() :: {{[[atom](external_link)()], rewrite_data(), [atom](external_link)(), [atom](external_link)()}, source :: [term](external_link)()}

__ Link to this type

# rewrite_data()

[ __ View Source ](external_link)
    
    
    @type rewrite_data() ::
      {type :: :calc | :agg, rewriting_name :: [atom](external_link)(), rewriting_load :: [atom](external_link)()}
      | {:rel, rewriting_name :: [atom](external_link)()}

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [atom](external_link)() | {:array, [atom](external_link)()}

#  __ Callbacks

__ Link to this callback

# apply_atomic_constraints(new_value, constraints)

[ __ View Source ](external_link)
    
    
    @callback apply_atomic_constraints(new_value :: [Ash.Expr.t](external_link)(), constraints()) ::
      :ok | {:ok, [Ash.Expr.t](external_link)()} | {:error, [Ash.Error.t](external_link)()}

__ Link to this callback

# apply_atomic_constraints_array(new_value, constraints)

[ __ View Source ](external_link)
    
    
    @callback apply_atomic_constraints_array(new_value :: [Ash.Expr.t](external_link)(), constraints()) ::
      :ok | {:ok, [Ash.Expr.t](external_link)()} | {:error, [Ash.Error.t](external_link)()}

__ Link to this callback

# apply_constraints(term, constraints)

[ __ View Source ](external_link)
    
    
    @callback apply_constraints([term](external_link)(), constraints()) ::
      {:ok, new_value :: [term](external_link)()}
      | :ok
      | {:error, constraint_error() | [constraint_error()]}

__ Link to this callback

# apply_constraints_array(list, constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback apply_constraints_array([[term](external_link)()], constraints()) ::
      {:ok, new_values :: [[term](external_link)()]}
      | :ok
      | {:error, constraint_error() | [constraint_error()]}

__ Link to this callback

# array_constraints()

[ __ View Source ](external_link) (optional)
    
    
    @callback array_constraints() :: constraints()

__ Link to this callback

# can_load?(constraints)

[ __ View Source ](external_link)
    
    
    @callback can_load?(constraints()) :: [boolean](external_link)()

__ Link to this callback

# cast_atomic(new_value, constraints)

[ __ View Source ](external_link)
    
    
    @callback cast_atomic(new_value :: [Ash.Expr.t](external_link)(), constraints()) ::
      {:atomic, [Ash.Expr.t](external_link)()} | {:error, [Ash.Error.t](external_link)()} | {:not_atomic, [String.t](external_link)()}

__ Link to this callback

# cast_atomic_array(new_value, constraints)

[ __ View Source ](external_link)
    
    
    @callback cast_atomic_array(new_value :: [Ash.Expr.t](external_link)(), constraints()) ::
      {:atomic, [Ash.Expr.t](external_link)()} | {:error, [Ash.Error.t](external_link)()} | {:not_atomic, [String.t](external_link)()}

__ Link to this callback

# cast_in_query?(constraints)

[ __ View Source ](external_link)
    
    
    @callback cast_in_query?(constraints()) :: [boolean](external_link)()

__ Link to this callback

# cast_input(term, constraints)

[ __ View Source ](external_link)
    
    
    @callback cast_input([term](external_link)(), constraints()) :: {:ok, [term](external_link)()} | error()

__ Link to this callback

# cast_input_array(list, constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback cast_input_array([[term](external_link)()], constraints()) :: {:ok, [[term](external_link)()]} | error()

__ Link to this callback

# cast_stored(term, constraints)

[ __ View Source ](external_link)
    
    
    @callback cast_stored([term](external_link)(), constraints()) :: {:ok, [term](external_link)()} | error()

__ Link to this callback

# cast_stored_array(list, constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback cast_stored_array([[term](external_link)()], constraints()) :: {:ok, [[term](external_link)()]} | error()

__ Link to this callback

# composite?(constraints)

[ __ View Source ](external_link)
    
    
    @callback composite?(constraints()) :: [boolean](external_link)()

__ Link to this callback

# composite_types(constraints)

[ __ View Source ](external_link)
    
    
    @callback composite_types(constraints()) :: [
      {name, type, constraints()} | {name, storage_key, type, constraints()}
    ]
    when name: [atom](external_link)(), type: t(), storage_key: [atom](external_link)()

__ Link to this callback

# constraints()

[ __ View Source ](external_link)
    
    
    @callback constraints() :: constraints()

__ Link to this callback

# custom_apply_constraints_array?()

[ __ View Source ](external_link)
    
    
    @callback custom_apply_constraints_array?() :: [boolean](external_link)()

__ Link to this callback

# describe(constraints)

[ __ View Source ](external_link)
    
    
    @callback describe(constraints()) :: [String.t](external_link)() | nil

__ Link to this callback

# dump_to_embedded(term, constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback dump_to_embedded([term](external_link)(), constraints()) :: {:ok, [term](external_link)()} | :error

__ Link to this callback

# dump_to_embedded_array(list, constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback dump_to_embedded_array([[term](external_link)()], constraints()) :: {:ok, [term](external_link)()} | error()

__ Link to this callback

# dump_to_native(term, constraints)

[ __ View Source ](external_link)
    
    
    @callback dump_to_native([term](external_link)(), constraints()) :: {:ok, [term](external_link)()} | error()

__ Link to this callback

# dump_to_native_array(list, constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback dump_to_native_array([[term](external_link)()], constraints()) :: {:ok, [term](external_link)()} | error()

__ Link to this callback

# ecto_type()

[ __ View Source ](external_link)
    
    
    @callback ecto_type() :: [Ecto.Type.t](external_link)()

__ Link to this callback

# embedded?()

[ __ View Source ](external_link)
    
    
    @callback embedded?() :: [boolean](external_link)()

__ Link to this callback

# equal?(term, term)

[ __ View Source ](external_link)
    
    
    @callback equal?([term](external_link)(), [term](external_link)()) :: [boolean](external_link)()

__ Link to this callback

# evaluate_operator(term)

[ __ View Source ](external_link) (optional)
    
    
    @callback evaluate_operator([term](external_link)()) :: {:known, [term](external_link)()} | :unknown | {:error, [term](external_link)()}

The implementation for any overloaded implementations.

__ Link to this callback

# generator(constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback generator(constraints()) :: [Enumerable.t](external_link)()

__ Link to this callback

# get_rewrites(merged_load, calculation, path, constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback get_rewrites(
      merged_load :: [term](external_link)(),
      calculation :: [Ash.Query.Calculation.t](external_link)(),
      path :: [[atom](external_link)()],
      constraints :: [Keyword.t](external_link)()
    ) :: [rewrite()]

__ Link to this callback

# handle_change(old_term, new_term, constraints)

[ __ View Source ](external_link)
    
    
    @callback handle_change(old_term :: [term](external_link)(), new_term :: [term](external_link)(), constraints()) ::
      {:ok, [term](external_link)()} | error()

__ Link to this callback

# handle_change_array(old_term, new_term, constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback handle_change_array(old_term :: [[term](external_link)()], new_term :: [[term](external_link)()], constraints()) ::
      {:ok, [term](external_link)()} | error()

__ Link to this callback

# handle_change_array?()

[ __ View Source ](external_link)
    
    
    @callback handle_change_array?() :: [boolean](external_link)()

__ Link to this callback

# include_source(constraints, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback include_source(constraints(), [Ash.Changeset.t](external_link)()) :: constraints()

__ Link to this callback

# init(constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback init(constraints()) :: {:ok, constraints()} | {:error, [Ash.Error.t](external_link)()}

Useful for typed data layers (like ash_postgres) to instruct them not to attempt to cast input values.

You generally won't need this, but it can be an escape hatch for certain cases.

__ Link to this callback

# load(values, load, constraints, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback load(
      values :: [[term](external_link)()],
      load :: [Keyword.t](external_link)(),
      constraints :: [Keyword.t](external_link)(),
      context :: load_context()
    ) :: {:ok, [[term](external_link)()]} | {:error, [Ash.Error.t](external_link)()}

__ Link to this callback

# loaded?(value, path_to_load, constraints, opts)

[ __ View Source ](external_link)
    
    
    @callback loaded?(
      value :: [term](external_link)(),
      path_to_load :: [[atom](external_link)()],
      constraints :: [Keyword.t](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [boolean](external_link)()

__ Link to this callback

# matches_type?(term, constraints)

[ __ View Source ](external_link)
    
    
    @callback matches_type?([term](external_link)(), constraints()) :: [boolean](external_link)()

__ Link to this callback

# merge_load(left, right, constraints, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback merge_load(
      left :: [term](external_link)(),
      right :: [term](external_link)(),
      constraints :: [Keyword.t](external_link)(),
      context :: merge_load_context() | nil
    ) :: {:ok, [term](external_link)()} | {:error, error()} | :error

__ Link to this callback

# operator_overloads()

[ __ View Source ](external_link) (optional)
    
    
    @callback operator_overloads() :: %{optional([atom](external_link)()) => %{optional([term](external_link)()) => [module](external_link)()}}

A map of operators with overloaded implementations.

These will only be honored if the type is placed in `config :ash, :known_types, [...Type]`

A corresponding `evaluate_operator/1` clause should match.

__ Link to this callback

# prepare_change(old_term, new_uncasted_term, constraints)

[ __ View Source ](external_link)
    
    
    @callback prepare_change(old_term :: [term](external_link)(), new_uncasted_term :: [term](external_link)(), constraints()) ::
      {:ok, [term](external_link)()} | error()

__ Link to this callback

# prepare_change_array(old_term, new_uncasted_term, constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback prepare_change_array(
      old_term :: [[term](external_link)()],
      new_uncasted_term :: [[term](external_link)()],
      constraints()
    ) :: {:ok, [term](external_link)()} | error()

__ Link to this callback

# prepare_change_array?()

[ __ View Source ](external_link)
    
    
    @callback prepare_change_array?() :: [boolean](external_link)()

__ Link to this callback

# rewrite(value, list, constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback rewrite(value :: [term](external_link)(), [rewrite()], constraints :: [Keyword.t](external_link)()) ::
      value :: [term](external_link)()

__ Link to this callback

# simple_equality?()

[ __ View Source ](external_link)
    
    
    @callback simple_equality?() :: [boolean](external_link)()

__ Link to this callback

# storage_type()

[ __ View Source ](external_link) (optional)
    
    
    @callback storage_type() :: [Ecto.Type.t](external_link)()

__ Link to this callback

# storage_type(constraints)

[ __ View Source ](external_link)
    
    
    @callback storage_type(constraints()) :: [Ecto.Type.t](external_link)()

#  __ Functions

__ Link to this function

# apply_atomic_constraints(type, term, constraints)

[ __ View Source ](external_link)
    
    
    @spec apply_atomic_constraints(t(), [term](external_link)(), constraints()) ::
      {:ok, [Ash.Expr.t](external_link)()} | {:error, [Ash.Error.t](external_link)()}

__ Link to this function

# apply_constraints(type, term, constraints)

[ __ View Source ](external_link)
    
    
    @spec apply_constraints(t(), [term](external_link)(), constraints()) ::
      {:ok, [term](external_link)()} | {:error, [String.t](external_link)()}

Confirms if a casted value matches the provided constraints.

__ Link to this function

# array_constraints(type)

[ __ View Source ](external_link)

Gets the array constraints for a type

__ Link to this function

# ash_type?(module)

[ __ View Source ](external_link)
    
    
    @spec ash_type?([term](external_link)()) :: [boolean](external_link)()

Returns true if the value is a builtin type or adopts the [`Ash.Type`](external_link) behaviour

__ Link to this function

# builtin?(type)

[ __ View Source ](external_link)

Returns true if the type is an ash builtin type

__ Link to this function

# can_load?(type, constraints \\\ [])

[ __ View Source ](external_link)
    
    
    @spec can_load?(t(), [Keyword.t](external_link)()) :: [boolean](external_link)()

Returns true if the type supports nested loads

__ Link to this function

# cast_atomic(type, term, constraints)

[ __ View Source ](external_link)
    
    
    @spec cast_atomic(t(), [term](external_link)(), constraints()) ::
      {:atomic, [Ash.Expr.t](external_link)()} | {:error, [Ash.Error.t](external_link)()} | {:not_atomic, [String.t](external_link)()}

__ Link to this function

# cast_in_query?(type, constraints \\\ [])

[ __ View Source ](external_link)

Returns `true` if the type should be cast in underlying queries

__ Link to this function

# cast_input(type, term, constraints \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec cast_input(t(), [term](external_link)(), constraints() | nil) ::
      {:ok, [term](external_link)()} | {:error, [Keyword.t](external_link)()} | :error

Casts input (e.g. unknown) data to an instance of the type, or errors

Maps to [`Ecto.Type.cast/2`](external_link)

__ Link to this function

# cast_stored(type, term, constraints \\\ [])

[ __ View Source ](external_link)
    
    
    @spec cast_stored(t(), [term](external_link)(), constraints() | nil) ::
      {:ok, [term](external_link)()} | {:error, [keyword](external_link)()} | :error

Casts a value from the data store to an instance of the type, or errors

Maps to [`Ecto.Type.load/2`](external_link)

__ Link to this function

# composite?(type, constraints)

[ __ View Source ](external_link)
    
    
    @spec composite?(
      t(),
      constraints()
    ) :: [Enumerable.t](external_link)()

Returns true if the type is a composite type

__ Link to this function

# composite_types(type, constraints)

[ __ View Source ](external_link)
    
    
    @spec composite_types(
      t(),
      constraints()
    ) :: [Enumerable.t](external_link)()

Returns the wrapped composite types

__ Link to this function

# constraints(type)

[ __ View Source ](external_link)
    
    
    @spec constraints(t()) :: constraints()

Returns the constraint schema for a type

__ Link to this function

# describe(type, constraints)

[ __ View Source ](external_link)

Calls the type's `describe` function with the given constraints

__ Link to this function

# determine_types(types, values)

[ __ View Source ](external_link)

Determine types for a given function or operator.

__ Link to this function

# dump_to_embedded(type, term, constraints \\\ [])

[ __ View Source ](external_link)
    
    
    @spec dump_to_embedded(t(), [term](external_link)(), constraints() | nil) ::
      {:ok, [term](external_link)()} | {:error, [keyword](external_link)()} | :error

Casts a value from the Elixir type to a value that can be embedded in another data structure.

Embedded resources expect to be stored in JSON, so this allows things like UUIDs to be stored as strings in embedded resources instead of binary.

__ Link to this function

# dump_to_native(type, term, constraints \\\ [])

[ __ View Source ](external_link)
    
    
    @spec dump_to_native(t(), [term](external_link)(), constraints() | nil) ::
      {:ok, [term](external_link)()} | {:error, [keyword](external_link)()} | :error

Casts a value from the Elixir type to a value that the data store can persist

Maps to [`Ecto.Type.dump/2`](external_link)

__ Link to this function

# ecto_type(type)

[ __ View Source ](external_link)
    
    
    @spec ecto_type(t()) :: [Ecto.Type.t](external_link)()

Returns the ecto compatible type for an Ash.Type.

If you `use Ash.Type`, this is created for you. For builtin types this may return a corresponding ecto builtin type (atom)

__ Link to this function

# embedded_type?(type)

[ __ View Source ](external_link)

Returns true if the type is an embedded resource

__ Link to this function

# equal?(type, left, right)

[ __ View Source ](external_link)
    
    
    @spec equal?(t(), [term](external_link)(), [term](external_link)()) :: [boolean](external_link)()

Determines if two values of a given type are equal.

Maps to [`Ecto.Type.equal?/3`](external_link)

__ Link to this function

# generator(type, constraints)

[ __ View Source ](external_link)
    
    
    @spec generator(
      [module](external_link)() | {:array, [module](external_link)()},
      constraints()
    ) :: [Enumerable.t](external_link)()

Returns the StreamData generator for a given type

__ Link to this function

# get_rewrites(type, merged_load, calculation, path, constraints)

[ __ View Source ](external_link)

Gets the load rewrites for a given type, load, calculation and path.

This is used for defining types that support a nested load statement. See the embedded type and union type implementations for examples of how to use this.

__ Link to this function

# get_type(value)

[ __ View Source ](external_link)
    
    
    @spec get_type([atom](external_link)() | [module](external_link)() | {:array, [atom](external_link)() | [module](external_link)()}) ::
      [atom](external_link)() | [module](external_link)() | {:array, [atom](external_link)() | [module](external_link)()}

Gets the type module for a given short name or module

__ Link to this function

# handle_change(type, old_value, new_value, constraints)

[ __ View Source ](external_link)

Process the old casted values alongside the new casted values.

This is leveraged by embedded types to know if something is being updated or destroyed. This is not called on creates.

__ Link to this function

# handle_change_array?(type)

[ __ View Source ](external_link)
    
    
    @spec handle_change_array?(t()) :: [boolean](external_link)()

Handles the change of a given array of values for an attribute change. Runs after casting.

__ Link to this function

# include_source(type, changeset_or_query, constraints)

[ __ View Source ](external_link)
    
    
    @spec include_source(
      t(),
      [Ash.Changeset.t](external_link)() | [Ash.Query.t](external_link)() | [Ash.ActionInput.t](external_link)(),
      constraints()
    ) :: constraints()

__ Link to this function

# init(type, constraints)

[ __ View Source ](external_link)
    
    
    @spec init(t(), constraints()) :: {:ok, constraints()} | {:error, [Ash.Error.t](external_link)()}

Initializes the constraints according to the underlying type

__ Link to this function

# load(type, value, loads, constraints, context)

[ __ View Source ](external_link)
    
    
    @spec load(
      type :: t(),
      values :: [[term](external_link)()],
      load :: [Keyword.t](external_link)(),
      constraints :: [Keyword.t](external_link)(),
      context :: load_context()
    ) :: {:ok, [[term](external_link)()]} | {:error, [Ash.Error.t](external_link)()}

__ Link to this function

# loaded?(type, values, load, constraints, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec loaded?(
      type :: t(),
      value_or_values :: [term](external_link)(),
      path_to_load :: [[atom](external_link)()],
      constraints :: [Keyword.t](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [boolean](external_link)()

__ Link to this function

# matches_type?(type, value, constraints \\\ [])

[ __ View Source ](external_link)

Detects as a best effort if an arbitrary value matches the given type

__ Link to this function

# merge_load(type, left, right, constraints, context)

[ __ View Source ](external_link)
    
    
    @spec merge_load(
      type :: t(),
      left :: [term](external_link)(),
      right :: [term](external_link)(),
      constraints :: [Keyword.t](external_link)(),
      context :: merge_load_context() | nil
    ) :: {:ok, [[term](external_link)()]} | :error | {:error, [Ash.Error.t](external_link)()}

__ Link to this function

# prepare_change(type, old_value, new_value, constraints)

[ __ View Source ](external_link)

Process the old casted values alongside the new _un_ casted values.

This is leveraged by embedded types to know if something is being updated or destroyed. This is not called on creates.

__ Link to this function

# prepare_change_array?(type)

[ __ View Source ](external_link)
    
    
    @spec prepare_change_array?(t()) :: [boolean](external_link)()

Prepares a given array of values for an attribute change. Runs before casting.

__ Link to this function

# rewrite(type, value, rewrites, constraints)

[ __ View Source ](external_link)

Applies rewrites to a given value.

This is used for defining types that support a nested load statement. See the embedded type and union type implementations for examples of how to use this.

__ Link to this function

# short_names()

[ __ View Source ](external_link)

Returns the list of available type short names

__ Link to this function

# simple_equality?(type)

[ __ View Source ](external_link)
    
    
    @spec simple_equality?(t()) :: [boolean](external_link)()

Determines if a type can be compared using the `==` operator.

__ Link to this function

# storage_type(type, constraints \\\ [])

[ __ View Source ](external_link)

Returns the _underlying_ storage type (the underlying type of the _ecto type_ of the _ash type_)
