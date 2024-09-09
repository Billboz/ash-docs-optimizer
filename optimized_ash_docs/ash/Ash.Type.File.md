# Ash.Type.File — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type.File (ash v3.4.8)
  - __ Valid values to cast
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- from_io(device)
  - __ Example
- from_path(path)
  - __ Example
- open(file, modes \\\ [])
  - __ Example
- path(file)
  - __ Example

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type.File (ash v3.4.8)

A type that represents a file on the filesystem.

> #### Persistence
> 
> This type does not support persisting via [`Ash.DataLayer`](external_link).
> 
> It is mainly intended to be used in [arguments](external_link).

##  __ Valid values to cast

This type can cast multiple types of values:

  * itself
  * [`Plug.Upload`](external_link)
  * Any value that implements the [`Ash.Type.File.Source`](external_link) protocol.



#  __ Summary

##  Types

t()

##  Functions

from_io(device)

Create a file from an `IO.device()`

from_path(path)

Create a file from a path.

open(file, modes \\\ [])

Open the file with the given `modes`.

path(file)

Returns the path to the file.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Type.File{
      implementation: [Ash.Type.File.Implementation.t](external_link)(),
      source: [Ash.Type.File.Implementation.source](external_link)()
    }

#  __ Functions

__ Link to this function

# from_io(device)

[ __ View Source ](external_link)
    
    
    @spec from_io(device :: [IO.device](external_link)()) :: t()

Create a file from an `IO.device()`

##  __ Example
    
    
    iex> path = "README.md"
    ...> {:ok, device} = File.open(path)
    ...> Ash.Type.File.from_io(device)
    %Ash.Type.File{source: device, implementation: Ash.Type.File.IO}

__ Link to this function

# from_path(path)

[ __ View Source ](external_link)
    
    
    @spec from_path(path :: [Path.t](external_link)()) :: t()

Create a file from a path.

##  __ Example
    
    
    iex> path = "README.md"
    ...> Ash.Type.File.from_path(path)
    %Ash.Type.File{source: "README.md", implementation: Ash.Type.File.Path}

__ Link to this function

# open(file, modes \\\ [])

[ __ View Source ](external_link)
    
    
    @spec open(file :: t(), modes :: [[File.mode](external_link)()]) ::
      {:ok, [IO.device](external_link)()} | {:error, [Ash.Type.File.Implementation.error](external_link)()}

Open the file with the given `modes`.

This function will delegate to the `open/2` function on the `implementation`.

For details on the `modes` argument, see the [`File.open/2`](external_link) documentation.

##  __ Example
    
    
    iex> path = "README.md"
    ...> file = Ash.Type.File.from_path(path)
    ...> Ash.Type.File.open(file, [:read])
    ...> # => {:ok, #PID<0.109.0>}

__ Link to this function

# path(file)

[ __ View Source ](external_link)
    
    
    @spec path(file :: t()) ::
      {:ok, [Path.t](external_link)()}
      | {:error, :not_supported | [Ash.Type.File.Implementation.error](external_link)()}

Returns the path to the file.

Not every implementation will support this operation. If the implementation does not support this operation, then `{:error, :not_supported}` will be returned. In this case, use the `open/2` function to access the file.

##  __ Example
    
    
    iex> path = "README.md"
    ...> file = Ash.Type.File.from_path(path)
    ...> Ash.Type.File.path(file)
    {:ok, "README.md"}
