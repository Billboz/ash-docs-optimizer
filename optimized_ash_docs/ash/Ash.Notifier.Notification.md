# Ash.Notifier.Notification — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Notifier.Notification (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(resource, opts)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Notifier.Notification (ash v3.4.8)

Represents a notification that will be handled by a resource's notifiers

Set the `for` key to a notifier or a list of notifiers to route the notification to them. This allows you to produce notifications inside of a `change` module and target specific notifiers with them.

`metadata` is freeform data to be set however you want. `resource`, `action`, `data`, `changeset` and `actor` are all set by default based on the details of the action, so they can be omitted.

When creating a notification, a resource is required to ensure that the notification isn't sent until the current transaction for that resource is closed. If you don't need this behavior you can explicitly supply `nil` for the resource. If you supply `nil` for the resource, however, you must manually set the `for` option, e.g: `for: Notifier` or `for: [Notifier1, Notifier2]`

#  __ Summary

##  Types

t()

##  Functions

new(resource, opts)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Notifier.Notification{
      action: [term](external_link)(),
      actor: [term](external_link)(),
      changeset: [term](external_link)(),
      data: [term](external_link)(),
      domain: [term](external_link)(),
      for: [term](external_link)(),
      from: [term](external_link)(),
      metadata: [term](external_link)(),
      resource: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# new(resource, opts)

[ __ View Source ](external_link)
