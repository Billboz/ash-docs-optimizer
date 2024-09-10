# API Reference — ash_money v0.1.12

Project: ash_money v0.1.12

## Table of Contents

- [ __ View Source ](external_link) API Reference ash_money v0.1.12
  - __ Modules
  - __ Mix Tasks

__

Search documentation of ash_money __ __

__ Settings

#  [ __ View Source ](external_link) API Reference ash_money v0.1.12

##  __ Modules

[AshMoney](external_link)

[`AshMoney`](external_link) provides a type for working with money in your Ash resources.

[AshMoney.AshPostgresExtension](external_link)

Installs the `money_with_currency` type and operators/functions for Postgres.

[AshMoney.Types.Money](external_link)

A money type for Ash that uses the `ex_money` library.

[Comparable.Type.Decimal.To.Money](external_link)

[Comparable.Type.Float.To.Money](external_link)

[Comparable.Type.Integer.To.Money](external_link)

[Comparable.Type.Money.To.Decimal](external_link)

[Comparable.Type.Money.To.Float](external_link)

[Comparable.Type.Money.To.Integer](external_link)

[Comparable.Type.Money.To.Money](external_link)

##  __ Mix Tasks

[mix ash_money.add_to_ash_postgres](external_link)

Adds AshMoney.AshPostgresExtension to installed_extensions and installs :ex_money_sql.

[mix ash_money.install](external_link)

Installs AshMoney. Should be run with `mix igniter.install ash_money`

[ Next Page →  Home  ](external_link)
