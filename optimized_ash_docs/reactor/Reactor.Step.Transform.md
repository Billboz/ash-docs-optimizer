# Reactor.Step.Transform — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Step.Transform (reactor v0.9.1)
  - __ Options

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Step.Transform (reactor v0.9.1)

The built-in step for executing input and argument transformations.

Expects a single argument named `value` which contains the value to be transformed.

##  __ Options

  * `fun` \- a one or two arity function or MFA to use to modify the `value` argument.



> #### Tip
> 
> This step is emitted by the builder when an argument needs to be transformed before being passed into a step.
> 
> Most likely you will never need to use this step directly.
