# Ash.Resource.Change — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Change behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
- __ Types
- context()
- ref()
- t()
- __ Callbacks
- after_batch(changesets_and_results, opts, context)
- atomic(t, t, t)
- atomic?()
- batch_callbacks?(changesets_or_query, opts, context)
- batch_change(changesets, opts, context)
- before_batch(changesets, opts, context)
- change(changeset, opts, context)
- has_after_batch?()
- has_batch_change?()
- has_before_batch?()
- has_change?()
- init(opts)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Change behaviour (ash v3.4.8)

The behaviour for an action-specific resource change.

`init/1` is defined automatically by `use Ash.Resource.Change`, but can be implemented if you want to validate/transform any options passed to the module.

The main function is `change/3`. It takes the changeset, any options that were provided when this change was configured on a resource, and the context, which currently only has the actor.

#  __ Summary

##  Types

context()

ref()

t()

##  Callbacks

after_batch(changesets_and_results, opts, context)

Runs on each batch result after it is dispatched to the data layer.

atomic(t, t, t)

atomic?()

batch_callbacks?(changesets_or_query, opts, context)

Whether or not batch callbacks should be run (if they are defined). Defaults to `true`.

batch_change(changesets, opts, context)

Replaces `change/3` for batch actions, allowing to optimize changes for bulk actions.

before_batch(changesets, opts, context)

Runs on each batch before it is dispatched to the data layer.

change(changeset, opts, context)

has_after_batch?()

has_batch_change?()

has_before_batch?()

has_change?()

init(opts)

#  __ Types

__ Link to this type

# context()

[ __ View Source ](external_link)
    
    
    @type context() :: [Ash.Resource.Change.Context.t](external_link)()

__ Link to this type

# ref()

[ __ View Source ](external_link)
    
    
    @type ref() :: {[module](external_link)(), [Keyword.t](external_link)()} | [module](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Change{
      always_atomic?: [term](external_link)(),
      change: [term](external_link)(),
      description: [term](external_link)(),
      on: [term](external_link)(),
      only_when_valid?: [term](external_link)(),
      where: [term](external_link)()
    }

#  __ Callbacks

__ Link to this callback

# after_batch(changesets_and_results, opts, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback after_batch(
      changesets_and_results :: [{[Ash.Changeset.t](external_link)(), [Ash.Resource.record](external_link)()}],
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.Change.Context.t](external_link)()
    ) ::
      :ok
      | Enumerable.t(
          {:ok, [Ash.Resource.record](external_link)()}
          | {:error, [Ash.Error.t](external_link)()}
          | [Ash.Notifier.Notification.t](external_link)()
        )

Runs on each batch result after it is dispatched to the data layer.

__ Link to this callback

# atomic(t, t, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback atomic([Ash.Changeset.t](external_link)(), [Keyword.t](external_link)(), [Ash.Resource.Change.Context.t](external_link)()) ::
      {:ok, [Ash.Changeset.t](external_link)()}
      | {:atomic, %{optional([atom](external_link)()) => [Ash.Expr.t](external_link)() | {:atomic, [Ash.Expr.t](external_link)()}}}
      | {:atomic, [Ash.Changeset.t](external_link)(), %{optional([atom](external_link)()) => [Ash.Expr.t](external_link)()}}
      | {:atomic, [Ash.Changeset.t](external_link)(), %{optional([atom](external_link)()) => [Ash.Expr.t](external_link)()},
         [
           {:atomic, involved_fields :: [[atom](external_link)()] | :*,
            condition_expr :: [Ash.Expr.t](external_link)(), error_expr :: [Ash.Expr.t](external_link)()}
         ]}
      | {:not_atomic, [String.t](external_link)()}
      | :ok
      | {:error, [term](external_link)()}

__ Link to this callback

# atomic?()

[ __ View Source ](external_link)
    
    
    @callback atomic?() :: [boolean](external_link)()

__ Link to this callback

# batch_callbacks?(changesets_or_query, opts, context)

[ __ View Source ](external_link)
    
    
    @callback batch_callbacks?(
      changesets_or_query :: [[Ash.Changeset.t](external_link)()] | [Ash.Query.t](external_link)(),
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.Change.Context.t](external_link)()
    ) :: [boolean](external_link)()

Whether or not batch callbacks should be run (if they are defined). Defaults to `true`.

__ Link to this callback

# batch_change(changesets, opts, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback batch_change(
      changesets :: [[Ash.Changeset.t](external_link)()],
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.Change.Context.t](external_link)()
    ) :: [Enumerable.t](external_link)([Ash.Changeset.t](external_link)())

Replaces `change/3` for batch actions, allowing to optimize changes for bulk actions.

You can define only `batch_change/3`, and it will be used for both single and batch actions. It cannot, however, be used in place of the `atomic/3` callback.

__ Link to this callback

# before_batch(changesets, opts, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback before_batch(
      changesets :: [[Ash.Changeset.t](external_link)()],
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.Change.Context.t](external_link)()
    ) :: [Enumerable.t](external_link)([Ash.Changeset.t](external_link)() | [Ash.Notifier.Notification.t](external_link)())

Runs on each batch before it is dispatched to the data layer.

__ Link to this callback

# change(changeset, opts, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback change(
      changeset :: [Ash.Changeset.t](external_link)(),
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.Change.Context.t](external_link)()
    ) :: [Ash.Changeset.t](external_link)()

__ Link to this callback

# has_after_batch?()

[ __ View Source ](external_link)
    
    
    @callback has_after_batch?() :: [boolean](external_link)()

__ Link to this callback

# has_batch_change?()

[ __ View Source ](external_link)
    
    
    @callback has_batch_change?() :: [boolean](external_link)()

__ Link to this callback

# has_before_batch?()

[ __ View Source ](external_link)
    
    
    @callback has_before_batch?() :: [boolean](external_link)()

__ Link to this callback

# has_change?()

[ __ View Source ](external_link)
    
    
    @callback has_change?() :: [boolean](external_link)()

__ Link to this callback

# init(opts)

[ __ View Source ](external_link)
    
    
    @callback init(opts :: [Keyword.t](external_link)()) :: {:ok, [Keyword.t](external_link)()} | {:error, [term](external_link)()}
