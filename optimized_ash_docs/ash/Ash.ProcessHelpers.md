# Ash.ProcessHelpers — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.ProcessHelpers (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- async(func, opts)
- get_context_for_transfer(opts \\\ [])
- task_with_timeout(fun, resource, timeout, name, tracer)
- transfer_context(tracer_context, opts \\\ [])

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.ProcessHelpers (ash v3.4.8)

Helpers for working with processes and Ash actions.

#  __ Summary

##  Functions

async(func, opts)

Creates a task that will properly transfer the ash context to the new process

get_context_for_transfer(opts \\\ [])

Gets all of the ash context so it can be set into a new process.

task_with_timeout(fun, resource, timeout, name, tracer)

Creates a task that will properly transfer the ash context to the new process, and timeout if it takes longer than the given timeout

transfer_context(tracer_context, opts \\\ [])

#  __ Functions

__ Link to this function

# async(func, opts)

[ __ View Source ](external_link)

Creates a task that will properly transfer the ash context to the new process

__ Link to this function

# get_context_for_transfer(opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec get_context_for_transfer(opts :: [Keyword.t](external_link)()) :: [term](external_link)()

Gets all of the ash context so it can be set into a new process.

Use `transfer_context/1` in the new process to set the context.

__ Link to this function

# task_with_timeout(fun, resource, timeout, name, tracer)

[ __ View Source ](external_link)

Creates a task that will properly transfer the ash context to the new process, and timeout if it takes longer than the given timeout

__ Link to this function

# transfer_context(tracer_context, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec transfer_context([term](external_link)(), opts :: [Keyword.t](external_link)()) :: :ok
