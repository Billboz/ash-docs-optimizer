# Demo.Repo — ash_admin v0.11.5

Project: ash_admin v0.11.5

## Table of Contents

- [ __ View Source ](external_link) Demo.Repo (ash_admin v0.11.5)
- __ Summary
  - Functions
- __ Functions
- aggregate(queryable, aggregate, opts \\\ [])
- aggregate(queryable, aggregate, field, opts)
- all(queryable, opts \\\ [])
- all_tenants()
- checked_out?()
- checkout(fun, opts \\\ [])
- child_spec(opts)
- config()
- create?()
- default_options(operation)
- default_prefix()
- delete(struct, opts \\\ [])
- delete!(struct, opts \\\ [])
- delete_all(queryable, opts \\\ [])
- disconnect_all(interval, opts \\\ [])
- drop?()
- exists?(queryable, opts \\\ [])
- explain(operation, queryable, opts \\\ [])
- from_ecto(other)
- get(queryable, id, opts \\\ [])
- get!(queryable, id, opts \\\ [])
- get_by(queryable, clauses, opts \\\ [])
- get_by!(queryable, clauses, opts \\\ [])
- get_dynamic_repo()
- in_transaction?()
- init(type, config)
- insert(struct, opts \\\ [])
- insert!(struct, opts \\\ [])
- insert_all(schema_or_source, entries, opts \\\ [])
- insert_or_update(changeset, opts \\\ [])
- insert_or_update!(changeset, opts \\\ [])
- installed_extensions()
- load(schema_or_types, data)
- migrations_path()
- min_pg_version()
- on_transaction_begin(reason)
- one(queryable, opts \\\ [])
- one!(queryable, opts \\\ [])
- override_migration_type(type)
- preload(struct_or_structs_or_nil, preloads, opts \\\ [])
- prepare_query(operation, query, opts)
- put_dynamic_repo(dynamic)
- query(sql, params \\\ [], opts \\\ [])
- query!(sql, params \\\ [], opts \\\ [])
- query_many(sql, params \\\ [], opts \\\ [])
- query_many!(sql, params \\\ [], opts \\\ [])
- reload(queryable, opts \\\ [])
- reload!(queryable, opts \\\ [])
- rollback(value)
- start_link(opts \\\ [])
- stop(timeout \\\ 5000)
- stream(queryable, opts \\\ [])
- tenant_migrations_path()
- to_ecto(value)
- to_sql(operation, queryable)
- transaction(fun_or_multi, opts \\\ [])
- transaction!(fun)
- update(struct, opts \\\ [])
- update!(struct, opts \\\ [])
- update_all(queryable, updates, opts \\\ [])

__

Search documentation of ash_admin __ __

__ Settings

#  [ __ View Source ](external_link) Demo.Repo (ash_admin v0.11.5)

#  __ Summary

##  Functions

aggregate(queryable, aggregate, opts \\\ [])

Callback implementation for [`Ecto.Repo.aggregate/3`](external_link).

aggregate(queryable, aggregate, field, opts)

Callback implementation for [`Ecto.Repo.aggregate/4`](external_link).

all(queryable, opts \\\ [])

Callback implementation for [`Ecto.Repo.all/2`](external_link).

all_tenants()

Callback implementation for [`AshPostgres.Repo.all_tenants/0`](external_link).

checked_out?()

Callback implementation for [`Ecto.Repo.checked_out?/0`](external_link).

checkout(fun, opts \\\ [])

Callback implementation for [`Ecto.Repo.checkout/2`](external_link).

child_spec(opts)

config()

Callback implementation for [`Ecto.Repo.config/0`](external_link).

create?()

Callback implementation for [`AshPostgres.Repo.create?/0`](external_link).

default_options(operation)

Callback implementation for [`Ecto.Repo.default_options/1`](external_link).

default_prefix()

Callback implementation for [`AshPostgres.Repo.default_prefix/0`](external_link).

delete(struct, opts \\\ [])

Callback implementation for [`Ecto.Repo.delete/2`](external_link).

delete!(struct, opts \\\ [])

Callback implementation for [`Ecto.Repo.delete!/2`](external_link).

delete_all(queryable, opts \\\ [])

