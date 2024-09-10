# Igniter.Libs.Phoenix — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Libs.Phoenix (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- add_pipeline(igniter, name, contents, opts \\\ [])
- add_scope(igniter, route, contents, opts \\\ [])
- endpoints_for_router(igniter, router)
- list_routers(igniter)
- select_router(igniter, label \\\ "Which router should be modified?")
- web_module(igniter)
- web_module_name()
- web_module_name(suffix)
- web_module_name(igniter, suffix)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Libs.Phoenix (igniter v0.3.29)

Codemods & utilities for working with Phoenix

#  __ Summary

##  Functions

add_pipeline(igniter, name, contents, opts \\\ [])

add_scope(igniter, route, contents, opts \\\ [])

endpoints_for_router(igniter, router)

list_routers(igniter)

select_router(igniter, label \\\ "Which router should be modified?")

web_module(igniter)

Returns the web module name for the current app

web_module_name() deprecated

Returns the web module name for the current app

web_module_name(suffix) deprecated

Generates a module name that lives in the Web directory of the current app.

web_module_name(igniter, suffix)

#  __ Functions

__ Link to this function

# add_pipeline(igniter, name, contents, opts \\\ [])

[ __ View Source ](external_link)

__ Link to this function

# add_scope(igniter, route, contents, opts \\\ [])

[ __ View Source ](external_link)

__ Link to this function

# endpoints_for_router(igniter, router)

[ __ View Source ](external_link)
    
    
    @spec endpoints_for_router(igniter :: [Igniter.t](external_link)(), router :: [module](external_link)()) ::
      {[Igniter.t](external_link)(), [[module](external_link)()]}

__ Link to this function

# list_routers(igniter)

[ __ View Source ](external_link)

__ Link to this function

# select_router(igniter, label \\\ "Which router should be modified?")

[ __ View Source ](external_link)

__ Link to this function

# web_module(igniter)

[ __ View Source ](external_link)
    
    
    @spec web_module([Igniter.t](external_link)()) :: [module](external_link)()

Returns the web module name for the current app

__ Link to this function

# web_module_name()

[ __ View Source ](external_link)

This function is deprecated. Use `web_module/0` instead.. 
    
    
    @spec web_module_name() :: [module](external_link)()

Returns the web module name for the current app

__ Link to this function

# web_module_name(suffix)

[ __ View Source ](external_link)

This function is deprecated. Use `web_module_name/1` instead.. 
    
    
    @spec web_module_name([String.t](external_link)()) :: [module](external_link)()

Generates a module name that lives in the Web directory of the current app.

__ Link to this function

# web_module_name(igniter, suffix)

[ __ View Source ](external_link)
    
    
    @spec web_module_name([Igniter.t](external_link)(), [String.t](external_link)()) :: [module](external_link)()
