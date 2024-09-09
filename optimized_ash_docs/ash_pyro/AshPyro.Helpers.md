# AshPyro.Helpers — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) AshPyro.Helpers (AshPyro v0.2.1)
- __ Summary
  - Functions
- __ Functions
- ash_class(fun, assigns)

__

Search documentation of AshPyro __ __

__ Settings

#  [ __ View Source ](external_link) AshPyro.Helpers (AshPyro v0.2.1)

Shared helpers used to implement your own AshPyro components.

#  __ Summary

##  Functions

ash_class(fun, assigns)

AshPyro DSL allows component classes to be functions accepting `assigns`. This helper function simplifies handling that case in components

#  __ Functions

__ Link to this function

# ash_class(fun, assigns)

[ __ View Source ](external_link)

AshPyro DSL allows component classes to be functions accepting `assigns`. This helper function simplifies handling that case in components:
    
    
    <:col
      :for={col <- display_columns(@config.columns, @display)}
      class={ash_class(col.class, col)}>
