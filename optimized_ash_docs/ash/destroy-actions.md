# Destroy Actions — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Destroy Actions
  - __ Soft Destroy
  - __ Returning the destroyed record
  - __ Bulk Destroys
  - __ Atomic
    - __ Example
  - __ Atomic Batches
    - __ Example
  - __ Stream
    - __ Destroying records
    - __ Destroying
  - __ Running the Destroy Action

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Destroy Actions

Destroy actions are comparatively simple. They expect to remove a given record, and by default return `:ok` in the successful case.

Most destroy actions are one-liners, for example:
    
    
    destroy :destroy
    # Can be added with the defaults
    defaults [:read, :destroy]

##  __ Soft Destroy

You can mark a destroy action as `soft? true`, in which case it is handled by the [`update` action](external_link) logic.

For example:
    
    
    destroy :archive do
      soft? true
      change set_attribute(:archived_at, &DateTime.utc_now/0)
    end

##  __ Returning the destroyed record

You can use the `return_destroyed?` option to return the destroyed record.
    
    
    ticket = Ash.get!(Ticket, 1)
    Ash.destroy!(ticket)
    # => :ok
    ticket = Ash.get!(Ticket, 2)
    Ash.destroy!(ticket, return_destroyed?: true)
    # => {:ok, %Ticket{}}

> ###  __ Loading on destroyed records
> 
> Keep in mind that using `Ash.load` on destroyed data will produced mixed results. Relationships may appear as empty, or may be loaded as expected (depending on the data layer/relationship implementation) and calculations/aggregates may show as `nil` if they must be run in the data layer.

##  __ Bulk Destroys

There are three strategies for bulk destroying data. They are, in order of preference: `:atomic`, `:atomic_batches`, and `:stream`. When calling [`Ash.bulk_destroy/4`](external_link), you can provide a strategy or strategies that can be used, and Ash will choose the best one available. The capabilities of the data layer determine what strategies can be used.

##  __ Atomic

Atomic bulk destroys are used when the subject of the bulk destroy is a query and the data layer supports destroying a query. They map to a single statement to the data layer to destroy all matching records.

###  __ Example
    
    
    Ticket
    |> Ash.Query.filter(status == :open)
    |> Ash.bulk_destroy!(:close)

If using a SQL data layer, this would produce a query along the lines of
    
    
    DELETE FROM tickets
    WHERE status = 'open';

##  __ Atomic Batches

Atomic batches are used when the subject of the bulk destroy is an enumerable (i.e list or stream) of records and the data layer supports destroying a query. The records are pulled out in batches, and then each batch follows the logic described above. The batch size is controllable by the `batch_size` option.

###  __ Example
    
    
    Ash.bulk_destroy!(one_hundred_tickets, :close, %{}, batch_size: 10)

If using a SQL data layer, this would produce ten queries along the lines of
    
    
    DELETE FROM tickets
    WHERE id IN (...ids)

##  __ Stream

Stream is used when the data layer does not support destroying a query. If a query is given, it is run and the records are used as an enumerable of inputs. If an enumerable of inputs is given, each one is destroyed individually. There is nothing inherently wrong with doing this kind of destroy, but it will naturally be slower than the other two strategies. The benefit of having a single interface ([`Ash.bulk_destroy/4`](external_link)) is that the caller doesn't need to change based on the performance implications of the action.

> ###  __ Check the docs!
> 
> Make sure to thoroughly read and understand the documentation in [`Ash.bulk_destroy/4`](external_link) before using. Read each option and note the default values. By default, bulk destroys don't return records or errors, and don't emit notifications.

###  __ Destroying records

If you provide an enumerable of records, they will be destroyed in batches. For example:
    
    
    Ash.bulk_destroy([%Ticket{}, %Ticket{}], :destroy)

###  __ Destroying

##  __ Running the Destroy Action

All actions are run in a transaction if the data layer supports it. You can opt out of this behavior by supplying `transaction?: false` when creating the action. When an action is being run in a transaction, all steps inside of it are serialized because transactions cannot be split across processes.

  * Authorization is performed on the changes
  * A before action hook is added to set up belongs_to relationships that are managed. This means potentially creating/modifying the destination of the relationship, and then changing the `destination_attribute` of the relationship.
  * `before_transaction` and `around_transaction` hooks are called ([`Ash.Changeset.before_transaction/2`](external_link)). Keep in mind, any validations that are marked as `before_action? true` (or all global validations if your action has `delay_global_validations? true`) will not have happened at this point.
  * A transaction is opened if the action is configured for it (by default they are) and the data layer supports transactions
  * `before_action` hooks are performed in order
  * The main action is sent to the data layer
  * `after_action` hooks are performed in order
  * Non-belongs-to relationships are managed, creating/updating/destroying related records.
  * The transaction is closed, if one was opened
  * `after_transaction` hooks are invoked with the result of the transaction (even if it was an error)



[ ← Previous Page  Update Actions  ](external_link)

[ Next Page →  Generic Actions  ](external_link)
