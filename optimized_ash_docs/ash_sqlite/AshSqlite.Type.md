# AshSqlite.Type — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) AshSqlite.Type behaviour (ash_sqlite v0.1.3)
- __ Summary
  - Callbacks
- __ Callbacks
- value_to_sqlite_default(t, constraints, term)

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) AshSqlite.Type behaviour (ash_sqlite v0.1.3)

Sqlite specific callbacks for [`Ash.Type`](3.0.8/Ash.Type.html).

Use this in addition to [`Ash.Type`](3.0.8/Ash.Type.html).

#  __ Summary

##  Callbacks

value_to_sqlite_default(t, constraints, term)

#  __ Callbacks

__ Link to this callback

# value_to_sqlite_default(t, constraints, term)

[ __ View Source ](external_link)
    
    
    @callback value_to_sqlite_default([Ash.Type.t](3.0.8/Ash.Type.html#t:t/0)(), [Ash.Type.constraints](3.0.8/Ash.Type.html#t:constraints/0)(), [term](external_link)()) ::
      {:ok, [String.t](external_link)()} | :error
