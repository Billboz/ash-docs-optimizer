# AshPolicyAuthorizer.Check — ash_policy_authorizer v0.16.5

Project: ash_policy_authorizer v0.16.5

## Table of Contents

- AshPolicyAuthorizer.Check behaviour (ash_policy_authorizer v0.16.5) [ View Source ](external_link)
- Link to this section Summary
  - Types
  - Callbacks
  - Functions
- Link to this section Types
- authorizer()
  - Specs
- check_type()
  - Specs
- options()
  - Specs
- Link to this section Callbacks
- auto_filter(struct, authorizer, options)
  - Specs
- check(struct, list, map, options)
  - Specs
- describe(options)
  - Specs
- strict_check(struct, authorizer, options)
  - Specs
- type()
  - Specs
- Link to this section Functions
- defines_auto_filter?(module)
- defines_check?(module)

[ ash_policy_authorizer ](external_link) **v0.16.5**

[ ![ash_policy_authorizer](external_link) ](https://github.com/ash-project/ash_policy_authorizer)

  * GUIDES
  * Modules






#  AshPolicyAuthorizer.Check behaviour (ash_policy_authorizer v0.16.5) [ View Source ](external_link)

A behaviour for declaring checks, which can be used to easily construct authorization rules.

If a check can be expressed simply as a function of the actor, or the context of the request, see [`AshPolicyAuthorizer.SimpleCheck`](external_link) for an easy way to write that check. If a check can be expressed simply with a filter statement, see [`AshPolicyAuthorizer.FilterCheck`](external_link) for an easy way to write that check.

#  Link to this section Summary 

##  Types

authorizer()

check_type()

options()

##  Callbacks

auto_filter(struct, authorizer, options)

An optional callback, that allows the check to work with policies set to `access_type :filter`

check(struct, list, map, options)

An optional callback, hat allows the check to work with policies set to `access_type :runtime`

describe(options)

Describe the check in human readable format, given the options

strict_check(struct, authorizer, options)

Strict checks should be cheap, and should never result in external calls (like database or api)

type()

The type fo the check

##  Functions

defines_auto_filter?(module)

defines_check?(module)

#  Link to this section Types 

Link to this type

# authorizer()

[ View Source ](external_link)

## Specs
    
    
    authorizer() :: [AshPolicyAuthorizer.Authorizer.t](external_link)()

Link to this type

# check_type()

[ View Source ](external_link)

## Specs
    
    
    check_type() :: :simple | :filter | :manual

Link to this type

# options()

[ View Source ](external_link)

## Specs
    
    
    options() :: [Keyword.t](external_link)()

#  Link to this section Callbacks 

Link to this callback

# auto_filter(struct, authorizer, options)

[ View Source ](external_link) (optional)

## Specs
    
    
    auto_filter([struct](external_link)(), authorizer(), options()) :: [Keyword.t](external_link)()

An optional callback, that allows the check to work with policies set to `access_type :filter`

Return a keyword list filter that will be applied to the query being made, and will scope the results to match the rule

Link to this callback

# check(struct, list, map, options)

[ View Source ](external_link) (optional)

## Specs
    
    
    check([struct](external_link)(), [[Ash.Resource.record](1.50.14/Ash.Resource.html#t:record/0)()], [map](external_link)(), options()) ::
      {:ok, [[Ash.Resource.record](1.50.14/Ash.Resource.html#t:record/0)()] | [boolean](external_link)()} | {:error, [Ash.Error.t](1.50.14/Ash.Error.html#t:t/0)()}

An optional callback, hat allows the check to work with policies set to `access_type :runtime`

Takes a list of records, and returns `{:ok, true}` if they are all authorized, or `{:ok, list}` containing the list of records that are authorized. You can also just return the whole list, `{:ok, true}` is just a shortcut.

Can also return `{:error, error}` if something goes wrong

Link to this callback

# describe(options)

[ View Source ](external_link)

## Specs
    
    
    describe(options()) :: [String.t](external_link)()

Describe the check in human readable format, given the options

Link to this callback

# strict_check(struct, authorizer, options)

[ View Source ](external_link)

## Specs
    
    
    strict_check([struct](external_link)(), authorizer(), options()) :: {:ok, [boolean](external_link)() | :unknown}

Strict checks should be cheap, and should never result in external calls (like database or api)

It should return `{:ok, true}` if it can tell that the request is authorized, and `{:ok, false}` if it can tell that it is not. If unsure, it should return `{:ok, :unknown}`

Link to this callback

# type()

[ View Source ](external_link)

## Specs
    
    
    type() :: check_type()

The type fo the check

`:manual` checks must be written by hand as standard check modules `:filter` checks can use [`AshPolicyAuthorizer.FilterCheck`](external_link) for simplicity `:simple` checks can use [`AshPolicyAuthorizer.SimpleCheck`](external_link) for simplicity

#  Link to this section Functions 

Link to this function

# defines_auto_filter?(module)

[ View Source ](external_link)

Link to this function

# defines_check?(module)

[ View Source ](external_link)
