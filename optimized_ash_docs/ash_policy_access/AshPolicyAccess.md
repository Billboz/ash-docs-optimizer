# AshPolicyAccess — ash_policy_access v0.1.0

Project: ash_policy_access v0.1.0

## Table of Contents

  - v0.1.0
- ash_policy_access v0.1.0 AshPolicyAccess [ View Source ](external_link)
- TODO: consider this coverage metric when building the test framework
- Link to this section Summary
  - Types
  - Functions
- Link to this section Types
- prepare_instruction()
  - Specs
- request()
  - Specs
- side_load()
  - Specs
- Link to this section Functions
- before_compile_hook(env)
- policies(resource)

[ ash_policy_access ](external_link)

##  v0.1.0 

  * Pages
  * Modules






#  ash_policy_access v0.1.0 AshPolicyAccess [ View Source ](external_link)

Authorization in Ash is done via declaring `rules` for actions, and in the case of stateful actions, via declaring `authoriation_steps` on attributes and relationships.

# TODO: consider this coverage metric when building the test framework

<https://en.wikipedia.org/wiki/Modified_condition/decision_coverage>

#  Link to this section Summary 

##  Types

prepare_instruction()

request()

side_load()

##  Functions

before_compile_hook(env)

policies(resource)

#  Link to this section Types 

Link to this type

# prepare_instruction()

[ View Source ](external_link)

## Specs
    
    
    prepare_instruction() :: side_load()

Link to this type

# request()

[ View Source ](external_link)

## Specs
    
    
    request() :: Ash.Engine.Request.t()

Link to this type

# side_load()

[ View Source ](external_link)

## Specs
    
    
    side_load() :: {:side_load, [Keyword.t](external_link)()}

#  Link to this section Functions 

Link to this function

# before_compile_hook(env)

[ View Source ](external_link)

Link to this function

# policies(resource)

[ View Source ](external_link)
