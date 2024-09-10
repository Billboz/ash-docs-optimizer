# Reactor.Builder — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Builder (reactor v0.9.1)
  - __ Example
- __ Summary
  - Types
  - Functions
- __ Types
- arguments_transform()
- async?()
- context()
- impl()
- max_retries()
- ref()
- step_argument()
- step_options()
- __ Functions
- add_input(reactor, name, transform \\\ nil)
- add_input!(reactor, name, transform \\\ nil)
- add_middleware(reactor, middleware)
- add_middleware!(reactor, middleware)
- add_step(reactor, name, impl, arguments \\\ [], options \\\ [])
- add_step!(reactor, name, impl, arguments \\\ [], options \\\ [])
- compose(reactor, name, inner_reactor, arguments)
- compose!(reactor, name, inner_reactor, arguments)
- ensure_middleware(reactor, middleware)
- ensure_middleware!(reactor, middleware)
- new(id \\\ make_ref())
- new_step(name, impl, arguments \\\ [], options \\\ [])
- new_step!(name, impl, arguments \\\ [], options \\\ [])
- return(reactor, name)
- return!(reactor, name)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Builder (reactor v0.9.1)

Build a new Reactor programmatically.

You don't _have_ to use the Reactor DSL to create a Reactor. The functions in this module allow you to define a Reactor programmatically. This is especially useful if you need to create a reactor dynamically (maybe based on a UI such as [React Flow](external_link)).

##  __ Example
    
    
    reactor = Builder.new()
    {:ok, reactor} = Builder.add_input(reactor, :name)
    argument = Argument.from_input(:name)
    {:ok, reactor} = Builder.add_step(reactor, :greet, [argument])
    {:ok, reactor} = Builder.return(reactor, :greet)

#  __ Summary

##  Types

arguments_transform()

Optionally transform all the arguments into new arguments

async?()

Should the step be run asynchronously?

context()

Optional context which will be merged with the reactor context when calling this step.

impl()

max_retries()

How many times is the step allowed to retry?

ref()

step_argument()

step_options()

##  Functions

add_input(reactor, name, transform \\\ nil)

Add a named input to the Reactor.

add_input!(reactor, name, transform \\\ nil)

Raising version of `add_input/2..3`.

add_middleware(reactor, middleware)

Add a middleware to the Reactor.

add_middleware!(reactor, middleware)

Raising version of `add_middleware/2`.

add_step(reactor, name, impl, arguments \\\ [], options \\\ [])

Add a step to the Reactor.

add_step!(reactor, name, impl, arguments \\\ [], options \\\ [])

Raising version of `add_step/3..5`.

compose(reactor, name, inner_reactor, arguments)

Compose another Reactor inside this one.

compose!(reactor, name, inner_reactor, arguments)

Raising version of `compose/4`.

ensure_middleware(reactor, middleware)

Ensure that a middleware is present on the Reactor.

ensure_middleware!(reactor, middleware)

Raising version of `ensure_middleware/2`.

new(id \\\ make_ref())

Build a new, empty Reactor.

new_step(name, impl, arguments \\\ [], options \\\ [])

Build a step which can be added to a reactor at runtime.

new_step!(name, impl, arguments \\\ [], options \\\ [])

Raising version of `new_step/2..4`.

return(reactor, name)

Specify the return value of the Reactor.

return!(reactor, name)

Raising version of `return/2`.

#  __ Types

__ Link to this type

# arguments_transform()

[ __ View Source ](external_link)
    
    
    @type arguments_transform() ::
      {:transform,
       nil
       | (%{optional([atom](external_link)()) => [any](external_link)()} -> %{optional([atom](external_link)()) => [any](external_link)()})
       | {[module](external_link)() | [keyword](external_link)()}
       | [mfa](external_link)()}

Optionally transform all the arguments into new arguments

__ Link to this type

# async?()

[ __ View Source ](external_link)
    
    
    @type async?() :: {:async?, [boolean](external_link)() | ([keyword](external_link)() -> [boolean](external_link)())}

Should the step be run asynchronously?

__ Link to this type

# context()

[ __ View Source ](external_link)
    
    
    @type context() :: [Reactor.context](external_link)()

Optional context which will be merged with the reactor context when calling this step.

__ Link to this type

# impl()

[ __ View Source ](external_link)
    
    
    @type impl() :: [module](external_link)() | {[module](external_link)(), [keyword](external_link)()}

__ Link to this type

# max_retries()

[ __ View Source ](external_link)
    
    
    @type max_retries() :: {:max_retries, :infinity | [non_neg_integer](external_link)()}

How many times is the step allowed to retry?

__ Link to this type

# ref()

[ __ View Source ](external_link)
    
    
    @type ref() :: {:ref, :step_name | :make_ref}

__ Link to this type

# step_argument()

[ __ View Source ](external_link)
    
    
    @type step_argument() :: [Reactor.Argument.t](external_link)() | {[atom](external_link)(), {:input | :result, [any](external_link)()}}

__ Link to this type

# step_options()

[ __ View Source ](external_link)
    
    
    @type step_options() :: [
      async?() | max_retries() | arguments_transform() | context() | ref()
    ]

#  __ Functions

__ Link to this function

