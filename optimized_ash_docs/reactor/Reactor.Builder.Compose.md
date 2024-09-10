# Reactor.Builder.Compose — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Builder.Compose (reactor v0.9.1)
- __ Summary
  - Functions
- __ Functions
- compose(reactor, name, inner_reactor, arguments)
- do_static_compose(reactor, name, inner_reactor, arguments)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Builder.Compose (reactor v0.9.1)

Handle composition of Reactors for the builder.

The composition logic was getting complicated enough that it seemed sensible to extract it from the builder - if only to aid readability.

You should not use this module directly, but instead use [`Reactor.Builder.compose/4`](external_link).

#  __ Summary

##  Functions

compose(reactor, name, inner_reactor, arguments)

Compose another Reactor inside this one.

do_static_compose(reactor, name, inner_reactor, arguments)

#  __ Functions

__ Link to this function

# compose(reactor, name, inner_reactor, arguments)

[ __ View Source ](external_link)
    
    
    @spec compose([Reactor.t](external_link)(), [atom](external_link)(), [Reactor.t](external_link)() | [module](external_link)(), [
      [Reactor.Builder.step_argument](external_link)()
    ]) ::
      {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Compose another Reactor inside this one.

__ Link to this function

# do_static_compose(reactor, name, inner_reactor, arguments)

[ __ View Source ](external_link)
