# AshPyro.Extensions.Resource.LiveView.Page — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) AshPyro.Extensions.Resource.LiveView.Page (AshPyro v0.2.1)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- fetch(term, key)
- get(term, key, default)
- get_and_update(term, key, fun)

__

Search documentation of AshPyro __ __

__ Settings

#  [ __ View Source ](external_link) AshPyro.Extensions.Resource.LiveView.Page (AshPyro v0.2.1)

A LiveView page.

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

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshPyro.Extensions.Resource.LiveView.Page{
      __identifier__: [any](external_link)(),
      api: [atom](external_link)(),
      class: [AshPyro.Extensions.Resource.Schema.css_class](external_link)(),
      keep_live?: [boolean](external_link)(),
      live_actions: [
        [AshPyro.Extensions.Resource.LiveView.Page.Create.t](external_link)()
        | [AshPyro.Extensions.Resource.LiveView.Page.List.t](external_link)()
        | [AshPyro.Extensions.Resource.LiveView.Page.Show.t](external_link)()
        | [AshPyro.Extensions.Resource.LiveView.Page.Update.t](external_link)()
      ],
      name: [atom](external_link)(),
      path: [[atom](external_link)()],
      route_helper: [function](external_link)(),
      view_as: :list_and_modal | :show_and_modal | :individual
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
