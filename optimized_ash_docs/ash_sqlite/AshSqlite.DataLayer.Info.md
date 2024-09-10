# AshSqlite.DataLayer.Info — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) AshSqlite.DataLayer.Info (ash_sqlite v0.1.3)
- __ Summary
  - Functions
- __ Functions
- base_filter_sql(resource)
- custom_indexes(resource)
- custom_statements(resource)
- exclusion_constraint_names(resource)
- foreign_key_names(resource)
- global_upsert_keys(resource)
- identity_index_names(resource)
- migrate?(resource)
- migration_defaults(resource)
- migration_ignore_attributes(resource)
- migration_types(resource)
- polymorphic?(resource)
- polymorphic_name(resource)
- polymorphic_on_delete(resource)
- polymorphic_on_update(resource)
- reference(resource, relationship)
- references(resource)
- repo(resource)
- skip_identities(resource)
- skip_unique_indexes(resource)
- table(resource)
- unique_index_names(resource)

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) AshSqlite.DataLayer.Info (ash_sqlite v0.1.3)

Introspection functions for 

#  __ Summary

##  Functions

base_filter_sql(resource)

A stringified version of the base_filter, to be used in a where clause when generating unique indexes

custom_indexes(resource)

The configured custom_indexes for a resource

custom_statements(resource)

The configured custom_statements for a resource

exclusion_constraint_names(resource)

The configured exclusion_constraint_names

foreign_key_names(resource)

The configured foreign_key_names

global_upsert_keys(resource)

A list of keys to always include in upserts.

identity_index_names(resource)

The configured identity_index_names

migrate?(resource)

Whether or not the resource should be included when generating migrations

migration_defaults(resource)

A keyword list of customized migration defaults

migration_ignore_attributes(resource)

A list of attributes to be ignored when generating migrations

migration_types(resource)

A keyword list of customized migration types

polymorphic?(resource)

The configured polymorphic? for a resource

polymorphic_name(resource)

The configured polymorphic_reference_name for a resource

polymorphic_on_delete(resource)

The configured polymorphic_reference_on_delete for a resource

polymorphic_on_update(resource)

The configured polymorphic_reference_on_update for a resource

reference(resource, relationship)

The configured reference for a given relationship of a resource

references(resource)

The configured references for a resource

repo(resource)

The configured repo for a resource

skip_identities(resource)

Identities not to include in the migrations

skip_unique_indexes(resource)

Skip generating unique indexes when generating migrations

table(resource)

The configured table for a resource

unique_index_names(resource)

The configured unique_index_names

#  __ Functions

__ Link to this function

# base_filter_sql(resource)

[ __ View Source ](external_link)

A stringified version of the base_filter, to be used in a where clause when generating unique indexes

__ Link to this function

# custom_indexes(resource)

[ __ View Source ](external_link)

The configured custom_indexes for a resource

__ Link to this function

# custom_statements(resource)

[ __ View Source ](external_link)

The configured custom_statements for a resource

__ Link to this function

# exclusion_constraint_names(resource)

[ __ View Source ](external_link)

The configured exclusion_constraint_names

__ Link to this function

# foreign_key_names(resource)

[ __ View Source ](external_link)

The configured foreign_key_names

__ Link to this function

# global_upsert_keys(resource)

[ __ View Source ](external_link)

A list of keys to always include in upserts.

__ Link to this function

# identity_index_names(resource)

[ __ View Source ](external_link)

The configured identity_index_names

__ Link to this function

# migrate?(resource)

[ __ View Source ](external_link)

Whether or not the resource should be included when generating migrations

__ Link to this function

# migration_defaults(resource)

[ __ View Source ](external_link)

A keyword list of customized migration defaults

__ Link to this function

# migration_ignore_attributes(resource)

[ __ View Source ](external_link)

A list of attributes to be ignored when generating migrations

__ Link to this function

# migration_types(resource)

[ __ View Source ](external_link)

A keyword list of customized migration types

__ Link to this function

# polymorphic?(resource)

[ __ View Source ](external_link)

The configured polymorphic? for a resource

__ Link to this function

# polymorphic_name(resource)

[ __ View Source ](external_link)

The configured polymorphic_reference_name for a resource

__ Link to this function

# polymorphic_on_delete(resource)

[ __ View Source ](external_link)

The configured polymorphic_reference_on_delete for a resource

__ Link to this function

# polymorphic_on_update(resource)

[ __ View Source ](external_link)

The configured polymorphic_reference_on_update for a resource

__ Link to this function

# reference(resource, relationship)

[ __ View Source ](external_link)

The configured reference for a given relationship of a resource

__ Link to this function

# references(resource)

[ __ View Source ](external_link)

The configured references for a resource

__ Link to this function

# repo(resource)

[ __ View Source ](external_link)

The configured repo for a resource

__ Link to this function

# skip_identities(resource)

[ __ View Source ](external_link)

Identities not to include in the migrations

__ Link to this function

# skip_unique_indexes(resource)

[ __ View Source ](external_link)

Skip generating unique indexes when generating migrations

__ Link to this function

# table(resource)

[ __ View Source ](external_link)

The configured table for a resource

__ Link to this function

# unique_index_names(resource)

[ __ View Source ](external_link)

The configured unique_index_names
