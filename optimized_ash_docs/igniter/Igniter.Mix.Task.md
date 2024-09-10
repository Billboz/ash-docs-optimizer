# Igniter.Mix.Task — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Mix.Task behaviour (igniter v0.3.29)
- __ Summary
  - Callbacks
  - Functions
- __ Callbacks
- igniter(igniter, argv)
- info(argv, composing_task)
  - __ Important Limitations
- supports_umbrella?()
- __ Functions
- options!(argv)
- positional_args!(argv)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Mix.Task behaviour (igniter v0.3.29)

A behaviour for implementing a Mix task that is enriched to be composable with other Igniter tasks.

#  __ Summary

##  Callbacks

igniter(igniter, argv)

All the generator behavior happens here, you take an igniter and task arguments, and return an igniter.

info(argv, composing_task)

Returns an [`Igniter.Mix.Task.Info`](external_link) struct, with information used when running the igniter task.

supports_umbrella?()

Whether or not it supports being run in the root of an umbrella project

##  Functions

options!(argv)

Parses the options for the task based on its info.

positional_args!(argv)

#  __ Callbacks

__ Link to this callback

# igniter(igniter, argv)

[ __ View Source ](external_link)
    
    
    @callback igniter(igniter :: [Igniter.t](external_link)(), argv :: [[String.t](external_link)()]) :: [Igniter.t](external_link)()

All the generator behavior happens here, you take an igniter and task arguments, and return an igniter.

__ Link to this callback

# info(argv, composing_task)

[ __ View Source ](external_link)
    
    
    @callback info(argv :: [[String.t](external_link)()], composing_task :: nil | [String.t](external_link)()) ::
      [Igniter.Mix.Task.Info.t](external_link)()

Returns an [`Igniter.Mix.Task.Info`](external_link) struct, with information used when running the igniter task.

This info will be used to validate arguments in composed tasks.

Use the `positional_args!(argv)` to get your positional arguments according to your `info.positional`, and the remaining unused args. Use the `options!(argv)` macro to get your parsed options according to your `info.schema`.

##  __ Important Limitations

  * Each task still must parse its own argv in `igniter/2` and _must_ ignore any unknown options. To accomplish this, use the automatically imported `options!(argv)` macro, which uses the `info/2` callback to validate args and return options
  * You cannot use `composes` to list tasks unless they are in your library or in direct dependencies of your library. To validate their options, you must include their options in your own option schema.



__ Link to this callback

# supports_umbrella?()

[ __ View Source ](external_link)
    
    
    @callback supports_umbrella?() :: [boolean](external_link)()

Whether or not it supports being run in the root of an umbrella project

At the moment, this is still experimental and we suggest not turning it on.

#  __ Functions

__ Link to this macro

# options!(argv)

[ __ View Source ](external_link) (macro)
    
    
    @spec options!(argv :: [term](external_link)()) :: [term](external_link)() | [no_return](external_link)()

Parses the options for the task based on its info.

__ Link to this macro

# positional_args!(argv)

[ __ View Source ](external_link) (macro)
