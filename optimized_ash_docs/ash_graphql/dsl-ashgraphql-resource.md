# DSL: AshGraphql.Resource — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) DSL: AshGraphql.Resource
  - __ graphql
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ graphql.queries
    - __ Nested DSLs
    - __ Examples
  - __ graphql.queries.get
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ graphql.queries.read_one
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ graphql.queries.list
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ graphql.queries.action
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ graphql.mutations
    - __ Nested DSLs
    - __ Examples
  - __ graphql.mutations.create
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ graphql.mutations.update
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ graphql.mutations.destroy
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ graphql.mutations.action
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ graphql.managed_relationships
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ graphql.managed_relationships.managed_relationship
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshGraphql.Resource

This Ash resource extension adds configuration for exposing a resource in a graphql.

##  __ graphql

Configuration for a given resource in graphql

###  __ Nested DSLs

  * queries
    * get
    * read_one
    * list
    * action
  * mutations
    * create
    * update
    * destroy
    * action
  * managed_relationships
    * managed_relationship



###  __ Examples
    
    
    graphql do
      type :post
    
      queries do
        get :get_post, :read
        list :list_posts, :read
      end
    
      mutations do
        create :create_post, :create
        update :update_post, :update
        destroy :destroy_post, :destroy
      end
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`type`| `atom`| | The type to use for this entity in the graphql schema. If the resource doesn't have a type, it also needs to have `generate_object? false` and can only expose generic action queries.  
`derive_filter?`| `boolean`| `true`| Set to false to disable the automatic generation of a filter input for read actions.  
`derive_sort?`| `boolean`| `true`| Set to false to disable the automatic generation of a sort input for read actions.  
`encode_primary_key?`| `boolean`| `true`| For resources with composite primary keys, or primary keys not called `:id`, this will cause the id to be encoded as a single `id` attribute, both in the representation of the resource and in get requests  
`relationships`| `list(atom)`| | A list of relationships to include on the created type. Defaults to all public relationships where the destination defines a graphql type.  
`paginate_relationship_with`| `keyword`| `[]`| A keyword list indicating which kind of pagination should be used for each `has_many` and `many_to_many` relationships, e.g. `related_things: :keyset, other_related_things: :offset`. Valid pagination values are `nil`, `:offset`, `:keyset` and `:relay`.  
`field_names`| `keyword`| | A keyword list of name overrides for attributes.  
`hide_fields`| `list(atom)`| | A list of attributes to hide from the domain  
`show_fields`| `list(atom)`| | A list of attributes to show in the domain. If not specified includes all (excluding `hide_fiels`).  
`argument_names`| `keyword`| | A nested keyword list of action names, to argument name remappings. i.e `create: [arg_name: :new_name]`  
`keyset_field`| `atom`| | If set, the keyset will be displayed on all read actions in this field. It will be `nil` unless at least one of the read actions on a resource uses keyset pagination or it is the result of a mutation  
`attribute_types`| `keyword`| | A keyword list of type overrides for attributes. The type overrides should refer to types available in the graphql (absinthe) schema. `list_of/1` and `non_null/1` helpers can be used.  
`attribute_input_types`| `keyword`| | A keyword list of input type overrides for attributes. The type overrides should refer to types available in the graphql (absinthe) schema. `list_of/1` and `non_null/1` helpers can be used.  
`argument_input_types`| `keyword`| | A keyword list of actions and their input type overrides for arguments. The type overrides should refer to types available in the graphql (absinthe) schema. `list_of/1` and `non_null/1` helpers can be used.  
`primary_key_delimiter`| `String.t`| `"~"`| If a composite primary key exists, this can be set to determine delimiter used in the `id` field value.  
`depth_limit`| `integer`| | A simple way to prevent massive queries.  
`generate_object?`| `boolean`| `true`| Whether or not to create the GraphQL object, this allows you to manually create the GraphQL object.  
`filterable_fields`| `list(atom)`| | A list of fields that are allowed to be filtered on. Defaults to all filterable fields for which a GraphQL type can be created.  
`nullable_fields`| `atom | list(atom)`| | Mark fields as nullable even if they are required. This is useful when using field policies. See the authorization guide for more.  
  
