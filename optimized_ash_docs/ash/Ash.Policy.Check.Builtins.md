# Ash.Policy.Check.Builtins — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Policy.Check.Builtins (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- accessing_from(resource, relationship)
- action(action)
- action_type(action_type)
- actor_attribute_equals(attribute, value)
- actor_present()
- always()
- changing_attributes(opts)
- changing_relationship(relationship)
- changing_relationships(relationships)
- context_equals(key, value)
- filtering_on(path \\\ [], field)
- loading(field)
- matches(description, func)
- never()
- relates_to_actor_via(relationship_path, opts \\\ [])
- relating_to_actor(relationship)
- resource(resource)
- selecting(attribute)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Policy.Check.Builtins (ash v3.4.8)

The global authorization checks built into ash

#  __ Summary

##  Functions

accessing_from(resource, relationship)

This check is true when the current action is being run "through" a relationship.

action(action)

This check is true when the action name matches the provided action name or names.

action_type(action_type)

This check is true when the action type matches the provided type

actor_attribute_equals(attribute, value)

This check is true when the value of the specified attribute of the actor equals the specified value.

actor_present()

This check is true when there is an actor specified, and false when the actor is `nil`.

always()

This check always passes.

changing_attributes(opts)

This check is true when attribute changes correspond to the provided options.

changing_relationship(relationship)

This check is true when the specified relationship is changing

changing_relationships(relationships)

This check is true when the specified relationships are changing

context_equals(key, value)

This check is true when the value of the specified key or path in the changeset or query context equals the specified value.

filtering_on(path \\\ [], field) deprecated

This check is true when the field provided is being referenced anywhere in a filter statement.

loading(field)

This check is true when the field or relationship, or path to field, is being loaded and false when it is not.

matches(description, func)

This check is true when the specified function returns true

never()

This check never passes.

relates_to_actor_via(relationship_path, opts \\\ [])

This check passes if the data relates to the actor via the specified relationship or path of relationships.

relating_to_actor(relationship)

This check is true when the specified relationship is being changed to the current actor.

resource(resource)

This check is true when the resource name matches the provided resource name or names.

selecting(attribute)

This check is true when the field is being selected and false when it is not.

#  __ Functions

__ Link to this function

# accessing_from(resource, relationship)

[ __ View Source ](external_link)
    
    
    @spec accessing_from([Ash.Resource.t](external_link)(), [atom](external_link)()) :: [Ash.Policy.Check.ref](external_link)()

This check is true when the current action is being run "through" a relationship.

Cases where this happens:

  1. Loading related data
  2. Managing relationships
  3. Aggregating data
  4. Filtering on relationships



__ Link to this function

# action(action)

[ __ View Source ](external_link)
    
    
    @spec action([atom](external_link)() | [[atom](external_link)()]) :: [Ash.Policy.Check.ref](external_link)()

This check is true when the action name matches the provided action name or names.

This is a very common pattern, allowing action-specific policies.

__ Link to this function

# action_type(action_type)

[ __ View Source ](external_link)
    
    
    @spec action_type([Ash.Resource.Actions.action_type](external_link)()) :: [Ash.Policy.Check.ref](external_link)()

This check is true when the action type matches the provided type

This is useful for writing policies that apply to all actions of a given type.

For example:
    
    
    policy action_type(:read) do
      authorize_if relates_to_actor_via(:owner)
    end

__ Link to this function

# actor_attribute_equals(attribute, value)

[ __ View Source ](external_link)
    
    
    @spec actor_attribute_equals([atom](external_link)(), [any](external_link)()) :: [Ash.Policy.Check.ref](external_link)()

This check is true when the value of the specified attribute of the actor equals the specified value.

This check will _never_ pass if the actor does not have the specified key. For example, `actor_attribute_equals(:missing_key, nil)`

__ Link to this function

# actor_present()

[ __ View Source ](external_link)
    
    
    @spec actor_present() :: [Ash.Policy.Check.ref](external_link)()

This check is true when there is an actor specified, and false when the actor is `nil`.

__ Link to this function

# always()

[ __ View Source ](external_link)
    
    
    @spec always() :: [Ash.Policy.Check.ref](external_link)()

This check always passes.

Can be useful for "deny-list" style authorization. For example:
    
    
    policy action_type(:read) do
      forbid_if actor_attribute_equals(:disabled, true)
      forbid_if actor_attribute_equals(:active, false)
      authorize_if always()
    end

Without that last clause, the policy would never pass.

__ Link to this function

# changing_attributes(opts)

[ __ View Source ](external_link)

This check is true when attribute changes correspond to the provided options.

Provide a keyword list of options or just an atom representing the attribute.

