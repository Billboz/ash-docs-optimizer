# AshAdmin.CoreComponents — ash_admin v0.11.5

Project: ash_admin v0.11.5

## Table of Contents

- [ __ View Source ](external_link) AshAdmin.CoreComponents (ash_admin v0.11.5)
- __ Summary
  - Functions
- __ Functions
- back(assigns)
  - __ Examples
  - __ Attributes
  - __ Slots
- button(assigns)
  - __ Examples
  - __ Attributes
  - __ Slots
- error(assigns)
  - __ Slots
- flash(assigns)
  - __ Examples
  - __ Attributes
  - __ Slots
- flash_group(assigns)
  - __ Examples
  - __ Attributes
- header(assigns)
  - __ Attributes
  - __ Slots
- hide(js \\\ %JS{}, selector)
- hide_modal(js \\\ %JS{}, id)
- icon(assigns)
  - __ Examples
  - __ Attributes
- input(assigns)
  - __ Types
  - __ Examples
  - __ Attributes
  - __ Slots
- label(assigns)
  - __ Attributes
  - __ Slots
- list(assigns)
  - __ Examples
  - __ Slots
- modal(assigns)
  - __ Examples
  - __ Attributes
  - __ Slots
- show(js \\\ %JS{}, selector)
- show_modal(js \\\ %JS{}, id)
- simple_form(assigns)
  - __ Examples
  - __ Attributes
  - __ Slots
- table(assigns)
  - __ Examples
  - __ Attributes
  - __ Slots
- translate_error(arg)
- translate_errors(errors, field)

__

Search documentation of ash_admin __ __

__ Settings

#  [ __ View Source ](external_link) AshAdmin.CoreComponents (ash_admin v0.11.5)

Provides core UI components.

At the first glance, this module may seem daunting, but its goal is to provide some core building blocks in your application, such as modals, tables, and forms. The components are mostly markup and well documented with doc strings and declarative assigns. You may customize and style them in any way you want, based on your application growth and needs.

The default components use Tailwind CSS, a utility-first CSS framework. See the [Tailwind CSS documentation](external_link) to learn how to customize them or feel free to swap in another framework altogether.

Icons are provided by [heroicons](external_link). See `icon/1` for usage.

#  __ Summary

##  Functions

back(assigns)

Renders a back navigation link.

button(assigns)

Renders a button.

error(assigns)

Generates a generic error message.

flash(assigns)

Renders flash notices.

flash_group(assigns)

Shows the flash group with standard titles and content.

header(assigns)

Renders a header with title.

hide(js \\\ %JS{}, selector)

hide_modal(js \\\ %JS{}, id)

icon(assigns)

Renders a [Heroicon](external_link).

input(assigns)

Renders an input with label and error messages.

label(assigns)

Renders a label.

list(assigns)

Renders a data list.

modal(assigns)

Renders a modal.

show(js \\\ %JS{}, selector)

show_modal(js \\\ %JS{}, id)

simple_form(assigns)

Renders a simple form.

table(assigns)

Renders a table with generic styling.

translate_error(arg)

Translates an error message using gettext.

translate_errors(errors, field)

Translates the errors for a field from a keyword list of errors.

#  __ Functions

__ Link to this function

# back(assigns)

[ __ View Source ](external_link)

Renders a back navigation link.

##  __ Examples
    
    
    <.back navigate={~p"/posts"}>Back to posts</.back>

##  __ Attributes

  * `navigate` (`:any`) (required)



##  __ Slots

  * `inner_block` (required)



__ Link to this function

# button(assigns)

[ __ View Source ](external_link)

Renders a button.

##  __ Examples
    
    
    <.button>Send!</.button>
    <.button phx-click="go" class="ml-2">Send!</.button>

##  __ Attributes

  * `type` (`:string`) - Defaults to `nil`.
  * `class` (`:string`) - Defaults to `nil`.
  * Global attributes are accepted. Supports all globals plus: `["disabled", "form", "name", "value"]`.



