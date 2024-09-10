# AshOban.Trigger — ash_oban v0.2.4

Project: ash_oban v0.2.4

## Table of Contents

- [ __ View Source ](external_link) AshOban.Trigger (ash_oban v0.2.4)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- transform(trigger)

__

Search documentation of ash_oban __ __

__ Settings

#  [ __ View Source ](external_link) AshOban.Trigger (ash_oban v0.2.4)

A configured trigger.

#  __ Summary

##  Types

t()

##  Functions

transform(trigger)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshOban.Trigger{
      __identifier__: [atom](external_link)(),
      action: [atom](external_link)(),
      action_input: [map](external_link)(),
      debug?: [boolean](external_link)(),
      log_errors?: [boolean](external_link)(),
      log_final_error?: [boolean](external_link)(),
      max_attempts: [pos_integer](external_link)(),
      max_scheduler_attempts: [pos_integer](external_link)(),
      name: [atom](external_link)(),
      on_error: [atom](external_link)(),
      queue: [atom](external_link)(),
      read_action: [atom](external_link)(),
      read_metadata: ([Ash.Resource.record](3.2.2/Ash.Resource.html#t:record/0)() -> [map](external_link)()),
      record_limit: [pos_integer](external_link)(),
      scheduler: [module](external_link)() | nil,
      scheduler_cron: [String.t](external_link)(),
      scheduler_priority: [non_neg_integer](external_link)(),
      scheduler_queue: [atom](external_link)(),
      state: :active | :paused | :deleted,
      stream_batch_size: [pos_integer](external_link)(),
      where: [Ash.Expr.t](3.2.2/Ash.Expr.html#t:t/0)(),
      worker: [module](external_link)(),
      worker_priority: [non_neg_integer](external_link)(),
      worker_read_action: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# transform(trigger)

[ __ View Source ](external_link)
