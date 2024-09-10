# Igniter.Project.Application — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Project.Application (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- add_new_child(igniter, to_supervise)
- app_module(igniter)
- app_name()
- app_name(igniter)
- create_app(igniter, application)
- create_application_file(igniter, application)
- do_add_child(igniter, application, to_supervise)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Project.Application (igniter v0.3.29)

Codemods and tools for working with Application modules.

#  __ Summary

##  Functions

add_new_child(igniter, to_supervise)

Adds a new child to the `children` list in the application file

app_module(igniter)

Returns the name of the application module.

app_name() deprecated

Returns the name of the current application.

app_name(igniter)

Returns the name of the application.

create_app(igniter, application)

create_application_file(igniter, application)

do_add_child(igniter, application, to_supervise)

#  __ Functions

__ Link to this function

# add_new_child(igniter, to_supervise)

[ __ View Source ](external_link)
    
    
    @spec add_new_child([Igniter.t](external_link)(), [module](external_link)() | {[module](external_link)(), [term](external_link)()}) :: [Igniter.t](external_link)()

Adds a new child to the `children` list in the application file

__ Link to this function

# app_module(igniter)

[ __ View Source ](external_link)

Returns the name of the application module.

__ Link to this function

# app_name()

[ __ View Source ](external_link)

This function is deprecated. Use `app_name/1` instead.. 
    
    
    @spec app_name() :: [atom](external_link)()

Returns the name of the current application.

__ Link to this function

# app_name(igniter)

[ __ View Source ](external_link)
    
    
    @spec app_name([Igniter.t](external_link)()) :: [atom](external_link)()

Returns the name of the application.

__ Link to this function

# create_app(igniter, application)

[ __ View Source ](external_link)

__ Link to this function

# create_application_file(igniter, application)

[ __ View Source ](external_link)

__ Link to this function

# do_add_child(igniter, application, to_supervise)

[ __ View Source ](external_link)
