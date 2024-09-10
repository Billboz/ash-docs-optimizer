# AshPhoenix.Form — ash_phoenix v2.1.2

Project: ash_phoenix v2.1.2

## Table of Contents

- [ __ View Source ](external_link) AshPhoenix.Form (ash_phoenix v2.1.2)
    - __ Life cycle
    - __ Working with related data
  - __ LiveView
- __ Summary
  - Types
  - Functions
- __ Types
- path()
- t()
- __ Functions
- add_error(form, path, opts \\\ [])
- Options
- add_form(form, path, opts \\\ [])
- arguments(form)
- ash_errors(form, opts \\\ [])
- attributes(form)
- can_submit?(form)
- clear_value(form, field_or_fields)
- ensure_can_submit!(form)
- errors(form, opts \\\ [])
- for_action(resource_or_data, action, opts \\\ [])
- for_create(resource, action, opts \\\ [])
  - __ Options
  - __ Nested Form Options
- for_destroy(data, action, opts \\\ [])
- for_read(resource, action, opts \\\ [])
  - __ Nested Form Options
- for_update(data, action, opts \\\ [])
- get_form(form, path)
- has_form?(form, path)
- hidden_fields(form)
- ignore(form)
- ignored?(form)
- merge_options(form, opts)
- params(form, opts \\\ [])
- parse_path!(form, original_path, opts \\\ [])
- remove_form(form, path, opts \\\ [])
- set_data(form, data)
- submit(form, opts \\\ [])
- submit!(form, opts \\\ [])
- touch(form, fields)
- update_form(form, path, func, opts \\\ [])
- update_forms_at_path(form, path, func, opts \\\ [])
- update_options(form, fun)
- validate(form, new_params, opts \\\ [])
- value(form, field)

__

Search documentation of ash_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshPhoenix.Form (ash_phoenix v2.1.2)

A module to allow you to fluidly use resources with Phoenix forms.

###  __ Life cycle

The general workflow is, with either LiveView or Phoenix forms:

  1. Create a form with [`AshPhoenix.Form`](external_link)
  2. Render the form with `Phoenix.Component.form` (or `CoreComponents.simple_form`), or, if using Surface, `<Form>`
  3. To validate the form (e.g with `phx-change` for liveview), pass the submitted params to `AshPhoenix.Form.validate/3`
  4. On form submission, pass the params to `AshPhoenix.Form.submit/2`
  5. On success, use the result to redirect or assign. On failure, reassign the provided form.



The following keys exist on the form to show where in the lifecycle you are:

  * `submitted_once?` \- If the form has ever been submitted. Useful for not showing any errors on the first attempt to fill out a form.
  * `just_submitted?` \- If the form has just been submitted and _no validation_ has happened since. Useful for things like triggering a UI effect that should stop when the form is modified again.
  * `.changed?` \- If something about the form is different than it originally was. Note that in some cases this can yield a false positive, specifically if a nested form is removed and then a new one is added with the exact same values.
  * `.touched_forms` \- A MapSet containing all keys in the form that have been modified. When submitting a form, only these keys are included in the parameters.



###  __ Working with related data

If your resource action accepts related data, (for example a managed relationship argument, or an embedded resource attribute), you can use Phoenix's `inputs_for` for that field, _but_ you must do one of two things:

  1. Tell AshPhoenix.Form to automatically derive this behavior from your action, for example:


    
    
    form =
      user
      |> AshPhoenix.Form.for_update(:update, forms: [auto?: true])
      |> to_form()

  2. Explicitly configure the behavior of it using the `forms` option. See `for_create/3` for more.



For example:
    
    
    form =
      user
      |> AshPhoenix.Form.for_update(:update,
        forms: [
          profile: [
            resource: MyApp.Profile,
            data: user.profile,
            create_action: :create,
            update_action: :update
            forms: [
              emails: [
                data: user.profile.emails,
                resource: MyApp.UserEmail,
                create_action: :create,
                update_action: :update
              ]
            ]
          ]
        ])
      |> to_form()

##  __ LiveView

[`AshPhoenix.Form`](external_link) (unlike ecto changeset based forms) expects to be reused throughout the lifecycle of the liveview.

