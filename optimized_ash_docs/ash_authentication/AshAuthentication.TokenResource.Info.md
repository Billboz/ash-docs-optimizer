# AshAuthentication.TokenResource.Info — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.TokenResource.Info (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- token_confirmation_get_changes_action_name(dsl_or_extended)
- token_confirmation_get_changes_action_name!(dsl_or_extended)
- token_confirmation_options(dsl_or_extended)
- token_confirmation_store_changes_action_name(dsl_or_extended)
- token_confirmation_store_changes_action_name!(dsl_or_extended)
- token_domain(dsl_or_extended)
- token_domain!(dsl_or_extended)
- token_expunge_expired_action_name(dsl_or_extended)
- token_expunge_expired_action_name!(dsl_or_extended)
- token_expunge_interval(dsl_or_extended)
- token_expunge_interval!(dsl_or_extended)
- token_get_token_action_name(dsl_or_extended)
- token_get_token_action_name!(dsl_or_extended)
- token_options(dsl_or_extended)
- token_read_expired_action_name(dsl_or_extended)
- token_read_expired_action_name!(dsl_or_extended)
- token_revocation_is_revoked_action_name(dsl_or_extended)
- token_revocation_is_revoked_action_name!(dsl_or_extended)
- token_revocation_options(dsl_or_extended)
- token_revocation_revoke_token_action_name(dsl_or_extended)
- token_revocation_revoke_token_action_name!(dsl_or_extended)
- token_store_token_action_name(dsl_or_extended)
- token_store_token_action_name!(dsl_or_extended)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.TokenResource.Info (ash_authentication v4.0.4)

Introspection functions for the [`AshAuthentication.TokenResource`](external_link) Ash extension.

#  __ Summary

##  Functions

token_confirmation_get_changes_action_name(dsl_or_extended)

The name of the action used to get confirmation changes.

token_confirmation_get_changes_action_name!(dsl_or_extended)

The name of the action used to get confirmation changes.

token_confirmation_options(dsl_or_extended)

token.confirmation DSL options

token_confirmation_store_changes_action_name(dsl_or_extended)

The name of the action used to store confirmation changes.

token_confirmation_store_changes_action_name!(dsl_or_extended)

The name of the action used to store confirmation changes.

token_domain(dsl_or_extended)

The Ash domain to use to access this resource.

token_domain!(dsl_or_extended)

The Ash domain to use to access this resource.

token_expunge_expired_action_name(dsl_or_extended)

The name of the action used to remove expired tokens.

token_expunge_expired_action_name!(dsl_or_extended)

The name of the action used to remove expired tokens.

token_expunge_interval(dsl_or_extended)

How often to scan this resource for records which have expired, and thus can be removed.

token_expunge_interval!(dsl_or_extended)

How often to scan this resource for records which have expired, and thus can be removed.

token_get_token_action_name(dsl_or_extended)

The name of the action used to retrieve tokens from the store, if `require_tokens_for_authentication?` is enabled in your authentication resource.

token_get_token_action_name!(dsl_or_extended)

The name of the action used to retrieve tokens from the store, if `require_tokens_for_authentication?` is enabled in your authentication resource.

token_options(dsl_or_extended)

token DSL options

token_read_expired_action_name(dsl_or_extended)

The name of the action use to find all expired tokens.

token_read_expired_action_name!(dsl_or_extended)

The name of the action use to find all expired tokens.

token_revocation_is_revoked_action_name(dsl_or_extended)

The name of the action used to check if a token is revoked.

token_revocation_is_revoked_action_name!(dsl_or_extended)

The name of the action used to check if a token is revoked.

token_revocation_options(dsl_or_extended)

token.revocation DSL options

token_revocation_revoke_token_action_name(dsl_or_extended)

The name of the action used to revoke tokens.

token_revocation_revoke_token_action_name!(dsl_or_extended)

The name of the action used to revoke tokens.

token_store_token_action_name(dsl_or_extended)

The name of the action to use to store a token, if `require_tokens_for_authentication?` is enabled in your authentication resource.

token_store_token_action_name!(dsl_or_extended)

The name of the action to use to store a token, if `require_tokens_for_authentication?` is enabled in your authentication resource.

#  __ Functions

__ Link to this function

# token_confirmation_get_changes_action_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_confirmation_get_changes_action_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the action used to get confirmation changes.

__ Link to this function

# token_confirmation_get_changes_action_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_confirmation_get_changes_action_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the action used to get confirmation changes.

__ Link to this function

# token_confirmation_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_confirmation_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

token.confirmation DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# token_confirmation_store_changes_action_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_confirmation_store_changes_action_name(
      dsl_or_extended :: [module](external_link)() | [map](external_link)()
    ) ::
      {:ok, [atom](external_link)()} | :error

The name of the action used to store confirmation changes.

__ Link to this function

# token_confirmation_store_changes_action_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_confirmation_store_changes_action_name!(
      dsl_or_extended :: [module](external_link)() | [map](external_link)()
    ) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the action used to store confirmation changes.

__ Link to this function

# token_domain(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_domain(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: {:ok, [module](external_link)()} | :error

The Ash domain to use to access this resource.

__ Link to this function

# token_domain!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_domain!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [module](external_link)() | [no_return](external_link)()

The Ash domain to use to access this resource.

__ Link to this function

# token_expunge_expired_action_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_expunge_expired_action_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the action used to remove expired tokens.

__ Link to this function

# token_expunge_expired_action_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_expunge_expired_action_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the action used to remove expired tokens.

__ Link to this function

# token_expunge_interval(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_expunge_interval(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [pos_integer](external_link)()} | :error

How often to scan this resource for records which have expired, and thus can be removed.

__ Link to this function

# token_expunge_interval!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_expunge_interval!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [pos_integer](external_link)() | [no_return](external_link)()

How often to scan this resource for records which have expired, and thus can be removed.

__ Link to this function

# token_get_token_action_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_get_token_action_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the action used to retrieve tokens from the store, if `require_tokens_for_authentication?` is enabled in your authentication resource.

__ Link to this function

# token_get_token_action_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_get_token_action_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the action used to retrieve tokens from the store, if `require_tokens_for_authentication?` is enabled in your authentication resource.

__ Link to this function

# token_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

token DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# token_read_expired_action_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_read_expired_action_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the action use to find all expired tokens.

__ Link to this function

# token_read_expired_action_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_read_expired_action_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the action use to find all expired tokens.

__ Link to this function

# token_revocation_is_revoked_action_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_revocation_is_revoked_action_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the action used to check if a token is revoked.

__ Link to this function

# token_revocation_is_revoked_action_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_revocation_is_revoked_action_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the action used to check if a token is revoked.

__ Link to this function

# token_revocation_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_revocation_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

token.revocation DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# token_revocation_revoke_token_action_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_revocation_revoke_token_action_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the action used to revoke tokens.

__ Link to this function

# token_revocation_revoke_token_action_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_revocation_revoke_token_action_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the action used to revoke tokens.

__ Link to this function

# token_store_token_action_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_store_token_action_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the action to use to store a token, if `require_tokens_for_authentication?` is enabled in your authentication resource.

__ Link to this function

# token_store_token_action_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec token_store_token_action_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the action to use to store a token, if `require_tokens_for_authentication?` is enabled in your authentication resource.
