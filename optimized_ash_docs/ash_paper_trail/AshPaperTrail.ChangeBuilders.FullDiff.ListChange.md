# AshPaperTrail.ChangeBuilders.FullDiff.ListChange — ash_paper_trail v0.1.4

Project: ash_paper_trail v0.1.4

## Table of Contents

- [ __ View Source ](external_link) AshPaperTrail.ChangeBuilders.FullDiff.ListChange (ash_paper_trail v0.1.4)
  - TODO: instead of `to:` and `from:` used `added:` and `removed:`
- __ Summary
  - Functions
- __ Functions
- add_index_change(change, from, to)
- build(attribute, changeset)

__

Search documentation of ash_paper_trail __ __

__ Settings

#  [ __ View Source ](external_link) AshPaperTrail.ChangeBuilders.FullDiff.ListChange (ash_paper_trail v0.1.4)

A list of changes represented as a map:

%{ to: nil } %{ unchanged: nil } %{ from: nil, to: [ ...all.new.items... ] } %{ from: [ ...all.new.items.removed.... ], to: nil } %{ to: [ ...one.or.more.items.changing... ] } %{ unchanged: [ ...no.items.changing... ] }

With each element of the array represented as a change:

#TODO: instead of `to:` and `from:` used `added:` and `removed:` #

A nil item added: %{ to: nil, index: %{to: index} }

A nil item unchanged: %{ unchanged: nil, index: %{unchanged: index} }

A simple item added: %{ to: value, index: %{to: index} }

A simple item removed: %{ from: value, index: %{from: index} }

A simple item moved: %{ unchanged: value, index: %{from: from, to: to} }

A simple item unchanged: %{ unchanged: value, index: %{unchanged: index} }

A union item when added: %{ to: %{type: type, value: value }, index: %{to: index} }

A union item when unchanged: %{ unchanged: %{type: type, value: value }, index: %{unchanged: index} }

A union item when removed: %{ from: %{type: type, value: value }, index: %{from: index} }

An embedded item added: %{ created: %{ ...attrs...}, index: %{to: index} }

An embedded item when unchanged and unmoved: %{ unchanged: %{...attrs...}, index: %{unchanged: index} }

An embedded item when updated and unmoved: %{ updated: %{...attrs...}, index: %{unchanged: index} }

An embedded item when unchanged and moved: %{ unchanged: %{...attrs...} }, index: %{from: prev, to: index} }

An embedded item when updated and moved: %{ updated: %{...attrs...}, index: %{from: prev, to: index} }

An embedded item when removed: %{ destroyed: value: %{...attrs...}, index: %{from: index} }

#  __ Summary

##  Functions

add_index_change(change, from, to)

build(attribute, changeset)

#  __ Functions

__ Link to this function

# add_index_change(change, from, to)

[ __ View Source ](external_link)

__ Link to this function

# build(attribute, changeset)

[ __ View Source ](external_link)
