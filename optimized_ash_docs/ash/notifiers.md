# Notifiers — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Notifiers
  - __ Built-in Notifiers
  - __ Creating your own notifier
    - __ Example notifier
    - __ Including a notifier in a resource
  - __ Transactions

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Notifiers

##  __ Built-in Notifiers

Ash comes with a builtin pub_sub notifier: [`Ash.Notifier.PubSub`](external_link). See the module documentation for more.

##  __ Creating your own notifier

A notifier is a simple extension that must implement a single callback `notify/1`. Notifiers do not have to implement an Ash DSL extension, but they may in order to configure how that notifier should behave. See [`Ash.Notifier.Notification`](external_link) for the currently available fields on a notification.

For more information on creating a DSL extension to configure your notifier, see the docs for [`Spark.Dsl.Extension`](external_link).

> ###  __ Notifier performance
> 
> Notifiers should not do intensive synchronous work. If any heavy work needs to be done, they should delegate to something else to handle the notification, like sending it to a GenServer or GenStage.

###  __ Example notifier
    
    
    defmodule ExampleNotifier do
      use Ash.Notifier
    
      def notify(%Ash.Notifier.Notification{resource: resource, action: %{type: :create}, actor: actor}) do
        if actor do
          Logger.info("#{actor.id} created a #{resource}")
        else
          Logger.info("A non-logged in user created a #{resource}")
        end
      end
    end

###  __ Including a notifier in a resource

If the notifier is also an extension, include it in the `notifiers` key:
    
    
    defmodule MyResource do
      use Ash.Resource,
        notifiers: [ExampleNotifier]
    end

Configuring a notifier for a specific action or actions can be a great way to avoid complexity in the implementation of a notifier. It allows you to avoid doing things like pattern matching on the action, and treat it more like a change module, that does its work whenever it is called.
    
    
    create :create do
      notifiers [ExampleNotifier]
    end

When your notifier is not an extension, and you want it to run on all actions, include it this way to avoid unnecessary compile time dependencies:
    
    
    defmodule MyResource do
      use Ash.Resource,
        simple_notifiers: [ExampleNotifier]
    end

##  __ Transactions

Domain calls involving resources who's datalayer supports transactions (like Postgres), notifications are saved up and sent after the transaction is closed. For example, the domain call below ultimately results in many many database calls.
    
    
    Post
    |> Ash.Changeset.for_update(:update, %{})
    |> Ash.Changeset.manage_relationship(:related_posts, [1, 2, 3], type: :append)
    |> Ash.Changeset.manage_relationship(:related_posts, [4, 5], type: :remove)
    |> Ash.Changeset.manage_relationship(:comments, [10], type: :append)
    |> Ash.update!()

`Ash.Changeset.manage_relationship` doesn't leverage bulk operations yet, so it performs the following operations:

  * a read of the currently related posts
  * a read of the currently related comments
  * a creation of a post_link to relate to 1
  * a creation of a post_link to relate to 2
  * a creation of a post_link to relate to 3
  * a destruction of the post_link related to 4
  * a destruction of the post_link related to 5
  * an update to comment 10, to set its `post_id` to this post



If all three of these resources have notifiers configured, we need to send a notification for each operation (notifications are not sent for reads). For data consistency reasons, if a data layer supports transactions, all writes are done in a transaction. However, if you try to read the record from the database that you have just received a notification about before the transaction has been closed, in a different process, the information will be wrong. For this reason, Ash accumulates notifications until they can be sent.

If you need to perform multiple operations against your resources in your own transaction, you will have to handle that case yourself. To support this, [`Ash.create/2`](external_link), [`Ash.update/2`](external_link) and [`Ash.destroy/2`](external_link) support a `return_notifications?: true` option. This causes the domain call to return `{:ok, result, notifications}` in the successful case. Here is an example of how you might use it.
    
    
    result =
      Ash.DataLayer.transaction(resource, fn ->
        {:ok, something, notifications1} = create_something()
        {:ok, result, notifications2} = create_another_thing(something)
        {:ok, notifications3} = destroy_something(something)
    
        {result, Enum.concat([notifications1, notifications2, notifications3])}
      end)
    
    case result do
      {:ok, value, notifications} ->
         Ash.Notifier.notify(notifications)
    
         value
      {:error, error} ->
        handle_error(error)
    end

[ ← Previous Page  Identities  ](external_link)

[ Next Page →  Actions  ](external_link)
