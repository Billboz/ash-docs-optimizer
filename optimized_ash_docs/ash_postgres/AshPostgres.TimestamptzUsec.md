# AshPostgres.TimestamptzUsec — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) AshPostgres.TimestamptzUsec (ash_postgres v2.3.1)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) AshPostgres.TimestamptzUsec (ash_postgres v2.3.1)

Implements the PostgresSQL [timestamptz](external_link) (aka `timestamp with time zone`) type with nanosecond precision.
    
    
    attribute :timestamp, AshPostgres.TimestamptzUsec
    timestamps type: AshPostgres.TimestamptzUsec

Alternatively, you can set up a shortname:
    
    
    # config.exs
    config :ash, :custom_types, timestamptz_usec: AshPostgres.TimestamptzUsec

After saving, you will need to run `mix compile ash --force`.
    
    
    attribute :timestamp, :timestamptz_usec
    timestamps type: :timestamptz_usec

Please see [`AshPostgres.Timestamptz`](external_link) for details about the usecase for this type.
