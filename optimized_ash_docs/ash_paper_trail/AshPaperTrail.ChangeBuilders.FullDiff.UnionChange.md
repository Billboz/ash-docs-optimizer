# AshPaperTrail.ChangeBuilders.FullDiff.UnionChange — ash_paper_trail v0.1.4

Project: ash_paper_trail v0.1.4

## Table of Contents

- [ __ View Source ](external_link) AshPaperTrail.ChangeBuilders.FullDiff.UnionChange (ash_paper_trail v0.1.4)
- __ Summary
  - Functions
- __ Functions
- build(attribute, changeset)
- dump_union_type_value(value, attribute)

__

Search documentation of ash_paper_trail __ __

__ Settings

#  [ __ View Source ](external_link) AshPaperTrail.ChangeBuilders.FullDiff.UnionChange (ash_paper_trail v0.1.4)

A non-embedded union attribute change will be represented as a map:

%{ to: nil } %{ to: %{value: value, type: type } } %{ from: %{value: value, type: type }, to: %{value: value, type: type } } %{ unchanged: %{value: value, type: type } }

If the from & to are embedded resources with the same primary key then, we'll have consider it changed and represent it as:

%{ changed: %{type: type, updated: %{ ...attributes... } } }

If the union value is an embedded resource the `value` key will be replaced with created, unchanged, updated, destroyed.

%{ from: nil, created: %{type: type, value: %{ ...attributes... } } } %{ unchanged: %{type: type, value: %{ ...attributes... } } } %{ updated: %{type: type, value: %{ ...attributes... } } } %{ from: %{type: type, value: value}, created: %{type: type, value: %{ ...attributes... } } %{ destroyed: %{type: type, value: %{ ...attributes... } }, to: nil } %{ destroyed: %{type: type, value: %{ ...attributes... } }, created: %{type: type, value: %{ ...attributes... } } } %{ destroyed: %{type: type, destroyed: %{ ...attributes... } }, to: %{type: type, value: value } }

#  __ Summary

##  Functions

build(attribute, changeset)

dump_union_type_value(value, attribute)

#  __ Functions

__ Link to this function

# build(attribute, changeset)

[ __ View Source ](external_link)

__ Link to this function

# dump_union_type_value(value, attribute)

[ __ View Source ](external_link)
