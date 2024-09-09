# Get started with Ash Authentication — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) Get started with Ash Authentication
  - __ Add to your application's dependencies
  - __ Choosing your extensions, strategies and add-ons
    - __ [`AshAuthentication`](external_link)
    - __ [`AshAuthentication.Strategy.Password`](external_link)
    - __ [`AshAuthentication.Strategy.OAuth2`](external_link)
    - __ [`AshAuthentication.AddOn.Confirmation`](external_link)
    - __ [`AshAuthentication.TokenResource`](external_link)
    - __ [`AshAuthentication.UserIdentity`](external_link)
  - __ Example
  - __ Token generation
  - __ Plugs and routing
  - __ Supervisor
    - __ Example
  - __ Summary

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) Get started with Ash Authentication

If you haven't already, read [the getting started guide for Ash](external_link). This assumes that you already have resources set up, and only gives you the steps to add authentication to your resources and APIs.

##  __ Add to your application's dependencies

Bring in the `ash_authentication` dependency:
    
    
    # mix.exs
    
    defp deps()
      [
        # ...
        {:ash_authentication, "~> 4.0"}
      ]
    end

And add `ash_authentication` to your `.formatter.exs`:
    
    
    # .formatter.exs
    [
      import_deps: [..., :ash_authentication]
    ]

##  __ Choosing your extensions, strategies and add-ons

Ash Authentication supports many different features, each configured separately.

###  __ [`AshAuthentication`](external_link)

This is the core extension, and is required. It provides main DSL for working with authentication and related features and should be added to your "user" resource.

The [`AshAuthentication`](external_link) extension provides configuration and sensible defaults for settings which relate to authentication, regardless of authentication mechanism.

All strategy and add-on configuration is nested inside this DSL block.

It will define a `get_by_subject_name` read action on your resource, which is used when converting tokens or session information into a resource record.

###  __ [`AshAuthentication.Strategy.Password`](external_link)

This authentication strategy provides registration and sign-in for users using a local identifier (eg `username`, `email` or `phone_number`) and a password. It will define register and sign-in actions on your "user" resource. You are welcome to define either or both of these actions yourself if you wish to customise them - if you do so then the extension will do its best to validate that all required configuration is present.

The [`AshAuthentication.Strategy.Password`](external_link) DSL allows you to override any of the default values.

###  __ [`AshAuthentication.Strategy.OAuth2`](external_link)

This authentication strategy provides registration and sign-in for users using a remote [OAuth 2.0](external_link) server as the source of truth. You will be required to provide either a "register" or a "sign-in" action depending on your configuration, which the strategy will attempt to validate for common misconfigurations.

###  __ [`AshAuthentication.AddOn.Confirmation`](external_link)

This add-on allows you to confirm changes to a user record by generating and sending them a confirmation token which they must submit before allowing the change to take place.

###  __ [`AshAuthentication.TokenResource`](external_link)

This extension allows you to easily create a resource which will store information about tokens that can't be encoded into the tokens themselves. A resource with this extension must be present if token generation is enabled.

###  __ [`AshAuthentication.UserIdentity`](external_link)

If you plan to support multiple different strategies at once (eg giving your users the choice of more than one authentication provider, or signing them into multiple services simultaneously) then you will want to create a resource with this extension enabled. It is used to keep track of the links between your local user records and their many remote identities.

##  __ Example

Let's create an `Accounts` domain in our application which provides a `User` resource and a `Token` resource.

First, let's define our domain:
    
    
    # lib/my_app/accounts.ex
    
    defmodule MyApp.Accounts do
      use Ash.Domain
    
      resources do
        resource MyApp.Accounts.User
        resource MyApp.Accounts.Token
      end
    end

Be sure to add it to the `ash_domains` config in your `config.exs`
    
    
    # in config/config.exs
    config :my_app, ash_domains: [..., MyApp.Accounts]

Next, let's define our `Token` resource. This resource is needed if token generation is enabled for any resources in your application. Most of the contents are auto-generated, so we just need to provide the data layer configuration and the API to use.

But before we do, we need to install a postgres extension.
    
    
    # lib/my_app/repo.ex
    
    defmodule MyApp.Repo do
      use AshPostgres.Repo, otp_app: :my_app
    
      def installed_extensions do
        ["ash-functions", "uuid-ossp", "citext"]
      end
    end

You can skip this step if you don't want to use tokens, in which case remove the `tokens` DSL section in the user resource below.
    
    
    # lib/my_app/accounts/token.ex
    
    defmodule MyApp.Accounts.Token do
      use Ash.Resource,
        data_layer: AshPostgres.DataLayer,
        extensions: [AshAuthentication.TokenResource],
        # If using policies, enable the policy authorizer:
        # authorizers: [Ash.Policy.Authorizer],
        domain: MyApp.Accounts
    
      postgres do
        table "tokens"
        repo MyApp.Repo
      end
    
      # If using policies, add the following bypass:
      # policies do
      #   bypass AshAuthentication.Checks.AshAuthenticationInteraction do
      #     authorize_if always()
      #   end
      # end
    end

