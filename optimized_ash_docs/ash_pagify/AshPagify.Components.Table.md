# AshPagify.Components.Table — ash_pagify v1.0.2

Project: ash_pagify v1.0.2

## Table of Contents

- [ __ View Source ](external_link) AshPagify.Components.Table (ash_pagify v1.0.2)
- __ Summary
  - Functions
  - Attributes
- __ Functions
- default_opts()
- merge_opts(opts)
- render(assigns)
  - __ Attributes

__

Search documentation of ash_pagify __ __

__ Settings

#  [ __ View Source ](external_link) AshPagify.Components.Table (ash_pagify v1.0.2)

Table component for AshPagify.

#  __ Summary

##  Functions

default_opts()

merge_opts(opts)

render(assigns)

## Attributes

  * `id` (`:string`) (required)
  * `meta` ([`AshPagify.Meta`](external_link)) (required)
  * `path` (`:any`) (required)
  * `on_sort` ([`Phoenix.LiveView.JS`](external_link))
  * `target` (`:string`) (required)
  * `caption_text` (`:string`) (required)
  * `caption` (`:any`)
  * `opts` (`:any`) (required)
  * `col` (`:any`)
  * `items` (`:list`) (required)
  * `foot` (`:any`) (required)
  * `row_id` (`:any`) - Defaults to `nil`.
  * `row_click` ([`Phoenix.LiveView.JS`](external_link)) - Defaults to `nil`.
  * `row_item` (`:any`) (required)
  * `action` (`:any`) (required)



#  __ Functions

__ Link to this function

# default_opts()

[ __ View Source ](external_link)
    
    
    @spec default_opts() :: [[AshPagify.Components.table_option](external_link)()]

__ Link to this function

# merge_opts(opts)

[ __ View Source ](external_link)

__ Link to this function

# render(assigns)

[ __ View Source ](external_link)

##  __ Attributes

  * `id` (`:string`) (required)
  * `meta` ([`AshPagify.Meta`](external_link)) (required)
  * `path` (`:any`) (required)
  * `on_sort` ([`Phoenix.LiveView.JS`](external_link))
  * `target` (`:string`) (required)
  * `caption_text` (`:string`) (required)
  * `caption` (`:any`)
  * `opts` (`:any`) (required)
  * `col` (`:any`)
  * `items` (`:list`) (required)
  * `foot` (`:any`) (required)
  * `row_id` (`:any`) - Defaults to `nil`.
  * `row_click` ([`Phoenix.LiveView.JS`](external_link)) - Defaults to `nil`.
  * `row_item` (`:any`) (required)
  * `action` (`:any`) (required)


