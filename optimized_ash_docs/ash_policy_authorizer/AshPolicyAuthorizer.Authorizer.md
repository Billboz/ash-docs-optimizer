# AshPolicyAuthorizer.Authorizer — ash_policy_authorizer v0.16.5

Project: ash_policy_authorizer v0.16.5

## Table of Contents

- AshPolicyAuthorizer.Authorizer (ash_policy_authorizer v0.16.5) [ View Source ](external_link)
- DSL Documenation
  - Table of Contents
  - policies
    - policy
        - authorize_if
        - forbid_if
        - authorize_unless
        - forbid_unless
    - bypass
        - authorize_if
        - forbid_if
        - authorize_unless
        - forbid_unless
- Link to this section Summary
  - Types
- Link to this section Types
- t()
  - Specs

[ ash_policy_authorizer ](external_link) **v0.16.5**

[ ![ash_policy_authorizer](external_link) ](https://github.com/ash-project/ash_policy_authorizer)

  * GUIDES
  * Modules






#  AshPolicyAuthorizer.Authorizer (ash_policy_authorizer v0.16.5) [ View Source ](external_link)

An authorization extension for ash resources.

To add this extension to a resource, add it to the list of `authorizers` like so:
    
    
    use Ash.Resource,
      ...,
      authorizers: [
        AshPolicyAuthorizer.Authorizer
      ]

# DSL Documenation

##  Table of Contents 

  * policies
    * policy
      * authorize_if
      * forbid_if
      * authorize_unless
      * forbid_unless
    * bypass
      * authorize_if
      * forbid_if
      * authorize_unless
      * forbid_unless



##  policies 

A section for declaring authorization policies.

Each policy that applies must pass independently in order for the request to be authorized.

  * policy
    * authorize_if
    * forbid_if
    * authorize_unless
    * forbid_unless
  * bypass
    * authorize_if
    * forbid_if
    * authorize_unless
    * forbid_unless



Examples:
    
    
    policies do
      # Anything you can use in a condition, you can use in a check, and vice-versa
      # This policy applies if the actor is a super_user
      # Addtionally, this policy is declared as a `bypass`. That means that this check is allowed to fail without
      # failing the whole request, and that if this check *passes*, the entire request passes.
      bypass actor_attribute_equals(:super_user, true) do
        authorize_if always()
      end
    
      # This will likely be a common occurrence. Specifically, policies that apply to all read actions
      policy action_type(:read) do
        # unless the actor is an active user, forbid their request
        forbid_unless actor_attribute_equals(:active, true)
        # if the record is marked as public, authorize the request
        authorize_if attribute(:public, true)
        # if the actor is related to the data via that data's `owner` relationship, authorize the request
        authorize_if relates_to_actor_via(:owner)
      end
    end
    

Imports:

  * [`AshPolicyAuthorizer.Check.BuiltInChecks`](external_link)
  * [`Ash.Filter.TemplateHelpers`](1.50.14/Ash.Filter.TemplateHelpers.html)



* * *

  * `:default_access_type` \- The default access type of policies for this resource.  
See the access type on individual policies for more information. The default value is `:filter`.



###  policy 

A policy has a name, a condition, and a list of checks.

Checks apply logically in the order they are specified, from top to bottom. If no check explicitly authorizes the request, then the request is forbidden. This means that, if you want to "blacklist" instead of "whitelist", you likely want to add an `authorize_if always()` at the bottom of your policy, like so:
    
    
    policy action_type(:read) do
      forbid_if not_logged_in()
      forbid_if user_is_denylisted()
      forbid_if user_is_in_denylisted_group()
    
      authorize_if always()
    end

If the policy should always run, use the `always()` check, like so:
    
    
    policy always() do
      ...
    end

  * authorize_if
  * forbid_if
  * authorize_unless
  * forbid_unless



Introspection Target:

`AshPolicyAuthorizer.Policy`

  * `:description` \- A description for the policy, used when explaining authorization results

  * `:access_type` \- There are three choices for access_type: 

  * `:strict` \- authentication uses _only_ the request context, failing when unknown.

  * `:filter` \- this is probably what you want. Automatically removes unauthorized data by altering the request filter.

  * `:runtime` \- tries to add a filter before the query, but if it cannot, it fetches the records and checks authorization.  
Be careful with runtime checks, as they can potentially cause a given scenario to fetch _all_ records of a resource, because it can't figure out a common filter between all of the possible scenarios. Use sparingly, if at all.

    * `:condition` \- A check or list of checks that must be true in order for this policy to apply. 



If the policy does not apply, it is not run, and some other policy will need to authorize the request. If no policies apply, the request is forbidden. If multiple policies apply, they must each authorize the request.

##### authorize_if

If the check is true, the request is authorized, otherwise run remaining checks.

Introspection Target:

`AshPolicyAuthorizer.Policy.Check`

Examples:
    
    
    authorize_if logged_in()
    
    
    authorize_if actor_attribute_matches_record(:group, :group)

  * `:check` \- Required. A check is a tuple of `{module, keyword}`.  
The module must implement the [`AshPolicyAuthorizer.Check`](external_link) behaviour. Generally, you won't be passing `{module, opts}`, but will use one of the provided functions that return that, like `always()` or `actor_attribute_matches_record(:foo, :bar)`. To make custom ones define a module that implements the [`AshPolicyAuthorizer.Check`](external_link) behaviour, put a convenience function in that module that returns {module, opts}, and import that into your resource. 
    
        defmodule MyResource do
    use Ash.Resource, authorizers: [AshPolicyAuthorizer.Authorizer]  
    import MyCustomCheck  
    policies do
    ...
    policy do
      authorize_if my_custom_check(:foo)
    end
    end
    end

  * `:name` \- A short name or description for the check, used when explaining authorization results




##### forbid_if

If the check is true, the request is forbidden, otherwise run remaining checks.

Introspection Target:

`AshPolicyAuthorizer.Policy.Check`

Examples:
    
    
    forbid_if not_logged_in()
    
    
    forbid_if actor_attribute_matches_record(:group, :blacklisted_groups)

  * `:check` \- Required. A check is a tuple of `{module, keyword}`.  
The module must implement the [`AshPolicyAuthorizer.Check`](external_link) behaviour. Generally, you won't be passing `{module, opts}`, but will use one of the provided functions that return that, like `always()` or `actor_attribute_matches_record(:foo, :bar)`. To make custom ones define a module that implements the [`AshPolicyAuthorizer.Check`](external_link) behaviour, put a convenience function in that module that returns {module, opts}, and import that into your resource. 
    
        defmodule MyResource do
    use Ash.Resource, authorizers: [AshPolicyAuthorizer.Authorizer]  
    import MyCustomCheck  
    policies do
    ...
    policy do
      authorize_if my_custom_check(:foo)
    end
    end
    end

  * `:name` \- A short name or description for the check, used when explaining authorization results




##### authorize_unless

If the check is false, the request is authorized, otherwise run remaining checks.

Introspection Target:

`AshPolicyAuthorizer.Policy.Check`

Examples:
    
    
    authorize_unless not_logged_in()
    
    
    authorize_unless actor_attribute_matches_record(:group, :blacklisted_groups)

  * `:check` \- Required. A check is a tuple of `{module, keyword}`.  
The module must implement the [`AshPolicyAuthorizer.Check`](external_link) behaviour. Generally, you won't be passing `{module, opts}`, but will use one of the provided functions that return that, like `always()` or `actor_attribute_matches_record(:foo, :bar)`. To make custom ones define a module that implements the [`AshPolicyAuthorizer.Check`](external_link) behaviour, put a convenience function in that module that returns {module, opts}, and import that into your resource. 
    
        defmodule MyResource do
    use Ash.Resource, authorizers: [AshPolicyAuthorizer.Authorizer]  
    import MyCustomCheck  
    policies do
    ...
    policy do
      authorize_if my_custom_check(:foo)
    end
    end
    end

  * `:name` \- A short name or description for the check, used when explaining authorization results




##### forbid_unless

If the check is true, the request is forbidden, otherwise run remaining checks.

Introspection Target:

`AshPolicyAuthorizer.Policy.Check`

Examples:
    
    
    forbid_unless logged_in()
    
    
    forbid_unless actor_attribute_matches_record(:group, :group)

  * `:check` \- Required. A check is a tuple of `{module, keyword}`.  
The module must implement the [`AshPolicyAuthorizer.Check`](external_link) behaviour. Generally, you won't be passing `{module, opts}`, but will use one of the provided functions that return that, like `always()` or `actor_attribute_matches_record(:foo, :bar)`. To make custom ones define a module that implements the [`AshPolicyAuthorizer.Check`](external_link) behaviour, put a convenience function in that module that returns {module, opts}, and import that into your resource. 
    
        defmodule MyResource do
    use Ash.Resource, authorizers: [AshPolicyAuthorizer.Authorizer]  
    import MyCustomCheck  
    policies do
    ...
    policy do
      authorize_if my_custom_check(:foo)
    end
    end
    end

  * `:name` \- A short name or description for the check, used when explaining authorization results




###  bypass 

A policy that, if passed, will skip all following policies. If failed, authorization moves on to the next policy

  * authorize_if
  * forbid_if
  * authorize_unless
  * forbid_unless



Introspection Target:

`AshPolicyAuthorizer.Policy`

  * `:description` \- A description for the policy, used when explaining authorization results

  * `:access_type` \- There are three choices for access_type: 

  * `:strict` \- authentication uses _only_ the request context, failing when unknown.

  * `:filter` \- this is probably what you want. Automatically removes unauthorized data by altering the request filter.

  * `:runtime` \- tries to add a filter before the query, but if it cannot, it fetches the records and checks authorization.  
Be careful with runtime checks, as they can potentially cause a given scenario to fetch _all_ records of a resource, because it can't figure out a common filter between all of the possible scenarios. Use sparingly, if at all.

    * `:condition` \- A check or list of checks that must be true in order for this policy to apply. 



If the policy does not apply, it is not run, and some other policy will need to authorize the request. If no policies apply, the request is forbidden. If multiple policies apply, they must each authorize the request.

##### authorize_if

If the check is true, the request is authorized, otherwise run remaining checks.

Introspection Target:

`AshPolicyAuthorizer.Policy.Check`

Examples:
    
    
    authorize_if logged_in()
    
    
    authorize_if actor_attribute_matches_record(:group, :group)

  * `:check` \- Required. A check is a tuple of `{module, keyword}`.  
The module must implement the [`AshPolicyAuthorizer.Check`](external_link) behaviour. Generally, you won't be passing `{module, opts}`, but will use one of the provided functions that return that, like `always()` or `actor_attribute_matches_record(:foo, :bar)`. To make custom ones define a module that implements the [`AshPolicyAuthorizer.Check`](external_link) behaviour, put a convenience function in that module that returns {module, opts}, and import that into your resource. 
    
        defmodule MyResource do
    use Ash.Resource, authorizers: [AshPolicyAuthorizer.Authorizer]  
    import MyCustomCheck  
    policies do
    ...
    policy do
      authorize_if my_custom_check(:foo)
    end
    end
    end

  * `:name` \- A short name or description for the check, used when explaining authorization results




##### forbid_if

If the check is true, the request is forbidden, otherwise run remaining checks.

Introspection Target:

`AshPolicyAuthorizer.Policy.Check`

Examples:
    
    
    forbid_if not_logged_in()
    
    
    forbid_if actor_attribute_matches_record(:group, :blacklisted_groups)

  * `:check` \- Required. A check is a tuple of `{module, keyword}`.  
The module must implement the [`AshPolicyAuthorizer.Check`](external_link) behaviour. Generally, you won't be passing `{module, opts}`, but will use one of the provided functions that return that, like `always()` or `actor_attribute_matches_record(:foo, :bar)`. To make custom ones define a module that implements the [`AshPolicyAuthorizer.Check`](external_link) behaviour, put a convenience function in that module that returns {module, opts}, and import that into your resource. 
    
        defmodule MyResource do
    use Ash.Resource, authorizers: [AshPolicyAuthorizer.Authorizer]  
    import MyCustomCheck  
    policies do
    ...
    policy do
      authorize_if my_custom_check(:foo)
    end
    end
    end

  * `:name` \- A short name or description for the check, used when explaining authorization results




##### authorize_unless

If the check is false, the request is authorized, otherwise run remaining checks.

Introspection Target:

`AshPolicyAuthorizer.Policy.Check`

Examples:
    
    
    authorize_unless not_logged_in()
    
    
    authorize_unless actor_attribute_matches_record(:group, :blacklisted_groups)

  * `:check` \- Required. A check is a tuple of `{module, keyword}`.  
The module must implement the [`AshPolicyAuthorizer.Check`](external_link) behaviour. Generally, you won't be passing `{module, opts}`, but will use one of the provided functions that return that, like `always()` or `actor_attribute_matches_record(:foo, :bar)`. To make custom ones define a module that implements the [`AshPolicyAuthorizer.Check`](external_link) behaviour, put a convenience function in that module that returns {module, opts}, and import that into your resource. 
    
        defmodule MyResource do
    use Ash.Resource, authorizers: [AshPolicyAuthorizer.Authorizer]  
    import MyCustomCheck  
    policies do
    ...
    policy do
      authorize_if my_custom_check(:foo)
    end
    end
    end

  * `:name` \- A short name or description for the check, used when explaining authorization results




##### forbid_unless

If the check is true, the request is forbidden, otherwise run remaining checks.

Introspection Target:

`AshPolicyAuthorizer.Policy.Check`

Examples:
    
    
    forbid_unless logged_in()
    
    
    forbid_unless actor_attribute_matches_record(:group, :group)

  * `:check` \- Required. A check is a tuple of `{module, keyword}`.  
The module must implement the [`AshPolicyAuthorizer.Check`](external_link) behaviour. Generally, you won't be passing `{module, opts}`, but will use one of the provided functions that return that, like `always()` or `actor_attribute_matches_record(:foo, :bar)`. To make custom ones define a module that implements the [`AshPolicyAuthorizer.Check`](external_link) behaviour, put a convenience function in that module that returns {module, opts}, and import that into your resource. 
    
        defmodule MyResource do
    use Ash.Resource, authorizers: [AshPolicyAuthorizer.Authorizer]  
    import MyCustomCheck  
    policies do
    ...
    policy do
      authorize_if my_custom_check(:foo)
    end
    end
    end

  * `:name` \- A short name or description for the check, used when explaining authorization results




A resource can be given a set of policies, which are enforced on each call to a resource action.

For reads, policies can be configured to filter out data that the actor shouldn't see, as opposed to resulting in a forbidden error.

See the [policy writing guide](external_link) for practical examples.

Policies are solved/managed via a boolean satisfiability solver. To read more about boolean satisfiability, see this page: <https://en.wikipedia.org/wiki/Boolean_satisfiability_problem.> At the end of the day, however, it is not necessary to understand exactly how Ash takes your authorization requirements and determines if a request is allowed. The important thing to understand is that Ash may or may not run any/all of your authorization rules as they may be deemed unnecessary. As such, authorization checks should have no side effects. Ideally, the checks built-in to ash should cover the bulk of your needs.

#  Link to this section Summary 

##  Types

t()

#  Link to this section Types 

Link to this type

# t()

[ View Source ](external_link)

## Specs
    
    
    t() :: %AshPolicyAuthorizer.Authorizer{
      action: [term](external_link)(),
      actor: [term](external_link)(),
      api: [term](external_link)(),
      changeset: [term](external_link)(),
      check_scenarios: [term](external_link)(),
      data: [term](external_link)(),
      data_facts: [term](external_link)(),
      facts: [term](external_link)(),
      policies: [term](external_link)(),
      query: [term](external_link)(),
      real_scenarios: [term](external_link)(),
      resource: [term](external_link)(),
      scenarios: [term](external_link)(),
      verbose?: [term](external_link)()
    }
