# AshPyroComponents.Components.Form — AshPyroComponents v0.1.0

Project: AshPyroComponents v0.1.0

## Table of Contents

- [ __ View Source ](external_link) AshPyroComponents.Components.Form (AshPyroComponents v0.1.0)
  - __ Overridable Component Attributes
- __ Summary
  - Components
- __ Components
- ash_form(assigns)
  - __ Attributes
  - __ Slots

__

Search documentation of AshPyroComponents __ __

__ Settings

#  [ __ View Source ](external_link) AshPyroComponents.Components.Form (AshPyroComponents v0.1.0)

A component that auto-renders forms for Ash resources.

##  __ Overridable Component Attributes

You can customize the components in this module by [configuring overrides](external_link).

The components in this module support the following overridable attributes:

  * `ash_form/1`

    * `:autocomplete` `:string` (required)
    * `:class` `:css_classes`
    * `:actions_class` `:css_classes`
  * `render_field/1`

    * `:field_group_class` `:css_classes`
    * `:field_group_label_class` `:css_classes`



#  __ Summary

##  Components

ash_form(assigns)

Renders an Ash form.

#  __ Components

__ Link to this function

# ash_form(assigns)

[ __ View Source ](external_link)

Renders an Ash form.

##  __ Attributes

  * `overrides` (`:list`) - Manually set the overrides for this component (instead of config/default). Defaults to `nil`.
  * `action_info` (`:any`) - Defaults to `:unassigned`.
  * `pyro_form` (`:any`) - Defaults to `:unassigned`.
  * `as` (`:any`) - the server side parameter to collect all input under. Defaults to `nil`.
  * `for` (`:map`) (required) - the datastructure for the form.
  * `resource` (`:atom`) (required) - the resource of the form.
  * `actor` (`:map`) - the actor to be passed to actions. Defaults to `nil`.
  * `tz` (`:string`) - timezone. Defaults to `"Etc/UTC"`.
  * `autocomplete` (`:string`) - (overridable, required).
  * `class` (`:any`) - (overridable, `:css_classes`).
  * `actions_class` (`:any`) - (overridable, `:css_classes`).
  * Global attributes are accepted. the arbitrary HTML attributes to apply to the form tag. Supports all globals plus: `["name", "rel", "action", "enctype", "method", "novalidate", "target"]`.



##  __ Slots

  * `actions` \- extra form actions.


