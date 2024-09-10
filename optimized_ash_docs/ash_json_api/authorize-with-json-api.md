# Authorize with AshJsonApi — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) Authorize with AshJsonApi
  - __ Setting the actor manually

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) Authorize with AshJsonApi

By default, `authorize?` in the domain is set to true. To disable authorization entirely for a given domain in graphql, use:
    
    
    json_api do
      authorize? false
    end

This is typically only necessary for testing purposes.

If you are doing authorization, you'll need to provide an `actor`.

##  __ Setting the actor manually

If you are using AshAuthentication, this will be done for you. To set the `actor` for authorization, you'll need to add an `actor` key to the `conn`. Typically, you would have a plug that fetches the current user and uses [`Ash.PlugHelpers.set_actor/2`](3.4.1/Ash.PlugHelpers.html#set_actor/2) to set the actor in the `conn` (likewise with [`Ash.PlugHelpers.set_tenant/2`](3.4.1/Ash.PlugHelpers.html#set_tenant/2)).
    
    
    defmodule MyAppWeb.Router do
      pipeline :api do
        # ...
        plug :get_actor_from_token
      end
    
      def get_actor_from_token(conn, _opts) do
         with ["" <> token] <- get_req_header(conn, "authorization"),
             {:ok, user, _claims} <- MyApp.Guardian.resource_from_token(token) do
          conn
          |> Ash.PlugHelpers.set_actor(user)
        else
        _ -> conn
        end
      end
    end

[ ← Previous Page  Upgrading to AshJsonApi to 1.0  ](external_link)

[ Next Page →  Authenticating with AshJsonApi  ](external_link)
