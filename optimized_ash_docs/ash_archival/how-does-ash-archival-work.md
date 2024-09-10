# How does Archival Work? — ash_archival v1.0.3

Project: ash_archival v1.0.3

## Table of Contents

- [ __ View Source ](external_link) How does Archival Work?
  - __ Resource Modifications

__

Search documentation of ash_archival __ __

__ Settings

#  [ __ View Source ](external_link) How does Archival Work?

We make modifications to the resource to enable soft deletes. Here's a breakdown of what the extension does:

##  __ Resource Modifications

  1. Adds a private `archived_at` `utc_datetime_usec` attribute.
  2. Adds a preparation that filters each action for `is_nil(archived_at)` (except for excluded actions, or if you have `base_filter?` set to `true`).
  3. Marks all destroy actions as `soft?`, turning them into updates (except for excluded actions)
  4. Adds a change to all destroy actions that sets `archived_at` to the current timestamp
  5. Adds a change that will iteratively load and destroy anything configured in `[AshArchival.Resource.archive.archive_related](external_link)`



[ ← Previous Page  Un-archiving  ](external_link)

[ Next Page →  Upserts & Identities  ](external_link)
