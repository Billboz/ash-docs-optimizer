# Ash.Resource.Info — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Info (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- action(resource, name, type \\\ nil)
- action_input?(resource, action, input)
- action_inputs(resource, action)
- actions(resource)
- aggregate(resource, name)
- aggregate_type(resource, aggregate)
- aggregates(resource)
- always_selected_attribute_names(resource)
- attribute(resource, name)
- attribute_names(resource)
- attributes(resource)
- attributes_to_require(resource)
- attributes_to_require(resource, action_name)
- authorizers(resource)
- base_filter(resource)
- calculation(resource, name)
- calculation_interface(resource, name)
- calculation_interfaces(resource)
- calculations(resource)
- changes(resource)
- changes(resource, type)
- code_interface_domain(resource)
- data_layer(resource)
- default_actions(resource)
- default_context(resource)
- define_interface?(resource)
- description(resource)
- domain(resource)
- embedded?(resource)
- field(resource, name)
- fields(resource, types \\\ [:attributes, :aggregates, :calculations, :relationships])
- identities(resource)
- identity(resource, name)
- interface(resource, name)
- interfaces(resource)
- lazy_matching_default_attributes(resource, atom)
- lazy_non_matching_default_attributes(resource, atom)
- multitenancy_attribute(resource)
- multitenancy_global?(resource)
- multitenancy_parse_attribute(resource)
- multitenancy_strategy(resource)
- multitenancy_template(resource)
- notifiers(resource)
- plural_name(resource)
- preparations(resource)
- primary_action(resource, type)
- primary_action!(resource, type)
- primary_key(resource)
- primary_key_simple_equality?(resource)
- public_aggregate(resource, name)
- public_aggregates(resource)
- public_attribute(resource, name)
- public_attributes(resource)
- public_calculation(resource, name)
- public_calculations(resource)
- public_field(resource, name)
- public_fields(resource)
- public_relationship(resource, relationship_name)
- public_relationships(resource)
- related(resource, relationship)
- relationship(resource, relationship_name)
- relationships(resource)
- required_belongs_to_relationships(resource)
- resource?(module)
- reverse_relationship(resource, path, acc \\\ [])
- short_name(resource)
- simple_notifiers(resource)
- sortable?(resource, name, opts \\\ [])
- static_default_attributes(resource, atom)
- trace_name(resource)
- unique_keys(resource)
- validations(resource)
- validations(resource, type)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Info (ash v3.4.8)

Introspection for resources

#  __ Summary

##  Functions

action(resource, name, type \\\ nil)

Returns the action with the matching name and type on the resource

action_input?(resource, action, input)

Returns true or false if the input is accepted by the action, as an argument or an attribute

action_inputs(resource, action)

Returns the list of possible accepted keys by an action

actions(resource)

Returns all actions of a resource

aggregate(resource, name)

Get an aggregate by name

aggregate_type(resource, aggregate)

Gets the type of an aggregate for a given resource.

aggregates(resource)

Returns all aggregates of a resource

always_selected_attribute_names(resource)

attribute(resource, name)

Get an attribute name from the resource

attribute_names(resource)

attributes(resource)

Returns all attributes of a resource

attributes_to_require(resource)

attributes_to_require(resource, action_name)

authorizers(resource)

A list of authorizers to be used when accessing

base_filter(resource)

The base filter of the resource

calculation(resource, name)

Get a calculation by name

calculation_interface(resource, name)

Get an calculation interface by name from the resource

calculation_interfaces(resource)

The list of code interface calculation definitions.

calculations(resource)

Returns all calculations of a resource

changes(resource)

A list of all changes for the resource

changes(resource, type)

A list of all changes for the resource for a given action type

code_interface_domain(resource)

The domain to define the interface for, when defining it in the resource

data_layer(resource)

The data layer of the resource, or nil if it does not have one

default_actions(resource)

Returns the configured default actions

default_context(resource)

The default context of the resource

define_interface?(resource)

Whether or not to define the interface on the resource

description(resource)

The description of the resource

domain(resource)

Returns the statically configured domain for the resource.

embedded?(resource)

Whether or not the resource is an embedded resource

