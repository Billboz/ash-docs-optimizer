# AshAuthentication.Strategy.Custom — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.Custom behaviour (ash_authentication v4.0.4)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- entity()
- strategy()
- __ Callbacks
- transform(strategy, t)
- verify(strategy, t)
- __ Functions
- set_defaults(dsl, defaults)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.Custom behaviour (ash_authentication v4.0.4)

Define your own custom authentication strategy.

See [the Custom Strategies guide](external_link) for more information.

#  __ Summary

##  Types

entity()

A Strategy DSL Entity.

strategy()

This is the DSL target for your entity and the struct for which you will implement the [`AshAuthentication.Strategy`](external_link) protocol.

##  Callbacks

transform(strategy, t)

If your strategy needs to modify either the entity or the parent resource then you can implement this callback.

verify(strategy, t)

If your strategy needs to verify either the entity or the parent resource then you can implement this callback.

##  Functions

set_defaults(dsl, defaults)

Sets default values for a DSL schema based on a set of defaults.

#  __ Types

__ Link to this type

# entity()

[ __ View Source ](external_link)
    
    
    @type entity() :: [Spark.Dsl.Entity.t](external_link)()

A Strategy DSL Entity.

See [`Spark.Dsl.Entity`](external_link) for more information.

__ Link to this type

# strategy()

[ __ View Source ](external_link)
    
    
    @type strategy() :: %{
      :__struct__ => [module](external_link)(),
      :strategy_module => [module](external_link)(),
      :resource => [module](external_link)(),
      optional([atom](external_link)()) => [any](external_link)()
    }

This is the DSL target for your entity and the struct for which you will implement the [`AshAuthentication.Strategy`](external_link) protocol.

The only required field is `strategy_module` which is used to keep track of which custom strategy created which strategy.

#  __ Callbacks

__ Link to this callback

# transform(strategy, t)

[ __ View Source ](external_link)
    
    
    @callback transform(strategy(), [Spark.Dsl.t](external_link)()) ::
      {:ok, strategy()} | {:ok, [Spark.Dsl.t](external_link)()} | {:error, [Exception.t](external_link)()}

If your strategy needs to modify either the entity or the parent resource then you can implement this callback.

This callback can return one of three results:

  * `{:ok, Entity.t}` \- an updated DSL entity - useful if you're just changing the entity itself and not changing the wider DSL state of the resource. If this is the response then the transformer will take care of updating the entity in the DSL state.
  * `{:ok, Dsl.t}` \- an updated DSL state for the entire resource.
  * `{:error, Exception.t}` \- a compilation-stopping problem was found. Any exception can be returned, but we strongly advise you to return a [`Spark.Error.DslError`](external_link).



__ Link to this callback

# verify(strategy, t)

[ __ View Source ](external_link)
    
    
    @callback verify(strategy(), [Spark.Dsl.t](external_link)()) :: :ok | {:error, [Exception.t](external_link)()}

If your strategy needs to verify either the entity or the parent resource then you can implement this callback.

This is called post-compilation in the `@after_verify` hook - see [`Module`](external_link) for more information.

This callback can return one of the following results:

  * `:ok` \- everything is A-Okay.
  * `{:error, Exception.t}` \- a compilation-stopping problem was found. Any exception can be returned, but we strongly advise you to return a [`Spark.Error.DslError`](external_link).



#  __ Functions

__ Link to this function

# set_defaults(dsl, defaults)

[ __ View Source ](external_link)

Sets default values for a DSL schema based on a set of defaults.

If a given default is in the schema, it can be overriden, so we just set the default and mark it not required.

If not, then we add it to `auto_set_fields`, and the user cannot override it.
