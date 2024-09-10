# References — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) References
  - __ Important
  - __ Nothing vs Restrict
  - __ On Delete

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) References

To configure the foreign keys on a resource, we use the `references` block.

For example:
    
    
    references do
      reference :post, on_delete: :delete, on_update: :update, name: "comments_to_posts_fkey"
    end

##  __ Important

No resource logic is applied with these operations! No authorization rules or validations take place, and no notifications are issued. This operation happens _directly_ in the database. That

##  __ Nothing vs Restrict

The difference between `:nothing` and `:restrict` is subtle and, if you are unsure, choose `:nothing` (the default behavior). `:restrict` will prevent the deletion from happening _before_ the end of the database transaction, whereas `:nothing` allows the transaction to complete before doing so. This allows for things like updating or deleting the destination row and _then_ updating updating or deleting the reference(as long as you are in a transaction).

##  __ On Delete

This option is called `on_delete`, instead of `on_destroy`, because it is hooking into the database level deletion, _not_ a `destroy` action in your resource.

[ ← Previous Page  What is AshSqlite?  ](external_link)

[ Next Page →  Polymorphic Resources  ](external_link)
