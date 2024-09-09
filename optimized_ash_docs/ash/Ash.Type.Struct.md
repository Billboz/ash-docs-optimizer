# Ash.Type.Struct — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type.Struct (ash v3.4.8)
  - __ Constraints
- __ Summary
  - Functions
- __ Functions
- field_types(value)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type.Struct (ash v3.4.8)

Represents a struct.

Use the `instance_of` constraint to specify that it must be an instance of a specific struct.

This cannot be loaded from a database unless the `instance_of` constraint is provided. If not, it can only be used to cast input, i.e for arguments.

##  __ Constraints

  * `:instance_of` ([`atom/0`](external_link)) - The module the struct should be an instance of

  * `:preserve_nil_values?` ([`boolean/0`](external_link)) - If set to true, when storing, nil values will be kept. Otherwise, nil values will be omitted. The default value is `false`.

  * `:fields` ([`keyword/0`](external_link)) - The types of the fields in the struct, and their constraints.  
For example: 
    
        fields:  [
      amount: [
        type: :integer,
        constraints: [
          max: 10
        ]
      ],
      currency: [
        type: :string,
        allow_nil?: false,
        constraints: [
          max_length: 3
        ]
      ]
    ]  

allow_nil? is true by default

    * `:type` (an [`Ash.Type`](external_link)) - Required.

    * `:allow_nil?` ([`boolean/0`](external_link)) - The default value is `true`.

    * `:constraints` ([`keyword/0`](external_link)) - The default value is `[]`.




#  __ Summary

##  Functions

field_types(value)

#  __ Functions

__ Link to this function

# field_types(value)

[ __ View Source ](external_link)
