# AshDoubleEntry.ULID — ash_double_entry v1.0.6

Project: ash_double_entry v1.0.6

## Table of Contents

- [ __ View Source ](external_link) AshDoubleEntry.ULID (ash_double_entry v1.0.6)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- bingenerate(timestamp \\\ System.system_time(:millisecond))
- bingenerate_last(timestamp \\\ System.system_time(:millisecond))
- cast_input(value, constraints)
- cast_stored(bytes, _)
- dump_to_native(encoded, _)
- generate(timestamp \\\ System.system_time(:millisecond))
- generate_last(timestamp \\\ System.system_time(:millisecond))
- storage_type()

__

Search documentation of ash_double_entry __ __

__ Settings

#  [ __ View Source ](external_link) AshDoubleEntry.ULID (ash_double_entry v1.0.6)

An Ash type for ULID strings.

#  __ Summary

##  Types

t()

A hex-encoded ULID string.

##  Functions

bingenerate(timestamp \\\ System.system_time(:millisecond))

Generates a binary ULID.

bingenerate_last(timestamp \\\ System.system_time(:millisecond))

Generates a binary ULID.

cast_input(value, constraints)

Casts a string to ULID.

cast_stored(bytes, _)

Converts a binary ULID into a Crockford Base32 encoded string.

dump_to_native(encoded, _)

Converts a Crockford Base32 encoded ULID into a binary.

generate(timestamp \\\ System.system_time(:millisecond))

Generates a Crockford Base32 encoded ULID.

generate_last(timestamp \\\ System.system_time(:millisecond))

Generates a Crockford Base32 encoded ULID, guaranteed to sort equal to or after any other ULID generated for the same timestamp.

storage_type()

The underlying schema type.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: <<_::208>>

A hex-encoded ULID string.

#  __ Functions

__ Link to this function

# bingenerate(timestamp \\\ System.system_time(:millisecond))

[ __ View Source ](external_link)

Generates a binary ULID.

If a value is provided for `timestamp`, the generated ULID will be for the provided timestamp. Otherwise, a ULID will be generated for the current time.

Arguments:

  * `timestamp`: A Unix timestamp with millisecond precision.



__ Link to this function

# bingenerate_last(timestamp \\\ System.system_time(:millisecond))

[ __ View Source ](external_link)

Generates a binary ULID.

Do not use this for storage, only for generating comparators, i.e "balance as of a given ulid".

If a value is provided for `timestamp`, the generated ULID will be for the provided timestamp. Otherwise, a ULID will be generated for the current time.

Arguments:

  * `timestamp`: A Unix timestamp with millisecond precision.



__ Link to this function

# cast_input(value, constraints)

[ __ View Source ](external_link)

Casts a string to ULID.

__ Link to this function

# cast_stored(bytes, _)

[ __ View Source ](external_link)

Converts a binary ULID into a Crockford Base32 encoded string.

__ Link to this function

# dump_to_native(encoded, _)

[ __ View Source ](external_link)

Converts a Crockford Base32 encoded ULID into a binary.

__ Link to this function

# generate(timestamp \\\ System.system_time(:millisecond))

[ __ View Source ](external_link)

Generates a Crockford Base32 encoded ULID.

If a value is provided for `timestamp`, the generated ULID will be for the provided timestamp. Otherwise, a ULID will be generated for the current time.

Arguments:

  * `timestamp`: A Unix timestamp with millisecond precision.



__ Link to this function

# generate_last(timestamp \\\ System.system_time(:millisecond))

[ __ View Source ](external_link)

Generates a Crockford Base32 encoded ULID, guaranteed to sort equal to or after any other ULID generated for the same timestamp.

Do not use this for storage, only for generating comparators, i.e "balance as of a given ulid".

If a value is provided for `timestamp`, the generated ULID will be for the provided timestamp. Otherwise, a ULID will be generated for the current time.

Arguments:

  * `timestamp`: A Unix timestamp with millisecond precision.



__ Link to this function

# storage_type()

[ __ View Source ](external_link)

The underlying schema type.
