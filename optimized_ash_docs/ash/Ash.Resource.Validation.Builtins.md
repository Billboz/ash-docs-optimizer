# Ash.Resource.Validation.Builtins — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Validation.Builtins (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- absent(attributes, opts \\\ [])
  - __ Options
- action_is(action)
  - __ Examples
- argument_does_not_equal(argument, value)
  - __ Examples
- argument_equals(argument, value)
  - __ Examples
- argument_in(argument, list)
  - __ Examples
- attribute_does_not_equal(attribute, value)
  - __ Examples
- attribute_equals(attribute, value)
  - __ Examples
- attribute_in(attribute, list)
  - __ Examples
- attributes_absent(attributes, opts \\\ [])
  - __ Options
- attributes_present(attributes, opts \\\ [])
  - __ Options
- changing(field)
  - __ Examples
- compare(attribute, opts \\\ [])
  - __ Options
  - __ Examples
- confirm(field, confirmation)
  - __ Examples
- match(attribute, match)
  - __ Examples
- negate(validation)
  - __ Examples
- numericality(attribute, opts \\\ [])
  - __ Options
  - __ Examples
- one_of(attribute, values)
  - __ Examples
- present(attributes, opts \\\ [])
  - __ Options
- string_length(attribute, opts \\\ [])
  - __ Options
  - __ Examples

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Validation.Builtins (ash v3.4.8)

Built in validations that are available to all resources

The functions in this module are imported by default in the validations section.

#  __ Summary

##  Functions

absent(attributes, opts \\\ [])

Validates the absence of a list of attributes or arguments.

action_is(action)

Validates that the action is a specific action. Primarily meant for use in `where`.

argument_does_not_equal(argument, value)

Validates that an argument is not being changed to a specific value, or does not equal the given value if it is not being changed.

argument_equals(argument, value)

Validates that an argument is being changed to a specific value, or equals the given value if it is not being changed.

argument_in(argument, list)

Validates that an argument is being changed to one of a set of specific values, or is in the the given list if it is not being changed.

attribute_does_not_equal(attribute, value)

Validates that an attribute is not being changed to a specific value, or does not equal the given value if it is not being changed.

attribute_equals(attribute, value)

Validates that an attribute is being changed to a specific value, or equals the given value if it is not being changed.

attribute_in(attribute, list)

Validates that an attribute is being changed to one of a set of specific values, or is in the the given list if it is not being changed.

attributes_absent(attributes, opts \\\ [])

Validates the absence of a list of attributes.

attributes_present(attributes, opts \\\ [])

Validates the presence of a list of attributes.

changing(field)

Validates that an attribute or relationship is being changed

compare(attribute, opts \\\ [])

Validates that an attribute or argument meets the given comparison criteria.

confirm(field, confirmation)

Validates that a field or argument matches another field or argument

match(attribute, match)

Validates that an attribute's value matches a given regex.

negate(validation)

Validates that other validation does not pass

numericality(attribute, opts \\\ [])

Validates that an attribute or argument meets the given comparison criteria.

one_of(attribute, values)

Validates that an attribute's value is in a given list

present(attributes, opts \\\ [])

Validates the presence of a list of attributes or arguments.

string_length(attribute, opts \\\ [])

Validates that an attribute on the original record meets the given length criteria

#  __ Functions

__ Link to this function

# absent(attributes, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec absent(attributes_or_arguments :: [atom](external_link)() | [[atom](external_link)()], opts :: [Keyword.t](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates the absence of a list of attributes or arguments.

If no options are provided, validates that they are all absent.

This works by changing your options and providing them to the `present` validation.

##  __ Options

  * `:at_least` ([`non_neg_integer/0`](external_link)) - At least this many must be absent. Defaults to the number of attributes provided

  * `:at_most` ([`non_neg_integer/0`](external_link)) - At most this many must be absent. Defaults to the number of attributes provided

  * `:exactly` ([`non_neg_integer/0`](external_link)) - Exactly this many must be absent




__ Link to this function

# action_is(action)

[ __ View Source ](external_link)
    
    
    @spec action_is(action :: [atom](external_link)()) :: [Ash.Resource.Validation.ref](external_link)()

Validates that the action is a specific action. Primarily meant for use in `where`.

##  __ Examples
    
    
    validate present(:foo), where: [action_is(:bar)]

__ Link to this function

# argument_does_not_equal(argument, value)

