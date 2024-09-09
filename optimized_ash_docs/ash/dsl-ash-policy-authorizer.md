# DSL: Ash.Policy.Authorizer — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) DSL: Ash.Policy.Authorizer
  - __ policies
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ policies.policy
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ policies.policy.authorize_if
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ policies.policy.forbid_if
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ policies.policy.authorize_unless
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ policies.policy.forbid_unless
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection
  - __ policies.policy_group
    - __ Nested DSLs
    - __ Arguments
  - __ policies.policy_group.policy
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ policies.policy_group.policy.authorize_if
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ policies.policy_group.policy.forbid_if
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ policies.policy_group.policy.authorize_unless
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ policies.policy_group.policy.forbid_unless
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection
    - __ Introspection
  - __ policies.bypass
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ policies.bypass.authorize_if
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ policies.bypass.forbid_if
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ policies.bypass.authorize_unless
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ policies.bypass.forbid_unless
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection
  - __ field_policies
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ field_policies.field_policy_bypass
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ field_policies.field_policy_bypass.authorize_if
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ field_policies.field_policy_bypass.forbid_if
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ field_policies.field_policy_bypass.authorize_unless
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ field_policies.field_policy_bypass.forbid_unless
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection
  - __ field_policies.field_policy
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ field_policies.field_policy.authorize_if
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ field_policies.field_policy.forbid_if
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ field_policies.field_policy.authorize_unless
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ field_policies.field_policy.forbid_unless
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) DSL: Ash.Policy.Authorizer

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

##  __ policies

A section for declaring authorization policies.

Each policy that applies must pass independently in order for the request to be authorized.

See the [policies guide](external_link) for more.

###  __ Nested DSLs

  * policy
    * authorize_if
    * forbid_if
    * authorize_unless
    * forbid_unless
  * policy_group
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



###  __ Examples
    
    
    policies do
      # Anything you can use in a condition, you can use in a check, and vice-versa
      # This policy applies if the actor is a super_user
      # Additionally, this policy is declared as a `bypass`. That means that this check is allowed to fail without
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
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`default_access_type`| `:strict | :filter | :runtime`| `:filter`| The default access type of policies for this resource.  
  
##  __ policies.policy
    
    
    policy condition \\ nil

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

See the [policies guide](external_link) for more.

###  __ Nested DSLs

  * authorize_if
  * forbid_if
  * authorize_unless
  * forbid_unless



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`condition`| `any`| | A check or list of checks that must be true in order for this policy to apply.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | A description for the policy, used when explaining authorization results  
`access_type`| `:strict | :filter | :runtime`| | Determines how the policy is applied. See the guide for more.  
  
##  __ policies.policy.authorize_if
    
    
    authorize_if check

If the check is true, the request is authorized, otherwise run remaining checks.

###  __ Examples
    
    
    authorize_if logged_in()
    
    
    authorize_if actor_attribute_matches_record(:group, :group)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ policies.policy.forbid_if
    
    
    forbid_if check

If the check is true, the request is forbidden, otherwise run remaining checks.

###  __ Examples
    
    
    forbid_if not_logged_in()
    
    
    forbid_if actor_attribute_matches_record(:group, :blacklisted_groups)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ policies.policy.authorize_unless
    
    
    authorize_unless check

If the check is false, the request is authorized, otherwise run remaining checks.

###  __ Examples
    
    
    authorize_unless not_logged_in()
    
    
    authorize_unless actor_attribute_matches_record(:group, :blacklisted_groups)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ policies.policy.forbid_unless
    
    
    forbid_unless check

If the check is true, the request is forbidden, otherwise run remaining checks.

###  __ Examples
    
    
    forbid_unless logged_in()
    
    
    forbid_unless actor_attribute_matches_record(:group, :group)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

###  __ Introspection

Target: [`Ash.Policy.Policy`](external_link)

##  __ policies.policy_group
    
    
    policy_group condition

Groups a set of policies together by some condition.

If the condition on the policy group does not apply, then none of the policies within it apply.

This is primarily syntactic sugar. At compile time, the conditions from the policy group are added to each policy it contains, and the list is flattened out. This exists primarily to make it easier to reason about and write policies.

The following are equivalent:
    
    
    policy_group condition1 do
    policy condition2 do
    ...
    end
    
    policy condition3 do
    ...
    end
    end

and
    
    
    policy [condition1, condition2] do
    ...
    end
    
    policy [condition1, condition3] do
    ...
    end

###  __ Nested DSLs

  * policy
    * authorize_if
    * forbid_if
    * authorize_unless
    * forbid_unless



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`condition`| `any`| | A check or list of checks that must be true in order for this policy to apply.  
  
