# DSL: Ash.Flow.Dsl — ash_flow v0.1.1

Project: ash_flow v0.1.1

## Table of Contents

- [ __ View Source ](external_link) DSL: Ash.Flow.Dsl
  - __ flow
    - __ Nested DSLs
    - __ Options
  - __ flow.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ steps
    - __ Nested DSLs
    - __ Examples
  - __ steps.map
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ steps.branch
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ steps.transaction
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ steps.create
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ steps.debug
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ steps.update
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ steps.destroy
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ steps.validate
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ steps.read
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ steps.run_flow
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ steps.custom
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash_flow __ __

__ Settings

#  [ __ View Source ](external_link) DSL: Ash.Flow.Dsl

##  __ flow

Details about the flow itself, like description and the successful return type.

###  __ Nested DSLs

  * argument



###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`domain`| `module`| | An domain to use by default when calling actions  
`description`| `String.t`| | A description of the flow  
`trace_name`| `String.t`| | The name to use when creating traces. Defaults to the short name.  
`short_name`| `atom`| | A short name to use for the flow. Defaults to the last to parts of the module name, underscored.  
`returns`| `any`| | The step or step that should constitute the return value.  
  
##  __ flow.argument
    
    
    argument name, type

An argument to be passed into the flow

###  __ Examples
    
    
    argument :params, :map do
      default %{}
    end
    
    
    
    argument :retries, :integer do
      allow_nil? false
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name to use for the argument  
`type`| `module`| | The type of the argument. See [`Ash.Type`](3.0.0/Ash.Type.html) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`default`| `(-> any) | mfa | any`| | A default value to use for the argument if not provided  
`allow_nil?`| `boolean`| `true`| Whether or not the argument value may be nil  
`constraints`| `keyword`| `[]`| Constraints to provide to the type when casting the value. See the type's documentation for more information.  
  
###  __ Introspection

Target: [`Ash.Flow.Argument`](external_link)

##  __ steps

The steps to run.

###  __ Nested DSLs

  * map

  * branch

  * transaction

  * create

  * debug

  * update

  * destroy

  * validate

  * read

  * run_flow

  * custom




###  __ Examples
    
    
    steps do
      # invokes a create action
      create :create_post, MyApp.Post, :create
    end
    

##  __ steps.map
    
    
    map name, over

Runs a set of steps for each item in a provided list.

###  __ Examples
    
    
    map :create_users, range(1, arg(:count)) do
      output :create_user
    
      create :create_user, Org, :create do
        input %{
          first_name: {Faker.Person, :first_name, []},
          last_name: {Faker.Person, :last_name, []}
        }
      end
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the step. Will be used when expressing dependencies, and step inputs.  
`over`| `any`| | The value to be iterated over. Will be available inside the `map` step as `element(:map_step_name)`  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`output`| `atom`| | Which step to use when constructing the output list. Defaults to the last step.  
`short_name`| `String.t`| | Set a short name for the step. Will be used when building things like mermaid charts.  
`wait_for`| `any`| | Ensures that the step happens after the configured step or steps. This is a template who's results are not used, only awaited.  
`touches_resources`| `list(atom)`| | A list of resources touched by any custom logic in this step. This is used in the case that this step is run in a transaction. This is primarily only needed for `custom` steps.  
`halt_if`| `any`| | Halts the step by emitting an error (with an [`Ash.Error.Flow.Halted`](external_link)). Can use template variables. See the section on Halting for more.  
`halt_reason`| `any`| `:halted`| Configures the reason for the `halt_if` clause.  
`description`| `String.t`| | A description for the step.  
  
###  __ Introspection

Target: [`Ash.Flow.Step.Map`](external_link)

##  __ steps.branch
    
    
    branch name, condition

Runs a set of steps based on a given value.

###  __ Examples
    
    
    branch :create_users, result(:create_users?) do
      output :create_user
    
      create :create_user, Org, :create do
        input %{
          first_name: {Faker.Person, :first_name, []},
          last_name: {Faker.Person, :last_name, []}
        }
      end
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the step. Will be used when expressing dependencies, and step inputs.  
`condition`| `any`| | A template that must evaluate to `true` for the branch to be executed.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`output`| `atom`| | Which step to use as the output. Defaults to the last step.  
`short_name`| `String.t`| | Set a short name for the step. Will be used when building things like mermaid charts.  
`wait_for`| `any`| | Ensures that the step happens after the configured step or steps. This is a template who's results are not used, only awaited.  
`touches_resources`| `list(atom)`| | A list of resources touched by any custom logic in this step. This is used in the case that this step is run in a transaction. This is primarily only needed for `custom` steps.  
`halt_if`| `any`| | Halts the step by emitting an error (with an [`Ash.Error.Flow.Halted`](external_link)). Can use template variables. See the section on Halting for more.  
`halt_reason`| `any`| `:halted`| Configures the reason for the `halt_if` clause.  
`description`| `String.t`| | A description for the step.  
  
