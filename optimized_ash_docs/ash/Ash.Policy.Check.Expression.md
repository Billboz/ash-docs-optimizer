# Ash.Policy.Check.Expression — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Policy.Check.Expression (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- auto_filter(actor, authorizer, opts)
- auto_filter_not(actor, authorizer, opts)
- check(actor, data, authorizer, opts)
- expand_description(actor, authorizer, opts)
- reject(actor, authorizer, opts)
- requires_original_data?(_, _)
- strict_check(actor, authorizer, opts)
- strict_check_context(opts)
- type()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Policy.Check.Expression (ash v3.4.8)

The check module used for `expr`s in policies

#  __ Summary

##  Functions

auto_filter(actor, authorizer, opts)

Callback implementation for [`Ash.Policy.Check.auto_filter/3`](external_link).

auto_filter_not(actor, authorizer, opts)

check(actor, data, authorizer, opts)

Callback implementation for [`Ash.Policy.Check.check/4`](external_link).

expand_description(actor, authorizer, opts)

Callback implementation for [`Ash.Policy.Check.expand_description/3`](external_link).

reject(actor, authorizer, opts)

Callback implementation for [`Ash.Policy.FilterCheck.reject/3`](external_link).

requires_original_data?(_, _)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](external_link).

strict_check(actor, authorizer, opts)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](external_link).

strict_check_context(opts)

type()

Callback implementation for [`Ash.Policy.Check.type/0`](external_link).

#  __ Functions

__ Link to this function

# auto_filter(actor, authorizer, opts)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Policy.Check.auto_filter/3`](external_link).

__ Link to this function

# auto_filter_not(actor, authorizer, opts)

[ __ View Source ](external_link)

__ Link to this function

# check(actor, data, authorizer, opts)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Policy.Check.check/4`](external_link).

__ Link to this function

# expand_description(actor, authorizer, opts)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Policy.Check.expand_description/3`](external_link).

__ Link to this function

# reject(actor, authorizer, opts)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Policy.FilterCheck.reject/3`](external_link).

__ Link to this function

# requires_original_data?(_, _)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](external_link).

__ Link to this function

# strict_check(actor, authorizer, opts)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](external_link).

__ Link to this function

# strict_check_context(opts)

[ __ View Source ](external_link)

__ Link to this function

# type()

[ __ View Source ](external_link)

Callback implementation for [`Ash.Policy.Check.type/0`](external_link).