Callback implementation for [`Ecto.Repo.delete_all/2`](external_link).

disconnect_all(interval, opts \\\ [])

A convenience function for SQL-based repositories that forces all connections in the pool to disconnect within the given interval.

drop?()

Callback implementation for [`AshPostgres.Repo.drop?/0`](external_link).

exists?(queryable, opts \\\ [])

Callback implementation for [`Ecto.Repo.exists?/2`](external_link).

explain(operation, queryable, opts \\\ [])

A convenience function for SQL-based repositories that executes an EXPLAIN statement or similar depending on the adapter to obtain statistics for the given query.

from_ecto(other)

get(queryable, id, opts \\\ [])

Callback implementation for [`Ecto.Repo.get/3`](external_link).

get!(queryable, id, opts \\\ [])

Callback implementation for [`Ecto.Repo.get!/3`](external_link).

get_by(queryable, clauses, opts \\\ [])

Callback implementation for [`Ecto.Repo.get_by/3`](external_link).

get_by!(queryable, clauses, opts \\\ [])

Callback implementation for [`Ecto.Repo.get_by!/3`](external_link).

get_dynamic_repo()

Callback implementation for [`Ecto.Repo.get_dynamic_repo/0`](external_link).

in_transaction?()

Callback implementation for [`Ecto.Repo.in_transaction?/0`](external_link).

init(type, config)

Callback implementation for [`Ecto.Repo.init/2`](external_link).

insert(struct, opts \\\ [])

Callback implementation for [`Ecto.Repo.insert/2`](external_link).

insert!(struct, opts \\\ [])

Callback implementation for [`Ecto.Repo.insert!/2`](external_link).

insert_all(schema_or_source, entries, opts \\\ [])

Callback implementation for [`Ecto.Repo.insert_all/3`](external_link).

insert_or_update(changeset, opts \\\ [])

Callback implementation for [`Ecto.Repo.insert_or_update/2`](external_link).

insert_or_update!(changeset, opts \\\ [])

Callback implementation for [`Ecto.Repo.insert_or_update!/2`](external_link).

installed_extensions()

Callback implementation for [`AshPostgres.Repo.installed_extensions/0`](external_link).

load(schema_or_types, data)

Callback implementation for [`Ecto.Repo.load/2`](external_link).

migrations_path()

Callback implementation for [`AshPostgres.Repo.migrations_path/0`](external_link).

min_pg_version()

Callback implementation for [`AshPostgres.Repo.min_pg_version/0`](external_link).

on_transaction_begin(reason)

Callback implementation for [`AshPostgres.Repo.on_transaction_begin/1`](external_link).

one(queryable, opts \\\ [])

Callback implementation for [`Ecto.Repo.one/2`](external_link).

one!(queryable, opts \\\ [])

Callback implementation for [`Ecto.Repo.one!/2`](external_link).

override_migration_type(type)

Callback implementation for [`AshPostgres.Repo.override_migration_type/1`](external_link).

preload(struct_or_structs_or_nil, preloads, opts \\\ [])

Callback implementation for [`Ecto.Repo.preload/3`](external_link).

prepare_query(operation, query, opts)

Callback implementation for [`Ecto.Repo.prepare_query/3`](external_link).

put_dynamic_repo(dynamic)

Callback implementation for [`Ecto.Repo.put_dynamic_repo/1`](external_link).

query(sql, params \\\ [], opts \\\ [])

A convenience function for SQL-based repositories that executes the given query.

query!(sql, params \\\ [], opts \\\ [])

A convenience function for SQL-based repositories that executes the given query.

query_many(sql, params \\\ [], opts \\\ [])

A convenience function for SQL-based repositories that executes the given multi-result query.

query_many!(sql, params \\\ [], opts \\\ [])

A convenience function for SQL-based repositories that executes the given multi-result query.

reload(queryable, opts \\\ [])

Callback implementation for [`Ecto.Repo.reload/2`](external_link).

reload!(queryable, opts \\\ [])

Callback implementation for [`Ecto.Repo.reload!/2`](external_link).

rollback(value)

Callback implementation for [`Ecto.Repo.rollback/1`](external_link).

start_link(opts \\\ [])

