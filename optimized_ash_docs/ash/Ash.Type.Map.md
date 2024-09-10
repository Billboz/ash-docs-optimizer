# Ash.Type.Map — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type.Map (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- field_types(value)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type.Map (ash v3.4.8)

Represents a map stored in the database.

In postgres, for example, this represents binary encoded json

A builtin type that can be referenced via `:map`

  * `:fields` ([`keyword/0`](external_link)) - The types of the fields in the map, and their constraints.  
If constraints are specified, only those fields will be in the casted map.  
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