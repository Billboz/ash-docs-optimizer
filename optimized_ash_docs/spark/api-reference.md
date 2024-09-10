# API Reference — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) API Reference spark v2.2.24
  - __ Modules
  - __ Mix Tasks

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) API Reference spark v2.2.24

##  __ Modules

[Spark](external_link)

Documentation for [`Spark`](external_link).

[Spark.CheatSheet](external_link)

Tools to generate cheat sheets for spark DSLs

[Spark.CodeHelpers](external_link)

Helpers for meta programming around code and code snippets

[Spark.Dsl](external_link)

The primary entry point for adding a DSL to a module.

[Spark.Dsl.Builder](external_link)

Utilities for building DSL objects programatically, generally used in transformers.

[Spark.Dsl.Entity](external_link)

Declares a DSL entity.

[Spark.Dsl.Extension](external_link)

An extension to the Spark DSL.

[Spark.Dsl.Fragment](external_link)

Allows splitting up a DSL into multiple modules, potentially organizing large DSLs

[Spark.Dsl.Patch.AddEntity](external_link)

Supply this when defining an extension to add entity builders to another extension's section.

[Spark.Dsl.Section](external_link)

Declares a DSL section.

[Spark.Dsl.Transformer](external_link)

A transformer manipulates and/or validates the entire DSL state of a resource.

[Spark.Dsl.Verifier](external_link)

A verifier gets the dsl state and can return `:ok` or `:error`.

[Spark.Dsl.Verifiers.VerifyEntityUniqueness](external_link)

Verifies that each entity that has an identifier is unique at each path.

[Spark.Error.DslError](external_link)

Used when a DSL is incorrectly configured.

[Spark.Formatter](external_link)

Formats Spark modules.

[Spark.Igniter](external_link)

Helpers for patching Spark DSLs.

[Spark.InfoGenerator](external_link)

Used to dynamically generate configuration functions for Spark extensions based on their DSL.

[Spark.Options](external_link)

Provides a standard API to handle keyword-list-based options.

[Spark.Options.Helpers](external_link)

Helpers for use with spark options

[Spark.Options.ValidationError](external_link)

An error that is returned (or raised) when options are invalid.

[Spark.Options.Validator](external_link)

Defines a validator module for an option schema.

[Spark.OptionsHelpers](external_link)

Helpers for working with options lists.

##  __ Mix Tasks

[mix spark.cheat_sheets](external_link)

Creates cheat sheets for each Extension provided. Useful for CI with `--check` flag.

[mix spark.cheat_sheets_in_search](external_link)

Includes generated cheat sheets in the search bar

[mix spark.formatter](external_link)

Manages a variable called `spark_locals_without_parens` in the .formatter.exs from a list of DSL extensions.

[mix spark.install](external_link)

Installs spark by adding the [`Spark.Formatter`](external_link) plugin, and providing a basic configuration for it in `config.exs`.

[mix spark.replace_doc_links](external_link)

Replaces any documentation links with text appropriate for hex docs.

[ Next Page →  Upgrading to 2.0  ](external_link)