Callback implementation for [`Ecto.Repo.start_link/1`](external_link).

stop(timeout \\\ 5000)

Callback implementation for [`Ecto.Repo.stop/1`](external_link).

stream(queryable, opts \\\ [])

Callback implementation for [`Ecto.Repo.stream/2`](external_link).

tenant_migrations_path()

Callback implementation for [`AshPostgres.Repo.tenant_migrations_path/0`](external_link).

to_ecto(value)

to_sql(operation, queryable)

A convenience function for SQL-based repositories that translates the given query to SQL.

transaction(fun_or_multi, opts \\\ [])

Callback implementation for [`Ecto.Repo.transaction/2`](external_link).

transaction!(fun)

update(struct, opts \\\ [])

Callback implementation for [`Ecto.Repo.update/2`](external_link).

update!(struct, opts \\\ [])

Callback implementation for [`Ecto.Repo.update!/2`](external_link).

update_all(queryable, updates, opts \\\ [])

Callback implementation for [`Ecto.Repo.update_all/3`](external_link).

#  __ Functions

__ Link to this function

# aggregate(queryable, aggregate, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.aggregate/3`](external_link).

__ Link to this function

# aggregate(queryable, aggregate, field, opts)

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.aggregate/4`](external_link).

__ Link to this function

# all(queryable, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.all/2`](external_link).

__ Link to this function

# all_tenants()

[ __ View Source ](external_link)

Callback implementation for [`AshPostgres.Repo.all_tenants/0`](external_link).

__ Link to this function

# checked_out?()

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.checked_out?/0`](external_link).

__ Link to this function

# checkout(fun, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.checkout/2`](external_link).

__ Link to this function

# child_spec(opts)

[ __ View Source ](external_link)

__ Link to this function

# config()

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.config/0`](external_link).

__ Link to this function

# create?()

[ __ View Source ](external_link)

Callback implementation for [`AshPostgres.Repo.create?/0`](external_link).

__ Link to this function

# default_options(operation)

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.default_options/1`](external_link).

__ Link to this function

# default_prefix()

[ __ View Source ](external_link)

Callback implementation for [`AshPostgres.Repo.default_prefix/0`](external_link).

__ Link to this function

# delete(struct, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.delete/2`](external_link).

__ Link to this function

# delete!(struct, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.delete!/2`](external_link).

__ Link to this function

# delete_all(queryable, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.delete_all/2`](external_link).

__ Link to this function

# disconnect_all(interval, opts \\\ [])

[ __ View Source ](external_link)

A convenience function for SQL-based repositories that forces all connections in the pool to disconnect within the given interval.

See [`Ecto.Adapters.SQL.disconnect_all/3`](external_link) for more information.

__ Link to this function

# drop?()

[ __ View Source ](external_link)

Callback implementation for [`AshPostgres.Repo.drop?/0`](external_link).

__ Link to this function

# exists?(queryable, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.exists?/2`](external_link).

__ Link to this function

# explain(operation, queryable, opts \\\ [])

[ __ View Source ](external_link)

A convenience function for SQL-based repositories that executes an EXPLAIN statement or similar depending on the adapter to obtain statistics for the given query.

See [`Ecto.Adapters.SQL.explain/4`](external_link) for more information.

__ Link to this function

# from_ecto(other)

[ __ View Source ](external_link)

__ Link to this function

# get(queryable, id, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.get/3`](external_link).

__ Link to this function

# get!(queryable, id, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.get!/3`](external_link).

__ Link to this function

# get_by(queryable, clauses, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.get_by/3`](external_link).

__ Link to this function

# get_by!(queryable, clauses, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.get_by!/3`](external_link).

__ Link to this function

# get_dynamic_repo()

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.get_dynamic_repo/0`](external_link).

__ Link to this function

# in_transaction?()

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.in_transaction?/0`](external_link).

__ Link to this function

# init(type, config)

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.init/2`](external_link).

__ Link to this function

# insert(struct, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.insert/2`](external_link).

__ Link to this function

# insert!(struct, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.insert!/2`](external_link).

__ Link to this function

# insert_all(schema_or_source, entries, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.insert_all/3`](external_link).

__ Link to this function

