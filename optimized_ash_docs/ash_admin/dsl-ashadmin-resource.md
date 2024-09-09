# DSL: AshAdmin.Resource — ash_admin v0.11.5

Project: ash_admin v0.11.5

## Table of Contents

- [ __ View Source ](external_link) DSL: AshAdmin.Resource
  - __ admin
    - __ Nested DSLs
    - __ Options
  - __ admin.form
    - __ Nested DSLs
  - __ admin.form.field
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash_admin __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshAdmin.Resource

A resource extension to alter the behaviour of a resource in the admin UI.

##  __ admin

Configure the admin dashboard for a given resource.

###  __ Nested DSLs

  * form
    * field



###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | The proper name to use when this resource appears in the admin interface.  
`actor?`| `boolean`| | Whether or not this resource can be used as the actor for requests.  
`show_action`| `atom`| | The action to use when linking to the resource/viewing a single record. Defaults to the primary read action.  
`read_actions`| `list(atom)`| | A list of read actions that can be used to show resource details. By default, all actions are included.  
`create_actions`| `list(atom)`| | A list of create actions that can create records. By default, all actions are included.  
`update_actions`| `list(atom)`| | A list of update actions that can be used to update records. By default, all actions are included.  
`destroy_actions`| `list(atom)`| | A list of destroy actions that can be used to destroy records. By default, all actions are included.  
`polymorphic_tables`| `list(String.t)`| | For resources that use ash_postgres' polymorphism capabilities, you can provide a list of tables that should be available to select. These will be added to the list of derivable tables based on scanning all domains and resources provided to ash_admin.  
`polymorphic_actions`| `list(atom)`| | For resources that use ash_postgres' polymorphism capabilities, you can provide a list of actions that should require a table to be set. If this is not set, then _all_ actions will require tables.  
`table_columns`| `list(atom)`| | The list of attributes to render on the table view.  
`format_fields`| `list(any)`| | The list of fields and their formats.  
`relationship_display_fields`| `list(atom)`| | The list of attributes to render when this resource is shown as a relationship on another resource's datatable.  
`resource_group`| `atom`| | The group in the top resource dropdown that the resource appears in.  
`show_sensitive_fields`| `list(atom)`| | The list of fields that should not be redacted in the admin UI even if they are marked as sensitive.  
  
##  __ admin.form

Configure the appearance of fields in admin forms.

###  __ Nested DSLs

  * field



##  __ admin.form.field
    
    
    field name

Declare non-default behavior for a specific attribute.

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the field to be modified  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`type`| `:default | :long_text | :short_text | :markdown`| | The type of the value in the form. Use `default` if you are just specifying field order  
  
###  __ Introspection

Target: [`AshAdmin.Resource.Field`](external_link)

[ ← Previous Page  DSL: AshAdmin.Domain  ](external_link)

[ Next Page →  Change Log  ](external_link)
