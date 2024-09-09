# AshPagify.Components.Pagination — ash_pagify v1.0.2

Project: ash_pagify v1.0.2

## Table of Contents

- [ __ View Source ](external_link) AshPagify.Components.Pagination (ash_pagify v1.0.2)
- __ Summary
  - Functions
- __ Functions
- attrs_for_page_link(page, arg2, opts)
- build_page_link_helper(meta, path)
- default_opts()
- get_page_link_range(current_page, max_pages, total_pages)
- max_pages(arg1, total_pages)
- merge_opts(opts)
- show_pagination?(arg1)

__

Search documentation of ash_pagify __ __

__ Settings

#  [ __ View Source ](external_link) AshPagify.Components.Pagination (ash_pagify v1.0.2)

Pagination component for AshPagify.

#  __ Summary

##  Functions

attrs_for_page_link(page, arg2, opts)

build_page_link_helper(meta, path)

default_opts()

get_page_link_range(current_page, max_pages, total_pages)

max_pages(arg1, total_pages)

merge_opts(opts)

show_pagination?(arg1)

#  __ Functions

__ Link to this function

# attrs_for_page_link(page, arg2, opts)

[ __ View Source ](external_link)

__ Link to this function

# build_page_link_helper(meta, path)

[ __ View Source ](external_link)
    
    
    @spec build_page_link_helper(
      [AshPagify.Meta.t](external_link)(),
      [AshPagify.Components.pagination_path](external_link)()
    ) ::
      ([integer](external_link)() -> [String.t](external_link)() | nil)

__ Link to this function

# default_opts()

[ __ View Source ](external_link)
    
    
    @spec default_opts() :: [[AshPagify.Components.pagination_option](external_link)()]

__ Link to this function

# get_page_link_range(current_page, max_pages, total_pages)

[ __ View Source ](external_link)

__ Link to this function

# max_pages(arg1, total_pages)

[ __ View Source ](external_link)

__ Link to this function

# merge_opts(opts)

[ __ View Source ](external_link)

__ Link to this function

# show_pagination?(arg1)

[ __ View Source ](external_link)
