# Ash.Resource.Actions.Action — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Actions.Action (ash v3.4.8)
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

#  [ __ View Source ](external_link) Ash.Resource.Actions.Action (ash v3.4.8)

Represents a custom action on a resource.

#  __ Summary

##  Types

t()

##  Functions

transform(action)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Actions.Action{
      allow_nil?: [boolean](external_link)(),
      arguments: [[Ash.Resource.Actions.Argument.t](external_link)()],
      constraints: [Keyword.t](external_link)(),
      description: [String.t](external_link)() | nil,
      name: [atom](external_link)(),
      primary?: [boolean](external_link)(),
      returns: [Ash.Type.t](external_link)() | nil,
      run: {[module](external_link)(), [Keyword.t](external_link)()},
      skip_unknown_inputs: [[atom](external_link)() | [String.t](external_link)()],
      touches_resources: [[Ash.Resource.t](external_link)()],
      transaction?: [boolean](external_link)(),
      type: :action
    }

#  __ Functions

__ Link to this function

# transform(action)

[ __ View Source ](external_link)
