# AshAuthentication.Jwt — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Jwt (ash_authentication v4.0.4)
  - __ Configuration
- __ Summary
  - Types
  - Functions
- __ Types
- claims()
- token()
- __ Functions
- default_algorithm()
- default_lifetime_hrs()
- peek(token)
- supported_algorithms()
- token_for_user(user, extra_claims \\\ %{}, opts \\\ [])
- token_to_resource(token, otp_app)
  - __ Warning
- verify(token, otp_app_or_resource)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Jwt (ash_authentication v4.0.4)

Uses the excellent `joken` hex package to generate and sign Json Web Tokens.

##  __ Configuration

There are a few things we need to know in order to generate and sign a JWT:

  * `signing_algorithm` \- the crypographic algorithm used to to sign tokens.
  * `token_lifetime` \- how long the token is valid for (in hours).
  * `signing_secret` \- the secret key used to sign the tokens.



These can be configured in your resource's token DSL:
    
    
    defmodule MyApp.Accounts.User do
      # ...
    
      authentication do
        tokens do
          token_lifetime 32
          signing_secret fn _, _ ->
            System.fetch_env("TOKEN_SIGNING_SECRET")
          end
        end
      end
    
      # ...
    end

The signing secret is retrieved using the [`AshAuthentication.Secret`](external_link) behaviour, which means that it can be retrieved one of three ways:

  1. As a string directly in your resource DSL (please don't do this unless you know why this is a bad idea!), or
  2. a two-arity anonymous function which returns `{:ok, secret}`, or
  3. the name of a module which implements the [`AshAuthentication.Secret`](external_link) behaviour.



Available signing algorithms are EdDSA, Ed448ph, Ed448, Ed25519ph, Ed25519, PS512, PS384, PS256, ES512, ES384, ES256, RS512, RS384, RS256, HS512, HS384 or HS256. Defaults to HS256.

We strongly advise against storing the signing secret in your mix config or directly in your resource configuration. We instead suggest you make use of [`runtime.exs`](external_link) and read it from the system environment or other secret store.

The default token lifetime is 168 and should be specified in integer positive hours.

#  __ Summary

##  Types

claims()

"claims" are the decoded contents of a JWT. A map of (short) string keys to string values.

token()

A string likely to contain a valid JWT.

##  Functions

default_algorithm()

The default signing algorithm

default_lifetime_hrs()

The default token lifetime

peek(token)

Given a token, read it's claims without validating.

supported_algorithms()

Supported signing algorithms

token_for_user(user, extra_claims \\\ %{}, opts \\\ [])

Given a user, generate a signed JWT for use while authenticating.

token_to_resource(token, otp_app)

Given a token, find a matching resource configuration.

verify(token, otp_app_or_resource)

Given a token, verify it's signature and validate it's claims.

#  __ Types

__ Link to this type

# claims()

[ __ View Source ](external_link)
    
    
    @type claims() :: %{
      required([String.t](external_link)()) => [String.t](external_link)() | [number](external_link)() | [boolean](external_link)() | claims()
    }

"claims" are the decoded contents of a JWT. A map of (short) string keys to string values.

__ Link to this type

# token()

[ __ View Source ](external_link)
    
    
    @type token() :: [String.t](external_link)()

A string likely to contain a valid JWT.

#  __ Functions

__ Link to this function

# default_algorithm()

[ __ View Source ](external_link)
    
    
    @spec default_algorithm() :: [String.t](external_link)()

The default signing algorithm

__ Link to this function

# default_lifetime_hrs()

[ __ View Source ](external_link)
    
    
    @spec default_lifetime_hrs() :: [pos_integer](external_link)()

The default token lifetime

__ Link to this function

# peek(token)

[ __ View Source ](external_link)
    
    
    @spec peek(token()) :: {:ok, claims()} | {:error, [any](external_link)()}

Given a token, read it's claims without validating.

__ Link to this function

# supported_algorithms()

[ __ View Source ](external_link)
    
    
    @spec supported_algorithms() :: [[String.t](external_link)()]

Supported signing algorithms

__ Link to this function

# token_for_user(user, extra_claims \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec token_for_user(
      [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)(),
      extra_claims :: [map](external_link)(),
      options :: [keyword](external_link)()
    ) ::
      {:ok, token(), claims()} | :error

Given a user, generate a signed JWT for use while authenticating.

__ Link to this function

# token_to_resource(token, otp_app)

[ __ View Source ](external_link)
    
    
    @spec token_to_resource(token(), [module](external_link)()) :: {:ok, [Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)()} | :error

Given a token, find a matching resource configuration.

##  __ Warning

This function _does not_ validate the token, so don't rely on it for authentication or authorisation.

__ Link to this function

# verify(token, otp_app_or_resource)

[ __ View Source ](external_link)
    
    
    @spec verify(token(), [Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)() | [atom](external_link)()) ::
      {:ok, claims(), [Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)()} | :error

Given a token, verify it's signature and validate it's claims.
