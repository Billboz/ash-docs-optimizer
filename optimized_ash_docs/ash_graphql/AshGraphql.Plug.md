# AshGraphql.Plug — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) AshGraphql.Plug (ash_graphql v1.3.3)
- __ Summary
  - Functions
- __ Functions
- call(conn, opts)
- init(opts)

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) AshGraphql.Plug (ash_graphql v1.3.3)

Automatically set up the GraphQL `actor` and `tenant`.

Adding this plug to your pipeline will automatically set the `actor` and `tenant` if they were previously put there by [`Ash.PlugHelpers.set_actor/2`](3.4.1/Ash.PlugHelpers.html#set_actor/2) or [`Ash.PlugHelpers.set_tenant/2`](3.4.1/Ash.PlugHelpers.html#set_tenant/2).

#  __ Summary

##  Functions

call(conn, opts)

Callback implementation for [`Plug.call/2`](external_link).

init(opts)

Callback implementation for [`Plug.init/1`](external_link).

#  __ Functions

__ Link to this function

# call(conn, opts)

[ __ View Source ](external_link)

Callback implementation for [`Plug.call/2`](external_link).

__ Link to this function

# init(opts)

[ __ View Source ](external_link)

Callback implementation for [`Plug.init/1`](external_link).
