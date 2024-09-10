# Ash.Type.Union — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type.Union (ash v3.4.8)
  - __ Constraints

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type.Union (ash v3.4.8)

A union between multiple types, distinguished with a tag or by attempting to validate.

##  __ Constraints

  * `:storage` \- How the value will be stored when persisted.  
`:type_and_value` will store the type and value in a map like so `{type: :type_name, value: the_value}` `:map_with_tag` will store the value directly. This only works if all types have a `tag` and `tag_value` configured. Valid values are :type_and_value, :map_with_tag The default value is `:type_and_value`.

  * `:types` \- The types to be unioned, a map of an identifier for the enum value to its configuration.  
When using `tag` and `tag_value` we are referring to a map key that must equal a certain value in order for the value to be considered an instance of that type.  
For example: 
    
        types:  [
      int: [
        type: :integer,
        constraints: [
          max: 10
        ]
      ],
      object: [
        type: MyObjectType,
        # The default value is `true`
        # this passes the tag key/value to the nested type
        # when casting input
        cast_tag?: true,
        tag: :type,
        tag_value: "my_object"
      ],
      other_object: [
        type: MyOtherObjectType,
        cast_tag?: true,
        tag: :type,
        tag_value: "my_other_object"
      ],
      other_object_without_type: [
        type: MyOtherObjectTypeWithoutType,
        cast_tag?: false,
        tag: :type,
        tag_value: nil
      ]
    ]  

IMPORTANT:  
This is stored as a map under the hood. Filters over the data will need to take this into account.  
Additionally, if you are not using a tag, a value will be considered to be of the given type if it successfully casts. This means that, for example, if you try to cast `"10"` as a union of a string and an integer, it will end up as `"10"` because it is a string. If you put the integer type ahead of the string type, it will cast first and `10` will be the value.