You can use Phoenix events to add and remove form entries and `submit/2` to submit the form, like so:
    
    
    def render(assigns) do
      ~H"""
      <.simple_form for={@form} phx-change="validate" phx-submit="submit">
        <%!-- Attributes for the parent resource --%>
        <.input type="email" label="Email" field={@form[:email]} />
        <%!-- Render nested forms for related data --%>
        <.inputs_for :let={item_form} field={@form[:items]}>
          <.input type="text" label="Item" field={item_form[:name]} />
          <.input type="number" label="Amount" field={item_form[:amount]} />
          <.button type="button" phx-click="remove_form" phx-value-path={item_form.name}>
            Remove
          </.button>
        </.inputs_for>
        <:actions>
          <.button type="button" phx-click="add_form" phx-value-path={@form[:items].name}>
            Add Item
          </.button>
          <.button>Save</.button>
        </:actions>
      </.simple_form>
      """
    end
    
    def mount(_params, _session, socket) do
      form =
        MyApp.Grocery.Order
        |> AshPhoenix.Form.for_create(:create,
          forms: [
            items: [
              type: :list,
              resource: MyApp.Grocery.Item,
              create_action: :create
            ]
          ]
        )
        |> AshPhoenix.Form.add_form([:items])
        |> to_form()
    
      {:ok, assign(socket, form: form)}
    end
    
    # In order to use the `add_form` and `remove_form` helpers, you
    # need to make sure that you are validating the form on change
    def handle_event("validate", %{"form" => params}, socket) do
      form = AshPhoenix.Form.validate(socket.assigns.form, params)
      {:noreply, assign(socket, form: form)}
    end
    
    def handle_event("submit", %{"form" => params}, socket) do
      case AshPhoenix.Form.submit(socket.assigns.form, params: params) do
        {:ok, order} ->
          {:noreply,
           socket
           |> put_flash(:info, "Saved order for #{order.email}!")
           |> push_navigate(to: ~p"/")}
    
        {:error, form} ->
          {:noreply, assign(socket, form: form)}
      end
    end
    
    def handle_event("add_form", %{"path" => path}, socket) do
      form = AshPhoenix.Form.add_form(socket.assigns.form, path)
      {:noreply, assign(socket, form: form)}
    end
    
    def handle_event("remove_form", %{"path" => path}, socket) do
      form = AshPhoenix.Form.remove_form(socket.assigns.form, path)
      {:noreply, assign(socket, form: form)}
    end

#  __ Summary

##  Types

path()

t()

##  Functions

add_error(form, path, opts \\\ [])

Adds an error to the source underlying the form.

add_form(form, path, opts \\\ [])

Adds a new form at the provided path.

arguments(form)

A utility to get the list of arguments the action underlying the form accepts

ash_errors(form, opts \\\ [])

attributes(form)

A utility to get the list of attributes the action underlying the form accepts

can_submit?(form)

clear_value(form, field_or_fields)

Clears a given input's value on a form.

ensure_can_submit!(form)

errors(form, opts \\\ [])

Returns the errors on the form.

for_action(resource_or_data, action, opts \\\ [])

Calls the corresponding `for_*` function depending on the action type

for_create(resource, action, opts \\\ [])

Creates a form corresponding to a create action on a resource.

for_destroy(data, action, opts \\\ [])

Creates a form corresponding to a destroy action on a record.

for_read(resource, action, opts \\\ [])

Creates a form corresponding to a read action on a resource.

for_update(data, action, opts \\\ [])

Creates a form corresponding to an update action on a record.

get_form(form, path)

Gets the form at the specified path

has_form?(form, path)

Returns true if a given form path exists in the form

hidden_fields(form)

Returns the hidden fields for a form as a keyword list

ignore(form)

Toggles the form to be ignored or not ignored.

ignored?(form)

Returns true if the form is ignored

merge_options(form, opts)

Merge the new options with the saved options on a form. See `update_options/2` for more.

params(form, opts \\\ [])

Returns the parameters from the form that would be submitted to the action.

parse_path!(form, original_path, opts \\\ [])

A utility for parsing paths of nested forms in query encoded format.

remove_form(form, path, opts \\\ [])

Removes a form at the provided path.

set_data(form, data)

Sets the data of the form, in addition to the data of the underlying source, if applicable.

submit(form, opts \\\ [])

Submits the form.

submit!(form, opts \\\ [])

Same as `submit/2`, but raises an error if the submission fails.

touch(form, fields)

Mark a field or fields as touched

update_form(form, path, func, opts \\\ [])

Updates the form at the provided path using the given function.

update_forms_at_path(form, path, func, opts \\\ [])

Updates the list of forms matching a given path. Does not validate that the path points at a single form like `update_form/4`.

update_options(form, fun)

Update the saved options on a form.

validate(form, new_params, opts \\\ [])

Validates the parameters against the form.

value(form, field)

Gets the value for a given field in the form.

#  __ Types

__ Link to this type

# path()

