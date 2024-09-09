# AshPaperTrail.ChangeBuilders.FullDiff.EmbeddedChange — ash_paper_trail v0.1.4

Project: ash_paper_trail v0.1.4

## Table of Contents

- [ __ View Source ](external_link) AshPaperTrail.ChangeBuilders.FullDiff.EmbeddedChange (ash_paper_trail v0.1.4)
- __ Summary
  - Functions
- __ Functions
- build(attribute, changeset)
- dump_data_value(changeset, attribute)

__

Search documentation of ash_paper_trail __ __

__ Settings

#  [ __ View Source ](external_link) AshPaperTrail.ChangeBuilders.FullDiff.EmbeddedChange (ash_paper_trail v0.1.4)

A simple attribute change will be represented as a map:

%{ created: %{ subject: %{to: "subject"} } } %{ updated: %{ subject: %{from: "subject", to: "new subject"} } } %{ unchanged: %{ subject: %{unchanged: "subject"} } } %{ destroyed: %{ subject: %{unchanged: "subject"} } }

#  __ Summary

##  Functions

build(attribute, changeset)

dump_data_value(changeset, attribute)

#  __ Functions

__ Link to this function

# build(attribute, changeset)

[ __ View Source ](external_link)

__ Link to this function

# dump_data_value(changeset, attribute)

[ __ View Source ](external_link)
