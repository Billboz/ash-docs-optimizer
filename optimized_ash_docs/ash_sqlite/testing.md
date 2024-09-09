# Testing With Sqlite — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) Testing With Sqlite

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) Testing With Sqlite

Testing resources with SQLite generally requires passing `async?: false` to your tests, due to `SQLite`'s limitation of having a single write transaction open at any one time.

This should be coupled with to make sure that Ash does not spawn any tasks.
    
    
    config :ash, :disable_async?, true

[ ← Previous Page  Migrations  ](external_link)

[ Next Page →  Expressions  ](external_link)