# add_input(reactor, name, transform \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec add_input([Reactor.t](external_link)(), [any](external_link)(), nil | ([any](external_link)() -> [any](external_link)())) ::
      {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Add a named input to the Reactor.

This both places the input in the Reactor for later input validation and adds steps to the Reactor which will emit and (possibly) transform the input.

__ Link to this function

# add_input!(reactor, name, transform \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec add_input!([Reactor.t](external_link)(), [any](external_link)(), nil | ([any](external_link)() -> [any](external_link)())) ::
      [Reactor.t](external_link)() | [no_return](external_link)()

Raising version of `add_input/2..3`.

__ Link to this function

# add_middleware(reactor, middleware)

[ __ View Source ](external_link)
    
    
    @spec add_middleware([Reactor.t](external_link)(), [Reactor.Middleware.t](external_link)()) ::
      {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Add a middleware to the Reactor.

Returns an error if the middleware is already present on the Reactor.

__ Link to this function

# add_middleware!(reactor, middleware)

[ __ View Source ](external_link)
    
    
    @spec add_middleware!([Reactor.t](external_link)(), [Reactor.Middleware.t](external_link)()) ::
      [Reactor.t](external_link)() | [no_return](external_link)()

Raising version of `add_middleware/2`.

__ Link to this function

# add_step(reactor, name, impl, arguments \\\ [], options \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_step(
      [Reactor.t](external_link)(),
      name :: [any](external_link)(),
      impl(),
      [step_argument()],
      step_options()
    ) :: {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Add a step to the Reactor.

Add a new step to the Reactor. Rewrites input arguments to use the result of the input steps and injects transformation steps as required.

__ Link to this function

# add_step!(reactor, name, impl, arguments \\\ [], options \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_step!([Reactor.t](external_link)(), name :: [any](external_link)(), impl(), [step_argument()], step_options()) ::
      [Reactor.t](external_link)() | [no_return](external_link)()

Raising version of `add_step/3..5`.

__ Link to this function

# compose(reactor, name, inner_reactor, arguments)

[ __ View Source ](external_link)
    
    
    @spec compose([Reactor.t](external_link)(), [atom](external_link)(), [Reactor.t](external_link)() | [module](external_link)(), [step_argument()]) ::
      {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Compose another Reactor inside this one.

Whenever possible this function will extract the steps from inner Reactor and place them inside the parent Reactor. In order to achieve this the composer will rename the steps to ensure that there are no conflicts.

If you're attempting to create a recursive Reactor (ie compose a Reactor within itself) then this will be detected and runtime composition will be used instead. See [`Reactor.Step.Compose`](external_link) for more details.

__ Link to this function

# compose!(reactor, name, inner_reactor, arguments)

[ __ View Source ](external_link)
    
    
    @spec compose!([Reactor.t](external_link)(), [atom](external_link)(), [Reactor.t](external_link)() | [module](external_link)(), [step_argument()]) ::
      [Reactor.t](external_link)() | [no_return](external_link)()

Raising version of `compose/4`.

__ Link to this function

# ensure_middleware(reactor, middleware)

[ __ View Source ](external_link)
    
    
    @spec ensure_middleware([Reactor.t](external_link)(), [Reactor.Middleware.t](external_link)()) ::
      {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Ensure that a middleware is present on the Reactor.

__ Link to this function

# ensure_middleware!(reactor, middleware)

[ __ View Source ](external_link)
    
    
    @spec ensure_middleware!([Reactor.t](external_link)(), [Reactor.Middleware.t](external_link)()) ::
      [Reactor.t](external_link)() | [no_return](external_link)()

Raising version of `ensure_middleware/2`.

__ Link to this function

# new(id \\\ make_ref())

[ __ View Source ](external_link)
    
    
    @spec new([any](external_link)()) :: [Reactor.t](external_link)()

Build a new, empty Reactor.

Optionally an identifier for the Reactor. This is primarily used for recursive composition tracking.

__ Link to this function

# new_step(name, impl, arguments \\\ [], options \\\ [])

[ __ View Source ](external_link)
    
    
    @spec new_step([any](external_link)(), impl(), [step_argument()], step_options()) ::
      {:ok, [Reactor.Step.t](external_link)()} | {:error, [any](external_link)()}

Build a step which can be added to a reactor at runtime.

Note that the built step doesn't support transformations - you should add an additional step to do the transformation needed (this is what `add_step/5` does anyway).

__ Link to this function

# new_step!(name, impl, arguments \\\ [], options \\\ [])

[ __ View Source ](external_link)
    
    
    @spec new_step!([any](external_link)(), impl(), [step_argument()], step_options()) ::
      [Reactor.Step.t](external_link)() | [no_return](external_link)()

Raising version of `new_step/2..4`.

__ Link to this function

# return(reactor, name)

[ __ View Source ](external_link)
    
    
    @spec return([Reactor.t](external_link)(), [any](external_link)()) :: {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Specify the return value of the Reactor.

The return value must be the name of a step.

__ Link to this function

# return!(reactor, name)

[ __ View Source ](external_link)
    
    
    @spec return!([Reactor.t](external_link)(), [any](external_link)()) :: [Reactor.t](external_link)() | [no_return](external_link)()

Raising version of `return/2`.
