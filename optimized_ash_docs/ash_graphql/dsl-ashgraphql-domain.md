# DSL: AshGraphql.Domain — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) DSL: AshGraphql.Domain
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

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshGraphql.Domain

The entrypoint for adding GraphQL behavior to an Ash domain

##  __ graphql

Domain level configuration for GraphQL

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



###  __ Examples
    
    
    graphql do
      authorize? false # To skip authorization for this domain
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`authorize?`| `boolean`| `true`| Whether or not to perform authorization for this domain  
`tracer`| `atom`| | A tracer to use to trace execution in the graphql. Will use `config :ash, :tracer` if it is set.  
`root_level_errors?`| `boolean`| `false`| By default, mutation errors are shown in their result object's errors key, but this setting places those errors in the top level errors list  
`error_handler`| `mfa`| `{AshGraphql.DefaultErrorHandler, :handle_error, []}`| Set an MFA to intercept/handle any errors that are generated.  
`show_raised_errors?`| `boolean`| `false`| For security purposes, if an error is _raised_ then Ash simply shows a generic error. If you want to show those errors, set this to true.  
  
##  __ graphql.queries

Queries to expose for the resource.

###  __ Nested DSLs

  * get
  * read_one
  * list
  * action



###  __ Examples
    
    
    queries do
      get Post, :get_post, :read
      read_one User, :current_user, :current_user
      list Post, :list_posts, :read
    end
    

##  __ graphql.queries.get
    
    
    get resource, name, action

A query to fetch a record by primary key

###  __ Examples
    
    
    get :get_post, :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the action is defined on  
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
    
    
    read_one resource, name, action

A query to fetch a record

###  __ Examples
    
    
    read_one :current_user, :current_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the action is defined on  
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
    
    
    list resource, name, action

A query to fetch a list of records

###  __ Examples
    
    
    list :list_posts, :read
    
    
    list :list_posts_paginated, :read, relay?: true

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the action is defined on  
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
    
    
    action resource, name, action

Runs a generic action

###  __ Examples
    
    
    action :check_status, :check_status

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the action is defined on  
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
    
    
    create resource, name, action

A mutation to create a record

###  __ Examples
    
    
    create :create_post, :create

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the action is defined on  
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
    
    
    update resource, name, action

A mutation to update a record

###  __ Examples
    
    
    update :update_post, :update

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the action is defined on  
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
    
    
    destroy resource, name, action

A mutation to destroy a record

###  __ Examples
    
    
    destroy :destroy_post, :destroy

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the action is defined on  
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
    
    
    action resource, name, action

Runs a generic action

###  __ Examples
    
    
    action :check_status, :check_status

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the action is defined on  
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

[ ← Previous Page  Upgrading to 1.0  ](external_link)

[ Next Page →  DSL: AshGraphql.Resource  ](external_link)
