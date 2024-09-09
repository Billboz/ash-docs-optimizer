# AshPyroComponents.Components.DataTable — AshPyroComponents v0.1.0

Project: AshPyroComponents v0.1.0

## Table of Contents

- [ __ View Source ](external_link) AshPyroComponents.Components.DataTable (AshPyroComponents v0.1.0)
  - __ Overridable Component Attributes
- __ Summary
  - Components
- __ Components
- ash_data_table(assigns)
  - __ Attributes

__

Search documentation of AshPyroComponents __ __

__ Settings

#  [ __ View Source ](external_link) AshPyroComponents.Components.DataTable (AshPyroComponents v0.1.0)

A component that auto-renders forms for Ash resources.

##  __ Overridable Component Attributes

You can customize the components in this module by [configuring overrides](external_link).

The components in this module support the following overridable attributes:

  * `ash_data_table/1`
    * `:class` `:css_classes`



#  __ Summary

##  Components

ash_data_table(assigns)

Renders a data table.

#  __ Components

__ Link to this function

# ash_data_table(assigns)

[ __ View Source ](external_link)

Renders a data table.

##  __ Attributes

  * `overrides` (`:list`) - Manually set the overrides for this component (instead of config/default). Defaults to `nil`.
  * `id` (`:string`) (required)
  * `config` ([`AshPyro.Extensions.Resource.DataTable.Action`](external_link)) (required)
  * `rows` (`:list`) (required)
  * `sort` (`:list`) (required)
  * `display` (`:list`) (required)
  * `filter` (`:list`) (required)
  * `page` (`:list`) (required)
  * `resource` (`:atom`) (required) - the resource of the data table.
  * `actor` (`:map`) - the actor to be passed to actions. Defaults to `nil`.
  * `tz` (`:string`) - timezone. Defaults to `"Etc/UTC"`.
  * `class` (`:any`) - (overridable, `:css_classes`).


