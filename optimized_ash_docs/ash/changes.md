# Changes — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Changes
  - __ Builtin Changes
  - __ Custom Changes
  - __ Anonymous Function Changes
  - __ Where
  - __ Action vs Global Changes
    - __ Examples
  - __ Atomic Changes
  - __ Batches

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Changes

Changes are the primary way of customizing create/update/destroy action behavior. If you are familiar with [`Plug`](external_link), you can think of an [`Ash.Resource.Change`](external_link) as the equivalent of a [`Plug`](external_link) for changesets. At its most basic, a change will take a changeset and return a new changeset. Changes can be simple, like setting or modifying an attribute value, or more complex, attaching hooks to be executed within the lifecycle of the action.

##  __ Builtin Changes

There are a number of builtin changes that can be used, and are automatically imported into your resources. See [`Ash.Resource.Change.Builtins`](external_link) for more.

Some examples of usage of builtin changes
    
    
    # set the `owner` to the current actor
    change relate_actor(:owner)
    
    # set `commited_at` to the current timestamp when the action is called
    change set_attribute(:committed_at, &DateTime.utc_now/0)
    
    # optimistic lock using the `version` attribute
    change optimistic_lock(:version)

##  __ Custom Changes
    
    
    defmodule MyApp.Changes.Slugify do
    
      use Ash.Resource.Change
    
      # transform and validate opts
      @impl true
      def init(opts) do
        if is_atom(opts[:attribute]) do
          {:ok, opts}
        else
          {:error, "attribute must be an atom!"}
        end
      end
    
      @impl true
      def change(changeset, opts, _context) do
        case Ash.Changeset.fetch_change(changeset, opts[:attribute]) do
          {:ok, new_value} ->
            slug = String.replace(new_value, ~r/\s+/, "-")
            Ash.Changeset.force_change_attribute(changeset, opts[:attribute], slug)
          :error ->
            changeset
        end
      end
    end

This could then be used in a resource via:
    
    
    change {MyApp.Changes.Slugify, attribute: :foo}

##  __ Anonymous Function Changes

You can also use anonymous functions for changes. Keep in mind, these cannot be made atomic, or support batching. This is great for prototyping, but we generally recommend using a module, both for organizational purposes, and to allow adding atomic/batch behavior.
    
    
    change fn changeset, _context ->
      # put your code here
    end

##  __ Where

The `where` can be used to perform changes conditionally. This functions by running the validations in the `where`, and if the validation returns an error, we discard the error and skip the operation. This means that even custom validations can be used in conditions.

For example:
    
    
    change {Slugify, attribute: :foo} do
      where [attribute_equals(:slugify, true)]
    end

##  __ Action vs Global Changes

You can place a change on any create, update, or destroy action. For example:
    
    
    actions do
      create :create do
        change {Slugify, attribute: :name}
      end
    end

Or you can use the global changes block to apply to all actions of a given type. Where statements can be used in both cases. Use `on` to determine the types of actions the validation runs on. By default, it only runs on create and update actions.
    
    
    changes do
      change {Slugify, attribute: :name} do
        on [:create]
      end
    end

The changes section allows you to add changes across multiple actions of a resource.

> ###  __ Running on destroy actions
> 
> By default, changes in the global `changes` block will run on create and update only. Many changes don't make sense in the context of destroys. To make them run on destroy, use `on: [:create, :update, :destroy]`

###  __ Examples
    
    
    changes do
      change relate_actor(:owner)
      change set_attribute(:committed_at, &DateTime.utc_now/0)
      change optimistic_lock(:version), on: [:create, :update, :destroy]
      change {Slugify, [attribute: :foo]}, on: :create
    end

##  __ Atomic Changes

To make a change atomic, you have to implement the [`Ash.Resource.Change.atomic/3`](external_link) callback. This callback returns a map of changes to attributes that should be changed atomically. We will also honor any [`Ash.Resource.Change.after_batch/3`](external_link) functionality to run code after atomic changes have been applied (only if `atomic/3` callback has also been defined). Note that [`Ash.Resource.Change.before_batch/3`](external_link) is not supported in this scenario and will be ignored.
    
    
    defmodule MyApp.Changes.Slugify do
      # transform and validate opts
    
      use Ash.Resource.Change
    
      ...
    
      def atomic(changeset, opts, context) do
        {:atomic, %{
          opts[:attribute] => expr(
            fragment("regexp_replace(?, ?, ?)", ^ref(opts[:attribute]), ~r/\s+/, "-")
          )
        }}
      end
    end

In some cases, changes operate only on arguments or context, or otherwise can do their work regardless of atomicity. In these cases, you can make your atomic callback call the `change/3` function
    
    
    @impl true
    def atomic(changeset, opts, context) do
      {:ok, change(changeset, opts, context)}
    end

In other cases, a change may not be necessary in a fully atomic action. For this, you can simply return `:ok`
    
    
    @impl true
    def atomic(_changeset, _opts, _context) do
      :ok
    end

##  __ Batches

Changes can support being run on batches of changesets, using the [`Ash.Resource.Change.batch_change/3`](external_link), [`Ash.Resource.Change.before_batch/3`](external_link), and [`Ash.Resource.Change.after_batch/3`](external_link) callbacks.

> ###  __ When do we use batch callbacks?
> 
> [`Ash.Resource.Change.batch_change/3`](external_link) must be defined for [`Ash.Resource.Change.before_batch/3`](external_link) and [`Ash.Resource.Change.after_batch/3`](external_link) to be called!
> 
> The one exception is that `after_batch/3` is called after atomic changes as well as batches, so it will be called in cases that `atomic/3` is defined. `before_batch/3` is ignored when calling changes atomically.

For some changes, this may not be necessary at all, i.e the `Slugify` example has no benefit from batching. If no batch callbacks are added, your change will be run on a loop over the changesets. For the sake of example, however, we will show what it might look like to implement batching for our `Slugify` example.
    
    
    defmodule MyApp.Changes.Slugify do
      # transform and validate opts
    
      use Ash.Resource.Change
    
      @impl true
      def init(opts) do
        if is_atom(opts[:attribute]) do
          {:ok, opts}
        else
          {:error, "attribute must be an atom!"}
        end
      end
    
      @impl true
      def batch_change(changeset, opts, context) do
        # here we could run queries or do common work required
        # for a given batch of changesets.
        # in this example, however, we just return the changesets with
        # the change logic applied.
        Enum.map(changesets, &change(&1, opts, context))
      end
    end

[ ← Previous Page  Validations  ](external_link)

[ Next Page →  Preparations  ](external_link)
