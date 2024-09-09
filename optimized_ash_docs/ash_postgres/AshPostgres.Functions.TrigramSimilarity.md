# AshPostgres.Functions.TrigramSimilarity — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) AshPostgres.Functions.TrigramSimilarity (ash_postgres v2.3.1)
- __ Summary
  - Functions
- __ Functions
- args()

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) AshPostgres.Functions.TrigramSimilarity (ash_postgres v2.3.1)

Maps to the builtin postgres trigram similarity function. Requires `pgtrgm` extension to be installed.

See the postgres docs on [trigram](external_link) for more information.

Requires the pg_trgm extension. Configure which extensions you have installed in your [`AshPostgres.Repo`](external_link)
    
    
    # Example
    
    filter(query, trigram_similarity(name, "geoff") > 0.4)

#  __ Summary

##  Functions

args()

Callback implementation for [`Ash.Query.Function.args/0`](3.4.4/Ash.Query.Function.html#c:args/0).

#  __ Functions

__

# args()

[ __](external_link)

Callback implementation for [`Ash.Query.Function.args/0`](3.4.4/Ash.Query.Function.html#c:args/0).
