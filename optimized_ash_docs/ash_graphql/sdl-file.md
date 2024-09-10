# Using the SDL File — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) Using the SDL File
  - __ Documentation
  - __ Code Generation
  - __ Validating Changes

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) Using the SDL File

By passing the `generate_sdl_file` to `use AshGraphql`, AshGraphql will generate a schema file when you run [`mix ash.codegen`](3.4.1/Mix.Tasks.Ash.Codegen.html). For example:
    
    
    use AshGraphql,
      domains: [Domain1, Domain2],
      generate_sdl_file: "priv/schema.graphql"

> ###  __ Ensure your schema is up to date, gitignored, or not generated
> 
> We suggest first adding `mix ash.codegen --check` to your CI/CD pipeline to ensure the schema is always up-to-date. Alternatively you can add the file to your `.gitignore`, or you can remove the `generate_sdl_file` option to skip generating the file.

With the `generate_sdl_file` option, calls to `mix ash.codegen <name>` will generate a `.graphql` file at the specified path.

Some things that you can use this SDL file for:

##  __ Documentation

The schema file itself represents your entire GraphQL API definition, and examining it can be very useful.

##  __ Code Generation

You can use tools like [GraphQL codegen](external_link) to generate a client for your GraphQL API.

##  __ Validating Changes

Use the SDL file to check for breaking changes in your schema, especially if you are exposing a public API. A plug and play github action for this can be found here: <https://the-guild.dev/graphql/inspector/docs/products/action>

[ ← Previous Page  Handling Errors  ](external_link)

[ Next Page →  Use Enums with GraphQL  ](external_link)
