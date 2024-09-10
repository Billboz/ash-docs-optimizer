# Reactor.Step.Around — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Step.Around (reactor v0.9.1)
  - __ Options
  - __ Wrapper function
  - __ Callback function
  - __ Example
- __ Summary
  - Types
  - Functions
- __ Types
- allow_async_option()
- around_fun()
- callback()
- function_option()
- options()
- steps_option()
- __ Functions
- around(arguments, context, steps, options)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Step.Around (reactor v0.9.1)

Wrap the execution of a number of steps in a function.

This allows you to provide custom context and filter the provided steps as needed.

##  __ Options

  * `fun` \- a four-arity function that will be called when executing this step.
  * `steps` \- a list of steps which are will be provided to the above mentioned function.
  * `allow_async?` \- a boolean indicating whether the nested steps can be executed asynchronously or must remain within the current process.



##  __ Wrapper function

Your around function will be called by this step and will be passed the following arguments:

  * `arguments` \- the arguments passed to the step.
  * `context` \- the context passed to the step.
  * `steps` \- the list of steps passed in the options.
  * `callback` \- a 3 arity function that you can call to execute steps.



This provides you the opportunity to modify the arguments, context and list of steps to be executed. You then can call the callback with the modified arguments, context and steps and they will be executed in a Reactor of their own. The callback will return `{:ok, results}` where results is a map of all of the step results by name, or an error tuple.

You can then modify the result in any way before returning it as the return of the around step.

##  __ Callback function

The callback function will spawn a separate Reactor and run provided steps to completion using `arguments` as input.

It expects the following three arguments to be passed:

  1. `arguments` \- a map of arguments to be used as input to the nested Reactor.
  2. `context` \- the context passed to the nested Reactor.
  3. `steps` \- the list of steps which will be executed in the nested Reactor.



##  __ Example

You could use a function like that below to cause some steps to be executed inside an Ecto database transaction.
    
    
    def in_transaction(arguments, context, steps, callback) do
      MyApp.Repo.transaction(fn ->
        case callback.(arguments, context, steps) do
          {:ok, results} -> result
          {:error, reason} -> raise reason
        end
      end)
    end

#  __ Summary

##  Types

allow_async_option()

Should the inner Reactor be allowed to run tasks asynchronously?

around_fun()

The type signature for the "around" function.

callback()

The type signature for the provided callback function.

function_option()

The MFA or 4-arity function which this step will call.

options()

steps_option()

The initial steps to pass into the "around" function.

##  Functions

around(arguments, context, steps, options)

#  __ Types

__ Link to this type

# allow_async_option()

[ __ View Source ](external_link)
    
    
    @type allow_async_option() :: {:allow_async?, [boolean](external_link)()}

Should the inner Reactor be allowed to run tasks asynchronously?

Optional. Defaults to `true`.

__ Link to this type

# around_fun()

[ __ View Source ](external_link)
    
    
    @type around_fun() ::
      ([Reactor.inputs](external_link)(), [Reactor.context](external_link)(), [[Reactor.Step.t](external_link)()], callback() ->
         {:ok, [any](external_link)()} | {:error, [any](external_link)()})

The type signature for the "around" function.

__ Link to this type

# callback()

[ __ View Source ](external_link)
    
    
    @type callback() ::
      ([Reactor.inputs](external_link)(), [Reactor.context](external_link)(), [[Reactor.Step.t](external_link)()] ->
         {:ok, [any](external_link)()} | {:error, [any](external_link)()})

The type signature for the provided callback function.

__ Link to this type

# function_option()

[ __ View Source ](external_link)
    
    
    @type function_option() :: {:fun, [mfa](external_link)() | around_fun()}

The MFA or 4-arity function which this step will call.

__ Link to this type

# options()

[ __ View Source ](external_link)
    
    
    @type options() :: [function_option() | steps_option() | allow_async_option()]

__ Link to this type

# steps_option()

[ __ View Source ](external_link)
    
    
    @type steps_option() :: {:steps, [[Reactor.Step.t](external_link)()]}

The initial steps to pass into the "around" function.

Optional.

#  __ Functions

__ Link to this function

# around(arguments, context, steps, options)

[ __ View Source ](external_link)
