# Glossary — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Glossary
  - __ Action
  - __ Actor
  - __ Aggregate
  - __ Attribute
  - __ Authorizer
  - __ Calculation
  - __ Changeset
  - __ Domain
  - __ Extension
  - __ Filter
  - __ Identity
  - __ Notifier
  - __ Policy
  - __ Query
  - __ Record
  - __ Relationship
  - __ Resource
  - __ Tenant

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Glossary

##  __ Action

An action describes an operation that can be performed for a given resource; it is the _verb_ to a resource's _noun_. Examples of actions:

  * User._create_
  * Comment._delete_
  * BlogPost._publish_
  * Article._search_



Ash supports five different types of actions. `create`, `read`, `update` and `destroy` (collectively often abbreviated as CRUD), and `action`, referring to a generic action with a custom return type. A resource can define multiple actions per action type, eg. a _publish_ action would be considered an `update` because it is updating an existing instance of a resource. Actions are much more flexible than simple CRUD, but these five action types serve as templates for anything you might want to do.

See the [Actions guide](external_link) for more.

##  __ Actor

The entity that performs an action. Most actions are run on direct user request, eg. if a user presses a Create button on a page then the actor is the user; but an actor might also be an organization, a group, or even a device.

Actors can be used in a number of places, from modifying the behavior of an action to auditing who did what in your system. They are most prominent, however, when writing policies.

See the [Actors & Authorization guide](external_link) for more.

##  __ Aggregate

An aggregate is a special type of field for a resource, one that summarizes related information of the record. A more specialized type of a calculation.

If a Project resource has_many Ticket resources, an example of an aggregate on the Project might be to count the tickets associated to each project.

See the [Aggregates guide](external_link) for more.

##  __ Attribute

A piece of data belonging to a resource. The most basic building block; an attribute has a type and a value. For resources backed by a data layer, they typically represent a column in a database table, or a key in an object store, for example.

See the [Attributes guide](external_link) for more.

##  __ Authorizer

An authorizer is an extension that can be added to a resource that will be given the opportunity to modify and/or prevent requests to a resource. In practice, you will almost always be using [`Ash.Policy.Authorizer`](external_link), but you can still write your own if you need to.

See the [Actors & Authorization](external_link) and [Policies](external_link) guides for more.

##  __ Calculation

A calculation is a special type of field for a resource, one that is not directly stored in the data layer but generated on-demand. Typically it will derive from other information on the record, but it may come from some other data source entirely.

See the [Calculations guide](external_link) for more.

##  __ Changeset

Changesets encapsulate data changes made while creating or updating an instance of a resource. Similarly to [Ecto changesets](external_link), they include data validations but they also have their own callback hook lifecycle.

See [`Ash.Changeset`](external_link) for more.

##  __ Domain

A method of broadly separating resources into different [domains](external_link)>), A.K.A [bounded contexts](external_link).

See the [Domains guide](external_link) for more.

##  __ Extension

A packaged bundle of code that can be included in a resource to provide additional functionality. Built-in functionality such as the resource DSL itself is provided by an extension, and libraries like AshPostgres and AshAdmin also provide extensions that you can add to your resources with just one line of code.

See [Extending Resources](external_link) for more.

##  __ Filter

Filters are applied to queries to limit the data returned. They can also be applied to changesets, to ensure only data matching a certain condition is updated. For example:

  * Fetching Articles that include a certain search term in the title
  * Fetching Posts created by a specific user
  * Fetching Tickets updated in the last week
  * Updating a record only if it's version matches your in memory version (optimistic locking)



See [`Ash.Filter`](external_link) for more.

##  __ Identity

A way to uniquely identify an instance of a resource. A primary key is an example of an identity that is automatically generated; you can manually add others such as a user's email address, or a URL slug for a post. If using AshPostgres, constraints will be created by the migration generator to enforce identities at the database level.

See the [Identities guide](external_link) for more.

##  __ Notifier

Notifiers are modules that are called for each action that occurs on a resource (except generic actions). They are called at the end of transactions, meaning that if a notifier is called, it is guaranteed that the action they pertain to has completed successfully.

See the [Notifiers guide](external_link) for more.

##  __ Policy

A set of rules defining who is authorized to perform specific actions on a resource. Common policy checks include rules such as:

  * Forbidding anyone other than the user who wrote a blog post, from editing it
  * Allowing only admins to update site-wide settings



See the [Policies guide](external_link) for more.

##  __ Query

The tools and functions used for reading and filtering stored data, from the data layer.

See [`Ash.Query`](external_link) for more.

##  __ Record

A record is an "instance" of a resource. Keep in mind that this is not an "instance" in a mutable/object-oriented sense, but rather a snapshot of the data at a given point in time. When you call a read action, you get back records. You can provide a record to an update action to determine what data is being updated.

##  __ Relationship

Relationships are named links between resources, that define how they relate to each other. Relationships can be used to signify ownership of a record, membership of a group, or can be used in filtering and querying data.

See the [Relationships guide](external_link) for more.

##  __ Resource

The central concept in Ash, a resource can be used to model all kinds of things. Most often, they will map to a data store, and represent things like rows of a database table. However, they can also be backed by external data sources, be used for validating data with no persistence at all, or even be simple containers for generic actions, completely stateless.

See the [Resource DSL docs](external_link) for DSL documentation.

##  __ Tenant

Multitenancy is the siloing of your app's data into discrete non-overlapping groups, typically by customer or organization (the tenant). Ash supports multitenancy both at the code level and the data layer level (depending on the data layer; for example, AshPostgres uses schemas to fully separate data per tenant.)

See the [Multitenancy guide](external_link) for more.

[ ← Previous Page  Wrap External APIs  ](external_link)

[ Next Page →  Expressions  ](external_link)
