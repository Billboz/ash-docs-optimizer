# DSL: AshJsonApi.Domain — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) DSL: AshJsonApi.Domain
  - __ json_api
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ json_api.open_api
    - __ Examples
    - __ Options
  - __ json_api.routes
    - __ Nested DSLs
    - __ Examples
  - __ json_api.routes.base_route
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
  - __ json_api.routes.base_route.get
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.base_route.index
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.base_route.post
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.base_route.patch
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.base_route.delete
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.base_route.related
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.base_route.relationship
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.base_route.post_to_relationship
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.base_route.patch_relationship
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.base_route.delete_from_relationship
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.base_route.route
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection
  - __ json_api.routes.get
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.index
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.post
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.patch
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.delete
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.related
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.relationship
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.post_to_relationship
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.patch_relationship
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.delete_from_relationship
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ json_api.routes.route
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshJsonApi.Domain

The entrypoint for adding JSON:API behavior to an Ash domain

##  __ json_api

Global configuration for JSON:API

###  __ Nested DSLs

  * open_api
  * routes
    * base_route
      * get
      * index
      * post
      * patch
      * delete
      * related
      * relationship
      * post_to_relationship
      * patch_relationship
      * delete_from_relationship
      * route
    * get
    * index
    * post
    * patch
    * delete
    * related
    * relationship
    * post_to_relationship
    * patch_relationship
    * delete_from_relationship
    * route



###  __ Examples
    
    
    json_api do
      prefix "/json_api"
      log_errors? true
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`router`| `atom`| | The router that you created for this Domain. Used by test helpers to send requests  
`show_raised_errors?`| `boolean`| `false`| For security purposes, if an error is _raised_ then Ash simply shows a generic error. If you want to show those errors, set this to true.  
`prefix`| `String.t`| | The route prefix at which you are serving the JSON:API  
`serve_schema?`| `boolean`| `false`| Whether or not create a /schema route that serves the JSON schema of your API  
`authorize?`| `boolean`| `true`| Whether or not to perform authorization on requests.  
`log_errors?`| `boolean`| `true`| Whether or not to log any errors produced  
`include_nil_values?`| `boolean`| `true`| Whether or not to include properties for values that are nil in the JSON output  
  
##  __ json_api.open_api

OpenAPI configurations

###  __ Examples
    
    
    json_api do
      ...
      open_api do
        tag "Users"
        group_by :api
      end
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`tag`| `String.t`| | Tag to be used when used by :group_by  
`group_by`| `:domain | :resource`| `:resource`| Group by :domain or :resource  
  
##  __ json_api.routes

Configure the routes that will be exposed via the JSON:API

###  __ Nested DSLs

  * base_route
    * get
    * index
    * post
    * patch
    * delete
    * related
    * relationship
    * post_to_relationship
    * patch_relationship
    * delete_from_relationship
    * route
  * get
  * index
  * post
  * patch
  * delete
  * related
  * relationship
  * post_to_relationship
  * patch_relationship
  * delete_from_relationship
  * route



###  __ Examples
    
    
    routes do
      base "/posts"
    
      get :read
      get :me, route: "/me"
      index :read
      post :confirm_name, route: "/confirm_name"
      patch :update
      related :comments, :read
      relationship :comments, :read
      post_to_relationship :comments
      patch_relationship :comments
      delete_from_relationship :comments
    end
    

##  __ json_api.routes.base_route
    
    
    base_route route, resource \\ nil

Sets a prefix for a list of contained routes

###  __ Nested DSLs

  * get
  * index
  * post
  * patch
  * delete
  * related
  * relationship
  * post_to_relationship
  * patch_relationship
  * delete_from_relationship
  * route



###  __ Examples
    
    
    base_route "/posts" do
      index :read
      get :read
    end
    
    base_route "/comments" do
      index :read
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| | The route prefix to use for contained routes  
`resource`| `module`| | The resource that the contained routes will use by default  
  
##  __ json_api.routes.base_route.get
    
    
    get resource \\ nil, action

