# API Reference — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- API Reference ash_authentication v4.0.4
  - __ Modules

__

Search documentation of ash_authentication __ __

__ Settings

#  API Reference ash_authentication v4.0.4

##  __ Modules

[AshAuthentication](external_link)

AshAuthentication provides a turn-key authentication solution for folks using [Ash](external_link).

[AshAuthentication.AddOn.Confirmation](external_link)

Confirmation support.

[AshAuthentication.AddOn.Confirmation.Actions](external_link)

Actions for the confirmation add-on.

[AshAuthentication.AddOn.Confirmation.Authentication.AddOns.Confirmation](external_link)

Mod docs

[AshAuthentication.AddOn.Confirmation.Authentication.AddOns.Confirmation.Options](external_link)

Mod Docs

[AshAuthentication.AddOn.Confirmation.ConfirmChange](external_link)

Performs a change based on the contents of a confirmation token.

[AshAuthentication.AddOn.Confirmation.ConfirmationHookChange](external_link)

Triggers a confirmation flow when one of the monitored fields is changed.

[AshAuthentication.AddOn.Confirmation.Dsl](external_link)

Defines the Spark DSL entity for this add on.

[AshAuthentication.AddOn.Confirmation.Plug](external_link)

Handlers for incoming OAuth2 HTTP requests.

[AshAuthentication.AddOn.Confirmation.Transformer](external_link)

DSL transformer for confirmation add-on.

[AshAuthentication.AddOn.Confirmation.Verifier](external_link)

DSL verifier for confirmation add-on.

[AshAuthentication.AddOns](external_link)

MOD DOCS

[AshAuthentication.Authentication.Options](external_link)

Mod Docs

[AshAuthentication.BcryptProvider](external_link)

Provides the default implementation of [`AshAuthentication.HashProvider`](external_link) using [`Bcrypt`](external_link).

[AshAuthentication.Checks.AshAuthenticationInteraction](external_link)

This check is true if the context `private.ash_authentication?` is set to true.

[AshAuthentication.Debug](external_link)

Allows you to debug authentication failures in development.

[AshAuthentication.Errors.AuthenticationFailed](external_link)

A generic, authentication failed error.

[AshAuthentication.Errors.InvalidToken](external_link)

An invalid token was presented.

[AshAuthentication.Errors.MissingSecret](external_link)

A secret is now missing.

[AshAuthentication.GenerateTokenChange](external_link)

Given a successful registration or sign-in, generate a token.

[AshAuthentication.HashProvider](external_link)

A behaviour providing password hashing.

[AshAuthentication.Info](external_link)

Generated configuration functions based on a resource's DSL configuration.

[AshAuthentication.Jwt](external_link)

Uses the excellent `joken` hex package to generate and sign Json Web Tokens.

[AshAuthentication.Jwt.Config](external_link)

Implementation details JWT generation and validation.

[AshAuthentication.Plug](external_link)

Generate an authentication plug.

[AshAuthentication.Plug.Defaults](external_link)

Provides the default implementations of `handle_success/3` and `handle_failure/2` used in generated authentication plugs.

[AshAuthentication.Plug.Dispatcher](external_link)

Route requests and callbacks to the correct provider plugs.

[AshAuthentication.Plug.Helpers](external_link)

Authentication helpers for use in your router, etc.

[AshAuthentication.Plug.Macros](external_link)

Generators used within `use AshAuthentication.Plug`.

[AshAuthentication.Plug.Router](external_link)

Dynamically generates the authentication router for the authentication requests and callbacks.

[AshAuthentication.Secret](external_link)

A module to implement retrieving of secrets.

[AshAuthentication.SecretFunction](external_link)

Implements [`AshAuthentication.Secret`](external_link) for functions that are provided to the DSL instead of modules.

[AshAuthentication.Sender](external_link)

A module to implement sending of a token to a user.

[AshAuthentication.SenderFunction](external_link)

Implements [`AshAuthentication.Sender`](external_link) for functions that are provided to the DSL instead of modules.

[AshAuthentication.Strategies](external_link)

MOD DOCS

[AshAuthentication.Strategy](external_link)

The protocol used for interacting with authentication strategies.

[AshAuthentication.Strategy.Apple](external_link)

Strategy for authenticating using [Apple Sign In](external_link)

[AshAuthentication.Strategy.Apple.Authentication.Strategies.Apple](external_link)

Mod docs

[AshAuthentication.Strategy.Apple.Authentication.Strategies.Apple.Options](external_link)

Mod Docs

[AshAuthentication.Strategy.Apple.Verifier](external_link)

DSL verifier for Apple strategy.

[AshAuthentication.Strategy.Auth0](external_link)

Strategy for authenticating using [Auth0](external_link).

[AshAuthentication.Strategy.Auth0.Authentication.Strategies.Auth0](external_link)

Mod docs

