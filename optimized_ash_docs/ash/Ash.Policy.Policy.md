# Ash.Policy.Policy — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Policy.Policy (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- at_least_one_policy_expression(policies, authorizer)
- fetch_fact(facts, arg2)
- fetch_or_strict_check_fact(authorizer, arg2)
- solve(authorizer)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Policy.Policy (ash v3.4.8)

Represents a policy on an Ash.Resource

#  __ Summary

##  Types

t()

##  Functions

at_least_one_policy_expression(policies, authorizer)

fetch_fact(facts, arg2)

fetch_or_strict_check_fact(authorizer, arg2)

solve(authorizer)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Policy.Policy{
      access_type: [term](external_link)(),
      bypass?: [term](external_link)(),
      condition: [term](external_link)(),
      description: [term](external_link)(),
      policies: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# at_least_one_policy_expression(policies, authorizer)

[ __ View Source ](external_link)

__ Link to this function

# fetch_fact(facts, arg2)

[ __ View Source ](external_link)

__ Link to this function

# fetch_or_strict_check_fact(authorizer, arg2)

[ __ View Source ](external_link)

__ Link to this function

# solve(authorizer)

[ __ View Source ](external_link)
