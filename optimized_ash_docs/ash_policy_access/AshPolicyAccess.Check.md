# AshPolicyAccess.Check — ash_policy_access v0.1.0

Project: ash_policy_access v0.1.0

## Table of Contents

  - v0.1.0
- ash_policy_access v0.1.0 AshPolicyAccess.Check behaviour [ View Source ](external_link)
- Link to this section Summary
  - Types
  - Functions
  - Callbacks
- Link to this section Types
- authorizer()
  - Specs
- options()
  - Specs
- Link to this section Functions
- defines_auto_filter?(module)
- defines_check?(module)
- import_default_checks(opts)
- unimport_checks()
- Link to this section Callbacks
- auto_filter(arg1, authorizer, options)
  - Specs
- check(arg1, list, map, options)
  - Specs
- describe(options)
  - Specs
- strict_check(arg1, authorizer, options)
  - Specs
- type()
  - Specs

[ ash_policy_access ](external_link)

##  v0.1.0 

  * Pages
  * Modules






#  ash_policy_access v0.1.0 AshPolicyAccess.Check behaviour [ View Source ](external_link)

A behaviour for declaring checks, which can be used to easily construct authorization rules.

#  Link to this section Summary 

##  Types

authorizer()

options()

##  Functions

defines_auto_filter?(module)

defines_check?(module)

import_default_checks(opts)

unimport_checks()

##  Callbacks

auto_filter(arg1, authorizer, options)

check(arg1, list, map, options)

describe(options)

strict_check(arg1, authorizer, options)

type()

#  Link to this section Types 

Link to this type

# authorizer()

[ View Source ](external_link)

## Specs
    
    
    authorizer() :: [AshPolicyAccess.Authorizer.t](external_link)()

Link to this type

# options()

[ View Source ](external_link)

## Specs
    
    
    options() :: [Keyword.t](external_link)()

#  Link to this section Functions 

Link to this function

# defines_auto_filter?(module)

[ View Source ](external_link)

Link to this function

# defines_check?(module)

[ View Source ](external_link)

Link to this macro

# import_default_checks(opts)

[ View Source ](external_link) (macro)

Link to this macro

# unimport_checks()

[ View Source ](external_link) (macro)

#  Link to this section Callbacks 

Link to this callback

# auto_filter(arg1, authorizer, options)

[ View Source ](external_link) (optional)

## Specs
    
    
    auto_filter([Ash.actor](Ash.html#t:actor/0)(), authorizer(), options()) :: [Keyword.t](external_link)()

Link to this callback

# check(arg1, list, map, options)

[ View Source ](external_link) (optional)

## Specs
    
    
    check([Ash.actor](Ash.html#t:actor/0)(), [[Ash.record](Ash.html#t:record/0)()], [map](external_link)(), options()) ::
      {:ok, [[Ash.record](Ash.html#t:record/0)()] | [boolean](external_link)()} | {:error, [Ash.error](Ash.html#t:error/0)()}

Link to this callback

# describe(options)

[ View Source ](external_link)

## Specs
    
    
    describe(options()) :: [String.t](external_link)()

Link to this callback

# strict_check(arg1, authorizer, options)

[ View Source ](external_link)

## Specs
    
    
    strict_check([Ash.actor](Ash.html#t:actor/0)(), authorizer(), options()) :: [boolean](external_link)() | :unknown

Link to this callback

# type()

[ View Source ](external_link)

## Specs
    
    
    type() :: :atom
