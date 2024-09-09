# Ash.Resource.Actions.Create — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Actions.Create (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Actions.Create (ash v3.4.8)

Represents a create action on a resource.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Actions.Create{
      accept: nil | [[atom](external_link)()],
      allow_nil_input: [[atom](external_link)()],
      arguments: [[Ash.Resource.Actions.Argument.t](external_link)()],
      changes: [term](external_link)(),
      delay_global_validations?: [boolean](external_link)(),
      description: [String.t](external_link)() | nil,
      error_handler: [term](external_link)(),
      manual: [module](external_link)() | nil,
      metadata: [term](external_link)(),
      name: [atom](external_link)(),
      notifiers: [[module](external_link)()],
      primary?: [boolean](external_link)(),
      reject: [term](external_link)(),
      require_attributes: [[atom](external_link)()],
      skip_global_validations?: [boolean](external_link)(),
      skip_unknown_inputs: [[atom](external_link)() | [String.t](external_link)()],
      touches_resources: [[atom](external_link)()],
      transaction?: [term](external_link)(),
      type: :create,
      upsert?: [boolean](external_link)(),
      upsert_condition: [Ash.Expr.t](external_link)() | nil,
      upsert_fields:
        nil
        | [[atom](external_link)()]
        | :replace_all
        | {:replace, [[atom](external_link)()]}
        | {:replace_all_except, [[atom](external_link)()]},
      upsert_identity: [atom](external_link)() | nil
    }
