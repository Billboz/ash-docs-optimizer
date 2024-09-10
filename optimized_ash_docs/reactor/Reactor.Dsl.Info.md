# Reactor.Dsl.Info — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Info (reactor v0.9.1)
- __ Summary
  - Functions
- __ Functions
- reactor(dsl_or_extended)
- reactor_middlewares(dsl_or_extended)
- reactor_options(dsl_or_extended)
- reactor_return(dsl_or_extended)
- reactor_return!(dsl_or_extended)
- to_struct(reactor)
- to_struct!(reactor)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Info (reactor v0.9.1)

Introspection for the Reactor DSL.

#  __ Summary

##  Functions

reactor(dsl_or_extended)

reactor DSL entities

reactor_middlewares(dsl_or_extended)

reactor.middlewares DSL entities

reactor_options(dsl_or_extended)

reactor DSL options

reactor_return(dsl_or_extended)

Specify which step result to return upon completion.

reactor_return!(dsl_or_extended)

Specify which step result to return upon completion.

to_struct(reactor)

Convert a reactor DSL module into a reactor struct.

to_struct!(reactor)

Raising version of `to_struct/1`.

#  __ Functions

__ Link to this function

# reactor(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec reactor(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [[struct](external_link)()]

reactor DSL entities

__ Link to this function

# reactor_middlewares(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec reactor_middlewares(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [[struct](external_link)()]

reactor.middlewares DSL entities

__ Link to this function

# reactor_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec reactor_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

reactor DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# reactor_return(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec reactor_return(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: {:ok, [atom](external_link)()} | :error

Specify which step result to return upon completion.

__ Link to this function

# reactor_return!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec reactor_return!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [atom](external_link)() | [no_return](external_link)()

Specify which step result to return upon completion.

__ Link to this function

# to_struct(reactor)

[ __ View Source ](external_link)
    
    
    @spec to_struct([module](external_link)() | [Reactor.t](external_link)() | [Spark.Dsl.t](external_link)()) ::
      {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Convert a reactor DSL module into a reactor struct.

__ Link to this function

# to_struct!(reactor)

[ __ View Source ](external_link)
    
    
    @spec to_struct!([module](external_link)() | [Reactor.t](external_link)() | [Spark.Dsl.t](external_link)()) :: [Reactor.t](external_link)() | [no_return](external_link)()

Raising version of `to_struct/1`.
