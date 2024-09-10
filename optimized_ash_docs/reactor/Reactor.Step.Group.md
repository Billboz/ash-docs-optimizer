# Reactor.Step.Group — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Step.Group (reactor v0.9.1)
  - __ Options
  - __ Before function
    - __ Example
  - __ After function
- __ Summary
  - Types
- __ Types
- after_fun()
- after_option()
- allow_async_option()
- before_fun()
- before_option()
- options()
- steps_option()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Step.Group (reactor v0.9.1)

Wrap the execution of a number of steps with before/after functions.

Unlike [`Reactor.Step.Around`](external_link), this step doesn't need to run a nested Reactor instance, but instead can emit the steps directly into the parent Reactor.

##  __ Options

  * `before` \- a three-arity function that will be called before running any child steps.
  * `after` \- a three-arity function that will be called after running any emitted steps.
  * `allow_async?` \- a boolean indicating whether the emitted steps can be executed asynchronously or must remain within the current process.



##  __ Before function

The before function will be passed the following arguments:

  1. `arguments` \- the values of any step arguments needed by the group.
  2. `context` \- the Reactor context.
  3. `steps` \- the list of steps passed in the options.



This provides you the opportunity to modify the arguments, context and list of steps to be executed.

The successful return value should be `{:ok, arguments, context, steps}`. The returned arguments will be used to provide any `input` arguments to nested steps.

###  __ Example
    
    
    def no_time_travel(arguments, context, steps) do
      steps = steps
        |> Enum.filter(&(&1.name == :program_time_circuits))
    
      arguments = arguments
        |> Map.delete(:destination_time)
    
      {:ok, arguments, context, steps}
    end

##  __ After function

The after function will be called with a single argument; a map of the nested step results.

The successful return value should be `{:ok, any}` where `any` will be treated as the result of the group.
    
    
    def find_current_year(results) do
      case Map.fetch(results, :time_circuits) do
        {:ok, %{present_time: present_time}} -> {:ok, present_time.year}
        _ -> {:error, "Unable to read the present time from the time circuits"}
      end
    end

#  __ Summary

##  Types

after_fun()

The after function.

after_option()

The MFA or 1-arity function which this step will call after successfully running the steps.

allow_async_option()

Should the emitted steps be allowed to run asynchronously?

before_fun()

The before function.

before_option()

The MFA or 3-arity function which this step will call before running any steps.

options()

steps_option()

The initial steps to pass into the "before" function.

#  __ Types

__ Link to this type

# after_fun()

[ __ View Source ](external_link)
    
    
    @type after_fun() :: ([Reactor.inputs](external_link)() -> {:ok, [any](external_link)()} | {:error, [any](external_link)()})

The after function.

__ Link to this type

# after_option()

[ __ View Source ](external_link)
    
    
    @type after_option() :: {:after, [mfa](external_link)() | after_fun()}

The MFA or 1-arity function which this step will call after successfully running the steps.

__ Link to this type

# allow_async_option()

[ __ View Source ](external_link)
    
    
    @type allow_async_option() :: {:allow_async?, [boolean](external_link)()}

Should the emitted steps be allowed to run asynchronously?

Optional. Defaults to `true`.

__ Link to this type

# before_fun()

[ __ View Source ](external_link)
    
    
    @type before_fun() ::
      ([Reactor.inputs](external_link)(), [Reactor.context](external_link)(), [[Reactor.Step.t](external_link)()] ->
         {:ok, [Reactor.inputs](external_link)(), [Reactor.context](external_link)(), [[Reactor.Step.t](external_link)()]}
         | {:error, [any](external_link)()})

The before function.

__ Link to this type

# before_option()

[ __ View Source ](external_link)
    
    
    @type before_option() :: {:before, [mfa](external_link)() | before_fun()}

The MFA or 3-arity function which this step will call before running any steps.

__ Link to this type

# options()

[ __ View Source ](external_link)
    
    
    @type options() :: [
      before_option() | after_option() | allow_async_option() | steps_option()
    ]

__ Link to this type

# steps_option()

[ __ View Source ](external_link)
    
    
    @type steps_option() :: {:steps, [[Reactor.Step.t](external_link)()]}

The initial steps to pass into the "before" function.

Optional.
