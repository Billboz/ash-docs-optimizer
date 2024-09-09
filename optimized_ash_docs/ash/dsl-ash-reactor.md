# DSL: Ash.Reactor — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) DSL: Ash.Reactor
  - __ ash
    - __ Options
  - __ reactor.action
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ reactor.action.actor
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.action.inputs
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.action.tenant
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.action.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.ash_step
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.ash_step.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.ash_step.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.bulk_create
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.bulk_create.actor
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.bulk_create.load
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.bulk_create.tenant
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.bulk_create.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.bulk_update
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.bulk_update.actor
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.bulk_update.inputs
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.bulk_update.tenant
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.bulk_update.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.change
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ reactor.change.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.change.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.create
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.create.actor
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.create.inputs
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.create.load
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.create.tenant
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.create.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.destroy
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.destroy.actor
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.destroy.inputs
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.destroy.load
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.destroy.tenant
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.destroy.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.load
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ reactor.load.actor
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.load.tenant
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.load.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.read_one
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.read_one.actor
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.read_one.inputs
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.read_one.load
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.read_one.tenant
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.read_one.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.read
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.read.actor
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.read.inputs
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.read.load
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.read.tenant
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.read.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.transaction
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ reactor.transaction.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.update
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.update.actor
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.update.inputs
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.update.load
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.update.tenant
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.update.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) DSL: Ash.Reactor

[`Ash.Reactor`](external_link) is a [`Reactor`](external_link) extension which provides steps for working with Ash resources and actions.

See the [Ash Reactor Guide](reactor.html) for more information.

##  __ ash

Ash-related configuration for the [`Ash.Reactor`](external_link) extension

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`default_domain`| `module`| | A domain to use by default when calling actions  
  
##  __ reactor.action
    
    
    action name, resource, action \\ nil

Declares a step that will call a generic action on a resource.

> #### Undo behaviour
> 
> This step has three different modes of undo.
> 
>   * `never` \- The result of the action is never undone. This is the default.
>   * `always` \- The `undo_action` will always be called.
>   * `outside_transaction` \- The `undo_action` will not be called when running inside a `transaction` block, but will be otherwise.
> 


###  __ Nested DSLs

  * actor
  * inputs
  * tenant
  * wait_for



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step.  
`resource`| `module`| | The resource to call the action on.  
`action`| `atom`| | The name of the action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`domain`| `module`| | The Domain to use when calling the action. Defaults to the Domain set on the resource or in the `ash` section.  
`async?`| `boolean`| `true`| When set to true the step will be executed asynchronously via Reactor's `TaskSupervisor`.  
`authorize?`| `boolean | nil`| | Explicitly enable or disable authorization for the action.  
`description`| `String.t`| | A description for the step  
`undo_action`| `atom`| | The name of the action to call on the resource when the step is to be undone.  
`undo`| `:always | :never | :outside_transaction`| `:never`| How to handle undoing this action  
  
##  __ reactor.action.actor
    
    
    actor source

Specifies the action actor

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the actor.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the actor before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Actor`](external_link)

##  __ reactor.action.inputs
    
    
    inputs template

Specify the inputs for an action

###  __ Examples
    
    
    inputs %{
      author: result(:get_user),
      title: input(:title),
      body: input(:body)
    }
    
    
    
    inputs(author: result(:get_user))
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`template`| `%{optional(atom) => Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value} | keyword(Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value)`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which will transform the inputs before executing the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Inputs`](external_link)

##  __ reactor.action.tenant
    
    
    tenant source

Specifies the action tenant

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the tenant.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the tenant before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Tenant`](external_link)

##  __ reactor.action.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.Action`](external_link)

##  __ reactor.ash_step
    
    
    ash_step name, impl \\ nil

Specifies a Ash.Reactor step.

This is basically a wrapper around `Reactor.step`, in order to handle any returned notifications from the run step/function.

See the [`Reactor.Step`](external_link) behaviour for more information.

###  __ Nested DSLs

  * argument
  * wait_for



