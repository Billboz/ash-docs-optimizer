# mix ash_phoenix.gen.html — ash_phoenix v2.1.2

Project: ash_phoenix v2.1.2

## Table of Contents

- [ __ View Source ](external_link) mix ash_phoenix.gen.html (ash_phoenix v2.1.2)
  - __ Positional Arguments
  - __ Options
- __ Summary
  - Functions
- __ Functions
- run(args)

__

Search documentation of ash_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_phoenix.gen.html (ash_phoenix v2.1.2)

This task renders .ex and .heex templates and copies them to specified directories.

##  __ Positional Arguments

  * `domain` \- The domain (e.g. "Shop").
  * `resource` \- The resource (e.g. "Product").



##  __ Options

  * `--resource-plural` \- The plural resource name (e.g. "products")



mix ash_phoenix.gen.html MyApp.Shop MyApp.Shop.Product --plural-name products

#  __ Summary

##  Functions

run(args)

Callback implementation for [`Mix.Task.run/1`](external_link).

#  __ Functions

__ Link to this function

# run(args)

[ __ View Source ](external_link)

Callback implementation for [`Mix.Task.run/1`](external_link).
