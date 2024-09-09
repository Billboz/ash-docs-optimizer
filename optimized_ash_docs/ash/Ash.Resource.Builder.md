# Ash.Resource.Builder — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Builder (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- add_action(dsl_state, type, name, opts \\\ [])
- add_aggregate(dsl_state, name, kind, relationship_path, opts \\\ [])
- add_attribute(dsl_state, name, type, opts \\\ [])
- add_calculation(dsl_state, name, type, calculation, opts \\\ [])
- add_calculation_interface(dsl_state, name, opts \\\ [])
- add_change(dsl_state, ref, opts \\\ [])
- add_create_timestamp(dsl_state, name, opts \\\ [])
- add_identity(dsl_state, name, fields, opts \\\ [])
- add_interface(dsl_state, name, opts \\\ [])
- add_new_action(dsl_state, type, name, opts \\\ [])
- add_new_aggregate(dsl_state, name, kind, relationship_path, opts \\\ [])
- add_new_attribute(dsl_state, name, type, opts \\\ [])
- add_new_calculation(dsl_state, name, type, calculation, opts \\\ [])
- add_new_calculation_interface(dsl_state, name, opts \\\ [])
- add_new_create_timestamp(dsl_state, name, opts \\\ [])
- add_new_identity(dsl_state, name, fields, opts \\\ [])
- add_new_interface(dsl_state, name, opts \\\ [])
- add_new_relationship(dsl_state, type, name, destination, opts \\\ [])
- add_new_update_timestamp(dsl_state, name, opts \\\ [])
- add_preparation(dsl_state, ref, opts \\\ [])
- add_relationship(dsl_state, type, name, destination, opts \\\ [])
- add_update_timestamp(dsl_state, name, opts \\\ [])
- build_action(type, name, opts \\\ [])
- build_action_argument(name, type, opts \\\ [])
- build_action_change(change, opts \\\ [])
- build_action_metadata(name, type, opts \\\ [])
- build_aggregate(name, kind, relationship_path, opts \\\ [])
- build_attribute(name, type, opts \\\ [])
- build_calculation(name, type, calculation, opts \\\ [])
- build_calculation_argument(name, type, opts \\\ [])
- build_calculation_interface(name, opts \\\ [])
- build_change(ref, opts \\\ [])
- build_create_timestamp(name, opts \\\ [])
- build_identity(name, fields, opts \\\ [])
- build_interface(name, opts \\\ [])
- build_pagination(opts \\\ [])
- build_preparation(ref, opts \\\ [])
- build_relationship(type, name, destination, opts \\\ [])
- build_update_timestamp(name, opts \\\ [])
- prepend_action(dsl_state, type, name, opts \\\ [])

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Builder (ash v3.4.8)

Tools for transforming resources in DSL Transformers.

#  __ Summary

##  Functions

add_action(dsl_state, type, name, opts \\\ [])

Builds and adds an action

add_aggregate(dsl_state, name, kind, relationship_path, opts \\\ [])

Builds and adds an aggregate to a resource

add_attribute(dsl_state, name, type, opts \\\ [])

Builds and adds an attribute to a resource

add_calculation(dsl_state, name, type, calculation, opts \\\ [])

Builds and adds a calculation to a resource

add_calculation_interface(dsl_state, name, opts \\\ [])

Builds and adds an calculation interface to a resource

add_change(dsl_state, ref, opts \\\ [])

Builds and adds a change

add_create_timestamp(dsl_state, name, opts \\\ [])

Builds and adds a create_timestamp to a resource

add_identity(dsl_state, name, fields, opts \\\ [])

Builds and adds an identity

add_interface(dsl_state, name, opts \\\ [])

Builds and adds an interface to a resource

add_new_action(dsl_state, type, name, opts \\\ [])

Builds and adds a new action unless an action with that name already exists

add_new_aggregate(dsl_state, name, kind, relationship_path, opts \\\ [])

Builds and adds an aggregate unless an aggregate with that name already exists

add_new_attribute(dsl_state, name, type, opts \\\ [])

Builds and adds an attribute unless an attribute with that name already exists

add_new_calculation(dsl_state, name, type, calculation, opts \\\ [])