###  __ Examples
    
    
    ash_step :create_post, MyApp.CreatePostStep do
      argument :title, input(:title)
    end
    
    
    
    ash_step :create_post do
      argument :title, input(:title)
    
      run fn %{title: title}, _ ->
        MyApp.Post.create(title, return_notifications?: true)
      end
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step. Used when choosing the return value of the Reactor and for arguments into other steps.  
`impl`| `module | nil`| | A module that implements the [`Reactor.Step`](external_link) behaviour that provides the implementation.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`run`| `(any -> any) | mfa | (any, any -> any) | mfa`| | Provide an anonymous function which implements the `run/3` callback. Cannot be provided at the same time as the `impl` argument.  
`undo`| `(any -> any) | mfa | (any, any -> any) | mfa | (any, any, any -> any) | mfa`| | Provide an anonymous function which implements the `undo/4` callback. Cannot be provided at the same time as the `impl` argument.  
`compensate`| `(any -> any) | mfa | (any, any -> any) | mfa | (any, any, any -> any) | mfa`| | Provide an anonymous function which implements the `undo/4` callback. Cannot be provided at the same time as the `impl` argument.  
`max_retries`| `:infinity | non_neg_integer`| `:infinity`| The maximum number of times that the step can be retried before failing. Only used when the result of the `compensate/4` callback is `:retry`.  
`async?`| `boolean`| `true`| When set to true the step will be executed asynchronously via Reactor's `TaskSupervisor`.  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the entire argument map before it is passed to the step.  
  
##  __ reactor.ash_step.argument
    
    
    argument name, source \\ nil

Specifies an argument to a Reactor step.

Each argument is a value which is either the result of another step, or an input value.

Individual arguments can be transformed with an arbitrary function before being passed to any steps.

###  __ Examples
    
    
    argument :name, input(:name)
    
    
    
    argument :year, input(:date, [:year])
    
    
    
    argument :user, result(:create_user)
    
    
    
    argument :user_id, result(:create_user) do
      transform & &1.id
    end
    
    
    
    argument :user_id, result(:create_user, [:id])
    
    
    
    argument :three, value(3)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the argument which will be used as the key in the `arguments` map passed to the implementation.  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the argument. See [`Reactor.Dsl.Argument`](external_link) for more information.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the argument before it is passed to the step.  
  
###  __ Introspection

Target: [`Reactor.Dsl.Argument`](external_link)

##  __ reactor.ash_step.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.AshStep`](external_link)

##  __ reactor.bulk_create
    
    
    bulk_create name, resource, action \\ nil

Declares a step which will call a create action on a resource with a collection of inputs.

> ###  __ Check the docs!
> 
> Make sure to thoroughly read and understand the documentation in [`Ash.bulk_create/4`](external_link) before using. Read each option and note the default values. By default, bulk creates don't return records or errors, and don't emit notifications.

Caveats/differences from [`Ash.bulk_create/4`](external_link):

  1. `max_concurrency` specifies the number of tasks that Ash will start to process batches, and has no effect on Reactor concurrency targets. It's could be possible to create a very large number of processes if a number of steps are running bulk actions with a high degree of concurrency.
  2. Setting `notify?` to `true` will cause both `notify?` and `return_notifications?` to be set to true in the underlying call to [`Ash.bulk_create/4`](external_link). Notifications will then be managed by the [`Ash.Reactor.Notifications`](external_link) Reactor middleware.
  3. If you specify an undo action it must be a generic action which takes the bulk result as it's only argument.



> #### Undo behaviour
> 
> This step has three different modes of undo.
> 
>   * `never` \- The result of the action is never undone. This is the default.
>   * `always` \- The `undo_action` will always be called.
>   * `outside_transaction` \- The `undo_action` will not be called when running inside a `transaction` block, but will be otherwise.
> 


###  __ Nested DSLs

  * actor
  * load
  * tenant
  * wait_for



