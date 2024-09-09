# AshOban.Checks.AshObanInteraction — ash_oban v0.2.4

Project: ash_oban v0.2.4

## Table of Contents

- [ __ View Source ](external_link) AshOban.Checks.AshObanInteraction (ash_oban v0.2.4)
- __ Summary
  - Functions
- __ Functions
- requires_original_data?(_, _)
- strict_check(actor, context, opts)
- type()

__

Search documentation of ash_oban __ __

__ Settings

#  [ __ View Source ](external_link) AshOban.Checks.AshObanInteraction (ash_oban v0.2.4)

This check is true if the context `private.ash_oban?` is set to true.

This context will only ever be set in code that is called internally by `ash_oban`, allowing you to create a bypass in your policies on your user/user_token resources.
    
    
    policies do
      bypass AshObanInteraction do
        authorize_if always()
      end
    end

#  __ Summary

##  Functions

requires_original_data?(_, _)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](3.2.2/Ash.Policy.Check.html#c:requires_original_data?/2).

strict_check(actor, context, opts)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](3.2.2/Ash.Policy.Check.html#c:strict_check/3).

type()

Callback implementation for [`Ash.Policy.Check.type/0`](3.2.2/Ash.Policy.Check.html#c:type/0).

#  __ Functions

__ Link to this function

# requires_original_data?(_, _)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](3.2.2/Ash.Policy.Check.html#c:requires_original_data?/2).

__ Link to this function

# strict_check(actor, context, opts)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](3.2.2/Ash.Policy.Check.html#c:strict_check/3).

__ Link to this function

# type()

[ __ View Source ](external_link)

Callback implementation for [`Ash.Policy.Check.type/0`](3.2.2/Ash.Policy.Check.html#c:type/0).