###  __ Introspection

Target: [`Ash.Flow.Step.Branch`](external_link)

##  __ steps.transaction
    
    
    transaction name, resource

Runs a set of steps in a transaction.

###  __ Examples
    
    
    transaction :create_user_with_org do
      touches_resources [User, Org]
    
      create :create_user, User, :create do
        input %{
          first_name: {Faker.Person, :first_name, []},
          last_name: {Faker.Person, :last_name, []}
        }
      end
    
      create :create_org, Org, :create do
        input %{
          user_id: path(result(:create_user), :id),
          name: {Faker.Color, :name, []}
        }
      end
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the step. Will be used when expressing dependencies, and step inputs.  
`resource`| `module | list(module)`| | The Ash resource to use for the transaction.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`output`| `any`| | Which step or steps to use when constructing the output. Defaults to the last step.  
`timeout`| `timeout`| | A timeout to apply to the transaction.  
`short_name`| `String.t`| | Set a short name for the step. Will be used when building things like mermaid charts.  
`wait_for`| `any`| | Ensures that the step happens after the configured step or steps. This is a template who's results are not used, only awaited.  
`touches_resources`| `list(atom)`| | A list of resources touched by any custom logic in this step. This is used in the case that this step is run in a transaction. This is primarily only needed for `custom` steps.  
`halt_if`| `any`| | Halts the step by emitting an error (with an [`Ash.Error.Flow.Halted`](external_link)). Can use template variables. See the section on Halting for more.  
`halt_reason`| `any`| `:halted`| Configures the reason for the `halt_if` clause.  
`description`| `String.t`| | A description for the step.  
  
###  __ Introspection

Target: [`Ash.Flow.Step.Transaction`](external_link)

##  __ steps.create
    
    
    create name, resource, action

Declares a step that will call a create action on a resource.

###  __ Examples
    
    
    create :create_post, MyApp.Post, :create
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the step. Will be used when expressing dependencies, and step inputs.  
`resource`| `any`| | The resource to call the action on.  
`action`| `any`| | The action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`upsert?`| `boolean`| `false`| Whether or not this action is always an upsert.  
`upsert_identity`| `atom`| | The identity to use for the upsert.  
`short_name`| `String.t`| | Set a short name for the step. Will be used when building things like mermaid charts.  
`wait_for`| `any`| | Ensures that the step happens after the configured step or steps. This is a template who's results are not used, only awaited.  
`touches_resources`| `list(atom)`| | A list of resources touched by any custom logic in this step. This is used in the case that this step is run in a transaction. This is primarily only needed for `custom` steps.  
`halt_if`| `any`| | Halts the step by emitting an error (with an [`Ash.Error.Flow.Halted`](external_link)). Can use template variables. See the section on Halting for more.  
`halt_reason`| `any`| `:halted`| Configures the reason for the `halt_if` clause.  
`description`| `String.t`| | A description for the step.  
`domain`| `any`| | The domain to use when calling the action. Defaults to the domain set in the `flow` section.  
`tenant`| `any`| | A tenant to use for the operation. May be a template or a literal value.  
`input`| `any`| | A template for the input.  
  
###  __ Introspection

Target: [`Ash.Flow.Step.Create`](external_link)

##  __ steps.debug
    
    
    debug name

Declares a step that will inspect its input and provide additional debug information.

###  __ Examples
    
    
    debug :show_some_information do
      input %{post: result(:create_post)}
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the step. Will be used when expressing dependencies, and step inputs.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`input`| `any`| | A template for the input.  
`short_name`| `String.t`| | Set a short name for the step. Will be used when building things like mermaid charts.  
`wait_for`| `any`| | Ensures that the step happens after the configured step or steps. This is a template who's results are not used, only awaited.  
`halt_if`| `any`| | Halts the step by emitting an error (with an [`Ash.Error.Flow.Halted`](external_link)). Can use template variables. See the section on Halting for more.  
`halt_reason`| `any`| `:halted`| Configures the reason for the `halt_if` clause.  
`description`| `String.t`| | A description for the step.  
  
###  __ Introspection

Target: [`Ash.Flow.Step.Debug`](external_link)

