# Ash.Query.Function.GetPath — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query.Function.GetPath (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- args()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query.Function.GetPath (ash v3.4.8)

Gets the value at the provided path in the value, which must be a map or embed.

If you are using a datalayer that provides a `type` function (like AshPostgres), it is a good idea to wrap your call in that function, e.g `type(author[:bio][:title], :string)`, since data layers that depend on knowing types may not be able to infer the type from the path. Ash may eventually be able to figure out the type, in the case that the path consists of only embedded attributes.

If an atom key is provided, access is _indiscriminate_ of atoms vs strings. The atom key is checked first. If a string key is provided, that is the only thing that is checked. If the value will or may be a struct, be sure to use atoms.

The data layer may handle this differently, for example, AshPostgres only checks strings at the data layer (because thats all it can be in the database anyway).

Available in query expressions using bracket syntax, e.g `foo[:bar][:baz]`.

#  __ Summary

##  Functions

args()

Callback implementation for [`Ash.Query.Function.args/0`](external_link).

#  __ Functions

__ Link to this function

# args()

[ __ View Source ](external_link)

Callback implementation for [`Ash.Query.Function.args/0`](external_link).