###  __ Examples
    
    
    bulk_create :create_posts, MyApp.Post, :create do
      initial input(:titles)
      actor result(:get_user)
      tenant result(:get_organisation, [:id])
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step.  
`resource`| `module`| | The resource to call the action on.  
`action`| `atom`| | The name of the action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`initial`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | A collection of inputs to pass to the create action. Must implement the [`Enumerable`](external_link) protocol.  
`assume_casted?`| `boolean`| `false`| Whether or not to cast attributes and arguments as input. This is an optimization for cases where the input is already casted and/or not in need of casting  
`authorize_changeset_with`| `:filter | :error`| `:filter`| If set to `:error`, instead of filtering unauthorized changes, unauthorized changes will raise an appropriate forbidden error  
`authorize_query_with`| `:filter | :error`| `:filter`| If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error  
`batch_size`| `nil | pos_integer`| | The number of records to include in each batch. Defaults to the `default_limit` or `max_page_size` of the action, or 100.  
`max_concurrency`| `non_neg_integer`| `0`| If set to a value greater than 0, up to that many tasks will be started to run batches asynchronously.  
`notification_metadata`| `map | Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| `%{}`| Metadata to be merged into the metadata field for all notifications sent from this operation.  
`notify?`| `boolean`| `false`| Whether or not to generate any notifications. This may be intensive for large bulk actions.  
`read_action`| `atom`| | The action to use when building the read query.  
`return_errors?`| `boolean`| `false`| Whether or not to return all of the errors that occur. Defaults to false to account for large inserts.  
`return_records?`| `boolean`| `false`| Whether or not to return all of the records that were inserted. Defaults to false to account for large inserts.  
`return_stream?`| `boolean`| `false`| If set to `true`, instead of an [`Ash.BulkResult`](external_link), a mixed stream is returned.  
`rollback_on_error?`| `boolean`| `true`| Whether or not to rollback the transaction on error, if the resource is in a transaction.  
`select`| `atom | list(atom)`| | A select statement to apply to records. Ignored if `return_records?` is not `true`.  
`skip_unknown_inputs`| `atom | String.t | list(atom | String.t)`| | A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.  
`sorted?`| `boolean`| `false`| Whether or not to sort results by their input position, in cases where `return_records?` is set to `true`.  
`stop_on_error?`| `boolean`| `false`| If `true`, the first encountered error will stop the action and be returned. Otherwise, errors will be skipped.  
`success_state`| `:success | :partial_success`| `:success`| Bulk results can be entirely or partially successful. Chooses the [`Ash.BulkResult`](external_link) state to consider the step a success.  
`timeout`| `timeout`| | If none is provided, the timeout configured on the domain is used (which defaults to `30_000`).  
`transaction`| `:all | :batch | false`| `:batch`| Whether or not to wrap the entire execution in a transaction, each batch, or not at all.  
`upsert_fields`| `atom | list(atom)`| | The fields to upsert. If not set, the action's `upsert_fields` is used.  
`upsert_identity`| `atom`| | The identity to use for the upsert  
`upsert?`| `boolean`| `false`| Whether or not this action should be executed as an upsert.  
`domain`| `module`| | The Domain to use when calling the action. Defaults to the Domain set on the resource or in the `ash` section.  
`async?`| `boolean`| `true`| When set to true the step will be executed asynchronously via Reactor's `TaskSupervisor`.  
`authorize?`| `boolean | nil`| | Explicitly enable or disable authorization for the action.  
`description`| `String.t`| | A description for the step  
`undo_action`| `atom`| | The name of the action to call on the resource when the step is to be undone.  
`undo`| `:always | :never | :outside_transaction`| `:never`| How to handle undoing this action  
  
##  __ reactor.bulk_create.actor
    
    
    actor source

Specifies the action actor

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the actor.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the actor before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Actor`](external_link)

##  __ reactor.bulk_create.load
    
    
    load source

Allows the addition of an Ash load statement to the action

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the load  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the load before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.ActionLoad`](external_link)

##  __ reactor.bulk_create.tenant
    
    
    tenant source

Specifies the action tenant

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the tenant.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the tenant before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Tenant`](external_link)

##  __ reactor.bulk_create.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.BulkCreate`](external_link)

##  __ reactor.bulk_update
    
    
    bulk_update name, resource, action \\ nil

Declares a step which will call an update action on a resource with a collection of inputs.

> ###  __ Check the docs!
> 
> Make sure to thoroughly read and understand the documentation in [`Ash.bulk_update/4`](external_link) before using. Read each option and note the default values. By default, bulk updates don't return records or errors, and don't emit notifications.

Caveats/differences from [`Ash.bulk_update/4`](external_link):

  1. `max_concurrency` specifies the number of tasks that Ash will start to process batches, and has no effect on Reactor concurrency targets. It's could be possible to create a very large number of processes if a number of steps are running bulk actions with a high degree of concurrency.
  2. Setting `notify?` to `true` will cause both `notify?` and `return_notifications?` to be set to true in the underlying call to [`Ash.bulk_create/4`](external_link). Notifications will then be managed by the [`Ash.Reactor.Notifications`](external_link) Reactor middleware.
  3. If you specify an undo action it must be a generic action which takes the bulk result as it's only argument.