##  __ steps.update
    
    
    update name, resource, action

Declares a step that will call a update action on a resource.

###  __ Examples
    
    
    update :update_post, MyApp.Post, :update do
      record result(:get_post)
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the step. Will be used when expressing dependencies, and step inputs.  
`resource`| `any`| | The resource to call the action on.  
`action`| `any`| | The action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`record`| `any`| | The record to be updated, can use template helpers, e.g `result(:step_name)`.  
`short_name`| `String.t`| | Set a short name for the step. Will be used when building things like mermaid charts.  
`wait_for`| `any`| | Ensures that the step happens after the configured step or steps. This is a template who's results are not used, only awaited.  
`touches_resources`| `list(atom)`| | A list of resources touched by any custom logic in this step. This is used in the case that this step is run in a transaction. This is primarily only needed for `custom` steps.  
`halt_if`| `any`| | Halts the step by emitting an error (with an [`Ash.Error.Flow.Halted`](external_link)). Can use template variables. See the section on Halting for more.  
`halt_reason`| `any`| `:halted`| Configures the reason for the `halt_if` clause.  
`description`| `String.t`| | A description for the step.  
`domain`| `any`| | The domain to use when calling the action. Defaults to the domain set in the `flow` section.  
`tenant`| `any`| | A tenant to use for the operation. May be a template or a literal value.  
`input`| `any`| | A template for the input.  
  
###  __ Introspection

Target: [`Ash.Flow.Step.Update`](external_link)

##  __ steps.destroy
    
    
    destroy name, resource, action

Declares a step that will call a destroy action on a resource.

###  __ Examples
    
    
    destroy :destroy_post, MyApp.Post, :destroy
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the step. Will be used when expressing dependencies, and step inputs.  
`resource`| `any`| | The resource to call the action on.  
`action`| `any`| | The action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`record`| `any`| | The record to be updated, can use template helpers, e.g `result(:step_name)`.  
`short_name`| `String.t`| | Set a short name for the step. Will be used when building things like mermaid charts.  
`wait_for`| `any`| | Ensures that the step happens after the configured step or steps. This is a template who's results are not used, only awaited.  
`touches_resources`| `list(atom)`| | A list of resources touched by any custom logic in this step. This is used in the case that this step is run in a transaction. This is primarily only needed for `custom` steps.  
`halt_if`| `any`| | Halts the step by emitting an error (with an [`Ash.Error.Flow.Halted`](external_link)). Can use template variables. See the section on Halting for more.  
`halt_reason`| `any`| `:halted`| Configures the reason for the `halt_if` clause.  
`description`| `String.t`| | A description for the step.  
`domain`| `any`| | The domain to use when calling the action. Defaults to the domain set in the `flow` section.  
`tenant`| `any`| | A tenant to use for the operation. May be a template or a literal value.  
`input`| `any`| | A template for the input.  
  
###  __ Introspection

Target: [`Ash.Flow.Step.Destroy`](external_link)

##  __ steps.validate
    
    
    validate name, resource, action

Validates some input against an action.

###  __ Examples
    
    
    validate :update_post, MyApp.Post, :update do
      record result(:get_post)
      only_keys [:name]
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the step. Will be used when expressing dependencies, and step inputs.  
`resource`| `any`| | The resource to call the action on.  
`action`| `any`| | The action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`record`| `any`| | The record to be created/updated/destroyed. If the value is `nil` and would be required by the action type, the step is skipped and `nil` is the result of the step.  
`only_keys`| `list(atom | list(atom))`| | A list of keys or paths to keys that should be validated. Others will be ignored, and errors generated for other fields will be ignored.  
`short_name`| `String.t`| | Set a short name for the step. Will be used when building things like mermaid charts.  
`wait_for`| `any`| | Ensures that the step happens after the configured step or steps. This is a template who's results are not used, only awaited.  
`touches_resources`| `list(atom)`| | A list of resources touched by any custom logic in this step. This is used in the case that this step is run in a transaction. This is primarily only needed for `custom` steps.  
`halt_if`| `any`| | Halts the step by emitting an error (with an [`Ash.Error.Flow.Halted`](external_link)). Can use template variables. See the section on Halting for more.  
`halt_reason`| `any`| `:halted`| Configures the reason for the `halt_if` clause.  
`description`| `String.t`| | A description for the step.  
`domain`| `any`| | The domain to use when calling the action. Defaults to the domain set in the `flow` section.  
`tenant`| `any`| | A tenant to use for the operation. May be a template or a literal value.  
`input`| `any`| | A template for the input.  
  