[ __ View Source ](external_link)
    
    
    @spec argument_does_not_equal(argument :: [atom](external_link)(), value :: [term](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates that an argument is not being changed to a specific value, or does not equal the given value if it is not being changed.

##  __ Examples
    
    
    validate argument_does_not_equal(:admin, true)
    
    # Or to only check for changing to a given value
    validate argument_does_not_equal(:admin, true), where: [changing(:admin)]

__ Link to this function

# argument_equals(argument, value)

[ __ View Source ](external_link)
    
    
    @spec argument_equals(argument :: [atom](external_link)(), value :: [term](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates that an argument is being changed to a specific value, or equals the given value if it is not being changed.

##  __ Examples
    
    
    validate argument_equals(:admin, true)
    
    # Or to only check for changing to a given value
    validate argument_equals(:admin, true), where: [changing(:admin)]

__ Link to this function

# argument_in(argument, list)

[ __ View Source ](external_link)
    
    
    @spec argument_in(argument :: [atom](external_link)(), list :: [[term](external_link)()]) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates that an argument is being changed to one of a set of specific values, or is in the the given list if it is not being changed.

##  __ Examples
    
    
    validate argument_in(:state, [1, 2, 3])
    
    # Or to only check for changing to a something in a given list
    validate argument_in(:state, [1, 2, 3]), where: [changing(:state)]

__ Link to this function

# attribute_does_not_equal(attribute, value)

[ __ View Source ](external_link)
    
    
    @spec attribute_does_not_equal(attribute :: [atom](external_link)(), value :: [term](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates that an attribute is not being changed to a specific value, or does not equal the given value if it is not being changed.

##  __ Examples
    
    
    validate attribute_does_not_equal(:admin, true)
    
    # Or to only check for changing to a given value
    validate attribute_does_not_equal(:admin, true), where: [changing(:admin)]

__ Link to this function

# attribute_equals(attribute, value)

[ __ View Source ](external_link)
    
    
    @spec attribute_equals(attribute :: [atom](external_link)(), value :: [term](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates that an attribute is being changed to a specific value, or equals the given value if it is not being changed.

##  __ Examples
    
    
    validate attribute_equals(:admin, true)
    
    # Or to only check for changing to a given value
    validate attribute_equals(:admin, true), where: [changing(:admin)]

__ Link to this function

# attribute_in(attribute, list)

[ __ View Source ](external_link)
    
    
    @spec attribute_in(attribute :: [atom](external_link)(), list :: [[term](external_link)()]) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates that an attribute is being changed to one of a set of specific values, or is in the the given list if it is not being changed.

##  __ Examples
    
    
    validate attribute_in(:state, [1, 2, 3])
    
    # Or to only check for changing to a something in a given list
    validate attribute_in(:state, [1, 2, 3]), where: [changing(:state)]

__ Link to this function

# attributes_absent(attributes, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec attributes_absent(attributes :: [atom](external_link)() | [[atom](external_link)()], opts :: [Keyword.t](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates the absence of a list of attributes.

If no options are provided, validates that they are all absent.

This works by changing your options and providing them to the `present` validation.

##  __ Options

  * `:at_least` ([`non_neg_integer/0`](external_link)) - At least this many must be absent. Defaults to the number of attributes provided

  * `:at_most` ([`non_neg_integer/0`](external_link)) - At most this many must be absent. Defaults to the number of attributes provided

  * `:exactly` ([`non_neg_integer/0`](external_link)) - Exactly this many must be absent




__ Link to this function

# attributes_present(attributes, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec attributes_present(attributes :: [atom](external_link)() | [[atom](external_link)()], opts :: [Keyword.t](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates the presence of a list of attributes.

If no options are provided, validates that they are all present.

##  __ Options

  * `:at_least` ([`non_neg_integer/0`](external_link)) - At least this many must be present. Defaults to the number of attributes provided

  * `:at_most` ([`non_neg_integer/0`](external_link)) - At most this many must be present. Defaults to the number of attributes provided

  * `:exactly` ([`non_neg_integer/0`](external_link)) - Exactly this many must be present




__ Link to this function

# changing(field)

[ __ View Source ](external_link)
    
    
    @spec changing(attribute :: [atom](external_link)()) :: [Ash.Resource.Validation.ref](external_link)()

Validates that an attribute or relationship is being changed

##  __ Examples
    
    
    validate changing(:first_name)
    validate changing(:comments)

__ Link to this function

# compare(attribute, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec compare(attribute :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates that an attribute or argument meets the given comparison criteria.

The values provided for each option may be a literal value, attribute, argument, or a zero argument function.

##  __ Options

  * `:greater_than` \- The value that the attribute should be greater than.

  * `:greater_than_or_equal_to` \- The value that the attribute should be greater than or equal to

  * `:less_than` \- The value that the attribute should be less than

  * `:less_than_or_equal_to` \- The value that the attribute should be less than or equal to




##  __ Examples
    
    
    validate compare(:age, greater_than_or_equal_to: 18),
      where: [attribute_equals(:show_adult_content, true)],
      message: "must be over %{greater_than_or_equal_to} to enable adult content."
    
    validate compare(:points, greater_than: 0, less_than_or_equal_to: 100)

__ Link to this function

# confirm(field, confirmation)

[ __ View Source ](external_link)
    
    
    @spec confirm(
      attribute_or_argument :: [atom](external_link)(),
      confirmation_attribute_or_argument :: [atom](external_link)()
    ) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates that a field or argument matches another field or argument

##  __ Examples
    
    
    validate confirm(:password, :password_confirmation)
    validate confirm(:email, :email_confirmation)

__ Link to this function

# match(attribute, match)

[ __ View Source ](external_link)
    
    
    @spec match(attribute :: [atom](external_link)(), match :: [Regex.t](external_link)()) :: [Ash.Resource.Validation.ref](external_link)()

Validates that an attribute's value matches a given regex.

[`String.match?/2`](external_link) is used to determine if the value matches.

##  __ Examples
    
    
    validate match(:slug, ~r/^[0-9a-z-_]+$/)

__ Link to this function

# negate(validation)

[ __ View Source ](external_link)
    
    
    @spec negate(validation :: [Ash.Resource.Validation.ref](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates that other validation does not pass

##  __ Examples
    
    
    validate negate(one_of(:status, [:closed, :finished]))

__ Link to this function

# numericality(attribute, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec numericality(attribute :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates that an attribute or argument meets the given comparison criteria.

The values provided for each option may be a literal value, attribute, argument, or a zero argument function.

##  __ Options

  * `:greater_than` \- The value that the attribute should be greater than.

  * `:greater_than_or_equal_to` \- The value that the attribute should be greater than or equal to

  * `:less_than` \- The value that the attribute should be less than

  * `:less_than_or_equal_to` \- The value that the attribute should be less than or equal to




##  __ Examples
    
    
    validate numericality(:age, greater_than_or_equal_to: 18),
      where: [attribute_equals(:show_adult_content, true)],
      message: "must be over %{greater_than_or_equal_to} to enable adult content."
    
    validate numericality(:points, greater_than: 0, less_than_or_equal_to: 100)

__ Link to this function

# one_of(attribute, values)

[ __ View Source ](external_link)
    
    
    @spec one_of(attribute :: [atom](external_link)(), [[any](external_link)()]) :: [Ash.Resource.Validation.ref](external_link)()

Validates that an attribute's value is in a given list

##  __ Examples
    
    
    validate one_of(:status, [:closed_won, :closed_lost])

__ Link to this function

# present(attributes, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec present(attributes_or_arguments :: [atom](external_link)() | [[atom](external_link)()], opts :: [Keyword.t](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates the presence of a list of attributes or arguments.

If no options are provided, validates that they are all present.

##  __ Options

  * `:at_least` ([`non_neg_integer/0`](external_link)) - At least this many must be present. Defaults to the number of attributes provided

  * `:at_most` ([`non_neg_integer/0`](external_link)) - At most this many must be present. Defaults to the number of attributes provided

  * `:exactly` ([`non_neg_integer/0`](external_link)) - Exactly this many must be present




__ Link to this function

# string_length(attribute, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec string_length(attribute :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) ::
      [Ash.Resource.Validation.ref](external_link)()

Validates that an attribute on the original record meets the given length criteria

##  __ Options

  * `:min` ([`non_neg_integer/0`](external_link)) - String must be this length at least

  * `:max` ([`non_neg_integer/0`](external_link)) - String must be this length at most

  * `:exact` ([`non_neg_integer/0`](external_link)) - String must be this length exactly




##  __ Examples
    
    
    validate string_length(:slug, exactly: 8)
    validate string_length(:password, min: 6)
    validate string_length(:secret, min: 4, max: 12)
