# AshCubDB — ash_cubdb v0.6.2

Project: ash_cubdb v0.6.2

## Table of Contents

- [ __ View Source ](external_link) AshCubDB (ash_cubdb v0.6.2)
- __ Summary
  - Functions
- __ Functions
- back_up(resource, target_path)
- clear(resource)
- compact(resource)
- compacting?(resource)
- current_db_file(resource)
- data_dir(resource)
- dirt_factor(resource)
- file_sync(resource)
- halt_compaction(resource)
- start(resource)
- stop(resource)

__

Search documentation of ash_cubdb __ __

__ Settings

#  [ __ View Source ](external_link) AshCubDB (ash_cubdb v0.6.2)

[`AshCubDB`](external_link) is an [Ash DataLayer](external_link) which adds support for persisting Ash resources with [CubDB](external_link).

CubDB is an Elixir-based key value store which supports all Erlang-native terms. More information can be found in [the CubDB readme](external_link).

#  __ Summary

##  Functions

back_up(resource, target_path)

Creates a backup of the database into the target directory path.

clear(resource)

Deletes all entries, resulting in an empty database.

compact(resource)

Runs a database compaction.

compacting?(resource)

Returns true if a compaction operation is currently running, false otherwise.

current_db_file(resource)

Returns the path of the current database file.

data_dir(resource)

Returns the path of the data directory, as given when the [`CubDB`](external_link) process was started. 

dirt_factor(resource)

Returns the dirt factor.

file_sync(resource)

Performs an `fsync`, forcing to flush all data that might be buffered by the OS to disk.

halt_compaction(resource)

Stops a running compaction.

start(resource)

Ensure that the CubDB process is running for the specified resource.

stop(resource)

Stop the CubDB process running for a specific resource.

#  __ Functions

__ Link to this function

# back_up(resource, target_path)

[ __ View Source ](external_link)
    
    
    @spec back_up([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)(), [Path.t](external_link)()) :: :ok | {:error, [any](external_link)()}

Creates a backup of the database into the target directory path.

Wrapper around [`CubDB.back_up/2`](external_link)

__ Link to this function

# clear(resource)

[ __ View Source ](external_link)
    
    
    @spec clear([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)()) :: :ok

Deletes all entries, resulting in an empty database.

Wrapper around [`CubDB.clear/1`](external_link)

__ Link to this function

# compact(resource)

[ __ View Source ](external_link)
    
    
    @spec compact([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)()) :: :ok | {:error, [any](external_link)()}

Runs a database compaction.

Wrapper around [`CubDB.compact/1`](external_link)

__ Link to this function

# compacting?(resource)

[ __ View Source ](external_link)
    
    
    @spec compacting?([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)()) :: [boolean](external_link)()

Returns true if a compaction operation is currently running, false otherwise.

Wrapper around [`CubDB.compacting?/1`](external_link)

__ Link to this function

# current_db_file(resource)

[ __ View Source ](external_link)
    
    
    @spec current_db_file([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)()) :: [String.t](external_link)()

Returns the path of the current database file.

Wrapper around [`CubDB.current_db_file/1`](external_link)

__ Link to this function

# data_dir(resource)

[ __ View Source ](external_link)
    
    
    @spec data_dir([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)()) :: [String.t](external_link)()

Returns the path of the data directory, as given when the [`CubDB`](external_link) process was started. 

Wrapper around [`CubDB.data_dir/1`](external_link)

__ Link to this function

# dirt_factor(resource)

[ __ View Source ](external_link)
    
    
    @spec dirt_factor([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)()) :: [float](external_link)()

Returns the dirt factor.

Wrapper around [`CubDB.dirt_factor/1`](external_link)

__ Link to this function

# file_sync(resource)

[ __ View Source ](external_link)
    
    
    @spec file_sync([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)()) :: :ok

Performs an `fsync`, forcing to flush all data that might be buffered by the OS to disk.

Wrapper around [`CubDB.file_sync/1`](external_link)

__ Link to this function

# halt_compaction(resource)

[ __ View Source ](external_link)
    
    
    @spec halt_compaction([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)()) :: :ok | {:error, :no_compaction_running}

Stops a running compaction.

Wrapper around [`CubDB.halt_compaction/1`](external_link)

__ Link to this function

# start(resource)

[ __ View Source ](external_link)
    
    
    @spec start([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)()) :: {:ok, [pid](external_link)()} | {:error, [any](external_link)()}

Ensure that the CubDB process is running for the specified resource.

__ Link to this function

# stop(resource)

[ __ View Source ](external_link)
    
    
    @spec stop([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)()) :: :ok

Stop the CubDB process running for a specific resource.
