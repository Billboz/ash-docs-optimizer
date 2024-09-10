# Ash.Policy.Authorizer — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Policy.Authorizer (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- alter_sort(sort, authorizer, context)
- expr_check(expr)
- field_policies(body)
- install(igniter, module, type, path, argv)
- policies(body)
- print_tuple_boolean(v)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Policy.Authorizer (ash v3.4.8)

An authorization extension for ash resources.

To add this extension to a resource, add it to the list of `authorizers` like so:
    
    
    use Ash.Resource,
      ...,
      authorizers: [
        Ash.Policy.Authorizer
      ]

A resource can be given a set of policies, which are enforced on each call to a resource action.

For reads, policies can be configured to filter out data that the actor shouldn't see, as opposed to resulting in a forbidden error.

See the [policies guide](external_link) for practical examples.

Policies are solved/managed via a boolean satisfiability solver. To read more about boolean satisfiability, see this page: <https://en.wikipedia.org/wiki/Boolean_satisfiability_problem>. At the end of the day, however, it is not necessary to understand exactly how Ash takes your authorization requirements and determines if a request is allowed. The important thing to understand is that Ash may or may not run any/all of your authorization rules as they may be deemed unnecessary. As such, authorization checks should have no side effects. Ideally, the checks built-in to ash should cover the bulk of your needs.

#  __ Summary

##  Types

t()

##  Functions

alter_sort(sort, authorizer, context)

expr_check(expr)

field_policies(body)

install(igniter, module, type, path, argv)

policies(body)

print_tuple_boolean(v)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Policy.Authorizer{
      action: [Ash.Resource.Actions.Action.t](external_link)(),
      action_input: [Ash.ActionInput.t](external_link)() | nil,
      actor: [term](external_link)(),
      changeset: [Ash.Changeset.t](external_link)() | nil,
      check_scenarios: [[map](external_link)()],
      context: [map](external_link)(),
      data: [term](external_link)(),
      data_facts: [map](external_link)(),
      domain: [Ash.Domain.t](external_link)(),
      facts: [map](external_link)(),
      for_fields: [term](external_link)(),
      policies: [[term](external_link)()],
      query: [Ash.Query.t](external_link)() | nil,
      real_scenarios: [[map](external_link)()],
      resource: [Ash.Resource.t](external_link)(),
      scenarios: [[map](external_link)()],
      subject: [Ash.Query.t](external_link)() | [Ash.Changeset.t](external_link)() | [Ash.ActionInput.t](external_link)()
    }

#  __ Functions

__ Link to this function

# alter_sort(sort, authorizer, context)

[ __ View Source ](external_link)

__ Link to this function

# expr_check(expr)

[ __ View Source ](external_link)

__ Link to this macro

# field_policies(body)

[ __ View Source ](external_link) (macro)

__ Link to this function

# install(igniter, module, type, path, argv)

[ __ View Source ](external_link)

__ Link to this macro

# policies(body)

[ __ View Source ](external_link) (macro)

__ Link to this function

# print_tuple_boolean(v)

[ __ View Source ](external_link)