##  __ graphql.queries

Queries (read actions) to expose for the resource.

###  __ Nested DSLs

  * get
  * read_one
  * list
  * action



###  __ Examples
    
    
    queries do
      get :get_post, :read
      read_one :current_user, :current_user
      list :list_posts, :read
    end
    

##  __ graphql.queries.get
    
    
    get name, action

A query to fetch a record by primary key

###  __ Examples
    
    
    get :get_post, :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| `:get`| The name to use for the query.  
`action`| `atom`| | The action to use for the query.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`identity`| `atom`| | The identity to use for looking up the record. Pass `false` to not use an identity.  
`allow_nil?`| `boolean`| `true`| Whether or not the action can return nil.  
`modify_resolution`| `mfa`| | An MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. See the [the guide](external_link) for more.  
`type_name`| `atom`| | Override the type name returned by this query. Must be set if the read action has `metadata` that is not hidden via the `show_metadata` key.  
`description`| `String.t`| | The query description that gets shown in the Graphql schema. If not provided, the action description will be used.  
`metadata_names`| `keyword`| `[]`| Name overrides for metadata fields on the read action.  
`metadata_types`| `keyword`| `[]`| Type overrides for metadata fields on the read action.  
`show_metadata`| `list(atom)`| | The metadata attributes to show. Defaults to all.  
`as_mutation?`| `boolean`| `false`| Places the query in the `mutations` key instead. Not typically necessary, but is often paired with `as_mutation?`. See the [the guide](external_link) for more.  
`relay_id_translations`| `keyword`| `[]`| A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](external_link) for more.  
`hide_inputs`| `list(atom)`| `[]`| A list of inputs to hide from the mutation.  
  
###  __ Introspection

Target: [`AshGraphql.Resource.Query`](external_link)

##  __ graphql.queries.read_one
    
    
    read_one name, action

A query to fetch a record

###  __ Examples
    
    
    read_one :current_user, :current_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| `:get`| The name to use for the query.  
`action`| `atom`| | The action to use for the query.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`allow_nil?`| `boolean`| `true`| Whether or not the action can return nil.  
`type_name`| `atom`| | Override the type name returned by this query. Must be set if the read action has `metadata` that is not hidden via the `show_metadata` key.  
`description`| `String.t`| | The query description that gets shown in the Graphql schema. If not provided, the action description will be used.  
`metadata_names`| `keyword`| `[]`| Name overrides for metadata fields on the read action.  
`metadata_types`| `keyword`| `[]`| Type overrides for metadata fields on the read action.  
`show_metadata`| `list(atom)`| | The metadata attributes to show. Defaults to all.  
`as_mutation?`| `boolean`| `false`| Places the query in the `mutations` key instead. Not typically necessary, but is often paired with `as_mutation?`. See the [the guide](external_link) for more.  
`relay_id_translations`| `keyword`| `[]`| A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](external_link) for more.  
`hide_inputs`| `list(atom)`| `[]`| A list of inputs to hide from the mutation.  
  
###  __ Introspection

Target: [`AshGraphql.Resource.Query`](external_link)

##  __ graphql.queries.list
    
    
    list name, action

A query to fetch a list of records

