# DSL: Ash.Resource.Dsl — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) DSL: Ash.Resource.Dsl
  - __ attributes
    - __ Nested DSLs
    - __ Examples
  - __ attributes.attribute
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ attributes.create_timestamp
    - __ Examples
    - __ Arguments
    - __ Introspection
  - __ attributes.update_timestamp
    - __ Examples
    - __ Arguments
    - __ Introspection
  - __ attributes.integer_primary_key
    - __ Examples
    - __ Arguments
    - __ Introspection
  - __ attributes.uuid_primary_key
    - __ Examples
    - __ Arguments
    - __ Introspection
  - __ attributes.uuid_v7_primary_key
    - __ Examples
    - __ Arguments
    - __ Introspection
  - __ relationships
    - __ Nested DSLs
    - __ Examples
  - __ relationships.has_one
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ relationships.has_one.filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ relationships.has_many
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ relationships.has_many.filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ relationships.many_to_many
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ relationships.many_to_many.filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ relationships.belongs_to
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ relationships.belongs_to.filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ actions
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ actions.action
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ actions.action.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection
  - __ actions.create
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ actions.create.change
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ actions.create.validate
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ actions.create.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ actions.create.metadata
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection
  - __ actions.read
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ actions.read.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ actions.read.prepare
    - __ Examples
    - __ Arguments
    - __ Introspection
  - __ actions.read.pagination
    - __ Options
    - __ Introspection
  - __ actions.read.metadata
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ actions.read.filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ actions.update
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ actions.update.change
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ actions.update.validate
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ actions.update.metadata
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ actions.update.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection
  - __ actions.destroy
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ actions.destroy.change
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ actions.destroy.validate
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ actions.destroy.metadata
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ actions.destroy.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection
  - __ code_interface
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ code_interface.define
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ code_interface.define_calculation
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ resource
    - __ Examples
    - __ Options
  - __ identities
    - __ Nested DSLs
    - __ Examples
  - __ identities.identity
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ changes
    - __ Nested DSLs
    - __ Examples
  - __ changes.change
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ preparations
    - __ Nested DSLs
    - __ Examples
  - __ preparations.prepare
    - __ Examples
    - __ Arguments
    - __ Introspection
  - __ validations
    - __ Nested DSLs
    - __ Examples
  - __ validations.validate
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ aggregates
    - __ Nested DSLs
    - __ Examples
  - __ aggregates.count
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ aggregates.count.join_filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ aggregates.exists
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ aggregates.exists.join_filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ aggregates.first
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ aggregates.first.join_filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ aggregates.sum
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ aggregates.sum.join_filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ aggregates.list
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ aggregates.list.join_filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ aggregates.max
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ aggregates.max.join_filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ aggregates.min
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ aggregates.min.join_filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ aggregates.avg
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ aggregates.avg.join_filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ aggregates.custom
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ aggregates.custom.join_filter
    - __ Examples
    - __ Arguments
    - __ Introspection
    - __ Introspection
  - __ calculations
    - __ Nested DSLs
    - __ Examples
  - __ calculations.calculate
    - __ Nested DSLs
    - __ Examples
    - __ Arguments
    - __ Options
  - __ calculations.calculate.argument
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
    - __ Introspection
  - __ multitenancy
    - __ Examples
    - __ Options

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) DSL: Ash.Resource.Dsl

##  __ attributes

A section for declaring attributes on the resource.

###  __ Nested DSLs

  * attribute
  * create_timestamp
  * update_timestamp
  * integer_primary_key
  * uuid_primary_key
  * uuid_v7_primary_key



###  __ Examples
    
    
    attributes do
      uuid_primary_key :id
    
      attribute :first_name, :string do
        allow_nil? false
      end
    
      attribute :last_name, :string do
        allow_nil? false
      end
    
      attribute :email, :string do
        allow_nil? false
    
        constraints [
          match: ~r/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
        ]
      end
    
      attribute :type, :atom do
        constraints [
          one_of: [:admin, :teacher, :student]
        ]
      end
    
      create_timestamp :inserted_at
      update_timestamp :updated_at
    end
    

##  __ attributes.attribute
    
    
    attribute name, type

Declares an attribute on the resource.

###  __ Examples
    
    
    attribute :name, :string do
      allow_nil? false
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the attribute.  
`type`| `module`| | The type of the attribute. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`constraints`| `keyword`| | Constraints to provide to the type when casting the value. For more, see [`Ash.Type`](external_link).  
`description`| `String.t`| | An optional description for the attribute.  
`sensitive?`| `boolean`| `false`| Whether or not the attribute value contains sensitive information, like PII. See the [Sensitive Data guide](external_link) for more.  
`source`| `atom`| | If the field should be mapped to a different name in the data layer. Support varies by data layer.  
`always_select?`| `boolean`| `false`| Whether or not to ensure this attribute is always selected when reading from the database, regardless of applied select statements.  
`primary_key?`| `boolean`| `false`| Whether the attribute is the primary key. Composite primary key is also possible by using `primary_key? true` in more than one attribute. If primary_key? is true, allow_nil? must be false.  
`allow_nil?`| `boolean`| `true`| Whether or not the attribute can be set to nil. If nil value is given error is raised.  
`generated?`| `boolean`| `false`| Whether or not the value may be generated by the data layer.  
`writable?`| `boolean`| `true`| Whether or not the value can be written to. Non-writable attributes can still be written with [`Ash.Changeset.force_change_attribute/3`](external_link).  
`public?`| `boolean`| `false`| Whether or not the attribute should be shown over public interfaces. See the [sensitive data guide](external_link) for more.  
`default`| `(-> any) | mfa | any`| | A value to be set on all creates, unless a value is being provided already. Note: The default value is casted according to the type's `Ash.Type.*` module, before it is saved. For `:string`, for example, if `constraints: [allow_empty?: _]` is false, the value `""` will be cast to `nil`. See the `:constraints` option, the `:allow_nil?` option, and the relevant `Ash.Type.*` documentation.  
`update_default`| `(-> any) | mfa | any`| | A value to be set on all updates, unless a value is being provided already.  
`filterable?`| `boolean | :simple_equality`| `true`| Whether or not the attribute can be referenced in filters.  
`sortable?`| `boolean`| `true`| Whether or not the attribute can be referenced in sorts.  
`match_other_defaults?`| `boolean`| `false`| Ensures that other attributes that use the same "lazy" default (a function or an mfa), use the same default value. Has no effect unless `default` is a zero argument function.  
  
###  __ Introspection

Target: [`Ash.Resource.Attribute`](external_link)

##  __ attributes.create_timestamp
    
    
    create_timestamp name

Declares a non-writable attribute with a create default of `&DateTime.utc_now/0`

Accepts all the same options as `[Ash.Resource.Dsl.attributes.attribute](external_link)`, except it sets the following different defaults:
    
    
    writable? false
    default &DateTime.utc_now/0
    match_other_defaults? true
    type Ash.Type.UTCDatetimeUsec
    allow_nil? false

###  __ Examples
    
    
    create_timestamp :inserted_at

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the attribute.  
  
###  __ Introspection

Target: [`Ash.Resource.Attribute`](external_link)

##  __ attributes.update_timestamp
    
    
    update_timestamp name

Declares a non-writable attribute with a create and update default of `&DateTime.utc_now/0`

Accepts all the same options as `[Ash.Resource.Dsl.attributes.attribute](external_link)`, except it sets the following different defaults:
    
    
    writable? false
    default &DateTime.utc_now/0
    match_other_defaults? true
    update_default &DateTime.utc_now/0
    type Ash.Type.UTCDatetimeUsec
    allow_nil? false

###  __ Examples
    
    
    update_timestamp :updated_at

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the attribute.  
  
###  __ Introspection

Target: [`Ash.Resource.Attribute`](external_link)

##  __ attributes.integer_primary_key
    
    
    integer_primary_key name

Declares a generated, non writable, non-nil, primary key column of type integer.

Generated integer primary keys must be supported by the data layer.

Accepts all the same options as `[Ash.Resource.Dsl.attributes.attribute](external_link)`, except for `allow_nil?`, but it sets the following different defaults:
    
    
    public? true
    writable? false
    primary_key? true
    generated? true
    type :integer

###  __ Examples
    
    
    integer_primary_key :id

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the attribute.  
  
###  __ Introspection

Target: [`Ash.Resource.Attribute`](external_link)

##  __ attributes.uuid_primary_key
    
    
    uuid_primary_key name

Declares a non writable, non-nil, primary key column of type `uuid`, which defaults to [`Ash.UUID.generate/0`](external_link).

Accepts all the same options as `[Ash.Resource.Dsl.attributes.attribute](external_link)`, except for `allow_nil?`, but it sets the following different defaults:
    
    
    writable? false
    public? true
    default &Ash.UUID.generate/0
    primary_key? true
    type :uuid

###  __ Examples
    
    
    uuid_primary_key :id

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the attribute.  
  
###  __ Introspection

Target: [`Ash.Resource.Attribute`](external_link)

##  __ attributes.uuid_v7_primary_key
    
    
    uuid_v7_primary_key name

Declares a non writable, non-nil, primary key column of type `uuid_v7`, which defaults to [`Ash.UUIDv7.generate/0`](external_link).

Accepts all the same options as `[Ash.Resource.Dsl.attributes.attribute](external_link)`, except for `allow_nil?`, but it sets the following different defaults:
    
    
    writable? false
    public? true
    default &Ash.UUIDv7.generate/0
    primary_key? true
    type :uuid_v7

###  __ Examples
    
    
    uuid_v7_primary_key :id

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the attribute.  
  
###  __ Introspection

Target: [`Ash.Resource.Attribute`](external_link)

##  __ relationships

A section for declaring relationships on the resource.

Relationships are a core component of resource oriented design. Many components of Ash will use these relationships. A simple use case is loading relationships (done via the [`Ash.Query.load/2`](external_link)).

See the [relationships guide](external_link) for more.

###  __ Nested DSLs

  * has_one
    * filter
  * has_many
    * filter
  * many_to_many
    * filter
  * belongs_to
    * filter



###  __ Examples
    
    
    relationships do
      belongs_to :post, MyApp.Post do
        primary_key? true
      end
    
      belongs_to :category, MyApp.Category do
        primary_key? true
      end
    end
    
    
    
    relationships do
      belongs_to :author, MyApp.Author
    
      many_to_many :categories, MyApp.Category do
        through MyApp.PostCategory
        destination_attribute_on_join_resource :category_id
        source_attribute_on_join_resource :post_id
      end
    end
    
    
    
    relationships do
      has_many :posts, MyApp.Post do
        destination_attribute :author_id
      end
    
      has_many :composite_key_posts, MyApp.CompositeKeyPost do
        destination_attribute :author_id
      end
    end
    

##  __ relationships.has_one
    
    
    has_one name, destination

