# DSL: AshAdmin.Domain — ash_admin v0.11.5

Project: ash_admin v0.11.5

## Table of Contents

- [ __ View Source ](external_link) DSL: AshAdmin.Domain
  - __ admin
    - __ Options

__

Search documentation of ash_admin __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshAdmin.Domain

A domain extension to alter the behavior of a domain in the admin UI.

##  __ admin

Configure the admin dashboard for a given domain.

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | The name of the domain in the dashboard. Will be derived if not set.  
`show?`| `boolean`| `false`| Whether or not this domain and its resources should be included in the admin dashboard.  
`show_resources`| `atom | list(atom)`| `:*`| List of resources that should be included in the admin dashboard  
`default_resource_page`| `:schema | :primary_read`| `:schema`| Set the default page for the resource to be the primary read action or the resource schema. Schema is the default for backwards compatibility, if a resource doesn't have a primary read action it will fallback to the schema view.  
`resource_group_labels`| `keyword`| `[]`| Humanized names for each resource group to appear in the admin area. These will be used as labels in the top navigation dropdown. If a key for a group does not appear in this mapping, the label will not be rendered.  
  
[ ← Previous Page  Contributing to AshAdmin  ](external_link)

[ Next Page →  DSL: AshAdmin.Resource  ](external_link)
