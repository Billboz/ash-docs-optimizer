# Ash.Type.File.Source — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type.File.Source protocol (ash v3.4.8)
  - __ Usage
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- implementation(file)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type.File.Source protocol (ash v3.4.8)

Protocol for allowing the casting of something into an [`Ash.Type.File`](external_link).

##  __ Usage
    
    
    defmodule MyStruct do
      defstruct [:path]
    
      @behavior Ash.Type.File.Implementation
    
      @impl Ash.Type.File.Implementation
      def path(%__MODULE__{path: path}), do: {:ok, path}
    
      @impl Ash.Type.File.Implementation
      def open(%__MODULE__{path: path}, modes), do: File.open(path, modes)
    
      defimpl Ash.Type.File.Source do
        def implementation(%MyStruct{} = struct), do: {:ok, MyStruct}
      end
    end

#  __ Summary

##  Types

t()

All the types that implement this protocol.

##  Functions

implementation(file)

Detect Implementation of the file.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [term](external_link)()

All the types that implement this protocol.

#  __ Functions

__ Link to this function

# implementation(file)

[ __ View Source ](external_link)
    
    
    @spec implementation(t()) :: {:ok, [Ash.Type.File.Implementation.t](external_link)()} | :error

Detect Implementation of the file.

Returns an `:ok` tuple with the implementation module if the file is supported and `:error` otherwise.
