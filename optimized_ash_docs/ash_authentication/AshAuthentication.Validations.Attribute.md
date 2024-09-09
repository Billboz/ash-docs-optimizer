# AshAuthentication.Validations.Attribute — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Validations.Attribute (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- validate_attribute_option(attribute, resource, field, values)
- validate_attribute_unique_constraint(dsl_state, fields, resource)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Validations.Attribute (ash_authentication v4.0.4)

Validation helpers for Resource attributes.

#  __ Summary

##  Functions

validate_attribute_option(attribute, resource, field, values)

Validate that an option is set correctly on an attribute

validate_attribute_unique_constraint(dsl_state, fields, resource)

Validate than an attribute has a unique identity applied.

#  __ Functions

__ Link to this function

# validate_attribute_option(attribute, resource, field, values)

[ __ View Source ](external_link)
    
    
    @spec validate_attribute_option([Ash.Resource.Attribute.t](3.4.1/Ash.Resource.Attribute.html#t:t/0)(), [module](external_link)(), [atom](external_link)(), [[any](external_link)()]) ::
      :ok | {:error, [Exception.t](external_link)()}

Validate that an option is set correctly on an attribute

__ Link to this function

# validate_attribute_unique_constraint(dsl_state, fields, resource)

[ __ View Source ](external_link)
    
    
    @spec validate_attribute_unique_constraint([map](external_link)(), [[atom](external_link)()], [module](external_link)()) ::
      :ok | {:error, [Exception.t](external_link)()}

Validate than an attribute has a unique identity applied.
