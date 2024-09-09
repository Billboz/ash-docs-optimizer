# Ash.Domain.Info — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Domain.Info (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- allow(domain)
- allow_unregistered?(domain)
- authorize(domain)
- depend_on_resources(domain)
- description(domain)
- find_manage_relationships_with_identity_not_configured(otp_app)
- related_domain(subject, relationship, default \\\ nil)
- require_actor?(domain)
- resource(domain, resource)
- resource_references(domain)
- resources(domain)
- short_name(domain)
- span_name(domain, resource, action)
- telemetry_event_name(domain, name)
- timeout(domain)
- trace_name(domain)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Domain.Info (ash v3.4.8)

Introspection tools for Ash.Domain

#  __ Summary

##  Functions

allow(domain)

The allow MFA for a domain

allow_unregistered?(domain)

Whether or not the domain allows unregistered resources to be used with it

authorize(domain)

When authorization should happen for a given domain

depend_on_resources(domain) deprecated

Gets the resources of a domain module. Can be used at compile time.

description(domain)

The description of the domain

find_manage_relationships_with_identity_not_configured(otp_app)

related_domain(subject, relationship, default \\\ nil)

Determine what domain to use when interacting with a related resource.

require_actor?(domain)

Whether or not the actor is always required for a domain

resource(domain, resource)

Returns `{:ok, resource}` if the resource can be used by the domain, or `{:error, error}`.

resource_references(domain)

Gets the resource references of a domain module. DO NOT USE AT COMPILE TIME.

resources(domain)

Gets the resources of a domain module.

short_name(domain)

The short name for a domain

span_name(domain, resource, action)

The span_name for a domain and resource combination

telemetry_event_name(domain, name)

Names a telemetry event for a given domain/resource combo

timeout(domain)

The execution timeout for a domain

trace_name(domain)

The trace name for a domain

#  __ Functions

__ Link to this function

# allow(domain)

[ __ View Source ](external_link)
    
    
    @spec allow([Ash.Domain.t](external_link)() | [Spark.Dsl.t](external_link)()) :: [mfa](external_link)() | nil

The allow MFA for a domain

__ Link to this function

# allow_unregistered?(domain)

[ __ View Source ](external_link)
    
    
    @spec allow_unregistered?([Ash.Domain.t](external_link)() | [Spark.Dsl.t](external_link)()) :: [atom](external_link)() | nil

Whether or not the domain allows unregistered resources to be used with it

__ Link to this function

# authorize(domain)

[ __ View Source ](external_link)
    
    
    @spec authorize([Ash.Domain.t](external_link)()) :: :always | :by_default | :when_requested

When authorization should happen for a given domain

__ Link to this macro

# depend_on_resources(domain)

[ __ View Source ](external_link) (macro)

This macro is deprecated. Use `Ash.Domain.Info.resources/1` instead. This macro is no longer necessary. 
    
    
    @spec depend_on_resources([Macro.t](external_link)()) :: [Macro.t](external_link)()

Gets the resources of a domain module. Can be used at compile time.

Liberal use of this can greatly increase compile times, or even cause compiler deadlocks. Use with care.

__ Link to this function

# description(domain)

[ __ View Source ](external_link)
    
    
    @spec description([Spark.Dsl.t](external_link)() | [Ash.Domain.t](external_link)()) :: [String.t](external_link)() | nil

The description of the domain

__ Link to this function

# find_manage_relationships_with_identity_not_configured(otp_app)

[ __ View Source ](external_link)

__ Link to this function

# related_domain(subject, relationship, default \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec related_domain(
      [Ash.Resource.t](external_link)() | [Ash.Query.t](external_link)() | [Ash.Changeset.t](external_link)() | [Ash.ActionInput.t](external_link)(),
      [atom](external_link)()
      | [Ash.Resource.Relationships.relationship](external_link)()
      | [[atom](external_link)() | [Ash.Resource.Relationships.relationship](external_link)()],
      [Ash.Domain.t](external_link)() | nil
    ) :: [Ash.Domain.t](external_link)()

Determine what domain to use when interacting with a related resource.

We choose the first domain found in the following order:

  * `relationship.domain`, i.e an explicitly configured domain for a relationship
  * `resource.domain`, i.e. the domain the resource declares
  * `subject.domain`, i.e. the domain of the query, changeset or action input (if it has one)
  * `default`, the default domain provided as the third argument



__ Link to this function

# require_actor?(domain)

[ __ View Source ](external_link)
    
    
    @spec require_actor?([Ash.Domain.t](external_link)()) :: [boolean](external_link)()

Whether or not the actor is always required for a domain

__ Link to this function

# resource(domain, resource)

[ __ View Source ](external_link)
    
    
    @spec resource([Ash.Domain.t](external_link)() | [Spark.Dsl.t](external_link)(), [Ash.Resource.t](external_link)()) ::
      {:ok, [Ash.Resource.t](external_link)()} | {:error, [Ash.Error.t](external_link)()}

Returns `{:ok, resource}` if the resource can be used by the domain, or `{:error, error}`.

__ Link to this function

# resource_references(domain)

[ __ View Source ](external_link)
    
    
    @spec resource_references([Spark.Dsl.t](external_link)() | [Ash.Domain.t](external_link)()) :: [
      [Ash.Domain.Dsl.ResourceReference.t](external_link)()
    ]

Gets the resource references of a domain module. DO NOT USE AT COMPILE TIME.

If you need the resource list at compile time, use `depend_on_resources/1`

__ Link to this function

# resources(domain)

[ __ View Source ](external_link)
    
    
    @spec resources([Spark.Dsl.t](external_link)() | [Ash.Domain.t](external_link)()) :: [[Ash.Resource.t](external_link)()]

Gets the resources of a domain module.

__ Link to this function

# short_name(domain)

[ __ View Source ](external_link)
    
    
    @spec short_name([Ash.Domain.t](external_link)()) :: [atom](external_link)()

The short name for a domain

__ Link to this function

# span_name(domain, resource, action)

[ __ View Source ](external_link)
    
    
    @spec span_name([Ash.Domain.t](external_link)(), [Ash.Resource.t](external_link)(), action :: [atom](external_link)() | [binary](external_link)()) ::
      [String.t](external_link)()

The span_name for a domain and resource combination

__ Link to this function

# telemetry_event_name(domain, name)

[ __ View Source ](external_link)
    
    
    @spec telemetry_event_name([Ash.Domain.t](external_link)(), [atom](external_link)() | [[atom](external_link)()]) :: [[atom](external_link)()]

Names a telemetry event for a given domain/resource combo

__ Link to this function

# timeout(domain)

[ __ View Source ](external_link)
    
    
    @spec timeout([Ash.Domain.t](external_link)()) :: nil | :infinity | [integer](external_link)()

The execution timeout for a domain

__ Link to this function

# trace_name(domain)

[ __ View Source ](external_link)
    
    
    @spec trace_name([Ash.Domain.t](external_link)()) :: [String.t](external_link)()

The trace name for a domain
