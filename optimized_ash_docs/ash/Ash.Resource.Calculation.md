# Ash.Resource.Calculation — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Calculation behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- opts()
- ref()
- t()
- __ Callbacks
- calculate(records, opts, context)
- describe(opts)
- expression(opts, context)
- has_expression?()
- init(opts)
- load(query, opts, context)
- strict_loads?()
- __ Functions
- expr_calc(expr)
- schema()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Calculation behaviour (ash v3.4.8)

The behaviour for defining a module calculation, and the struct for storing a defined calculation.

#  __ Summary

##  Types

opts()

ref()

t()

##  Callbacks

calculate(records, opts, context)

describe(opts)

expression(opts, context)

has_expression?()

init(opts)

load(query, opts, context)

strict_loads?()

##  Functions

expr_calc(expr)

schema()

#  __ Types

__ Link to this type

# opts()

[ __ View Source ](external_link)
    
    
    @type opts() :: [Keyword.t](external_link)()

__ Link to this type

# ref()

[ __ View Source ](external_link)
    
    
    @type ref() :: {[module](external_link)(), [Keyword.t](external_link)()} | [module](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Calculation{
      allow_nil?: [boolean](external_link)(),
      arguments: [[Ash.Resource.Calculation.Argument.t](external_link)()],
      async?: [boolean](external_link)(),
      calculation: [module](external_link)() | {[module](external_link)(), [keyword](external_link)()},
      constraints: [keyword](external_link)(),
      description: nil | [String.t](external_link)(),
      filterable?: [boolean](external_link)(),
      load: [keyword](external_link)(),
      name: [atom](external_link)(),
      public?: [boolean](external_link)(),
      sensitive?: [term](external_link)(),
      sortable?: [boolean](external_link)(),
      type: nil | [Ash.Type.t](external_link)()
    }

#  __ Callbacks

__ Link to this callback

# calculate(records, opts, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback calculate(
      records :: [[Ash.Resource.record](external_link)()],
      opts :: opts(),
      context :: [Ash.Resource.Calculation.Context.t](external_link)()
    ) :: {:ok, [[term](external_link)()]} | [[term](external_link)()] | {:error, [term](external_link)()} | :unknown

__ Link to this callback

# describe(opts)

[ __ View Source ](external_link)
    
    
    @callback describe(opts :: opts()) :: [String.t](external_link)()

__ Link to this callback

# expression(opts, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback expression(opts :: opts(), context :: [Ash.Resource.Calculation.Context.t](external_link)()) ::
      [any](external_link)()

__ Link to this callback

# has_expression?()

[ __ View Source ](external_link)
    
    
    @callback has_expression?() :: [boolean](external_link)()

__ Link to this callback

# init(opts)

[ __ View Source ](external_link)
    
    
    @callback init(opts :: opts()) :: {:ok, opts()} | {:error, [term](external_link)()}

__ Link to this callback

# load(query, opts, context)

[ __ View Source ](external_link)
    
    
    @callback load(
      query :: [Ash.Query.t](external_link)(),
      opts :: opts(),
      context :: [Ash.Resource.Calculation.Context.t](external_link)()
    ) ::
      [atom](external_link)() | [[atom](external_link)()] | [Keyword.t](external_link)()

__ Link to this callback

# strict_loads?()

[ __ View Source ](external_link)
    
    
    @callback strict_loads?() :: [boolean](external_link)()

#  __ Functions

__ Link to this function

# expr_calc(expr)

[ __ View Source ](external_link)

__ Link to this function

# schema()

[ __ View Source ](external_link)
