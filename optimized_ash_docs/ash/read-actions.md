# Read Actions — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Read Actions
  - __ Ash.get!
  - __ Ash.read_one!
  - __ Pagination
  - __ What happens when you call Ash.Query.for_read/4
  - __ What happens when you run the action

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Read Actions

Read actions operate on an [`Ash.Query`](external_link). Read actions always return lists of data. The act of pagination, or returning a single result, is handled as part of the interface, and is not a concern of the action itself. Here is an example of a read action:
    
    
    # Giving your actions informative names is always a good idea
    read :ticket_queue do
      # Use arguments to take in values you need to run your read action.
      argument :priorities, {:array, :atom} do
        constraints items: [one_of: [:low, :medium, :high]]
      end
    
      # This action may be paginated,
      # and returns a total count of records by default
      pagination offset: true, countable: :by_default
    
      # Arguments can be used in preparations and filters
      filter expr(status == :open and priority in ^arg(:priorities))
    end

##  __ Ash.get!

The `Ash.get!` function is a convenience function for running a read action, filtering by a unique identifier, and expecting only a single result. It is equivalent to the following code:
    
    
    Ash.get!(Resource, 1)
    
    # is roughly equivalent to
    
    Resource
    |> Ash.Query.filter(id == 1)
    |> Ash.Query.limit(2)
    |> Ash.read!()
    |> case do
      [] -> # raise not found error
      [result] -> result
      [_, _] -> # raise too many results error
    end

##  __ Ash.read_one!

The `Ash.read_one!` function is a similar convenience function to `Ash.get!`, but it does not take a unique identifier. It is useful when you expect an action to return only a single result, and want to enforce that and return a single result.
    
    
    Ash.read_one!(query)
    
    # is roughly equivalent to
    
    query
    |> Ash.Query.limit(2)
    |> Ash.read!()
    |> case do
      [] -> nil
      [result] -> result
      [_, _] -> # raise too many results error
    end

##  __ Pagination

Ash provides built-in support for pagination when reading resources and their relationships. You can find more information about this in the [pagination guide](external_link).

##  __ What happens when you call Ash.Query.for_read/4

The following steps are performed when you call [`Ash.Query.for_read/4`](external_link).

  * Cast input arguments - `[Ash.Resource.Dsl.actions.read.argument](external_link)`
  * Set default argument values - `[Ash.Resource.Dsl.actions.read.argument.default](external_link)`
  * Add errors for missing required arguments | `[Ash.Resource.Dsl.actions.read.argument.allow_nil?](external_link)`

  * Run query preparations | `[Ash.Resource.Dsl.actions.read.prepare](external_link)`

  * Add action filter | `[Ash.Resource.Dsl.actions.read.filter](external_link)`




##  __ What happens when you run the action

These steps are trimmed down, and are aimed at helping users understand the general flow. Some steps are omitted.

  * Run [`Ash.Query.for_read/3`](external_link) if it has not already been run
  * [Apply tenant filters for attribute](external_link)
  * Apply [pagination](external_link) options
  * Run before action hooks
  * Multi-datalayer filter is synthesized. We run queries in other data layers to fetch ids and translate related filters to `(destination_field in ^ids)`
  * Strict Check & Filter Authorization is run
  * Data layer query is built and validated
  * Field policies are added to the query
  * Data layer query is Run
  * Authorizer "runtime" checks are run (you likely do not have any of these)



The following steps happen while(asynchronously) or after the main data layer query has been run

  * If paginating and count was requested, the count is determined at the same time as the query is run.
  * Any calculations & aggregates that were able to be run outside of the main query are run
  * Relationships, calculations, and aggregates are loaded



[ ← Previous Page  Actions  ](external_link)

[ Next Page →  Create Actions  ](external_link)