###  __ Introspection

Target: [`Ash.Flow.Step.Update`](external_link)

##  __ steps.read
    
    
    read name, resource, action

Declares a step that will call a read action on a resource.

###  __ Examples
    
    
    read :destroy_post, MyApp.Post, :destroy
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the step. Will be used when expressing dependencies, and step inputs.  
`resource`| `any`| | The resource to call the action on.  
`action`| `any`| | The action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`get?`| `boolean`| `false`| Whether or not read action is expected to return a single result or `nil`. Set to `true` automatically if `get? true`.  
`not_found_error?`| `boolean`| `true`| Whether or not finding no record should result in a not found error  
`short_name`| `String.t`| | Set a short name for the step. Will be used when building things like mermaid charts.  
`wait_for`| `any`| | Ensures that the step happens after the configured step or steps. This is a template who's results are not used, only awaited.  
`touches_resources`| `list(atom)`| | A list of resources touched by any custom logic in this step. This is used in the case that this step is run in a transaction. This is primarily only needed for `custom` steps.  
`halt_if`| `any`| | Halts the step by emitting an error (with an [`Ash.Error.Flow.Halted`](external_link)). Can use template variables. See the section on Halting for more.  
`halt_reason`| `any`| `:halted`| Configures the reason for the `halt_if` clause.  
`description`| `String.t`| | A description for the step.  
`domain`| `any`| | The domain to use when calling the action. Defaults to the domain set in the `flow` section.  
`tenant`| `any`| | A tenant to use for the operation. May be a template or a literal value.  
`input`| `any`| | A template for the input.  
  
###  __ Introspection

Target: [`Ash.Flow.Step.Read`](external_link)

##  __ steps.run_flow
    
    
    run_flow name, flow

Runs another flow as part of the current flow. The return value of the step is the return value of the flow.

###  __ Examples
    
    
    run_flow :get_org, GetOrgByName do
      input %{
        name: arg(:org_name)
      }
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the step. Will be used when expressing dependencies, and step inputs.  
`flow`| `atom`| | The flow to run.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`input`| `any`| | A template for the input.  
`short_name`| `String.t`| | Set a short name for the step. Will be used when building things like mermaid charts.  
`wait_for`| `any`| | Ensures that the step happens after the configured step or steps. This is a template who's results are not used, only awaited.  
`touches_resources`| `list(atom)`| | A list of resources touched by any custom logic in this step. This is used in the case that this step is run in a transaction. This is primarily only needed for `custom` steps.  
`halt_if`| `any`| | Halts the step by emitting an error (with an [`Ash.Error.Flow.Halted`](external_link)). Can use template variables. See the section on Halting for more.  
`halt_reason`| `any`| `:halted`| Configures the reason for the `halt_if` clause.  
`description`| `String.t`| | A description for the step.  
  
###  __ Introspection

Target: [`Ash.Flow.Step.RunFlow`](external_link)

##  __ steps.custom
    
    
    custom name, custom

Runs a custom step module.

See [`Ash.Flow.Step`](external_link) for the necessary callbacks and more information.

###  __ Examples
    
    
    custom :do_custom_thing, MyApp.DoCustomThing do
      input %{...}
    end
    
    
    
    custom :do_custom_thing, {MyApp.DoCustomThing, opt1: :foo, opt2: :bar} do
      input %{...}
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the step. Will be used when expressing dependencies, and step inputs.  
`custom`| `(any, any -> any) | module`| | The module that implements the step behaviour. Also accepts a 2 argument function that takes the input and the context.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`input`| `any`| | A template for the input.  
`async?`| `boolean`| `false`| Whether or not this step can be run outside of the current process.  
`short_name`| `String.t`| | Set a short name for the step. Will be used when building things like mermaid charts.  
`wait_for`| `any`| | Ensures that the step happens after the configured step or steps. This is a template who's results are not used, only awaited.  
`touches_resources`| `list(atom)`| | A list of resources touched by any custom logic in this step. This is used in the case that this step is run in a transaction. This is primarily only needed for `custom` steps.  
`halt_if`| `any`| | Halts the step by emitting an error (with an [`Ash.Error.Flow.Halted`](external_link)). Can use template variables. See the section on Halting for more.  
`halt_reason`| `any`| `:halted`| Configures the reason for the `halt_if` clause.  
`description`| `String.t`| | A description for the step.  
  
###  __ Introspection

Target: [`Ash.Flow.Step.Custom`](external_link)

[ ← Previous Page  Flows  ](external_link)