> #### Undo behaviour
> 
> This step has three different modes of undo.
> 
>   * `never` \- The result of the action is never undone. This is the default.
>   * `always` \- The `undo_action` will always be called.
>   * `outside_transaction` \- The `undo_action` will not be called when running inside a `transaction` block, but will be otherwise.
> 


###  __ Nested DSLs

  * actor
  * inputs
  * tenant
  * wait_for



###  __ Examples
    
    
    bulk_update :publish_posts, MyApp.Post, :publish do
      initial input(:posts),
      actor result(:get_user)
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step.  
`resource`| `module`| | The resource to call the action on.  
`action`| `atom`| | The name of the action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`initial`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | A collection of inputs to pass to the create action. Must implement the [`Enumerable`](external_link) protocol.  
`allow_stream_with`| `:keyset | :offset | :full_read`| `:keyset`| The 'worst' strategy allowed to be used to fetch records if the :stream strategy is chosen. See the [`Ash.stream!/2`](external_link) docs for more.  
`assume_casted?`| `boolean`| `false`| Whether or not to cast attributes and arguments as input. This is an optimization for cases where the input is already casted and/or not in need of casting  
`atomic_update`| `map`| | A map of atomic updates to apply. See [`Ash.Changeset.atomic_update/3`](external_link) for more.  
`authorize_changeset_with`| `:filter | :error`| `:filter`| If set to `:error`, instead of filtering unauthorized changes, unauthorized changes will raise an appropriate forbidden error  
`authorize_query_with`| `:filter | :error`| `:filter`| If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error  
`authorize_query?`| `boolean`| `true`| If a query is given, determines whether or not authorization is run on that query.  
`batch_size`| `nil | pos_integer`| | The number of records to include in each batch. Defaults to the `default_limit` or `max_page_size` of the action, or 100.  
`filter`| `map | keyword`| | A filter to apply to records. This is also applied to a stream of inputs.  
`lock`| `any`| | A lock statement to add onto the query.  
`max_concurrency`| `non_neg_integer`| `0`| If set to a value greater than 0, up to that many tasks will be started to run batches asynchronously.  
`notification_metadata`| `map | Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| `%{}`| Metadata to be merged into the metadata field for all notifications sent from this operation.  
`notify?`| `boolean`| `false`| Whether or not to generate any notifications. This may be intensive for large bulk actions.  
`page`| `keyword`| `[]`| Pagination options, see [the pagination docs for more](external_link).  
`read_action`| `atom`| | The action to use when building the read query.  
`return_errors?`| `boolean`| `false`| Whether or not to return all of the errors that occur. Defaults to false to account for large inserts.  
`return_records?`| `boolean`| `false`| Whether or not to return all of the records that were inserted. Defaults to false to account for large inserts.  
`return_stream?`| `boolean`| `false`| If set to `true`, instead of an [`Ash.BulkResult`](external_link), a mixed stream is returned.  
`reuse_values?`| `boolean`| `false`| Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer.  
`rollback_on_error?`| `boolean`| `true`| Whether or not to rollback the transaction on error, if the resource is in a transaction.  
`select`| `atom | list(atom)`| | A select statement to apply to records. Ignored if `return_records?` is not `true`.  
`skip_unknown_inputs`| `atom | String.t | list(atom | String.t)`| | A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.  
`sorted?`| `boolean`| `false`| Whether or not to sort results by their input position, in cases where `return_records?` is set to `true`.  
`stop_on_error?`| `boolean`| `false`| If `true`, the first encountered error will stop the action and be returned. Otherwise, errors will be skipped.  
`strategy`| `list(:atomic | :atomic_batches | :stream)`| `[:atomic]`| The strategy or strategies to enable. `:stream` is used in all cases if the data layer does not support atomics.  
`stream_batch_size`| `pos_integer`| | Batch size to use if provided a query and the query must be streamed.  
`stream_with`| `:keyset | :offset | :full_read`| | The specific strategy to use to fetch records. See [`Ash.stream!/2`](external_link) docs for more.  
`success_state`| `:success | :partial_success`| `:success`| Bulk results can be entirely or partially successful. Chooses the [`Ash.BulkResult`](external_link) state to consider the step a success.  
`timeout`| `timeout`| | If none is provided, the timeout configured on the domain is used (which defaults to `30_000`).  
`transaction`| `:all | :batch | false`| `:batch`| Whether or not to wrap the entire execution in a transaction, each batch, or not at all.  
`domain`| `module`| | The Domain to use when calling the action. Defaults to the Domain set on the resource or in the `ash` section.  
`async?`| `boolean`| `true`| When set to true the step will be executed asynchronously via Reactor's `TaskSupervisor`.  
`authorize?`| `boolean | nil`| | Explicitly enable or disable authorization for the action.  
`description`| `String.t`| | A description for the step  
`undo_action`| `atom`| | The name of the action to call on the resource when the step is to be undone.  
`undo`| `:always | :never | :outside_transaction`| `:never`| How to handle undoing this action  
  
##  __ reactor.bulk_update.actor
    
    
    actor source

Specifies the action actor

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the actor.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the actor before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Actor`](external_link)

