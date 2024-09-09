# DSL: AshPaperTrail.Resource — ash_paper_trail v0.1.4

Project: ash_paper_trail v0.1.4

## Table of Contents

- [ __ View Source ](external_link) DSL: AshPaperTrail.Resource
  - __ paper_trail
    - __ Nested DSLs
    - __ Options
  - __ paper_trail.belongs_to_actor
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash_paper_trail __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshPaperTrail.Resource

Documentation for [`AshPaperTrail.Resource`](external_link).

##  __ paper_trail

A section for configuring how versioning is derived for the resource.

###  __ Nested DSLs

  * belongs_to_actor



###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`attributes_as_attributes`| `list(atom)`| `[]`| A set of attributes that should be set as attributes on the version resource, instead of stored in the freeform `changes` map attribute.  
`change_tracking_mode`| `:snapshot | :changes_only | :full_diff`| `:snapshot`| Changes are stored in a map attribute called `changes`. The `change_tracking_mode` determines what's stored. See the getting started guide for more.  
`ignore_attributes`| `list(atom)`| `[]`| A list of attributes that should be ignored. Typically you'll want to ignore your timestamps. The primary key is always ignored.  
`mixin`| `atom | mfa`| | A module that defines a `using` macro or {module, function, arguments} tuple that will be mixed into the version resource.  
`on_actions`| `list(atom)`| | Which actions should produce new versions. By default, all create/update actions will produce new versions.  
`reference_source?`| `boolean`| `true`| Whether or not to create a foreign key reference from the version to the source. This should be set to `false` if you are allowing actual deletion of data. Only relevant for resources using the AshPostgres data layer.  
`relationship_opts`| `keyword`| | Options to pass to the has_many :paper_trail_versions relationship that is created on this resource. For example, `public?: true` to expose the relationship over graphql. See `[Ash.Resource.Dsl.relationships.has_many](dsl-ash-resource.html#relationships-has_many)`.  
`store_action_name?`| `boolean`| `false`| Whether or not to add the `version_action_name` attribute to the version resource. This is useful for auditing purposes. The `version_action_type` attribute is always stored.  
`version_extensions`| `keyword`| `[]`| Extensions that should be used by the version resource. For example: `extensions: [AshGraphql.Resource], notifier: [Ash.Notifiers.PubSub]`  
  
##  __ paper_trail.belongs_to_actor
    
    
    belongs_to_actor name, destination

Creates a belongs_to relationship for the actor resource. When creating a new version, if the actor on the action is set and matches the resource type, the version will be related to the actor. If your actors are polymorphic or varying types, declare a belongs_to_actor for each type.

A reference is also created with `on_delete: :nilify` and `on_update: :update`

If you need more complex relationships, set `define_attribute? false` and add the relationship via a mixin.

If your actor is not a resource, add a mixin and with a change for all creates that sets the actor's to one your attributes. The actor on the version changeset is set.

###  __ Examples
    
    
    belongs_to_actor :user, MyApp.Users.User, domain: MyApp.Users

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the relationship to use for the actor (e.g. :user)  
`destination`| `module`| | The resource of the actor (e.g. MyApp.Users.User)  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`allow_nil?`| `boolean`| `true`| Whether this relationship must always be present, e.g: must be included on creation, and never removed (it may be modified). The generated attribute will not allow nil values.  
`domain`| `atom`| | The Domain module to use when working with the related entity.  
`attribute_type`| `any`| `:uuid`| The type of the generated created attribute. See [`Ash.Type`](3.1.2/Ash.Type.html) for more.  
`public?`| `boolean`| `false`| Whether this relationship should be included in public interfaces  
`define_attribute?`| `boolean`| `true`| If set to `false` an attribute is not created on the resource for this relationship, and one must be manually added in `attributes`, invalidating many other options.  
  
###  __ Introspection

Target: [`AshPaperTrail.Resource.BelongsToActor`](external_link)

[ ← Previous Page  Getting started with AshPaperTrail  ](external_link)

[ Next Page →  DSL: AshPaperTrail.Domain  ](external_link)
