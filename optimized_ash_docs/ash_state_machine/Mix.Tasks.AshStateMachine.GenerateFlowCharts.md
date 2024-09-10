# mix ash_state_machine.generate_flow_charts — ash_state_machine v0.2.6

Project: ash_state_machine v0.2.6

## Table of Contents

- [ __ View Source ](external_link) mix ash_state_machine.generate_flow_charts (ash_state_machine v0.2.6)
  - __ Prerequisites
  - __ Command line options
- __ Summary
  - Functions
- __ Functions
- run(argv)

__

Search documentation of ash_state_machine __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_state_machine.generate_flow_charts (ash_state_machine v0.2.6)

Generates a Mermaid Flow Chart for each [`Ash.Resource`](3.4.1/Ash.Resource.html) with the [`AshStateMachine`](external_link) extension alongside the resource.

##  __ Prerequisites

This mix task requires the Mermaid CLI to be installed on your system.

See <https://github.com/mermaid-js/mermaid-cli>

##  __ Command line options

  * `--type` \- generates a given type. Valid values are `"state_diagram"` and `"flow_chart"`. Defaults to `"state_diagram"`.
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

Callback implementation for [`Mix.Task.run/1`](external_link).

#  __ Functions

__

# run(argv)

[ __](external_link)

Callback implementation for [`Mix.Task.run/1`](external_link).
