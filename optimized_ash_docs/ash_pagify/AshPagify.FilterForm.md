# AshPagify.FilterForm — ash_pagify v1.0.2

Project: ash_pagify v1.0.2

## Table of Contents

- [ __ View Source ](external_link) AshPagify.FilterForm (ash_pagify v1.0.2)
  - __ LiveView Example
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- active_filter_form_fields(meta)
- add_group(form, opts \\\ [])
- add_predicate(form, field, operator_or_function, value, opts \\\ [])
- count(meta, filter_form_params, reset \\\ false, query \\\ nil)
- errors(form, opts \\\ [])
- extract_filter_form_fields(data)
- fields(resource)
- filter(query, form)
- filter!(query, form)
- new(resource, opts \\\ [])
- params_for_query(form, opts \\\ [nillify_blanks?: true, keep_keys?: false])
- predicates(resource)
- remove_component(form, group_or_predicate_id)
- remove_group(form, group_id)
- remove_predicate(form, id)
- to_filter!(form)
- to_filter_expression(form)
- to_filter_expression!(form)
- to_filter_map(form)
- update_group(form, key, func, root \\\ true)
- update_predicate(form, id, func)
- validate(form, params \\\ %{}, opts \\\ [root?: true])

__

Search documentation of ash_pagify __ __

__ Settings

#  [ __ View Source ](external_link) AshPagify.FilterForm (ash_pagify v1.0.2)

A module to help you create complex forms that generate Ash filters.

> #### Disclaimer
> 
> This is a copy of the [`AshPhoenix.FilterForm`](external_link) module from the `ash_phoenix` package. We made some changes such as `nillify_blanks?` option in `params_for_query/2` function. Further we fixed the issue with the duplicated [components][index] suffix in case you restore the form from the params. Additonal you can now provide an `initial_form` to `AshPagify.FilterForm.new/2` to enforce a specific structure for the form and then merge in the params.
    
    
    # Create a FilterForm
    filter_form = AshPagify.FilterForm.new(MyApp.Payroll.Employee)

FilterForm's comprise two concepts, predicates and groups. Predicates are the simple boolean expressions you can use to build a query (`name == "Joe"`), and groups can be used to group predicates and more groups together. Groups can apply `and` or `or` operators to its nested components.
    
    
    # Add a predicate to the root of the form (which is itself a group)
    filter_form = AshPagify.FilterForm.add_predicate(filter_form, :some_field, :eq, "Some Value")
    
    # Add a group and another predicate to that group
    {filter_form, group_id} = AshPagify.FilterForm.add_group(filter_form, operator: :or, return_id?: true)
    filter_form = AshPagify.FilterForm.add_predicate(filter_form, :another, :eq, "Other", to: group_id)

`validate/1` is used to merge the submitted form params into the filter form, and one of the provided filter functions to apply the filter as a query, or generate an expression map, depending on your requirements:
    
    
    filter_form = AshPagify.FilterForm.validate(socket.assigns.filter_form, params)
    
    # Generate a query and pass it to the Domain
    query = AshPagify.FilterForm.filter!(MyApp.Payroll.Employee, filter_form)
    filtered_employees = MyApp.Payroll.read!(query)
    
    # Or use one of the other filter functions
    AshPagify.FilterForm.to_filter_expression(filter_form)
    AshPagify.FilterForm.to_filter_map(filter_form)

##  __ LiveView Example

