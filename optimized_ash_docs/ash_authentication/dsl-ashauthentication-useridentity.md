# DSL: AshAuthentication.UserIdentity — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) DSL: AshAuthentication.UserIdentity
  - __ Storage
  - __ Usage
  - __ user_identity
    - __ Options

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshAuthentication.UserIdentity

An Ash extension which generates the default user identities resource.

The user identities resource is used to store information returned by remote authentication strategies (such as those provided by OAuth2) and maps them to your user resource(s). This provides the following benefits:

  1. A user can be signed in to multiple authentication strategies at once.
  2. For those provides which support it AshAuthentication can handle automatic refreshing of tokens.



##  __ Storage

User identities are expected to be relatively long-lived (although they're deleted on log out), so should probably be stored using a permanent data layer sush as `ash_postgres`.

##  __ Usage

There is no need to define any attributes, etc. The extension will generate them all for you. As there is no other use-case for this resource it's unlikely that you will need to customise it.
    
    
    defmodule MyApp.Accounts.UserIdentity do
      use Ash.Resource,
        data_layer: AshPostgres.DataLayer,
        extensions: [AshAuthentication.UserIdentity],
        domain: MyApp.Accounts
    
      user_identity do
        user_resource MyApp.Accounts.User
      end
    
      postgres do
        table "user_identities"
        repo MyApp.Repo
      end
    end

If you intend to operate with multiple user resources, you will need to define multiple user identity resources.

##  __ user_identity

Configure identity options for this resource

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`user_resource`| `module`| | The user resource to which these identities belong.  
`domain`| `module`| | The Ash domain to use to access this resource.  
`uid_attribute_name`| `atom`| `:uid`| The name of the `uid` attribute on this resource.  
`strategy_attribute_name`| `atom`| `:strategy`| The name of the `strategy` attribute on this resource.  
`user_id_attribute_name`| `atom`| `:user_id`| The name of the `user_id` attribute on this resource.  
`access_token_attribute_name`| `atom`| `:access_token`| The name of the `access_token` attribute on this resource.  
`access_token_expires_at_attribute_name`| `atom`| `:access_token_expires_at`| The name of the `access_token_expires_at` attribute on this resource.  
`refresh_token_attribute_name`| `atom`| `:refresh_token`| The name of the `refresh_token` attribute on this resource.  
`upsert_action_name`| `atom`| `:upsert`| The name of the action used to create and update records.  
`destroy_action_name`| `atom`| `:destroy`| The name of the action used to destroy records.  
`read_action_name`| `atom`| `:read`| The name of the action used to query identities.  
`user_relationship_name`| `atom`| `:user`| The name of the belongs-to relationship between identities and users.  
  
[ ← Previous Page  DSL: AshAuthentication.TokenResource  ](external_link)
