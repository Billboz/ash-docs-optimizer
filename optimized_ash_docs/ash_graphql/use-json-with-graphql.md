# Use JSON with GraphQL — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) Use JSON with GraphQL

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) Use JSON with GraphQL

AshGraphql provides two JSON types that may be used. They are the same except for how the type is serialized in responses.

  * `:json_string` \- serializes the json to a string, e.g `"{\"foo\":1}"`
  * `:json` \- leaves the json as an object, e.g `{foo: 1}`



By default, `:json_string` is used. The configuration for this is (uncharacteristically) placed in application config, for example:
    
    
    config :ash_graphql, :json_type, :json

[ ← Previous Page  Use Enums with GraphQL  ](external_link)

[ Next Page →  Using Subscriptions  ](external_link)