For example:
    
    
    # if you are changing both first name and last name
    changing_attributes([:first_name, :last_name])
    
    # if you are changing first name to fred
    changing_attributes(first_name: [to: "fred"])
    
    # if you are changing last name from bob
    changing_attributes(last_name: [from: "bob"])
    
    # if you are changing :first_name at all, last_name from "bob" and middle name from "tom" to "george"
    changing_attributes([:first_name, last_name: [from: "bob"], middle_name: [from: "tom", to: "george]])

__ Link to this function

# changing_relationship(relationship)

[ __ View Source ](external_link)

This check is true when the specified relationship is changing

__ Link to this function

# changing_relationships(relationships)

[ __ View Source ](external_link)

This check is true when the specified relationships are changing

__ Link to this function

# context_equals(key, value)

[ __ View Source ](external_link)

This check is true when the value of the specified key or path in the changeset or query context equals the specified value.

__ Link to this function

# filtering_on(path \\\ [], field)

[ __ View Source ](external_link)

This function is deprecated. `filtering_on/2` check is deprecated. Instead, add arguments and add policies that said arguments are set. For complex queries, policies on what is being filtered on require multiple authorization passes of the same resource, leading to a large amount of typically unnecessary complexity. Additionally, they could yield false negatives in some scenarios, and more work would be needed to ensure that they don't. . 
    
    
    @spec filtering_on([atom](external_link)() | [[atom](external_link)()], [atom](external_link)()) :: [Ash.Policy.Check.ref](external_link)()

This check is true when the field provided is being referenced anywhere in a filter statement.

This applies to related filters as well. For example:
    
    
    policy actor_attribute_equals(:is_admin, false) do
      forbid_if filtering_on(:email)
      # a path can be provided as well
      forbid_if filtering_on([:owner], :email)
    end

The first will return true in situations like:
    
    
    Ash.Query.filter(User, email == "blah")
    Ash.Query.filter(Tweet, author.email == "blah")

The second will return true on queries like:
    
    
    Ash.Query.filter(Post, owner.email == "blah")
    Ash.Query.filter(Comment, post.owner.email == "blah")

__ Link to this function

# loading(field)

[ __ View Source ](external_link)
    
    
    @spec loading([atom](external_link)()) :: [Ash.Policy.Check.ref](external_link)()

This check is true when the field or relationship, or path to field, is being loaded and false when it is not.

This is always false for `create`/`update`/`destroy` actions, because you cannot load fields on those action types.

__ Link to this macro

# matches(description, func)

[ __ View Source ](external_link) (macro)

This check is true when the specified function returns true

__ Link to this function

# never()

[ __ View Source ](external_link)
    
    
    @spec never() :: [Ash.Policy.Check.ref](external_link)()

This check never passes.

There is, generally speaking, no reason to use this, but it exists for completeness sake.

__ Link to this function

# relates_to_actor_via(relationship_path, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec relates_to_actor_via(
      [atom](external_link)(),
      [keyword](external_link)()
    ) :: [Ash.Policy.Check.ref](external_link)()

This check passes if the data relates to the actor via the specified relationship or path of relationships.

For `update` & `destroy` actions, this check will apply to _the original data_ before the changes are applied.

For `create` actions this check is very unlikely to pass. This is because relationships are modified _after_ authorization happens, not before.

For example:
    
    
    policy action_type(:read) do
      authorize_if relates_to_actor_via(:owner)
    
      # Path of relationships:
      authorize_if relates_to_actor_via([:account, :user])
    
      # When the resource relates to a field of the actor:
      authorize_if relates_to_actor_via(:roles, field: :role)
    end

__ Link to this function

# relating_to_actor(relationship)

[ __ View Source ](external_link)

This check is true when the specified relationship is being changed to the current actor.

This only supports `belongs_to` relationships at the moment, and will detect two cases:

  1. the `source_attribute` is being changed directly
  2. the relationship is being changed with `on_lookup?: :relate`, and a single input is being provided.



__ Link to this function

# resource(resource)

[ __ View Source ](external_link)
    
    
    @spec resource([atom](external_link)() | [[atom](external_link)()]) :: [Ash.Policy.Check.ref](external_link)()

This check is true when the resource name matches the provided resource name or names.

__ Link to this function

# selecting(attribute)

[ __ View Source ](external_link)
    
    
    @spec selecting([atom](external_link)()) :: [Ash.Policy.Check.ref](external_link)()

This check is true when the field is being selected and false when it is not.

This won't affect filters placed on this resource, so you may also want to either:

  * Mark the given field as `filterable? false`
  * Add another check for `filtering_on(:field)`



For example:
    
    
    policy action_type(:read) do
      # The actor can read and filter on their own email
      authorize_if expr(id == ^actor(:id))
    
      # No one else can select or filter on their email
      forbid_if selecting(:email)
      forbid_if filtering_on(:email)
    
      # Otherwise, the policy passes
      authorize_if always()
    end
