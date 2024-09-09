# Aggregates — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Aggregates
  - __ Declaring aggregates on a resource
  - __ Using an aggregate
    - __ Loading aggregates in a query or on records
    - __ Filtering on aggregates
    - __ Sorting aggregates
  - __ Aggregate types
  - __ Custom aggregates in the query
  - __ Join Filters
    - __ Example
  - __ Inline Aggregates

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Aggregates

Aggregates in Ash allow for retrieving summary information over groups of related data. A simple example might be to show the "count of published posts for a user". Aggregates allow us quick and performant access to this data, in a way that supports being filtered/sorted on automatically. More aggregate types can be added, but you will be restricted to only the supported types. In cases where aggregates don't suffice, use [Calculations](external_link), which are intended to be much more flexible.

##  __ Declaring aggregates on a resource

Aggregates are defined in an `aggregates` section. For all possible types, see below. For a full reference, see `[Ash.Resource.Dsl.aggregates](external_link)`.
    
    
    aggregates do
      count :count_of_posts, :posts do
        filter expr(published == true)
      end
    end

##  __ Using an aggregate

Aggregates are loaded and filtered on in the same way that calculations are. Lets look at some examples:

###  __ Loading aggregates in a query or on records
    
    
    User
    |> Ash.Query.load(:count_of_posts)
    |> Map.get(:count_of_posts)
    # => 10
    
    users
    |> Ash.load!(:count_of_posts)
    |> Enum.map(&(&1.count_of_posts)
    # => [3, 5, 2]

###  __ Filtering on aggregates
    
    
    require Ash.Query
    
    User
    |> Ash.Query.filter(count_of_posts > 10)
    |> Ash.read!()

###  __ Sorting aggregates
    
    
    User
    |> Ash.Query.sort(count_of_posts: :asc)
    |> Ash.read!()

##  __ Aggregate types

  * `count` \- counts related items meeting the criteria.
  * `exists` \- checks if any related items meet the criteria.
  * `first` \- gets the first related value matching the criteria. Must specify the `field`.
  * `sum` \- sums the related items meeting the criteria. Must specify the `field`.
  * `list` \- lists the related values. Must specify the `field`.
  * `max` \- gets the maximum related value. Must specify the `field`.
  * `min` \- gets the minimum related value. Must specify the `field`.
  * `avg` \- gets the average related value. Must specify the `field`.
  * `custom` \- allows for a custom aggregate. Implementation depends on the data layer. Must provide an `implementation`.



The declared set of named aggregates can be used by extensions and referred to throughout your application As an escape hatch, they can also be loaded in the query using [`Ash.Query.load/2`](external_link), or after the fact using [`Ash.load/3`](external_link). Aggregates declared on the resource will be keys in the resource's struct.

See the docs on `[Ash.Resource.Dsl.aggregates](external_link)` for more information.

##  __ Custom aggregates in the query

Custom aggregates can be added to the query and will be placed in the `aggregates` key of the results. This is an escape hatch, and is not the primary way that you should be using aggregates. It does, however, allow for dynamism, i.e if you are accepting user input that determines what the filter and/or field should be, that kind of thing.

Example:
    
    
    User
    |> Ash.Query.aggregate(
      :count_of_posts,
      :count,
      :posts,
      query: [
        filter: [published: published?]
      ]
    )

See the documentation for [`Ash.Query.aggregate/4`](external_link) for more information.

##  __ Join Filters

Join filters allows for more complex aggregate queries, including joining with predicates based on multiple related values.

###  __ Example
    
    
      aggregates do
        sum :saved_money, [:redeems, :deal], :amount do
          # where any redeem of the deal is redeemed
          filter expr(redeems.redeemed == true)
    
          # where the `redeems` are `redeemed`
          join_filter :redeems, expr(redeemed == true)
    
          # where the `redeems.deal.active` == `redeems.require_active`
          join_filter [:redeems, :deal], expr(active == parent(require_active))
        end
      end

##  __ Inline Aggregates

Aggregates can be created in-line in expressions, with their relationship path specified and any options provided that match the options given to [`Ash.Query.Aggregate.new/4`](external_link). For example:
    
    
    calculate :grade, :decimal, expr(
      count(answers, query: [filter: expr(correct == true)]) /
      count(answers, query: [filter: expr(correct == false)])
    )

See the [Expressions guide](external_link) for more.

[ ← Previous Page  Calculations  ](external_link)

[ Next Page →  Validations  ](external_link)
