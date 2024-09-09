# AshPyroComponents.Overrides.BEM — AshPyroComponents v0.1.0

Project: AshPyroComponents v0.1.0

## Table of Contents

- [ __ View Source ](external_link) AshPyroComponents.Overrides.BEM (AshPyroComponents v0.1.0)
  - Configuration
  - __ Overrides
- __ Summary
  - Functions
- __ Functions
- ash_data_table_class(passed_assigns)
- ash_form_class(passed_assigns)
- ash_form_field_group_class(passed_assigns)

__

Search documentation of AshPyroComponents __ __

__ Settings

#  [ __ View Source ](external_link) AshPyroComponents.Overrides.BEM (AshPyroComponents v0.1.0)

This overrides file complements [`PyroComponents.Overrides.BEM`](external_link) by adding [BEM](external_link) classes to all AshPyro components. It does not define any style.

This is great if you want to fully customize your own styles; all you have to do is define the classes in your CSS file.

## Configuration

As with any Pyro overrides, you need to include the correct override files in your `config.exs` file:
    
    
      config :pyro, :overrides, [AshPyroComponents.Overrides.BEM, PyroComponents.Overrides.BEM]

  * Captured functions with arity 1 and the arg named `passed_assigns` are passed component assigns at runtime, allowing complex conditional logic
  * [`assign_overridables/1`](external_link) preserves the definition order of attrs and assigns them in that order, preserving dependency chains
  * Attrs with type `:css_classes` utilize the configured CSS merge utility



##  __ Overrides

  * [`Elixir.AshPyroComponents.Components.DataTable.ash_data_table/1`](external_link)

    * `:class` `AshPyroComponents.Overrides.BEM.ash_data_table_class/1`
  * [`Elixir.AshPyroComponents.Components.FilterForm.render/1`](external_link)

    * `:button_class` `"pyro_ash_filter_form__button"`
    * `:class` `"pyro_ash_filter_form"`
    * `:fieldset_class` `"pyro_ash_filter_form__fieldset"`
    * `:form_class` `"pyro_ash_filter_form__form"`
    * `:input_class` `"pyro_ash_filter_form__input"`
    * `:legend_class` `"pyro_ash_filter_form__legend"`
    * `:legend_label_class` `"pyro_ash_filter_form__legend_label"`
  * Elixir.AshPyroComponents.Components.FilterForm.render_component/1 (private)

    * `:button_class` `"pyro_ash_filter_form__button"`
    * `:fieldset_class` `"pyro_ash_filter_form__fieldset"`
    * `:input_class` `"pyro_ash_filter_form__input"`
    * `:legend_class` `"pyro_ash_filter_form__legend"`
    * `:legend_label_class` `"pyro_ash_filter_form__legend_label"`
  * Elixir.AshPyroComponents.Components.FilterForm.render_predicate/1 (private)

    * `:button_class` `"pyro_ash_filter_form__button"`
    * `:class` `"pyro_ash_filter_form__predicate"`
    * `:input_class` `"pyro_ash_filter_form__input"`
    * `:left_fields_class` `"pyro_ash_filter_form__predicate_left_fields"`
  * [`Elixir.AshPyroComponents.Components.Form.ash_form/1`](external_link)

    * `:actions_class` `"pyro_ash_form__actions"`
    * `:autocomplete` `"off"`
    * `:class` `AshPyroComponents.Overrides.BEM.ash_form_class/1`
  * Elixir.AshPyroComponents.Components.Form.render_field/1 (private)

    * `:field_group_class` `AshPyroComponents.Overrides.BEM.ash_form_field_group_class/1`
    * `:field_group_label_class` `"pyro_ash_form_render_field__group_label"`



#  __ Summary

##  Functions

ash_data_table_class(passed_assigns)

This override is passed component assigns and executed while being assigned at runtime.

ash_form_class(passed_assigns)

This override is passed component assigns and executed while being assigned at runtime.

ash_form_field_group_class(passed_assigns)

This override is passed component assigns and executed while being assigned at runtime.

#  __ Functions

__ Link to this function

# ash_data_table_class(passed_assigns)

[ __ View Source ](external_link)

This override is passed component assigns and executed while being assigned at runtime.

__ Link to this function

# ash_form_class(passed_assigns)

[ __ View Source ](external_link)

This override is passed component assigns and executed while being assigned at runtime.

__ Link to this function

# ash_form_field_group_class(passed_assigns)

[ __ View Source ](external_link)

This override is passed component assigns and executed while being assigned at runtime.
