# DSL: Ash.Domain.Dsl — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) DSL: Ash.Domain.Dsl
  - __ domain
    - __ Examples
    - __ Options
  - __ resources
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ resources.resource
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
  - __ resources.resource.define
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ resources.resource.define_calculation
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection
  - __ execution
    - __ Examples
    - __ Options
  - __ authorization
    - __ Examples
    - __ Options

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) DSL: Ash.Domain.Dsl

##  __ domain

General domain configuration

###  __ Examples
    
    
    domain do
      description """
      Resources related to the flux capacitor.
      """
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | A description for the domain.  
  
##  __ resources

List the resources of this domain

###  __ Nested DSLs

  * resource
    * define
    * define_calculation



###  __ Examples
    
    
    resources do
      resource MyApp.Tweet
      resource MyApp.Comment
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`allow`| `mfa`| | Support a dynamic resource list by providing a callback that checks whether or not the resource should be allowed.  
`allow_unregistered?`| `boolean`| `false`| Whether the domain will support only registered entries or not.  
  
##  __ resources.resource
    
    
    resource resource

A resource present in the domain

###  __ Nested DSLs

  * define
  * define_calculation



###  __ Examples
    
    
    resource Foo

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`resource`| `module`| |   
  
##  __ resources.resource.define
    
    
    define name

Defines a function with the corresponding name and arguments. See the [code interface guide](external_link) for more.

###  __ Examples
    
    
    define :get_user_by_id, action: :get_by_id, args: [:id], get?: true

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the function that will be defined  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`action`| `atom`| | The name of the action that will be called. Defaults to the same name as the function.  
`args`| `list(atom | {:optional, atom})`| | Map specific arguments to named inputs. Can provide any argument/attributes that the action allows.  
`not_found_error?`| `boolean`| `true`| If the action or interface is configured with `get?: true`, this determines whether or not an error is raised or `nil` is returned.  
`require_reference?`| `boolean`| `true`| For update and destroy actions, require a resource or identifier to be passed in as the first argument. Not relevant for other action types.  
`get?`| `boolean`| `false`| Expects to only receive a single result from a read action or a bulk update/destroy, and returns a single result instead of a list. Sets `require_reference?` to false automatically.  
`get_by`| `atom | list(atom)`| | Takes a list of fields and adds those fields as arguments, which will then be used to filter. Sets `get?` to true and `require_reference?` to false automatically. Adds filters for read, update and destroy actions, replacing the `record` first argument.  
`get_by_identity`| `atom`| | Takes an identity, gets its field list, and performs the same logic as `get_by` with those fields. Adds filters for read, update and destroy actions, replacing the `record` first argument.  
  
###  __ Introspection

Target: [`Ash.Resource.Interface`](external_link)

##  __ resources.resource.define_calculation
    
    
    define_calculation name

Defines a function with the corresponding name and arguments, that evaluates a calculation. Use `:_record` to take an instance of a record. See the [code interface guide](external_link) for more.

###  __ Examples
    
    
    define_calculation :referral_link, User, args: [:id]
    
    
    define_calculation :referral_link, User, args: [{:arg, :id}, {:ref, :id}]

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the function that will be defined  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`calculation`| `atom`| | The name of the calculation that will be evaluated. Defaults to the same name as the function.  
`args`| `any`| `[]`| Supply field or argument values referenced by the calculation, in the form of :name, `{:arg, :name}` and/or `{:ref, :name}`. See the [code interface guide](external_link) for more.  
  
###  __ Introspection

Target: [`Ash.Resource.CalculationInterface`](external_link)

###  __ Introspection

Target: [`Ash.Domain.Dsl.ResourceReference`](external_link)

##  __ execution

Options for how requests are executed using this domain

###  __ Examples
    
    
    execution do
      timeout :timer.seconds(30)
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`timeout`| `timeout`| `:infinity`| The default timeout in milliseconds to use for requests using this domain. See the [timeouts guide](external_link) for more.  
`trace_name`| `String.t`| | The name to use in traces. Defaults to the last part of the module. See the [monitoring guide](external_link) for more  
  
##  __ authorization

Options for how requests are authorized using this domain. See the [Sensitive Data guide](external_link) for more.

###  __ Examples
    
    
    authorization do
      authorize :always
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`require_actor?`| `boolean`| `false`| Requires that an actor has been supplied.  
`authorize`| `:always | :by_default | :when_requested`| `:by_default`| When to run authorization for a given request.  
  
[ ← Previous Page  DSL: Ash.Resource.Dsl  ](external_link)

[ Next Page →  DSL: Ash.Notifier.PubSub  ](external_link)
