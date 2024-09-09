# Ash.Flow.Template — ash_flow v0.1.1

Project: ash_flow v0.1.1

## Table of Contents

- [ __ View Source ](external_link) Ash.Flow.Template (ash_flow v0.1.1)
- __ Summary
  - Functions
- __ Functions
- arg_refs(input)
- element_refs(input)
- handle_input_template(action_input, input)
- is_template?(value)
- remap_result_references(action_input, prefix)
- result_refs(input)
- set_dependent_values(action_input, input)

__

Search documentation of ash_flow __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Flow.Template (ash_flow v0.1.1)

Helpers for working with Ash.Flow templates.

At first glance it would seem that all of this could be replaced by some calls to `Macro.prewalk` but that is unfortunately not the case. We don't traverse through structs, and in some cases we do things like return ranges/merge maps that require having the entire nested part of the template, i.e `{:_merge, [list, of, maps]}` has to get the fully handled list of maps, and so has to call itself.

#  __ Summary

##  Functions

arg_refs(input)

element_refs(input)

handle_input_template(action_input, input)

is_template?(value)

remap_result_references(action_input, prefix)

result_refs(input)

set_dependent_values(action_input, input)

#  __ Functions

__ Link to this function

# arg_refs(input)

[ __ View Source ](external_link)

__ Link to this function

# element_refs(input)

[ __ View Source ](external_link)

__ Link to this function

# handle_input_template(action_input, input)

[ __ View Source ](external_link)

__ Link to this function

# is_template?(value)

[ __ View Source ](external_link)

__ Link to this function

# remap_result_references(action_input, prefix)

[ __ View Source ](external_link)

__ Link to this function

# result_refs(input)

[ __ View Source ](external_link)

__ Link to this function

# set_dependent_values(action_input, input)

[ __ View Source ](external_link)
