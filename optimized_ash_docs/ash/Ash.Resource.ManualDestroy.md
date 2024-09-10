# Ash.Resource.ManualDestroy — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.ManualDestroy behaviour (ash v3.4.8)
- __ Summary
  - Callbacks
- __ Callbacks
- bulk_destroy(changesets, opts, context)
- destroy(changeset, opts, context)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.ManualDestroy behaviour (ash v3.4.8)

A module to implement manual destroy actions.

Note that in the returns of these functions you must return the destroyed record or records.

#  __ Summary

##  Callbacks

bulk_destroy(changesets, opts, context)

destroy(changeset, opts, context)

#  __ Callbacks

__ Link to this callback

# bulk_destroy(changesets, opts, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback bulk_destroy(
      changesets :: [Enumerable.t](external_link)([Ash.Changeset.t](external_link)()),
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.ManualDestroy.Context.t](external_link)()
    ) :: [
      ok: [Ash.Resource.record](external_link)(),
      error: [Ash.Error.t](external_link)(),
      notifications: [[Ash.Notifier.Notification.t](external_link)()]
    ]

__ Link to this callback

# destroy(changeset, opts, context)

[ __ View Source ](external_link)
    
    
    @callback destroy(
      changeset :: [Ash.Changeset.t](external_link)(),
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.ManualDestroy.Context.t](external_link)()
    ) ::
      {:ok, [Ash.Resource.record](external_link)()}
      | {:ok, [Ash.Resource.record](external_link)(), [[Ash.Notifier.Notification.t](external_link)()]}
      | {:error, [term](external_link)()}
