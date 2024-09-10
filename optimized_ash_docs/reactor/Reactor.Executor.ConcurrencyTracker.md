# Reactor.Executor.ConcurrencyTracker — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Executor.ConcurrencyTracker (reactor v0.9.1)
- __ Summary
  - Types
  - Functions
- __ Types
- pool_key()
- record()
- __ Functions
- acquire(key, how_many \\\ 1)
- allocate_pool(concurrency_limit)
- child_spec(init_arg)
- release(key, how_many \\\ 1)
- release_pool(pool_key)
- status(key)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Executor.ConcurrencyTracker (reactor v0.9.1)

Manage shared concurrency pools for multiple Reactors.

When running a Reactor you can pass the `concurrency_key` option, which will cause the Reactor to use the specified pool to ensure that the combined Reactors never exceed the pool's available concurrency limit.

This avoids nested Reactors spawning too many workers and thrashing the system.

The process calling `allocate_pool/1` is monitored, and when it terminates it's allocation is removed. Any processes which are using that pool will not be able to allocate any new resources.

#  __ Summary

##  Types

pool_key()

record()

##  Functions

acquire(key, how_many \\\ 1)

Attempt to acquire a number of concurrency allocations from the pool.

allocate_pool(concurrency_limit)

Allocate a new concurrency pool and set the maximum limit.

child_spec(init_arg)

Returns a specification to start this module under a supervisor.

release(key, how_many \\\ 1)

Release concurrency allocation back to the pool.

release_pool(pool_key)

Release the concurrency pool.

status(key)

Report the available and maximum concurrency for a pool.

#  __ Types

__ Link to this type

# pool_key()

[ __ View Source ](external_link)
    
    
    @type pool_key() :: [reference](external_link)()

__ Link to this type

# record()

[ __ View Source ](external_link)
    
    
    @type record() ::
      {pool_key(), concurrency_limit :: [pos_integer](external_link)(),
       available_slots :: [non_neg_integer](external_link)(), allocator :: [pid](external_link)()}

#  __ Functions

__ Link to this function

# acquire(key, how_many \\\ 1)

[ __ View Source ](external_link)
    
    
    @spec acquire(pool_key(), how_many :: [pos_integer](external_link)()) :: {:ok, [non_neg_integer](external_link)()}

Attempt to acquire a number of concurrency allocations from the pool.

Returns `{:ok, n}` where `n` was the number of slots that were actually allocated. It's important to note that whilst you may request `16` slots, if there is only `3` available, then this function will return `{:ok, 3}` and you must abide by it.

It is possible for this function to return `{:ok, 0}` if there is no slots available.

__ Link to this function

# allocate_pool(concurrency_limit)

[ __ View Source ](external_link)
    
    
    @spec allocate_pool([non_neg_integer](external_link)()) :: pool_key()

Allocate a new concurrency pool and set the maximum limit.

__ Link to this function

# child_spec(init_arg)

[ __ View Source ](external_link)

Returns a specification to start this module under a supervisor.

See [`Supervisor`](external_link).

__ Link to this function

# release(key, how_many \\\ 1)

[ __ View Source ](external_link)
    
    
    @spec release(pool_key(), how_many :: [pos_integer](external_link)()) :: :ok | :error

Release concurrency allocation back to the pool.

__ Link to this function

# release_pool(pool_key)

[ __ View Source ](external_link)
    
    
    @spec release_pool(pool_key()) :: :ok

Release the concurrency pool.

This deletes the pool, however doesn't affect any processes currently using it. No more resources can be acquired by users of the pool key.

__ Link to this function

# status(key)

[ __ View Source ](external_link)
    
    
    @spec status(pool_key()) :: {:ok, available, limit} | {:error, [any](external_link)()}
    when available: [non_neg_integer](external_link)(), limit: [pos_integer](external_link)()

Report the available and maximum concurrency for a pool.
