# mix ash.generate_flow_charts — ash_flow v0.1.1

Project: ash_flow v0.1.1

## Table of Contents

- [ __ View Source ](external_link) mix ash.generate_flow_charts (ash_flow v0.1.1)
  - __ Prerequisites
  - __ Command line options
- __ Summary
  - Functions
- __ Functions
- run(argv)

__

Search documentation of ash_flow __ __

__ Settings

#  [ __ View Source ](external_link) mix ash.generate_flow_charts (ash_flow v0.1.1)

Generates a Mermaid Flow Chart for each [`Ash.Flow`](external_link) alongside the flow.

If there is a `run_flow` step in the flow, this will also create an "expanded" Mermaid Flow Chart which includes all child steps.

##  __ Prerequisites

This mix task requires the Mermaid CLI to be installed on your system.

See <https://github.com/mermaid-js/mermaid-cli>

##  __ Command line options

  * `--only` \- only generates the given Flow file
  * `--format` \- Can be set to one of either:
    * `plain` \- Prints just the mermaid output as text. This is the default.
    * `md` \- Prints the mermaid diagram in a markdown code block.
    * `svg` \- Generates an SVG
    * `pdf` \- Generates a PDF
    * `png` \- Generates a PNG



#  __ Summary

##  Functions

run(argv)

Generates Mermaid Flow Charts for each [`Ash.Flow`](external_link)

#  __ Functions

__ Link to this function

# run(argv)

[ __ View Source ](external_link)

Generates Mermaid Flow Charts for each [`Ash.Flow`](external_link)
