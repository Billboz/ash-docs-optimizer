# mix ash_phoenix.gen.live — ash_phoenix v2.1.2

Project: ash_phoenix v2.1.2

## Table of Contents

- [ __ View Source ](external_link) mix ash_phoenix.gen.live (ash_phoenix v2.1.2)
  - __ Positional Arguments
  - __ Options
- __ Summary
  - Functions
- __ Functions
- run(argv)

__

Search documentation of ash_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_phoenix.gen.live (ash_phoenix v2.1.2)

Generates liveviews for a given domain and resource.

The domain and resource must already exist, this task does not define them.

##  __ Positional Arguments

  * `domain` \- The domain (e.g. "Shop").
  * `resource` \- The resource (e.g. "Product").



##  __ Options

  * `--resource-plural` \- The plural resource name (e.g. "products")



For example:
    
    
    mix ash_phoenix.gen.live ExistingDomainName ExistingResourceName
    

#  __ Summary

##  Functions

run(argv)

Callback implementation for [`Mix.Task.run/1`](external_link).

#  __ Functions

__ Link to this function

# run(argv)

[ __ View Source ](external_link)

Callback implementation for [`Mix.Task.run/1`](external_link).
