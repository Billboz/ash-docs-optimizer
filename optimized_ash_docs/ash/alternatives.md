# Alternatives — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Alternatives
  - __ Application Frameworks
  - __ Application Design
  - __ Building APIs
  - __ Working with Data
  - __ Authentication
  - __ Authorization
  - __ Validation

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Alternatives

There aren't really any alternatives to Ash that we are aware of that do all of the same things, but there are many different packages out there that do some of the things that Ash does.

This is a living document, and is not comprehensive. We are not _vouching_ for any of these packages, but rather listing them here for your convenience to investigate on your own.

Want to add or edit this list? Open a [pull request](external_link) Want a more comprehensive list? Check out the [Awesome Elixir](external_link).

##  __ Application Frameworks

These frameworks have similar overarching goals of helping you build your application layer.

  * [Commanded](external_link) \- An event sourced application framework.
  * [Sleeky](external_link) \- Billed as a lightweight alternative to Ash. Inspired by Ash, but more tightly built on top of ecto.



##  __ Application Design

  * [Boundary](external_link) \- A library for defining boundaries in your application.
  * [Phoenix Contexts](external_link) \- Phoenix ships with a concept called "contexts", which provide some generators with application design guidance.



##  __ Building APIs

  * [Absinthe](external_link) \- A GraphQL toolkit for Elixir. This is what `AshGraphql` uses under the hood, but you can also use Absinthe directly.
  * [Phoenix](external_link) \- Phoenix is a web framework for Elixir. It is not necessarily an API framework, but has all the tools you need to build APIs by hand.
  * [JSONAPI Elixir](external_link) \- A library for building JSONAPI compliant APIs in Elixir on top of Ecto.
  * [Open API Spex](external_link) \- A library for generating OpenAPI (Swagger) documentation for your API. We generate these for you in AshJsonApi, but you can use this library to build open api specifications of your hand-written API



##  __ Working with Data

  * [Ecto](external_link) \- Ecto is a database wrapper and query generator for Elixir. In many cases, Ash uses Ecto under the hood, but it is also available to build on top of directly.
  * [Flop](external_link) \- A library designed to easily apply filtering, ordering, and pagination to Ecto queries.



##  __ Authentication

  * [mix phx.gen.auth](external_link) \- A mix task that generates authentication for a Phoenix application. Some folks prefer to use this over `AshAuthentication` even if they are using Ash.
  * [Assent](external_link) \- Multi-provider authentication framework.



##  __ Authorization

  * [Bodyguard](external_link) \- A phoenix-context-based policy authorization framework.



##  __ Validation

  * [Ecto](external_link) \- Ecto can be used to validate data at the edge, using things like schema-less changesets.
  * [Drops](external_link) \- a collection of small modules that provide useful extensions and functions that can be used to work with data effectively.
  * [GuardedStruct](external_link) \- validation, sanitization, and construction of structs, supporting nested structs.



[ ← Previous Page  Contributing to Ash  ](external_link)

[ Next Page →  Changelog  ](external_link)
