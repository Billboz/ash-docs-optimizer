# Ash.UUIDv7 — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.UUIDv7 (ash v3.4.8)
  - __ Examples
- __ Summary
  - Types
  - Functions
- __ Types
- raw()
- t()
- __ Functions
- bingenerate()
  - __ Example
- decode(raw_uuid)
  - __ Example
- encode(hex_uuid)
  - __ Example
- extract_timestamp(uuid)
  - __ Example
- generate()
  - __ Example

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.UUIDv7 (ash v3.4.8)

Helpers for working with UUIDs version 7.

[RFC 9562](external_link)

Used for generating UUIDs version 7 with increased clock precision for better monotonicity, as described by method 3 of the [Section 6.2](external_link) on [uuidv7](external_link)

##  __ Examples
    
    
    iex> UUIDv7.generate()
    "018e90d8-06e8-7f9f-bfd7-6730ba98a51b"
    
    iex> UUIDv7.bingenerate()
    <<1, 142, 144, 216, 6, 232, 127, 159, 191, 215, 103, 48, 186, 152, 165, 27>>

#  __ Summary

##  Types

raw()

A raw binary representation of a UUID.

t()

A hex-encoded UUID string.

##  Functions

bingenerate()

Generates a version 7 UUID in the binary format.

decode(raw_uuid)

Decode a string representation of a UUID to the raw binary version.

encode(hex_uuid)

Encode a raw UUID to the string representation.

extract_timestamp(uuid)

Extract the millisecond timestamp from the UUID.

generate()

Generates a version 7 UUID using submilliseconds for increased clock precision.

#  __ Types

__ Link to this type

# raw()

[ __ View Source ](external_link)
    
    
    @type raw() :: <<_::128>>

A raw binary representation of a UUID.

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: <<_::288>>

A hex-encoded UUID string.

#  __ Functions

__ Link to this function

# bingenerate()

[ __ View Source ](external_link)
    
    
    @spec bingenerate() :: raw()

Generates a version 7 UUID in the binary format.

##  __ Example
    
    
    iex> UUIDv7.bingenerate()
    <<1, 142, 144, 216, 6, 232, 127, 159, 191, 215, 103, 48, 186, 152, 165, 27>>

__ Link to this function

# decode(raw_uuid)

[ __ View Source ](external_link)
    
    
    @spec decode(t() | raw()) :: raw() | :error

Decode a string representation of a UUID to the raw binary version.

##  __ Example
    
    
    iex> UUIDv7.decode("018e90d8-06e8-7f9f-bfd7-6730ba98a51b")
    <<1, 142, 144, 216, 6, 232, 127, 159, 191, 215, 103, 48, 186, 152, 165, 27>>

__ Link to this function

# encode(hex_uuid)

[ __ View Source ](external_link)
    
    
    @spec encode(t() | raw()) :: t() | :error

Encode a raw UUID to the string representation.

##  __ Example
    
    
    iex> UUIDv7.encode(<<1, 142, 144, 216, 6, 232, 127, 159, 191, 215, 103, 48, 186, 152, 165, 27>>)
    "018e90d8-06e8-7f9f-bfd7-6730ba98a51b"

__ Link to this function

# extract_timestamp(uuid)

[ __ View Source ](external_link)
    
    
    @spec extract_timestamp(t() | raw()) :: [integer](external_link)()

Extract the millisecond timestamp from the UUID.

##  __ Example
    
    
    iex> UUIDv7.extract_timestamp("018ecb40-c457-73e6-a400-000398daddd9")
    1712807003223

__ Link to this function

# generate()

[ __ View Source ](external_link)
    
    
    @spec generate() :: t()

Generates a version 7 UUID using submilliseconds for increased clock precision.

##  __ Example
    
    
    iex> UUIDv7.generate()
    "018e90d8-06e8-7f9f-bfd7-6730ba98a51b"
