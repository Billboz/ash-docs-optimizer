# Relay — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) Relay
  - __ Using Ash's built-in Relay support
  - __ Relay Global IDs
    - __ Translating Relay Global IDs passed as arguments
  - __ Using with Absinthe.Relay instead of Ash's relay type

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) Relay

Enabling Relay for a resource sets it up to follow the [Relay specification](external_link).

The two changes that are made currently are:

  * the type for the resource will implement the [`Node`](external_link) interface
  * pagination over that resource will behave as a `Connection`.



##  __ Using Ash's built-in Relay support

Set `relay? true` on the resource:
    
    
    graphql do
      relay? true
    
      ...
    end

##  __ Relay Global IDs

Use the following option to generate Relay Global IDs (see [here](external_link)).
    
    
    use AshGraphql, relay_ids?: true

This allows refetching a node using the `node` query and passing its global ID.

###  __ Translating Relay Global IDs passed as arguments

When `relay_ids?: true` is passed, users of the API will have access only to the global IDs, so they will also need to use them when an ID is required as argument. You actions, though, internally use the normal IDs defined by the data layer.

To handle the translation between the two ID domains, you can use the `relay_id_translations` option. With this, you can define a list of arguments that will be translated from Relay global IDs to internal IDs.

For example, if you have a `Post` resource with an action to create a post associated with an author:
    
    
    create :create do
      argument :author_id, :uuid
    
      # Do stuff with author_id
    end

You can add this to the mutation connected to that action:
    
    
    mutations do
      create :create_post, :create do
        relay_id_translations [input: [author_id: :user]]
      end
    end

##  __ Using with Absinthe.Relay instead of Ash's relay type

Use the following option when calling `use AshGraphql`
    
    
    use AshGraphql, define_relay_types?: false

[ ← Previous Page  Modifying the Resolution  ](external_link)

[ Next Page →  Upgrading to 1.0  ](external_link)