Declares a `has_one` relationship. In a relational database, the foreign key would be on the _other_ table.

Generally speaking, a `has_one` also implies that the destination table is unique on that foreign key.

See the [relationships guide](external_link) for more.

###  __ Nested DSLs

  * filter



###  __ Examples
    
    
    # In a resource called `Word`
    has_one :dictionary_entry, DictionaryEntry do
      source_attribute :text
      destination_attribute :word_text
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the relationship  
`destination`| `module`| | The destination resource  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`manual`| `(any, any -> any) | module`| | A module that implements [`Ash.Resource.ManualRelationship`](external_link). Also accepts a 2 argument function that takes the source records and the context.  
`no_attributes?`| `boolean`| | All existing entities are considered related, i.e this relationship is not based on any fields, and `source_attribute` and `destination_attribute` are ignored. See the See the [relationships guide](external_link) for more.  
`allow_nil?`| `boolean`| `true`| Marks the relationship as required. Has no effect on validations, but can inform extensions that there will always be a related entity.  
`from_many?`| `boolean`| `false`| Signal that this relationship is actually a `has_many` where the first record is given via the `sort`. This will allow data layers to properly deduplicate when necessary.  
`description`| `String.t`| | An optional description for the relationship  
`destination_attribute`| `atom`| | The attribute on the related resource that should match the `source_attribute` configured on this resource.  
`validate_destination_attribute?`| `boolean`| `true`| Whether or not to validate that the destination field exists on the destination resource  
`source_attribute`| `atom`| `:id`| The field on this resource that should match the `destination_attribute` on the related resource.  
`relationship_context`| `any`| | Context to be set on any queries or changesets generated for managing or querying this relationship.  
`public?`| `boolean`| `false`| Whether or not the relationship will appear in public interfaces  
`not_found_message`| `String.t`| | A message to show if there is a conflict with this relationship in the database on update or create, or when managing relationships.  
`writable?`| `boolean`| `true`| Whether or not the relationship may be managed.  
`read_action`| `atom`| | The read action on the destination resource to use when loading data and filtering.  
`domain`| `atom`| | The domain module to use when working with the related entity.  
`filterable?`| `boolean`| `true`| If set to `false`, the relationship will not be usable in filters.  
`sortable?`| `boolean`| `true`| If set to `false`, the relationship will not be usable in filters.  
`sort`| `any`| | A sort statement to be applied when loading the relationship.  
`could_be_related_at_creation?`| `boolean`| `false`| Whether or not related values may exist for this relationship at creation.  
`violation_message`| `String.t`| | A message to show if there is a conflict with this relationship in the database on destroy.  
  
##  __ relationships.has_one.filter
    
    
    filter filter

Applies a filter. Can use [`^arg/1`](external_link), [`^context/1`](external_link) and [`^actor/1`](external_link) teplates. Multiple filters are combined with _and_.

