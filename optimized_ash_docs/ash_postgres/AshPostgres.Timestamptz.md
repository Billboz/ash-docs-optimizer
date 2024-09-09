# AshPostgres.Timestamptz — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) AshPostgres.Timestamptz (ash_postgres v2.3.1)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) AshPostgres.Timestamptz (ash_postgres v2.3.1)

Implements the PostgresSQL [timestamptz](external_link) (aka `timestamp with time zone`) type.

Postgres [_strongly recommends_](external_link) using this type instead of the standard timestamps/datetimes without a time zone. Generally speaking, it is best practice to use the [nanosecond-precision](external_link) variant.

The basic reason `timestamptz` exists is to guarantee that the precise moment in time is stored as microseconds since January 1st, 2000 in UTC. This guarantee eliminates many time arithmetic problems, and ensures portability.

It does not actually store a timezone, in spite of the name. As far as Elixir/Ecto is concerned, it it always of type [`DateTime`](external_link) and set to UTC. Using this type ensures Postgres internally uses the same contract as Ecto's `:utc_datetime`, which is to always store [`DateTime`](external_link) in UTC. This is especially helpful if you need to do complex time arithmetic in SQL fragments, or build reports/materialized views that use localized time formatting.

Using this type ubiquitously in your schemas is particularly beneficial for consistency, and this is currently [under consideration](external_link) as a configuration option for the default datetime storage type.
    
    
    attribute :timestamp, AshPostgres.Timestamptz
    timestamps type: AshPostgres.Timestamptz

Alternatively, you can set up a shortname:
    
    
    # config.exs
    config :ash, :custom_types, timestamptz: AshPostgres.Timestamptz

After saving, you will need to run `mix compile ash --force`.
    
    
    attribute :timestamp, :timestamptz
    timestamps type: :timestamptz
