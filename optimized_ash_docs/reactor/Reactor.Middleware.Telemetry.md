# Reactor.Middleware.Telemetry — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Middleware.Telemetry (reactor v0.9.1)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Middleware.Telemetry (reactor v0.9.1)

A Reactor middleware that emits telemetry events.

The following events are emitted:

  * `[:reactor, :run, :start]`
  * `[:reactor, :run, :stop]`
  * `[:reactor, :step, :run, :start]`
  * `[:reactor, :step, :run, :stop]`
  * `[:reactor, :step, :process, :start]`
  * `[:reactor, :step, :process, :stop]`
  * `[:reactor, :step, :compensate, :start]`
  * `[:reactor, :step, :compensate, :stop]`
  * `[:reactor, :step, :undo, :start]`
  * `[:reactor, :step, :undo, :stop]`


