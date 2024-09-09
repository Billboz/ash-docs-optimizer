# AshAuthentication.Validations — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Validations (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- find_attribute(dsl_state, attribute_name)
- maybe_build_attribute(dsl_state, attribute_name, builder)
- persisted_option(dsl_state, option)
- validate_behaviour(module, behaviour)
- validate_extension(dsl_state, extension)
- validate_field_in_values(map, field, values)
- validate_field_with(map, field, predicate, message \\\ nil)
- validate_secret(strategy, option, allowed_extras \\\ [])
- validate_token_generation_enabled(dsl_state, message)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Validations (ash_authentication v4.0.4)

Common validations shared by several transformers.

#  __ Summary

##  Functions

find_attribute(dsl_state, attribute_name)

Find and return a named attribute in the DSL state.

maybe_build_attribute(dsl_state, attribute_name, builder)

Build an attribute if not present.

persisted_option(dsl_state, option)

Find and return a persisted option in the DSL state.

validate_behaviour(module, behaviour)

Ensure that the named module implements a specific behaviour.

validate_extension(dsl_state, extension)

Validates that `extension` is present on the resource.

validate_field_in_values(map, field, values)

Given a map validate that the provided field is one of the values provided.

validate_field_with(map, field, predicate, message \\\ nil)

Given a map, validate that the provided field predicate returns true for the value.

validate_secret(strategy, option, allowed_extras \\\ [])

Validate that a "secret" field is configured correctly.

validate_token_generation_enabled(dsl_state, message)

Ensure that token generation is enabled for the resource.

#  __ Functions

__ Link to this function

# find_attribute(dsl_state, attribute_name)

[ __ View Source ](external_link)
    
    
    @spec find_attribute([Spark.Dsl.t](external_link)(), [atom](external_link)()) ::
      {:ok, [Ash.Resource.Attribute.t](3.4.1/Ash.Resource.Attribute.html#t:t/0)()} | {:error, [Exception.t](external_link)()}

Find and return a named attribute in the DSL state.

__ Link to this function

# maybe_build_attribute(dsl_state, attribute_name, builder)

[ __ View Source ](external_link)
    
    
    @spec maybe_build_attribute([Spark.Dsl.t](external_link)(), [atom](external_link)(), ([Spark.Dsl.t](external_link)() ->
                                                    {:ok,
                                                     [Ash.Resource.Attribute.t](3.4.1/Ash.Resource.Attribute.html#t:t/0)()})) ::
      {:ok, [Spark.Dsl.t](external_link)()}

Build an attribute if not present.

__ Link to this function

# persisted_option(dsl_state, option)

[ __ View Source ](external_link)
    
    
    @spec persisted_option([Spark.Dsl.t](external_link)(), [atom](external_link)()) ::
      {:ok, [any](external_link)()} | {:error, {:unknown_persisted, [atom](external_link)()}}

Find and return a persisted option in the DSL state.

__ Link to this function

# validate_behaviour(module, behaviour)

[ __ View Source ](external_link)
    
    
    @spec validate_behaviour([module](external_link)(), [module](external_link)()) :: :ok | {:error, [Exception.t](external_link)()}

Ensure that the named module implements a specific behaviour.

__ Link to this function

# validate_extension(dsl_state, extension)

[ __ View Source ](external_link)
    
    
    @spec validate_extension([Spark.Dsl.t](external_link)(), [module](external_link)()) :: :ok | {:error, [Exception.t](external_link)()}

Validates that `extension` is present on the resource.

__ Link to this function

# validate_field_in_values(map, field, values)

[ __ View Source ](external_link)
    
    
    @spec validate_field_in_values([map](external_link)(), [any](external_link)(), [[any](external_link)()]) :: :ok | {:error, [String.t](external_link)()}

Given a map validate that the provided field is one of the values provided.

__ Link to this function

# validate_field_with(map, field, predicate, message \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec validate_field_with([map](external_link)(), field, ([any](external_link)() -> [boolean](external_link)()), message) ::
      :ok | {:error, message}
    when field: [any](external_link)(), message: [any](external_link)()

Given a map, validate that the provided field predicate returns true for the value.

__ Link to this function

# validate_secret(strategy, option, allowed_extras \\\ [])

[ __ View Source ](external_link)

Validate that a "secret" field is configured correctly.

__ Link to this function

# validate_token_generation_enabled(dsl_state, message)

[ __ View Source ](external_link)
    
    
    @spec validate_token_generation_enabled([Spark.Dsl.t](external_link)(), [binary](external_link)()) ::
      :ok | {:error, [Exception.t](external_link)()}

Ensure that token generation is enabled for the resource.