[ __ View Source ](external_link)
    
    
    @type path() :: [String.t](external_link)() | [atom](external_link)() | [[String.t](external_link)() | [atom](external_link)() | [integer](external_link)()]

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshPhoenix.Form{
      action: [atom](external_link)(),
      added?: [term](external_link)(),
      any_removed?: [term](external_link)(),
      changed?: [term](external_link)(),
      data: nil | [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)(),
      domain: [term](external_link)(),
      errors: [boolean](external_link)(),
      form_keys: [Keyword.t](external_link)(),
      forms: [map](external_link)(),
      id: [term](external_link)(),
      just_submitted?: [boolean](external_link)(),
      method: [String.t](external_link)(),
      name: [term](external_link)(),
      opts: [Keyword.t](external_link)(),
      original_data: [term](external_link)(),
      params: [map](external_link)(),
      prepare_params: [term](external_link)(),
      prepare_source:
        nil
        | ([Ash.Changeset.t](3.4.1/Ash.Changeset.html#t:t/0)() -> [Ash.Changeset.t](3.4.1/Ash.Changeset.html#t:t/0)())
        | ([Ash.Query.t](3.4.1/Ash.Query.html#t:t/0)() -> [Ash.Query.t](3.4.1/Ash.Query.html#t:t/0)()),
      resource: [Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(),
      source: [Ash.Changeset.t](3.4.1/Ash.Changeset.html#t:t/0)() | [Ash.Query.t](3.4.1/Ash.Query.html#t:t/0)(),
      submit_errors: [Keyword.t](external_link)() | nil,
      submitted_once?: [boolean](external_link)(),
      touched_forms: [term](external_link)(),
      transform_errors:
        nil
        | ([Ash.Changeset.t](3.4.1/Ash.Changeset.html#t:t/0)() | [Ash.Query.t](3.4.1/Ash.Query.html#t:t/0)(), error :: [Ash.Error.t](3.4.1/Ash.Error.html#t:t/0)() ->
             [
               {field :: [atom](external_link)(), message :: [String.t](external_link)(),
                substituations :: [Keyword.t](external_link)()}
             ]),
      transform_params: nil | ([map](external_link)() -> [term](external_link)()),
      type: :create | :update | :destroy | :read,
      valid?: [boolean](external_link)(),
      warn_on_unhandled_errors?: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# add_error(form, path, opts \\\ [])

[ __ View Source ](external_link)

Adds an error to the source underlying the form.

This can be used for adding errors from different sources to a form. Keep in mind, if they don't match a field on the form (typically extracted via the `field` key in the error), they won't be displayed by default.

# Options

  * `:path` \- The path to add the error to. If the error(s) already have a path, don't specify a path yourself.



__ Link to this function

# add_form(form, path, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_form(t(), path(), [Keyword.t](external_link)()) :: t()
    
    
    @spec add_form([Phoenix.HTML.Form.t](external_link)(), path(), [Keyword.t](external_link)()) :: [Phoenix.HTML.Form.t](external_link)()

Adds a new form at the provided path.

Doing this requires that the form has a `create_action` and a `resource` configured.

`path` can be one of two things:

  1. A list of atoms and integers that lead to a form in the `forms` option provided. `[:posts, 0, :comments]` to add a comment to the first post.
  2. The html name of the form, e.g `form[posts][0][comments]` to mimic the above



If you pass parameters to this function, keep in mind that, unless they are string keyed in the same shape they might come from your form, then the result of `params/1` will reflect that, i.e `add_form(form, "foo", params: %{bar: 10})`, could produce params like `%{"field" => value, "foo" => [%{bar: 10}]}`. Notice how they are not string keyed as you would expect. However, once the form is changed (in liveview) and a call to `validate/2` is made with that input, then the parameters would become what you'd expect. In this way, if you are using `add_form` with not string keys/values you may not be able to depend on the shape of the `params` map (which you should ideally not depend on anyway).

  * `:prepend` ([`boolean/0`](external_link)) - If specified, the form is placed at the beginning of the list instead of the end of the list The default value is `false`.

  * `:params` ([`term/0`](external_link)) - The initial parameters to add the form with. The default value is `%{}`.

  * `:validate?` ([`boolean/0`](external_link)) - Validates the new full form. The default value is `true`.

  * `:validate_opts` ([`term/0`](external_link)) - Options to pass to `validate`. Only used if `validate?` is set to `true` (the default) The default value is `[]`.

  * `:type` \- If `type` is set to `:read`, the form will be created for a read action. A hidden field will be set in the form called `_form_type` to track this information. Valid values are :read, :create, :update, :destroy The default value is `:create`.

  * `:data` ([`term/0`](external_link)) - The data to set backing the form. Generally you'd only want to do this if you are adding a form with `type: :read` additionally.




__ Link to this function

# arguments(form)

[ __ View Source ](external_link)

A utility to get the list of arguments the action underlying the form accepts

__ Link to this function

# ash_errors(form, opts \\\ [])

[ __ View Source ](external_link)

__ Link to this function

# attributes(form)

[ __ View Source ](external_link)

A utility to get the list of attributes the action underlying the form accepts

__ Link to this function

# can_submit?(form)

[ __ View Source ](external_link)
    
    
    @spec can_submit?(t()) :: [boolean](external_link)()
    
    
    @spec can_submit?([Phoenix.HTML.Form.t](external_link)()) :: [boolean](external_link)()

__ Link to this function

# clear_value(form, field_or_fields)

[ __ View Source ](external_link)
    
    
    @spec clear_value(t(), [atom](external_link)() | [[atom](external_link)()]) :: t()

Clears a given input's value on a form.

Accepts a field (atom) or a list of fields (atoms) as a second argument.

__ Link to this function

# ensure_can_submit!(form)

[ __ View Source ](external_link)
    
    
    @spec ensure_can_submit!(t()) :: t()
    
    
    @spec ensure_can_submit!([Phoenix.HTML.Form.t](external_link)()) :: [Phoenix.HTML.Form.t](external_link)()

__ Link to this function

# errors(form, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec errors(t() | [Phoenix.HTML.Form.t](external_link)(), [Keyword.t](external_link)()) ::
      ([{[atom](external_link)(), {[String.t](external_link)(), [Keyword.t](external_link)()}}]
       | [[String.t](external_link)()]
       | [{[atom](external_link)(), [String.t](external_link)()}])
      | %{
          required([list](external_link)()) =>
            [{[atom](external_link)(), {[String.t](external_link)(), [Keyword.t](external_link)()}}]
            | [[String.t](external_link)()]
            | [{[atom](external_link)(), [String.t](external_link)()}]
        }

Returns the errors on the form.

By default, only errors on the form being passed in (not nested forms) are provided. Use `for_path` to get errors for nested forms.

  * `:format` \- Values:
    
        - `:raw` - `[field:, {message, substitutions}}]` (for translation)
    - `:simple` - `[field: "message w/ variables substituted"]`
    - `:plaintext` - `["field: message w/ variables substituted"]`

Valid values are :simple, :raw, :plaintext The default value is `:simple`.

  * `:for_path` ([`term/0`](external_link)) - The path of the form you want errors for, either as a list or as a string, e.g `[:comments, 0]` or `form[comments][0]` Passing `:all` will cause this function to return a map of path to its errors, like so:  
`%{[:comments, 0] => [body: "is invalid"], ...}` The default value is `[]`.




__ Link to this function

# for_action(resource_or_data, action, opts \\\ [])

[ __ View Source ](external_link)

Calls the corresponding `for_*` function depending on the action type

__ Link to this function

# for_create(resource, action, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec for_create([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), action :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) :: t()

Creates a form corresponding to a create action on a resource.

##  __ Options

Options not listed below are passed to the underlying call to build the changeset/query, i.e [`Ash.Changeset.for_create/4`](3.4.1/Ash.Changeset.html#for_create/4)

  * `:actor` ([`term/0`](external_link)) - The actor performing the action. Passed through to the underlying action.

  * `:forms` ([`keyword/0`](external_link)) - Nested form configurations. See `for_create/3` "Nested Form Options" docs for more.

  * `:warn_on_unhandled_errors?` ([`boolean/0`](external_link)) - Warns on any errors that don't match the form pattern of `{:field, "message", [replacement: :vars]}` or implement the [`AshPhoenix.FormData.Error`](external_link) protocol. The default value is `true`.

  * `:domain` ([`atom/0`](external_link)) - The domain to use when calling the action

  * `:as` ([`String.t/0`](external_link)) - The name of the form in the submitted params. You will need to pull the form params out using this key. The default value is `"form"`.

  * `:id` ([`String.t/0`](external_link)) - The html id of the form. Defaults to the value of `:as` if provided, otherwise "form"

  * `:transform_errors` ([`term/0`](external_link)) - Allows for manual manipulation and transformation of errors.  
If possible, try to implement [`AshPhoenix.FormData.Error`](external_link) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the changeset and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`

  * `:prepare_source` \- A 1-argument function the receives the initial changeset (or query) and makes any relevant changes to it. This can be used to do things like: 

    * Set default argument values before the validations are run using [`Ash.Changeset.set_arguments/2`](3.4.1/Ash.Changeset.html#set_arguments/2) or [`Ash.Changeset.set_argument/3`](3.4.1/Ash.Changeset.html#set_argument/3)
    * Set changeset context
    * Do any other pre-processing on the changeset
  * `:prepare_params` \- A 2-argument function that receives the params map and the :validate atom and should return prepared params. Called before the form is validated.

  * `:transform_params` \- A function for post-processing the form parameters before they are used for changeset validation/submission. Use a 3-argument function to pattern match on the [`AshPhoenix.Form`](external_link) struct.

  * `:method` ([`String.t/0`](external_link)) - The http method to associate with the form. Defaults to `post` for creates, and `put` for everything else.

  * `:exclude_fields_if_empty` \- These fields will be ignored if they are empty strings.  
This list of fields supports dead view forms. When a form is submitted from dead view empty fields are submitted as empty strings. This is problematic for fields that allow_nil or those that have default values.

  * `:tenant` ([`term/0`](external_link)) - The current tenant. Passed through to the underlying action.




##  __ Nested Form Options

To automatically determine the nested forms available for a given form, use `forms: [auto?: true]`. You can add additional nested forms by including them in the `forms` config alongside `auto?: true`. See the module documentation of [`AshPhoenix.Form.Auto`](external_link) for more information. If you want to do some manipulation of the auto forms, you can also call [`AshPhoenix.Form.Auto.auto/2`](external_link), and then manipulate the result and pass it to the `forms` option. To pass options, use `auto?: [option1: :value]`. See the documentation of [`AshPhoenix.Form.Auto`](external_link) for more.

  * `:type` \- The cardinality of the nested form - `:list` or `:single`. Valid values are :list, :single The default value is `:single`.

  * `:sparse?` ([`boolean/0`](external_link)) - If the nested form is `sparse`, the form won't expect all inputs for all forms to be present.  
Has no effect if the type is `:single`.  
Normally, if you leave some forms out of a list of nested forms, they are removed from the parameters passed to the action. For example, if you had a `post` with two comments `[%Comment{id: 1}, %Comment{id: 2}]` and you passed down params like `comments[0][id]=1&comments[1][text]=new_text`, we would remove the second comment from the input parameters, resulting in the following being passed into the action: `%{"comments" => [%{"id" => 1, "text" => "new"}]}`. By setting it to sparse, you have to explicitly use `remove_form` for that removal to happen. So in the same scenario above, the parameters that would be sent would actually be `%{"comments" => [%{"id" => 1, "text" => "new"}, %{"id" => 2}]}`.  
One major difference with `sparse?` is that the form actually ignores the _index_ provided, e.g `comments[0]...`, and instead uses the primary key e.g `comments[0][id]` to match which form is being updated. This prevents you from having to find the index of the specific item you want to update. Which could be very gnarly on deeply nested forms. If there is no primary key, or the primary key does not match anything, it is treated as a new form.  
REMEMBER: You need to use `Phoenix.Components.inputs_for` to render the nested forms, or manually add hidden inputs using `hidden_inputs_for` (or `HiddenInputs` if using Surface) for the id to be automatically placed into the form.

  * `:forms` ([`keyword/0`](external_link)) - Forms nested inside the current nesting level in all cases

  * `:for_type` \- What action types the form applies for. Leave blank for it to apply to all action types. Valid values are :read, :create, :update

  * `:merge?` ([`boolean/0`](external_link)) - When building parameters, this input will be merged with its parent input. This allows for combining multiple forms into a single input. The default value is `false`.

  * `:for` ([`atom/0`](external_link)) - When creating parameters for the action, the key that the forms should be gathered into. Defaults to the key used to configure the nested form. Ignored if `merge?` is `true`.

  * `:resource` ([`atom/0`](external_link)) - The resource of the nested forms. Unnecessary if you are providing the `data` key, and not adding additional forms to this path.

  * `:create_action` ([`atom/0`](external_link)) - The create action to use when building new forms. Only necessary if you want to use `add_form/3` with this path.

  * `:update_action` ([`atom/0`](external_link)) - The update action to use when building forms for data. Only necessary if you supply the `data` key.

  * `:data` ([`term/0`](external_link)) - The current value or values that should have update forms built by default.  
You can also provide a single argument function that will return the data based on the data of the parent form. This is important for multiple nesting levels of `:list` type forms, because the data depends on which parent is being rendered.




__ Link to this function

# for_destroy(data, action, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec for_destroy([Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)(), action :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) :: t()

Creates a form corresponding to a destroy action on a record.

Options:

  * `:actor` ([`term/0`](external_link)) - The actor performing the action. Passed through to the underlying action.

  * `:forms` ([`keyword/0`](external_link)) - Nested form configurations. See `for_create/3` "Nested Form Options" docs for more.

  * `:warn_on_unhandled_errors?` ([`boolean/0`](external_link)) - Warns on any errors that don't match the form pattern of `{:field, "message", [replacement: :vars]}` or implement the [`AshPhoenix.FormData.Error`](external_link) protocol. The default value is `true`.

  * `:domain` ([`atom/0`](external_link)) - The domain to use when calling the action

  * `:as` ([`String.t/0`](external_link)) - The name of the form in the submitted params. You will need to pull the form params out using this key. The default value is `"form"`.

  * `:id` ([`String.t/0`](external_link)) - The html id of the form. Defaults to the value of `:as` if provided, otherwise "form"

  * `:transform_errors` ([`term/0`](external_link)) - Allows for manual manipulation and transformation of errors.  
If possible, try to implement [`AshPhoenix.FormData.Error`](external_link) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the changeset and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`

  * `:prepare_source` \- A 1-argument function the receives the initial changeset (or query) and makes any relevant changes to it. This can be used to do things like: 

    * Set default argument values before the validations are run using [`Ash.Changeset.set_arguments/2`](3.4.1/Ash.Changeset.html#set_arguments/2) or [`Ash.Changeset.set_argument/3`](3.4.1/Ash.Changeset.html#set_argument/3)
    * Set changeset context
    * Do any other pre-processing on the changeset
  * `:prepare_params` \- A 2-argument function that receives the params map and the :validate atom and should return prepared params. Called before the form is validated.

  * `:transform_params` \- A function for post-processing the form parameters before they are used for changeset validation/submission. Use a 3-argument function to pattern match on the [`AshPhoenix.Form`](external_link) struct.

  * `:method` ([`String.t/0`](external_link)) - The http method to associate with the form. Defaults to `post` for creates, and `put` for everything else.

  * `:exclude_fields_if_empty` \- These fields will be ignored if they are empty strings.  
This list of fields supports dead view forms. When a form is submitted from dead view empty fields are submitted as empty strings. This is problematic for fields that allow_nil or those that have default values.

  * `:tenant` ([`term/0`](external_link)) - The current tenant. Passed through to the underlying action.




Any _additional_ options will be passed to the underlying call to [`Ash.Changeset.for_destroy/4`](3.4.1/Ash.Changeset.html#for_destroy/4). This means you can set things like the tenant/actor. These will be retained, and provided again when `Form.submit/3` is called.

__ Link to this function

# for_read(resource, action, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec for_read([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), action :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) :: t()

Creates a form corresponding to a read action on a resource.

Options:

  * `:actor` ([`term/0`](external_link)) - The actor performing the action. Passed through to the underlying action.

  * `:forms` ([`keyword/0`](external_link)) - Nested form configurations. See `for_create/3` "Nested Form Options" docs for more.

  * `:warn_on_unhandled_errors?` ([`boolean/0`](external_link)) - Warns on any errors that don't match the form pattern of `{:field, "message", [replacement: :vars]}` or implement the [`AshPhoenix.FormData.Error`](external_link) protocol. The default value is `true`.

  * `:domain` ([`atom/0`](external_link)) - The domain to use when calling the action

  * `:as` ([`String.t/0`](external_link)) - The name of the form in the submitted params. You will need to pull the form params out using this key. The default value is `"form"`.

  * `:id` ([`String.t/0`](external_link)) - The html id of the form. Defaults to the value of `:as` if provided, otherwise "form"

  * `:transform_errors` ([`term/0`](external_link)) - Allows for manual manipulation and transformation of errors.  
If possible, try to implement [`AshPhoenix.FormData.Error`](external_link) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the changeset and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`

  * `:prepare_source` \- A 1-argument function the receives the initial changeset (or query) and makes any relevant changes to it. This can be used to do things like: 

    * Set default argument values before the validations are run using [`Ash.Changeset.set_arguments/2`](3.4.1/Ash.Changeset.html#set_arguments/2) or [`Ash.Changeset.set_argument/3`](3.4.1/Ash.Changeset.html#set_argument/3)
    * Set changeset context
    * Do any other pre-processing on the changeset
  * `:prepare_params` \- A 2-argument function that receives the params map and the :validate atom and should return prepared params. Called before the form is validated.

  * `:transform_params` \- A function for post-processing the form parameters before they are used for changeset validation/submission. Use a 3-argument function to pattern match on the [`AshPhoenix.Form`](external_link) struct.

  * `:method` ([`String.t/0`](external_link)) - The http method to associate with the form. Defaults to `post` for creates, and `put` for everything else.

  * `:exclude_fields_if_empty` \- These fields will be ignored if they are empty strings.  
This list of fields supports dead view forms. When a form is submitted from dead view empty fields are submitted as empty strings. This is problematic for fields that allow_nil or those that have default values.

  * `:tenant` ([`term/0`](external_link)) - The current tenant. Passed through to the underlying action.




Any _additional_ options will be passed to the underlying call to [`Ash.Query.for_read/4`](3.4.1/Ash.Query.html#for_read/4). This means you can set things like the tenant/actor. These will be retained, and provided again when `Form.submit/3` is called.

Keep in mind that the `source` of the form in this case is a query, not a changeset. This means that, very likely, you would not want to use nested forms here. However, it could make sense if you had a query argument that was an embedded resource, so the capability remains.

##  __ Nested Form Options

  * `:type` \- The cardinality of the nested form - `:list` or `:single`. Valid values are :list, :single The default value is `:single`.

  * `:sparse?` ([`boolean/0`](external_link)) - If the nested form is `sparse`, the form won't expect all inputs for all forms to be present.  
Has no effect if the type is `:single`.  
Normally, if you leave some forms out of a list of nested forms, they are removed from the parameters passed to the action. For example, if you had a `post` with two comments `[%Comment{id: 1}, %Comment{id: 2}]` and you passed down params like `comments[0][id]=1&comments[1][text]=new_text`, we would remove the second comment from the input parameters, resulting in the following being passed into the action: `%{"comments" => [%{"id" => 1, "text" => "new"}]}`. By setting it to sparse, you have to explicitly use `remove_form` for that removal to happen. So in the same scenario above, the parameters that would be sent would actually be `%{"comments" => [%{"id" => 1, "text" => "new"}, %{"id" => 2}]}`.  
One major difference with `sparse?` is that the form actually ignores the _index_ provided, e.g `comments[0]...`, and instead uses the primary key e.g `comments[0][id]` to match which form is being updated. This prevents you from having to find the index of the specific item you want to update. Which could be very gnarly on deeply nested forms. If there is no primary key, or the primary key does not match anything, it is treated as a new form.  
REMEMBER: You need to use `Phoenix.Components.inputs_for` to render the nested forms, or manually add hidden inputs using `hidden_inputs_for` (or `HiddenInputs` if using Surface) for the id to be automatically placed into the form.

  * `:forms` ([`keyword/0`](external_link)) - Forms nested inside the current nesting level in all cases

  * `:for_type` \- What action types the form applies for. Leave blank for it to apply to all action types. Valid values are :read, :create, :update

  * `:merge?` ([`boolean/0`](external_link)) - When building parameters, this input will be merged with its parent input. This allows for combining multiple forms into a single input. The default value is `false`.

  * `:for` ([`atom/0`](external_link)) - When creating parameters for the action, the key that the forms should be gathered into. Defaults to the key used to configure the nested form. Ignored if `merge?` is `true`.

  * `:resource` ([`atom/0`](external_link)) - The resource of the nested forms. Unnecessary if you are providing the `data` key, and not adding additional forms to this path.

  * `:create_action` ([`atom/0`](external_link)) - The create action to use when building new forms. Only necessary if you want to use `add_form/3` with this path.

  * `:update_action` ([`atom/0`](external_link)) - The update action to use when building forms for data. Only necessary if you supply the `data` key.

  * `:data` ([`term/0`](external_link)) - The current value or values that should have update forms built by default.  
You can also provide a single argument function that will return the data based on the data of the parent form. This is important for multiple nesting levels of `:list` type forms, because the data depends on which parent is being rendered.




__ Link to this function

# for_update(data, action, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec for_update([Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)(), action :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) :: t()

Creates a form corresponding to an update action on a record.

Options:

  * `:actor` ([`term/0`](external_link)) - The actor performing the action. Passed through to the underlying action.

  * `:forms` ([`keyword/0`](external_link)) - Nested form configurations. See `for_create/3` "Nested Form Options" docs for more.

  * `:warn_on_unhandled_errors?` ([`boolean/0`](external_link)) - Warns on any errors that don't match the form pattern of `{:field, "message", [replacement: :vars]}` or implement the [`AshPhoenix.FormData.Error`](external_link) protocol. The default value is `true`.

  * `:domain` ([`atom/0`](external_link)) - The domain to use when calling the action

  * `:as` ([`String.t/0`](external_link)) - The name of the form in the submitted params. You will need to pull the form params out using this key. The default value is `"form"`.

  * `:id` ([`String.t/0`](external_link)) - The html id of the form. Defaults to the value of `:as` if provided, otherwise "form"

  * `:transform_errors` ([`term/0`](external_link)) - Allows for manual manipulation and transformation of errors.  
If possible, try to implement [`AshPhoenix.FormData.Error`](external_link) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the changeset and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`

  * `:prepare_source` \- A 1-argument function the receives the initial changeset (or query) and makes any relevant changes to it. This can be used to do things like: 

    * Set default argument values before the validations are run using [`Ash.Changeset.set_arguments/2`](3.4.1/Ash.Changeset.html#set_arguments/2) or [`Ash.Changeset.set_argument/3`](3.4.1/Ash.Changeset.html#set_argument/3)
    * Set changeset context
    * Do any other pre-processing on the changeset
  * `:prepare_params` \- A 2-argument function that receives the params map and the :validate atom and should return prepared params. Called before the form is validated.

  * `:transform_params` \- A function for post-processing the form parameters before they are used for changeset validation/submission. Use a 3-argument function to pattern match on the [`AshPhoenix.Form`](external_link) struct.

  * `:method` ([`String.t/0`](external_link)) - The http method to associate with the form. Defaults to `post` for creates, and `put` for everything else.

  * `:exclude_fields_if_empty` \- These fields will be ignored if they are empty strings.  
This list of fields supports dead view forms. When a form is submitted from dead view empty fields are submitted as empty strings. This is problematic for fields that allow_nil or those that have default values.

  * `:tenant` ([`term/0`](external_link)) - The current tenant. Passed through to the underlying action.




Any _additional_ options will be passed to the underlying call to [`Ash.Changeset.for_update/4`](3.4.1/Ash.Changeset.html#for_update/4). This means you can set things like the tenant/actor. These will be retained, and provided again when `Form.submit/3` is called.

__ Link to this function

# get_form(form, path)

[ __ View Source ](external_link)
    
    
    @spec get_form(t() | [Phoenix.HTML.Form.t](external_link)(), path()) :: t() | nil

Gets the form at the specified path

__ Link to this function

# has_form?(form, path)

[ __ View Source ](external_link)
    
    
    @spec has_form?(t(), path()) :: [boolean](external_link)()

Returns true if a given form path exists in the form

__ Link to this function

# hidden_fields(form)

[ __ View Source ](external_link)
    
    
    @spec hidden_fields(t() | [Phoenix.HTML.Form.t](external_link)()) :: [Keyword.t](external_link)()

Returns the hidden fields for a form as a keyword list

__ Link to this function

# ignore(form)

[ __ View Source ](external_link)
    
    
    @spec ignore(t()) :: t()

Toggles the form to be ignored or not ignored.

To set this manually in an html form, use the field `:_ignored` and set it to the string "true". Any other value will not result in the form being ignored.

__ Link to this function

# ignored?(form)

[ __ View Source ](external_link)
    
    
    @spec ignored?(t() | [Phoenix.HTML.Form.t](external_link)()) :: [boolean](external_link)()

Returns true if the form is ignored

__ Link to this function

# merge_options(form, opts)

[ __ View Source ](external_link)
    
    
    @spec merge_options(t(), [Keyword.t](external_link)()) :: t()
    
    
    @spec merge_options([Phoenix.HTML.Form.t](external_link)(), [Keyword.t](external_link)()) :: [Phoenix.HTML.Form.t](external_link)()

Merge the new options with the saved options on a form. See `update_options/2` for more.

__ Link to this function

# params(form, opts \\\ [])

[ __ View Source ](external_link)

Returns the parameters from the form that would be submitted to the action.

This can be useful if you want to get the parameters and manipulate them/build a custom changeset afterwards.

__ Link to this function

# parse_path!(form, original_path, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec parse_path!(t() | [Phoenix.HTML.Form.t](external_link)(), path(), opts :: [Keyword.t](external_link)()) ::
      [[atom](external_link)() | [integer](external_link)()] | [no_return](external_link)()

A utility for parsing paths of nested forms in query encoded format.

For example:
    
    
    parse_path!(form, "post[comments][0][sub_comments][0])
    
    [:comments, 0, :sub_comments, 0]

__ Link to this function

# remove_form(form, path, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec remove_form(t(), path(), [Keyword.t](external_link)()) :: t()
    
    
    @spec remove_form([Phoenix.HTML.Form.t](external_link)(), path(), [Keyword.t](external_link)()) :: [Phoenix.HTML.Form.t](external_link)()

Removes a form at the provided path.

See `add_form/3` for more information on the `path` argument.

If you are not using liveview, and you want to support removing forms that were created based on the `data` option from the browser, you'll need to include in the form submission a custom list of strings to remove, and then manually iterate over them in your controller, for example:
    
    
    Enum.reduce(removed_form_paths, form, &AshPhoenix.Form.remove_form(&2, &1))

  * `:validate?` ([`boolean/0`](external_link)) - Validates the new full form. The default value is `true`.

  * `:validate_opts` ([`term/0`](external_link)) - Options to pass to `validate`. Only used if `validate?` is set to `true` (the default) The default value is `[]`.




__ Link to this function

# set_data(form, data)

[ __ View Source ](external_link)

Sets the data of the form, in addition to the data of the underlying source, if applicable.

Queries do not track data (because that wouldn't make sense), so this will not update the data for read actions

__ Link to this function

# submit(form, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec submit(t(), [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)() | nil | [[Ash.Notifier.Notification.t](3.4.1/Ash.Notifier.Notification.html#t:t/0)()]}
      | {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)(), [[Ash.Notifier.Notification.t](3.4.1/Ash.Notifier.Notification.html#t:t/0)()]}
      | :ok
      | {:error, t()}
    
    
    @spec submit([Phoenix.HTML.Form.t](external_link)(), [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)() | nil | [[Ash.Notifier.Notification.t](3.4.1/Ash.Notifier.Notification.html#t:t/0)()]}
      | {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)(), [[Ash.Notifier.Notification.t](3.4.1/Ash.Notifier.Notification.html#t:t/0)()]}
      | :ok
      | {:error, [Phoenix.HTML.Form.t](external_link)()}

Submits the form.

If the submission returns an error, the resulting form can be rerendered. Any nested errors will be passed down to the corresponding form for that input.

Options:

  * `:force?` ([`boolean/0`](external_link)) - Submit the form even if it is invalid in its current state. The default value is `false`.

  * `:action_opts` ([`keyword/0`](external_link)) - Opts to pass to the call to Ash when calling the action The default value is `[]`.

  * `:errors` ([`boolean/0`](external_link)) - Wether or not to show errors after submitting. The default value is `true`.

  * `:override_params` ([`term/0`](external_link)) - If specified, then the params are not extracted from the form.  
How this different from `params`: providing `params` is simply results in calling `validate(form, params)` before proceeding. The values that are passed into the action are then extracted from the form using `params/2`. With `override_params`, the form is not validated again, and the `override_params` are passed directly into the action.

  * `:params` ([`term/0`](external_link)) - If specified, `validate/3` is called with the new params before submitting the form.  
This is a shortcut to avoid needing to explicitly validate before every submit.  
For example: 
    
        form
    |> AshPhoenix.Form.validate(params)
    |> AshPhoenix.Form.submit()

Is the same as: 
    
        form
    |> AshPhoenix.Form.submit(params: params)

  * `:read_one?` ([`boolean/0`](external_link)) - If submitting a read form, a single result will be returned (via read_one) instead of a list of results.  
Ignored for non-read forms. The default value is `false`.

  * `:before_submit` (function of arity 1) - A function to apply to the source (changeset or query) just before submitting the action. Must return the modified changeset.




__ Link to this function

# submit!(form, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec submit!(t(), [Keyword.t](external_link)()) :: [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)() | :ok | [no_return](external_link)()

Same as `submit/2`, but raises an error if the submission fails.

__ Link to this function

# touch(form, fields)

[ __ View Source ](external_link)

Mark a field or fields as touched

To mark nested fields as touched use with `update_form/4` or `update_forms_at_path/4`

__ Link to this function

# update_form(form, path, func, opts \\\ [])

[ __ View Source ](external_link)

Updates the form at the provided path using the given function.

Marks all forms along the path as touched by default. To prevent it, provide `mark_as_touched?: false`.

This can be useful if you have a button that should modify a nested form in some way, for example.

__ Link to this function

# update_forms_at_path(form, path, func, opts \\\ [])

[ __ View Source ](external_link)

Updates the list of forms matching a given path. Does not validate that the path points at a single form like `update_form/4`.

Additionally, if it gets to a list of child forms and the next part of the path is not an integer, it will update all of the forms at that path.

__ Link to this function

# update_options(form, fun)

[ __ View Source ](external_link)

Update the saved options on a form.

When a form is created, options like `actor` and `authorize?` are stored in the `opts` key. If you have a case where these options change over time, for example a select box that determines the actor, use this function to override those opts.

You may want to validate again after this has been changed if it can change the results of your form validation.

__ Link to this function

# validate(form, new_params, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec validate(t(), [map](external_link)(), [Keyword.t](external_link)()) :: t()
    
    
    @spec validate([Phoenix.HTML.Form.t](external_link)(), [map](external_link)(), [Keyword.t](external_link)()) :: [Phoenix.HTML.Form.t](external_link)()

Validates the parameters against the form.

Options:

  * `:errors` ([`boolean/0`](external_link)) - Set to false to hide errors after validation The default value is `true`.

  * `:target` (list of [`String.t/0`](external_link)) - The `_target` param provided by phoenix. Used to support the `only_touched?` option.

  * `:only_touched?` ([`boolean/0`](external_link)) - If set to true, only fields that have been marked as touched will be used  
If you use this for validation you likely want to use it when submitting as well. The default value is `false`.




__ Link to this function

# value(form, field)

[ __ View Source ](external_link)
    
    
    @spec value(t() | [Phoenix.HTML.Form.t](external_link)(), [atom](external_link)()) :: [any](external_link)()

Gets the value for a given field in the form.
