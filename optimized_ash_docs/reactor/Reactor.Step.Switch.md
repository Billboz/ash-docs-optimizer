# Reactor.Step.Switch — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Step.Switch (reactor v0.9.1)
  - __ Options
  - __ Branching behaviour
  - __ Returning
- __ Summary
  - Types
- __ Types
- allow_async_option()
- default_option()
- match_option()
- matches()
- on_option()
- options()
- predicate()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Step.Switch (reactor v0.9.1)

Conditionally decide which steps should be run at runtime.

##  __ Options

  * `matches` \- a list of match consisting of predicates and a list of steps to execute if the predicate returns a truthy value. See `t:matches` for more information. Required.
  * `default` \- a list of steps to execute if none of the predicates match. Optional.
  * `allow_async?` \- a boolean indicating whether to allow the steps to be executed asynchronously. Optional. Defaults to `true`.
  * `on` \- the name of the argument to pass into the predicates. If this argument is not provided to this step, then an error will be returned.



##  __ Branching behaviour

Each of the predicates in `matches` are tried in order, until either one returns a truthy value, or all the matches are exhausted.

If there is a match, then the matching steps are emitted into the parent running Reactor.

In the case that no match is found, then the steps provided in the `default` option are emitted. If no default is provided, then an error is returned.

> #### Tip
> 
> Execution of predicates stops once the first match is found. This means that if multiple predicates potentially match, the subsequent ones will never be called.

##  __ Returning

By default the step returns `nil` as it's result.

You can have the step return the result of a branch by adding a step to the branch with the same name as the switch which returns the expected value. This will be handled by normal Reactor step emission rules.

#  __ Summary

##  Types

allow_async_option()

default_option()

match_option()

matches()

A list of predicates and steps to execute if the predicate returns a truthy value.

on_option()

options()

predicate()

A predicate is a 1-arity function. It can return anything. Any result which is not `nil` or `false` is considered true.

#  __ Types

__ Link to this type

# allow_async_option()

[ __ View Source ](external_link)
    
    
    @type allow_async_option() :: {:allow_async?, [boolean](external_link)()}

__ Link to this type

# default_option()

[ __ View Source ](external_link)
    
    
    @type default_option() :: {:default, [[Reactor.Step.t](external_link)()]}

__ Link to this type

# match_option()

[ __ View Source ](external_link)
    
    
    @type match_option() :: {:matches, matches()}

__ Link to this type

# matches()

[ __ View Source ](external_link)
    
    
    @type matches() :: [{predicate(), [[Reactor.Step.t](external_link)()]}]

A list of predicates and steps to execute if the predicate returns a truthy value.

__ Link to this type

# on_option()

[ __ View Source ](external_link)
    
    
    @type on_option() :: {:on, [atom](external_link)()}

__ Link to this type

# options()

[ __ View Source ](external_link)
    
    
    @type options() :: [
      match_option() | default_option() | allow_async_option() | on_option()
    ]

__ Link to this type

# predicate()

[ __ View Source ](external_link)
    
    
    @type predicate() :: ([any](external_link)() -> [any](external_link)())

A predicate is a 1-arity function. It can return anything. Any result which is not `nil` or `false` is considered true.