Builds and adds a calculation unless a calculation with that name already exists

add_new_calculation_interface(dsl_state, name, opts \\\ [])

Builds and adds an calculation interface unless an calculation interface with that name already exists

add_new_create_timestamp(dsl_state, name, opts \\\ [])

Builds and adds a create_timestamp unless a create_timestamp with that name already exists

add_new_identity(dsl_state, name, fields, opts \\\ [])

Builds and adds a new identity unless an identity with that name already exists

add_new_interface(dsl_state, name, opts \\\ [])

Builds and adds an interface unless an interface with that name already exists

add_new_relationship(dsl_state, type, name, destination, opts \\\ [])

Builds and adds a new relationship unless a relationship with that name already exists

add_new_update_timestamp(dsl_state, name, opts \\\ [])

Builds and adds an update_timestamp unless an update_timestamp with that name already exists

add_preparation(dsl_state, ref, opts \\\ [])

Builds and adds a preparation

add_relationship(dsl_state, type, name, destination, opts \\\ [])

Builds and adds an action

add_update_timestamp(dsl_state, name, opts \\\ [])

Builds and adds an update_timestamp

build_action(type, name, opts \\\ [])

Builds an action

build_action_argument(name, type, opts \\\ [])

Builds an action argument

build_action_change(change, opts \\\ [])

Builds an action change

build_action_metadata(name, type, opts \\\ [])

Builds an action metadata

build_aggregate(name, kind, relationship_path, opts \\\ [])

Builds a calculation with the given name, type, and options

build_attribute(name, type, opts \\\ [])

Builds an attribute with the given name, type, and options

build_calculation(name, type, calculation, opts \\\ [])

Builds a calculation with the given name, type, and options

build_calculation_argument(name, type, opts \\\ [])

Builds a calculation argument

build_calculation_interface(name, opts \\\ [])

Builds an calculation interface with the given name, type, and options

build_change(ref, opts \\\ [])

Builds a change

build_create_timestamp(name, opts \\\ [])

Builds an create_timestamp with the given name, type, and options

build_identity(name, fields, opts \\\ [])

Builds an action

build_interface(name, opts \\\ [])

Builds an interface with the given name, type, and options

build_pagination(opts \\\ [])

Builds a pagination object

build_preparation(ref, opts \\\ [])

Builds a preparation

build_relationship(type, name, destination, opts \\\ [])

Builds a relationship

build_update_timestamp(name, opts \\\ [])

Builds an update_timestamp with the given name, type, and options

prepend_action(dsl_state, type, name, opts \\\ [])

Builds and adds an action to the front of the actions list

#  __ Functions

__ Link to this function

