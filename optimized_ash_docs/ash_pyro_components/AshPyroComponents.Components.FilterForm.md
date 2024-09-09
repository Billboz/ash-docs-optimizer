# AshPyroComponents.Components.FilterForm — AshPyroComponents v0.1.0

Project: AshPyroComponents v0.1.0

## Table of Contents

- [ __ View Source ](external_link) AshPyroComponents.Components.FilterForm (AshPyroComponents v0.1.0)
  - __ Overridable Component Attributes
- __ Summary
  - Components
  - Attributes
  - Functions
- __ Components
- render(assigns)
  - __ Attributes
- render_right(assigns)
  - __ Attributes
- __ Functions
- default_foreign_label(resource)
- group_operator_options()
- path_from_string(path)
- predicate_operator_options(resource, field)
- predicate_operators(resource, field)

__

Search documentation of AshPyroComponents __ __

__ Settings

#  [ __ View Source ](external_link) AshPyroComponents.Components.FilterForm (AshPyroComponents v0.1.0)

Automatically render filter forms for Ash resources.

##  __ Overridable Component Attributes

You can customize the components in this module by [configuring overrides](external_link).

The components in this module support the following overridable attributes:

  * `render/1`

    * `:class` `:css_classes`
    * `:form_class` `:css_classes`
    * `:fieldset_class` `:css_classes`
    * `:legend_class` `:css_classes`
    * `:legend_label_class` `:css_classes`
    * `:button_class` `:css_classes`
    * `:input_class` `:css_classes`
  * `render_component/1`

    * `:class` `:css_classes`
    * `:fieldset_class` `:css_classes`
    * `:legend_class` `:css_classes`
    * `:legend_label_class` `:css_classes`
    * `:button_class` `:css_classes`
    * `:input_class` `:css_classes`
  * `render_predicate/1`

    * `:fieldset_class` `:css_classes`
    * `:class` `:css_classes`
    * `:left_fields_class` `:css_classes`
    * `:button_class` `:css_classes`
    * `:input_class` `:css_classes`



#  __ Summary

##  Components

render(assigns)

Renders a filter form for the given resource action.

render_right(assigns)

## Attributes

  * `form` (`:any`) (required)
  * `destination_field` (`:map`) (required)
  * `is_enum?` (`:boolean`) (required)
  * `tz` (`:string`) (required)
  * `input_class` (`:any`) (required)



##  Functions

default_foreign_label(resource)

group_operator_options()

Get the available group operators for filter form groups as select options.

path_from_string(path)

predicate_operator_options(resource, field)

Get the available predicate operators for the given resource field as select options.

predicate_operators(resource, field)

Get the available predicate operators and functions for the given resource field.

#  __ Components

__ Link to this function

# render(assigns)

[ __ View Source ](external_link)

Renders a filter form for the given resource action.

##  __ Attributes

  * `overrides` (`:list`) - Manually set the overrides for this component (instead of config/default). Defaults to `nil`.
  * `id` (`:string`) (required)
  * `resource` (`:atom`) (required) - the resource of the data table.
  * `action` (`:atom`) (required) - the action to filter.
  * `to_uri` (`:any`) (required) - a function that takes params and returns a uri.
  * `uri_params` (`:map`) (required) - the current params; filter params are expected to be namespaced under target_id.
  * `target_id` (`:string`) (required) - the target component id.
  * `actor` (`:map`) - the actor to be passed to actions. Defaults to `nil`.
  * `tz` (`:string`) - timezone. Defaults to `"Etc/UTC"`.
  * `class` (`:any`) - (overridable, `:css_classes`).
  * `form_class` (`:any`) - (overridable, `:css_classes`).
  * `fieldset_class` (`:any`) - (overridable, `:css_classes`).
  * `legend_class` (`:any`) - (overridable, `:css_classes`).
  * `legend_label_class` (`:any`) - (overridable, `:css_classes`).
  * `button_class` (`:any`) - (overridable, `:css_classes`).
  * `input_class` (`:any`) - (overridable, `:css_classes`).



__ Link to this function

# render_right(assigns)

[ __ View Source ](external_link)

##  __ Attributes

  * `form` (`:any`) (required)
  * `destination_field` (`:map`) (required)
  * `is_enum?` (`:boolean`) (required)
  * `tz` (`:string`) (required)
  * `input_class` (`:any`) (required)



#  __ Functions

__ Link to this function

# default_foreign_label(resource)

[ __ View Source ](external_link)

__ Link to this function

# group_operator_options()

[ __ View Source ](external_link)

Get the available group operators for filter form groups as select options.

__ Link to this function

# path_from_string(path)

[ __ View Source ](external_link)

__ Link to this function

# predicate_operator_options(resource, field)

[ __ View Source ](external_link)

Get the available predicate operators for the given resource field as select options.

__ Link to this function

# predicate_operators(resource, field)

[ __ View Source ](external_link)

Get the available predicate operators and functions for the given resource field.
