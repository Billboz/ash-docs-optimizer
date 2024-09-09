# AshPostgres.Type — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) AshPostgres.Type behaviour (ash_postgres v2.3.1)
- __ Summary
  - Callbacks
- __ Callbacks
- value_to_postgres_default(t, constraints, term)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) AshPostgres.Type behaviour (ash_postgres v2.3.1)

Postgres specific callbacks for [`Ash.Type`](3.4.4/Ash.Type.html).

Use this in addition to [`Ash.Type`](3.4.4/Ash.Type.html).

#  __ Summary

##  Callbacks

value_to_postgres_default(t, constraints, term)

#  __ Callbacks

__

# value_to_postgres_default(t, constraints, term)

[ __](external_link)
    
    
    @callback value_to_postgres_default([Ash.Type.t](3.4.4/Ash.Type.html#t:t/0)(), [Ash.Type.constraints](3.4.4/Ash.Type.html#t:constraints/0)(), [term](external_link)()) ::
      {:ok, [String.t](external_link)()} | :error
