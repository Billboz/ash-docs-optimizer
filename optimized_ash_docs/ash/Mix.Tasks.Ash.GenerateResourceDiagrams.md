# mix ash.generate_resource_diagrams — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) mix ash.generate_resource_diagrams (ash v3.4.8)
  - __ Prerequisites
  - __ Command line options
- __ Summary
  - Functions
- __ Functions
- run(argv)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) mix ash.generate_resource_diagrams (ash v3.4.8)

Generates a Mermaid Resource Diagram for each Ash domain.

##  __ Prerequisites

This mix task requires the Mermaid CLI to be installed on your system.

See <https://github.com/mermaid-js/mermaid-cli>

##  __ Command line options

  * `--type` \- `er` or `class` (defaults to `class`)
  * `--only` \- only generates for the given domain
  * `--format` \- Can be set to one of either:
    * `plain` \- Prints just the mermaid output as text. This is the default.
    * `md` \- Prints the mermaid diagram in a markdown code block.
    * `svg` \- Generates an SVG
    * `pdf` \- Generates a PDF
    * `png` \- Generates a PNG



#  __ Summary

##  Functions

run(argv)

Generates Mermaid Resource Diagrams for each Ash domain

#  __ Functions

__ Link to this function

# run(argv)

[ __ View Source ](external_link)

Generates Mermaid Resource Diagrams for each Ash domain