field(resource, name)

Get a field from a resource by name

fields(resource, types \\\ [:attributes, :aggregates, :calculations, :relationships])

Returns all attributes, aggregates, calculations and relationships of a resource

identities(resource)

A list of identities for the resource

identity(resource, name)

Get an identity by name from the resource

interface(resource, name)

Get an interface by name from the resource

interfaces(resource)

The list of code interface definitions.

lazy_matching_default_attributes(resource, atom)

Returns all attributes of a resource with lazy matching defaults

lazy_non_matching_default_attributes(resource, atom)

Returns all attributes of a resource with lazy non-matching-defaults

multitenancy_attribute(resource)

The multitenancy attribute for a resource

multitenancy_global?(resource)

The MFA to parse the tenant from the attribute

multitenancy_parse_attribute(resource)

The function to parse the tenant from the attribute

multitenancy_strategy(resource)

The multitenancy strategy for a resource

multitenancy_template(resource)

The template for creating the tenant name

notifiers(resource)

A list of notifiers to be used when accessing

plural_name(resource)

The plural_name of the resource

preparations(resource)

primary_action(resource, type)

Returns the primary action of a given type

primary_action!(resource, type)

Returns the primary action of the given type

primary_key(resource)

A list of field names corresponding to the primary key

primary_key_simple_equality?(resource)

Whether or not all primary key attributes can be compared with simple_equality

public_aggregate(resource, name)

Get an aggregate by name

public_aggregates(resource)

Returns all public aggregates of a resource

public_attribute(resource, name)

Get a public attribute name from the resource

public_attributes(resource)

Returns all public attributes of a resource

public_calculation(resource, name)

Get a public calculation by name

public_calculations(resource)

Returns all public calculations of a resource

public_field(resource, name)

Get a public field from a resource by name

public_fields(resource)

Returns all public attributes, aggregates, calculations and relationships of a resource

public_relationship(resource, relationship_name)

Get a public relationship by name or path

public_relationships(resource)

Returns all public relationships of a resource

related(resource, relationship)

relationship(resource, relationship_name)

Get a relationship by name or path

relationships(resource)

Returns all relationships of a resource

required_belongs_to_relationships(resource)

The required belongs_to relationships

resource?(module)

Whether or not a given module is a resource module

reverse_relationship(resource, path, acc \\\ [])

Retrieves a relationship path from the resource related by path, to the provided resource.

short_name(resource)

The short_name of the resource

simple_notifiers(resource)

A list of simple notifiers (require no DSL, used to avoid compile time dependencies)

sortable?(resource, name, opts \\\ [])

Determine if a field is sortable by name

static_default_attributes(resource, atom)

Returns all attributes of a resource with static defaults

trace_name(resource)

The trace_name of the resource

unique_keys(resource)

A list of unique keys and information for a resource

validations(resource)

A list of all validations for the resource

validations(resource, type)

A list of all validations for the resource for a given action type

#  __ Functions

__ Link to this function

# action(resource, name, type \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec action(
      [Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(),
      [atom](external_link)(),
      [Ash.Resource.Actions.action_type](external_link)() | nil
    ) ::
      [Ash.Resource.Actions.action](external_link)() | nil

Returns the action with the matching name and type on the resource

__ Link to this function

# action_input?(resource, action, input)

[ __ View Source ](external_link)
    
    
    @spec action_input?([Ash.Resource.t](external_link)(), action :: [atom](external_link)(), input :: [atom](external_link)() | [String.t](external_link)()) ::
      [boolean](external_link)()

Returns true or false if the input is accepted by the action, as an argument or an attribute

__ Link to this function

# action_inputs(resource, action)

[ __ View Source ](external_link)
    
    
    @spec action_inputs([Ash.Resource.t](external_link)(), action :: [atom](external_link)()) :: [MapSet.t](external_link)()

Returns the list of possible accepted keys by an action

__ Link to this function

# actions(resource)

