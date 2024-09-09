# Ash.Reactor.Notifications — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor.Notifications (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- complete(result, context)
- enqueue_notifications(context, notifications)
- error(errors, context)
- halt(context)
- init(context)
- publish(context, notifications)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor.Notifications (ash v3.4.8)

Reactor middleware used to collect and emit notifications upon successful completion of the Reactor.

#  __ Summary

##  Functions

complete(result, context)

When the reactor completes successfully, publish any queued notifications.

enqueue_notifications(context, notifications)

Add notifications to the queue to be published on reactor success.

error(errors, context)

When the reactor fails, discard any queued notifications.

halt(context)

When halting the reactor, store any queued notifications in the context for eventual resumption.

init(context)

When starting a reactor, start an agent to act as a temporary store of notifications.

publish(context, notifications)

Dispatch notifications.

#  __ Functions

__ Link to this function

# complete(result, context)

[ __ View Source ](external_link)

When the reactor completes successfully, publish any queued notifications.

__ Link to this function

# enqueue_notifications(context, notifications)

[ __ View Source ](external_link)
    
    
    @spec enqueue_notifications(
      [Reactor.context](external_link)(),
      [Enumerable.t](external_link)([Ash.Notifier.Notification.t](external_link)())
    ) ::
      :ok | {:error, [any](external_link)()}

Add notifications to the queue to be published on reactor success.

__ Link to this function

# error(errors, context)

[ __ View Source ](external_link)

When the reactor fails, discard any queued notifications.

__ Link to this function

# halt(context)

[ __ View Source ](external_link)

When halting the reactor, store any queued notifications in the context for eventual resumption.

__ Link to this function

# init(context)

[ __ View Source ](external_link)

When starting a reactor, start an agent to act as a temporary store of notifications.

__ Link to this function

# publish(context, notifications)

[ __ View Source ](external_link)
    
    
    @spec publish(
      [Reactor.context](external_link)(),
      [Ash.Notifier.Notification.t](external_link)() | [[Ash.Notifier.Notification.t](external_link)()]
    ) :: [[Ash.Notifier.Notification.t](external_link)()]

Dispatch notifications.
