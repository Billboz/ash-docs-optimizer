# Upgrading — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) Upgrading
  - __ Upgrading to version 4.0.0
  - __ Upgrading to version 3.6.0.
    - __ Upgrade steps:

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) Upgrading

##  __ Upgrading to version 4.0.0

Version 4.0.0 of AshAuthentication adds support for Ash 3.0 and in line with [a number of changes in Ash](3.4.1/upgrading-to-3.0.html) there are some corresponding changes to Ash Authentication:

  * Token generation is enabled by default, meaning that you will have to explicitly set [`authentication.tokens.enabled?`](external_link) to `false` if you don't need them.

  * Sign in tokens are enabled by default in the password strategy. What this means is that instead of returning a regular user token on sign-in in the user's metadata, we generate a short-lived token which can be used to actually sign the user in. This is specifically to allow live-view based sign-in UIs to display an authentication error without requiring a page-load.




##  __ Upgrading to version 3.6.0.

As of version 3.6.0 the `TokenResource` extension adds the `subject` attribute which allows us to more easily match tokens to specific users. This unlocks some new use-cases (eg sign out everywhere).

This means that you will need to generate new migrations and migrate your database.

###  __ Upgrade steps:

> ###  __ Warning
> 
> If you already have tokens stored in your database then the migration will likely throw a migration error due to the new `NOT NULL` constraint on `subject`. If this happens then you can either delete all your tokens or explicitly add the `subject` attribute to your resource with `allow_nil?` set to `true`. eg:
>     
>     
>     attributes do
>       attribute :subject, :string, allow_nil?: true
>     end

  1. Run `mix ash_postgres.generate_migrations --name=add_subject_to_token_resource`
  2. Run [`mix ash_postgres.migrate`](external_link)
  3. 🎉



[ ← Previous Page  Tokens  ](external_link)

[ Next Page →  DSL: AshAuthentication  ](external_link)
