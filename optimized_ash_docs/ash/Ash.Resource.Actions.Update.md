# Ash.Resource.Actions.Update — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Actions.Update (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- transform(action)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Actions.Update (ash v3.4.8)

Represents a update action on a resource.

#  __ Summary

##  Types

t()

##  Functions

transform(action)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Actions.Update{
      accept: nil | [[atom](external_link)()],
      allow_nil_input: [[atom](external_link)()],
      arguments: [[Ash.Resource.Actions.Argument.t](external_link)()],
      atomic_upgrade?: [boolean](external_link)(),
      atomic_upgrade_with: nil | [atom](external_link)(),
      atomics: [term](external_link)(),
      changes: [term](external_link)(),
      delay_global_validations?: [boolean](external_link)(),
      description: [String.t](external_link)() | nil,
      error_handler: [term](external_link)(),
      manual: [module](external_link)() | nil,
      manual?: [term](external_link)(),
      metadata: [term](external_link)(),
      name: [atom](external_link)(),
      notifiers: [[module](external_link)()],
      primary?: [boolean](external_link)(),
      reject: [term](external_link)(),
      require_atomic?: [boolean](external_link)(),
      require_attributes: [[atom](external_link)()],
      skip_global_validations?: [boolean](external_link)(),
      skip_unknown_inputs: [[atom](external_link)() | [String.t](external_link)()],
      touches_resources: [[atom](external_link)()],
      transaction?: [term](external_link)(),
      type: :update
    }

#  __ Functions

__ Link to this function

# transform(action)

[ __ View Source ](external_link)
