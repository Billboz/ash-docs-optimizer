# AshPhoenix.FilterForm — ash_phoenix v2.1.2

Project: ash_phoenix v2.1.2

## Table of Contents

- [ __ View Source ](external_link) AshPhoenix.FilterForm (ash_phoenix v2.1.2)
  - __ LiveView Example
- __ Summary
  - Functions
- __ Functions
- add_group(form, opts \\\ [])
- add_predicate(form, field, operator_or_function, value, opts \\\ [])
- errors(form, opts \\\ [])
- fields(resource)
- filter(query, form)
- filter!(query, form)
- new(resource, opts \\\ [])
- params_for_query(predicate)
- predicates(resource)
- remove_component(form, group_or_predicate_id)
- remove_group(form, group_id)
- remove_predicate(form, id)
- to_filter!(form)
- to_filter_expression(form)
- to_filter_expression!(form)
- to_filter_map(form)
- update_predicate(form, id, func)
- validate(form, params \\\ %{}, opts \\\ [])

__

Search documentation of ash_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshPhoenix.FilterForm (ash_phoenix v2.1.2)

A module to help you create complex forms that generate Ash filters.
    
    
    # Create a FilterForm
    filter_form = AshPhoenix.FilterForm.new(MyApp.Payroll.Employee)

FilterForm's comprise 2 concepts, predicates and groups. Predicates are the simple boolean expressions you can use to build a query (`name == "Joe"`), and groups can be used to group predicates and more groups together. Groups can apply `and` or `or` operators to its nested components.
    
    
    # Add a predicate to the root of the form (which is itself a group)
    filter_form = AshPhoenix.add_predicate(filter_form, :some_field, :eq, "Some Value")
    
    # Add a group and another predicate to that group
    {filter_form, group_id} = AshPhoenix.add_group(filter_form, operator: :or, return_id?: true)
    filter_form = AshPhoenix.add_predicate(filter_form, :another, :eq, "Other", to: group_id)

`validate/1` is used to merge the submitted form params into the filter form, and one of the provided filter functions to apply the filter as a query, or generate an expression map, depending on your requirements:
    
    
    filter_form = AshPhoenix.validate(socket.assigns.filter_form, params)
    
    # Generate a query and pass it to the Domain
    query = AshPhoenix.FilterForm.filter!(MyApp.Payroll.Employee, filter_form)
    filtered_employees = MyApp.Payroll.read!(query)
    
    # Or use one of the other filter functions
    AshPhoenix.FilterForm.to_filter_expression(filter_form)
    AshPhoenix.FilterForm.to_filter_map(filter_form)

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
    
    defp filter_form_component(%{component: %{source: %AshPhoenix.FilterForm{}}} = assigns) do
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
          options={AshPhoenix.FilterForm.fields(Employee)}
          field={@component[:field]}
        />
        <.input
          type="select"
          options={AshPhoenix.FilterForm.predicates(Employee)}
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
        |> assign(:filter_form, AshPhoenix.FilterForm.new(Employee))
        |> assign(:employees, Employee.read_all!())
    
      {:ok, socket}
    end
    
    @impl true
    def handle_event("filter_validate", %{"filter" => params}, socket) do
      {:noreply,
       assign(socket,
         filter_form: AshPhoenix.FilterForm.validate(socket.assigns.filter_form, params)
       )}
    end
    
    def handle_event("filter_submit", %{"filter" => params}, socket) do
      filter_form = AshPhoenix.FilterForm.validate(socket.assigns.filter_form, params)
    
      case AshPhoenix.FilterForm.filter(Employee, filter_form) do
        {:ok, query} ->
          {:noreply,
           socket
           |> assign(:employees, Employee.read_all!(query: query))
           |> assign(:filter_form, filter_form)}
    
        {:error, filter_form} ->
          {:noreply, assign(socket, filter_form: filter_form)}
      end
    end
    
    def handle_event("remove_filter_component", %{"component-id" => component_id}, socket) do
      {:noreply,
       assign(socket,
         filter_form:
           AshPhoenix.FilterForm.remove_component(socket.assigns.filter_form, component_id)
       )}
    end
    
    def handle_event("add_filter_group", %{"component-id" => component_id}, socket) do
      {:noreply,
       assign(socket,
         filter_form: AshPhoenix.FilterForm.add_group(socket.assigns.filter_form, to: component_id)
       )}
    end
    
    def handle_event("add_filter_predicate", %{"component-id" => component_id}, socket) do
      {:noreply,
       assign(socket,
         filter_form:
           AshPhoenix.FilterForm.add_predicate(socket.assigns.filter_form, :name, :contains, nil,
             to: component_id
           )
       )}
    end

#  __ Summary

##  Functions

add_group(form, opts \\\ [])

Add a group to the filter. A group can contain predicates and other groups, allowing you to build quite complex nested filters.

add_predicate(form, field, operator_or_function, value, opts \\\ [])

Add a predicate to the filter.

errors(form, opts \\\ [])

Returns a flat list of all errors on all predicates in the filter.

fields(resource)

Returns the list of available fields, which may be attributes, calculations, or aggregates.

filter(query, form)

Converts the form into a filter, and filters the provided query or resource with that filter.

filter!(query, form)

Same as `filter/2` but raises on errors.

new(resource, opts \\\ [])

Create a new filter form.

params_for_query(predicate)

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

update_predicate(form, id, func)

Update the predicate with the given id

validate(form, params \\\ %{}, opts \\\ [])

Updates the filter with the provided input and validates it.

#  __ Functions

__ Link to this function

# add_group(form, opts \\\ [])

[ __ View Source ](external_link)

Add a group to the filter. A group can contain predicates and other groups, allowing you to build quite complex nested filters.

Options:

  * `:to` ([`String.t/0`](external_link)) - The nested group id to add the group to.

  * `:operator` \- The operator that the group should have internally. Valid values are :and, :or The default value is `:and`.

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

# errors(form, opts \\\ [])

[ __ View Source ](external_link)

Returns a flat list of all errors on all predicates in the filter.

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

  * `:transform_errors` ([`term/0`](external_link)) - Allows for manual manipulation and transformation of errors.  
If possible, try to implement [`AshPhoenix.FormData.Error`](external_link) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the predicate and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`

  * `:remove_empty_groups?` ([`boolean/0`](external_link)) - If true (the default), then any time a group would be made empty by removing a group or predicate, it is removed instead.  
An empty form can still be added, this only affects a group if its last component is removed. The default value is `false`.




__ Link to this function

# params_for_query(predicate)

[ __ View Source ](external_link)

Returns the minimal set of params (at the moment just strips ids) for use in a query string.

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
    
    
    filter = AshPhoenix.FilterForm.to_filter_expression(form)
    
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

# update_predicate(form, id, func)

[ __ View Source ](external_link)

Update the predicate with the given id

__ Link to this function

# validate(form, params \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)

Updates the filter with the provided input and validates it.

At present, no validation actually occurs, but this will eventually be added.

Passing `reset_on_change?: false` into `opts` will prevent predicates to reset the `value` and `operator` fields to `nil` if the predicate `field` changes.
