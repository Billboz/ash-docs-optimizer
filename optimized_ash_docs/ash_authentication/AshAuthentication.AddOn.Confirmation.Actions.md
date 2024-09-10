# AshAuthentication.AddOn.Confirmation.Actions — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.AddOn.Confirmation.Actions (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- confirm(strategy, params, opts \\\ [])
- get_changes(strategy, jti, opts \\\ [])
- store_changes(strategy, token, changeset, opts \\\ [])

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.AddOn.Confirmation.Actions (ash_authentication v4.0.4)

Actions for the confirmation add-on.

Provides the code interface for working with resources via confirmation.

#  __ Summary

##  Functions

confirm(strategy, params, opts \\\ [])

Attempt to confirm a user.

get_changes(strategy, jti, opts \\\ [])

Get changes from the tokens resource for application.

store_changes(strategy, token, changeset, opts \\\ [])

Store changes in the tokens resource for later re-use.

#  __ Functions

__ Link to this function

# confirm(strategy, params, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec confirm([AshAuthentication.AddOn.Confirmation.t](external_link)(), [map](external_link)(), [keyword](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()} | {:error, [any](external_link)()}

Attempt to confirm a user.

__ Link to this function

# get_changes(strategy, jti, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec get_changes([AshAuthentication.AddOn.Confirmation.t](external_link)(), [String.t](external_link)(), [keyword](external_link)()) ::
      {:ok, [map](external_link)()} | :error

Get changes from the tokens resource for application.

__ Link to this function

# store_changes(strategy, token, changeset, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec store_changes(
      [AshAuthentication.AddOn.Confirmation.t](external_link)(),
      [String.t](external_link)(),
      [Ash.Changeset.t](3.4.1/Ash.Changeset.html#t:t/0)(),
      [keyword](external_link)()
    ) ::
      :ok | {:error, [any](external_link)()}

Store changes in the tokens resource for later re-use.
