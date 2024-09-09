# Ash.Resource.ManualCreate — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.ManualCreate behaviour (ash v3.4.8)
- __ Summary
  - Callbacks
- __ Callbacks
- bulk_create(changesets, opts, context)
- create(changeset, opts, context)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.ManualCreate behaviour (ash v3.4.8)

A module to implement manual create actions.

#  __ Summary

##  Callbacks

bulk_create(changesets, opts, context)

create(changeset, opts, context)

#  __ Callbacks

__ Link to this callback

# bulk_create(changesets, opts, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback bulk_create(
      changesets :: [Enumerable.t](external_link)([Ash.Changeset.t](external_link)()),
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.ManualCreate.Context.t](external_link)()
    ) :: [
      :ok
      | {:ok, [Ash.Resource.record](external_link)()}
      | {:error, [Ash.Error.t](external_link)()}
      | {:notifications, [[Ash.Notifier.Notification.t](external_link)()]}
    ]

__ Link to this callback

# create(changeset, opts, context)

[ __ View Source ](external_link)
    
    
    @callback create(
      changeset :: [Ash.Changeset.t](external_link)(),
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.ManualCreate.Context.t](external_link)()
    ) ::
      {:ok, [Ash.Resource.record](external_link)()}
      | {:ok, [Ash.Resource.record](external_link)(),
         %{notifications: [[Ash.Notifier.Notification.t](external_link)()]}}
      | {:error, [term](external_link)()}