##  __ policies.policy_group.policy
    
    
    policy condition \\ nil

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

See the [policies guide](external_link) for more.

###  __ Nested DSLs

  * authorize_if
  * forbid_if
  * authorize_unless
  * forbid_unless



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`condition`| `any`| | A check or list of checks that must be true in order for this policy to apply.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | A description for the policy, used when explaining authorization results  
`access_type`| `:strict | :filter | :runtime`| | Determines how the policy is applied. See the guide for more.  
  
##  __ policies.policy_group.policy.authorize_if
    
    
    authorize_if check

If the check is true, the request is authorized, otherwise run remaining checks.

###  __ Examples
    
    
    authorize_if logged_in()
    
    
    authorize_if actor_attribute_matches_record(:group, :group)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ policies.policy_group.policy.forbid_if
    
    
    forbid_if check

If the check is true, the request is forbidden, otherwise run remaining checks.

###  __ Examples
    
    
    forbid_if not_logged_in()
    
    
    forbid_if actor_attribute_matches_record(:group, :blacklisted_groups)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ policies.policy_group.policy.authorize_unless
    
    
    authorize_unless check

If the check is false, the request is authorized, otherwise run remaining checks.

###  __ Examples
    
    
    authorize_unless not_logged_in()
    
    
    authorize_unless actor_attribute_matches_record(:group, :blacklisted_groups)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ policies.policy_group.policy.forbid_unless
    
    
    forbid_unless check

If the check is true, the request is forbidden, otherwise run remaining checks.

###  __ Examples
    
    
    forbid_unless logged_in()
    
    
    forbid_unless actor_attribute_matches_record(:group, :group)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

###  __ Introspection

Target: [`Ash.Policy.Policy`](external_link)

###  __ Introspection

Target: [`Ash.Policy.PolicyGroup`](external_link)

##  __ policies.bypass
    
    
    bypass condition \\ nil

A policy that, if passed, will skip all following policies. If failed, authorization moves on to the next policy

###  __ Nested DSLs

  * authorize_if
  * forbid_if
  * authorize_unless
  * forbid_unless



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`condition`| `any`| | A check or list of checks that must be true in order for this policy to apply.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | A description for the policy, used when explaining authorization results  
`access_type`| `:strict | :filter | :runtime`| | Determines how the policy is applied. See the guide for more.  
  
##  __ policies.bypass.authorize_if
    
    
    authorize_if check

If the check is true, the request is authorized, otherwise run remaining checks.

###  __ Examples
    
    
    authorize_if logged_in()
    
    
    authorize_if actor_attribute_matches_record(:group, :group)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ policies.bypass.forbid_if
    
    
    forbid_if check

If the check is true, the request is forbidden, otherwise run remaining checks.

###  __ Examples
    
    
    forbid_if not_logged_in()
    
    
    forbid_if actor_attribute_matches_record(:group, :blacklisted_groups)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ policies.bypass.authorize_unless
    
    
    authorize_unless check

If the check is false, the request is authorized, otherwise run remaining checks.

###  __ Examples
    
    
    authorize_unless not_logged_in()
    
    
    authorize_unless actor_attribute_matches_record(:group, :blacklisted_groups)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ policies.bypass.forbid_unless
    
    
    forbid_unless check

If the check is true, the request is forbidden, otherwise run remaining checks.

###  __ Examples
    
    
    forbid_unless logged_in()
    
    
    forbid_unless actor_attribute_matches_record(:group, :group)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

###  __ Introspection

Target: [`Ash.Policy.Policy`](external_link)

##  __ field_policies

Authorize access to specific fields via policies scoped to fields.

If _any_ field policies exist then _all_ fields must be authorized by a field policy. If you want a "deny-list" style, then you can add policies for specific fields and add a catch-all policy using the special field name `:*`. All policies that apply to a field must be authorized.

The only exception to the above behavior is primary keys, which can always be read by everyone.

Additionally, keep in mind that adding [`Ash.Policy.Authorizer`](external_link) will require that all actions pass policies. If you want to just add field policies, you will need to add a policy that allows all access explicitly, i.e
    
    
    policies do
    policy always() do
    authorize_if always()
    end
    end

Using expressions: unlike in regular policies, expressions in field policies cannot refer to related entities currently. Instead, you will need to create aggregates or expression calculations that return the results you want to reference.

In results, forbidden fields will be replaced with a special value: `%Ash.ForbiddenField{}`.

When these fields are referred to in filters, they will be replaced with an expression that evaluates to `nil`. To support this behavior, only expression/filter checks are allowed in field policies.

###  __ Nested DSLs

  * field_policy_bypass
    * authorize_if
    * forbid_if
    * authorize_unless
    * forbid_unless
  * field_policy
    * authorize_if
    * forbid_if
    * authorize_unless
    * forbid_unless



