# AshPolicyAuthorizer.SimpleCheck — ash_policy_authorizer v0.16.5

Project: ash_policy_authorizer v0.16.5

## Table of Contents

- AshPolicyAuthorizer.SimpleCheck behaviour (ash_policy_authorizer v0.16.5) [ View Source ](external_link)
- Link to this section Summary
  - Types
  - Callbacks
- Link to this section Types
- authorizer()
  - Specs
- options()
  - Specs
- Link to this section Callbacks
- match?(struct, authorizer, options)
  - Specs

[ ash_policy_authorizer ](external_link) **v0.16.5**

[ ![ash_policy_authorizer](external_link) ](https://github.com/ash-project/ash_policy_authorizer)

  * GUIDES
  * Modules






#  AshPolicyAuthorizer.SimpleCheck behaviour (ash_policy_authorizer v0.16.5) [ View Source ](external_link)

A type of check that operates only on request context, never on the data

Simply define `match?/3`, which gets the actor, request context, and opts, and returns true or false

#  Link to this section Summary 

##  Types

authorizer()

options()

##  Callbacks

match?(struct, authorizer, options)

Whether or not the request matches the check

#  Link to this section Types 

Link to this type

# authorizer()

[ View Source ](external_link)

## Specs
    
    
    authorizer() :: [AshPolicyAuthorizer.Authorizer.t](external_link)()

Link to this type

# options()

[ View Source ](external_link)

## Specs
    
    
    options() :: [Keyword.t](external_link)()

#  Link to this section Callbacks 

Link to this callback

# match?(struct, authorizer, options)

[ View Source ](external_link)

## Specs
    
    
    match?([struct](external_link)(), authorizer(), options()) :: [boolean](external_link)()

Whether or not the request matches the check
