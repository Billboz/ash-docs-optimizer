# Ash.Context — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Context (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- to_opts(map, opts \\\ [])

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Context (ash v3.4.8)

Functions for working with the context provided to various callbacks in Ash.

#  __ Summary

##  Functions

to_opts(map, opts \\\ [])

Copies keys from the given context map into a keyword list. Does _not_ copy the `:domain` key.

#  __ Functions

__ Link to this function

# to_opts(map, opts \\\ [])

[ __ View Source ](external_link)

Copies keys from the given context map into a keyword list. Does _not_ copy the `:domain` key.

Keys copied:

  * `:actor`
  * `:authorize?`
  * `:tracer`
  * `:tenant`


