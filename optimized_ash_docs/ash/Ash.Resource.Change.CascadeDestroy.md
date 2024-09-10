# Ash.Resource.Change.CascadeDestroy — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Change.CascadeDestroy (ash v3.4.8)
  - __ Options
  - __ Example

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Change.CascadeDestroy (ash v3.4.8)

Cascade a resource's destroy action to a related resource's destroy action.

Adds an after-action hook that explicitly calls destroy on any records related via the named relationship. It will optimise for bulk destroys where possible.

> #### Beware database constraints
> 
> Think carefully before using this change with data layers which enforce referential integrity (ie PostgreSQL and SQLite) and you may need to defer constraints for the relationship in question.
> 
> See also:
> 
>   1. [`postgres.references.reference.deferrable` DSL](external_link)
>   2. [`sqlite.references.reference.deferrable` DSL](external_link)
>   3. [PostgreSQL's `SET CONSTRAINTS` documentation](external_link)
>   4. [SQLite's `PRAGMA defer_foreign_keys` documentation](external_link)
> 


> #### Cascading notifications
> 
> By default notifications are disabled for the related destroy. This is to avoid potentially sending a **lot** of notifications for high-cardinality relationships.

##  __ Options

  * `:relationship` ([`atom/0`](external_link)) - Required. The name of the relationship to work on

  * `:action` ([`atom/0`](external_link)) - The name of the destroy action to call on the related resource. Uses the primary destroy by default.

  * `:read_action` ([`atom/0`](external_link)) - The name of the read action to call on the related resource to find results to be destroyed

  * `:return_notifications?` ([`boolean/0`](external_link)) - Return notifications for all destroyed records? The default value is `false`.




##  __ Example
    
    
    change {Ash.Resource.Change.CascadeDestroy, relationship: :comments, action: :destroy}

or, equivalently using [`Ash.Resource.Change.Builtins.cascade_destroy/2`](external_link):
    
    
    change cascade_destroy(:comments, action: :destroy)