###  __ Examples
    
    
    list :list_posts, :read
    
    
    list :list_posts_paginated, :read, relay?: true

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| `:get`| The name to use for the query.  
`action`| `atom`| | The action to use for the query.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`relay?`| `boolean`| `false`| If true, the graphql queries/resolvers for this resource will be built to honor the relay specification. See [the relay guide](external_link) for more.  
`paginate_with`| `:keyset | :offset | nil`| `:keyset`| Determine the pagination strategy to use, if multiple are available. If `nil`, no pagination is applied, otherwise the given strategy is used.  
`type_name`| `atom`| | Override the type name returned by this query. Must be set if the read action has `metadata` that is not hidden via the `show_metadata` key.  
`description`| `String.t`| | The query description that gets shown in the Graphql schema. If not provided, the action description will be used.  
`metadata_names`| `keyword`| `[]`| Name overrides for metadata fields on the read action.  
`metadata_types`| `keyword`| `[]`| Type overrides for metadata fields on the read action.  
`show_metadata`| `list(atom)`| | The metadata attributes to show. Defaults to all.  
`as_mutation?`| `boolean`| `false`| Places the query in the `mutations` key instead. Not typically necessary, but is often paired with `as_mutation?`. See the [the guide](external_link) for more.  
`relay_id_translations`| `keyword`| `[]`| A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](external_link) for more.  
`hide_inputs`| `list(atom)`| `[]`| A list of inputs to hide from the mutation.  
  
###  __ Introspection

Target: [`AshGraphql.Resource.Query`](external_link)

##  __ graphql.queries.action
    
    
    action name, action

Runs a generic action

###  __ Examples
    
    
    action :check_status, :check_status

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| `:get`| The name to use for the query.  
`action`| `atom`| | The action to use for the query.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | The description that gets shown in the Graphql schema. If not provided, the action description will be used.  
`hide_inputs`| `list(atom)`| `[]`| Inputs to hide in the mutation/query  
`relay_id_translations`| `keyword`| `[]`| A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](external_link) for more.  
  
###  __ Introspection

Target: [`AshGraphql.Resource.Action`](external_link)

##  __ graphql.mutations

Mutations (create/update/destroy actions) to expose for the resource.

###  __ Nested DSLs

  * create
  * update
  * destroy
  * action



###  __ Examples
    
    
    mutations do
      create :create_post, :create
      update :update_post, :update
      destroy :destroy_post, :destroy
    end
    

##  __ graphql.mutations.create
    
    
    create name, action

A mutation to create a record

###  __ Examples
    
    
    create :create_post, :create

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| `:get`| The name to use for the mutation.  
`action`| `atom`| | The action to use for the mutation.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | The mutation description that gets shown in the Graphql schema. If not provided, the action description will be used.  
`upsert?`| `boolean`| `false`| Whether or not to use the `upsert?: true` option when calling `YourDomain.create/2`.  
`upsert_identity`| `atom`| `false`| Which identity to use for the upsert  
`modify_resolution`| `mfa`| | An MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. See the [the guide](external_link) for more.  
`hide_inputs`| `list(atom)`| `[]`| A list of inputs to hide from the mutation.  
`relay_id_translations`| `keyword`| `[]`| A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](external_link) for more.  
  
###  __ Introspection

Target: [`AshGraphql.Resource.Mutation`](external_link)

##  __ graphql.mutations.update
    
    
    update name, action

A mutation to update a record

###  __ Examples
    
    
    update :update_post, :update

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| `:get`| The name to use for the mutation.  
`action`| `atom`| | The action to use for the mutation.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`identity`| `atom`| | The identity to use to fetch the record to be updated. Use `false` if no identity is required.  
`read_action`| `atom`| | The read action to use to fetch the record to be updated. Defaults to the primary read action.  
`hide_inputs`| `list(atom)`| | A list of inputs to hide from the mutation.  
`relay_id_translations`| `keyword`| `[]`| A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](external_link) for more.  
  
###  __ Introspection

Target: [`AshGraphql.Resource.Mutation`](external_link)

##  __ graphql.mutations.destroy
    
    
    destroy name, action

A mutation to destroy a record

