# Ash.Policy.Check — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Policy.Check behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- actor()
- authorizer()
- check_type()
- options()
- ref()
- t()
- __ Callbacks
- auto_filter(actor, authorizer, options)
- check(actor, list, map, options)
- describe(options)
- expand_description(actor, authorizer, options)
- prefer_expanded_description?()
- requires_original_data?(actor, options)
- strict_check(actor, authorizer, options)
- type()
- __ Functions
- defines_auto_filter?(module)
- defines_check?(module)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Policy.Check behaviour (ash v3.4.8)

A behaviour for declaring checks, which can be used to easily construct authorization rules.

If a check can be expressed simply, i.e as a function of the actor, or the context of the request, see [`Ash.Policy.SimpleCheck`](external_link) for an easy way to write that check. If a check can be expressed with a filter statement, see [`Ash.Policy.FilterCheck`](external_link) for an easy way to write that check.

#  __ Summary

##  Types

actor()

authorizer()

check_type()

options()

ref()

t()

##  Callbacks

auto_filter(actor, authorizer, options)

An optional callback, that allows the check to work with policies set to `access_type :filter`

check(actor, list, map, options)

An optional callback, hat allows the check to work with policies set to `access_type :runtime`

describe(options)

Describe the check in human readable format, given the options

expand_description(actor, authorizer, options)

Expands the description of the check, given the actor and subject

prefer_expanded_description?()

Whether or not the expanded description should replace the basic description in breakdowns

requires_original_data?(actor, options)

Whether or not your check requires the original data of a changeset (if applicable)

strict_check(actor, authorizer, options)

Strict checks should be cheap, and should never result in external calls (like database or domain)

type()

The type of the check

##  Functions

defines_auto_filter?(module)

defines_check?(module)

#  __ Types

__ Link to this type

# actor()

[ __ View Source ](external_link)
    
    
    @type actor() :: [any](external_link)()

__ Link to this type

# authorizer()

[ __ View Source ](external_link)
    
    
    @type authorizer() :: [Ash.Policy.Authorizer.t](external_link)()

__ Link to this type

# check_type()

[ __ View Source ](external_link)
    
    
    @type check_type() :: :simple | :filter | :manual

__ Link to this type

# options()

[ __ View Source ](external_link)
    
    
    @type options() :: [Keyword.t](external_link)()

__ Link to this type

# ref()

[ __ View Source ](external_link)
    
    
    @type ref() :: {[module](external_link)(), [Keyword.t](external_link)()} | [module](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Policy.Check{
      check: [term](external_link)(),
      check_module: [term](external_link)(),
      check_opts: [term](external_link)(),
      type: [term](external_link)()
    }

#  __ Callbacks

__ Link to this callback

# auto_filter(actor, authorizer, options)

[ __ View Source ](external_link) (optional)
    
    
    @callback auto_filter(actor(), authorizer(), options()) :: [Keyword.t](external_link)() | [Ash.Expr.t](external_link)()

An optional callback, that allows the check to work with policies set to `access_type :filter`

Return a keyword list filter that will be applied to the query being made, and will scope the results to match the rule

__ Link to this callback

# check(actor, list, map, options)

[ __ View Source ](external_link) (optional)
    
    
    @callback check(actor(), [[Ash.Resource.record](external_link)()], [map](external_link)(), options()) :: [
      [Ash.Resource.record](external_link)()
    ]

An optional callback, hat allows the check to work with policies set to `access_type :runtime`

Takes a list of records, and returns the subset of authorized records.

__ Link to this callback

# describe(options)

[ __ View Source ](external_link)
    
    
    @callback describe(options()) :: [String.t](external_link)()

Describe the check in human readable format, given the options

__ Link to this callback

# expand_description(actor, authorizer, options)

[ __ View Source ](external_link) (optional)
    
    
    @callback expand_description(
      actor(),
      authorizer(),
      options()
    ) :: {:ok, [String.t](external_link)()} | :none

Expands the description of the check, given the actor and subject

__ Link to this callback

# prefer_expanded_description?()

[ __ View Source ](external_link)
    
    
    @callback prefer_expanded_description?() :: [boolean](external_link)()

Whether or not the expanded description should replace the basic description in breakdowns

__ Link to this callback

# requires_original_data?(actor, options)

[ __ View Source ](external_link)
    
    
    @callback requires_original_data?(actor(), options()) :: [boolean](external_link)()

Whether or not your check requires the original data of a changeset (if applicable)

__ Link to this callback

# strict_check(actor, authorizer, options)

[ __ View Source ](external_link)
    
    
    @callback strict_check(actor(), authorizer(), options()) ::
      {:ok, [boolean](external_link)() | :unknown} | {:error, [term](external_link)()}

Strict checks should be cheap, and should never result in external calls (like database or domain)

It should return `{:ok, true}` if it can tell that the request is authorized, and `{:ok, false}` if it can tell that it is not. If unsure, it should return `{:ok, :unknown}`

__ Link to this callback

# type()

[ __ View Source ](external_link)
    
    
    @callback type() :: check_type()

The type of the check

`:manual` checks must be written by hand as standard check modules `:filter` checks can use [`Ash.Policy.FilterCheck`](external_link) for simplicity `:simple` checks can use [`Ash.Policy.SimpleCheck`](external_link) for simplicity

#  __ Functions

__ Link to this function

# defines_auto_filter?(module)

[ __ View Source ](external_link)

__ Link to this function

# defines_check?(module)

[ __ View Source ](external_link)
