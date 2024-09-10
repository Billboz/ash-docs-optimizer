# AshJsonApi.Type — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) AshJsonApi.Type behaviour (ash_json_api v1.4.7)
- __ Summary
  - Callbacks
- __ Callbacks
- json_schema(t)
- json_write_schema(t)

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) AshJsonApi.Type behaviour (ash_json_api v1.4.7)

The behaviour for customizing how a datatype is rendered and written in AshJsonApi.

#  __ Summary

##  Callbacks

json_schema(t)

json_write_schema(t)

#  __ Callbacks

__ Link to this callback

# json_schema(t)

[ __ View Source ](external_link) (optional)
    
    
    @callback json_schema([Keyword.t](external_link)()) :: [map](external_link)()

__ Link to this callback

# json_write_schema(t)

[ __ View Source ](external_link)
    
    
    @callback json_write_schema([Keyword.t](external_link)()) :: [map](external_link)()
