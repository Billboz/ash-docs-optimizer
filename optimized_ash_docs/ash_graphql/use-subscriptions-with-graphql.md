# Using Subscriptions — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) Using Subscriptions

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) Using Subscriptions

The AshGraphql DSL does not currently support subscriptions. However, you can do this with Absinthe direclty, and use [`AshGraphql.Subscription.query_for_subscription/3`](external_link). Here is an example of how you could do this for a subscription for a single record. This example could be extended to support lists of records as well.
    
    
    # in your absinthe schema file
    subscription do
      field :field, :type_name do
        config(fn
          _args, %{context: %{current_user: %{id: user_id}}} ->
            {:ok, topic: user_id, context_id: "user/#{user_id}"}
    
          _args, _context ->
            {:error, :unauthorized}
        end)
    
        resolve(fn args, _, resolution ->
          # loads all the data you need
          AshGraphql.Subscription.query_for_subscription(
            YourResource,
            YourDomain,
            resolution
          )
          |> Ash.Query.filter(id == ^args.id)
          |> Ash.read(actor: resolution.context.current_user)
        end)
      end
    end

[ ← Previous Page  Use JSON with GraphQL  ](external_link)

[ Next Page →  Use Unions with GraphQL  ](external_link)
