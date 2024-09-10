# Ash.Notifier — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Notifier behaviour (ash v3.4.8)
- __ Summary
  - Callbacks
  - Functions
- __ Callbacks
- notify(t)
- requires_original_data?(t, action)
- __ Functions
- notify(resource_notifications)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Notifier behaviour (ash v3.4.8)

A notifier is an extension that receives various events

#  __ Summary

##  Callbacks

notify(t)

requires_original_data?(t, action)

##  Functions

notify(resource_notifications)

Sends any notifications that can be sent, and returns the rest.

#  __ Callbacks

__ Link to this callback

# notify(t)

[ __ View Source ](external_link)
    
    
    @callback notify([Ash.Notifier.Notification.t](external_link)()) :: :ok

__ Link to this callback

# requires_original_data?(t, action)

[ __ View Source ](external_link)
    
    
    @callback requires_original_data?([Ash.Resource.t](external_link)(), [Ash.Resource.Actions.action](external_link)()) ::
      [boolean](external_link)()

#  __ Functions

__ Link to this function

# notify(resource_notifications)

[ __ View Source ](external_link)
    
    
    @spec notify([[Ash.Notifier.Notification.t](external_link)()] | [Ash.Notifier.Notification.t](external_link)()) :: [
      [Ash.Notifier.Notification.t](external_link)()
    ]

Sends any notifications that can be sent, and returns the rest.

A notification can only be sent if you are not currently in a transaction for the resource in question.