# insert_or_update(changeset, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.insert_or_update/2`](external_link).

__ Link to this function

# insert_or_update!(changeset, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.insert_or_update!/2`](external_link).

__ Link to this function

# installed_extensions()

[ __ View Source ](external_link)

Callback implementation for [`AshPostgres.Repo.installed_extensions/0`](external_link).

__ Link to this function

# load(schema_or_types, data)

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.load/2`](external_link).

__ Link to this function

# migrations_path()

[ __ View Source ](external_link)

Callback implementation for [`AshPostgres.Repo.migrations_path/0`](external_link).

__ Link to this function

# min_pg_version()

[ __ View Source ](external_link)

Callback implementation for [`AshPostgres.Repo.min_pg_version/0`](external_link).

__ Link to this function

# on_transaction_begin(reason)

[ __ View Source ](external_link)

Callback implementation for [`AshPostgres.Repo.on_transaction_begin/1`](external_link).

__ Link to this function

# one(queryable, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.one/2`](external_link).

__ Link to this function

# one!(queryable, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.one!/2`](external_link).

__ Link to this function

# override_migration_type(type)

[ __ View Source ](external_link)

Callback implementation for [`AshPostgres.Repo.override_migration_type/1`](external_link).

__ Link to this function

# preload(struct_or_structs_or_nil, preloads, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.preload/3`](external_link).

__ Link to this function

# prepare_query(operation, query, opts)

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.prepare_query/3`](external_link).

__ Link to this function

# put_dynamic_repo(dynamic)

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.put_dynamic_repo/1`](external_link).

__ Link to this function

# query(sql, params \\\ [], opts \\\ [])

[ __ View Source ](external_link)

A convenience function for SQL-based repositories that executes the given query.

See [`Ecto.Adapters.SQL.query/4`](external_link) for more information.

__ Link to this function

# query!(sql, params \\\ [], opts \\\ [])

[ __ View Source ](external_link)

A convenience function for SQL-based repositories that executes the given query.

See [`Ecto.Adapters.SQL.query!/4`](external_link) for more information.

__ Link to this function

# query_many(sql, params \\\ [], opts \\\ [])

[ __ View Source ](external_link)

A convenience function for SQL-based repositories that executes the given multi-result query.

See [`Ecto.Adapters.SQL.query_many/4`](external_link) for more information.

__ Link to this function

# query_many!(sql, params \\\ [], opts \\\ [])

[ __ View Source ](external_link)

A convenience function for SQL-based repositories that executes the given multi-result query.

See [`Ecto.Adapters.SQL.query_many!/4`](external_link) for more information.

__ Link to this function

# reload(queryable, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.reload/2`](external_link).

__ Link to this function

# reload!(queryable, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.reload!/2`](external_link).

__ Link to this function

# rollback(value)

[ __ View Source ](external_link)
    
    
    @spec rollback([term](external_link)()) :: [no_return](external_link)()

Callback implementation for [`Ecto.Repo.rollback/1`](external_link).

__ Link to this function

# start_link(opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.start_link/1`](external_link).

__ Link to this function

# stop(timeout \\\ 5000)

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.stop/1`](external_link).

__ Link to this function

# stream(queryable, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.stream/2`](external_link).

__ Link to this function

# tenant_migrations_path()

[ __ View Source ](external_link)

Callback implementation for [`AshPostgres.Repo.tenant_migrations_path/0`](external_link).

__ Link to this function

# to_ecto(value)

[ __ View Source ](external_link)

__ Link to this function

# to_sql(operation, queryable)

[ __ View Source ](external_link)

A convenience function for SQL-based repositories that translates the given query to SQL.

See [`Ecto.Adapters.SQL.to_sql/3`](external_link) for more information.

__ Link to this function

# transaction(fun_or_multi, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.transaction/2`](external_link).

__ Link to this function

# transaction!(fun)

[ __ View Source ](external_link)

__ Link to this function

# update(struct, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.update/2`](external_link).

__ Link to this function

# update!(struct, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.update!/2`](external_link).

__ Link to this function

# update_all(queryable, updates, opts \\\ [])

[ __ View Source ](external_link)

Callback implementation for [`Ecto.Repo.update_all/3`](external_link).
