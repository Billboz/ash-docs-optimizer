# Ash.Actions.Read.AsyncLimiter — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Actions.Read.AsyncLimiter (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- async_or_inline(query, opts, last?, func)
- await_all(list)
- await_at_least_one(list)
- child_spec(arg)
- start_link(limit)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Actions.Read.AsyncLimiter (ash v3.4.8)

A utility for limiting the number of concurrent async operations

Because this is an optimization, we opt to run something synchronously if there is no async task available in the slot. The idea here is that the _vast_ majority of things we do async will be fast enough not to warrant always waiting for an async slot to be free. We may add in some smarter heuristics later (i.e choosing to wait for a task instead of doing the work sync), but for now this is a good start.

#  __ Summary

##  Functions

async_or_inline(query, opts, last?, func)

await_all(list)

await_at_least_one(list)

child_spec(arg)

Returns a specification to start this module under a supervisor.

start_link(limit)

#  __ Functions

__ Link to this function

# async_or_inline(query, opts, last?, func)

[ __ View Source ](external_link)

__ Link to this function

# await_all(list)

[ __ View Source ](external_link)

__ Link to this function

# await_at_least_one(list)

[ __ View Source ](external_link)

__ Link to this function

# child_spec(arg)

[ __ View Source ](external_link)

Returns a specification to start this module under a supervisor.

See [`Supervisor`](external_link).

__ Link to this function

# start_link(limit)

[ __ View Source ](external_link)
