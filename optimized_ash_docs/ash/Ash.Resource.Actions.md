# Ash.Resource.Actions — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Actions (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- action()
- action_type()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Actions (ash v3.4.8)

Types for Ash actions

#  __ Summary

##  Types

action()

action_type()

#  __ Types

__ Link to this type

# action()

[ __ View Source ](external_link)
    
    
    @type action() ::
      [Ash.Resource.Actions.Action.t](external_link)()
      | [Ash.Resource.Actions.Create.t](external_link)()
      | [Ash.Resource.Actions.Read.t](external_link)()
      | [Ash.Resource.Actions.Update.t](external_link)()
      | [Ash.Resource.Actions.Destroy.t](external_link)()

__ Link to this type

# action_type()

[ __ View Source ](external_link)
    
    
    @type action_type() :: :action | :read | :create | :update | :destroy