##  __ Slots

  * `inner_block` (required)



__ Link to this function

# error(assigns)

[ __ View Source ](external_link)

Generates a generic error message.

##  __ Slots

  * `inner_block` (required)



__ Link to this function

# flash(assigns)

[ __ View Source ](external_link)

Renders flash notices.

##  __ Examples
    
    
    <.flash kind={:info} flash={@flash} />
    <.flash kind={:info} phx-mounted={show("#flash")}>Welcome Back!</.flash>

##  __ Attributes

  * `id` (`:string`) - the optional id of flash container. Defaults to `"flash"`.
  * `flash` (`:map`) - the map of flash messages to display. Defaults to `%{}`.
  * `title` (`:string`) - Defaults to `nil`.
  * `kind` (`:atom`) - used for styling and flash lookup.Must be one of `:info`, or `:error`.
  * Global attributes are accepted. the arbitrary HTML attributes to add to the flash container.



##  __ Slots

  * `inner_block` \- the optional inner block that renders the flash message.



__ Link to this function

# flash_group(assigns)

[ __ View Source ](external_link)

Shows the flash group with standard titles and content.

##  __ Examples
    
    
    <.flash_group flash={@flash} />

##  __ Attributes

  * `flash` (`:map`) (required) - the map of flash messages.



__ Link to this function

# header(assigns)

[ __ View Source ](external_link)

Renders a header with title.

##  __ Attributes

  * `class` (`:string`) - Defaults to `nil`.



##  __ Slots

  * `inner_block` (required)
  * `subtitle`
  * `actions`



__ Link to this function

# hide(js \\\ %JS{}, selector)

[ __ View Source ](external_link)

__ Link to this function

# hide_modal(js \\\ %JS{}, id)

[ __ View Source ](external_link)

__ Link to this function

# icon(assigns)

[ __ View Source ](external_link)

Renders a [Heroicon](external_link).

Heroicons come in three styles – outline, solid, and mini. By default, the outline style is used, but solid and mini may be applied by using the `-solid` and `-mini` suffix.

You can customize the size and colors of the icons by setting width, height, and background color classes.

Icons are extracted from your `assets/vendor/heroicons` directory and bundled within your compiled app.css by the plugin in your `assets/tailwind.config.js`.

##  __ Examples
    
    
    <.icon name="hero-x-mark-solid" />
    <.icon name="hero-arrow-path" class="ml-1 w-3 h-3 animate-spin" />

##  __ Attributes

  * `name` (`:string`) (required)
  * `class` (`:string`) - Defaults to `nil`.



__ Link to this function

# input(assigns)

[ __ View Source ](external_link)

Renders an input with label and error messages.

A [`Phoenix.HTML.FormField`](external_link) may be passed as argument, which is used to retrieve the input name, id, and values. Otherwise all attributes may be passed explicitly.

##  __ Types

This function accepts all HTML input types, considering that:

  * You may also set `type="select"` to render a `<select>` tag

  * `type="checkbox"` is used exclusively to render boolean values

  * For live file uploads, see [`Phoenix.Component.live_file_input/1`](external_link)




See <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input> for more information.

##  __ Examples
    
    
    <.input field={@form[:email]} type="email" />
    <.input name="my-input" errors={["oh no!"]} />

##  __ Attributes

  * `id` (`:any`) - Defaults to `nil`.
  * `name` (`:any`)
  * `label` (`:string`) - Defaults to `nil`.
  * `value` (`:any`)
  * `type` (`:string`) - Defaults to `"text"`.
  * `field` ([`Phoenix.HTML.FormField`](external_link)) - a form field struct retrieved from the form, for example: @form[:email].
  * `errors` (`:list`) - Defaults to `[]`.
  * `checked` (`:boolean`) - the checked flag for checkbox inputs.
  * `prompt` (`:string`) - the prompt for select inputs. Defaults to `nil`.
  * `options` (`:list`) - the options to pass to Phoenix.HTML.Form.options_for_select/2.
  * `multiple` (`:boolean`) - the multiple flag for select inputs. Defaults to `false`.
  * Global attributes are accepted. Supports all globals plus: `["accept", "autocomplete", "capture", "cols", "disabled", "form", "list", "max", "maxlength", "min", "minlength", "multiple", "pattern", "placeholder", "readonly", "required", "rows", "size", "step"]`.



