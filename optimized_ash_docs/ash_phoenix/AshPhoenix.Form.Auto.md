# AshPhoenix.Form.Auto — ash_phoenix v2.1.2

Project: ash_phoenix v2.1.2

## Table of Contents

- [ __ View Source ](external_link) AshPhoenix.Form.Auto (ash_phoenix v2.1.2)
  - __ Options
  - __ Special Considerations
    - __ `on_lookup: :relate_and_update`
    - __ Many to Many Relationships
- __ Summary
  - Functions
- __ Functions
- auto(resource, action, opts \\\ [])
- embedded(resource, action, auto_opts)
- related(resource, action, auto_opts)
- unions(resource, action, auto_opts)

__

Search documentation of ash_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshPhoenix.Form.Auto (ash_phoenix v2.1.2)

A tool to automatically generate available nested forms based on a resource and action.

To use this, specify `forms: [auto?: true]` when creating the form.

Keep in mind, you can always specify these manually when creating a form by simply specifying the `forms` option.

There are two things that this builds forms for:

  1. Attributes/arguments who's type is an embedded resource.
  2. Arguments that have a corresponding `change manage_relationship(..)` configured.



For more on relationships see the documentation for [`Ash.Changeset.manage_relationship/4`](3.4.1/Ash.Changeset.html#manage_relationship/4).

When building forms, you can switch on the action type and/or resource of the form, in order to have different fields depending on the form. For example, if you have a simple relationship called `:comments` with `on_match: :update` and `on_no_match: :create`, there are two types of forms that can be in `inputs_for(form, :comments)`.

In which case you may have something like this:
    
    
    <%= for comment_form <- inputs_for(f, :comments) do %>
      <%= hidden_inputs_for(comment_form) %>
      <%= if comment_form.source.type == :create do %>
        <%= text_input comment_form, :text %>
        <%= text_input comment_form, :on_create_field %>
      <% else %>
        <%= text_input comment_form, :text %>
        <%= text_input comment_form, :on_update_field %>
      <% end %>
    
      <button phx-click="remove_form" phx-value-path="<%= comment_form.name %>">Add Comment</button>
      <button phx-click="add_form" phx-value-path="<%= comment_form.name %>">Add Comment</button>
    <% end %>

This also applies to adding forms of different types manually. For instance, if you had a "search" field to allow them to search for a record (e.g in a liveview), and you had an `on_lookup` read action, you could render a search form for that read action, and once they've selected a record, you could render the fields to update that record (in the case of `on_lookup: :relate_and_update` configurations).

##  __ Options

  * `:relationship_fetcher` ([`term/0`](external_link)) - A two argument function that receives the parent data, the relationship to fetch. The default simply fetches the relationship value, and if it isn't loaded, it uses `[]` or `nil`.

  * `:sparse_lists?` ([`boolean/0`](external_link)) - Sets all list type forms to `sparse?: true` by default. Has no effect on forms derived for embedded resources. The default value is `false`.

  * `:include_non_map_types?` ([`boolean/0`](external_link)) - Creates form for non map or array of map type inputs The default value is `false`.




##  __ Special Considerations

###  __ `on_lookup: :relate_and_update`

For `on_lookup: :relate_and_update` configurations, the "read" form for that relationship will use the appropriate read action. However, you may also want to include the relevant fields for the update that would subsequently occur. To that end, a special nested form called `:_update` is created, that uses an empty instance of that resource as the base of its changeset. This may require some manual manipulation of that data before rendering the relevant form because it assumes all the default values. To solve for this, if you are using liveview, you could actually look up the record using the input from the read action, and then use [`AshPhoenix.Form.update_form/3`](external_link) to set that looked up record as the data of the `_update` form.

###  __ Many to Many Relationships

In the case that a manage_change option points to a join relationship, that form is presented via a special nested form called `_join`. So the first form in `inputs_for(form, :relationship)` would be for the destination, and then inside of that you could say `inputs_for(nested_form, :_join)`. The parameters are merged together during submission.

#  __ Summary

##  Functions

auto(resource, action, opts \\\ [])

embedded(resource, action, auto_opts)

related(resource, action, auto_opts)

unions(resource, action, auto_opts)

#  __ Functions

__ Link to this function

# auto(resource, action, opts \\\ [])

[ __ View Source ](external_link)

__ Link to this function

# embedded(resource, action, auto_opts)

[ __ View Source ](external_link)

__ Link to this function

# related(resource, action, auto_opts)

[ __ View Source ](external_link)

__ Link to this function

# unions(resource, action, auto_opts)

[ __ View Source ](external_link)