[ __ View Source ](external_link)
    
    
    @spec actions([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[Ash.Resource.Actions.action](external_link)()]

Returns all actions of a resource

__ Link to this function

# aggregate(resource, name)

[ __ View Source ](external_link)
    
    
    @spec aggregate([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [atom](external_link)() | [String.t](external_link)()) ::
      [Ash.Resource.Aggregate.t](external_link)() | nil

Get an aggregate by name

__ Link to this function

# aggregate_type(resource, aggregate)

[ __ View Source ](external_link)
    
    
    @spec aggregate_type(
      [Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(),
      [Ash.Resource.Aggregate.t](external_link)() | [atom](external_link)()
    ) ::
      {:ok, [Ash.Type.t](external_link)()} | {:error, [String.t](external_link)()}

Gets the type of an aggregate for a given resource.

__ Link to this function

# aggregates(resource)

[ __ View Source ](external_link)
    
    
    @spec aggregates([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[Ash.Resource.Aggregate.t](external_link)()]

Returns all aggregates of a resource

__ Link to this function

# always_selected_attribute_names(resource)

[ __ View Source ](external_link)
    
    
    @spec always_selected_attribute_names([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [MapSet.t](external_link)()

__ Link to this function

# attribute(resource, name)

[ __ View Source ](external_link)
    
    
    @spec attribute([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [String.t](external_link)() | [atom](external_link)()) ::
      [Ash.Resource.Attribute.t](external_link)() | nil

Get an attribute name from the resource

__ Link to this function

# attribute_names(resource)

[ __ View Source ](external_link)
    
    
    @spec attribute_names([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [MapSet.t](external_link)()

__ Link to this function

# attributes(resource)

[ __ View Source ](external_link)
    
    
    @spec attributes([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[Ash.Resource.Attribute.t](external_link)()]

Returns all attributes of a resource

__ Link to this function

# attributes_to_require(resource)

[ __ View Source ](external_link)

__ Link to this function

# attributes_to_require(resource, action_name)

[ __ View Source ](external_link)

__ Link to this function

# authorizers(resource)

[ __ View Source ](external_link)
    
    
    @spec authorizers([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[module](external_link)()]

A list of authorizers to be used when accessing

__ Link to this function

# base_filter(resource)

[ __ View Source ](external_link)
    
    
    @spec base_filter([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [term](external_link)()

The base filter of the resource

__ Link to this function

# calculation(resource, name)

[ __ View Source ](external_link)
    
    
    @spec calculation([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [atom](external_link)() | [String.t](external_link)()) ::
      [Ash.Resource.Calculation.t](external_link)() | nil

Get a calculation by name

__ Link to this function

# calculation_interface(resource, name)

[ __ View Source ](external_link)
    
    
    @spec calculation_interface([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [atom](external_link)()) ::
      [Ash.Resource.CalculationInterface.t](external_link)() | nil

Get an calculation interface by name from the resource

__ Link to this function

# calculation_interfaces(resource)

[ __ View Source ](external_link)
    
    
    @spec calculation_interfaces([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [
      [Ash.Resource.CalculationInterface.t](external_link)()
    ]

The list of code interface calculation definitions.

__ Link to this function

# calculations(resource)

[ __ View Source ](external_link)
    
    
    @spec calculations([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[Ash.Resource.Calculation.t](external_link)()]

Returns all calculations of a resource

__ Link to this function

# changes(resource)

[ __ View Source ](external_link)
    
    
    @spec changes([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [
      [Ash.Resource.Validation.t](external_link)() | [Ash.Resource.Change.t](external_link)()
    ]

A list of all changes for the resource

__ Link to this function

# changes(resource, type)

[ __ View Source ](external_link)
    
    
    @spec changes([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), :create | :update | :destroy) :: [
      [Ash.Resource.Validation.t](external_link)() | [Ash.Resource.Change.t](external_link)()
    ]

A list of all changes for the resource for a given action type

__ Link to this function

# code_interface_domain(resource)

[ __ View Source ](external_link)
    
    
    @spec code_interface_domain([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [atom](external_link)() | nil

The domain to define the interface for, when defining it in the resource

__ Link to this function

# data_layer(resource)

[ __ View Source ](external_link)
    
    
    @spec data_layer([Ash.Resource.t](external_link)()) :: [Ash.DataLayer.t](external_link)() | nil

The data layer of the resource, or nil if it does not have one

__ Link to this function

# default_actions(resource)

[ __ View Source ](external_link)
    
    
    @spec default_actions([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [
      :create | :read | :update | :destroy
    ]

Returns the configured default actions

__ Link to this function

# default_context(resource)

[ __ View Source ](external_link)
    
    
    @spec default_context([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [term](external_link)()

The default context of the resource

__ Link to this function

# define_interface?(resource)

[ __ View Source ](external_link)
    
    
    @spec define_interface?([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [boolean](external_link)()

Whether or not to define the interface on the resource

__ Link to this function

# description(resource)

[ __ View Source ](external_link)
    
    
    @spec description([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [String.t](external_link)() | nil

The description of the resource

__ Link to this function

# domain(resource)

[ __ View Source ](external_link)

Returns the statically configured domain for the resource.

__ Link to this function

# embedded?(resource)

[ __ View Source ](external_link)
    
    
    @spec embedded?([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [boolean](external_link)()

Whether or not the resource is an embedded resource

__ Link to this function

# field(resource, name)

[ __ View Source ](external_link)
    
    
    @spec field([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [String.t](external_link)() | [atom](external_link)()) ::
      [Ash.Resource.Attribute.t](external_link)()
      | [Ash.Resource.Aggregate.t](external_link)()
      | [Ash.Resource.Calculation.t](external_link)()
      | [Ash.Resource.Relationships.relationship](external_link)()
      | nil

Get a field from a resource by name

__ Link to this function

# fields(resource, types \\\ [:attributes, :aggregates, :calculations, :relationships])

[ __ View Source ](external_link)
    
    
    @spec fields(
      [Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(),
      types :: [:attributes | :aggregates | :calculations | :relationships]
    ) :: [
      [Ash.Resource.Attribute.t](external_link)()
      | [Ash.Resource.Aggregate.t](external_link)()
      | [Ash.Resource.Calculation.t](external_link)()
      | [Ash.Resource.Relationships.relationship](external_link)()
    ]

Returns all attributes, aggregates, calculations and relationships of a resource

__ Link to this function

# identities(resource)

[ __ View Source ](external_link)
    
    
    @spec identities([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[Ash.Resource.Identity.t](external_link)()]

A list of identities for the resource

__ Link to this function

# identity(resource, name)

[ __ View Source ](external_link)
    
    
    @spec identity([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [atom](external_link)()) ::
      [Ash.Resource.Identity.t](external_link)() | nil

Get an identity by name from the resource

__ Link to this function

# interface(resource, name)

[ __ View Source ](external_link)
    
    
    @spec interface([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [atom](external_link)()) ::
      [Ash.Resource.Interface.t](external_link)() | nil

Get an interface by name from the resource

__ Link to this function

# interfaces(resource)

[ __ View Source ](external_link)
    
    
    @spec interfaces([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[Ash.Resource.Interface.t](external_link)()]

The list of code interface definitions.

__ Link to this function

# lazy_matching_default_attributes(resource, atom)

[ __ View Source ](external_link)
    
    
    @spec lazy_matching_default_attributes(
      [Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(),
      type :: :create | :update
    ) :: [[Ash.Resource.Attribute.t](external_link)()]

Returns all attributes of a resource with lazy matching defaults

__ Link to this function

# lazy_non_matching_default_attributes(resource, atom)

[ __ View Source ](external_link)
    
    
    @spec lazy_non_matching_default_attributes(
      [Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(),
      type :: :create | :update
    ) :: [[Ash.Resource.Attribute.t](external_link)()]

Returns all attributes of a resource with lazy non-matching-defaults

__ Link to this function

# multitenancy_attribute(resource)

[ __ View Source ](external_link)
    
    
    @spec multitenancy_attribute([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [atom](external_link)() | nil

The multitenancy attribute for a resource

__ Link to this function

# multitenancy_global?(resource)

[ __ View Source ](external_link)
    
    
    @spec multitenancy_global?([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [atom](external_link)() | nil

The MFA to parse the tenant from the attribute

__ Link to this function

# multitenancy_parse_attribute(resource)

[ __ View Source ](external_link)
    
    
    @spec multitenancy_parse_attribute([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) ::
      {[atom](external_link)(), [atom](external_link)(), [[any](external_link)()]}

The function to parse the tenant from the attribute

__ Link to this function

# multitenancy_strategy(resource)

[ __ View Source ](external_link)
    
    
    @spec multitenancy_strategy([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) ::
      :context | :attribute | nil

The multitenancy strategy for a resource

__ Link to this function

# multitenancy_template(resource)

[ __ View Source ](external_link)
    
    
    @spec multitenancy_template([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [atom](external_link)() | nil

The template for creating the tenant name

__ Link to this function

# notifiers(resource)

[ __ View Source ](external_link)
    
    
    @spec notifiers([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[module](external_link)()]

A list of notifiers to be used when accessing

__ Link to this function

# plural_name(resource)

[ __ View Source ](external_link)

The plural_name of the resource

__ Link to this function

# preparations(resource)

[ __ View Source ](external_link)
    
    
    @spec preparations([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[Ash.Resource.Preparation.t](external_link)()]

__ Link to this function

# primary_action(resource, type)

[ __ View Source ](external_link)
    
    
    @spec primary_action(
      [Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(),
      [Ash.Resource.Actions.action_type](external_link)()
    ) ::
      [Ash.Resource.Actions.action](external_link)() | nil

Returns the primary action of a given type

__ Link to this function

# primary_action!(resource, type)

[ __ View Source ](external_link)
    
    
    @spec primary_action!(
      [Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(),
      [Ash.Resource.Actions.action_type](external_link)()
    ) ::
      [Ash.Resource.Actions.action](external_link)() | [no_return](external_link)()

Returns the primary action of the given type

__ Link to this function

# primary_key(resource)

[ __ View Source ](external_link)
    
    
    @spec primary_key([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[atom](external_link)()]

A list of field names corresponding to the primary key

__ Link to this function

# primary_key_simple_equality?(resource)

[ __ View Source ](external_link)
    
    
    @spec primary_key_simple_equality?([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [boolean](external_link)()

Whether or not all primary key attributes can be compared with simple_equality

__ Link to this function

# public_aggregate(resource, name)

[ __ View Source ](external_link)
    
    
    @spec public_aggregate([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [atom](external_link)() | [String.t](external_link)()) ::
      [Ash.Resource.Aggregate.t](external_link)() | nil

Get an aggregate by name

__ Link to this function

# public_aggregates(resource)

[ __ View Source ](external_link)
    
    
    @spec public_aggregates([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [
      [Ash.Resource.Aggregate.t](external_link)()
    ]

Returns all public aggregates of a resource

__ Link to this function

# public_attribute(resource, name)

[ __ View Source ](external_link)
    
    
    @spec public_attribute([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [String.t](external_link)() | [atom](external_link)()) ::
      [Ash.Resource.Attribute.t](external_link)() | nil

Get a public attribute name from the resource

__ Link to this function

# public_attributes(resource)

[ __ View Source ](external_link)
    
    
    @spec public_attributes([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [
      [Ash.Resource.Attribute.t](external_link)()
    ]

Returns all public attributes of a resource

__ Link to this function

# public_calculation(resource, name)

[ __ View Source ](external_link)
    
    
    @spec public_calculation([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [atom](external_link)() | [String.t](external_link)()) ::
      [Ash.Resource.Calculation.t](external_link)() | nil

Get a public calculation by name

__ Link to this function

# public_calculations(resource)

[ __ View Source ](external_link)
    
    
    @spec public_calculations([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [
      [Ash.Resource.Calculation.t](external_link)()
    ]

Returns all public calculations of a resource

__ Link to this function

# public_field(resource, name)

[ __ View Source ](external_link)
    
    
    @spec public_field([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [String.t](external_link)() | [atom](external_link)()) ::
      [Ash.Resource.Attribute.t](external_link)()
      | [Ash.Resource.Aggregate.t](external_link)()
      | [Ash.Resource.Calculation.t](external_link)()
      | [Ash.Resource.Relationships.relationship](external_link)()
      | nil

Get a public field from a resource by name

__ Link to this function

# public_fields(resource)

[ __ View Source ](external_link)
    
    
    @spec public_fields([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [
      [Ash.Resource.Attribute.t](external_link)()
      | [Ash.Resource.Aggregate.t](external_link)()
      | [Ash.Resource.Calculation.t](external_link)()
      | [Ash.Resource.Relationships.relationship](external_link)()
    ]

Returns all public attributes, aggregates, calculations and relationships of a resource

__ Link to this function

# public_relationship(resource, relationship_name)

[ __ View Source ](external_link)

Get a public relationship by name or path

__ Link to this function

# public_relationships(resource)

[ __ View Source ](external_link)
    
    
    @spec public_relationships([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [
      [Ash.Resource.Relationships.relationship](external_link)()
    ]

Returns all public relationships of a resource

__ Link to this function

# related(resource, relationship)

[ __ View Source ](external_link)
    
    
    @spec related(
      [Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(),
      [atom](external_link)() | [String.t](external_link)() | [[atom](external_link)() | [String.t](external_link)()]
    ) ::
      [Ash.Resource.t](external_link)() | nil

__ Link to this function

# relationship(resource, relationship_name)

[ __ View Source ](external_link)
    
    
    @spec relationship(
      [Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(),
      [atom](external_link)() | [String.t](external_link)() | [[atom](external_link)() | [String.t](external_link)()]
    ) ::
      [Ash.Resource.Relationships.relationship](external_link)() | nil

Get a relationship by name or path

__ Link to this function

# relationships(resource)

[ __ View Source ](external_link)
    
    
    @spec relationships([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [
      [Ash.Resource.Relationships.relationship](external_link)()
    ]

Returns all relationships of a resource

__ Link to this function

# required_belongs_to_relationships(resource)

[ __ View Source ](external_link)

The required belongs_to relationships

__ Link to this function

# resource?(module)

[ __ View Source ](external_link)
    
    
    @spec resource?([module](external_link)()) :: [boolean](external_link)()

Whether or not a given module is a resource module

__ Link to this function

# reverse_relationship(resource, path, acc \\\ [])

[ __ View Source ](external_link)

Retrieves a relationship path from the resource related by path, to the provided resource.

__ Link to this function

# short_name(resource)

[ __ View Source ](external_link)
    
    
    @spec short_name([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [atom](external_link)() | nil

The short_name of the resource

__ Link to this function

# simple_notifiers(resource)

[ __ View Source ](external_link)
    
    
    @spec simple_notifiers([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[module](external_link)()]

A list of simple notifiers (require no DSL, used to avoid compile time dependencies)

__ Link to this function

# sortable?(resource, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec sortable?([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), [String.t](external_link)() | [atom](external_link)(),
      pagination_type: [Ash.Page.type](external_link)(),
      include_private?: [boolean](external_link)()
    ) :: [boolean](external_link)()

Determine if a field is sortable by name

__ Link to this function

# static_default_attributes(resource, atom)

[ __ View Source ](external_link)
    
    
    @spec static_default_attributes(
      [Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(),
      type :: :create | :update
    ) :: [[Ash.Resource.Attribute.t](external_link)()]

Returns all attributes of a resource with static defaults

__ Link to this function

# trace_name(resource)

[ __ View Source ](external_link)
    
    
    @spec trace_name([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [String.t](external_link)() | nil

The trace_name of the resource

__ Link to this function

# unique_keys(resource)

[ __ View Source ](external_link)
    
    
    @spec unique_keys([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [
      %{type: [atom](external_link)(), keys: [[atom](external_link)()], nils_distinct?: [boolean](external_link)()}
    ]

A list of unique keys and information for a resource

__ Link to this function

# validations(resource)

[ __ View Source ](external_link)
    
    
    @spec validations([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)()) :: [[Ash.Resource.Validation.t](external_link)()]

A list of all validations for the resource

__ Link to this function

# validations(resource, type)

[ __ View Source ](external_link)
    
    
    @spec validations([Spark.Dsl.t](external_link)() | [Ash.Resource.t](external_link)(), :create | :update | :destroy) :: [
      [Ash.Resource.Validation.t](external_link)()
    ]

A list of all validations for the resource for a given action type
