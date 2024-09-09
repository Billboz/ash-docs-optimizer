# Ash.Flow.Result — ash_flow v0.1.1

Project: ash_flow v0.1.1

## Table of Contents

- [ __ View Source ](external_link) Ash.Flow.Result (ash_flow v0.1.1)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash_flow __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Flow.Result (ash_flow v0.1.1)

The result of running a flow.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Flow.Result{
      complete?: [boolean](external_link)(),
      errors: [[Ash.Error.t](3.0.0/Ash.Error.html#t:t/0)()],
      flow: [Ash.Flow.t](external_link)(),
      input: [map](external_link)(),
      notifications: [[Ash.Notifier.Notification.t](3.0.0/Ash.Notifier.Notification.html#t:t/0)()],
      params: [map](external_link)(),
      result: [any](external_link)() | nil,
      runner_metadata: [term](external_link)(),
      valid?: [boolean](external_link)()
    }
