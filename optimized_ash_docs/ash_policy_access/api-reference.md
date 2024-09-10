# API Reference — ash_policy_access v0.1.0

Project: ash_policy_access v0.1.0

## Table of Contents

  - v0.1.0
- ash_policy_access v0.1.0 API Reference
  - Modules

[ ash_policy_access ](external_link)

##  v0.1.0 

  * Pages
  * Modules






#  ash_policy_access v0.1.0 API Reference 

##  Modules 

[AshPolicyAccess](external_link)

Authorization in Ash is done via declaring `rules` for actions, and in the case of stateful actions, via declaring `authoriation_steps` on attributes and relationships.

[AshPolicyAccess.Authorizer](external_link)

[AshPolicyAccess.Check](external_link)

A behaviour for declaring checks, which can be used to easily construct authorization rules.

[AshPolicyAccess.Check.Action](external_link)

[AshPolicyAccess.Check.ActionType](external_link)

[AshPolicyAccess.Check.ActorAttribute](external_link)

[AshPolicyAccess.Check.ActorAttributeMatchesRecord](external_link)

Simple equality check between a field on the actor and a field on the record

[AshPolicyAccess.Check.AttributeBuiltInChecks](external_link)

[AshPolicyAccess.Check.BuiltInChecks](external_link)

The global authorization checks built into ash

[AshPolicyAccess.Check.Static](external_link)

[AshPolicyAccess.Checker](external_link)

Determines if a set of authorization requests can be met or not.

[AshPolicyAccess.Dsl](external_link)

[AshPolicyAccess.FilterCheck](external_link)

[AshPolicyAccess.Forbidden](external_link)

Raised when authorization for an action fails

[AshPolicyAccess.Policy](external_link)

[AshPolicyAccess.Policy.Check](external_link)

[AshPolicyAccess.Report](external_link)

[AshPolicyAccess.SimpleCheck](external_link)
