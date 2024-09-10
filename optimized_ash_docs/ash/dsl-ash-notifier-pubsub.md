# DSL: Ash.Notifier.PubSub — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) DSL: Ash.Notifier.PubSub
  - __ Debugging PubSub
  - __ Topic Templates
  - __ Important
  - __ Template parts
  - __ Custom Delimiters
  - __ Named Pubsub modules
  - __ Broadcast Types
  - __ pub_sub
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ pub_sub.publish
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ pub_sub.publish_all
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) DSL: Ash.Notifier.PubSub

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



##  __ pub_sub

A section for configuring how resource actions are published over pubsub

###  __ Nested DSLs

  * publish
  * publish_all



###  __ Examples
    
    
    pub_sub do
      module MyEndpoint
      prefix "post"
    
      publish :destroy, ["foo", :id]
      publish :update, ["bar", :name] event: "name_change"
      publish_all :create, "created"
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`module`| `atom`| | The module to call `broadcast/3` on e.g module.broadcast(topic, event, message).  
`prefix`| `String.t`| | A prefix for all pubsub messages, e.g `users`. A message with `created` would be published as `users:created`  
`delimiter`| `String.t`| | A delimiter for building topics. Default is a colon (:)  
`broadcast_type`| `:notification | :phoenix_broadcast | :broadcast`| `:notification`| What shape the event payloads will be in. See  
`name`| `atom`| | A named pub sub to pass as the first argument to broadcast.  
  
##  __ pub_sub.publish
    
    
    publish action, topic

Configure a given action to publish its results over a given topic.

###  __ Examples
    
    
    publish :create, "created"
    
    
    publish :assign, "assigned"
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`action`| `atom`| | The name of the action that should be published  
`topic`| `any`| | The topic to publish  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`previous_values?`| `boolean`| `false`| Whether or not to publish messages with both the new values and the old values for referencing changed attributes  
`event`| `String.t`| | The name of the event to publish. Defaults to the action name  
`dispatcher`| `atom`| | The module to use as a dispatcher. If none is set, the pubsub module provided is used.  
  
###  __ Introspection

Target: [`Ash.Notifier.PubSub.Publication`](external_link)

##  __ pub_sub.publish_all
    
    
    publish_all type, topic

Works the same as `publish`, except that it takes a type and publishes all actions of that type.

###  __ Examples
    
    
    publish_all :create, "created"

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`type`| `:create | :update | :destroy`| | Publish on all actions of a given type  
`topic`| `any`| | The topic to publish  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`action`| `atom`| | The name of the action that should be published  
`previous_values?`| `boolean`| `false`| Whether or not to publish messages with both the new values and the old values for referencing changed attributes  
`event`| `String.t`| | The name of the event to publish. Defaults to the action name  
`dispatcher`| `atom`| | The module to use as a dispatcher. If none is set, the pubsub module provided is used.  
  
###  __ Introspection

Target: [`Ash.Notifier.PubSub.Publication`](external_link)

[ ← Previous Page  DSL: Ash.Domain.Dsl  ](external_link)

[ Next Page →  DSL: Ash.Policy.Authorizer  ](external_link)
