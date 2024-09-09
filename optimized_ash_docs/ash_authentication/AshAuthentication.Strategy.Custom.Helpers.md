# AshAuthentication.Strategy.Custom.Helpers — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.Custom.Helpers (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- put_add_on(dsl_state, strategy)
- put_strategy(dsl_state, strategy)
- register_strategy_actions(action, dsl_state, strategy)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.Custom.Helpers (ash_authentication v4.0.4)

Helpers for use within custom strategies.

#  __ Summary

##  Functions

put_add_on(dsl_state, strategy)

Update the add-on in the DSL state by name.

put_strategy(dsl_state, strategy)

Update the strategy in the DSL state by name.

register_strategy_actions(action, dsl_state, strategy)

If there's any chance that an implementor may try and use actions genrated by your strategy programatically then you should register your actions with Ash Authentication so that it can find the appropriate strategy when needed.

#  __ Functions

__ Link to this function

# put_add_on(dsl_state, strategy)

[ __ View Source ](external_link)
    
    
    @spec put_add_on(dsl_state, [AshAuthentication.Strategy.Custom.strategy](external_link)()) :: dsl_state
    when dsl_state: [map](external_link)()

Update the add-on in the DSL state by name.

This helper should only be used within transformers.

__ Link to this function

# put_strategy(dsl_state, strategy)

[ __ View Source ](external_link)
    
    
    @spec put_strategy(dsl_state, [AshAuthentication.Strategy.Custom.strategy](external_link)()) ::
      dsl_state
    when dsl_state: [map](external_link)()

Update the strategy in the DSL state by name.

This helper should only be used within transformers.

__ Link to this function

# register_strategy_actions(action, dsl_state, strategy)

[ __ View Source ](external_link)
    
    
    @spec register_strategy_actions(
      action_or_actions,
      dsl_state,
      [AshAuthentication.Strategy.Custom.strategy](external_link)()
    ) :: dsl_state
    when dsl_state: [map](external_link)(), action_or_actions: [atom](external_link)() | [[atom](external_link)()]

If there's any chance that an implementor may try and use actions genrated by your strategy programatically then you should register your actions with Ash Authentication so that it can find the appropriate strategy when needed.

The strategy can be retrieved again by calling [`AshAuthentication.Info.strategy_for_action/2`](external_link).

This helper should only be used within transformers.
