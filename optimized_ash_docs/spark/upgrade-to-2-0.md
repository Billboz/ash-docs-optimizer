# Upgrading to 2.0 — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Upgrading to 2.0

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Upgrading to 2.0

A 2.0 release was published with a minor breaking change. We decided to vendor [`NimbleOptions`](external_link) (copy their code into our codebase) so that we could make some necessary modifications to it. What this means for users is primarily that:

  1. we no longer depend on [`NimbleOptions`](external_link)
  2. if you are matching on [`NimbleOptions.ValidationError`](external_link) you will need to update your code to match on [`Spark.Options.ValidationError`](external_link)



[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Writing Extensions  ](external_link)