##  __ reactor.bulk_update.inputs
    
    
    inputs template

Specify the inputs for an action

###  __ Examples
    
    
    inputs %{
      author: result(:get_user),
      title: input(:title),
      body: input(:body)
    }
    
    
    
    inputs(author: result(:get_user))
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`template`| `%{optional(atom) => Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value} | keyword(Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value)`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which will transform the inputs before executing the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Inputs`](external_link)

##  __ reactor.bulk_update.tenant
    
    
    tenant source

Specifies the action tenant

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the tenant.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the tenant before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Tenant`](external_link)

##  __ reactor.bulk_update.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.BulkUpdate`](external_link)

##  __ reactor.change
    
    
    change name, change

Declares a step that will modify a changeset.

###  __ Nested DSLs

  * argument
  * wait_for



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for this step.  
`change`| `(any, any -> any) | module`| | The module and options for a change. Also accepts a function that takes the changeset and the context. See [`Ash.Resource.Change.Builtins`](external_link) for builtin changes.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`initial`| `module | Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | The initial value to work from, either a resource or a changeset  
`description`| `String.t | nil`| | An optional description for the change  
`only_when_valid?`| `boolean`| `false`| If the change should only be run on valid changes. By default, all changes are run unless stated otherwise here.  
`where`| `(any, any -> any) | module | list((any, any -> any) | module)`| `[]`| Validations that should pass in order for this change to apply. These validations failing will result in this change being ignored.  
`fail_if_invalid?`| `boolean`| `false`| Fail if the result of the change is an invalid changeset  
  
##  __ reactor.change.argument
    
    
    argument name, source \\ nil

Specifies an argument to a Reactor step.

Each argument is a value which is either the result of another step, or an input value.

Individual arguments can be transformed with an arbitrary function before being passed to any steps.

###  __ Examples
    
    
    argument :name, input(:name)
    
    
    
    argument :year, input(:date, [:year])
    
    
    
    argument :user, result(:create_user)
    
    
    
    argument :user_id, result(:create_user) do
      transform & &1.id
    end
    
    
    
    argument :user_id, result(:create_user, [:id])
    
    
    
    argument :three, value(3)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the argument which will be used as the key in the `arguments` map passed to the implementation.  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the argument. See [`Reactor.Dsl.Argument`](external_link) for more information.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the argument before it is passed to the step.  
  
###  __ Introspection

Target: [`Reactor.Dsl.Argument`](external_link)

##  __ reactor.change.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.Change`](external_link)

##  __ reactor.create
    
    
    create name, resource, action \\ nil

Declares a step that will call a create action on a resource.

> #### Undo behaviour
> 
> This step has three different modes of undo.
> 
>   * `never` \- The result of the action is never undone. This is the default.
>   * `always` \- The `undo_action` will always be called.
>   * `outside_transaction` \- The `undo_action` will not be called when running inside a `transaction` block, but will be otherwise.
> 


###  __ Nested DSLs

  * actor
  * inputs
  * load
  * tenant
  * wait_for