You can build a form and handle adding and removing nested groups and predicates with the following:
    
    
    alias MyApp.Payroll.Employee
    
    @impl true
    def render(assigns) do
      ~H"""
      <.simple_form
        :let={filter_form}
        for={@filter_form}
        phx-change="filter_validate"
        phx-submit="filter_submit"
      >
        <.filter_form_component component={filter_form} />
        <:actions>
          <.button>Submit</.button>
        </:actions>
      </.simple_form>
      <.table id="employees" rows={@employees}>
        <:col :let={employee} label="Payroll ID"><%= employee.employee_id %></:col>
        <:col :let={employee} label="Name"><%= employee.name %></:col>
        <:col :let={employee} label="Position"><%= employee.position %></:col>
      </.table>
      """
    end
    
    attr :component, :map, required: true, doc: "Could be a FilterForm (group) or a Predicate"
    
    defp filter_form_component(%{component: %{source: %AshPagify.FilterForm{}}} = assigns) do
      ~H"""
      <div class="border-gray-50 border-8 p-4 rounded-xl mt-4">
        <div class="flex flex-row justify-between">
          <div class="flex flex-row gap-2 items-center">Filter</div>
          <div class="flex flex-row gap-2 items-center">
            <.input type="select" field={@component[:operator]} options={["and", "or"]} />
            <.button phx-click="add_filter_group" phx-value-component-id={@component.source.id} type="button">
              Add Group
            </.button>
            <.button
              phx-click="add_filter_predicate"
              phx-value-component-id={@component.source.id}
              type="button"
            >
              Add Predicate
            </.button>
            <.button
              phx-click="remove_filter_component"
              phx-value-component-id={@component.source.id}
              type="button"
            >
              Remove Group
            </.button>
          </div>
        </div>
        <.inputs_for :let={component} field={@component[:components]}>
          <.filter_form_component component={component} />
        </.inputs_for>
      </div>
      """
    end
    
    defp filter_form_component(
           %{component: %{source: %AshPhoenix.FilterForm.Predicate{}}} = assigns
         ) do
      ~H"""
      <div class="flex flex-row gap-2 mt-4">
        <.input
          type="select"
          options={AshPagify.FilterForm.fields(Employee)}
          field={@component[:field]}
        />
        <.input
          type="select"
          options={AshPagify.FilterForm.predicates(Employee)}
          field={@component[:operator]}
        />
        <.input field={@component[:value]} />
        <.button
          phx-click="remove_filter_component"
          phx-value-component-id={@component.source.id}
          type="button"
        >
          Remove
        </.button>
      </div>
      """
    end
    
    @impl true
    def mount(_params, _session, socket) do
      socket =
        socket
        |> assign(:filter_form, AshPagify.FilterForm.new(Employee))
        |> assign(:employees, Employee.read_all!())
    
      {:ok, socket}
    end
    
    @impl true
    def handle_event("filter_validate", %{"filter" => params}, socket) do
      {:noreply,
       assign(socket,
         filter_form: AshPagify.FilterForm.validate(socket.assigns.filter_form, params)
       )}
    end
    
    @impl true
    def handle_event("filter_submit", %{"filter" => params}, socket) do
      filter_form = AshPagify.FilterForm.validate(socket.assigns.filter_form, params)
    
      case AshPagify.FilterForm.filter(Employee, filter_form) do
        {:ok, query} ->
          {:noreply,
           socket
           |> assign(:employees, Employee.read_all!(query: query))
           |> assign(:filter_form, filter_form)}
    
        {:error, filter_form} ->
          {:noreply, assign(socket, filter_form: filter_form)}
      end
    end
    
    @impl true
    def handle_event("remove_filter_component", %{"component-id" => component_id}, socket) do
      {:noreply,
       assign(socket,
         filter_form:
           AshPagify.FilterForm.remove_component(socket.assigns.filter_form, component_id)
       )}
    end
    
    @impl true
    def handle_event("add_filter_group", %{"component-id" => component_id}, socket) do
      {:noreply,
       assign(socket,
         filter_form: AshPagify.FilterForm.add_group(socket.assigns.filter_form, to: component_id)
       )}
    end
    
    @impl true
    def handle_event("add_filter_predicate", %{"component-id" => component_id}, socket) do
      {:noreply,
       assign(socket,
         filter_form:
           AshPagify.FilterForm.add_predicate(socket.assigns.filter_form, :name, :contains, nil,
             to: component_id
           )
       )}
    end

#  __ Summary

##  Types

t()

##  Functions

active_filter_form_fields(meta)

Helper function to extract all active filter form fields from a AshPagify.Meta struct.

add_group(form, opts \\\ [])

Add a group to the filter. A group can contain predicates and other groups, allowing you to build quite complex nested filters.

add_predicate(form, field, operator_or_function, value, opts \\\ [])

Add a predicate to the filter.

count(meta, filter_form_params, reset \\\ false, query \\\ nil)

Count the number of records that match the filter form parameters.

errors(form, opts \\\ [])

Returns a flat list of all errors on all predicates in the filter.

extract_filter_form_fields(data)

Helper function to extract all filter form fields from a AshPhoenix.FilterForm parameter.

