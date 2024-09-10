# Spark.Options.Validator — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Options.Validator (spark v2.2.24)
  - __ Upgrading from options lists
  - __ Example

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Options.Validator (spark v2.2.24)

Defines a validator module for an option schema.

Validators create structs with keys for each option in their schema, and an optimized `validate`, and `validate!` function on that struct.

##  __ Upgrading from options lists

You can pass the option `define_deprecated_access?: true` to `use Spark.Options.Validator`, which will make it such that `options[:foo]` will still work, but will emit a deprecation warning. This cane help with smoother upgrades.

##  __ Example

Given a module like the following:
    
    
    defmodule MyOptions do
      use Spark.Options.Validator, schema: [
        foo: [
          type: :string,
          required: true
        ],
        bar: [
          type: :string
        ],
        baz: [
          type: :integer,
          default: 10
        ]
      ]
    end

You can use it like so:
    
    
    # validate options
    
    MyOptions.validate!(foo: "foo")
    # %MyOptions{foo: "foo", bar: nil, baz: 10}
    
    # retrieve original schema
    MyOptions.schema()
    # foo: [type: :string, required: true], bar: [type: :string], baz: [type: :integer, default: 10]
