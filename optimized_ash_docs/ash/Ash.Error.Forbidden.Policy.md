# Ash.Error.Forbidden.Policy — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Error.Forbidden.Policy exception (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- exception()
- get_breakdown(facts, filter, policies, opts \\\ [])
- report(forbidden)
- report(error, opts \\\ [])

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Error.Forbidden.Policy exception (ash v3.4.8)

Raised when policy authorization for an action fails

#  __ Summary

##  Functions

exception()

get_breakdown(facts, filter, policies, opts \\\ [])

Print a report of an authorization failure from authorization information.

report(forbidden)

Print a report of an authorization failure from a forbidden error

report(error, opts \\\ [])

#  __ Functions

__ Link to this function

# exception()

[ __ View Source ](external_link)

__ Link to this function

# get_breakdown(facts, filter, policies, opts \\\ [])

[ __ View Source ](external_link)

Print a report of an authorization failure from authorization information.

Options:

  * `:help_text?`: Defaults to true. Displays help text at the top of the policy breakdown.
  * `:success?`: Defaults to false. Changes the messaging/graphics around to indicate successful policy authorization.
  * `:must_pass_strict_check?`: Defaults to false. Adds a message about this authorization requiring passing strict check.



__ Link to this function

# report(forbidden)

[ __ View Source ](external_link)

Print a report of an authorization failure from a forbidden error

Options:

  * `:help_text?`: Defaults to true. Displays help text at the top of the policy breakdown.



__ Link to this function

# report(error, opts \\\ [])

[ __ View Source ](external_link)