fields(resource)

Returns the list of available fields, which may be attributes, calculations, or aggregates.

filter(query, form)

Converts the form into a filter, and filters the provided query or resource with that filter.

filter!(query, form)

Same as `filter/2` but raises on errors.

new(resource, opts \\\ [])

Create a new filter form.

params_for_query(form, opts \\\ [nillify_blanks?: true, keep_keys?: false])

Returns the minimal set of params (at the moment just strips ids) for use in a query string.

predicates(resource)

Returns the list of available predicates for the given resource, which may be functions or operators.

remove_component(form, group_or_predicate_id)

Removes the group _or_ predicate with the given id

remove_group(form, group_id)

Remove the group with the given id

remove_predicate(form, id)

Remove the predicate with the given id

to_filter!(form) deprecated

to_filter_expression(form)

Returns a filter expression that can be provided to Ash.Query.filter/2

to_filter_expression!(form)

Same as `to_filter_expression/1` but raises on errors.

to_filter_map(form)

Returns a filter map that can be provided to `Ash.Filter.parse`

update_group(form, key, func, root \\\ true)

Update the predicates of the nested_form with the given key.

update_predicate(form, id, func)

Update the predicate with the given id

validate(form, params \\\ %{}, opts \\\ [root?: true])

Updates the filter with the provided input and validates it.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshPagify.FilterForm{
      components: [[term](external_link)() | t()],
      id: [String.t](external_link)(),
      key: [term](external_link)(),
      name: [String.t](external_link)(),
      negated?: [boolean](external_link)(),
      operator: :and | :or,
      params: [map](external_link)(),
      remove_empty_groups?: [boolean](external_link)(),
      resource: [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(),
      serializer: ([term](external_link)() -> [term](external_link)()) | nil,
      transform_errors: [term](external_link)(),
      valid?: [boolean](external_link)()
    }

#  __ Functions

__ Link to this function

# active_filter_form_fields(meta)

[ __ View Source ](external_link)
    
    
    @spec active_filter_form_fields([AshPagify.Meta.t](external_link)()) :: [list](external_link)()

Helper function to extract all active filter form fields from a AshPagify.Meta struct.

__ Link to this function

# add_group(form, opts \\\ [])

[ __ View Source ](external_link)

Add a group to the filter. A group can contain predicates and other groups, allowing you to build quite complex nested filters.

Options:

  * `:to` ([`String.t/0`](external_link)) - The nested group id to add the group to.

  * `:operator` \- The operator that the group should have internally. Valid values are :and, :or The default value is `:and`.

  * `:key` ([`term/0`](external_link)) - The key to use for the group. The default value is `nil`.

  * `:return_id?` ([`boolean/0`](external_link)) - If set to `true`, the function returns `{form, predicate_id}` The default value is `false`.




__ Link to this function

# add_predicate(form, field, operator_or_function, value, opts \\\ [])

[ __ View Source ](external_link)

Add a predicate to the filter.

Options:

  * `:to` ([`String.t/0`](external_link)) - The group id to add the predicate to. If not set, will be added to the top level group.

  * `:return_id?` ([`boolean/0`](external_link)) - If set to `true`, the function returns `{form, predicate_id}` The default value is `false`.

  * `:path` \- The relationship path to apply the predicate to




__ Link to this function

# count(meta, filter_form_params, reset \\\ false, query \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec count([AshPagify.Meta.t](external_link)(), [map](external_link)(), [boolean](external_link)(), [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | nil) ::
      [non_neg_integer](external_link)()

Count the number of records that match the filter form parameters.

If you pass a query, it will be used to count the records. Otherwise, the resource from the meta struct will be used.

If you pass `reset: true`, the filter form will be reset to an empty map.

__ Link to this function

# errors(form, opts \\\ [])

[ __ View Source ](external_link)

Returns a flat list of all errors on all predicates in the filter.

__ Link to this function

# extract_filter_form_fields(data)

[ __ View Source ](external_link)
    
    
    @spec extract_filter_form_fields([map](external_link)() | nil) :: [list](external_link)()

Helper function to extract all filter form fields from a AshPhoenix.FilterForm parameter.

__ Link to this function

# fields(resource)

[ __ View Source ](external_link)

Returns the list of available fields, which may be attributes, calculations, or aggregates.

__ Link to this function

# filter(query, form)

[ __ View Source ](external_link)

Converts the form into a filter, and filters the provided query or resource with that filter.

__ Link to this function

# filter!(query, form)

[ __ View Source ](external_link)

Same as `filter/2` but raises on errors.

__ Link to this function

# new(resource, opts \\\ [])

[ __ View Source ](external_link)

Create a new filter form.

Options:

  * `:params` ([`term/0`](external_link)) - Initial parameters to create the form with The default value is `%{}`.

  * `:as` ([`String.t/0`](external_link)) - Set the parameter name for the form. The default value is `"filter"`.

  * `:key` ([`term/0`](external_link)) - Set the parameter key for the form. The default value is `nil`.

  * `:transform_errors` ([`term/0`](external_link)) - Allows for manual manipulation and transformation of errors.  
If possible, try to implement [`AshPhoenix.FormData.Error`](external_link) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the predicate and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`

  * `:remove_empty_groups?` ([`boolean/0`](external_link)) - If true (the default), then any time a group would be made empty by removing a group or predicate, it is removed instead.  
An empty form can still be added, this only affects a group if its last component is removed. The default value is `false`.

  * `:root?` ([`boolean/0`](external_link)) - If true (the default), the form's name will not be suffixed with [components][index] when adding / validating components.  
This flag is used internally and should not be set manually. The default value is `true`.

  * `:initial_form` ([`term/0`](external_link)) - The initial form to use when creating a new form.  
This is usefully if you want to enforce a specific structure for the form and then merge in the params.

  * `:serializer` ([`term/0`](external_link)) - A function that will be called on the predicate param during new predicate initialization.  
This is useful for custom serialization of the form input values. The default value is `nil`.




__ Link to this function

# params_for_query(form, opts \\\ [nillify_blanks?: true, keep_keys?: false])

[ __ View Source ](external_link)

Returns the minimal set of params (at the moment just strips ids) for use in a query string.

If nillify_blanks? is true (default to true), then any blank values will be set to nil and not included in the params. Furthermore, if a nested group results to an empty group (after nillification of it's components), it will be removed as well.

__ Link to this function

# predicates(resource)

[ __ View Source ](external_link)

Returns the list of available predicates for the given resource, which may be functions or operators.

__ Link to this function

# remove_component(form, group_or_predicate_id)

[ __ View Source ](external_link)

Removes the group _or_ predicate with the given id

__ Link to this function

# remove_group(form, group_id)

[ __ View Source ](external_link)

Remove the group with the given id

__ Link to this function

# remove_predicate(form, id)

[ __ View Source ](external_link)

Remove the predicate with the given id

__ Link to this function

# to_filter!(form)

[ __ View Source ](external_link)

This function is deprecated. Use to_filter_expression!/1 instead. 

__ Link to this function

# to_filter_expression(form)

[ __ View Source ](external_link)

Returns a filter expression that can be provided to Ash.Query.filter/2

To add this to a query, remember to use `^`, for example:
    
    
    filter = AshPagify.FilterForm.to_filter_expression(form)
    
    Ash.Query.filter(MyApp.Post, ^filter)

Alternatively, you can use the shorthand: `filter/2` to apply the expression directly to a query.

__ Link to this function

# to_filter_expression!(form)

[ __ View Source ](external_link)

Same as `to_filter_expression/1` but raises on errors.

__ Link to this function

# to_filter_map(form)

[ __ View Source ](external_link)

Returns a filter map that can be provided to `Ash.Filter.parse`

This allows for things like saving a stored filter. Does not currently support parameterizing calculations or functions.

__ Link to this function

# update_group(form, key, func, root \\\ true)

[ __ View Source ](external_link)

Update the predicates of the nested_form with the given key.

Works also for predicates in nested forms inside the nested form.

__ Link to this function

# update_predicate(form, id, func)

[ __ View Source ](external_link)

Update the predicate with the given id

__ Link to this function

# validate(form, params \\\ %{}, opts \\\ [root?: true])

[ __ View Source ](external_link)

Updates the filter with the provided input and validates it.

At present, no validation actually occurs, but this will eventually be added.

Passing `reset_on_change?: false` into `opts` will prevent predicates to reset the `value` and `operator` fields to `nil` if the predicate `field` changes.
