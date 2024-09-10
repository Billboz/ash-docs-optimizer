# Ash.Resource.Validation — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Validation behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- path()
- ref()
- t()
- __ Callbacks
- atomic(changeset, opts, context)
- atomic?()
- describe(opts)
- has_validate?()
- init(opts)
- validate(changeset, opts, context)
- __ Functions
- action_schema()
- opt_schema()
- validation_type()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Validation behaviour (ash v3.4.8)

Represents a validation in Ash.

See [`Ash.Resource.Validation.Builtins`](external_link) for a list of builtin validations.

To write your own validation, define a module that implements the `init/1` callback to validate options at compile time, and `validate/3` callback to do the validation.

Then, in a resource, you can say:
    
    
    validations do
      validate {MyValidation, [foo: :bar]}
    end

#  __ Summary

##  Types

path()

ref()

t()

##  Callbacks

atomic(changeset, opts, context)

atomic?()

describe(opts)

has_validate?()

init(opts)

validate(changeset, opts, context)

##  Functions

action_schema()

opt_schema()

validation_type()

#  __ Types

__ Link to this type

# path()

[ __ View Source ](external_link)
    
    
    @type path() :: [[atom](external_link)() | [integer](external_link)()]

__ Link to this type

# ref()

[ __ View Source ](external_link)
    
    
    @type ref() :: {[module](external_link)(), [Keyword.t](external_link)()} | [module](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Validation{
      always_atomic?: [term](external_link)(),
      before_action?: [term](external_link)(),
      description: [String.t](external_link)() | nil,
      message: [term](external_link)(),
      module: [atom](external_link)(),
      on: [[atom](external_link)()],
      only_when_valid?: [boolean](external_link)(),
      opts: [[atom](external_link)()],
      validation: {[atom](external_link)(), [[atom](external_link)()]},
      where: [{[atom](external_link)(), [[atom](external_link)()]}]
    }

#  __ Callbacks

__ Link to this callback

# atomic(changeset, opts, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback atomic(
      changeset :: [Ash.Changeset.t](external_link)(),
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.Validation.Context.t](external_link)()
    ) ::
      :ok
      | {:atomic, involved_fields :: [[atom](external_link)()] | :*, condition_expr :: [Ash.Expr.t](external_link)(),
         error_expr :: [Ash.Expr.t](external_link)()}
      | [
          {:atomic, involved_fields :: [[atom](external_link)()] | :*,
           condition_expr :: [Ash.Expr.t](external_link)(), error_expr :: [Ash.Expr.t](external_link)()}
        ]
      | {:not_atomic, [String.t](external_link)()}
      | {:error, [term](external_link)()}

__ Link to this callback

# atomic?()

[ __ View Source ](external_link)
    
    
    @callback atomic?() :: [boolean](external_link)()

__ Link to this callback

# describe(opts)

[ __ View Source ](external_link) (optional)
    
    
    @callback describe(opts :: [Keyword.t](external_link)()) ::
      [String.t](external_link)() | [message: [String.t](external_link)(), vars: [Keyword.t](external_link)()]

__ Link to this callback

# has_validate?()

[ __ View Source ](external_link)
    
    
    @callback has_validate?() :: [boolean](external_link)()

__ Link to this callback

# init(opts)

[ __ View Source ](external_link)
    
    
    @callback init(opts :: [Keyword.t](external_link)()) :: {:ok, [Keyword.t](external_link)()} | {:error, [String.t](external_link)()}

__ Link to this callback

# validate(changeset, opts, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback validate(
      changeset :: [Ash.Changeset.t](external_link)(),
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.Validation.Context.t](external_link)()
    ) :: :ok | {:error, [term](external_link)()}

#  __ Functions

__ Link to this function

# action_schema()

[ __ View Source ](external_link)

__ Link to this function

# opt_schema()

[ __ View Source ](external_link)

__ Link to this function

# validation_type()

[ __ View Source ](external_link)
