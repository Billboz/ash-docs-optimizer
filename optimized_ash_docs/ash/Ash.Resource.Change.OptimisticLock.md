# Ash.Resource.Change.OptimisticLock — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Change.OptimisticLock (ash v3.4.8)
  - __ What is Optimistic Locking?
    - __ User Experience
    - __ Concurrency Safety

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Change.OptimisticLock (ash v3.4.8)

Apply an "optimistic lock" on a record being updated or destroyed.

##  __ What is Optimistic Locking?

Optimistic Locking is the process of only allowing an update to occur if the version of a record that you have in memory is the same as the version in the database. Otherwise, an error is returned. On success, it increments the version while performing the action.

Optimistic locking may used for two primary purposes:

###  __ User Experience

For example, if a user is editing a form that contains `State` and `County` fields, and they change the `County`, while another user has used the form to change the `State`, you could end up with a mismatch between `State` and `County`.

With optimistic locking, the user will instead get an error message that the record has been changed since they last looked.

###  __ Concurrency Safety

Optimistic locking can make actions safe to run concurrently even if they can't be performed in a single query (atomically), by returning an error if the resource in the data layer does not have the same version as the one being edited.

This tells the user that they need to reload and try again.