Lastly let's define our `User` resource, using password authentication and token generation enabled.
    
    
    # lib/my_app/accounts/user.ex
    
    defmodule MyApp.Accounts.User do
      use Ash.Resource,
        data_layer: AshPostgres.DataLayer,
        extensions: [AshAuthentication],
        authorizers: [Ash.Policy.Authorizer],
        domain: MyApp.Accounts
    
      attributes do
        uuid_primary_key :id
        attribute :email, :ci_string, allow_nil?: false, public?: true
        attribute :hashed_password, :string, allow_nil?: false, sensitive?: true
      end
    
      authentication do
        strategies do
          password :password do
            identity_field :email
          end
        end
    
        tokens do
          enabled? true
          token_resource MyApp.Accounts.Token
          signing_secret fn _, _ ->
            Application.fetch_env(:my_app, :token_signing_secret)
          end
        end
      end
    
      postgres do
        table "users"
        repo MyApp.Repo
      end
    
      identities do
        identity :unique_email, [:email]
      end
    
      # You can customize this if you wish, but this is a safe default that
      # only allows user data to be interacted with via AshAuthentication.
      policies do
        bypass AshAuthentication.Checks.AshAuthenticationInteraction do
          authorize_if always()
        end
    
        policy always() do
          forbid_if always()
        end
      end
    end

Here we've added password authentication, using an email address as our identifier.

Now we have enough in place to register and sign-in users using the [`AshAuthentication.Strategy`](external_link) protocol.

##  __ Token generation

If you have token generation enabled then you need to provide (at minimum) a signing secret. As the name implies this should be a secret. AshAuthentication provides a mechanism for looking up secrets at runtime using the [`AshAuthentication.Secret`](external_link) behaviour. To save you a click, this means that you can set your token signing secret using either a static string (please don't!), a two-arity anonymous function, or a module which implements the [`AshAuthentication.Secret`](external_link) behaviour.

At its simplest you should so something like this:
    
    
    # in lib/my_app/accounts/user.ex
    
    signing_secret fn _, _ ->
      Application.fetch_env(:my_app, :token_signing_secret)
    end

Then, specify the secret token in the config file:
    
    
    # in config/config.exs
    config :my_app, :token_signing_secret, "some_super_secret_random_value"

> ###  __ The signing secret must not be committed to source control
> 
> Proper management of secrets is outside the scope of this tutorial, but is absolutely crucial to the security of your application.

##  __ Plugs and routing

If you're using Phoenix, then you can skip this section and go straight to [Integrating Ash Authentication and Phoenix](external_link)

In order for your users to be able to sign in, you will likely need to provide an HTTP endpoint to submit credentials or OAuth requests to. Ash Authentication provides [`AshAuthentication.Plug`](external_link) for this purposes. It provides a `use` macro which handles routing of requests to the correct providers, and defines callbacks for successful and unsuccessful outcomes.

Let's generate our plug:
    
    
    # lib/my_app/auth_plug.ex
    
    defmodule MyApp.AuthPlug do
      use AshAuthentication.Plug, otp_app: :my_app
    
      def handle_success(conn, _activity, user, token) do
        if is_api_request?(conn) do
          conn
          |> send_resp(200, Jason.encode!(%{
            authentication: %{
              success: true,
              token: token
            }
          }))
        else
          conn
          |> store_in_session(user)
          |> send_resp(200, EEx.eval_string("""
          <h2>Welcome back <%= @user.email %></h2>
          """, user: user))
        end
      end
    
      def handle_failure(conn, _activity, _reason) do
        if is_api_request?(conn) do
          conn
          |> send_resp(401, Jason.encode!(%{
            authentication: %{
              success: false
            }
          }))
        else
          conn
          |> send_resp(401, "<h2>Incorrect email or password</h2>")
        end
      end
    
      defp is_api_request?(conn), do: "application/json" in get_req_header(conn, "accept")
    end

Now that this is done, you can forward HTTP requests to it from your app's main router using `forward "/auth", to: MyApp.AuthPlug` or similar.

Your generated auth plug module will also contain `load_from_session` and `load_from_bearer` function plugs, which can be used to load users into assigns based on the contents of the session store or `Authorization` header.

##  __ Supervisor

AshAuthentication includes a supervisor which you should add to your application's supervisor tree. This is used to run any periodic jobs related to your authenticated resources (removing expired tokens, for example).

###  __ Example
    
    
    defmodule MyApp.Application do
      use Application
    
      def start(_type, _args) do
        children = [
          # ...
          # add this line -->
          {AshAuthentication.Supervisor, otp_app: :my_app}
          # <-- add this line
        ]
        # ...
      end
    end

##  __ Summary

In this guide we've learned how to install Ash Authentication, configure resources and handle authentication HTTP requests.

You should now have an Ash application with working user authentication.

Up next, [Using with Phoenix](external_link).

[ ← Previous Page  Change Log  ](external_link)

[ Next Page →  Auth0 Tutorial  ](external_link)
