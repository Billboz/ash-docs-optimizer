# Ash.Domain.Info.Diagram — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Domain.Info.Diagram (ash v3.4.8)
  - __ Limitations
- __ Summary
  - Functions
- __ Functions
- mermaid_class_diagram(domain, opts \\\ [indent: " ", show_private?: false])
- mermaid_er_diagram(domain, opts \\\ [indent: " ", show_private?: false])

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Domain.Info.Diagram (ash v3.4.8)

Generate Mermaid diagrams from a specified domain.

##  __ Limitations

We can't easily model Ash relationships with Mermaid diagrams because they are unidirectional and could be asymmetric. Mermaid assumes symmetrical, bidirectional relationships. If we try to model all unidirectional relationships as separate lines in the diagram it gets very hard to read very quickly.

#  __ Summary

##  Functions

mermaid_class_diagram(domain, opts \\\ [indent: " ", show_private?: false])

Generates a Mermaid Class Diagram for a given domain.

mermaid_er_diagram(domain, opts \\\ [indent: " ", show_private?: false])

Generates a Mermaid Entity Relationship Diagram for a given domain.

#  __ Functions

__ Link to this function

# mermaid_class_diagram(domain, opts \\\ [indent: " ", show_private?: false])

[ __ View Source ](external_link)

Generates a Mermaid Class Diagram for a given domain.

Shows only public attributes, calculations, aggregates and actions. Shows a connecting line for relationships with the type of relationship indicated in the attribute list.

__ Link to this function

# mermaid_er_diagram(domain, opts \\\ [indent: " ", show_private?: false])

[ __ View Source ](external_link)

Generates a Mermaid Entity Relationship Diagram for a given domain.

Shows only public attributes, calculations, aggregates and actions. Shows a one-to-one line for relationships as enumerating all unidirectional relationships is far too noisy.
