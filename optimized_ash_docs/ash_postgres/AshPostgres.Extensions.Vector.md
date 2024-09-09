# AshPostgres.Extensions.Vector — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) AshPostgres.Extensions.Vector (ash_postgres v2.3.1)
- __ Summary
  - Functions
- __ Functions
- decode(arg1)
- encode(_)
- format(_)
- init(opts)
- matching(_)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) AshPostgres.Extensions.Vector (ash_postgres v2.3.1)

An extension that adds support for the `vector` type.

Create a file with these contents, not inside of a module:
    
    
    Postgrex.Types.define(<YourApp>.PostgrexTypes, [AshPostgres.Extensions.Vector] ++ Ecto.Adapters.Postgres.extensions(), [])

And then ensure that you refer to these types in your repo configuration, i.e
    
    
    config :my_app, YourApp.Repo,
      types: <YourApp>.PostgrexTypes

#  __ Summary

##  Functions

decode(arg1)

encode(_)

format(_)

init(opts)

matching(_)

#  __ Functions

__

# decode(arg1)

[ __](external_link)

__

# encode(_)

[ __](external_link)

__

# format(_)

[ __](external_link)

__

# init(opts)

[ __](external_link)

__

# matching(_)

[ __](external_link)
