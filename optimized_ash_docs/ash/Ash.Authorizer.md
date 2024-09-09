# Ash.Authorizer — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Authorizer behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- context()
- state()
- __ Callbacks
- add_calculations(arg1, state, context)
- alter_filter(filter, state, context)
- alter_results(state, list, context)
- check(state, context)
- check_context(state)
- exception(atom, state)
- initial_state(t, record, action, t)
- strict_check(state, context)
- strict_check_context(state)
- __ Functions
- add_calculations(module, query_or_changeset, state, context)
- alter_filter(module, state, filter, context)
- alter_results(module, state, records, context)
- alter_sort(module, state, sort, context)
- check(module, state, context)
- check_context(module, state)
- exception(module, reason, state)
- initial_state(module, actor, resource, action, domain)
- strict_check(module, state, context)
- strict_check_context(module, state)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Authorizer behaviour (ash v3.4.8)

The interface for an ash authorizer

These will typically be implemented by an extension, but a custom one can be implemented by defining an extension that also adopts this behaviour.

Then you can extend a resource with `authorizers: [YourAuthorizer]`

#  __ Summary

##  Types

context()

state()

##  Callbacks

add_calculations(arg1, state, context)

alter_filter(filter, state, context)

alter_results(state, list, context)

check(state, context)

check_context(state)

exception(atom, state)

initial_state(t, record, action, t)

strict_check(state, context)

strict_check_context(state)

##  Functions

add_calculations(module, query_or_changeset, state, context)

alter_filter(module, state, filter, context)

alter_results(module, state, records, context)

alter_sort(module, state, sort, context)

check(module, state, context)

check_context(module, state)

exception(module, reason, state)

initial_state(module, actor, resource, action, domain)

strict_check(module, state, context)

strict_check_context(module, state)

#  __ Types

__ Link to this type

# context()

[ __ View Source ](external_link)
    
    
    @type context() :: [map](external_link)()

__ Link to this type

# state()

[ __ View Source ](external_link)
    
    
    @type state() :: [map](external_link)()

#  __ Callbacks

__ Link to this callback

# add_calculations(arg1, state, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback add_calculations([Ash.Query.t](external_link)() | [Ash.Changeset.t](external_link)(), state(), context()) ::
      {:ok, [Ash.Query.t](external_link)() | [Ash.Changeset.t](external_link)(), state()} | {:error, [Ash.Error.t](external_link)()}

__ Link to this callback

# alter_filter(filter, state, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback alter_filter(filter :: [Ash.Filter.t](external_link)(), state(), context()) ::
      {:ok, [Ash.Filter.t](external_link)()} | {:error, [Ash.Error.t](external_link)()}

__ Link to this callback

# alter_results(state, list, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback alter_results(state(), [[Ash.Resource.record](external_link)()], context()) ::
      {:ok, [[Ash.Resource.record](external_link)()]} | {:error, [Ash.Error.t](external_link)()}

__ Link to this callback

# check(state, context)

[ __ View Source ](external_link)
    
    
    @callback check(state(), context()) ::
      :authorized | {:data, [[Ash.Resource.record](external_link)()]} | {:error, [term](external_link)()}

__ Link to this callback

# check_context(state)

[ __ View Source ](external_link)
    
    
    @callback check_context(state()) :: [[atom](external_link)()]

__ Link to this callback

# exception(atom, state)

[ __ View Source ](external_link) (optional)
    
    
    @callback exception([atom](external_link)(), state()) :: [no_return](external_link)()

__ Link to this callback

# initial_state(t, record, action, t)

[ __ View Source ](external_link)
    
    
    @callback initial_state(
      [Ash.Resource.t](external_link)(),
      [Ash.Resource.record](external_link)(),
      [Ash.Resource.Actions.action](external_link)(),
      [Ash.Domain.t](external_link)()
    ) :: state()

__ Link to this callback

# strict_check(state, context)

[ __ View Source ](external_link)
    
    
    @callback strict_check(state(), context()) ::
      {:authorized, state()}
      | {:continue, state()}
      | {:filter, [Keyword.t](external_link)()}
      | {:filter, [Keyword.t](external_link)(), state()}
      | {:filter_and_continue, [Keyword.t](external_link)(), state()}
      | {:error, [term](external_link)()}

__ Link to this callback

# strict_check_context(state)

[ __ View Source ](external_link)
    
    
    @callback strict_check_context(state()) :: [[atom](external_link)()]

#  __ Functions

__ Link to this function

# add_calculations(module, query_or_changeset, state, context)

[ __ View Source ](external_link)

__ Link to this function

# alter_filter(module, state, filter, context)

[ __ View Source ](external_link)

__ Link to this function

# alter_results(module, state, records, context)

[ __ View Source ](external_link)

__ Link to this function

# alter_sort(module, state, sort, context)

[ __ View Source ](external_link)

__ Link to this function

# check(module, state, context)

[ __ View Source ](external_link)

__ Link to this function

# check_context(module, state)

[ __ View Source ](external_link)

__ Link to this function

# exception(module, reason, state)

[ __ View Source ](external_link)

__ Link to this function

# initial_state(module, actor, resource, action, domain)

[ __ View Source ](external_link)

__ Link to this function

# strict_check(module, state, context)

[ __ View Source ](external_link)

__ Link to this function

# strict_check_context(module, state)

[ __ View Source ](external_link)
