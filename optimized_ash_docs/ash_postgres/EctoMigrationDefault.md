# EctoMigrationDefault — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) EctoMigrationDefault protocol (ash_postgres v2.3.1)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- to_default(value)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) EctoMigrationDefault protocol (ash_postgres v2.3.1)

Allows configuring how values are translated to default values in migrations.

Still a work in progress, but covers most standard values aside from maps.

#  __ Summary

##  Types

t()

All the types that implement this protocol.

##  Functions

to_default(value)

Returns the text (elixir code) that will be placed into a migration as the default value

#  __ Types

__

# t()

[ __](external_link)
    
    
    @type t() :: [term](external_link)()

All the types that implement this protocol.

#  __ Functions

__

# to_default(value)

[ __](external_link)

Returns the text (elixir code) that will be placed into a migration as the default value
