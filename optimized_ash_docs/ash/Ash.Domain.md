# Ash.Domain — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Domain behaviour (ash v3.4.8)
    - __ Options
- __ Summary
  - Types
  - Callbacks
- __ Types
- t()
- __ Callbacks
- domain?()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Domain behaviour (ash v3.4.8)

A domain allows you to interact with your resources, and holds domain-wide configuration.

For example, the json domain extension adds a domain extension that lets you toggle authorization on/off for all resources in a given domain. You include resources in your domain like so:
    
    
    defmodule MyApp.MyDomain do
      use Ash.Domain
    
      resources do
        resource OneResource
        resource SecondResource
      end
    end

###  __ Options

  * `:validate_config_inclusion?` ([`boolean/0`](external_link)) - Whether or not to validate that this domain is included in the configuration. The default value is `true`.

  * `:backwards_compatible_interface?` ([`boolean/0`](external_link)) - Whether or not to include the 2.0 backwards compatible interface, which includes all of the interaction functions which are now defined on the [`Ash`](external_link) module The default value is `true`.

  * `:extensions` (list of module that adopts [`Spark.Dsl.Extension`](external_link)) - A list of DSL extensions to add to the [`Spark.Dsl`](external_link)

  * `:otp_app` ([`atom/0`](external_link)) - The otp_app to use for any application configurable options

  * `:fragments` (list of [`module/0`](external_link)) - Fragments to include in the [`Spark.Dsl`](external_link). See the fragments guide for more.




#  __ Summary

##  Types

t()

##  Callbacks

domain?()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [module](external_link)()

#  __ Callbacks

__ Link to this callback

# domain?()

[ __ View Source ](external_link)
    
    
    @callback domain?() :: true
