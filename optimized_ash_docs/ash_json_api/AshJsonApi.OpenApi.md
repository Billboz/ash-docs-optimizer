# AshJsonApi.OpenApi — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) AshJsonApi.OpenApi (ash_json_api v1.4.7)
  - __ Example
- __ Summary
  - Functions
- __ Functions
- define_filter?(domains, resource)
- paths(domains, all_domains, opts)
- raw_filter_type(attribute_or_aggregate, resource)
- resource_filter_fields_fields_only(resource)
- responses()
- schemas(domains)
- spec(opts \\\ [], conn \\\ nil)
- tags(domains)
- tags(domain, domains)
- write_attributes(resource, arguments, action, route, format)

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) AshJsonApi.OpenApi (ash_json_api v1.4.7)

Provides functions for generating schemas and operations for OpenApi definitions.

Add `open_api_spex` to your `mix.exs` deps for the required struct definitions.

##  __ Example
    
    
    defmodule MyApp.OpenApi do
      alias OpenApiSpex.{OpenApi, Info, Server, Components}
    
      def spec do
        %OpenApi{
          info: %Info{
            title: "MyApp JSON API",
            version: "1.1"
          },
          servers: [
            Server.from_endpoint(MyAppWeb.Endpoint)
          ],
          paths: AshJsonApi.OpenApi.paths(MyApp.Api),
          tags: AshJsonApi.OpenApi.tags(MyApp.Api),
          components: %Components{
            responses: AshJsonApi.OpenApi.responses(),
            schemas: AshJsonApi.OpenApi.schemas(MyApp.Api)
          }
        }
      end
    end

#  __ Summary

##  Functions

define_filter?(domains, resource)

paths(domains, all_domains, opts)

Paths (routes) from the domain.

raw_filter_type(attribute_or_aggregate, resource)

resource_filter_fields_fields_only(resource)

responses()

Common responses to include in the API Spec.

schemas(domains)

Resource schemas to include in the API spec.

spec(opts \\\ [], conn \\\ nil)

tags(domains)

Tags based on resource names to include in the API spec

tags(domain, domains)

write_attributes(resource, arguments, action, route, format)

#  __ Functions

__ Link to this function

# define_filter?(domains, resource)

[ __ View Source ](external_link)

__ Link to this function

# paths(domains, all_domains, opts)

[ __ View Source ](external_link)
    
    
    @spec paths(
      domain :: [module](external_link)() | [[module](external_link)()],
      [module](external_link)() | [[module](external_link)()],
      opts :: [Keyword.t](external_link)()
    ) ::
      [OpenApiSpex.Paths.t](external_link)()

Paths (routes) from the domain.

__ Link to this function

# raw_filter_type(attribute_or_aggregate, resource)

[ __ View Source ](external_link)

__ Link to this function

# resource_filter_fields_fields_only(resource)

[ __ View Source ](external_link)

__ Link to this function

# responses()

[ __ View Source ](external_link)
    
    
    @spec responses() :: [OpenApiSpex.Components.responses_map](external_link)()

Common responses to include in the API Spec.

__ Link to this function

# schemas(domains)

[ __ View Source ](external_link)
    
    
    @spec schemas(domain :: [module](external_link)() | [[module](external_link)()]) :: %{
      required([String.t](external_link)()) => [OpenApiSpex.Schema.t](external_link)()
    }

Resource schemas to include in the API spec.

__ Link to this function

# spec(opts \\\ [], conn \\\ nil)

[ __ View Source ](external_link)

__ Link to this function

# tags(domains)

[ __ View Source ](external_link)
    
    
    @spec tags(domain :: [module](external_link)() | [[module](external_link)()]) :: [[OpenApiSpex.Tag.t](external_link)()]

Tags based on resource names to include in the API spec

__ Link to this function

# tags(domain, domains)

[ __ View Source ](external_link)

__ Link to this function

# write_attributes(resource, arguments, action, route, format)

[ __ View Source ](external_link)
    
    
    @spec write_attributes(
      resource :: [module](external_link)(),
      [[Ash.Resource.Actions.Argument.t](3.4.1/Ash.Resource.Actions.Argument.html#t:t/0)()],
      action :: [term](external_link)(),
      route :: [term](external_link)(),
      format :: content_type_format()
    ) :: %{required([atom](external_link)()) => [OpenApiSpex.Schema.t](external_link)()}
