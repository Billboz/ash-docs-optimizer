# DSL: AshJsonApi.Resource — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) DSL: AshJsonApi.Resource
  - __ json_api
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ json_api.routes
    - __ Nested DSLs
    - __ Examples
    - __ Options
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
  - __ json_api.primary_key
    - __ Examples
    - __ Options

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshJsonApi.Resource

The entrypoint for adding JSON:API behavior to a resource"

##  __ json_api

Configure the resource's behavior in the JSON:API

###  __ Nested DSLs

  * routes
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
  * primary_key



###  __ Examples
    
    
    json_api do
      type "post"
      includes [
        friends: [
          :comments
        ],
        comments: []
      ]
    
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
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`type`| `String.t`| | The resource identifier type of this resource in JSON:API  
`includes`| `any`| `[]`| A keyword list of all paths that are includable from this resource  
`include_nil_values?`| `any`| | Whether or not to include properties for values that are nil in the JSON output  
`default_fields`| `list(atom)`| | The fields to include in the object if the `fields` query parameter does not specify. Defaults to all public  
`derive_sort?`| `boolean`| `true`| Whether or not to derive a sort parameter based on the sortable fields of the resource  
`derive_filter?`| `boolean`| `true`| Whether or not to derive a filter parameter based on the sortable fields of the resource  
  
##  __ json_api.routes

Configure the routes that will be exposed via the JSON:API

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
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`base`| `String.t`| | A base route for the resource, e.g `"/users"`  
  
##  __ json_api.routes.get
    
    
    get action

A GET route to retrieve a single record

###  __ Examples
    
    
    get :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
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
    
    
    index action

A GET route to retrieve a list of records

###  __ Examples
    
    
    index :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
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
    
    
    post action

A POST route to create a record

###  __ Examples
    
    
    post :create

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
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
    
    
    patch action

A PATCH route to update a record

###  __ Examples
    
    
    patch :update

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
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
    
    
    delete action

A DELETE route to destroy a record

###  __ Examples
    
    
    delete :destroy

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
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
    
    
    related relationship, action

A GET route to read the related resources of a relationship

###  __ Examples
    
    
    related :comments, :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
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
    
    
    relationship relationship, action

A READ route to read the relationship, returns resource identifiers.

###  __ Examples
    
    
    relationship :comments, :read

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
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
    
    
    post_to_relationship relationship

A POST route to create related entities using resource identifiers

###  __ Examples
    
    
    post_to_relationship :comments

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
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
    
    
    patch_relationship relationship

A PATCH route to update a relationship using resource identifiers

###  __ Examples
    
    
    patch_relationship :comments

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
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
    
    
    delete_from_relationship relationship

A DELETE route to remove related entities using resource identifiers

###  __ Examples
    
    
    delete_from_relationship :comments

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
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
    
    
    route method, route, action

A route for a generic action.

###  __ Examples
    
    
    route :get, "say_hi/:name", :say_hello"

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
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

##  __ json_api.primary_key

Encode the id of the JSON API response from selected attributes of a resource

###  __ Examples
    
    
    primary_key do
      keys [:first_name, :last_name]
      delimiter "~"
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`keys`| `atom | list(atom)`| | the list of attributes to encode JSON API primary key  
`delimiter`| `String.t`| `"-"`| The delimiter to concatenate the primary key values. Default to be '-'  
  
[ ← Previous Page  Authenticating with AshJsonApi  ](external_link)

[ Next Page →  DSL: AshJsonApi.Domain  ](external_link)
