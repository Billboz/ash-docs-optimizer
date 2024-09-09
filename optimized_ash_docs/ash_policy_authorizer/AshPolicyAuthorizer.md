# AshPolicyAuthorizer — ash_policy_authorizer v0.16.5

Project: ash_policy_authorizer v0.16.5

## Table of Contents

- AshPolicyAuthorizer (ash_policy_authorizer v0.16.5) [ View Source ](external_link)
- Link to this section Summary
  - Types
  - Functions
- Link to this section Types
- request()
  - Specs
- Link to this section Functions
- default_access_type(resource)
- describe_resource(resource)
- log_policy_breakdowns()
- policies(resource)
- show_policy_breakdowns?()
- strict_check(actor, query, api)

[ ash_policy_authorizer ](external_link) **v0.16.5**

[ ![ash_policy_authorizer](external_link) ](https://github.com/ash-project/ash_policy_authorizer)

  * GUIDES
  * Modules






#  AshPolicyAuthorizer (ash_policy_authorizer v0.16.5) [ View Source ](external_link)

An authorization extension for ash resources.

For more information, see [`AshPolicyAuthorizer.Authorizer`](external_link)

#  Link to this section Summary 

##  Types

request()

##  Functions

default_access_type(resource)

describe_resource(resource)

log_policy_breakdowns()

Whether or not ash policy authorizer is configured to show policy breakdowns in error messages

policies(resource)

show_policy_breakdowns?()

Whether or not ash policy authorizer is configured to show policy breakdowns in error messages

strict_check(actor, query, api)

A utility to determine if a given query/changeset would pass authorization.

#  Link to this section Types 

Link to this type

# request()

[ View Source ](external_link)

## Specs
    
    
    request() :: [Ash.Engine.Request.t](1.50.14/Ash.Engine.Request.html#t:t/0)()

#  Link to this section Functions 

Link to this function

# default_access_type(resource)

[ View Source ](external_link)

Link to this function

# describe_resource(resource)

[ View Source ](external_link)

Link to this function

# log_policy_breakdowns()

[ View Source ](external_link)

Whether or not ash policy authorizer is configured to show policy breakdowns in error messages

Link to this function

# policies(resource)

[ View Source ](external_link)

Link to this function

# show_policy_breakdowns?()

[ View Source ](external_link)

Whether or not ash policy authorizer is configured to show policy breakdowns in error messages

Link to this function

# strict_check(actor, query, api)

[ View Source ](external_link)

A utility to determine if a given query/changeset would pass authorization.

_This is still experimental._
