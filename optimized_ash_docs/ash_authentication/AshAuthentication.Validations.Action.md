# AshAuthentication.Validations.Action — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Validations.Action (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- validate_action_argument_option(action, argument_name, field, values)
- validate_action_exists(dsl_state, action_name)
- validate_action_has_argument(action, argument_name)
- validate_action_has_change(action, change_module)
- validate_action_has_manual(action, manual_module)
- validate_action_has_preparation(action, preparation_module)
- validate_action_has_validation(action, validation_module)
- validate_action_option(action, field, values)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Validations.Action (ash_authentication v4.0.4)

Validation helpers for Resource actions.

#  __ Summary

##  Functions

validate_action_argument_option(action, argument_name, field, values)

Validate an action's argument has an option set to one of the provided values.

validate_action_exists(dsl_state, action_name)

Validate that a named action actually exists.

validate_action_has_argument(action, argument_name)

Validate the presence of an argument on an action.

validate_action_has_change(action, change_module)

Validate the presence of the named change module on an action.

validate_action_has_manual(action, manual_module)

Validate the presence of the named manual module on an action.

validate_action_has_preparation(action, preparation_module)

Validate the presence of the named preparation module on an action.

validate_action_has_validation(action, validation_module)

Validate the presence of the named validation module on an action.

validate_action_option(action, field, values)

Validate the action has the provided option.

#  __ Functions

__ Link to this function

# validate_action_argument_option(action, argument_name, field, values)

[ __ View Source ](external_link)
    
    
    @spec validate_action_argument_option([Ash.Resource.Actions.action](3.4.1/Ash.Resource.Actions.html#t:action/0)(), [atom](external_link)(), [atom](external_link)(), [
      [any](external_link)()
    ]) ::
      :ok | {:error, [Exception.t](external_link)() | [String.t](external_link)()}

Validate an action's argument has an option set to one of the provided values.

__ Link to this function

# validate_action_exists(dsl_state, action_name)

[ __ View Source ](external_link)
    
    
    @spec validate_action_exists([map](external_link)(), [atom](external_link)()) ::
      {:ok, [Ash.Resource.Actions.action](3.4.1/Ash.Resource.Actions.html#t:action/0)()} | {:error, [Exception.t](external_link)() | [String.t](external_link)()}

Validate that a named action actually exists.

__ Link to this function

# validate_action_has_argument(action, argument_name)

[ __ View Source ](external_link)
    
    
    @spec validate_action_has_argument([Ash.Resource.Actions.action](3.4.1/Ash.Resource.Actions.html#t:action/0)(), [atom](external_link)()) ::
      :ok | {:error, [Exception.t](external_link)()}

Validate the presence of an argument on an action.

__ Link to this function

# validate_action_has_change(action, change_module)

[ __ View Source ](external_link)
    
    
    @spec validate_action_has_change([Ash.Resource.Actions.action](3.4.1/Ash.Resource.Actions.html#t:action/0)(), [module](external_link)()) ::
      :ok | {:error, [Exception.t](external_link)()}

Validate the presence of the named change module on an action.

__ Link to this function

# validate_action_has_manual(action, manual_module)

[ __ View Source ](external_link)
    
    
    @spec validate_action_has_manual([Ash.Resource.Actions.action](3.4.1/Ash.Resource.Actions.html#t:action/0)(), [module](external_link)()) ::
      :ok | {:error, [Exception.t](external_link)()}

Validate the presence of the named manual module on an action.

__ Link to this function

# validate_action_has_preparation(action, preparation_module)

[ __ View Source ](external_link)
    
    
    @spec validate_action_has_preparation([Ash.Resource.Actions.action](3.4.1/Ash.Resource.Actions.html#t:action/0)(), [module](external_link)()) ::
      :ok | {:error, [Exception.t](external_link)()}

Validate the presence of the named preparation module on an action.

__ Link to this function

# validate_action_has_validation(action, validation_module)

[ __ View Source ](external_link)
    
    
    @spec validate_action_has_validation([Ash.Resource.Actions.action](3.4.1/Ash.Resource.Actions.html#t:action/0)(), [module](external_link)()) ::
      :ok | {:error, [Exception.t](external_link)()}

Validate the presence of the named validation module on an action.

__ Link to this function

# validate_action_option(action, field, values)

[ __ View Source ](external_link)
    
    
    @spec validate_action_option([Ash.Resource.Actions.action](3.4.1/Ash.Resource.Actions.html#t:action/0)(), [atom](external_link)(), [[any](external_link)()]) ::
      :ok | {:error, [Exception.t](external_link)()}

Validate the action has the provided option.
