# AshOban.Schedule — ash_oban v0.2.4

Project: ash_oban v0.2.4

## Table of Contents

- [ __ View Source ](external_link) AshOban.Schedule (ash_oban v0.2.4)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash_oban __ __

__ Settings

#  [ __ View Source ](external_link) AshOban.Schedule (ash_oban v0.2.4)

A configured scheduled action.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshOban.Schedule{
      __identifier__: [term](external_link)(),
      action: [atom](external_link)(),
      action_input: [map](external_link)(),
      cron: [String.t](external_link)(),
      debug: [term](external_link)(),
      debug?: [boolean](external_link)(),
      max_attempts: [non_neg_integer](external_link)(),
      name: [atom](external_link)(),
      priority: [non_neg_integer](external_link)(),
      queue: [atom](external_link)(),
      state: :active | :paused | :deleted,
      worker: [module](external_link)()
    }
