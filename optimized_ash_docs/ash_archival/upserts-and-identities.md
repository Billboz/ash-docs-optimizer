# Upserts & Identities — ash_archival v1.0.3

Project: ash_archival v1.0.3

## Table of Contents

- [ __ View Source ](external_link) Upserts & Identities
  - __ With `is_nil(archived_at)`
  - __ Without `is_nil(archived_at)`

__

Search documentation of ash_archival __ __

__ Settings

#  [ __ View Source ](external_link) Upserts & Identities

Its important to consider identities when using AshArchival _without_ a `base_filter` set up.

If you are using a `base_filter`, then all identities implicitly include that `base_filter` in their `where` (handled by the data layer).

Take the following identities, for example:
    
    
    identities do
      identity :unique_email, [:email], where: expr(is_nil(archived_at))
      # and
      identity :unique_email, [:email]
    end

##  __ With `is_nil(archived_at)`

Using this identity allows multiple archived records with the same email, but only one _non-archived_ record per email. It enables reuse of archived email addresses for new active records, maintaining data integrity by preventing duplicate active records while preserving archived data.

When you upsert a record using this identity, it will only consider active records.

##  __ Without `is_nil(archived_at)`

This identity configuration enforces strict email uniqueness across all records. Once an email is used, it can't be used again, even after that record is archived.

When you upsert a record using this identity, it will consider all records.

[ ← Previous Page  How does Archival Work?  ](external_link)

[ Next Page →  DSL: AshArchival.Resource  ](external_link)
