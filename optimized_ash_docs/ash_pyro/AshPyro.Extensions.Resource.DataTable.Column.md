# AshPyro.Extensions.Resource.DataTable.Column — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) AshPyro.Extensions.Resource.DataTable.Column (AshPyro v0.2.1)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- fetch(term, key)
- get(term, key, default)
- get_and_update(term, key, fun)
- render_cell(map)

__

Search documentation of AshPyro __ __

__ Settings

#  [ __ View Source ](external_link) AshPyro.Extensions.Resource.DataTable.Column (AshPyro v0.2.1)

The configuration of a data table column in the [`AshPyro.Extensions.Resource`](external_link) extension.

By default, the `tbody` cell will be rendered with `render_cell/1`. You can also change the `:type` option to specify special kinds of rendering.

For bespoke rendering needs, you can provide a custom component inline or as a function capture:
    
    
    import Phoenix.Component, only: [sigil_H: 2]
    column :code do
      class "whitespace-nowrap"
      render_cell fn assigns ->
        ~H"""
        <PyroComponents.Core.icon name="hero-rocket-launch" />
        <%= Map.get(@row, @col[:name]) %>
        """
      end
    end

#  __ Summary

##  Types

t()

##  Functions

fetch(term, key)

See [`Map.fetch/2`](external_link).

get(term, key, default)

See [`Map.get/3`](external_link).

get_and_update(term, key, fun)

See [`Map.get_and_update/3`](external_link).

render_cell(map)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshPyro.Extensions.Resource.DataTable.Column{
      cell_class: [AshPyro.Extensions.Resource.Schema.css_class](external_link)(),
      class: [AshPyro.Extensions.Resource.Schema.css_class](external_link)(),
      description: [binary](external_link)(),
      label: [binary](external_link)(),
      name: [atom](external_link)(),
      path: [binary](external_link)(),
      render_cell: ([map](external_link)() -> [binary](external_link)()),
      resource_field_type:
        :attribute
        | :calculation
        | :aggregate
        | :has_one
        | :belongs_to
        | :has_many
        | :many_to_many,
      sortable?: [boolean](external_link)(),
      type: :default
    }

#  __ Functions

__ Link to this function

# fetch(term, key)

[ __ View Source ](external_link)

See [`Map.fetch/2`](external_link).

__ Link to this function

# get(term, key, default)

[ __ View Source ](external_link)

See [`Map.get/3`](external_link).

__ Link to this function

# get_and_update(term, key, fun)

[ __ View Source ](external_link)

See [`Map.get_and_update/3`](external_link).

__ Link to this function

# render_cell(map)

[ __ View Source ](external_link)