###  __ Examples
    
    
    field_policies do
      field_policy :admin_only_field do
        authorize_if actor_attribute_equals(:admin, true)
      end
    end
    
    
    
    # Example of denylist style
    field_policies do
      field_policy [:sensitive, :fields] do
        authorize_if actor_attribute_equals(:admin, true)
      end
    
      field_policy :* do
        authorize_if always()
      end
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`private_fields`| `:show | :hide | :include`| `:show`| How private fields should be handeled by field policies in internal functions. See the [Policies guide](external_link) for more.  
  
##  __ field_policies.field_policy_bypass
    
    
    field_policy_bypass fields, condition \\ nil

A field policy that, if passed, will skip all following field policies for that field or fields. If failed, field authorization moves on to the next policy

###  __ Nested DSLs

  * authorize_if
  * forbid_if
  * authorize_unless
  * forbid_unless



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`fields`| `atom | list(atom)`| | The field or fields that the policy applies to.  
`condition`| `any`| | A check or list of checks that must be true in order for this field policy to apply. If not specified, it always applies.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | A description for the policy, used when explaining authorization results  
  
##  __ field_policies.field_policy_bypass.authorize_if
    
    
    authorize_if check

If the check is true, the request is authorized, otherwise run remaining checks.

###  __ Examples
    
    
    authorize_if logged_in()
    
    
    authorize_if actor_attribute_matches_record(:group, :group)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ field_policies.field_policy_bypass.forbid_if
    
    
    forbid_if check

If the check is true, the request is forbidden, otherwise run remaining checks.

###  __ Examples
    
    
    forbid_if not_logged_in()
    
    
    forbid_if actor_attribute_matches_record(:group, :blacklisted_groups)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ field_policies.field_policy_bypass.authorize_unless
    
    
    authorize_unless check

If the check is false, the request is authorized, otherwise run remaining checks.

###  __ Examples
    
    
    authorize_unless not_logged_in()
    
    
    authorize_unless actor_attribute_matches_record(:group, :blacklisted_groups)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ field_policies.field_policy_bypass.forbid_unless
    
    
    forbid_unless check

If the check is true, the request is forbidden, otherwise run remaining checks.

###  __ Examples
    
    
    forbid_unless logged_in()
    
    
    forbid_unless actor_attribute_matches_record(:group, :group)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

###  __ Introspection

Target: [`Ash.Policy.FieldPolicy`](external_link)

##  __ field_policies.field_policy
    
    
    field_policy fields, condition \\ nil

Field policies behave similarly to policies. See `[Ash.Policy.Authorizer.field_policies](external_link)` for more.

###  __ Nested DSLs

  * authorize_if
  * forbid_if
  * authorize_unless
  * forbid_unless



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`fields`| `atom | list(atom)`| | The field or fields that the policy applies to.  
`condition`| `any`| | A check or list of checks that must be true in order for this field policy to apply. If not specified, it always applies.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | A description for the policy, used when explaining authorization results  
  
##  __ field_policies.field_policy.authorize_if
    
    
    authorize_if check

If the check is true, the request is authorized, otherwise run remaining checks.

###  __ Examples
    
    
    authorize_if logged_in()
    
    
    authorize_if actor_attribute_matches_record(:group, :group)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ field_policies.field_policy.forbid_if
    
    
    forbid_if check

If the check is true, the request is forbidden, otherwise run remaining checks.

###  __ Examples
    
    
    forbid_if not_logged_in()
    
    
    forbid_if actor_attribute_matches_record(:group, :blacklisted_groups)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ field_policies.field_policy.authorize_unless
    
    
    authorize_unless check

If the check is false, the request is authorized, otherwise run remaining checks.

###  __ Examples
    
    
    authorize_unless not_logged_in()
    
    
    authorize_unless actor_attribute_matches_record(:group, :blacklisted_groups)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

##  __ field_policies.field_policy.forbid_unless
    
    
    forbid_unless check

If the check is true, the request is forbidden, otherwise run remaining checks.

###  __ Examples
    
    
    forbid_unless logged_in()
    
    
    forbid_unless actor_attribute_matches_record(:group, :group)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`check`| `module | any`| | The check to run. See [`Ash.Policy.Check`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`name`| `String.t`| | A short name or description for the check, used when explaining authorization results  
  
###  __ Introspection

Target: [`Ash.Policy.Check`](external_link)

###  __ Introspection

Target: [`Ash.Policy.FieldPolicy`](external_link)

[ ← Previous Page  DSL: Ash.Notifier.PubSub  ](external_link)

[ Next Page →  DSL: Ash.DataLayer.Ets  ](external_link)
