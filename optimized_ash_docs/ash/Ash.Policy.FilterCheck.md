# Ash.Policy.FilterCheck — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Policy.FilterCheck behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- context()
- options()
- __ Callbacks
- filter(actor, context, options)
- reject(actor, context, options)
- __ Functions
- is_filter_check?(module)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Policy.FilterCheck behaviour (ash v3.4.8)

A type of check that is represented by a filter statement

That filter statement can be templated, currently only supporting `{:_actor, field}` which will replace that portion of the filter with the appropriate field value from the actor and `{:_actor, :_primary_key}` which will replace the value with a keyword list of the primary key fields of an actor to their values, like `[id: 1]`. If the actor is not present `{:_actor, field}` becomes `nil`, and `{:_actor, :_primary_key}` becomes `false`.

You can customize what the "negative" filter looks like by defining `reject/3`. This is important for filters over related data. For example, given an `owner` relationship and a data layer like `ash_postgres` where `column != NULL` does _not_ evaluate to true (see postgres docs on NULL for more):
    
    
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

#  __ Summary

##  Types

context()

options()

##  Callbacks

filter(actor, context, options)

reject(actor, context, options)

##  Functions

is_filter_check?(module)

#  __ Types

__ Link to this type

# context()

[ __ View Source ](external_link)
    
    
    @type context() :: %{
      :action => [Ash.Resource.Actions.action](external_link)(),
      :resource => [Ash.Resource.t](external_link)(),
      :domain => [Ash.Domain.t](external_link)(),
      optional(:query) => [Ash.Query.t](external_link)(),
      optional(:changeset) => [Ash.Changeset.t](external_link)(),
      optional(:action_input) => [Ash.ActionInput.t](external_link)(),
      optional([any](external_link)()) => [any](external_link)()
    }

__ Link to this type

# options()

[ __ View Source ](external_link)
    
    
    @type options() :: [Keyword.t](external_link)()

#  __ Callbacks

__ Link to this callback

# filter(actor, context, options)

[ __ View Source ](external_link)
    
    
    @callback filter(actor :: [term](external_link)(), context(), options()) :: [Keyword.t](external_link)() | [Ash.Expr.t](external_link)()

__ Link to this callback

# reject(actor, context, options)

[ __ View Source ](external_link) (optional)
    
    
    @callback reject(actor :: [term](external_link)(), context(), options()) :: [Keyword.t](external_link)() | [Ash.Expr.t](external_link)()

#  __ Functions

__ Link to this function

# is_filter_check?(module)

[ __ View Source ](external_link)
