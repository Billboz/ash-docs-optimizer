# Getting Started with AshAppsignal — ash_appsignal v0.1.3

Project: ash_appsignal v0.1.3

## Table of Contents

- Getting Started with AshAppsignal
  - __ Installation
  - __ Configuration

__

Search documentation of ash_appsignal __ __

__ Settings

#  Getting Started with AshAppsignal

##  __ Installation

Add `ash_appsignal` to your list of dependencies in `mix.exs`:
    
    
    def deps do
      [
        {:ash_appsignal, "~> 0.1.2"}
      ]
    end

##  __ Configuration

After installing the `ash_appsignal` dependency, add this to your config:
    
    
    # `config` supports a list, so this can be combined with other tracers
    config :ash, :tracer, [AshAppsignal]
    
    # Optionally configure span types to be sent to appsignal. The default is
    # [:custom, :action, :flow]
    # We suggest using this list. It trims down some noisy traces that Ash emits
    config :ash_appsignal,
      trace_types: [
        :custom,
        :action,
        :before_transaction,
        :before_action,
        :after_transaction,
        :after_action,
        :custom_flow_step,
        :flow
      ]

For all available types, see the documentation for [`Ash.Tracer`](3.0.2/Ash.Tracer.html).

Thats it! Additional traces and spans from Ash will now be displayed in AppSignal.

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Change Log  ](external_link)
