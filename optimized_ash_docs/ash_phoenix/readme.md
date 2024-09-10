# Home — ash_phoenix v2.1.2

Project: ash_phoenix v2.1.2

## Table of Contents

- [ __ View Source ](external_link) Home
- AshPhoenix
  - __ Installation
  - __ Whats in the box?
  - __ Tutorials
  - __ Topics

__

Search documentation of ash_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) Home

![Logo](external_link) ![Logo](external_link)

![Elixir CI](external_link) [![License: MIT](external_link)](https://opensource.org/licenses/MIT) [![Hex version badge](external_link)](https://hex.pm/packages/ash_phoenix) [![Hexdocs badge](external_link)](https://hexdocs.pm/ash_phoenix)

# AshPhoenix

Welcome! This is the package for integrating [Phoenix Framework](external_link) and [Ash Framework](external_link). It provides tools for integrating with Phoenix forms ([`AshPhoenix.Form`](external_link)), Phoenix LiveViews ([`AshPhoenix.LiveView`](external_link)) and more.

##  __ Installation

Add `ash_phoenix` to your list of dependencies in `mix.exs`:
    
    
    {:ash_phoenix, "~> 2.1.2"}

##  __ Whats in the box?

  * [`AshPhoenix.Form`](external_link) \- A form data structure for using resource actions with phoenix forms
  * [`AshPhoenix.Form.Auto`](external_link) \- Tools to automatically determine nested form structures based on calls to `manage_relationship` for an action.
  * [`AshPhoenix.FilterForm`](external_link) \- A form data structure for building filter statements
  * [`AshPhoenix.LiveView`](external_link) \- Helpers for querying data and integrating changes
  * [`AshPhoenix.SubdomainPlug`](external_link) \- A plug to determine a tenant using subdomains for multitenancy
  * [`AshPhoenix.FormData.Error`](external_link) \- A protocol to allow errors to be rendered in forms
  * [`Phoenix.HTML.Safe`](external_link) implementations for [`Ash.CiString`](3.4.1/Ash.CiString.html), [`Ash.NotLoaded`](3.4.1/Ash.NotLoaded.html) and [`Decimal`](external_link)
  * [`mix ash_phoenix.gen.live`](external_link) for generating liveview modules
  * [`mix ash_phoenix.gen.html`](external_link) for generating controllers and views



##  __ Tutorials

  * [Getting Started with Ash and Phoenix](external_link)



##  __ Topics

  * [Union Forms](external_link)



[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Get Started with Ash and Phoenix  ](external_link)
