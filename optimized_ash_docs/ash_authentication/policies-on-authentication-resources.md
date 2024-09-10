# Policies on Authenticated Resources — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) Policies on Authenticated Resources

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) Policies on Authenticated Resources

Typically, we want to lock down our `User` resource pretty heavily, which, in Ash, involves writing policies. However, AshAuthentication will be calling actions on your user/token resources. To make this more convenient, all actions run with [`AshAuthentication`](external_link) will set a special context. Additionally a check is provided that will check if that context has been set: [`AshAuthentication.Checks.AshAuthenticationInteraction`](external_link). Using this you can write a simple bypass policy on your user/token resources like so:
    
    
    policies do
      bypass always() do
        authorize_if AshAuthentication.Checks.AshAuthenticationInteraction
      end
    
      # or, pick your poison
    
      bypass AshAuthentication.Checks.AshAuthenticationInteraction do
        authorize_if always()
      end
    end

[ ← Previous Page  Defining Custom Authentication Strategies  ](external_link)

[ Next Page →  Testing  ](external_link)