[AshAuthentication.Strategy.Auth0.Authentication.Strategies.Auth0.Options](external_link)

Mod Docs

[AshAuthentication.Strategy.Custom](external_link)

Define your own custom authentication strategy.

[AshAuthentication.Strategy.Custom.Helpers](external_link)

Helpers for use within custom strategies.

[AshAuthentication.Strategy.Custom.Transformer](external_link)

Transformer used by custom strategies.

[AshAuthentication.Strategy.Custom.Verifier](external_link)

Verifier used by custom strategies.

[AshAuthentication.Strategy.Github](external_link)

Strategy for authenticating using [GitHub](external_link)

[AshAuthentication.Strategy.Github.Authentication.Strategies.Github](external_link)

Mod docs

[AshAuthentication.Strategy.Github.Authentication.Strategies.Github.Options](external_link)

Mod Docs

[AshAuthentication.Strategy.Google](external_link)

Strategy for authenticating using [Google](external_link)

[AshAuthentication.Strategy.Google.Authentication.Strategies.Google](external_link)

Mod docs

[AshAuthentication.Strategy.Google.Authentication.Strategies.Google.Options](external_link)

Mod Docs

[AshAuthentication.Strategy.MagicLink](external_link)

Strategy for authentication using a magic link.

[AshAuthentication.Strategy.MagicLink.Actions](external_link)

Actions for the magic link strategy.

[AshAuthentication.Strategy.MagicLink.Authentication.Strategies.MagicLink](external_link)

Mod docs

[AshAuthentication.Strategy.MagicLink.Authentication.Strategies.MagicLink.Options](external_link)

Mod Docs

[AshAuthentication.Strategy.MagicLink.Plug](external_link)

Plugs for the magic link strategy.

[AshAuthentication.Strategy.MagicLink.RequestPreparation](external_link)

Prepare a query for a magic link request.

[AshAuthentication.Strategy.MagicLink.SignInPreparation](external_link)

Prepare a query for sign in.

[AshAuthentication.Strategy.MagicLink.Transformer](external_link)

DSL transformer for magic links.

[AshAuthentication.Strategy.MagicLink.Verifier](external_link)

DSL verifier for magic links.

[AshAuthentication.Strategy.OAuth2](external_link)

Strategy for authenticating using an OAuth 2.0 server as the source of truth.

[AshAuthentication.Strategy.OAuth2.Actions](external_link)

Actions for the oauth2 strategy.

[AshAuthentication.Strategy.OAuth2.Authentication.Strategies.Oauth2](external_link)

Mod docs

[AshAuthentication.Strategy.OAuth2.Authentication.Strategies.Oauth2.Options](external_link)

Mod Docs

[AshAuthentication.Strategy.OAuth2.Dsl](external_link)

Defines the Spark DSL entity for this strategy.

[AshAuthentication.Strategy.OAuth2.IdentityChange](external_link)

Updates the identity resource when a user is registered.

[AshAuthentication.Strategy.OAuth2.Plug](external_link)

Handlers for incoming OAuth2 HTTP requests.

[AshAuthentication.Strategy.OAuth2.SignInPreparation](external_link)

Prepare a query for sign in

[AshAuthentication.Strategy.OAuth2.Transformer](external_link)

DSL transformer for oauth2 strategies.

[AshAuthentication.Strategy.OAuth2.Verifier](external_link)

DSL verifier for oauth2 strategies.

[AshAuthentication.Strategy.Oidc](external_link)

Strategy for authentication using an [OpenID Connect](external_link) compatible server as the source of truth.

[AshAuthentication.Strategy.Oidc.Authentication.Strategies.Oidc](external_link)

Mod docs

[AshAuthentication.Strategy.Oidc.Authentication.Strategies.Oidc.Options](external_link)

Mod Docs

[AshAuthentication.Strategy.Oidc.NonceGenerator](external_link)

An implmentation of [`AshAuthentication.Secret`](external_link) that generates nonces for OpenID Connect strategies.

[AshAuthentication.Strategy.Oidc.Transformer](external_link)

DSL transformer for oidc strategies.

[AshAuthentication.Strategy.Oidc.Verifier](external_link)

DSL verifier for OpenID Connect strategy.

[AshAuthentication.Strategy.Password](external_link)

Strategy for authenticating using local resources as the source of truth.

[AshAuthentication.Strategy.Password.Actions](external_link)

Actions for the password strategy

[AshAuthentication.Strategy.Password.Authentication.Strategies.Password](external_link)

Mod docs

[AshAuthentication.Strategy.Password.Authentication.Strategies.Password.Authentication.Strategies.Resettable.Resettable](external_link)

Mod docs

[AshAuthentication.Strategy.Password.Authentication.Strategies.Password.Authentication.Strategies.Resettable.Resettable.Options](external_link)

Mod Docs

[AshAuthentication.Strategy.Password.Authentication.Strategies.Password.Options](external_link)

