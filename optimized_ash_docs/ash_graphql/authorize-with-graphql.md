# Authorize with GraphQL — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) Authorize with GraphQL
  - __ Policy Breakdowns
  - __ Field Policies

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) Authorize with GraphQL

AshGraphql uses three special keys in the `absinthe` context:

  * `:actor` \- the current actor, to be used for authorization/preparations/changes
  * `:tenant` \- a tenant when using [multitenancy](multitenancy.html).
  * `:ash_context` \- a map of arbitrary context to be passed into the changeset/query. Accessible via `changeset.context` and `query.context`



By default, `authorize?` in the domain is set to true. To disable authorization for a given domain in graphql, use:
    
    
    graphql do
      authorize? false
    end

If you are doing authorization, you'll need to provide an `actor`.

To set the `actor` for authorization, you'll need to add an `actor` key to the absinthe context. Typically, you would have a plug that fetches the current user and uses [`Ash.PlugHelpers.set_actor/2`](3.4.1/Ash.PlugHelpers.html#set_actor/2) to set the actor in the `conn` (likewise with [`Ash.PlugHelpers.set_tenant/2`](3.4.1/Ash.PlugHelpers.html#set_tenant/2)).

Just add [`AshGraphql.Plug`](external_link) somewhere _after_ that in the pipeline and the your GraphQL APIs will have the correct authorization.
    
    
    defmodule MyAppWeb.Router do
      pipeline :api do
        # ...
        plug :get_actor_from_token
        plug AshGraphql.Plug
      end
    
      scope "/" do
        forward "/gql", Absinthe.Plug, schema: YourSchema
    
        forward "/playground",
              Absinthe.Plug.GraphiQL,
              schema: YourSchema,
              interface: :playground
      end
    
      def get_actor_from_token(conn, _opts) do
         with ["" <> token] <- get_req_header(conn, "authorization"),
             {:ok, user, _claims} <- MyApp.Guardian.resource_from_token(token) do
          conn
          |> set_actor(user)
        else
        _ -> conn
        end
      end
    end

##  __ Policy Breakdowns

By default, unauthorized requests simply return `forbidden` in the message. If you prefer to show policy breakdowns in your GraphQL errors, you can set the config option:
    
    
    config :ash_graphql, :policies, show_policy_breakdowns?: true
    
    
    {
      "data": {
        "attendanceRecords": null
      },
      "errors": [
        {
          "code": "forbidden",
          "fields": [],
          "locations": [
            {
              "column": 3,
              "line": 2
            }
          ],
          "message": "MyApp.Authentication.User.read\n\n\n\n\nPolicy Breakdown\n  Policy | ⛔:\n    forbid unless: actor is active | ✓ | ⬇    \n    authorize if: actor is Executive | ✘ | ⬇",
          "path": ["attendanceRecords"],
          "short_message": "forbidden",
          "vars": {}
        }
      ]
    }

Be careful, as this can be an attack vector in some systems (i.e "here is exactly what you need to make true to do what you want to do").

##  __ Field Policies

Field policies in AshGraphql work by producing a `null` value for any forbidden field, as well as an error in the errors list.

> ###  __ nullability
> 
> Any fields with field policies on them should be nullable. If they are not nullable, the _parent_ object will also be `null` (and considered in an error state), because `null` is not a valid type for that field.

To make fields as nullable even if it is not nullable by its definition, use the `nullable_fields` option.
    
    
    graphql do
      type :post
    
      nullable_fields [:foo, :bar, :baz]
    end

[ ← Previous Page  Getting Started With GraphQL  ](external_link)

[ Next Page →  Handling Errors  ](external_link)
