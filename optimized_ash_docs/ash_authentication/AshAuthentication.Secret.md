# AshAuthentication.Secret — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Secret behaviour (ash_authentication v4.0.4)
  - __ Example
  - __ Secret name
- __ Summary
  - Callbacks
- __ Callbacks
- secret_for(secret_name, t, keyword)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Secret behaviour (ash_authentication v4.0.4)

A module to implement retrieving of secrets.

Allows you to implement secrets access via your method or choice at runtime.

##  __ Example
    
    
    defmodule MyApp.GetSecret do
      use AshAuthentication.Secret
    
      def secret_for([:authentication, :strategies, :oauth2, :client_id], MyApp.User, _opts), do: Application.fetch_env(:my_app, :oauth_client_id)
      def secret_for([:authentication, :strategies, :oauth2, :client_secret], MyApp.User, _opts), do: Application.fetch_env(:my_app, :oauth_client_secret)
    end
    
    defmodule MyApp.Accounts.User do
      use Ash.Resource,
        extensions: [AshAuthentication],
        domain: MyApp.Accounts
    
      authentication do
        strategies do
          oauth2 do
            client_id MyApp.GetSecret
            client_secret MyApp.GetSecret
          end
        end
      end
    end

You can also implement it directly as a function:
    
    
    defmodule MyApp.User do
       use Ash.Resource,
        extensions: [AshAuthentication],
        domain: MyApp.Accounts
    
      authentication do
        strategies do
          oauth2 do
            client_id fn _secret, _resource ->
              Application.fetch_env(:my_app, :oauth_client_id)
            end
          end
        end
      end
    end

##  __ Secret name

Because you may wish to reuse this module for a number of different providers and resources, the first argument passed to the callback is the "secret name", it contains the "path" to the option being set. The path is made up of a list containing the DSL path to the secret.

#  __ Summary

##  Callbacks

secret_for(secret_name, t, keyword)

Secret retrieval callback.

#  __ Callbacks

__ Link to this callback

# secret_for(secret_name, t, keyword)

[ __ View Source ](external_link)
    
    
    @callback secret_for(secret_name :: [[atom](external_link)()], [Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), [keyword](external_link)()) ::
      {:ok, [String.t](external_link)()} | :error

Secret retrieval callback.

This function will be called with the "secret name", see the module documentation for more info.
