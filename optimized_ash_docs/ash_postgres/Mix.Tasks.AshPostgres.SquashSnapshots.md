# mix ash_postgres.squash_snapshots — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) mix ash_postgres.squash_snapshots (ash_postgres v2.3.1)
  - __ Examples
  - __ Command line options
- __ Summary
  - Functions
- __ Functions
- run(args)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_postgres.squash_snapshots (ash_postgres v2.3.1)

Cleans snapshots folder, leaving only one snapshot per resource.

##  __ Examples
    
    
    mix ash_postgres.squash_snapshots
    mix ash_postgres.squash_snapshots --check --quiet
    mix ash_postgres.squash_snapshots --into zero
    mix ash_postgres.squash_snapshots --dry-run

##  __ Command line options

  * `--into` \- `last`, `first` or `zero`. The default is `last`. Determines which name to use for a remaining snapshot. `last` keeps the name of the last snapshot, `first` renames it to the previously first, `zero` sets name with fourteen zeros.
  * `--snapshot-path` \- a custom path to stored snapshots. The default is "priv/resource_snapshots".
  * `--quiet` \- no messages will not be printed.
  * `--dry-run` \- no files are touched, instead prints folders that have snapshots to squash.
  * `--check` \- no files are touched, instead returns an exit(1) code if there are snapshots to squash.



#  __ Summary

##  Functions

run(args)

Callback implementation for [`Mix.Task.run/1`](external_link).

#  __ Functions

__

# run(args)

[ __](external_link)

Callback implementation for [`Mix.Task.run/1`](external_link).
