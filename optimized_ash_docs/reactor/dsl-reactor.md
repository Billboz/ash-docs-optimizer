# DSL: Reactor.Dsl — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) DSL: Reactor.Dsl
  - __ reactor
    - __ Nested DSLs
    - __ Options
  - __ reactor.middlewares
    - __ Nested DSLs
  - __ reactor.middlewares.middleware
    - __ Arguments
    - __ Introspection
  - __ reactor.around
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ reactor.around.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.around.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.collect
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.collect.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.collect.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.compose
    - __ Nested DSLs
    - __ Arguments
  - __ reactor.compose.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.compose.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.debug
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.debug.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.debug.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.group
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ reactor.group.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.group.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.input
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.map
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.map.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.map.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.step
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ reactor.step.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.step.wait_for
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ reactor.switch
    - __ Nested DSLs
    - __ Arguments
    - __ Options
  - __ reactor.switch.matches?
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ reactor.switch.default
    - __ Options
    - __ Introspection
    - __ Introspection

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) DSL: Reactor.Dsl

##  __ reactor

The top-level reactor DSL

###  __ Nested DSLs

  * middlewares
    * middleware
  * around
    * argument
    * wait_for
  * collect
    * argument
    * wait_for
  * compose
    * argument
    * wait_for
  * debug
    * argument
    * wait_for
  * group
    * argument
    * wait_for
  * input
  * map
    * argument
    * wait_for
  * step
    * argument
    * wait_for
  * switch
    * matches?

    * default




###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`return`| `atom`| | Specify which step result to return upon completion.  
  
##  __ reactor.middlewares

Middleware to be added to the Reactor

###  __ Nested DSLs

  * middleware



##  __ reactor.middlewares.middleware
    
    
    middleware module

Name a middleware to be added to the Reactor.

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`module`| `module`| | The middleware to be added to the Reactor.  
  
###  __ Introspection

Target: [`Reactor.Dsl.Middleware`](external_link)

##  __ reactor.around
    
    
    around name, fun \\ nil

Wrap a function around a group of steps.

###  __ Nested DSLs

  * argument
  * wait_for



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the group of steps.  
`fun`| `(any, any, any, any -> any) | mfa`| | The around function. See [`Reactor.Step.Around`](external_link) for more information.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`allow_async?`| `boolean`| `false`| Whether the emitted steps should be allowed to run asynchronously.  
  
##  __ reactor.around.argument
    
    
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

##  __ reactor.around.wait_for
    
    
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

Target: [`Reactor.Dsl.Around`](external_link)

##  __ reactor.collect
    
    
    collect name

A Reactor step which simply collects and returns it's arguments.

Arguments can optionally be transformed before returning.

###  __ Nested DSLs

  * argument
  * wait_for



###  __ Examples
    
    
    collect :latest_release_uri do
      argument :repository, input(:repository)
      argument :organisation, input(:organisation)
    
      transform fn inputs ->
        %{uri: "https://api.github.com/repos/#{inputs.organisation}/#{inputs.repository}/releases/latest"}
      end
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step. Used when choosing the return value of the Reactor and for arguments into other steps.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the entire argument map before it is returned.  
  
##  __ reactor.collect.argument
    
    
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

##  __ reactor.collect.wait_for
    
    
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

Target: [`Reactor.Dsl.Collect`](external_link)

##  __ reactor.compose
    
    
    compose name, reactor

Compose another Reactor into this one.

Allows place another Reactor into this one as if it were a single step.

###  __ Nested DSLs

  * argument
  * wait_for



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step. Allows the result of the composed reactor to be depended upon by steps in this reactor.  
`reactor`| `Reactor | module`| | The reactor module or struct to compose upon.  
  
##  __ reactor.compose.argument
    
    
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

##  __ reactor.compose.wait_for
    
    
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

Target: [`Reactor.Dsl.Compose`](external_link)

##  __ reactor.debug
    
    
    debug name

Inserts a step which will send debug information to the [`Logger`](external_link).

###  __ Nested DSLs

  * argument
  * wait_for



###  __ Examples
    
    
    debug :debug do
      argument :suss, result(:suss_step)
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique identifier for the step.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`level`| `:emergency | :alert | :critical | :error | :warning | :notice | :info | :debug`| `:debug`| The log level to send the debug information to.  
  
##  __ reactor.debug.argument
    
    
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

##  __ reactor.debug.wait_for
    
    
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

Target: [`Reactor.Dsl.Debug`](external_link)

##  __ reactor.group
    
    
    group name

Call functions before and after a group of steps.

###  __ Nested DSLs

  * argument
  * wait_for



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the group of steps.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`before_all`| `(any, any, any -> any) | mfa`| | The before function. See [`Reactor.Step.Group`](external_link) for more information.  
`after_all`| `(any -> any) | mfa`| | The after function. See [`Reactor.Step.Group`](external_link) for more information.  
`allow_async?`| `boolean`| `true`| Whether the emitted steps should be allowed to run asynchronously.  
  
##  __ reactor.group.argument
    
    
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

