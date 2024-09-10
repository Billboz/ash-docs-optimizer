# AshPolicyAuthorizer.Check.Expression — ash_policy_authorizer v0.16.5

Project: ash_policy_authorizer v0.16.5

## Table of Contents

- AshPolicyAuthorizer.Check.Expression (ash_policy_authorizer v0.16.5) [ View Source ](external_link)
- Link to this section Summary
  - Functions
- Link to this section Functions
- auto_filter(actor, authorizer, opts)
- auto_filter_not(actor, authorizer, opts)
- check(actor, data, authorizer, opts)
- reject(opts)
- strict_check(_, _, _)
- strict_check_context(opts)
- type()

[ ash_policy_authorizer ](external_link) **v0.16.5**

[ ![ash_policy_authorizer](external_link) ](https://github.com/ash-project/ash_policy_authorizer)

  * GUIDES
  * Modules






#  AshPolicyAuthorizer.Check.Expression (ash_policy_authorizer v0.16.5) [ View Source ](external_link)

The check module used for `expr`s in policies

#  Link to this section Summary 

##  Functions

auto_filter(actor, authorizer, opts)

Callback implementation for [`AshPolicyAuthorizer.Check.auto_filter/3`](external_link).

auto_filter_not(actor, authorizer, opts)

check(actor, data, authorizer, opts)

Callback implementation for [`AshPolicyAuthorizer.Check.check/4`](external_link).

reject(opts)

Callback implementation for [`AshPolicyAuthorizer.FilterCheck.reject/1`](external_link).

strict_check(_, _, _)

Callback implementation for [`AshPolicyAuthorizer.Check.strict_check/3`](external_link).

strict_check_context(opts)

type()

Callback implementation for [`AshPolicyAuthorizer.Check.type/0`](external_link).

#  Link to this section Functions 

Link to this function

# auto_filter(actor, authorizer, opts)

[ View Source ](external_link)

Callback implementation for [`AshPolicyAuthorizer.Check.auto_filter/3`](external_link).

Link to this function

# auto_filter_not(actor, authorizer, opts)

[ View Source ](external_link)

Link to this function

# check(actor, data, authorizer, opts)

[ View Source ](external_link)

Callback implementation for [`AshPolicyAuthorizer.Check.check/4`](external_link).

Link to this function

# reject(opts)

[ View Source ](external_link)

Callback implementation for [`AshPolicyAuthorizer.FilterCheck.reject/1`](external_link).

Link to this function

# strict_check(_, _, _)

[ View Source ](external_link)

Callback implementation for [`AshPolicyAuthorizer.Check.strict_check/3`](external_link).

Link to this function

# strict_check_context(opts)

[ View Source ](external_link)

Link to this function

# type()

[ View Source ](external_link)

Callback implementation for [`AshPolicyAuthorizer.Check.type/0`](external_link).