# add_action(dsl_state, type, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_action(
      [Spark.Dsl.Builder.input](external_link)(),
      type :: [Ash.Resource.Actions.action_type](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an action

__ Link to this function

# add_aggregate(dsl_state, name, kind, relationship_path, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_aggregate(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      kind :: [Ash.Query.Aggregate.kind](external_link)(),
      relationship_path :: [atom](external_link)() | [[atom](external_link)()],
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an aggregate to a resource

__ Link to this function

# add_attribute(dsl_state, name, type, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_attribute(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      type :: [Ash.Type.t](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an attribute to a resource

__ Link to this function

# add_calculation(dsl_state, name, type, calculation, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_calculation(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      type :: [Ash.Type.t](external_link)(),
      calculation :: [module](external_link)() | {[module](external_link)(), [Keyword.t](external_link)()},
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds a calculation to a resource

__ Link to this function

# add_calculation_interface(dsl_state, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_calculation_interface(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an calculation interface to a resource

__ Link to this function

# add_change(dsl_state, ref, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_change(
      [Spark.Dsl.Builder.input](external_link)(),
      ref :: [module](external_link)() | {[module](external_link)(), [Keyword.t](external_link)()},
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds a change

__ Link to this function

# add_create_timestamp(dsl_state, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_create_timestamp(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds a create_timestamp to a resource

__ Link to this function

# add_identity(dsl_state, name, fields, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_identity(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      fields :: [atom](external_link)() | [[atom](external_link)()],
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an identity

__ Link to this function

# add_interface(dsl_state, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_interface(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an interface to a resource

__ Link to this function

# add_new_action(dsl_state, type, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_new_action(
      [Spark.Dsl.Builder.input](external_link)(),
      type :: [Ash.Resource.Actions.action_type](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds a new action unless an action with that name already exists

__ Link to this function

# add_new_aggregate(dsl_state, name, kind, relationship_path, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_new_aggregate(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      kind :: [Ash.Query.Aggregate.kind](external_link)(),
      relationship_path :: [atom](external_link)() | [[atom](external_link)()],
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an aggregate unless an aggregate with that name already exists

__ Link to this function

# add_new_attribute(dsl_state, name, type, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_new_attribute(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      type :: [Ash.Type.t](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an attribute unless an attribute with that name already exists

__ Link to this function

# add_new_calculation(dsl_state, name, type, calculation, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_new_calculation(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      type :: [Ash.Type.t](external_link)(),
      calculation :: [module](external_link)() | {[module](external_link)(), [Keyword.t](external_link)()} | [Ash.Expr.t](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds a calculation unless a calculation with that name already exists

__ Link to this function

# add_new_calculation_interface(dsl_state, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_new_calculation_interface(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an calculation interface unless an calculation interface with that name already exists

__ Link to this function

# add_new_create_timestamp(dsl_state, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_new_create_timestamp(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) ::
      [Spark.Dsl.Builder.result](external_link)()

Builds and adds a create_timestamp unless a create_timestamp with that name already exists

__ Link to this function

# add_new_identity(dsl_state, name, fields, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_new_identity(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      fields :: [atom](external_link)() | [[atom](external_link)()],
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds a new identity unless an identity with that name already exists

__ Link to this function

# add_new_interface(dsl_state, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_new_interface(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an interface unless an interface with that name already exists

__ Link to this function

# add_new_relationship(dsl_state, type, name, destination, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_new_relationship(
      [Spark.Dsl.Builder.input](external_link)(),
      type :: [Ash.Resource.Relationships.type](external_link)(),
      name :: [atom](external_link)(),
      destination :: [module](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds a new relationship unless a relationship with that name already exists

__ Link to this function

# add_new_update_timestamp(dsl_state, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_new_update_timestamp(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) ::
      [Spark.Dsl.Builder.result](external_link)()

Builds and adds an update_timestamp unless an update_timestamp with that name already exists

__ Link to this function

# add_preparation(dsl_state, ref, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_preparation(
      [Spark.Dsl.Builder.input](external_link)(),
      ref :: [module](external_link)() | {[module](external_link)(), [Keyword.t](external_link)()},
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds a preparation

__ Link to this function

# add_relationship(dsl_state, type, name, destination, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_relationship(
      [Spark.Dsl.Builder.input](external_link)(),
      type :: [Ash.Resource.Relationships.type](external_link)(),
      name :: [atom](external_link)(),
      destination :: [module](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an action

__ Link to this function

# add_update_timestamp(dsl_state, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_update_timestamp(
      [Spark.Dsl.Builder.input](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) ::
      [Spark.Dsl.Builder.result](external_link)()

Builds and adds an update_timestamp

__ Link to this function

# build_action(type, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_action(
      type :: [Ash.Resource.Actions.action_type](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: {:ok, [Ash.Resource.Actions.action](external_link)()} | {:error, [term](external_link)()}

Builds an action

__ Link to this function

# build_action_argument(name, type, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_action_argument(name :: [atom](external_link)(), type :: [Ash.Type.t](external_link)(), opts :: [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.Actions.Argument.t](external_link)()} | {:error, [term](external_link)()}

Builds an action argument

__ Link to this function

# build_action_change(change, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_action_change(change :: [Ash.Resource.Change.ref](external_link)(), opts :: [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.Change.t](external_link)()} | {:error, [term](external_link)()}

Builds an action change

__ Link to this function

# build_action_metadata(name, type, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_action_metadata(name :: [atom](external_link)(), type :: [Ash.Type.t](external_link)(), opts :: [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.Actions.Metadata.t](external_link)()} | {:error, [term](external_link)()}

Builds an action metadata

__ Link to this function

# build_aggregate(name, kind, relationship_path, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_aggregate(
      name :: [atom](external_link)(),
      kind :: [Ash.Query.Aggregate.kind](external_link)(),
      relationship_path :: [atom](external_link)() | [[atom](external_link)()],
      opts :: [Keyword.t](external_link)()
    ) :: {:ok, [Ash.Resource.Aggregate.t](external_link)()} | {:error, [term](external_link)()}

Builds a calculation with the given name, type, and options

__ Link to this function

# build_attribute(name, type, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_attribute(name :: [atom](external_link)(), type :: [Ash.Type.t](external_link)(), opts :: [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.Attribute.t](external_link)()} | {:error, [term](external_link)()}

Builds an attribute with the given name, type, and options

__ Link to this function

# build_calculation(name, type, calculation, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_calculation(
      name :: [atom](external_link)(),
      type :: [Ash.Type.t](external_link)(),
      calculation :: [module](external_link)() | {[module](external_link)(), [Keyword.t](external_link)()},
      opts :: [Keyword.t](external_link)()
    ) :: {:ok, [Ash.Resource.Calculation.t](external_link)()} | {:error, [term](external_link)()}

Builds a calculation with the given name, type, and options

__ Link to this function

# build_calculation_argument(name, type, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_calculation_argument(
      name :: [atom](external_link)(),
      type :: [Ash.Type.t](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) ::
      {:ok, [Ash.Resource.Calculation.Argument.t](external_link)()} | {:error, [term](external_link)()}

Builds a calculation argument

__ Link to this function

# build_calculation_interface(name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_calculation_interface(name :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.CalculationInterface.t](external_link)()} | {:error, [term](external_link)()}

Builds an calculation interface with the given name, type, and options

__ Link to this function

# build_change(ref, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_change(
      ref :: [module](external_link)() | {[module](external_link)(), [Keyword.t](external_link)()},
      opts :: [Keyword.t](external_link)()
    ) :: {:ok, [Ash.Resource.Change.t](external_link)()} | {:error, [term](external_link)()}

Builds a change

__ Link to this function

# build_create_timestamp(name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_create_timestamp(name :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.Attribute.t](external_link)()} | {:error, [term](external_link)()}

Builds an create_timestamp with the given name, type, and options

__ Link to this function

# build_identity(name, fields, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_identity(
      name :: [atom](external_link)(),
      fields :: [atom](external_link)() | [[atom](external_link)()],
      opts :: [Keyword.t](external_link)()
    ) :: {:ok, [Ash.Resource.Identity.t](external_link)()} | {:error, [term](external_link)()}

Builds an action

__ Link to this function

# build_interface(name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_interface(name :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.Interface.t](external_link)()} | {:error, [term](external_link)()}

Builds an interface with the given name, type, and options

__ Link to this function

# build_pagination(opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_pagination(pts :: [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.Actions.Read.Pagination.t](external_link)()} | {:error, [term](external_link)()}

Builds a pagination object

__ Link to this function

# build_preparation(ref, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_preparation(
      ref :: [module](external_link)() | {[module](external_link)(), [Keyword.t](external_link)()},
      opts :: [Keyword.t](external_link)()
    ) :: {:ok, [Ash.Resource.Preparation.t](external_link)()} | {:error, [term](external_link)()}

Builds a preparation

__ Link to this function

# build_relationship(type, name, destination, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_relationship(
      type :: [Ash.Resource.Relationships.type](external_link)(),
      name :: [atom](external_link)(),
      destination :: [module](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: {:ok, [Ash.Resource.Relationships.relationship](external_link)()} | {:error, [term](external_link)()}

Builds a relationship

__ Link to this function

# build_update_timestamp(name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_update_timestamp(name :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.Attribute.t](external_link)()} | {:error, [term](external_link)()}

Builds an update_timestamp with the given name, type, and options

__ Link to this function

# prepend_action(dsl_state, type, name, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec prepend_action(
      [Spark.Dsl.Builder.input](external_link)(),
      type :: [Ash.Resource.Actions.action_type](external_link)(),
      name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Spark.Dsl.Builder.result](external_link)()

Builds and adds an action to the front of the actions list