##  __ reactor.group.wait_for
    
    
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

Target: [`Reactor.Dsl.Group`](external_link)

##  __ reactor.input
    
    
    input name

Specifies an input to the Reactor.

An input is a value passed in to the Reactor when executing. If a Reactor were a function, these would be it's arguments.

Inputs can be transformed with an arbitrary function before being passed to any steps.

###  __ Examples
    
    
    input :name
    
    
    
    input :age do
      transform &String.to_integer/1
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for this input. Used to allow steps to depend on it.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transform`| `(any -> any) | module | nil`| | An optional transformation function which can be used to modify the input before it is passed to any steps.  
  
###  __ Introspection

Target: [`Reactor.Dsl.Input`](external_link)

##  __ reactor.map
    
    
    map name

Execute nested steps for every item of an iterator.

Allows you to "map over" a collection applying a some steps to each element, returning a list of new values. The input collection must be bounded - ie you cannot pass infinite streams into this step or it will just loop forever - and because it has to keep the results from each batch will eventually just use up all available RAM.

Under the hood we use [`Iter`](external_link) to handle lazy iteration of the collection. This means that you can pass an `Iter.t` or any value for which [`Iter.IntoIterable`](external_link) is implemented.

> #### A note on ordering
> 
> If your application doesn't need the results back in the same order that they were provided then setting `strict_ordering?` to `false` will increase performance - especially on large input sets.

###  __ Nested DSLs

  * argument
  * wait_for



###  __ Examples
    
    
    map :double_numbers do
      input input(:numbers)
    
      step :double do
        argument :number, element(:double_numbers)
    
        run %{number: number}, _, _ ->
          {:ok, number * 2}
        end
      end
    end
    
    
    
    step :get_subscriptions do
      run _, _, _ ->
        Stripe.Subscription.list()
      end
    end
    
    map :cancel_subscriptions do
      input result(:get_subscriptions)
    
      step :cancel do
        argument :sub_id, element(:cancel_subscriptions, [:id])
    
        run fn args, _, _ ->
          Stripe.Subscription.cancel(arg.sub_id, %{prorate: true, invoice_now: true})
        end
      end
    
      return :cancel
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the step.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`source`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | The iterator or enumerable to use as the source of the iteration.  
`allow_async?`| `boolean`| `false`| Whether the emitted steps should be allowed to run asynchronously.  
`batch_size`| `pos_integer`| `100`| The number of items to consume off the source when emitting steps.  
`return`| `atom`| | The name of the nested step to use as the return value.  
`strict_ordering?`| `boolean`| `true`| Whether the mapped values must be returned in the same order that they were provided.  
  
##  __ reactor.map.argument
    
    
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

##  __ reactor.map.wait_for
    
    
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

Target: [`Reactor.Dsl.Map`](external_link)

##  __ reactor.step
    
    
    step name, impl \\ nil

Specifies a Reactor step.

Steps are the unit of work in a Reactor. Reactor will calculate the dependencies graph between the steps and execute as many as it can in each iteration.

See the [`Reactor.Step`](external_link) behaviour for more information.

###  __ Nested DSLs

  * argument
  * wait_for



###  __ Examples
    
    
    step :create_user, MyApp.Steps.CreateUser do
      argument :username, input(:username)
      argument :password_hash, result(:hash_password)
    end
    
    
    
    step :hash_password do
      argument :password, input(:password)
    
      run fn %{password: password}, _ ->
        {:ok, Bcrypt.hash_pwd_salt(password)}
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
  
##  __ reactor.step.argument
    
    
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

##  __ reactor.step.wait_for
    
    
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

Target: [`Reactor.Dsl.Step`](external_link)

##  __ reactor.switch
    
    
    switch name

Use a predicate to determine which steps should be executed.

###  __ Nested DSLs

  * matches?

  * default




###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique name for the switch.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`on`| `Reactor.Template.Element | Reactor.Template.Input | Reactor.Template.Result | Reactor.Template.Value`| | The value to match against.  
`allow_async?`| `boolean`| `true`| Whether the emitted steps should be allowed to run asynchronously.  
  
##  __ reactor.switch.matches?
    
    
    matches? predicate

A group of steps to run when the predicate matches.

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`predicate`| `(any -> any) | mfa`| | A one-arity function which is used to match the switch input. If the switch returns a truthy value, then the nested steps will be run.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`allow_async?`| `boolean`| `true`| Whether the emitted steps should be allowed to run asynchronously.  
`return`| `atom`| | Specify which step result to return upon completion.  
  
###  __ Introspection

Target: [`Reactor.Dsl.Switch.Match`](external_link)

##  __ reactor.switch.default

If none of the `matches?` branches match the input, then the `default` steps will be run if provided.

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`return`| `atom`| | Specify which step result to return upon completion.  
  
###  __ Introspection

Target: [`Reactor.Dsl.Switch.Default`](external_link)

###  __ Introspection

Target: [`Reactor.Dsl.Switch`](external_link)

[ ← Previous Page  Getting started with Reactor  ](external_link)