###  __ Examples
    
    
    create :create_post, MyApp.Post, :create do
      inputs %{
        title: input(:post_title),
        author_id: result(:get_user, [:id])
      }
      actor result(:get_user)
      tenant result(:get_organisation, [:id])
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step.  
`resource`| `module`| | The resource to call the action on.  
`action`| `atom`| | The name of the action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`initial`| `nil | module | Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | The initial value passed into the action.  
`upsert_identity`| `atom`| | The identity to use for the upsert  
`upsert?`| `boolean`| `false`| Whether or not this action should be executed as an upsert.  
`domain`| `module`| | The Domain to use when calling the action. Defaults to the Domain set on the resource or in the `ash` section.  
`async?`| `boolean`| `true`| When set to true the step will be executed asynchronously via Reactor's `TaskSupervisor`.  
`authorize?`| `boolean | nil`| | Explicitly enable or disable authorization for the action.  
`description`| `String.t`| | A description for the step  
`undo_action`| `atom`| | The name of the action to call on the resource when the step is to be undone.  
`undo`| `:always | :never | :outside_transaction`| `:never`| How to handle undoing this action  
  
##  __ reactor.create.actor
    
    
    actor source

Specifies the action actor

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the actor.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the actor before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Actor`](external_link)

##  __ reactor.create.inputs
    
    
    inputs template

Specify the inputs for an action

###  __ Examples
    
    
    inputs %{
      author: result(:get_user),
      title: input(:title),
      body: input(:body)
    }
    
    
    
    inputs(author: result(:get_user))
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`template`| `%{optional(atom) => Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value} | keyword(Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value)`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which will transform the inputs before executing the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Inputs`](external_link)

##  __ reactor.create.load
    
    
    load source

Allows the addition of an Ash load statement to the action

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the load  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the load before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.ActionLoad`](external_link)

##  __ reactor.create.tenant
    
    
    tenant source

Specifies the action tenant

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the tenant.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the tenant before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Tenant`](external_link)

##  __ reactor.create.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.Create`](external_link)

##  __ reactor.destroy
    
    
    destroy name, resource, action \\ nil

Declares a step that will call a destroy action on a resource.

> #### Undo behaviour
> 
> This step has three different modes of undo.
> 
>   * `never` \- The result of the action is never undone. This is the default.
>   * `always` \- The `undo_action` will always be called.
>   * `outside_transaction` \- The `undo_action` will not be called when running inside a `transaction` block, but will be otherwise.
> 


###  __ Nested DSLs

  * actor
  * inputs
  * load
  * tenant
  * wait_for



###  __ Examples
    
    
    destroy :delete_post, MyApp.Post, :destroy do
      initial input(:post)
      actor result(:get_user)
      tenant result(:get_organisation, [:id])
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step.  
`resource`| `module`| | The resource to call the action on.  
`action`| `atom`| | The name of the action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`initial`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | The record to update.  
`return_destroyed?`| `boolean`| `false`| Whether or not the step should return the destroyed record upon completion.  
`domain`| `module`| | The Domain to use when calling the action. Defaults to the Domain set on the resource or in the `ash` section.  
`async?`| `boolean`| `true`| When set to true the step will be executed asynchronously via Reactor's `TaskSupervisor`.  
`authorize?`| `boolean | nil`| | Explicitly enable or disable authorization for the action.  
`description`| `String.t`| | A description for the step  
`undo_action`| `atom`| | The name of the action to call on the resource when the step is to be undone.  
`undo`| `:always | :never | :outside_transaction`| `:never`| How to handle undoing this action  
  
##  __ reactor.destroy.actor
    
    
    actor source

Specifies the action actor

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the actor.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the actor before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Actor`](external_link)

##  __ reactor.destroy.inputs
    
    
    inputs template

Specify the inputs for an action

###  __ Examples
    
    
    inputs %{
      author: result(:get_user),
      title: input(:title),
      body: input(:body)
    }
    
    
    
    inputs(author: result(:get_user))
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`template`| `%{optional(atom) => Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value} | keyword(Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value)`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which will transform the inputs before executing the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Inputs`](external_link)

##  __ reactor.destroy.load
    
    
    load source

Allows the addition of an Ash load statement to the action

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the load  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the load before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.ActionLoad`](external_link)

##  __ reactor.destroy.tenant
    
    
    tenant source

Specifies the action tenant

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the tenant.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the tenant before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Tenant`](external_link)

##  __ reactor.destroy.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.Destroy`](external_link)

