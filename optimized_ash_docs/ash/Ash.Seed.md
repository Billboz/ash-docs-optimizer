# Ash.Seed — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Seed (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- keep_nil()
- seed!(input)
- seed!(resource, input, opts \\\ [])
- update!(record, input)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Seed (ash v3.4.8)

Helpers for seeding data, useful for quickly creating lots of data either for database seeding or testing.

Important: this bypasses resource actions, and goes straight to the data layer. No action changes or validations are run. The only thing that it does at the moment is ensure that default values for attributes are set, it does not validate that required attributes are set (although the data layer may do that for you, e.g with ash_postgres).

#  __ Summary

##  Functions

keep_nil()

Returns `:__keep_nil__`, allowing to ensure a default value is not used when you want the value to be `nil`.

seed!(input)

Seed using a record (instance of a resource) as input.

seed!(resource, input, opts \\\ [])

Performs a direct call to the data layer of a resource with the provided input.

update!(record, input)

#  __ Functions

__ Link to this function

# keep_nil()

[ __ View Source ](external_link)

Returns `:__keep_nil__`, allowing to ensure a default value is not used when you want the value to be `nil`.

__ Link to this function

# seed!(input)

[ __ View Source ](external_link)

Seed using a record (instance of a resource) as input.

If the passed in struct was retrieved from the data layer already (i.e already seeded), then it is returned and nothing is done. Otherwise, the attributes and relationships are used as input to `seed/2`, after having any `%Ash.NotLoaded{}` values stripped out.

Any `nil` values will be overwritten with their default values. To avoid this, either use `seed/2` in which providing the key will have it not set the default values. If you want to force `nil` to be accepted and prevent the default value from being set, use the `keep_nil/0` function provided here, which returns `:__keep_nil__`. Alternatively, use `seed!(Post, %{text: nil})`.

See `seed!/2` for more information.

__ Link to this function

# seed!(resource, input, opts \\\ [])

[ __ View Source ](external_link)

Performs a direct call to the data layer of a resource with the provided input.

If a list is provided as input, then you will get back that many results.

To set a tenant, use the tenant option.

__ Link to this function

# update!(record, input)

[ __ View Source ](external_link)
