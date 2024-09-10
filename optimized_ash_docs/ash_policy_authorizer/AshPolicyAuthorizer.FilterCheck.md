# AshPolicyAuthorizer.FilterCheck — ash_policy_authorizer v0.16.5

Project: ash_policy_authorizer v0.16.5

## Table of Contents

- AshPolicyAuthorizer.FilterCheck behaviour (ash_policy_authorizer v0.16.5) [ View Source ](external_link)
- Link to this section Summary
  - Types
  - Callbacks
  - Functions
- Link to this section Types
- options()
  - Specs
- Link to this section Callbacks
- filter(options)
  - Specs
- reject(options)
  - Specs
- Link to this section Functions
- is_filter_check?(module)

[ ash_policy_authorizer ](external_link) **v0.16.5**

[ ![ash_policy_authorizer](external_link) ](https://github.com/ash-project/ash_policy_authorizer)

  * GUIDES
  * Modules






#  AshPolicyAuthorizer.FilterCheck behaviour (ash_policy_authorizer v0.16.5) [ View Source ](external_link)

A type of check that is represented by a filter statement

That filter statement can be templated, currently only supporting `{:_actor, field}` which will replace that portion of the filter with the appropriate field value from the actor and `{:_actor, :_primary_key}` which will replace the value with a keyword list of the primary key fields of an actor to their values, like `[id: 1]`. If the actor is not present `{:_actor, field}` becomes `nil`, and `{:_actor, :_primary_key}` becomes `false`.

You can customize what the "negative" filter looks like by defining `reject/1`. This is important for filters over related data. For example, given an `owner` relationship and a data layer like `ash_postgres` where `column != NULL` does _not_ evaluate to true (see postgres docs on NULL for more):
    
    
    # The opposite of
    `owner.id == 1`
    # in most cases is not
    `not(owner.id == 1)`
    # because in postgres that would be `NOT (owner.id = NULL)` in cases where there was no owner
    # A better opposite would be
    `owner.id != 1 or is_nil(owner.id)`
    # alternatively
    `not(owner.id == 1) or is_nil(owner.id)`

By being able to customize the `reject` filter, you can use related filters in your policies. Without it, they will likely have undesired effects.

#  Link to this section Summary 

##  Types

options()

##  Callbacks

filter(options)

reject(options)

##  Functions

is_filter_check?(module)

#  Link to this section Types 

Link to this type

# options()

[ View Source ](external_link)

## Specs
    
    
    options() :: [Keyword.t](external_link)()

#  Link to this section Callbacks 

Link to this callback

# filter(options)

[ View Source ](external_link) (optional)

## Specs
    
    
    filter(options()) :: [Keyword.t](external_link)()

Link to this callback

# reject(options)

[ View Source ](external_link) (optional)

## Specs
    
    
    reject(options()) :: [Keyword.t](external_link)()

#  Link to this section Functions 

Link to this function

# is_filter_check?(module)

[ View Source ](external_link)
