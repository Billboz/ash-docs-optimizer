# Reactor.Step.Map — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Step.Map (reactor v0.9.1)
  - __ Options

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Step.Map (reactor v0.9.1)

Given an iterable input run the provided steps for each element and collect the results into a new value.

> #### A note on ordering
> 
> If your application doesn't need the results back in the same order that they were provided then setting `strict_ordering?` to `false` will increase performance - especially on large input sets.

##  __ Options

  * `:state` \- Required. The current execution state of the map. This is required because it's recursive. Valid values are :init, :iterating

  * `:batch_size` ([`pos_integer/0`](external_link)) - The number of elements to consume off the source when emitting steps. The default value is `100`.

  * `:steps` (list of struct of type [`Reactor.Step`](external_link)) - Required. The steps to use when mapping source elements.

  * `:return` ([`atom/0`](external_link)) - Required. The name of the step whose result will be used as the new value for each element.

  * `:strict_ordering?` ([`boolean/0`](external_link)) - Whether the mapped values must be returned in the same order that they were provided. The default value is `true`.

  * `:allow_async?` ([`boolean/0`](external_link)) - Whether the emitted steps should be allowed to run asynchronously. The default value is `true`.

  * `:descendant_step_names` (struct of type [`MapSet`](external_link)) - The cached names of all descendant steps to aid rewriting. You don't need to provide this value - it is calculated by the init pass.

  * `:extra_arguments` (list of struct of type [`Reactor.Argument`](external_link)) - Extra arguments to be passed by to every nested step.



