# AshPostgres.DataLayer.Info — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) AshPostgres.DataLayer.Info (ash_postgres v2.3.1)
- __ Summary
  - Functions
- __ Functions
- base_filter_sql(resource)
- calculation_to_sql(resource, calc)
- calculations_to_sql(resource)
- check_constraints(resource)
- custom_indexes(resource)
- custom_statements(resource)
- exclusion_constraint_names(resource)
- foreign_key_names(resource)
- global_upsert_keys(resource)
- identity_index_names(resource)
- identity_where_to_sql(resource, identity)
- identity_wheres_to_sql(resource)
- manage_tenant_create?(resource)
- manage_tenant_template(resource)
- manage_tenant_update?(resource)
- migrate?(resource)
- migration_defaults(resource)
- migration_ignore_attributes(resource)
- migration_types(resource)
- min_pg_version(resource)
- pg_version_matches?(resource, requirement)
- polymorphic?(resource)
- polymorphic_name(resource)
- polymorphic_on_delete(resource)
- polymorphic_on_update(resource)
- reference(resource, relationship)
- references(resource)
- repo(resource, type \\\ :mutate)
- schema(resource)
- simple_join_first_aggregates(resource)
- skip_identities(resource)
- skip_unique_indexes(resource)
- storage_types(resource)
- table(resource)
- unique_index_names(resource)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) AshPostgres.DataLayer.Info (ash_postgres v2.3.1)

Introspection functions for 

#  __ Summary

##  Functions

base_filter_sql(resource)

A stringified version of the base_filter, to be used in a where clause when generating unique indexes

calculation_to_sql(resource, calc)

calculations_to_sql(resource)

A keyword list of calculations to their sql representation

check_constraints(resource)

The configured check_constraints for a resource

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

identity_where_to_sql(resource, identity)

identity_wheres_to_sql(resource)

A keyword list of identity names to the sql representation of their where clauses

manage_tenant_create?(resource)

Whether or not to create a tenant for a given resource

manage_tenant_template(resource)

The template for a managed tenant

manage_tenant_update?(resource)

Whether or not to update a tenant for a given resource

migrate?(resource)

Whether or not the resource should be included when generating migrations

migration_defaults(resource)

A keyword list of customized migration defaults

migration_ignore_attributes(resource)

A list of attributes to be ignored when generating migrations

migration_types(resource)

A keyword list of customized migration types

min_pg_version(resource)

Gets the resource's repo's postgres version

pg_version_matches?(resource, requirement)

Checks a version requirement against the resource's repo's postgres version

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

repo(resource, type \\\ :mutate)

The configured repo for a resource

schema(resource)

The configured schema for a resource

simple_join_first_aggregates(resource)

skip_identities(resource)

Identities not to include in the migrations

skip_unique_indexes(resource)

Skip generating unique indexes when generating migrations

storage_types(resource)

A keyword list of customized storage types

table(resource)

The configured table for a resource

unique_index_names(resource)

The configured unique_index_names

#  __ Functions

__

# base_filter_sql(resource)

[ __](external_link)

A stringified version of the base_filter, to be used in a where clause when generating unique indexes

__

# calculation_to_sql(resource, calc)

[ __](external_link)

__

# calculations_to_sql(resource)

[ __](external_link)

A keyword list of calculations to their sql representation

__

# check_constraints(resource)

[ __](external_link)

The configured check_constraints for a resource

__

# custom_indexes(resource)

[ __](external_link)

The configured custom_indexes for a resource

__

# custom_statements(resource)

[ __](external_link)

The configured custom_statements for a resource

__

# exclusion_constraint_names(resource)

[ __](external_link)

The configured exclusion_constraint_names

__

# foreign_key_names(resource)

[ __](external_link)

The configured foreign_key_names

__

# global_upsert_keys(resource)

[ __](external_link)

A list of keys to always include in upserts.

__

# identity_index_names(resource)

[ __](external_link)

The configured identity_index_names

__

# identity_where_to_sql(resource, identity)

[ __](external_link)

__

# identity_wheres_to_sql(resource)

[ __](external_link)

A keyword list of identity names to the sql representation of their where clauses

__

# manage_tenant_create?(resource)

[ __](external_link)

Whether or not to create a tenant for a given resource

__

# manage_tenant_template(resource)

[ __](external_link)

The template for a managed tenant

__

# manage_tenant_update?(resource)

[ __](external_link)

Whether or not to update a tenant for a given resource

__

# migrate?(resource)

[ __](external_link)

Whether or not the resource should be included when generating migrations

__

# migration_defaults(resource)

[ __](external_link)

A keyword list of customized migration defaults

__

# migration_ignore_attributes(resource)

[ __](external_link)

A list of attributes to be ignored when generating migrations

__

# migration_types(resource)

[ __](external_link)

A keyword list of customized migration types

__

# min_pg_version(resource)

[ __](external_link)

Gets the resource's repo's postgres version

__

# pg_version_matches?(resource, requirement)

[ __](external_link)

Checks a version requirement against the resource's repo's postgres version

__

# polymorphic?(resource)

[ __](external_link)

The configured polymorphic? for a resource

__

# polymorphic_name(resource)

[ __](external_link)

The configured polymorphic_reference_name for a resource

__

# polymorphic_on_delete(resource)

[ __](external_link)

The configured polymorphic_reference_on_delete for a resource

__

# polymorphic_on_update(resource)

[ __](external_link)

The configured polymorphic_reference_on_update for a resource

__

# reference(resource, relationship)

[ __](external_link)

The configured reference for a given relationship of a resource

__

# references(resource)

[ __](external_link)

The configured references for a resource

__

# repo(resource, type \\\ :mutate)

[ __](external_link)

The configured repo for a resource

__

# schema(resource)

[ __](external_link)

The configured schema for a resource

__

# simple_join_first_aggregates(resource)

[ __](external_link)

__

# skip_identities(resource)

[ __](external_link)

Identities not to include in the migrations

__

# skip_unique_indexes(resource)

[ __](external_link)

Skip generating unique indexes when generating migrations

__

# storage_types(resource)

[ __](external_link)

A keyword list of customized storage types

__

# table(resource)

[ __](external_link)

The configured table for a resource

__

# unique_index_names(resource)

[ __](external_link)

The configured unique_index_names
