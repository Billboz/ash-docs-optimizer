# AshAuthentication.UserIdentity — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.UserIdentity (ash_authentication v4.0.4)
  - __ Storage
  - __ Usage
- __ Summary
  - Functions
- __ Functions
- user_identity(body)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.UserIdentity (ash_authentication v4.0.4)

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

#  __ Summary

##  Functions

user_identity(body)

Hello!

#  __ Functions

__ Link to this macro

# user_identity(body)

[ __ View Source ](external_link) (macro)

Hello!
