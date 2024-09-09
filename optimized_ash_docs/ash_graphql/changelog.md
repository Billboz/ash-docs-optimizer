# Change Log — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) Change Log
  - __ [v1.3.3](external_link) (2024-08-26)
    - __ Bug Fixes:
  - __ [v1.3.2](external_link) (2024-08-16)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.3.1](external_link) (2024-08-02)
    - __ Bug Fixes:
  - __ [v1.3.0](external_link) (2024-08-01)
    - __ Features:
    - __ Bug Fixes:
  - __ [v1.2.1](external_link) (2024-07-18)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.2.0](external_link) (2024-06-17)
    - __ Features:
    - __ Bug Fixes:
  - __ [v1.1.1](external_link) (2024-06-02)
    - __ Features:
    - __ Bug Fixes:
  - __ [v1.1.0](external_link) (2024-05-24)
    - __ Features:
  - __ [v1.0.1](external_link) (2024-05-23)
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.0.0](external_link) (2024-04-27)
    - __ Breaking Changes:
    - __ Improvements:

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](external_link) for commit guidelines.

##  __ [v1.3.3](external_link) (2024-08-26)

###  __ Bug Fixes:

  * append new domain to list when extending



##  __ [v1.3.2](external_link) (2024-08-16)

###  __ Bug Fixes:

  * match on action in error message properly



###  __ Improvements:

  * add schema codegen features & guide

  * support new struct types in type generation

  * support new struct fields constraint

  * Set up GraphQL schema file in the web module namespace (#205)




##  __ [v1.3.1](external_link) (2024-08-02)

###  __ Bug Fixes:

  * use `.has_expression?/0` instead of [`function_exported?/3`](external_link)

  * error handling list of atoms (#204)

  * error handling list of atoms




##  __ [v1.3.0](external_link) (2024-08-01)

###  __ Features:

  * [`Ash.Type.File`](3.4.1/Ash.Type.File.html) compatibility (#202)



###  __ Bug Fixes:

  * try to resolve compilation issues w/ `Code.ensure_compiled!`



##  __ [v1.2.1](external_link) (2024-07-18)

###  __ Bug Fixes:

  * upgrade ash dependency for bulk action bug fix

  * use checked constraints (#187)

  * don't assume `filter` is non-nil for gets

  * properly interpolate action in conflict messages

  * add resource query to action struct (#178)




###  __ Improvements:

  * add extension installation code

  * add igniter-backed installer

  * add `nullable_fields?` for easily marking fields as nullable

  * only define `managed_relationship` mutations when necessary




##  __ [v1.2.0](external_link) (2024-06-17)

###  __ Features:

  * argument_input_types (#176)

  * argument_input_types




###  __ Bug Fixes:

  * better type handling around empty types

  * don't generate empty input objects for embeds




##  __ [v1.1.1](external_link) (2024-06-02)

###  __ Features:

  * relationship pagination (#166)



###  __ Bug Fixes:

  * honor read_action for update/destroy mutations



##  __ [v1.1.0](external_link) (2024-05-24)

###  __ Features:

  * [AshGraphql.Domain] support queries/mutations on the domain



##  __ [v1.0.1](external_link) (2024-05-23)

###  __ Features:

  * allow passing custom descriptions to queries and mutations (#138)



###  __ Bug Fixes:

  * don't deduplicate argument types by argument name (#162)

  * use Ash.EmbeddableType.ShadowDomain (#156)

  * accepted attributes don't have to be `public?`




###  __ Improvements:

  * deduplicate map types across domains (#164)

  * Implement AshGraphql.Error for Ash.Error.Query.ReadActionRequiresActor (#154)

  * make mutation result errors list non-nullable (#144)

  * make mutation result errors list non-nullable




##  __ [v1.0.0](external_link) (2024-04-27)

The changelog is being restarted. See `/documentation/1.0-CHANGELOG.md` for previous changelogs.

###  __ Breaking Changes:

  * [AshGraphql.Resource] `managed_relationship` arguments automatically get rich types derived for them
  * [AshGraphql.Type] No longer automagically derive types. Only types defined in [`Ash.Type.NewType`](3.4.1/Ash.Type.NewType.html) that implement `AshGrahql.Type` will get types derived for them.



###  __ Improvements:

  * [AshGraphql.Resolver] Bulk actions are automatically used for create/update/destroy actions. This means far fewer queries made in general.
  * [AshGraphql.Type] add `graphql_define_type?/1` callback for graphql types
  * [AshGrapqhl.Resource] support generic actions with no return type



[ ← Previous Page  DSL: AshGraphql.Resource  ](external_link)
