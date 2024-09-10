# AshAuthentication.Sender — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Sender behaviour (ash_authentication v4.0.4)
  - __ Example
- __ Summary
  - Callbacks
- __ Callbacks
- send(user, token, opts)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Sender behaviour (ash_authentication v4.0.4)

A module to implement sending of a token to a user.

Allows you to glue sending of instructions to [swoosh](external_link), [ex_twilio](external_link) or whatever notification system is appropriate for your application.

Note that the return value and any failures are ignored. If you need retry logic, etc, then you should implement it in your sending system.

##  __ Example

Implementing as a module:
    
    
    defmodule MyApp.PasswordResetSender do
      use AshAuthentication.Sender
      import Swoosh.Email
    
      def send(user, reset_token, _opts) do
        new()
        |> to({user.name, user.email})
        |> from({"Doc Brown", "emmet@brown.inc"})
        |> subject("Password reset instructions")
        |> html_body("""
          <h1>Password reset instructions</h1>
          <p>
            Hi #{user.name},<br />
    
            Someone (maybe you) has requested a password reset for your account.
            If you did not initiate this request then please ignore this email.
          </p>
          <a href="https://example.com/user/password/reset?#{URI.encode_query(reset_token: reset_token)}\">
            Click here to reset
          </a>
        """)
        |> MyApp.Mailer.deliver()
      end
    end
    
    defmodule MyApp.Accounts.User do
      use Ash.Resource,
        extensions: [AshAuthentication],
        domain: MyApp.Accounts
    
      authentication do
        strategies do
          password :password do
            resettable do
              sender MyApp.PasswordResetSender
            end
          end
        end
      end
    end

You can also implement it directly as a function:
    
    
    defmodule MyApp.Accounts.User do
      use Ash.Resource,
        extensions: [AshAuthentication],
        domain: MyApp.Accounts
    
      authentication do
        strategies do
          password :password do
            resettable do
              sender fn user, token ->
                MyApp.Mailer.send_password_reset_email(user, token)
              end
            end
          end
        end
      end
    end

#  __ Summary

##  Callbacks

send(user, token, opts)

Sending callback.

#  __ Callbacks

__ Link to this callback

# send(user, token, opts)

[ __ View Source ](external_link)
    
    
    @callback send(user :: [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)(), token :: [String.t](external_link)(), opts :: [list](external_link)()) :: :ok

Sending callback.

This function will be called with the user, the token and any options passed to the module in the DSL.