##  __ Slots

  * `inner_block`



__ Link to this function

# label(assigns)

[ __ View Source ](external_link)

Renders a label.

##  __ Attributes

  * `for` (`:string`) - Defaults to `nil`.



##  __ Slots

  * `inner_block` (required)



__ Link to this function

# list(assigns)

[ __ View Source ](external_link)

Renders a data list.

##  __ Examples
    
    
    <.list>
      <:item title="Title"><%= @post.title %></:item>
      <:item title="Views"><%= @post.views %></:item>
    </.list>

##  __ Slots

  * `item` (required) - Accepts attributes:
    * `title` (`:string`) (required)



__ Link to this function

# modal(assigns)

[ __ View Source ](external_link)

Renders a modal.

##  __ Examples
    
    
    <.modal id="confirm-modal">
      This is a modal.
    </.modal>

JS commands may be passed to the `:on_cancel` to configure the closing/cancel event, for example:
    
    
    <.modal id="confirm" on_cancel={JS.navigate(~p"/posts")}>
      This is another modal.
    </.modal>

##  __ Attributes

  * `id` (`:string`) (required)
  * `show` (`:boolean`) - Defaults to `false`.
  * `on_cancel` ([`Phoenix.LiveView.JS`](external_link)) - Defaults to `%Phoenix.LiveView.JS{ops: []}`.



##  __ Slots

  * `inner_block` (required)



__ Link to this function

# show(js \\\ %JS{}, selector)

[ __ View Source ](external_link)

__ Link to this function

# show_modal(js \\\ %JS{}, id)

[ __ View Source ](external_link)

__ Link to this function

# simple_form(assigns)

[ __ View Source ](external_link)

Renders a simple form.

##  __ Examples
    
    
    <.simple_form for={@form} phx-change="validate" phx-submit="save">
      <.input field={@form[:email]} label="Email"/>
      <.input field={@form[:username]} label="Username" />
      <:actions>
        <.button>Save</.button>
      </:actions>
    </.simple_form>

##  __ Attributes

  * `for` (`:any`) (required) - the datastructure for the form.
  * `as` (`:any`) - the server side parameter to collect all input under. Defaults to `nil`.
  * Global attributes are accepted. the arbitrary HTML attributes to apply to the form tag. Supports all globals plus: `["autocomplete", "name", "rel", "action", "enctype", "method", "novalidate", "target", "multipart"]`.



##  __ Slots

  * `inner_block` (required)
  * `actions` \- the slot for form actions, such as a submit button.



__ Link to this function

# table(assigns)

[ __ View Source ](external_link)

Renders a table with generic styling.

##  __ Examples
    
    
    <.table id="users" rows={@users}>
      <:col :let={user} label="id"><%= user.id %></:col>
      <:col :let={user} label="username"><%= user.username %></:col>
    </.table>

##  __ Attributes

  * `id` (`:string`) (required)
  * `rows` (`:list`) (required)
  * `row_id` (`:any`) - the function for generating the row id. Defaults to `nil`.
  * `row_click` (`:any`) - the function for handling phx-click on each row. Defaults to `nil`.
  * `row_item` (`:any`) - the function for mapping each row before calling the :col and :action slots. Defaults to `&Function.identity/1`.



##  __ Slots

  * `col` (required) - Accepts attributes:
    * `label` (`:string`)
  * `action` \- the slot for showing user actions in the last table column.



__ Link to this function

# translate_error(arg)

[ __ View Source ](external_link)

Translates an error message using gettext.

__ Link to this function

# translate_errors(errors, field)

[ __ View Source ](external_link)

Translates the errors for a field from a keyword list of errors.
