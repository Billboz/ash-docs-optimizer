# Reactor.Step.TransformAll — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Step.TransformAll (reactor v0.9.1)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Step.TransformAll (reactor v0.9.1)

A built-in step which applies a transformation function to all it's arguments.

The returned map is used as the arguments to the step, instead of the step's defined arguments.

> #### Tip
> 
> This step will be emitted by the builder when a step wants to transform all it's arguments.
> 
> Most likely you will never need to use this step directly.