Mod Docs

[AshAuthentication.Strategy.Password.Dsl](external_link)

Defines the Spark DSL entity for this strategy.

[AshAuthentication.Strategy.Password.HashPasswordChange](external_link)

Set the hash based on the password input.

[AshAuthentication.Strategy.Password.PasswordConfirmationValidation](external_link)

Validate that the password and password confirmation match.

[AshAuthentication.Strategy.Password.PasswordValidation](external_link)

A convenience validation that checks that the password argument against the hashed password stored in the record.

[AshAuthentication.Strategy.Password.Plug](external_link)

Plugs for the password strategy.

[AshAuthentication.Strategy.Password.RequestPasswordResetPreparation](external_link)

Prepare a query for a password reset request.

[AshAuthentication.Strategy.Password.ResetTokenValidation](external_link)

Validate that the token is a valid password reset request token.

[AshAuthentication.Strategy.Password.Resettable](external_link)

The entity used to store password reset information.

[AshAuthentication.Strategy.Password.SignInPreparation](external_link)

Prepare a query for sign in

[AshAuthentication.Strategy.Password.SignInWithTokenPreparation](external_link)

Prepare a query for sign in via token.

[AshAuthentication.Strategy.Password.Transformer](external_link)

DSL transformer for the password strategy.

[AshAuthentication.Strategy.Password.Verifier](external_link)

DSL verifier for the password strategy.

[AshAuthentication.Supervisor](external_link)

Starts and manages any processes required by AshAuthentication.

[AshAuthentication.TokenResource](external_link)

This is an Ash resource extension which generates the default token resource.

[AshAuthentication.TokenResource.Actions](external_link)

The code interface for interacting with the token resource.

[AshAuthentication.TokenResource.Confirmation](external_link)

MOD DOCS

[AshAuthentication.TokenResource.Confirmation.Options](external_link)

Mod Docs

[AshAuthentication.TokenResource.Expunger](external_link)

A [`GenServer`](external_link) which periodically removes expired token revocations.

[AshAuthentication.TokenResource.GetConfirmationChangesPreparation](external_link)

Constrains a query to only records which are confirmations that match the jti argument.

[AshAuthentication.TokenResource.GetTokenPreparation](external_link)

Constrains a query to only records which match the `jti` or `token` argument and optionally by the `purpose` argument.

[AshAuthentication.TokenResource.Info](external_link)

Introspection functions for the [`AshAuthentication.TokenResource`](external_link) Ash extension.

[AshAuthentication.TokenResource.IsRevokedPreparation](external_link)

Constrains a query to only records which are revocations that match the token or jti argument.

[AshAuthentication.TokenResource.Revocation](external_link)

MOD DOCS

[AshAuthentication.TokenResource.Revocation.Options](external_link)

Mod Docs

[AshAuthentication.TokenResource.RevokeTokenChange](external_link)

Generates a revocation record for a given token.

[AshAuthentication.TokenResource.StoreConfirmationChangesChange](external_link)

Populates the JTI based on the token argument.

[AshAuthentication.TokenResource.StoreTokenChange](external_link)

Stores an arbitrary token.

[AshAuthentication.TokenResource.Token.Options](external_link)

Mod Docs

[AshAuthentication.TokenResource.Transformer](external_link)

The token resource transformer.

[AshAuthentication.TokenResource.Verifier](external_link)

The token resource verifier.

[AshAuthentication.Tokens](external_link)

MOD DOCS

[AshAuthentication.Tokens.Options](external_link)

Mod Docs

[AshAuthentication.Transformer](external_link)

The Authentication transformer

[AshAuthentication.Transformer.SetSelectForSenders](external_link)

Sets the `select_for_senders` options to its default value.

[AshAuthentication.UserIdentity](external_link)

An Ash extension which generates the default user identities resource.

[AshAuthentication.UserIdentity.Actions](external_link)

Code interface for provider identity actions.

[AshAuthentication.UserIdentity.Info](external_link)

Introspection functions for the [`AshAuthentication.UserIdentity`](external_link) Ash extension.

[AshAuthentication.UserIdentity.Transformer](external_link)

The user identity transformer.

[AshAuthentication.UserIdentity.UpsertIdentityChange](external_link)

A change which upserts a user's identity into the user identity resource.

[AshAuthentication.UserIdentity.UserIdentity.Options](external_link)

Mod Docs

[AshAuthentication.UserIdentity.Verifier](external_link)

The user identity verifier.

[AshAuthentication.Validations](external_link)

Common validations shared by several transformers.

[AshAuthentication.Validations.Action](external_link)

Validation helpers for Resource actions.

[AshAuthentication.Validations.Attribute](external_link)

Validation helpers for Resource attributes.

[AshAuthentication.Verifier](external_link)

The Authentication verifier.

[ Next Page →  README  ](external_link)
