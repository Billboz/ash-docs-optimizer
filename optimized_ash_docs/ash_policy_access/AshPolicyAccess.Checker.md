# AshPolicyAccess.Checker — ash_policy_access v0.1.0

Project: ash_policy_access v0.1.0

## Table of Contents

  - v0.1.0
- ash_policy_access v0.1.0 AshPolicyAccess.Checker [ View Source ](external_link)
- Link to this section Summary
  - Functions
- Link to this section Functions
- find_real_scenarios(scenarios, facts)
- strict_check_facts(authorizer)
- strict_check_scenarios(authorizer)

[ ash_policy_access ](external_link)

##  v0.1.0 

  * Pages
  * Modules






#  ash_policy_access v0.1.0 AshPolicyAccess.Checker [ View Source ](external_link)

Determines if a set of authorization requests can be met or not.

To read more about boolean satisfiability, see this page: <https://en.wikipedia.org/wiki/Boolean_satisfiability_problem>. At the end of the day, however, it is not necessary to understand exactly how Ash takes your authorization requirements and determines if a request is allowed. The important thing to understand is that Ash may or may not run any/all of your authorization rules as they may be deemed unnecessary. As such, authorization checks should have no side effects. Ideally, the checks built-in to ash should cover the bulk of your needs.

If you need to write your own checks see #TODO: Link to a guide about writing checks here.

#  Link to this section Summary 

##  Functions

find_real_scenarios(scenarios, facts)

strict_check_facts(authorizer)

strict_check_scenarios(authorizer)

#  Link to this section Functions 

Link to this function

# find_real_scenarios(scenarios, facts)

[ View Source ](external_link)

Link to this function

# strict_check_facts(authorizer)

[ View Source ](external_link)

Link to this function

# strict_check_scenarios(authorizer)

[ View Source ](external_link)
