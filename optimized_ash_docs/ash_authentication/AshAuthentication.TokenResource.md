# AshAuthentication.TokenResource — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.TokenResource (ash_authentication v4.0.4)
  - __ Storage
  - __ Usage
  - __ Removing expired records
- __ Summary
  - Functions
- __ Functions
- expunge_expired(resource, opts \\\ [])
- jti_revoked?(resource, jti, opts \\\ [])
- revoke(resource, token, opts \\\ [])
- token(body)
- token_revoked?(resource, token, opts \\\ [])

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.TokenResource (ash_authentication v4.0.4)

This is an Ash resource extension which generates the default token resource.

The token resource is used to store information about tokens that should not be shared with the end user. It does not actually contain any tokens.

For example:

  * When an authentication token has been revoked
  * When a confirmation token has changes to apply



##  __ Storage

The information stored in this resource is essentially ephemeral - all tokens have an expiry date, so it doesn't make sense to keep them after that time has passed. However, if you have any tokens with very long expiry times then we suggest you store this resource in a resilient data-layer such as Postgres.

##  __ Usage

There is no need to define any attributes or actions (although you can if you want). The extension will wire up everything that's needed for the token system to function.
    
    
    defmodule MyApp.Accounts.Token do
      use Ash.Resource,
        data_layer: AshPostgres.DataLayer,
        extensions: [AshAuthentication.TokenResource],
        domain: MyApp.Accounts
    
      postgres do
        table "tokens"
        repo MyApp.Repo
      end
    end

Whilst it is possible to have multiple token resources, there is no need to do so.

##  __ Removing expired records

Once a token has expired there's no point in keeping the information it refers to, so expired tokens can be automatically removed by adding the [`AshAuthentication.Supervisor`](external_link) to your application supervision tree. This will start the [`AshAuthentication.TokenResource.Expunger`](external_link) [`GenServer`](external_link) which periodically scans and removes any expired records.

#  __ Summary

##  Functions

expunge_expired(resource, opts \\\ [])

Remove all expired records.

jti_revoked?(resource, jti, opts \\\ [])

Has the token been revoked?

revoke(resource, token, opts \\\ [])

Revoke a token.

token(body)

Hello!

token_revoked?(resource, token, opts \\\ [])

Has the token been revoked?

#  __ Functions

__ Link to this function

# expunge_expired(resource, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec expunge_expired(
      [Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(),
      [keyword](external_link)()
    ) :: :ok | {:error, [any](external_link)()}

Remove all expired records.

__ Link to this function

# jti_revoked?(resource, jti, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec jti_revoked?([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), [String.t](external_link)(), [keyword](external_link)()) :: [boolean](external_link)()

Has the token been revoked?

Similar to `token-revoked?/2..3` except that rather than extracting the JTI from the token, assumes that it's being passed in directly.

__ Link to this function

# revoke(resource, token, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec revoke([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), [String.t](external_link)(), [keyword](external_link)()) :: :ok | {:error, [any](external_link)()}

Revoke a token.

Extracts the JTI from the provided token and uses it to generate a revocation record.

__ Link to this macro

# token(body)

[ __ View Source ](external_link) (macro)

Hello!

__ Link to this function

# token_revoked?(resource, token, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec token_revoked?([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), [String.t](external_link)(), [keyword](external_link)()) :: [boolean](external_link)()

Has the token been revoked?

Similar to `jti_revoked?/2..3` except that it extracts the JTI from the token, rather than relying on it to be passed in.
