# Ash.Tracer — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Tracer behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- metadata()
- span_type()
- t()
- __ Callbacks
- get_span_context()
- set_error(t)
- set_error(t, t)
- set_handled_error(t, t)
- set_metadata(span_type, metadata)
- set_span_context(term)
- start_span(span_type, name)
- stop_span()
- trace_type?(atom)
- __ Functions
- get_span_context(tracer)
- set_error(tracers, error)
- set_error(tracers, error, opts)
- set_handled_error(tracers, error, opts)
- set_metadata(tracers, type, metadata)
- set_span_context(tracer, context)
- span(type, name, tracer, block_opts \\\ [])
- start_span(tracers, type, name)
- stop_span(tracers)
- telemetry_span(name, metadata, opts \\\ [], block_opts)
- trace_type?(tracer, type)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Tracer behaviour (ash v3.4.8)

A behaviour for implementing tracing for an Ash application.

#  __ Summary

##  Types

metadata()

span_type()

t()

##  Callbacks

get_span_context()

set_error(t)

set_error(t, t)

set_handled_error(t, t)

set_metadata(span_type, metadata)

Set metadata for the current span.

set_span_context(term)

start_span(span_type, name)

stop_span()

trace_type?(atom)

##  Functions

get_span_context(tracer)

set_error(tracers, error)

set_error(tracers, error, opts)

set_handled_error(tracers, error, opts)

set_metadata(tracers, type, metadata)

set_span_context(tracer, context)

span(type, name, tracer, block_opts \\\ [])

start_span(tracers, type, name)

stop_span(tracers)

telemetry_span(name, metadata, opts \\\ [], block_opts)

trace_type?(tracer, type)

#  __ Types

__ Link to this type

# metadata()

[ __ View Source ](external_link)
    
    
    @type metadata() :: %{
      domain: nil | [module](external_link)(),
      resource: nil | [module](external_link)(),
      actor: [term](external_link)(),
      tenant: [term](external_link)(),
      action: [atom](external_link)(),
      authorize?: [boolean](external_link)()
    }

__ Link to this type

# span_type()

[ __ View Source ](external_link)
    
    
    @type span_type() ::
      :action
      | :changeset
      | :query
      | :flow
      | :request_step
      | :change
      | :validation
      | :preparation
      | :custom_flow_step
      | :custom
      | :before_transaction
      | :before_action
      | :after_transaction
      | :after_action
      | {:custom, [atom](external_link)()}

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [module](external_link)()

#  __ Callbacks

__ Link to this callback

# get_span_context()

[ __ View Source ](external_link)
    
    
    @callback get_span_context() :: [term](external_link)()

__ Link to this callback

# set_error(t)

[ __ View Source ](external_link) (optional)
    
    
    @callback set_error([Exception.t](external_link)()) :: :ok

__ Link to this callback

# set_error(t, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback set_error([Exception.t](external_link)(), [Keyword.t](external_link)()) :: :ok

__ Link to this callback

# set_handled_error(t, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback set_handled_error([Exception.t](external_link)(), [Keyword.t](external_link)()) :: :ok

__ Link to this callback

# set_metadata(span_type, metadata)

[ __ View Source ](external_link)
    
    
    @callback set_metadata(span_type(), metadata()) :: :ok

Set metadata for the current span.

This may be called multiple times per span, and should ideally merge with previous metadata.

__ Link to this callback

# set_span_context(term)

[ __ View Source ](external_link)
    
    
    @callback set_span_context([term](external_link)()) :: :ok

__ Link to this callback

# start_span(span_type, name)

[ __ View Source ](external_link)
    
    
    @callback start_span(span_type(), name :: [String.t](external_link)()) :: :ok

__ Link to this callback

# stop_span()

[ __ View Source ](external_link)
    
    
    @callback stop_span() :: :ok

__ Link to this callback

# trace_type?(atom)

[ __ View Source ](external_link) (optional)
    
    
    @callback trace_type?([atom](external_link)()) :: [boolean](external_link)()

#  __ Functions

__ Link to this function

# get_span_context(tracer)

[ __ View Source ](external_link)

__ Link to this function

# set_error(tracers, error)

[ __ View Source ](external_link)

__ Link to this function

# set_error(tracers, error, opts)

[ __ View Source ](external_link)

__ Link to this function

# set_handled_error(tracers, error, opts)

[ __ View Source ](external_link)

__ Link to this function

# set_metadata(tracers, type, metadata)

[ __ View Source ](external_link)

__ Link to this function

# set_span_context(tracer, context)

[ __ View Source ](external_link)

__ Link to this macro

# span(type, name, tracer, block_opts \\\ [])

[ __ View Source ](external_link) (macro)

__ Link to this function

# start_span(tracers, type, name)

[ __ View Source ](external_link)

__ Link to this function

# stop_span(tracers)

[ __ View Source ](external_link)

__ Link to this macro

# telemetry_span(name, metadata, opts \\\ [], block_opts)

[ __ View Source ](external_link) (macro)

__ Link to this function

# trace_type?(tracer, type)

[ __ View Source ](external_link)
