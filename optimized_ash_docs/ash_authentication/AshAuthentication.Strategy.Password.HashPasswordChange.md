# AshAuthentication.Strategy.Password.HashPasswordChange — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.Password.HashPasswordChange (ash_authentication v4.0.4)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.Password.HashPasswordChange (ash_authentication v4.0.4)

Set the hash based on the password input.

Uses the configured [`AshAuthentication.HashProvider`](external_link) to generate a hash of the user's password input and store it in the changeset.

You can use this change in your actions where you want to change the user's password. If you're not using one of the actions generated by the password strategy then you'll need to manually pass the strategy name in the changeset context. Eg:
    
    
    Changeset.new(user, %{})
    |> Changeset.set_context(%{strategy_name: :password})
    |> Changeset.for_update(:update, params)
    |> Accounts.update()

or by adding it statically to your action definition:
    
    
    update :change_password do
      change set_context(%{strategy_name: :password})
      change AshAuthentication.Strategy.Password.HashPasswordChange
    end

or by adding it as an option to the change definition:
    
    
    update :change_password do
      change {AshAuthentication.Strategy.Password.HashPasswordChange, strategy_name: :password}
    end