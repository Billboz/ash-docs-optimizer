# AshAuthentication.TokenResource.Actions — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.TokenResource.Actions (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- expunge_expired(resource, opts \\\ [])
- get_token(resource, params, opts \\\ [])
- jti_revoked?(resource, jti, opts \\\ [])
- revoke(resource, token, opts \\\ [])
- store_token(resource, params, opts \\\ [])
- token_revoked?(resource, token, opts \\\ [])

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.TokenResource.Actions (ash_authentication v4.0.4)

The code interface for interacting with the token resource.

#  __ Summary

##  Functions

expunge_expired(resource, opts \\\ [])

Remove all expired records.

get_token(resource, params, opts \\\ [])

Retrieve a token by token or JTI optionally filtering by purpose.

jti_revoked?(resource, jti, opts \\\ [])

Has the token been revoked?

revoke(resource, token, opts \\\ [])

Revoke a token.

store_token(resource, params, opts \\\ [])

Store a token.

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

# get_token(resource, params, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec get_token([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), [map](external_link)(), [keyword](external_link)()) ::
      {:ok, [[Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()]} | {:error, [any](external_link)()}

Retrieve a token by token or JTI optionally filtering by purpose.

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

__ Link to this function

# store_token(resource, params, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec store_token([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), [map](external_link)(), [keyword](external_link)()) :: :ok | {:error, [any](external_link)()}

Store a token.

Stores a token for any purpose.

__ Link to this function

# token_revoked?(resource, token, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec token_revoked?([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), [String.t](external_link)(), [keyword](external_link)()) :: [boolean](external_link)()

Has the token been revoked?

Similar to `jti_revoked?/2..3` except that it extracts the JTI from the token, rather than relying on it to be passed in.
