# Modifying the Resolution — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) Modifying the Resolution

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) Modifying the Resolution

Using the `modify_resolution` option, you can alter the [`Absinthe.Resolution`](external_link).

`modify_resolution` is an MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. Must return a new [`Absinthe.Resolution`](external_link).

This can be used to implement things like setting cookies based on resource actions. A method of using resolution context for that is documented [in Absinthe.Plug](external_link)

> ###  __ as_mutation?
> 
> If you are modifying the context in a query, then you should also set `as_mutation?` to true and represent this in your graphql as a mutation. See `as_mutation?` for more.

[ ← Previous Page  GraphQL Query Generation  ](external_link)

[ Next Page →  Relay  ](external_link)