###  __ Examples
    
    
    destroy :destroy_post, :destroy

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| `:get`| The name to use for the mutation.  
`action`| `atom`| | The action to use for the mutation.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`read_action`| `atom`| | The read action to use to fetch the record to be destroyed. Defaults to the primary read action.  
`identity`| `atom`| | The identity to use to fetch the record to be destroyed. Use `false` if no identity is required.  
`hide_inputs`| `list(atom)`| | A list of inputs to hide from the mutation.  
`relay_id_translations`| `keyword`| `[]`| A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](external_link) for more.  
  
###  __ Introspection

Target: [`AshGraphql.Resource.Mutation`](external_link)

##  __ graphql.mutations.action
    
    
    action name, action

Runs a generic action

###  __ Examples
    
    
    action :check_status, :check_status

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| `:get`| The name to use for the query.  
`action`| `atom`| | The action to use for the query.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | The description that gets shown in the Graphql schema. If not provided, the action description will be used.  
`hide_inputs`| `list(atom)`| `[]`| Inputs to hide in the mutation/query  
`relay_id_translations`| `keyword`| `[]`| A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](external_link) for more.  
  
###  __ Introspection

Target: [`AshGraphql.Resource.Action`](external_link)

##  __ graphql.managed_relationships

Generates input objects for `manage_relationship` arguments on resource actions.

###  __ Nested DSLs

  * managed_relationship



###  __ Examples
    
    
    managed_relationships do
      manage_relationship :create_post, :comments
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`auto?`| `boolean`| `true`| Automatically derive types for all arguments that have a `manage_relationship` call change.  
  
##  __ graphql.managed_relationships.managed_relationship
    
    
    managed_relationship action, argument

Instructs ash_graphql that a given argument with a `manage_relationship` change should have its input objects derived automatically from the potential actions to be called.

For example, given an action like:
    
    
    actions do
    create :create do
    argument :comments, {:array, :map}
    
    change manage_relationship(:comments, type: :direct_control) # <- we look for this change with a matching argument name
    end
    end

You could add the following managed_relationship
    
    
    graphql do
    ...
    
    managed_relationships do
    managed_relationship :create, :comments
    end
    end

By default, the `{:array, :map}` would simply be a `json[]` type. If the argument name is placed in this list, all of the potential actions that could be called will be combined into a single input object. If there are type conflicts (for example, if the input could create or update a record, and the create and update actions have an argument of the same name but with a different type), a warning is emitted at compile time and the first one is used. If that is insufficient, you will need to do one of the following:

1.) provide the `:types` option to the `managed_relationship` constructor (see that option for more) 2.) define a custom type, with a custom input object (see the custom types guide), and use that custom type instead of `:map` 3.) change your actions to not have overlapping inputs with different types

Since managed relationships can ultimately call multiple actions, there is the possibility of field type conflicts. Use the `types` option to determine the type of fields and remove the conflict warnings.

For `non_null` use `{:non_null, type}`, and for a list, use `{:array, type}`, for example:

`{:non_null, {:array, {:non_null, :string}}}` for a non null list of non null strings.

To _remove_ a key from the input object, simply pass `nil` as the type.

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`action`| `atom`| | The action that accepts the argument  
`argument`| `atom`| | The argument for which an input object should be derived.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`lookup_with_primary_key?`| `boolean`| | If the managed_relationship has `on_lookup` behavior, this option determines whether or not the primary key is provided in the input object for looking up.  
`lookup_identities`| `list(atom)`| | Determines which identities are provided in the input object for looking up, if there is `on_lookup` behavior. Defalts to the `use_identities` option.  
`type_name`| `atom`| | The name of the input object that will be derived. Defaults to `<action_type>_<resource>_<argument_name>_input`  
`types`| `any`| | A keyword list of field names to their graphql type identifiers.  
`ignore?`| `boolean`| `false`| Use this to ignore a given managed relationship, preventing `auto? true` from deriving a type for it.  
  
###  __ Introspection

Target: [`AshGraphql.Resource.ManagedRelationship`](external_link)

[ ← Previous Page  DSL: AshGraphql.Domain  ](external_link)

[ Next Page →  Change Log  ](external_link)
