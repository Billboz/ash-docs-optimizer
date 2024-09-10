# AshAuthentication — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication (ash_authentication v4.0.4)
  - __ Usage
  - __ Authentication Strategies
    - __ HTTP client settings
  - __ Add-ons
  - __ Supervisor
- __ Summary
  - Types
  - Functions
- __ Types
- resource_config()
- subject()
- __ Functions
- authenticated_resources(otp_app)
  - __ Example
- authentication(body)
- subject_to_user(subject, resource, options \\\ [])
- user_to_subject(record)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication (ash_authentication v4.0.4)

AshAuthentication provides a turn-key authentication solution for folks using [Ash](external_link).

##  __ Usage

This package assumes that you have [Ash](external_link) installed and configured. See the Ash documentation for details.

Once installed you can easily add support for authentication by configuring the [`AshAuthentication`](external_link) extension on your resource:
    
    
    defmodule MyApp.Accounts.User do
      use Ash.Resource,
        extensions: [AshAuthentication],
        domain: MyApp.Accounts
    
      attributes do
        uuid_primary_key :id
        attribute :email, :ci_string, allow_nil?: false
        attribute :hashed_password, :string, allow_nil?: false, sensitive?: true
      end
    
      authentication do
        strategies do
          password :password do
            identity_field :email
            hashed_password_field :hashed_password
          end
        end
      end
    
      identities do
        identity :unique_email, [:email]
      end
    end

If you plan on providing authentication via the web, then you will need to define a plug using [`AshAuthentication.Plug`](external_link) which builds a [`Plug.Router`](external_link) that routes incoming authentication requests to the correct provider and provides callbacks for you to manipulate the conn after success or failure.

If you're using AshAuthentication with Phoenix, then check out [`ash_authentication_phoenix`](external_link) which provides route helpers, a controller abstraction and LiveView components for easy set up.

##  __ Authentication Strategies

Currently supported strategies:

  1. [`AshAuthentication.Strategy.Password`](external_link)
     * authenticate users against your local database using a unique identity (such as username or email address) and a password.
  2. [`AshAuthentication.Strategy.OAuth2`](external_link)
     * authenticate using local or remote [OAuth 2.0](external_link) compatible services.
     * also includes:
       * [`AshAuthentication.Strategy.Auth0`](external_link)
       * [`AshAuthentication.Strategy.Github`](external_link)
       * [`AshAuthentication.Strategy.Google`](external_link)
       * [`AshAuthentication.Strategy.Oidc`](external_link)
  3. [`AshAuthentication.Strategy.MagicLink`](external_link)
     * authenticate by sending a single-use link to the user.



###  __ HTTP client settings

Most of the authentication strategies based on `OAuth2` wrap the [`assent`](external_link) package.

If you needs to customize the behavior of the http client used by `assent`, define a custom `http_adapter` in the application settings:

`config :ash_authentication, :http_adapter, {Assent.HTTPAdapter.Finch, supervisor: MyApp.CustomFinch}`

See [`assent's documentation`](external_link) for more details on the supported http clients and their configuration.

##  __ Add-ons

Add-ons are like strategies, except that they don't actually provide authentication - they just provide features adjacent to authentication. Current add-ons:

  1. [`AshAuthentication.AddOn.Confirmation`](external_link)
     * allows you to force the user to confirm changes using a confirmation token (eg. sending a confirmation email when a new user registers).



##  __ Supervisor

Some add-ons or strategies may require processes to be started which manage their state over the lifetime of the application (eg periodically deleting expired token revocations). Because of this you should add `{AshAuthentication.Supervisor, otp_app: :my_app}` to your application's supervision tree. See [the Elixir docs](external_link) for more information.

#  __ Summary

##  Types

resource_config()

subject()

##  Functions

authenticated_resources(otp_app)

Find all resources which support authentication for a given OTP application.

authentication(body)

Hello!

subject_to_user(subject, resource, options \\\ [])

Given a subject string, attempt to retrieve a user record.

user_to_subject(record)

Return a subject string for user.

#  __ Types

__ Link to this type

# resource_config()

[ __ View Source ](external_link)
    
    
    @type resource_config() :: %{
      domain: [module](external_link)(),
      providers: [[module](external_link)()],
      resource: [module](external_link)(),
      subject_name: [atom](external_link)()
    }

__ Link to this type

# subject()

[ __ View Source ](external_link)
    
    
    @type subject() :: [String.t](external_link)()

#  __ Functions

__ Link to this function

# authenticated_resources(otp_app)

[ __ View Source ](external_link)
    
    
    @spec authenticated_resources([atom](external_link)() | [[atom](external_link)()]) :: [[Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)()]

Find all resources which support authentication for a given OTP application.

Returns a list of resource modules.

##  __ Example
    
    
    iex> authenticated_resources(:ash_authentication)
    [Example.User, Example.UserWithTokenRequired]

__ Link to this macro

# authentication(body)

[ __ View Source ](external_link) (macro)

Hello!

__ Link to this function

# subject_to_user(subject, resource, options \\\ [])

[ __ View Source ](external_link)
    
    
    @spec subject_to_user(subject() | [URI.t](external_link)(), [Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), [keyword](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()} | {:error, [any](external_link)()}

Given a subject string, attempt to retrieve a user record.
    
    
    iex> %{id: user_id} = build_user()
    ...> {:ok, %{id: ^user_id}} = subject_to_user("user?id=#{user_id}", Example.User)

Any options passed will be passed to the underlying `Domain.read/2` callback.

__ Link to this function

# user_to_subject(record)

[ __ View Source ](external_link)
    
    
    @spec user_to_subject([Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()) :: subject()

Return a subject string for user.

This is done by concatenating the resource's subject name with the resource's primary key field(s) to generate a uri-like string.

Example:
    
    
    iex> build_user(id: "ce7969f9-afa5-474c-bc52-ac23a103cef6") |> user_to_subject()
    "user?id=ce7969f9-afa5-474c-bc52-ac23a103cef6"
