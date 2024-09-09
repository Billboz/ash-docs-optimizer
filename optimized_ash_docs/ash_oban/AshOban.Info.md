# AshOban.Info — ash_oban v0.2.4

Project: ash_oban v0.2.4

## Table of Contents

- [ __ View Source ](external_link) AshOban.Info (ash_oban v0.2.4)
- __ Summary
  - Functions
- __ Functions
- oban_domain(dsl_or_extended)
- oban_domain!(dsl_or_extended)
- oban_options(dsl_or_extended)
- oban_scheduled_action(resource, name)
- oban_scheduled_actions(dsl_or_extended)
- oban_trigger(resource, name)
- oban_triggers(dsl_or_extended)
- oban_triggers_and_scheduled_actions(resource)
- pro?()

__

Search documentation of ash_oban __ __

__ Settings

#  [ __ View Source ](external_link) AshOban.Info (ash_oban v0.2.4)

Introspection for AshOban

#  __ Summary

##  Functions

oban_domain(dsl_or_extended)

The Domain to use when calling actions on this resource. Defaults to the resource's domain.

oban_domain!(dsl_or_extended)

The Domain to use when calling actions on this resource. Defaults to the resource's domain.

oban_options(dsl_or_extended)

oban DSL options

oban_scheduled_action(resource, name)

oban_scheduled_actions(dsl_or_extended)

oban.scheduled_actions DSL entities

oban_trigger(resource, name)

oban_triggers(dsl_or_extended)

oban.triggers DSL entities

oban_triggers_and_scheduled_actions(resource)

pro?()

#  __ Functions

__ Link to this function

# oban_domain(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec oban_domain(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: {:ok, [module](external_link)()} | :error

The Domain to use when calling actions on this resource. Defaults to the resource's domain.

__ Link to this function

# oban_domain!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec oban_domain!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [module](external_link)() | [no_return](external_link)()

The Domain to use when calling actions on this resource. Defaults to the resource's domain.

__ Link to this function

# oban_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec oban_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

oban DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# oban_scheduled_action(resource, name)

[ __ View Source ](external_link)
    
    
    @spec oban_scheduled_action([Ash.Resource.t](3.2.2/Ash.Resource.html#t:t/0)() | [Spark.Dsl.t](external_link)(), [atom](external_link)()) ::
      nil | [AshOban.Schedule.t](external_link)()

__ Link to this function

# oban_scheduled_actions(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec oban_scheduled_actions(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [[struct](external_link)()]

oban.scheduled_actions DSL entities

__ Link to this function

# oban_trigger(resource, name)

[ __ View Source ](external_link)
    
    
    @spec oban_trigger([Ash.Resource.t](3.2.2/Ash.Resource.html#t:t/0)() | [Spark.Dsl.t](external_link)(), [atom](external_link)()) ::
      nil | [AshOban.Trigger.t](external_link)()

__ Link to this function

# oban_triggers(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec oban_triggers(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [[struct](external_link)()]

oban.triggers DSL entities

__ Link to this function

# oban_triggers_and_scheduled_actions(resource)

[ __ View Source ](external_link)
    
    
    @spec oban_triggers_and_scheduled_actions([Ash.Resource.t](3.2.2/Ash.Resource.html#t:t/0)() | [Spark.Dsl.t](external_link)()) :: [
      [AshOban.Trigger.t](external_link)() | [AshOban.Schedule.t](external_link)()
    ]

__ Link to this function

# pro?()

[ __ View Source ](external_link)
