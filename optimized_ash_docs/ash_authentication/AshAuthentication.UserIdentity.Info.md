# AshAuthentication.UserIdentity.Info — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.UserIdentity.Info (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- user_identity_access_token_attribute_name(dsl_or_extended)
- user_identity_access_token_attribute_name!(dsl_or_extended)
- user_identity_access_token_expires_at_attribute_name(dsl_or_extended)
- user_identity_access_token_expires_at_attribute_name!(dsl_or_extended)
- user_identity_destroy_action_name(dsl_or_extended)
- user_identity_destroy_action_name!(dsl_or_extended)
- user_identity_domain(dsl_or_extended)
- user_identity_domain!(dsl_or_extended)
- user_identity_options(dsl_or_extended)
- user_identity_read_action_name(dsl_or_extended)
- user_identity_read_action_name!(dsl_or_extended)
- user_identity_refresh_token_attribute_name(dsl_or_extended)
- user_identity_refresh_token_attribute_name!(dsl_or_extended)
- user_identity_strategy_attribute_name(dsl_or_extended)
- user_identity_strategy_attribute_name!(dsl_or_extended)
- user_identity_uid_attribute_name(dsl_or_extended)
- user_identity_uid_attribute_name!(dsl_or_extended)
- user_identity_upsert_action_name(dsl_or_extended)
- user_identity_upsert_action_name!(dsl_or_extended)
- user_identity_user_id_attribute_name(dsl_or_extended)
- user_identity_user_id_attribute_name!(dsl_or_extended)
- user_identity_user_relationship_name(dsl_or_extended)
- user_identity_user_relationship_name!(dsl_or_extended)
- user_identity_user_resource(dsl_or_extended)
- user_identity_user_resource!(dsl_or_extended)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.UserIdentity.Info (ash_authentication v4.0.4)

Introspection functions for the [`AshAuthentication.UserIdentity`](external_link) Ash extension.

#  __ Summary

##  Functions

user_identity_access_token_attribute_name(dsl_or_extended)

The name of the `access_token` attribute on this resource.

user_identity_access_token_attribute_name!(dsl_or_extended)

The name of the `access_token` attribute on this resource.

user_identity_access_token_expires_at_attribute_name(dsl_or_extended)

The name of the `access_token_expires_at` attribute on this resource.

user_identity_access_token_expires_at_attribute_name!(dsl_or_extended)

The name of the `access_token_expires_at` attribute on this resource.

user_identity_destroy_action_name(dsl_or_extended)

The name of the action used to destroy records.

user_identity_destroy_action_name!(dsl_or_extended)

The name of the action used to destroy records.

user_identity_domain(dsl_or_extended)

The Ash domain to use to access this resource.

user_identity_domain!(dsl_or_extended)

The Ash domain to use to access this resource.

user_identity_options(dsl_or_extended)

user_identity DSL options

user_identity_read_action_name(dsl_or_extended)

The name of the action used to query identities.

user_identity_read_action_name!(dsl_or_extended)

The name of the action used to query identities.

user_identity_refresh_token_attribute_name(dsl_or_extended)

The name of the `refresh_token` attribute on this resource.

user_identity_refresh_token_attribute_name!(dsl_or_extended)

The name of the `refresh_token` attribute on this resource.

user_identity_strategy_attribute_name(dsl_or_extended)

The name of the `strategy` attribute on this resource.

user_identity_strategy_attribute_name!(dsl_or_extended)

The name of the `strategy` attribute on this resource.

user_identity_uid_attribute_name(dsl_or_extended)

The name of the `uid` attribute on this resource.

user_identity_uid_attribute_name!(dsl_or_extended)

The name of the `uid` attribute on this resource.

user_identity_upsert_action_name(dsl_or_extended)

The name of the action used to create and update records.

user_identity_upsert_action_name!(dsl_or_extended)

The name of the action used to create and update records.

user_identity_user_id_attribute_name(dsl_or_extended)

The name of the `user_id` attribute on this resource.

user_identity_user_id_attribute_name!(dsl_or_extended)

The name of the `user_id` attribute on this resource.

user_identity_user_relationship_name(dsl_or_extended)

The name of the belongs-to relationship between identities and users.

user_identity_user_relationship_name!(dsl_or_extended)

The name of the belongs-to relationship between identities and users.

user_identity_user_resource(dsl_or_extended)

The user resource to which these identities belong.

user_identity_user_resource!(dsl_or_extended)

The user resource to which these identities belong.

#  __ Functions

__ Link to this function

# user_identity_access_token_attribute_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_access_token_attribute_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the `access_token` attribute on this resource.

__ Link to this function

# user_identity_access_token_attribute_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_access_token_attribute_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the `access_token` attribute on this resource.

__ Link to this function

# user_identity_access_token_expires_at_attribute_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_access_token_expires_at_attribute_name(
      dsl_or_extended :: [module](external_link)() | [map](external_link)()
    ) ::
      {:ok, [atom](external_link)()} | :error

The name of the `access_token_expires_at` attribute on this resource.

__ Link to this function

# user_identity_access_token_expires_at_attribute_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_access_token_expires_at_attribute_name!(
      dsl_or_extended :: [module](external_link)() | [map](external_link)()
    ) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the `access_token_expires_at` attribute on this resource.

__ Link to this function

# user_identity_destroy_action_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_destroy_action_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the action used to destroy records.

__ Link to this function

# user_identity_destroy_action_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_destroy_action_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the action used to destroy records.

__ Link to this function

# user_identity_domain(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_domain(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [module](external_link)()} | :error

The Ash domain to use to access this resource.

__ Link to this function

# user_identity_domain!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_domain!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [module](external_link)() | [no_return](external_link)()

The Ash domain to use to access this resource.

__ Link to this function

# user_identity_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

user_identity DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# user_identity_read_action_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_read_action_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the action used to query identities.

__ Link to this function

# user_identity_read_action_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_read_action_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the action used to query identities.

__ Link to this function

# user_identity_refresh_token_attribute_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_refresh_token_attribute_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the `refresh_token` attribute on this resource.

__ Link to this function

# user_identity_refresh_token_attribute_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_refresh_token_attribute_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the `refresh_token` attribute on this resource.

__ Link to this function

# user_identity_strategy_attribute_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_strategy_attribute_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the `strategy` attribute on this resource.

__ Link to this function

# user_identity_strategy_attribute_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_strategy_attribute_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the `strategy` attribute on this resource.

__ Link to this function

# user_identity_uid_attribute_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_uid_attribute_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the `uid` attribute on this resource.

__ Link to this function

# user_identity_uid_attribute_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_uid_attribute_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the `uid` attribute on this resource.

__ Link to this function

# user_identity_upsert_action_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_upsert_action_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the action used to create and update records.

__ Link to this function

# user_identity_upsert_action_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_upsert_action_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the action used to create and update records.

__ Link to this function

# user_identity_user_id_attribute_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_user_id_attribute_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the `user_id` attribute on this resource.

__ Link to this function

# user_identity_user_id_attribute_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_user_id_attribute_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the `user_id` attribute on this resource.

__ Link to this function

# user_identity_user_relationship_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_user_relationship_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The name of the belongs-to relationship between identities and users.

__ Link to this function

# user_identity_user_relationship_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_user_relationship_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The name of the belongs-to relationship between identities and users.

__ Link to this function

# user_identity_user_resource(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_user_resource(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [module](external_link)()} | :error

The user resource to which these identities belong.

__ Link to this function

# user_identity_user_resource!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec user_identity_user_resource!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [module](external_link)() | [no_return](external_link)()

The user resource to which these identities belong.
