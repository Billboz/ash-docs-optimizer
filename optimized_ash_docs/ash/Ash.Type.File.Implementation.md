# Ash.Type.File.Implementation — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type.File.Implementation behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
- __ Types
- error()
- source()
- t()
- __ Callbacks
- open(file, modes)
- path(file)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type.File.Implementation behaviour (ash v3.4.8)

Behaviour for file implementations that are compatible with [`Ash.Type.File`](external_link).

#  __ Summary

##  Types

error()

Errors returned by the implementation.

source()

The source of the file the implementation operates on.

t()

Any `module()` implementing the [`Ash.Type.File.Implementation`](external_link) behaviour.

##  Callbacks

open(file, modes)

Open `IO.device()` for the file.

path(file)

Return path of the file on disk.

#  __ Types

__ Link to this type

# error()

[ __ View Source ](external_link)
    
    
    @type error() :: [term](external_link)()

Errors returned by the implementation.

__ Link to this type

# source()

[ __ View Source ](external_link)
    
    
    @type source() :: [term](external_link)()

The source of the file the implementation operates on.

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [module](external_link)()

Any `module()` implementing the [`Ash.Type.File.Implementation`](external_link) behaviour.

#  __ Callbacks

__ Link to this callback

# open(file, modes)

[ __ View Source ](external_link)
    
    
    @callback open(file :: source(), modes :: [[File.mode](external_link)()]) ::
      {:ok, [IO.device](external_link)()} | {:error, error()}

Open `IO.device()` for the file.

See [`Ash.Type.File.open/2`](external_link)

The return pid must point to a process following the [Erlang I/O Protocol](external_link) like [`StringIO`](external_link) or [`File`](external_link).

__ Link to this callback

# path(file)

[ __ View Source ](external_link) (optional)
    
    
    @callback path(file :: source()) :: {:ok, [Path.t](external_link)()} | {:error, error()}

Return path of the file on disk.

See: [`Ash.Type.File.path/1`](external_link)

This callback is optional. If the file is not stored on disk, this callback can be omitted.