##  __ reactor.load
    
    
    load name, records, load

Declares a step that will load additional data on a resource.

###  __ Nested DSLs

  * actor
  * tenant
  * wait_for



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step.  
`records`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | The records upon which to add extra loaded data  
`load`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | An Ash load statement  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`domain`| `module`| | The Domain to use when calling the action. Defaults to the Domain set on the resource or in the `ash` section.  
`async?`| `boolean`| `true`| When set to true the step will be executed asynchronously via Reactor's `TaskSupervisor`.  
`authorize?`| `boolean | nil`| | Explicitly enable or disable authorization for the action.  
`description`| `String.t`| | A description for the step  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the load statement before it is passed to the load.  
`lazy?`| `boolean`| | If set to true, values will only be loaded if the related value isn't currently loaded.  
`reuse_values?`| `boolean`| | Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer.  
`strict?`| `boolean`| | If set to true, only specified attributes will be loaded when passing a list of fields to fetch on a relationship, which allows for more optimized data-fetching.  
  
##  __ reactor.load.actor
    
    
    actor source

Specifies the action actor

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the actor.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the actor before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Actor`](external_link)

##  __ reactor.load.tenant
    
    
    tenant source

Specifies the action tenant

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the tenant.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the tenant before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Tenant`](external_link)

##  __ reactor.load.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.Load`](external_link)

##  __ reactor.read_one
    
    
    read_one name, resource, action \\ nil

Declares a step that will call a read action on a resource returning a single record.

###  __ Nested DSLs

  * actor
  * inputs
  * load
  * tenant
  * wait_for



###  __ Examples
    
    
    read_one :post_by_id, MyApp.Post, :read do
      inputs %{id: input(:post_id)}
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step.  
`resource`| `module`| | The resource to call the action on.  
`action`| `atom`| | The name of the action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`fail_on_not_found?`| `boolean`| `false`| When set to true the step will fail if the resource is not found.  
`domain`| `module`| | The Domain to use when calling the action. Defaults to the Domain set on the resource or in the `ash` section.  
`async?`| `boolean`| `true`| When set to true the step will be executed asynchronously via Reactor's `TaskSupervisor`.  
`authorize?`| `boolean | nil`| | Explicitly enable or disable authorization for the action.  
`description`| `String.t`| | A description for the step  
  
##  __ reactor.read_one.actor
    
    
    actor source

Specifies the action actor

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the actor.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the actor before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Actor`](external_link)

##  __ reactor.read_one.inputs
    
    
    inputs template

Specify the inputs for an action

###  __ Examples
    
    
    inputs %{
      author: result(:get_user),
      title: input(:title),
      body: input(:body)
    }
    
    
    
    inputs(author: result(:get_user))
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`template`| `%{optional(atom) => Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value} | keyword(Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value)`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which will transform the inputs before executing the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Inputs`](external_link)

##  __ reactor.read_one.load
    
    
    load source

Allows the addition of an Ash load statement to the action

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the load  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the load before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.ActionLoad`](external_link)

##  __ reactor.read_one.tenant
    
    
    tenant source

Specifies the action tenant

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the tenant.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the tenant before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Tenant`](external_link)

##  __ reactor.read_one.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.ReadOne`](external_link)

##  __ reactor.read
    
    
    read name, resource, action \\ nil

Declares a step that will call a read action on a resource.

###  __ Nested DSLs

  * actor
  * inputs
  * load
  * tenant
  * wait_for



###  __ Examples
    
    
    read :read_posts, MyApp.Post, :read
    
    
    
    read :read_posts_in_range, MyApp.Post, :read_in_range do
      inputs %{min_date: input(:min_date), max_date: input(:max_date)}
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step.  
`resource`| `module`| | The resource to call the action on.  
`action`| `atom`| | The name of the action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`domain`| `module`| | The Domain to use when calling the action. Defaults to the Domain set on the resource or in the `ash` section.  
`async?`| `boolean`| `true`| When set to true the step will be executed asynchronously via Reactor's `TaskSupervisor`.  
`authorize?`| `boolean | nil`| | Explicitly enable or disable authorization for the action.  
`description`| `String.t`| | A description for the step  
  
##  __ reactor.read.actor
    
    
    actor source

