# Writing Policies — ash_policy_authorizer v0.16.5

Project: ash_policy_authorizer v0.16.5

## Table of Contents

- Writing Policies
  - Important!
  - Guide
    - The Simplest Policy
    - A realistic policy
    - Access Type
    - Custom checks
    - More

[ ash_policy_authorizer ](external_link) **v0.16.5**

[ ![ash_policy_authorizer](external_link) ](https://github.com/ash-project/ash_policy_authorizer)

  * GUIDES
  * Modules






# Writing Policies

Policies determine what actions on a resource are permitted for a given actor.

You can specify an actor using the code api via the `actor` option, like so:
    
    
    MyApp.MyApi.read(MyResource, actor: current_user)

##  Important! 

Before we jump into the guide, it is critical to understand that the policy code doesn't actually _do_ anything in the classic sense. It simply builds up a set of policies that are stored for use later. The checker that reads those policies and authorizes requests may run all, some of, or none of your checks, depending on the details of the request being authorized.

##  Guide 

To see what checks are built-in, see [`AshPolicyAuthorizer.Check.BuiltInChecks`](external_link)

###  The Simplest Policy 

Lets start with the simplest policy set:
    
    
    policies do
      policy always() do
        authorize_if always()
      end
    end

Here, we have a single policy. The first argument to `policy` is the "condition". If the condition is true, then the policy appolies to the request. If a given policy applies, then one of the checks inside the policy must authorize that policy. _Every policy that applies_ to a given request must each be authorized for a request to be authorized.

Within this policy we have a single check, declared with `authorize_if`. Checks logically apply from top to bottom, based on their check type. In this case, we'd read the policy as "this policy always applies, and authorizes always".

There are four check types, all of which do what they sound like they do:

  * `authorize_if` \- if the check is true, the policy is authorized.
  * `authorize_unless` \- if the check is false, the policy is authorized.
  * `forbid_if` \- if the check is true, the policy is forbidden.
  * `forbid_unless` \- if the check is false, the policy is forbidden.



In each case, if the policy is not authorized or forbidden, the flow moves to the next check.

###  A realistic policy 

In this example, we use some of the provided built in checks.
    
    
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

###  Access Type 

The default access type is `:filter`. In most cases this will be all you need. In the example above, if a user made a request for all instances of the resource, it wouldn't actually return a forbidden error. It simply attaches the appropriate filter to fetch data that the user can see. If the actor attribute `active` was `false`, then the request _would_ be forbidden (because there is no data for which they can pass this policy). However, if `active` is `true`, the authorizer would attach the following filter to the request:
    
    
    [or: [[public: true], [owner: actor(:_primary_key)]]]

To understand what `actor(:_primary_key)` means, see the Filter Templates section in [`Ash.Filter`](1.50.14/Ash.Filter.html)

To change this behavior, use `access_type :strict`. With `access_type :strict` you will force the request to fail unless a filter was provided to yield the appropriate data. In this case, any filter that is a subset of the authorization filter would work. For example: `[public: true]`, or `[owner: [id: current_user.id]]`.

Additionally, some checks have more expensive components that can't be checked before the request is run. To enable those, use the `access_type :runtime`. This is stil relatively experimental, but this will attempt to run as much of your checks in a strict fashion, and attach as many things as filters as possible, before running the expensive portion of the checks (defined on the check as [`AshPolicyAuthorizer.Check.check/4`](external_link))

###  Custom checks 

See [`AshPolicyAuthorizer.Check`](external_link) for more inforamtion on writing custom checks, which you will likely need at some point when the built in checks are insufficient

###  More 

More will need to be written, as questions arise.

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Policy Breakdowns  ](external_link)
