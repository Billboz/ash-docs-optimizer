# Spark.Formatter — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Formatter (spark v2.2.24)
- Plugin
- Section Order
- __ Summary
  - Functions
- __ Functions
- features(opts)
- format(contents, opts)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Formatter (spark v2.2.24)

Formats Spark modules.

Currently, it is very simple, and will only reorder the outermost sections according to some rules.

# Plugin

Include the plugin into your `.formatter.exs` like so `plugins: [Spark.Formatter]`.

If no configuration is provided, it will sort all top level DSL sections _alphabetically_.

# Section Order

To provide a custom section order, add configuration to your app, for example:
    
    
    config :spark, :formatter,
      remove_parens?: true,
      "Ash.Resource": [
        section_order: [
          :resource,
          :postgres,
          :attributes,
          :relationships,
          :aggregates,
          :calculations
        ]
      ],
      "MyApp.Resource": [
        # Use this if you use a module that is not the spark DSL itself.
        # For example, you might have a "base" that you use instead that sets some simple defaults.
    
        # This tells us what the actual thing is so we know what extensions are included automatically.
        type: Ash.Resource,
    
        # Tell us what extensions might be added under the hood
        extensions: [MyApp.ResourceExtension],
        section_order: [...]
      ]

Any sections found that aren't in that list will be left in the order that they were in, the sections in the list will be sorted "around" those sections. E.g the following list: `[:code_interface, :attributes]` can be interpreted as "ensure that code_interface comes before attributes, and don't change the rest".

#  __ Summary

##  Functions

features(opts)

Callback implementation for [`Mix.Tasks.Format.features/1`](external_link).

format(contents, opts)

Callback implementation for [`Mix.Tasks.Format.format/2`](external_link).

#  __ Functions

__ Link to this function

# features(opts)

[ __ View Source ](external_link)

Callback implementation for [`Mix.Tasks.Format.features/1`](external_link).

__ Link to this function

# format(contents, opts)

[ __ View Source ](external_link)

Callback implementation for [`Mix.Tasks.Format.format/2`](external_link).