###  __ Examples
    
    
    filter expr(first_name == "fred")
    filter expr(last_name == "weasley" and magician == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`filter`| `any`| | The filter to apply. Can use [`^arg/1`](external_link), [`^context/1`](external_link) and [`^actor/1`](external_link) teplates. Multiple filters are combined with _and_.  
  
###  __ Introspection

Target: [`Ash.Resource.Dsl.Filter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Relationships.HasOne`](external_link)

##  __ relationships.has_many
    
    
    has_many name, destination

Declares a `has_many` relationship. There can be any number of related entities.

See the [relationships guide](external_link) for more.

###  __ Nested DSLs

  * filter



###  __ Examples
    
    
    # In a resource called `Word`
    has_many :definitions, DictionaryDefinition do
      source_attribute :text
      destination_attribute :word_text
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the relationship  
`destination`| `module`| | The destination resource  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`manual`| `(any, any -> any) | module`| | A module that implements [`Ash.Resource.ManualRelationship`](external_link). Also accepts a 2 argument function that takes the source records and the context.  
`no_attributes?`| `boolean`| | All existing entities are considered related, i.e this relationship is not based on any fields, and `source_attribute` and `destination_attribute` are ignored. See the See the [relationships guide](external_link) for more.  
`description`| `String.t`| | An optional description for the relationship  
`destination_attribute`| `atom`| | The attribute on the related resource that should match the `source_attribute` configured on this resource.  
`validate_destination_attribute?`| `boolean`| `true`| Whether or not to validate that the destination field exists on the destination resource  
`source_attribute`| `atom`| `:id`| The field on this resource that should match the `destination_attribute` on the related resource.  
`relationship_context`| `any`| | Context to be set on any queries or changesets generated for managing or querying this relationship.  
`public?`| `boolean`| `false`| Whether or not the relationship will appear in public interfaces  
`not_found_message`| `String.t`| | A message to show if there is a conflict with this relationship in the database on update or create, or when managing relationships.  
`writable?`| `boolean`| `true`| Whether or not the relationship may be managed.  
`read_action`| `atom`| | The read action on the destination resource to use when loading data and filtering.  
`domain`| `atom`| | The domain module to use when working with the related entity.  
`filterable?`| `boolean`| `true`| If set to `false`, the relationship will not be usable in filters.  
`sortable?`| `boolean`| `true`| If set to `false`, the relationship will not be usable in filters.  
`sort`| `any`| | A sort statement to be applied when loading the relationship.  
`could_be_related_at_creation?`| `boolean`| `false`| Whether or not related values may exist for this relationship at creation.  
`violation_message`| `String.t`| | A message to show if there is a conflict with this relationship in the database on destroy.  
  
##  __ relationships.has_many.filter
    
    
    filter filter

Applies a filter. Can use [`^arg/1`](external_link), [`^context/1`](external_link) and [`^actor/1`](external_link) teplates. Multiple filters are combined with _and_.

###  __ Examples
    
    
    filter expr(first_name == "fred")
    filter expr(last_name == "weasley" and magician == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`filter`| `any`| | The filter to apply. Can use [`^arg/1`](external_link), [`^context/1`](external_link) and [`^actor/1`](external_link) teplates. Multiple filters are combined with _and_.  
  
###  __ Introspection

Target: [`Ash.Resource.Dsl.Filter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Relationships.HasMany`](external_link)

##  __ relationships.many_to_many
    
    
    many_to_many name, destination

Declares a `many_to_many` relationship. Many to many relationships require a join resource.

A join resource is a resource that consists of a relationship to the source and destination of the many to many.

See the [relationships guide](external_link) for more.

###  __ Nested DSLs

  * filter



###  __ Examples
    
    
    # In a resource called `Word`
    many_to_many :books, Book do
      through BookWord
      source_attribute :text
      source_attribute_on_join_resource :word_text
      destination_attribute :id
      destination_attribute_on_join_resource :book_id
    end
    
    # And in `BookWord` (the join resource)
    belongs_to :book, Book, primary_key?: true, allow_nil?: false
    belongs_to :word, Word, primary_key?: true, allow_nil?: false
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the relationship  
`destination`| `module`| | The destination resource  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`source_attribute_on_join_resource`| `atom`| | The attribute on the join resource that should line up with `source_attribute` on this resource. Defaults to `<snake_cased_last_part_of_source_module_name>_id`.  
`destination_attribute_on_join_resource`| `atom`| | The attribute on the join resource that should line up with `destination_attribute` on the related resource. Defaults to `<snake_cased_last_part_of_destination_module_name>_id`.  
`through`| `module`| | The resource to use as the join resource.  
`join_relationship`| `atom`| | The has_many relationship to the join resource. Defaults to `<relationship_name>_join_assoc`.  
`description`| `String.t`| | An optional description for the relationship  
`destination_attribute`| `atom`| `:id`| The attribute on the related resource that should match the `source_attribute` configured on this resource.  
`validate_destination_attribute?`| `boolean`| `true`| Whether or not to validate that the destination field exists on the destination resource  
`source_attribute`| `atom`| `:id`| The field on this resource that should match the `destination_attribute` on the related resource.  
`relationship_context`| `any`| | Context to be set on any queries or changesets generated for managing or querying this relationship.  
`public?`| `boolean`| `false`| Whether or not the relationship will appear in public interfaces  
`not_found_message`| `String.t`| | A message to show if there is a conflict with this relationship in the database on update or create, or when managing relationships.  
`writable?`| `boolean`| `true`| Whether or not the relationship may be managed.  
`read_action`| `atom`| | The read action on the destination resource to use when loading data and filtering.  
`domain`| `atom`| | The domain module to use when working with the related entity.  
`filterable?`| `boolean`| `true`| If set to `false`, the relationship will not be usable in filters.  
`sortable?`| `boolean`| `true`| If set to `false`, the relationship will not be usable in filters.  
`sort`| `any`| | A sort statement to be applied when loading the relationship.  
`could_be_related_at_creation?`| `boolean`| `false`| Whether or not related values may exist for this relationship at creation.  
`violation_message`| `String.t`| | A message to show if there is a conflict with this relationship in the database on destroy.  
  
##  __ relationships.many_to_many.filter
    
    
    filter filter

Applies a filter. Can use [`^arg/1`](external_link), [`^context/1`](external_link) and [`^actor/1`](external_link) teplates. Multiple filters are combined with _and_.

###  __ Examples
    
    
    filter expr(first_name == "fred")
    filter expr(last_name == "weasley" and magician == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`filter`| `any`| | The filter to apply. Can use [`^arg/1`](external_link), [`^context/1`](external_link) and [`^actor/1`](external_link) teplates. Multiple filters are combined with _and_.  
  
###  __ Introspection

Target: [`Ash.Resource.Dsl.Filter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Relationships.ManyToMany`](external_link)

##  __ relationships.belongs_to
    
    
    belongs_to name, destination

Declares a `belongs_to` relationship. In a relational database, the foreign key would be on the _source_ table.

This creates a field on the resource with the corresponding name and type, unless `define_attribute?: false` is provided.

See the [relationships guide](external_link) for more.

###  __ Nested DSLs

  * filter



###  __ Examples
    
    
    # In a resource called `Word`
    belongs_to :dictionary_entry, DictionaryEntry do
      source_attribute :text,
      destination_attribute :word_text
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the relationship  
`destination`| `module`| | The destination resource  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`primary_key?`| `boolean`| `false`| Whether the generated attribute is, or is part of, the primary key of a resource.  
`allow_nil?`| `boolean`| `true`| Whether this relationship must always be present, e.g: must be included on creation, and never removed (it may be modified). The generated attribute will not allow nil values.  
`attribute_writable?`| `boolean`| | Whether the generated attribute will be marked as writable. If not set, it will default to the relationship's `writable?` setting.  
`attribute_public?`| `boolean`| | Whether or not the generated attribute will be public. If not set, it will default to the relationship's `public?` setting.  
`define_attribute?`| `boolean`| `true`| If set to `false` an attribute is not created on the resource for this relationship, and one must be manually added in `attributes`, invalidating many other options.  
`attribute_type`| `any`| `:uuid`| The type of the generated created attribute. See [`Ash.Type`](external_link) for more.  
`description`| `String.t`| | An optional description for the relationship  
`destination_attribute`| `atom`| `:id`| The attribute on the related resource that should match the `source_attribute` configured on this resource.  
`validate_destination_attribute?`| `boolean`| `true`| Whether or not to validate that the destination field exists on the destination resource  
`source_attribute`| `atom`| | The field on this resource that should match the `destination_attribute` on the related resource. - Defaults to <name>_id  
`relationship_context`| `any`| | Context to be set on any queries or changesets generated for managing or querying this relationship.  
`public?`| `boolean`| `false`| Whether or not the relationship will appear in public interfaces  
`not_found_message`| `String.t`| | A message to show if there is a conflict with this relationship in the database on update or create, or when managing relationships.  
`writable?`| `boolean`| `true`| Whether or not the relationship may be managed.  
`read_action`| `atom`| | The read action on the destination resource to use when loading data and filtering.  
`domain`| `atom`| | The domain module to use when working with the related entity.  
`filterable?`| `boolean`| `true`| If set to `false`, the relationship will not be usable in filters.  
`sortable?`| `boolean`| `true`| If set to `false`, the relationship will not be usable in filters.  
`sort`| `any`| | A sort statement to be applied when loading the relationship.  
`violation_message`| `String.t`| | A message to show if there is a conflict with this relationship in the database on destroy.  
  
##  __ relationships.belongs_to.filter
    
    
    filter filter

Applies a filter. Can use [`^arg/1`](external_link), [`^context/1`](external_link) and [`^actor/1`](external_link) teplates. Multiple filters are combined with _and_.

###  __ Examples
    
    
    filter expr(first_name == "fred")
    filter expr(last_name == "weasley" and magician == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`filter`| `any`| | The filter to apply. Can use [`^arg/1`](external_link), [`^context/1`](external_link) and [`^actor/1`](external_link) teplates. Multiple filters are combined with _and_.  
  
###  __ Introspection

Target: [`Ash.Resource.Dsl.Filter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Relationships.BelongsTo`](external_link)

##  __ actions

A section for declaring resource actions.

All manipulation of data through the underlying data layer happens through actions. There are four types of action: `create`, `read`, `update`, and `destroy`. You may recognize these from the acronym `CRUD`. You can have multiple actions of the same type, as long as they have different names. This is the primary mechanism for customizing your resources to conform to your business logic. It is normal and expected to have multiple actions of each type in a large application.

###  __ Nested DSLs

  * action
    * argument
  * create
    * change
    * validate
    * argument
    * metadata
  * read
    * argument
    * prepare
    * pagination
    * metadata
    * filter
  * update
    * change
    * validate
    * metadata
    * argument
  * destroy
    * change
    * validate
    * metadata
    * argument



###  __ Examples
    
    
    actions do
      create :signup do
        argument :password, :string
        argument :password_confirmation, :string
        validate confirm(:password, :password_confirmation)
        change {MyApp.HashPassword, []} # A custom implemented Change
      end
    
      read :me do
        # An action that auto filters to only return the user for the current user
        filter [id: actor(:id)]
      end
    
      update :update do
        accept [:first_name, :last_name]
      end
    
      destroy do
        change set_attribute(:deleted_at, &DateTime.utc_now/0)
        # This tells it that even though this is a delete action, it
        # should be treated like an update because `deleted_at` is set.
        # This should be coupled with a `base_filter` on the resource
        # or with the read actions having a `filter` for `is_nil: :deleted_at`
        soft? true
      end
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`defaults`| `list(:create | :read | :update | :destroy | {atom, atom | list(atom)})`| | Creates a simple action of each specified type, with the same name as the type. These will be `primary?` unless one already exists for that type. Embedded resources, however, have a default of all resource types.  
`default_accept`| `list(atom) | :*`| | A default value for the `accept` option for each action. Use `:*` to accept all public attributes.  
  
##  __ actions.action
    
    
    action name, returns \\ nil

Declares a generic action. A combination of arguments, a return type and a run function.

For calling this action, see the [`Ash.Domain`](external_link) documentation.

###  __ Nested DSLs

  * argument



###  __ Examples
    
    
    action :top_user_emails, {:array, :string} do
      argument :limit, :integer, default: 10, allow_nil?: false
      run fn input, context ->
        with {:ok, top_users} <- top_users(input.arguments.limit) do
          {:ok, Enum.map(top_users, &(&1.email))}
        end
      end
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the action  
`returns`| `module`| | The return type of the action. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`constraints`| `keyword`| | Constraints for the return type. See [`Ash.Type`](external_link) for more.  
`allow_nil?`| `boolean`| `false`| Whether or not the action can return nil. Unlike attributes & arguments, this defaults to `false`.  
`run`| `(any, any -> any) | module | module`| |   
`primary?`| `boolean`| `false`| Whether or not this action should be used when no action is specified by the caller.  
`description`| `String.t`| | An optional description for the action  
`transaction?`| `boolean`| | Whether or not the action should be run in transactions. Reads default to false, while create/update/destroy actions default to `true`.  
`touches_resources`| `list(atom)`| | A list of resources that the action may touch, used when building transactions.  
`skip_unknown_inputs`| `atom | String.t | list(atom | String.t)`| `[]`| A list of unknown fields to skip, or `:*` to skip all unknown fields.  
  
##  __ actions.action.argument
    
    
    argument name, type

Declares an argument on the action

###  __ Examples
    
    
    argument :password_confirmation, :string

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the argument  
`type`| `module`| | The type of the argument. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | An optional description for the argument.  
`constraints`| `keyword`| `[]`| Constraints to provide to the type when casting the value. For more information, see [`Ash.Type`](external_link).  
`allow_nil?`| `boolean`| `true`| Whether or not the argument value may be nil (or may be not provided). If nil value is given error is raised.  
`public?`| `boolean`| `true`| Whether or not the argument should appear in public interfaces  
`sensitive?`| `boolean`| `false`| Whether or not the argument value contains sensitive information, like PII. See the [security guide](external_link) for more.  
`default`| `any`| | The default value for the argument to take. It can be a zero argument function e.g `&MyMod.my_fun/0` or a value  
  
###  __ Introspection

Target: [`Ash.Resource.Actions.Argument`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Actions.Action`](external_link)

##  __ actions.create
    
    
    create name

Declares a `create` action. For calling this action, see the [`Ash.Domain`](external_link) documentation.

###  __ Nested DSLs

  * change
  * validate
  * argument
  * metadata



###  __ Examples
    
    
    create :register do
      primary? true
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the action  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`manual`| `(any, any -> any) | module`| | Override the creation behavior. Accepts a module or module and opts, or a function that takes the changeset and context. See the [manual actions guide](external_link) for more.  
`upsert?`| `boolean`| `false`| Forces all uses of this action to be treated as an upsert.  
`upsert_identity`| `atom`| | The identity to use for the upsert. Cannot be overriden by the caller. Ignored if `upsert?` is not set to `true`.  
`upsert_fields`| `:replace_all | {:replace, atom | list(atom)} | {:replace_all_except, atom | list(atom)} | atom | list(atom)`| | The fields to overwrite in the case of an upsert. If not provided, all fields except for fields set by defaults will be overwritten.  
`upsert_condition`| `any`| | An expression to check if the record should be updated when there's a conflict.  
`primary?`| `boolean`| `false`| Whether or not this action should be used when no action is specified by the caller.  
`description`| `String.t`| | An optional description for the action  
`transaction?`| `boolean`| | Whether or not the action should be run in transactions. Reads default to false, while create/update/destroy actions default to `true`.  
`touches_resources`| `list(atom)`| | A list of resources that the action may touch, used when building transactions.  
`skip_unknown_inputs`| `atom | String.t | list(atom | String.t)`| `[]`| A list of unknown fields to skip, or `:*` to skip all unknown fields.  
`accept`| `atom | list(atom) | :*`| | The list of attributes to accept. Use `:*` to accept all public attributes.  
`require_attributes`| `list(atom)`| | A list of attributes that would normally `allow_nil?`, to require for this action. No need to include attributes that already do not allow nil?  
`allow_nil_input`| `list(atom)`| | A list of attributes that would normally be required, but should not be for this action. They will still be validated just before the data layer step.  
`delay_global_validations?`| `boolean`| `false`| If true, global validations will be done in a `before_action` hook, regardless of their configuration on the resource.  
`skip_global_validations?`| `boolean`| `false`| If true, global validations will be skipped. Useful for manual actions.  
`error_handler`| `mfa`| | Sets the error handler on the changeset. See [`Ash.Changeset.handle_errors/2`](external_link) for more  
`notifiers`| `list(module)`| | Notifiers that will be called specifically for this action.  
`manual?`| `boolean`| | Instructs Ash to _skip_ the actual update/create/destroy step at the data layer. See the [manual actions guide](external_link) for more.  
  
##  __ actions.create.change
    
    
    change change

A change to be applied to the changeset.

See [`Ash.Resource.Change`](external_link) for more.

###  __ Examples
    
    
    change relate_actor(:reporter)
    
    
    change {MyCustomChange, :foo}

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`change`| `(any, any -> any) | module`| | The module and options for a change. Also accepts a function that takes the changeset and the context. See [`Ash.Resource.Change.Builtins`](external_link) for builtin changes.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`only_when_valid?`| `boolean`| `false`| If the change should only be run on valid changes. By default, all changes are run unless stated otherwise here.  
`description`| `String.t`| | An optional description for the change  
`where`| `(any, any -> any) | module | list((any, any -> any) | module)`| `[]`| Validations that should pass in order for this change to apply. These validations failing will result in this change being ignored.  
`always_atomic?`| `boolean`| `false`| By default, changes are only run atomically if all changes will be run atomically or if there is no `change/3` callback defined. Set this to `true` to run it atomically always.  
  
###  __ Introspection

Target: [`Ash.Resource.Change`](external_link)

##  __ actions.create.validate
    
    
    validate validation

Declares a validation to be applied to the changeset.

See [`Ash.Resource.Validation`](external_link) for more.

###  __ Examples
    
    
    validate changing(:email)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`validation`| `(any, any -> any) | module`| | The module (or module and opts) that implements the [`Ash.Resource.Validation`](external_link) behaviour. Also accepts a function that receives the changeset and its context.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`where`| `(any, any -> any) | module | list((any, any -> any) | module)`| `[]`| Validations that should pass in order for this validation to apply. Any of these validations failing will result in this validation being ignored.  
`only_when_valid?`| `boolean`| `false`| If the validation should only run on valid changes. Useful for expensive validations or validations that depend on valid data.  
`message`| `String.t`| | If provided, overrides any message set by the validation error  
`description`| `String.t`| | An optional description for the validation  
`before_action?`| `boolean`| `false`| If set to `true`, the validation will be run in a before_action hook  
`always_atomic?`| `boolean`| `false`| By default, validations are only run atomically if all changes will be run atomically or if there is no `validate/3` callback defined. Set this to `true` to run it atomically always.  
  
###  __ Introspection

Target: [`Ash.Resource.Validation`](external_link)

##  __ actions.create.argument
    
    
    argument name, type

Declares an argument on the action

###  __ Examples
    
    
    argument :password_confirmation, :string

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the argument  
`type`| `module`| | The type of the argument. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | An optional description for the argument.  
`constraints`| `keyword`| `[]`| Constraints to provide to the type when casting the value. For more information, see [`Ash.Type`](external_link).  
`allow_nil?`| `boolean`| `true`| Whether or not the argument value may be nil (or may be not provided). If nil value is given error is raised.  
`public?`| `boolean`| `true`| Whether or not the argument should appear in public interfaces  
`sensitive?`| `boolean`| `false`| Whether or not the argument value contains sensitive information, like PII. See the [security guide](external_link) for more.  
`default`| `any`| | The default value for the argument to take. It can be a zero argument function e.g `&MyMod.my_fun/0` or a value  
  
###  __ Introspection

Target: [`Ash.Resource.Actions.Argument`](external_link)

##  __ actions.create.metadata
    
    
    metadata name, type

A special kind of attribute that is only added to specific actions. Nothing sets this value, it must be set in a custom change after_action hook via [`Ash.Resource.put_metadata/3`](external_link).

###  __ Examples
    
    
    metadata :api_token, :string, allow_nil?: false
    
    
    
    metadata :operation_id, :string, allow_nil?: false
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the metadata  
`type`| `any`| | The type of the metadata. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`constraints`| `keyword`| `[]`| Type constraints on the metadata  
`description`| `String.t`| | An optional description for the metadata.  
`allow_nil?`| `boolean`| `true`| Whether or not the metadata may return `nil`  
`default`| `any`| | The default value for the metadata to take. It can be a zero argument function e.g `&MyMod.my_fun/0` or a value  
  
###  __ Introspection

Target: [`Ash.Resource.Actions.Metadata`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Actions.Create`](external_link)

##  __ actions.read
    
    
    read name

Declares a `read` action. For calling this action, see the [`Ash.Domain`](external_link) documentation.

###  __ Nested DSLs

  * argument
  * prepare
  * pagination
  * metadata
  * filter



###  __ Examples
    
    
    read :read_all do
      primary? true
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the action  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`manual`| `(any, any, any -> any) | module`| | Delegates running of the query to the provided module. Accepts a module or module and opts, or a function that takes the ash query, the data layer query, and context. See the [manual actions guide](external_link) for more.  
`get?`| `boolean`| `false`| Expresses that this action innately only returns a single result. Used by extensions to validate and/or modify behavior. Causes code interfaces to return a single value instead of a list. See the [code interface guide](external_link) for more.  
`modify_query`| `mfa | (any, any -> any)`| | Allows direct manipulation of the data layer query via an MFA. The ash query and the data layer query will be provided as additional arguments. The result must be `{:ok, new_data_layer_query} | {:error, error}`.  
`get_by`| `atom | list(atom)`| | A helper to automatically generate a "get by X" action. Sets `get?` to true, add args for each of the specified fields, and adds a filter for each of the arguments.  
`timeout`| `pos_integer`| | The maximum amount of time, in milliseconds, that the action is allowed to run for. Ignored if the data layer doesn't support transactions _and_ async is disabled.  
`multitenancy`| `:enforce | :allow_global | :bypass`| `:enforce`| This setting defines how this action handles multitenancy. `:enforce` requires a tenant to be set (the default behavior), `:allow_global` allows using this action both with and without a tenant, `:bypass` completely ignores the tenant even if it's set. This is useful to change the behaviour of selected read action without the need of marking the whole resource with `global? true`.  
`primary?`| `boolean`| `false`| Whether or not this action should be used when no action is specified by the caller.  
`description`| `String.t`| | An optional description for the action  
`transaction?`| `boolean`| | Whether or not the action should be run in transactions. Reads default to false, while create/update/destroy actions default to `true`.  
`touches_resources`| `list(atom)`| | A list of resources that the action may touch, used when building transactions.  
`skip_unknown_inputs`| `atom | String.t | list(atom | String.t)`| `[]`| A list of unknown fields to skip, or `:*` to skip all unknown fields.  
  
##  __ actions.read.argument
    
    
    argument name, type

Declares an argument on the action

###  __ Examples
    
    
    argument :password_confirmation, :string

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the argument  
`type`| `module`| | The type of the argument. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | An optional description for the argument.  
`constraints`| `keyword`| `[]`| Constraints to provide to the type when casting the value. For more information, see [`Ash.Type`](external_link).  
`allow_nil?`| `boolean`| `true`| Whether or not the argument value may be nil (or may be not provided). If nil value is given error is raised.  
`public?`| `boolean`| `true`| Whether or not the argument should appear in public interfaces  
`sensitive?`| `boolean`| `false`| Whether or not the argument value contains sensitive information, like PII. See the [security guide](external_link) for more.  
`default`| `any`| | The default value for the argument to take. It can be a zero argument function e.g `&MyMod.my_fun/0` or a value  
  
###  __ Introspection

Target: [`Ash.Resource.Actions.Argument`](external_link)

##  __ actions.read.prepare
    
    
    prepare preparation

Declares a preparation, which can be used to prepare a query for a read action.

###  __ Examples
    
    
    prepare build(sort: [:foo, :bar])
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`preparation`| `(any, any -> any) | module`| | The module and options for a preparation. Also accepts functions take the query and the context.  
  
###  __ Introspection

Target: [`Ash.Resource.Preparation`](external_link)

##  __ actions.read.pagination

Adds pagination options to a resource

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`keyset?`| `boolean`| `false`| Whether or not keyset based pagination is supported  
`offset?`| `boolean`| `false`| Whether or not offset based pagination is supported  
`default_limit`| `pos_integer`| | The default page size to apply, if one is not supplied  
`countable`| `true | false | :by_default`| `true`| Whether not a returned page will have a full count of all records. Use `:by_default` to do it automatically.  
`max_page_size`| `pos_integer`| `250`| The maximum amount of records that can be requested in a single page  
`required?`| `boolean`| `true`| Whether or not pagination can be disabled (by passing `page: false` to `Ash.Api.read!/2`, or by having `required?: false, default_limit: nil` set). Only relevant if some pagination configuration is supplied.  
  
###  __ Introspection

Target: [`Ash.Resource.Actions.Read.Pagination`](external_link)

##  __ actions.read.metadata
    
    
    metadata name, type

A special kind of attribute that is only added to specific actions. Nothing sets this value, it must be set in a custom change after_action hook via [`Ash.Resource.put_metadata/3`](external_link).

###  __ Examples
    
    
    metadata :api_token, :string, allow_nil?: false
    
    
    
    metadata :operation_id, :string, allow_nil?: false
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the metadata  
`type`| `any`| | The type of the metadata. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`constraints`| `keyword`| `[]`| Type constraints on the metadata  
`description`| `String.t`| | An optional description for the metadata.  
`allow_nil?`| `boolean`| `true`| Whether or not the metadata may return `nil`  
`default`| `any`| | The default value for the metadata to take. It can be a zero argument function e.g `&MyMod.my_fun/0` or a value  
  
###  __ Introspection

Target: [`Ash.Resource.Actions.Metadata`](external_link)

##  __ actions.read.filter
    
    
    filter filter

Applies a filter. Can use [`^arg/1`](external_link), [`^context/1`](external_link) and [`^actor/1`](external_link) teplates. Multiple filters are combined with _and_.

###  __ Examples
    
    
    filter expr(first_name == "fred")
    filter expr(last_name == "weasley" and magician == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`filter`| `any`| | The filter to apply. Can use [`^arg/1`](external_link), [`^context/1`](external_link) and [`^actor/1`](external_link) teplates. Multiple filters are combined with _and_.  
  
###  __ Introspection

Target: [`Ash.Resource.Dsl.Filter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Actions.Read`](external_link)

##  __ actions.update
    
    
    update name

Declares a `update` action. For calling this action, see the [`Ash.Domain`](external_link) documentation.

###  __ Nested DSLs

  * change
  * validate
  * metadata
  * argument



###  __ Examples
    
    
    update :flag_for_review, primary?: true

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the action  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`manual`| `(any, any -> any) | module`| | Override the update behavior. Accepts a module or module and opts, or a function that takes the changeset and context. See the [manual actions guide](external_link) for more.  
`require_atomic?`| `boolean`| `true`| Require that the update be atomic. This means that all changes and validations implement the `atomic` callback. See the guide on atomic updates for more.  
`atomic_upgrade?`| `boolean`| `false`| If set to `true`, atomic upgrades will be performed. Ignored if `required_atomic?` is `true`. See the update actions guide for more.  
`atomic_upgrade_with`| `atom | nil`| | Configure the read action used when performing atomic upgrades. Defaults to the primary read action.  
`primary?`| `boolean`| `false`| Whether or not this action should be used when no action is specified by the caller.  
`description`| `String.t`| | An optional description for the action  
`transaction?`| `boolean`| | Whether or not the action should be run in transactions. Reads default to false, while create/update/destroy actions default to `true`.  
`touches_resources`| `list(atom)`| | A list of resources that the action may touch, used when building transactions.  
`skip_unknown_inputs`| `atom | String.t | list(atom | String.t)`| `[]`| A list of unknown fields to skip, or `:*` to skip all unknown fields.  
`accept`| `atom | list(atom) | :*`| | The list of attributes to accept. Use `:*` to accept all public attributes.  
`require_attributes`| `list(atom)`| | A list of attributes that would normally `allow_nil?`, to require for this action. No need to include attributes that already do not allow nil?  
`allow_nil_input`| `list(atom)`| | A list of attributes that would normally be required, but should not be for this action. They will still be validated just before the data layer step.  
`delay_global_validations?`| `boolean`| `false`| If true, global validations will be done in a `before_action` hook, regardless of their configuration on the resource.  
`skip_global_validations?`| `boolean`| `false`| If true, global validations will be skipped. Useful for manual actions.  
`error_handler`| `mfa`| | Sets the error handler on the changeset. See [`Ash.Changeset.handle_errors/2`](external_link) for more  
`notifiers`| `list(module)`| | Notifiers that will be called specifically for this action.  
`manual?`| `boolean`| | Instructs Ash to _skip_ the actual update/create/destroy step at the data layer. See the [manual actions guide](external_link) for more.  
  
##  __ actions.update.change
    
    
    change change

A change to be applied to the changeset.

See [`Ash.Resource.Change`](external_link) for more.

###  __ Examples
    
    
    change relate_actor(:reporter)
    
    
    change {MyCustomChange, :foo}

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`change`| `(any, any -> any) | module`| | The module and options for a change. Also accepts a function that takes the changeset and the context. See [`Ash.Resource.Change.Builtins`](external_link) for builtin changes.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`only_when_valid?`| `boolean`| `false`| If the change should only be run on valid changes. By default, all changes are run unless stated otherwise here.  
`description`| `String.t`| | An optional description for the change  
`where`| `(any, any -> any) | module | list((any, any -> any) | module)`| `[]`| Validations that should pass in order for this change to apply. These validations failing will result in this change being ignored.  
`always_atomic?`| `boolean`| `false`| By default, changes are only run atomically if all changes will be run atomically or if there is no `change/3` callback defined. Set this to `true` to run it atomically always.  
  
###  __ Introspection

Target: [`Ash.Resource.Change`](external_link)

##  __ actions.update.validate
    
    
    validate validation

Declares a validation to be applied to the changeset.

See [`Ash.Resource.Validation`](external_link) for more.

###  __ Examples
    
    
    validate changing(:email)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`validation`| `(any, any -> any) | module`| | The module (or module and opts) that implements the [`Ash.Resource.Validation`](external_link) behaviour. Also accepts a function that receives the changeset and its context.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`where`| `(any, any -> any) | module | list((any, any -> any) | module)`| `[]`| Validations that should pass in order for this validation to apply. Any of these validations failing will result in this validation being ignored.  
`only_when_valid?`| `boolean`| `false`| If the validation should only run on valid changes. Useful for expensive validations or validations that depend on valid data.  
`message`| `String.t`| | If provided, overrides any message set by the validation error  
`description`| `String.t`| | An optional description for the validation  
`before_action?`| `boolean`| `false`| If set to `true`, the validation will be run in a before_action hook  
`always_atomic?`| `boolean`| `false`| By default, validations are only run atomically if all changes will be run atomically or if there is no `validate/3` callback defined. Set this to `true` to run it atomically always.  
  
###  __ Introspection

Target: [`Ash.Resource.Validation`](external_link)

##  __ actions.update.metadata
    
    
    metadata name, type

A special kind of attribute that is only added to specific actions. Nothing sets this value, it must be set in a custom change after_action hook via [`Ash.Resource.put_metadata/3`](external_link).

###  __ Examples
    
    
    metadata :api_token, :string, allow_nil?: false
    
    
    
    metadata :operation_id, :string, allow_nil?: false
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the metadata  
`type`| `any`| | The type of the metadata. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`constraints`| `keyword`| `[]`| Type constraints on the metadata  
`description`| `String.t`| | An optional description for the metadata.  
`allow_nil?`| `boolean`| `true`| Whether or not the metadata may return `nil`  
`default`| `any`| | The default value for the metadata to take. It can be a zero argument function e.g `&MyMod.my_fun/0` or a value  
  
###  __ Introspection

Target: [`Ash.Resource.Actions.Metadata`](external_link)

##  __ actions.update.argument
    
    
    argument name, type

Declares an argument on the action

###  __ Examples
    
    
    argument :password_confirmation, :string

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the argument  
`type`| `module`| | The type of the argument. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | An optional description for the argument.  
`constraints`| `keyword`| `[]`| Constraints to provide to the type when casting the value. For more information, see [`Ash.Type`](external_link).  
`allow_nil?`| `boolean`| `true`| Whether or not the argument value may be nil (or may be not provided). If nil value is given error is raised.  
`public?`| `boolean`| `true`| Whether or not the argument should appear in public interfaces  
`sensitive?`| `boolean`| `false`| Whether or not the argument value contains sensitive information, like PII. See the [security guide](external_link) for more.  
`default`| `any`| | The default value for the argument to take. It can be a zero argument function e.g `&MyMod.my_fun/0` or a value  
  
###  __ Introspection

Target: [`Ash.Resource.Actions.Argument`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Actions.Update`](external_link)

##  __ actions.destroy
    
    
    destroy name

Declares a `destroy` action. For calling this action, see the [`Ash.Domain`](external_link) documentation.

###  __ Nested DSLs

  * change
  * validate
  * metadata
  * argument



###  __ Examples
    
    
    destroy :soft_delete do
      primary? true
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the action  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`soft?`| `boolean`| `false`| If specified, the destroy action behaves as an update internally  
`manual`| `(any, any -> any) | module`| | Override the update behavior. Accepts a module or module and opts, or a function that takes the changeset and context. See the [manual actions guide](external_link) for more.  
`require_atomic?`| `boolean`| `true`| Require that the update be atomic. Only relevant if `soft?` is set to `true`. This means that all changes and validations implement the `atomic` callback. See the guide on atomic updates for more.  
`atomic_upgrade?`| `boolean`| `false`| If set to `true`, atomic upgrades will be performed. See the update actions guide for more.  
`atomic_upgrade_with`| `atom | nil`| | Configure the read action used when performing atomic upgrades. Defaults to the primary read action.  
`primary?`| `boolean`| `false`| Whether or not this action should be used when no action is specified by the caller.  
`description`| `String.t`| | An optional description for the action  
`transaction?`| `boolean`| | Whether or not the action should be run in transactions. Reads default to false, while create/update/destroy actions default to `true`.  
`touches_resources`| `list(atom)`| | A list of resources that the action may touch, used when building transactions.  
`skip_unknown_inputs`| `atom | String.t | list(atom | String.t)`| `[]`| A list of unknown fields to skip, or `:*` to skip all unknown fields.  
`accept`| `atom | list(atom) | :*`| | The list of attributes to accept. Use `:*` to accept all public attributes.  
`require_attributes`| `list(atom)`| | A list of attributes that would normally `allow_nil?`, to require for this action. No need to include attributes that already do not allow nil?  
`allow_nil_input`| `list(atom)`| | A list of attributes that would normally be required, but should not be for this action. They will still be validated just before the data layer step.  
`delay_global_validations?`| `boolean`| `false`| If true, global validations will be done in a `before_action` hook, regardless of their configuration on the resource.  
`skip_global_validations?`| `boolean`| `false`| If true, global validations will be skipped. Useful for manual actions.  
`error_handler`| `mfa`| | Sets the error handler on the changeset. See [`Ash.Changeset.handle_errors/2`](external_link) for more  
`notifiers`| `list(module)`| | Notifiers that will be called specifically for this action.  
`manual?`| `boolean`| | Instructs Ash to _skip_ the actual update/create/destroy step at the data layer. See the [manual actions guide](external_link) for more.  
  
##  __ actions.destroy.change
    
    
    change change

A change to be applied to the changeset.

See [`Ash.Resource.Change`](external_link) for more.

###  __ Examples
    
    
    change relate_actor(:reporter)
    
    
    change {MyCustomChange, :foo}

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`change`| `(any, any -> any) | module`| | The module and options for a change. Also accepts a function that takes the changeset and the context. See [`Ash.Resource.Change.Builtins`](external_link) for builtin changes.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`only_when_valid?`| `boolean`| `false`| If the change should only be run on valid changes. By default, all changes are run unless stated otherwise here.  
`description`| `String.t`| | An optional description for the change  
`where`| `(any, any -> any) | module | list((any, any -> any) | module)`| `[]`| Validations that should pass in order for this change to apply. These validations failing will result in this change being ignored.  
`always_atomic?`| `boolean`| `false`| By default, changes are only run atomically if all changes will be run atomically or if there is no `change/3` callback defined. Set this to `true` to run it atomically always.  
  
###  __ Introspection

Target: [`Ash.Resource.Change`](external_link)

##  __ actions.destroy.validate
    
    
    validate validation

Declares a validation to be applied to the changeset.

See [`Ash.Resource.Validation`](external_link) for more.

###  __ Examples
    
    
    validate changing(:email)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`validation`| `(any, any -> any) | module`| | The module (or module and opts) that implements the [`Ash.Resource.Validation`](external_link) behaviour. Also accepts a function that receives the changeset and its context.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`where`| `(any, any -> any) | module | list((any, any -> any) | module)`| `[]`| Validations that should pass in order for this validation to apply. Any of these validations failing will result in this validation being ignored.  
`only_when_valid?`| `boolean`| `false`| If the validation should only run on valid changes. Useful for expensive validations or validations that depend on valid data.  
`message`| `String.t`| | If provided, overrides any message set by the validation error  
`description`| `String.t`| | An optional description for the validation  
`before_action?`| `boolean`| `false`| If set to `true`, the validation will be run in a before_action hook  
`always_atomic?`| `boolean`| `false`| By default, validations are only run atomically if all changes will be run atomically or if there is no `validate/3` callback defined. Set this to `true` to run it atomically always.  
  
###  __ Introspection

Target: [`Ash.Resource.Validation`](external_link)

##  __ actions.destroy.metadata
    
    
    metadata name, type

A special kind of attribute that is only added to specific actions. Nothing sets this value, it must be set in a custom change after_action hook via [`Ash.Resource.put_metadata/3`](external_link).

###  __ Examples
    
    
    metadata :api_token, :string, allow_nil?: false
    
    
    
    metadata :operation_id, :string, allow_nil?: false
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the metadata  
`type`| `any`| | The type of the metadata. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`constraints`| `keyword`| `[]`| Type constraints on the metadata  
`description`| `String.t`| | An optional description for the metadata.  
`allow_nil?`| `boolean`| `true`| Whether or not the metadata may return `nil`  
`default`| `any`| | The default value for the metadata to take. It can be a zero argument function e.g `&MyMod.my_fun/0` or a value  
  
###  __ Introspection

Target: [`Ash.Resource.Actions.Metadata`](external_link)

##  __ actions.destroy.argument
    
    
    argument name, type

Declares an argument on the action

###  __ Examples
    
    
    argument :password_confirmation, :string

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the argument  
`type`| `module`| | The type of the argument. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | An optional description for the argument.  
`constraints`| `keyword`| `[]`| Constraints to provide to the type when casting the value. For more information, see [`Ash.Type`](external_link).  
`allow_nil?`| `boolean`| `true`| Whether or not the argument value may be nil (or may be not provided). If nil value is given error is raised.  
`public?`| `boolean`| `true`| Whether or not the argument should appear in public interfaces  
`sensitive?`| `boolean`| `false`| Whether or not the argument value contains sensitive information, like PII. See the [security guide](external_link) for more.  
`default`| `any`| | The default value for the argument to take. It can be a zero argument function e.g `&MyMod.my_fun/0` or a value  
  
###  __ Introspection

Target: [`Ash.Resource.Actions.Argument`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Actions.Destroy`](external_link)

##  __ code_interface

Functions that will be defined on the resource. See the [code interface guide](external_link) for more.

###  __ Nested DSLs

  * define
  * define_calculation



###  __ Examples
    
    
    code_interface do
      define :create_user, action: :create
      define :get_user_by_id, action: :get_by_id, args: [:id], get?: true
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`domain`| `module`| `false`| Use the provided Domain instead of the resources configured domain when calling actions.  
`define?`| `boolean`| | Whether or not to define the code interface in the resource.  
  
##  __ code_interface.define
    
    
    define name

Defines a function with the corresponding name and arguments. See the [code interface guide](external_link) for more.

###  __ Examples
    
    
    define :get_user_by_id, action: :get_by_id, args: [:id], get?: true

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the function that will be defined  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`action`| `atom`| | The name of the action that will be called. Defaults to the same name as the function.  
`args`| `list(atom | {:optional, atom})`| | Map specific arguments to named inputs. Can provide any argument/attributes that the action allows.  
`not_found_error?`| `boolean`| `true`| If the action or interface is configured with `get?: true`, this determines whether or not an error is raised or `nil` is returned.  
`require_reference?`| `boolean`| `true`| For update and destroy actions, require a resource or identifier to be passed in as the first argument. Not relevant for other action types.  
`get?`| `boolean`| `false`| Expects to only receive a single result from a read action or a bulk update/destroy, and returns a single result instead of a list. Sets `require_reference?` to false automatically.  
`get_by`| `atom | list(atom)`| | Takes a list of fields and adds those fields as arguments, which will then be used to filter. Sets `get?` to true and `require_reference?` to false automatically. Adds filters for read, update and destroy actions, replacing the `record` first argument.  
`get_by_identity`| `atom`| | Takes an identity, gets its field list, and performs the same logic as `get_by` with those fields. Adds filters for read, update and destroy actions, replacing the `record` first argument.  
  
###  __ Introspection

Target: [`Ash.Resource.Interface`](external_link)

##  __ code_interface.define_calculation
    
    
    define_calculation name

Defines a function with the corresponding name and arguments, that evaluates a calculation. Use `:_record` to take an instance of a record. See the [code interface guide](external_link) for more.

###  __ Examples
    
    
    define_calculation :referral_link, args: [:id]
    
    
    define_calculation :referral_link, args: [{:arg, :id}, {:ref, :id}]

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the function that will be defined  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`calculation`| `atom`| | The name of the calculation that will be evaluated. Defaults to the same name as the function.  
`args`| `any`| `[]`| Supply field or argument values referenced by the calculation, in the form of :name, `{:arg, :name}` and/or `{:ref, :name}`. See the [code interface guide](external_link) for more.  
  
###  __ Introspection

Target: [`Ash.Resource.CalculationInterface`](external_link)

##  __ resource

General resource configuration

###  __ Examples
    
    
    resource do
      description "A description of this resource"
      base_filter [is_nil: :deleted_at]
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`description`| `String.t`| | A human readable description of the resource, to be used in generated documentation  
`base_filter`| `any`| | A filter statement to be applied to any queries on the resource  
`default_context`| `any`| | Default context to apply to any queries/changesets generated for this resource.  
`trace_name`| `String.t`| | The name to use in traces. Defaults to the short_name stringified. See the [monitoring guide](external_link) for more.  
`short_name`| `atom`| | A short identifier for the resource, which should be unique. See the [monitoring guide](external_link) for more.  
`plural_name`| `atom`| | A pluralized version of the resource short_name. May be used by generators or automated tooling.  
`require_primary_key?`| `boolean`| `true`| Allow the resource to be used without any primary key fields. Warning: this option is experimental, and should not be used unless you know what you're doing.  
  
##  __ identities

Unique identifiers for the resource

###  __ Nested DSLs

  * identity



###  __ Examples
    
    
    identities do
      identity :full_name, [:first_name, :last_name]
      identity :email, [:email]
    end
    

##  __ identities.identity
    
    
    identity name, keys

Represents a unique constraint on the resource.

See the [identities guide](external_link) for more.

###  __ Examples
    
    
    identity :name, [:name]
    
    
    identity :full_name, [:first_name, :last_name]

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the identity.  
`keys`| `atom | list(atom)`| | The names of the attributes that uniquely identify this resource.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`where`| `any`| | A filter that expresses only matching records are unique on the provided keys. Ignored on embedded resources.  
`nils_distinct?`| `boolean`| `true`| Whether or not `nil` values are considered always distinct from eachother. `nil` values won't conflict with eachother unless you set this option to `false`.  
`eager_check?`| `boolean`| `false`| Whether or not this identity is validated to be unique at validation time.  
`eager_check_with`| `module`| | Validates that the unique identity provided is unique at validation time, outside of any transactions, using the domain module provided. Will default to resource's domain.  
`pre_check?`| `boolean`| `false`| Whether or not this identity is validated to be unique in a before_action hook.  
`pre_check_with`| `module`| | Validates that the unique identity provided is unique in a before_action hook.  
`description`| `String.t`| | An optional description for the identity  
`message`| `String.t`| | An error message to use when the unique identity would be violated  
`all_tenants?`| `boolean`| `false`| Whether or not this identity is unique across all tenants. If the resource is not multitenant, has no effect.  
  
###  __ Introspection

Target: [`Ash.Resource.Identity`](external_link)

##  __ changes

Declare changes that occur on create/update/destroy actions against the resource

See [`Ash.Resource.Change`](external_link) for more.

###  __ Nested DSLs

  * change



###  __ Examples
    
    
    changes do
      change {Mod, [foo: :bar]}
      change set_context(%{some: :context})
    end
    

##  __ changes.change
    
    
    change change

A change to be applied to the changeset.

See [`Ash.Resource.Change`](external_link) for more.

###  __ Examples
    
    
    change relate_actor(:reporter)
    
    
    change {MyCustomChange, :foo}

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`change`| `(any, any -> any) | module`| | The module and options for a change. Also accepts a function that takes the changeset and the context. See [`Ash.Resource.Change.Builtins`](external_link) for builtin changes.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`on`| `:create | :update | :destroy | list(:create | :update | :destroy)`| `[:create, :update]`| The action types the change should run on. Destroy actions are omitted by default as most changes don't make sense for a destroy.  
`only_when_valid?`| `boolean`| `false`| If the change should only be run on valid changes. By default, all changes are run unless stated otherwise here.  
`description`| `String.t`| | An optional description for the change  
`where`| `(any, any -> any) | module | list((any, any -> any) | module)`| `[]`| Validations that should pass in order for this change to apply. These validations failing will result in this change being ignored.  
`always_atomic?`| `boolean`| `false`| By default, changes are only run atomically if all changes will be run atomically or if there is no `change/3` callback defined. Set this to `true` to run it atomically always.  
  
###  __ Introspection

Target: [`Ash.Resource.Change`](external_link)

##  __ preparations

Declare preparations that occur on all read actions for a given resource

###  __ Nested DSLs

  * prepare



###  __ Examples
    
    
    preparations do
      prepare {Mod, [foo: :bar]}
      prepare set_context(%{some: :context})
    end
    

##  __ preparations.prepare
    
    
    prepare preparation

Declares a preparation, which can be used to prepare a query for a read action.

###  __ Examples
    
    
    prepare build(sort: [:foo, :bar])
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`preparation`| `(any, any -> any) | module`| | The module and options for a preparation. Also accepts functions take the query and the context.  
  
###  __ Introspection

Target: [`Ash.Resource.Preparation`](external_link)

##  __ validations

Declare validations prior to performing actions against the resource

###  __ Nested DSLs

  * validate



###  __ Examples
    
    
    validations do
      validate {Mod, [foo: :bar]}
      validate at_least_one_of_present([:first_name, :last_name])
    end
    

##  __ validations.validate
    
    
    validate validation

Declares a validation for creates and updates.

See [`Ash.Resource.Change`](external_link) for more.

###  __ Examples
    
    
    validate {Mod, [foo: :bar]}
    
    
    validate at_least_one_of_present([:first_name, :last_name])

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`validation`| `(any, any -> any) | module`| | The module (or module and opts) that implements the [`Ash.Resource.Validation`](external_link) behaviour. Also accepts a function that receives the changeset and its context.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`where`| `(any, any -> any) | module | list((any, any -> any) | module)`| `[]`| Validations that should pass in order for this validation to apply. Any of these validations failing will result in this validation being ignored.  
`on`| `:create | :update | :destroy | list(:create | :update | :destroy)`| `[:create, :update]`| The action types the validation should run on. Many validations don't make sense in the context of deletion, so by default it is not included.  
`only_when_valid?`| `boolean`| `false`| If the validation should only run on valid changes. Useful for expensive validations or validations that depend on valid data.  
`message`| `String.t`| | If provided, overrides any message set by the validation error  
`description`| `String.t`| | An optional description for the validation  
`before_action?`| `boolean`| `false`| If set to `true`, the validation will be run in a before_action hook  
`always_atomic?`| `boolean`| `false`| By default, validations are only run atomically if all changes will be run atomically or if there is no `validate/3` callback defined. Set this to `true` to run it atomically always.  
  
###  __ Introspection

Target: [`Ash.Resource.Validation`](external_link)

##  __ aggregates

Declare named aggregates on the resource.

These are aggregates that can be loaded only by name using [`Ash.Query.load/2`](external_link). They are also available as top level fields on the resource.

See the [aggregates guide](external_link) for more.

###  __ Nested DSLs

  * count
    * join_filter
  * exists
    * join_filter
  * first
    * join_filter
  * sum
    * join_filter
  * list
    * join_filter
  * max
    * join_filter
  * min
    * join_filter
  * avg
    * join_filter
  * custom
    * join_filter



###  __ Examples
    
    
    aggregates do
      count :assigned_ticket_count, :reported_tickets do
        filter [active: true]
      end
    end
    

##  __ aggregates.count
    
    
    count name, relationship_path

Declares a named count aggregate on the resource

Supports `filter`, but not `sort` (because that wouldn't affect the count)

See the [aggregates guide](external_link) for more.

###  __ Nested DSLs

  * join_filter



###  __ Examples
    
    
    count :assigned_ticket_count, :assigned_tickets do
      filter [active: true]
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The field to place the aggregate in  
`relationship_path`| `atom | list(atom)`| | The relationship or relationship path to use for the aggregate  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`uniq?`| `boolean`| `false`| Whether or not to count unique values only  
`read_action`| `atom`| | The read action to use when building the aggregate. Defaults to the primary read action. Keep in mind this action must not have any required arguments.  
`field`| `atom`| | The field to aggregate. Defaults to the first field in the primary key of the resource  
`filter`| `any`| `[]`| A filter to apply to the aggregate  
`description`| `String.t`| | An optional description for the aggregate  
`default`| `any`| | A default value to use in cases where nil would be used. Count defaults to `0`.  
`public?`| `boolean`| `false`| Whether or not the aggregate will appear in public interfaces  
`filterable?`| `boolean | :simple_equality`| `true`| Whether or not the aggregate should be usable in filters.  
`sortable?`| `boolean`| `true`| Whether or not the aggregate should be usable in sorts.  
`sensitive?`| `boolean`| `false`| Whether or not the aggregate should be considered sensitive.  
`authorize?`| `boolean`| `true`| Whether or not the aggregate query should authorize based on the target action, if the parent query is authorized. Requires filter checks on the target action.  
  
##  __ aggregates.count.join_filter
    
    
    join_filter relationship_path, filter

Declares a join filter on an aggregate. See the aggregates guide for more.

###  __ Examples
    
    
    join_filter [:comments, :author], expr(active == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`relationship_path`| `atom | list(atom)`| | The relationship path on which to apply the join filter  
`filter`| `any`| | The filter to apply. Can be an expression or a filter template.  
  
###  __ Introspection

Target: [`Ash.Resource.Aggregate.JoinFilter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Aggregate`](external_link)

##  __ aggregates.exists
    
    
    exists name, relationship_path

Declares a named `exists` aggregate on the resource

Supports `filter`, but not `sort` (because that wouldn't affect if something exists)

See the [aggregates guide](external_link) for more.

###  __ Nested DSLs

  * join_filter



###  __ Examples
    
    
    exists :has_ticket, :assigned_tickets
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The field to place the aggregate in  
`relationship_path`| `atom | list(atom)`| | The relationship or relationship path to use for the aggregate  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`read_action`| `atom`| | The read action to use when building the aggregate. Defaults to the primary read action. Keep in mind this action must not have any required arguments.  
`filter`| `any`| `[]`| A filter to apply to the aggregate  
`description`| `String.t`| | An optional description for the aggregate  
`default`| `any`| | A default value to use in cases where nil would be used. Count defaults to `0`.  
`public?`| `boolean`| `false`| Whether or not the aggregate will appear in public interfaces  
`filterable?`| `boolean | :simple_equality`| `true`| Whether or not the aggregate should be usable in filters.  
`sortable?`| `boolean`| `true`| Whether or not the aggregate should be usable in sorts.  
`sensitive?`| `boolean`| `false`| Whether or not the aggregate should be considered sensitive.  
`authorize?`| `boolean`| `true`| Whether or not the aggregate query should authorize based on the target action, if the parent query is authorized. Requires filter checks on the target action.  
  
##  __ aggregates.exists.join_filter
    
    
    join_filter relationship_path, filter

Declares a join filter on an aggregate. See the aggregates guide for more.

###  __ Examples
    
    
    join_filter [:comments, :author], expr(active == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`relationship_path`| `atom | list(atom)`| | The relationship path on which to apply the join filter  
`filter`| `any`| | The filter to apply. Can be an expression or a filter template.  
  
###  __ Introspection

Target: [`Ash.Resource.Aggregate.JoinFilter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Aggregate`](external_link)

##  __ aggregates.first
    
    
    first name, relationship_path, field

Declares a named `first` aggregate on the resource

First aggregates return the first value of the related record that matches. Supports both `filter` and `sort`.

See the [aggregates guide](external_link) for more.

###  __ Nested DSLs

  * join_filter



###  __ Examples
    
    
    first :first_assigned_ticket_subject, :assigned_tickets, :subject do
      filter [active: true]
      sort [:subject]
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The field to place the aggregate in  
`relationship_path`| `atom | list(atom)`| | The relationship or relationship path to use for the aggregate  
`field`| `atom`| | The field to aggregate. Defaults to the first field in the primary key of the resource  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`include_nil?`| `boolean`| `false`| Whether or not to include `nil` values in the aggregate. Only relevant for `list` and `first` aggregates.  
`read_action`| `atom`| | The read action to use when building the aggregate. Defaults to the primary read action. Keep in mind this action must not have any required arguments.  
`filter`| `any`| `[]`| A filter to apply to the aggregate  
`sort`| `any`| | A sort to be applied to the aggregate  
`description`| `String.t`| | An optional description for the aggregate  
`default`| `any`| | A default value to use in cases where nil would be used. Count defaults to `0`.  
`public?`| `boolean`| `false`| Whether or not the aggregate will appear in public interfaces  
`filterable?`| `boolean | :simple_equality`| `true`| Whether or not the aggregate should be usable in filters.  
`sortable?`| `boolean`| `true`| Whether or not the aggregate should be usable in sorts.  
`sensitive?`| `boolean`| `false`| Whether or not the aggregate should be considered sensitive.  
`authorize?`| `boolean`| `true`| Whether or not the aggregate query should authorize based on the target action, if the parent query is authorized. Requires filter checks on the target action.  
  
##  __ aggregates.first.join_filter
    
    
    join_filter relationship_path, filter

Declares a join filter on an aggregate. See the aggregates guide for more.

###  __ Examples
    
    
    join_filter [:comments, :author], expr(active == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`relationship_path`| `atom | list(atom)`| | The relationship path on which to apply the join filter  
`filter`| `any`| | The filter to apply. Can be an expression or a filter template.  
  
###  __ Introspection

Target: [`Ash.Resource.Aggregate.JoinFilter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Aggregate`](external_link)

##  __ aggregates.sum
    
    
    sum name, relationship_path, field

Declares a named `sum` aggregate on the resource

Supports `filter`, but not `sort` (because that wouldn't affect the sum)

See the [aggregates guide](external_link) for more.

###  __ Nested DSLs

  * join_filter



###  __ Examples
    
    
    sum :assigned_ticket_price_sum, :assigned_tickets, :price do
      filter [active: true]
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The field to place the aggregate in  
`relationship_path`| `atom | list(atom)`| | The relationship or relationship path to use for the aggregate  
`field`| `atom`| | The field to aggregate. Defaults to the first field in the primary key of the resource  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`read_action`| `atom`| | The read action to use when building the aggregate. Defaults to the primary read action. Keep in mind this action must not have any required arguments.  
`filter`| `any`| `[]`| A filter to apply to the aggregate  
`description`| `String.t`| | An optional description for the aggregate  
`default`| `any`| | A default value to use in cases where nil would be used. Count defaults to `0`.  
`public?`| `boolean`| `false`| Whether or not the aggregate will appear in public interfaces  
`filterable?`| `boolean | :simple_equality`| `true`| Whether or not the aggregate should be usable in filters.  
`sortable?`| `boolean`| `true`| Whether or not the aggregate should be usable in sorts.  
`sensitive?`| `boolean`| `false`| Whether or not the aggregate should be considered sensitive.  
`authorize?`| `boolean`| `true`| Whether or not the aggregate query should authorize based on the target action, if the parent query is authorized. Requires filter checks on the target action.  
  
##  __ aggregates.sum.join_filter
    
    
    join_filter relationship_path, filter

Declares a join filter on an aggregate. See the aggregates guide for more.

###  __ Examples
    
    
    join_filter [:comments, :author], expr(active == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`relationship_path`| `atom | list(atom)`| | The relationship path on which to apply the join filter  
`filter`| `any`| | The filter to apply. Can be an expression or a filter template.  
  
###  __ Introspection

Target: [`Ash.Resource.Aggregate.JoinFilter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Aggregate`](external_link)

##  __ aggregates.list
    
    
    list name, relationship_path, field

Declares a named `list` aggregate on the resource.

A list aggregate selects the list of all values for the given field and relationship combination.

See the [aggregates guide](external_link) for more.

###  __ Nested DSLs

  * join_filter



###  __ Examples
    
    
    list :assigned_ticket_prices, :assigned_tickets, :price do
      filter [active: true]
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The field to place the aggregate in  
`relationship_path`| `atom | list(atom)`| | The relationship or relationship path to use for the aggregate  
`field`| `atom`| | The field to aggregate. Defaults to the first field in the primary key of the resource  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`include_nil?`| `boolean`| `false`| Whether or not to include `nil` values in the aggregate. Only relevant for `list` and `first` aggregates.  
`uniq?`| `boolean`| `false`| Whether or not to count unique values only  
`read_action`| `atom`| | The read action to use when building the aggregate. Defaults to the primary read action. Keep in mind this action must not have any required arguments.  
`filter`| `any`| `[]`| A filter to apply to the aggregate  
`sort`| `any`| | A sort to be applied to the aggregate  
`description`| `String.t`| | An optional description for the aggregate  
`default`| `any`| | A default value to use in cases where nil would be used. Count defaults to `0`.  
`public?`| `boolean`| `false`| Whether or not the aggregate will appear in public interfaces  
`filterable?`| `boolean | :simple_equality`| `true`| Whether or not the aggregate should be usable in filters.  
`sortable?`| `boolean`| `true`| Whether or not the aggregate should be usable in sorts.  
`sensitive?`| `boolean`| `false`| Whether or not the aggregate should be considered sensitive.  
`authorize?`| `boolean`| `true`| Whether or not the aggregate query should authorize based on the target action, if the parent query is authorized. Requires filter checks on the target action.  
  
##  __ aggregates.list.join_filter
    
    
    join_filter relationship_path, filter

Declares a join filter on an aggregate. See the aggregates guide for more.

###  __ Examples
    
    
    join_filter [:comments, :author], expr(active == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`relationship_path`| `atom | list(atom)`| | The relationship path on which to apply the join filter  
`filter`| `any`| | The filter to apply. Can be an expression or a filter template.  
  
###  __ Introspection

Target: [`Ash.Resource.Aggregate.JoinFilter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Aggregate`](external_link)

##  __ aggregates.max
    
    
    max name, relationship_path, field

Declares a named `max` aggregate on the resource

Supports `filter`, but not `sort` (because that wouldn't affect the max)

See the [aggregates guide](external_link) for more.

###  __ Nested DSLs

  * join_filter



###  __ Examples
    
    
    max :first_assigned_ticket_subject, :assigned_tickets, :severity do
      filter [active: true]
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The field to place the aggregate in  
`relationship_path`| `atom | list(atom)`| | The relationship or relationship path to use for the aggregate  
`field`| `atom`| | The field to aggregate. Defaults to the first field in the primary key of the resource  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`read_action`| `atom`| | The read action to use when building the aggregate. Defaults to the primary read action. Keep in mind this action must not have any required arguments.  
`filter`| `any`| `[]`| A filter to apply to the aggregate  
`description`| `String.t`| | An optional description for the aggregate  
`default`| `any`| | A default value to use in cases where nil would be used. Count defaults to `0`.  
`public?`| `boolean`| `false`| Whether or not the aggregate will appear in public interfaces  
`filterable?`| `boolean | :simple_equality`| `true`| Whether or not the aggregate should be usable in filters.  
`sortable?`| `boolean`| `true`| Whether or not the aggregate should be usable in sorts.  
`sensitive?`| `boolean`| `false`| Whether or not the aggregate should be considered sensitive.  
`authorize?`| `boolean`| `true`| Whether or not the aggregate query should authorize based on the target action, if the parent query is authorized. Requires filter checks on the target action.  
  
##  __ aggregates.max.join_filter
    
    
    join_filter relationship_path, filter

Declares a join filter on an aggregate. See the aggregates guide for more.

###  __ Examples
    
    
    join_filter [:comments, :author], expr(active == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`relationship_path`| `atom | list(atom)`| | The relationship path on which to apply the join filter  
`filter`| `any`| | The filter to apply. Can be an expression or a filter template.  
  
###  __ Introspection

Target: [`Ash.Resource.Aggregate.JoinFilter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Aggregate`](external_link)

##  __ aggregates.min
    
    
    min name, relationship_path, field

Declares a named `min` aggregate on the resource

Supports `filter`, but not `sort` (because that wouldn't affect the min)

See the [aggregates guide](external_link) for more.

###  __ Nested DSLs

  * join_filter



###  __ Examples
    
    
    min :first_assigned_ticket_subject, :assigned_tickets, :severity do
      filter [active: true]
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The field to place the aggregate in  
`relationship_path`| `atom | list(atom)`| | The relationship or relationship path to use for the aggregate  
`field`| `atom`| | The field to aggregate. Defaults to the first field in the primary key of the resource  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`read_action`| `atom`| | The read action to use when building the aggregate. Defaults to the primary read action. Keep in mind this action must not have any required arguments.  
`filter`| `any`| `[]`| A filter to apply to the aggregate  
`description`| `String.t`| | An optional description for the aggregate  
`default`| `any`| | A default value to use in cases where nil would be used. Count defaults to `0`.  
`public?`| `boolean`| `false`| Whether or not the aggregate will appear in public interfaces  
`filterable?`| `boolean | :simple_equality`| `true`| Whether or not the aggregate should be usable in filters.  
`sortable?`| `boolean`| `true`| Whether or not the aggregate should be usable in sorts.  
`sensitive?`| `boolean`| `false`| Whether or not the aggregate should be considered sensitive.  
`authorize?`| `boolean`| `true`| Whether or not the aggregate query should authorize based on the target action, if the parent query is authorized. Requires filter checks on the target action.  
  
##  __ aggregates.min.join_filter
    
    
    join_filter relationship_path, filter

Declares a join filter on an aggregate. See the aggregates guide for more.

###  __ Examples
    
    
    join_filter [:comments, :author], expr(active == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`relationship_path`| `atom | list(atom)`| | The relationship path on which to apply the join filter  
`filter`| `any`| | The filter to apply. Can be an expression or a filter template.  
  
###  __ Introspection

Target: [`Ash.Resource.Aggregate.JoinFilter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Aggregate`](external_link)

##  __ aggregates.avg
    
    
    avg name, relationship_path, field

Declares a named `avg` aggregate on the resource

Supports `filter`, but not `sort` (because that wouldn't affect the avg)

See the [aggregates guide](external_link) for more.

###  __ Nested DSLs

  * join_filter



###  __ Examples
    
    
    avg :assigned_ticket_price_sum, :assigned_tickets, :price do
      filter [active: true]
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The field to place the aggregate in  
`relationship_path`| `atom | list(atom)`| | The relationship or relationship path to use for the aggregate  
`field`| `atom`| | The field to aggregate. Defaults to the first field in the primary key of the resource  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`read_action`| `atom`| | The read action to use when building the aggregate. Defaults to the primary read action. Keep in mind this action must not have any required arguments.  
`filter`| `any`| `[]`| A filter to apply to the aggregate  
`description`| `String.t`| | An optional description for the aggregate  
`default`| `any`| | A default value to use in cases where nil would be used. Count defaults to `0`.  
`public?`| `boolean`| `false`| Whether or not the aggregate will appear in public interfaces  
`filterable?`| `boolean | :simple_equality`| `true`| Whether or not the aggregate should be usable in filters.  
`sortable?`| `boolean`| `true`| Whether or not the aggregate should be usable in sorts.  
`sensitive?`| `boolean`| `false`| Whether or not the aggregate should be considered sensitive.  
`authorize?`| `boolean`| `true`| Whether or not the aggregate query should authorize based on the target action, if the parent query is authorized. Requires filter checks on the target action.  
  
##  __ aggregates.avg.join_filter
    
    
    join_filter relationship_path, filter

Declares a join filter on an aggregate. See the aggregates guide for more.

###  __ Examples
    
    
    join_filter [:comments, :author], expr(active == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`relationship_path`| `atom | list(atom)`| | The relationship path on which to apply the join filter  
`filter`| `any`| | The filter to apply. Can be an expression or a filter template.  
  
###  __ Introspection

Target: [`Ash.Resource.Aggregate.JoinFilter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Aggregate`](external_link)

##  __ aggregates.custom
    
    
    custom name, relationship_path, type

Declares a named `custom` aggregate on the resource

Supports `filter` and `sort`.

Custom aggregates provide an `implementation` which must implement data layer specific callbacks.

See the relevant data layer documentation and the [aggregates guide](external_link) for more.

###  __ Nested DSLs

  * join_filter



###  __ Examples
    
    
    custom :author_names, :authors, :string do
      implementation {StringAgg, delimiter: ","}
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The field to place the aggregate in  
`relationship_path`| `atom | list(atom)`| | The relationship or relationship path to use for the aggregate  
`type`| `module`| | The type of the value returned by the aggregate  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`implementation`| `module`| | The module that implements the relevant data layer callbacks  
`read_action`| `atom`| | The read action to use when building the aggregate. Defaults to the primary read action. Keep in mind this action must not have any required arguments.  
`field`| `atom`| | The field to aggregate. Defaults to the first field in the primary key of the resource  
`filter`| `any`| `[]`| A filter to apply to the aggregate  
`sort`| `any`| | A sort to be applied to the aggregate  
`description`| `String.t`| | An optional description for the aggregate  
`default`| `any`| | A default value to use in cases where nil would be used. Count defaults to `0`.  
`public?`| `boolean`| `false`| Whether or not the aggregate will appear in public interfaces  
`filterable?`| `boolean | :simple_equality`| `true`| Whether or not the aggregate should be usable in filters.  
`sortable?`| `boolean`| `true`| Whether or not the aggregate should be usable in sorts.  
`sensitive?`| `boolean`| `false`| Whether or not the aggregate should be considered sensitive.  
`authorize?`| `boolean`| `true`| Whether or not the aggregate query should authorize based on the target action, if the parent query is authorized. Requires filter checks on the target action.  
  
##  __ aggregates.custom.join_filter
    
    
    join_filter relationship_path, filter

Declares a join filter on an aggregate. See the aggregates guide for more.

###  __ Examples
    
    
    join_filter [:comments, :author], expr(active == true)
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`relationship_path`| `atom | list(atom)`| | The relationship path on which to apply the join filter  
`filter`| `any`| | The filter to apply. Can be an expression or a filter template.  
  
###  __ Introspection

Target: [`Ash.Resource.Aggregate.JoinFilter`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Aggregate`](external_link)

##  __ calculations

Declare named calculations on the resource.

These are calculations that can be loaded only by name using [`Ash.Query.load/2`](external_link). They are also available as top level fields on the resource.

See the [calculations guide](external_link) for more.

###  __ Nested DSLs

  * calculate
    * argument



###  __ Examples
    
    
    calculations do
      calculate :full_name, :string, MyApp.MyResource.FullName
    end
    

##  __ calculations.calculate
    
    
    calculate name, type, calculation \\ nil

Declares a named calculation on the resource.

Takes a module that must adopt the [`Ash.Resource.Calculation`](external_link) behaviour. See that module for more information.

To ensure that the necessary fields are selected:

1.) Specifying the `select` option on a calculation in the resource. 2.) Define a `select/2` callback in the calculation module 3.) Set `always_select?` on the attribute in question

See the [calculations guide](external_link) for more.

###  __ Nested DSLs

  * argument



###  __ Examples

[`Ash.Resource.Calculation`](external_link) implementation example:
    
    
    calculate :full_name, :string, {MyApp.FullName, keys: [:first_name, :last_name]}, select: [:first_name, :last_name]

`expr/1` example:
    
    
    calculate :full_name, :string, expr(first_name <> " " <> last_name)

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The field name to use for the calculation value  
`type`| `any`| | The type of the calculation. See [`Ash.Type`](external_link) for more.  
`calculation`| `(any, any -> any) | module | any`| | The `module`, `{module, opts}` or `expr(...)` to use for the calculation. Also accepts a function that takes _a list of records_ and produces a result for each record.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`async?`| `boolean`| `false`|   
`constraints`| `keyword`| `[]`| Constraints to provide to the type. See [`Ash.Type`](external_link) for more.  
`description`| `String.t`| | An optional description for the calculation  
`public?`| `boolean`| `false`| Whether or not the calculation will appear in public interfaces.  
`sensitive?`| `boolean`| `false`| Whether or not references to the calculation will be considered sensitive.  
`load`| `any`| `[]`| A load statement to be applied if the calculation is used.  
`allow_nil?`| `boolean`| `true`| Whether or not the calculation can return nil.  
`filterable?`| `boolean | :simple_equality`| `true`| Whether or not the calculation should be usable in filters.  
`sortable?`| `boolean`| `true`| Whether or not the calculation can be referenced in sorts.  
  
##  __ calculations.calculate.argument
    
    
    argument name, type

An argument to be passed into the calculation's arguments map

See the [calculations guide](external_link) for more.

###  __ Examples
    
    
    argument :params, :map do
      default %{}
    end
    
    
    
    argument :retries, :integer do
      allow_nil? false
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | The name of the argument  
`type`| `module`| | The type of the argument. See [`Ash.Type`](external_link) for more.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`default`| `(-> any) | mfa | any`| | A default value to use for the argument if not provided  
`allow_nil?`| `boolean`| `true`| Whether or not the argument value may be nil (or may be not provided)  
`allow_expr?`| `boolean`| `false`| Allow passing expressions as argument values. Expressions cannot be type validated.  
`constraints`| `keyword`| `[]`| Constraints to provide to the type when casting the value. See the type's documentation and [`Ash.Type`](external_link) for more.  
  
###  __ Introspection

Target: [`Ash.Resource.Calculation.Argument`](external_link)

###  __ Introspection

Target: [`Ash.Resource.Calculation`](external_link)

##  __ multitenancy

Options for configuring the multitenancy behavior of a resource.

To specify a tenant, use [`Ash.Query.set_tenant/2`](external_link) or [`Ash.Changeset.set_tenant/2`](external_link) before passing it to an operation.

See the [multitenancy guide](external_link)

###  __ Examples
    
    
    multitenancy do
      strategy :attribute
      attribute :organization_id
      global? true
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`strategy`| `:context | :attribute`| `:context`| Determine if multitenancy is performed with attribute filters or using data layer features.  
`attribute`| `atom`| | If using the `attribute` strategy, the attribute to use, e.g `org_id`  
`global?`| `boolean`| `false`| Whether or not the data may be accessed without setting a tenant. For example, with attribute multitenancy, this allows accessing without filtering by the tenant attribute.  
`parse_attribute`| `mfa`| `{Ash.Resource.Dsl, :identity, []}`| An mfa ({module, function, args}) pointing to a function that takes a tenant and returns the attribute value  
  
[ ← Previous Page  Expressions  ](external_link)

[ Next Page →  DSL: Ash.Domain.Dsl  ](external_link)
