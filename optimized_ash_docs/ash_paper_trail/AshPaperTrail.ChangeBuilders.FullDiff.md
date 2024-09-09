# AshPaperTrail.ChangeBuilders.FullDiff — ash_paper_trail v0.1.4

Project: ash_paper_trail v0.1.4

## Table of Contents

- [ __ View Source ](external_link) AshPaperTrail.ChangeBuilders.FullDiff (ash_paper_trail v0.1.4)
- __ Summary
  - Functions
- __ Functions
- build_changes(attributes, changeset, result)

__

Search documentation of ash_paper_trail __ __

__ Settings

#  [ __ View Source ](external_link) AshPaperTrail.ChangeBuilders.FullDiff (ash_paper_trail v0.1.4)

Builds a diff of the changeset that is both fairly easy read and includes a complete representation of the changes mades.

#  __ Summary

##  Functions

build_changes(attributes, changeset, result)

Return a map of the changes made with a key for each attribute and a value that is a map representing each change. The structure of map representing the each change comes in multiple: simple/native, embedded, union, and array of embedded and array of unions.

#  __ Functions

__ Link to this function

# build_changes(attributes, changeset, result)

[ __ View Source ](external_link)

Return a map of the changes made with a key for each attribute and a value that is a map representing each change. The structure of map representing the each change comes in multiple: simple/native, embedded, union, and array of embedded and array of unions.

%{
    
    
    subject: %{ from: "subject", to: "new subject" },
    body: { unchanged: "body" }

}
