# Monitoring — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) Monitoring
  - __ Traces
  - __ Telemetry

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) Monitoring

Please read [the Ash monitoring guide](monitoring.html) for more information. Here we simply cover the additional traces & telemetry events that we publish from this extension.

A tracer can be configured in the domain. It will fallback to the global tracer configuration `config :ash, :tracer, Tracer`
    
    
    graphql do
      trace MyApp.Tracer
    end

##  __ Traces

Each graphql resolver, and batch resolution of the underlying data loader, will produce a span with an appropriate name. We also set a `source: :graphql` metadata if you want to filter them out or annotate them in some way.

##  __ Telemetry

AshGraphql emits the following telemetry events, suffixed with `:start` and `:stop`. Start events have `system_time` measurements, and stop events have `system_time` and `duration` measurements. All times will be in the native time unit.

  * `[:ash, <domain_short_name>, :gql_mutation]` \- The execution of a mutation. Use `resource_short_name` and `mutation` (or `action`) metadata to break down measurements.

  * `[:ash, <domain_short_name>, :gql_query]` \- The execution of a mutation. Use `resource_short_name` and `query` (or `action`) metadata to break down measurements.

  * `[:ash, <domain_short_name>, :gql_relationship]` \- The resolution of a relationship. Use `resource_short_name` and `relationship` metadata to break down measurements.

  * `[:ash, <domain_short_name>, :gql_calculation]` \- The resolution of a calculation. Use `resource_short_name` and `calculation` metadata to break down measurements.

  * `[:ash, <domain_short_name>, :gql_relationship_batch]` \- The resolution of a batch of relationships by the data loader. Use `resource_short_name` and `relationship` metadata to break down measurements.

  * `[:ash, <domain_short_name>, :gql_calculation_batch]` \- The resolution of a batch of calculations by the data loader. Use `resource_short_name` and `calculation` metadata to break down measurements.




[ ← Previous Page  Use Maps with GraphQL  ](external_link)

[ Next Page →  GraphQL Query Generation  ](external_link)
