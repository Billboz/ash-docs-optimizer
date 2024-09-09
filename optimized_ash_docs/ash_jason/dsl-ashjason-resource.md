# DSL: AshJason.Resource — ash_jason v1.0.1

Project: ash_jason v1.0.1

## Table of Contents

- [ __ View Source ](external_link) DSL: AshJason.Resource
  - __ jason
    - __ Options

__

Search documentation of ash_jason __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshJason.Resource

Ash resource extension for implementing [`Jason.Encoder`](external_link) protocol.

##  __ jason

Configuration for Jason encoder implementation

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`pick`| `list(atom) | %{optional(:private?) => boolean, optional(:sensitive?) => boolean, optional(:include) => list(atom), optional(:exclude) => list(atom)}`| | Keys to pick from a record into json. Either an explicit names list or a behaviour configuration map.  
`merge`| `map`| | A map to merge into json.  
`customize`| `(map, map -> map)`| | A function to customize json. Receives a current result and a resource record.  
  
[ ← Previous Page  License  ](external_link)