A GET route to retrieve a single record

###  __ Examples
    
    
    get :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| `"/:id"`| The path of the route  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.base_route.index
    
    
    index resource \\ nil, action

A GET route to retrieve a list of records

###  __ Examples
    
    
    index :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`paginate?`| `boolean`| `true`|   
`route`| `String.t`| `"/"`| The path of the route  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.base_route.post
    
    
    post resource \\ nil, action

A POST route to create a record

###  __ Examples
    
    
    post :create

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| `"/"`| The path of the route  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
`relationship_arguments`| `list(atom | {:id, atom})`| `[]`| Arguments to be used to edit relationships. See the [relationships guide](external_link) for more.  
`upsert?`| `boolean`| `false`| Whether or not to use the `upsert?: true` option when calling [`Ash.create/2`](3.4.1/Ash.html#create/2).  
`upsert_identity`| `atom`| `false`| Which identity to use for the upsert  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.base_route.patch
    
    
    patch resource \\ nil, action

A PATCH route to update a record

###  __ Examples
    
    
    patch :update

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`relationship_arguments`| `any`| `[]`| Arguments to be used to edit relationships. See the [relationships guide](external_link) for more.  
`read_action`| `atom`| | The read action to use to look the record up before updating  
`route`| `String.t`| `"/:id"`| The path of the route  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.base_route.delete
    
    
    delete resource \\ nil, action

A DELETE route to destroy a record

###  __ Examples
    
    
    delete :destroy

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`read_action`| `atom`| | The read action to use to look the record up before updating  
`route`| `String.t`| `"/:id"`| The path of the route  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.base_route.related
    
    
    related resource \\ nil, relationship, action

A GET route to read the related resources of a relationship

###  __ Examples
    
    
    related :comments, :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`relationship`| `atom`| |   
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| | The path of the route - Defaults to /:id/[relationship_name]  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.base_route.relationship
    
    
    relationship resource \\ nil, relationship, action

A READ route to read the relationship, returns resource identifiers.

###  __ Examples
    
    
    relationship :comments, :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`relationship`| `atom`| |   
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| | The path of the route - Defaults to /:id/relationships/[relationship_name]  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.base_route.post_to_relationship
    
    
    post_to_relationship resource \\ nil, relationship

A POST route to create related entities using resource identifiers

###  __ Examples
    
    
    post_to_relationship :comments

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`relationship`| `atom`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| | The path of the route - Defaults to /:id/relationships/[relationship_name]  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.base_route.patch_relationship
    
    
    patch_relationship resource \\ nil, relationship

A PATCH route to update a relationship using resource identifiers

###  __ Examples
    
    
    patch_relationship :comments

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`relationship`| `atom`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| | The path of the route - Defaults to /:id/relationships/[relationship_name]  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.base_route.delete_from_relationship
    
    
    delete_from_relationship resource \\ nil, relationship

A DELETE route to remove related entities using resource identifiers

###  __ Examples
    
    
    delete_from_relationship :comments

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`relationship`| `atom`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| | The path of the route - Defaults to /:id/relationships/[relationship_name]  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.base_route.route
    
    
    route resource \\ nil, method, route, action

A route for a generic action.

###  __ Examples
    
    
    route :get, "say_hi/:name", :say_hello"

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`method`| `atom`| | The HTTP method for the route, e.g `:get`, or `:post`  
`route`| `String.t`| | The path of the route  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`wrap_in_result?`| `boolean`| `false`| Whether or not the action result should be wrapped in `{result: <result>}`  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

###  __ Introspection

Target: [`AshJsonApi.Domain.BaseRoute`](external_link)

##  __ json_api.routes.get
    
    
    get resource, action

A GET route to retrieve a single record

###  __ Examples
    
    
    get :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| `"/:id"`| The path of the route  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.index
    
    
    index resource, action

A GET route to retrieve a list of records

###  __ Examples
    
    
    index :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`paginate?`| `boolean`| `true`|   
`route`| `String.t`| `"/"`| The path of the route  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.post
    
    
    post resource, action

A POST route to create a record

###  __ Examples
    
    
    post :create

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| `"/"`| The path of the route  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
`relationship_arguments`| `list(atom | {:id, atom})`| `[]`| Arguments to be used to edit relationships. See the [relationships guide](external_link) for more.  
`upsert?`| `boolean`| `false`| Whether or not to use the `upsert?: true` option when calling [`Ash.create/2`](3.4.1/Ash.html#create/2).  
`upsert_identity`| `atom`| `false`| Which identity to use for the upsert  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.patch
    
    
    patch resource, action

A PATCH route to update a record

###  __ Examples
    
    
    patch :update

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`relationship_arguments`| `any`| `[]`| Arguments to be used to edit relationships. See the [relationships guide](external_link) for more.  
`read_action`| `atom`| | The read action to use to look the record up before updating  
`route`| `String.t`| `"/:id"`| The path of the route  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.delete
    
    
    delete resource, action

A DELETE route to destroy a record

###  __ Examples
    
    
    delete :destroy

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`read_action`| `atom`| | The read action to use to look the record up before updating  
`route`| `String.t`| `"/:id"`| The path of the route  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.related
    
    
    related resource, relationship, action

A GET route to read the related resources of a relationship

###  __ Examples
    
    
    related :comments, :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`relationship`| `atom`| |   
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| | The path of the route - Defaults to /:id/[relationship_name]  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.relationship
    
    
    relationship resource, relationship, action

A READ route to read the relationship, returns resource identifiers.

###  __ Examples
    
    
    relationship :comments, :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`relationship`| `atom`| |   
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| | The path of the route - Defaults to /:id/relationships/[relationship_name]  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.post_to_relationship
    
    
    post_to_relationship resource, relationship

A POST route to create related entities using resource identifiers

###  __ Examples
    
    
    post_to_relationship :comments

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`relationship`| `atom`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| | The path of the route - Defaults to /:id/relationships/[relationship_name]  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.patch_relationship
    
    
    patch_relationship resource, relationship

A PATCH route to update a relationship using resource identifiers

###  __ Examples
    
    
    patch_relationship :comments

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`relationship`| `atom`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| | The path of the route - Defaults to /:id/relationships/[relationship_name]  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.delete_from_relationship
    
    
    delete_from_relationship resource, relationship

A DELETE route to remove related entities using resource identifiers

###  __ Examples
    
    
    delete_from_relationship :comments

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`relationship`| `atom`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`route`| `String.t`| | The path of the route - Defaults to /:id/relationships/[relationship_name]  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

##  __ json_api.routes.route
    
    
    route resource, method, route, action

A route for a generic action.

###  __ Examples
    
    
    route :get, "say_hi/:name", :say_hello"

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| | The resource that the route's action is defined on  
`method`| `atom`| | The HTTP method for the route, e.g `:get`, or `:post`  
`route`| `String.t`| | The path of the route  
`action`| `atom`| | The action to call when this route is hit  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`wrap_in_result?`| `boolean`| `false`| Whether or not the action result should be wrapped in `{result: <result>}`  
`default_fields`| `list(atom)`| | A list of fields to be shown in the attributes of the called route  
`primary?`| `boolean`| `false`| Whether or not this is the route that should be linked to by default when rendering links to this type of route  
`metadata`| `(any, any, any -> any)`| | A function to generate arbitrary top-level metadata for the JSON:API response  
`modify_conn`| `(any, any, any, any -> any)`| | A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`  
`query_params`| `list(atom)`| `[]`| A list of action inputs to accept as query parameters.  
`name`| `String.t`| | A globally unique name for this route, to be used when generating docs and open api specifications  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
###  __ Introspection

Target: [`AshJsonApi.Resource.Route`](external_link)

[ ← Previous Page  DSL: AshJsonApi.Resource  ](external_link)

[ Next Page →  Change Log  ](external_link)
