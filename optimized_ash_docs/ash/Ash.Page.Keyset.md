# Ash.Page.Keyset — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Page.Keyset (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- data_with_keyset(results, resource, sort)
- filter(query, values, sort, after_or_before)
- new(results, count, sort, original_query, more?, opts)
- non_executable_binary_to_term(binary, opts)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Page.Keyset (ash v3.4.8)

A page of results from `keyset` based pagination.

The results are generated with a `keyset` metadata, which can be used to fetch the next/previous pages.

#  __ Summary

##  Types

t()

##  Functions

data_with_keyset(results, resource, sort)

filter(query, values, sort, after_or_before)

new(results, count, sort, original_query, more?, opts)

non_executable_binary_to_term(binary, opts)

A restricted version of [`:erlang.binary_to_term/2`](external_link) that forbids _executable_ terms, such as anonymous functions. The `opts` are given to the underlying [`:erlang.binary_to_term/2`](external_link) call, with an empty list as a default. By default this function does not restrict atoms, as an atom interned in one node may not yet have been interned on another (except for releases, which preload all code). If you want to avoid atoms from being created, then you can pass `[:safe]` as options, as that will also enable the safety mechanisms from [`:erlang.binary_to_term/2`](external_link) itself. Ripped from <https://github.com/elixir-plug/plug_crypto/blob/v1.2.0/lib/plug/crypto.ex>

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Page.Keyset{
      after: [term](external_link)(),
      before: [term](external_link)(),
      count: [term](external_link)(),
      limit: [term](external_link)(),
      more?: [term](external_link)(),
      rerun: [term](external_link)(),
      results: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# data_with_keyset(results, resource, sort)

[ __ View Source ](external_link)

__ Link to this function

# filter(query, values, sort, after_or_before)

[ __ View Source ](external_link)

__ Link to this function

# new(results, count, sort, original_query, more?, opts)

[ __ View Source ](external_link)

__ Link to this function

# non_executable_binary_to_term(binary, opts)

[ __ View Source ](external_link)

A restricted version of [`:erlang.binary_to_term/2`](external_link) that forbids _executable_ terms, such as anonymous functions. The `opts` are given to the underlying [`:erlang.binary_to_term/2`](external_link) call, with an empty list as a default. By default this function does not restrict atoms, as an atom interned in one node may not yet have been interned on another (except for releases, which preload all code). If you want to avoid atoms from being created, then you can pass `[:safe]` as options, as that will also enable the safety mechanisms from [`:erlang.binary_to_term/2`](external_link) itself. Ripped from <https://github.com/elixir-plug/plug_crypto/blob/v1.2.0/lib/plug/crypto.ex>
