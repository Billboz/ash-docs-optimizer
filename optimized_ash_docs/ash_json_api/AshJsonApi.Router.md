# AshJsonApi.Router — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) AshJsonApi.Router (ash_json_api v1.4.7)

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) AshJsonApi.Router (ash_json_api v1.4.7)

Use this module to create a router for your AshJsonApi.

To use this, create a module and do the following:
    
    
    defmodule YourRouter do
      use AshJsonApi.Router,
        domains: [YourDomain, YourOtherDomain],
        # these next two are optional, only add them if you want those endpoints
        open_api: "/open_api",
        json_schema: "/json_schema",
        # tell us where it is mounted in your router
        prefix: "/api/json"
    end

Then in your Phoenix router or plug pipeline, forward to this plug. In phoenix, that looks like this:
    
    
        forward "/api", YourRouter
