# Ash.Notifier.PubSub — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Notifier.PubSub (ash v3.4.8)
  - __ Debugging PubSub
  - __ Topic Templates
  - __ Important
  - __ Template parts
  - __ Custom Delimiters
  - __ Named Pubsub modules
  - __ Broadcast Types
- __ Summary
  - Functions
- __ Functions
- pub_sub(body)
- to_payload(topic, event, notification)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Notifier.PubSub (ash v3.4.8)

A builtin notifier to help you publish events over any kind of pub-sub tooling.

This is plug and play with `Phoenix.PubSub`, but could be used with any pubsub system.

You configure a module that defines a `broadcast/3` function, and then add some "publications" which configure under what conditions an event should be sent and what the topic should be.

##  __ Debugging PubSub

It can be quite frustrating when setting up pub_sub when everything appears to be set up properly, but you aren't receiving events. This usually means some kind of mismatch between the event names produced by the resource/config of your publications, and you can use the following flag to display debug information about all pub sub events.
    
    
    config :ash, :pub_sub, debug?: true

##  __ Topic Templates

Often you want to include some piece of data in the thing being changed, like the `:id` attribute. This is done by providing a list as the topic, and using atoms which will be replaced by their corresponding values. They will ultimately be joined with `:`.

For example:
    
    
    prefix "user"
    
    publish :create, ["created", :user_id]

This might publish a message to "user:created:1" for example.

For updates, if the field in the template is being changed, a message is sent to _both_ values. So if you change `user 1` to `user 2`, the same message would be published to `user:updated:1` and `user:updated:2`. If there are multiple attributes in the template, and they are all being changed, a message is sent for every combination of substitutions.

##  __ Important

If the previous value was `nil` or the field was not selected on the data passed into the action, then a notification is not sent for the previous value.

If the new value is `nil` then a notification is not sent for the new value.

##  __ Template parts

Templates may contain lists, in which case all combinations of values in the list will be used. Add `nil` to the list if you want to produce a pattern where that entry is omitted.

The atom `:_tenant` may be used. If the changeset has a tenant set on it, that value will be used, otherwise that combination of values is ignored.

The atom `:_pkey` may be used. It will be a stringified, concatenation of the primary key fields, or just the primary key if there is only one primary key field.

The atom `nil` may be used. It only makes sense to use it in the context of a list of alternatives, and adds a pattern where that part is skipped.
    
    
    publish :updated, [[:team_id, :_tenant], "updated", [:id, nil]]

Would produce the following messages, given a `team_id` of 1, a `tenant` of `org_1`, and an `id` of `50`:
    
    
    "1:updated:50"
    "1:updated"
    "org_1:updated:50"
    "org_1:updated"

##  __ Custom Delimiters

It's possible to change the default delimiter used when generating topics. This is useful when working with message brokers like RabbitMQ, which rely on a different set of delimiters for routing.
    
    
    pub_sub do
      delimiter "."
    end

##  __ Named Pubsub modules

If you are using a phoenix `Endpoint` module for pubsub then this is unnecessary. If you want to use a custom pub sub started with something like `{Phoenix.PubSub, name: MyName}`, then you can provide `MyName` to here.

##  __ Broadcast Types

Configured with `broadcast_type`.

  * `:notification` just sends the notification
  * `:phoenix_broadcast` sends a `%Phoenix.Socket.Broadcast{}` (see above)
  * `:broadcast` sends `%{topic: (topic), event: (event), notification: (notification)}`



#  __ Summary

##  Functions

pub_sub(body)

to_payload(topic, event, notification)

#  __ Functions

__ Link to this macro

# pub_sub(body)

[ __ View Source ](external_link) (macro)

__ Link to this function

# to_payload(topic, event, notification)

[ __ View Source ](external_link)
