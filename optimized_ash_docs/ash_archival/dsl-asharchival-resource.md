# DSL: AshArchival.Resource — ash_archival v1.0.3

Project: ash_archival v1.0.3

## Table of Contents

- [ __ View Source ](external_link) DSL: AshArchival.Resource
  - __ archive
    - __ Options

__

Search documentation of ash_archival __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshArchival.Resource

Configures a resource to be archived instead of destroyed for all destroy actions.

For more information, see [the getting started guide](external_link)

##  __ archive

A section for configuring how archival is configured for a resource.

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`attribute`| `atom`| `:archived_at`| The attribute in which to store the archival flag (the current datetime).  
`base_filter?`| `atom`| `false`| Whether or not a base filter exists that applies the `is_nil(archived_at)` rule.  
`exclude_read_actions`| `atom | list(atom)`| `[]`| A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.  
`exclude_upsert_actions`| `atom | list(atom)`| `[]`| This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.  
`exclude_destroy_actions`| `atom | list(atom)`| `[]`| A destroy action or actions that should _not_ archive, but instead be left alone. This allows for having a destroy _or_ archive pattern.  
`archive_related`| `list(atom)`| `[]`| A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.  
  
[ ← Previous Page  Upserts & Identities  ](external_link)