Specifies the action actor

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the actor.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the actor before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Actor`](external_link)

##  __ reactor.read.inputs
    
    
    inputs template

Specify the inputs for an action

###  __ Examples
    
    
    inputs %{
      author: result(:get_user),
      title: input(:title),
      body: input(:body)
    }
    
    
    
    inputs(author: result(:get_user))
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`template`| `%{optional(atom) => Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value} | keyword(Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value)`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which will transform the inputs before executing the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Inputs`](external_link)

##  __ reactor.read.load
    
    
    load source

Allows the addition of an Ash load statement to the action

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the load  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the load before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.ActionLoad`](external_link)

##  __ reactor.read.tenant
    
    
    tenant source

Specifies the action tenant

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the tenant.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the tenant before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Tenant`](external_link)

##  __ reactor.read.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.Read`](external_link)

##  __ reactor.transaction
    
    
    transaction name, resources

Creates a group of steps which will be executed inside a data layer transaction.

###  __ Nested DSLs

  * wait_for



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step.  
`resources`| `module | list(module)`| | A resource or list of resources to consider in the transaction.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`return`| `atom`| | The name of the step whose result will be returned as the return value of the transaction.  
`timeout`| `pos_integer | :infinity`| `15000`| How long to allow the transaction to run before timing out.  
  
##  __ reactor.transaction.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.Transaction`](external_link)

##  __ reactor.update
    
    
    update name, resource, action \\ nil

Declares a step that will call an update action on a resource.

> #### Undo behaviour
> 
> This step has three different modes of undo.
> 
>   * `never` \- The result of the action is never undone. This is the default.
>   * `always` \- The `undo_action` will always be called.
>   * `outside_transaction` \- The `undo_action` will not be called when running inside a `transaction` block, but will be otherwise.
> 


###  __ Nested DSLs

  * actor
  * inputs
  * load
  * tenant
  * wait_for



###  __ Examples
    
    
    update :publish_post, MyApp.Post, :update do
      initial input(:post)
      inputs %{
        published: value(true)
      }
      actor result(:get_user)
      tenant result(:get_organisation, [:id])
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step.  
`resource`| `module`| | The resource to call the action on.  
`action`| `atom`| | The name of the action to call on the resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`initial`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | The record to update.  
`domain`| `module`| | The Domain to use when calling the action. Defaults to the Domain set on the resource or in the `ash` section.  
`async?`| `boolean`| `true`| When set to true the step will be executed asynchronously via Reactor's `TaskSupervisor`.  
`authorize?`| `boolean | nil`| | Explicitly enable or disable authorization for the action.  
`description`| `String.t`| | A description for the step  
`undo_action`| `atom`| | The name of the action to call on the resource when the step is to be undone.  
`undo`| `:always | :never | :outside_transaction`| `:never`| How to handle undoing this action  
  
##  __ reactor.update.actor
    
    
    actor source

Specifies the action actor

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the actor.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the actor before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Actor`](external_link)

##  __ reactor.update.inputs
    
    
    inputs template

Specify the inputs for an action

###  __ Examples
    
    
    inputs %{
      author: result(:get_user),
      title: input(:title),
      body: input(:body)
    }
    
    
    
    inputs(author: result(:get_user))
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`template`| `%{optional(atom) => Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value} | keyword(Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value)`| |   
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which will transform the inputs before executing the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Inputs`](external_link)

##  __ reactor.update.load
    
    
    load source

Allows the addition of an Ash load statement to the action

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the load  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the load before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.ActionLoad`](external_link)

##  __ reactor.update.tenant
    
    
    tenant source

Specifies the action tenant

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | What to use as the source of the tenant.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the tenant before it is passed to the action.  
  
###  __ Introspection

Target: [`Ash.Reactor.Dsl.Tenant`](external_link)

##  __ reactor.update.wait_for
    
    
    wait_for names

Wait for the named step to complete before allowing this one to start.

Desugars to `argument :_, result(step_to_wait_for)`

###  __ Examples
    
    
    wait_for :create_user

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`names`| `atom | list(atom)`| | The name of the step to wait for.  
  
###  __ Introspection

Target: [`Reactor.Dsl.WaitFor`](external_link)

###  __ Introspection

Target: [`Ash.Reactor.Dsl.Update`](external_link)

[ ← Previous Page  DSL: Ash.DataLayer.Mnesia  ](external_link)
