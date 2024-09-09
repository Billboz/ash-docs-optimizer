# Use Maps with GraphQL — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) Use Maps with GraphQL
  - __ Bypassing type generation for an map

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) Use Maps with GraphQL

If you define an [`Ash.Type.NewType`](3.4.1/Ash.Type.NewType.html) that is a subtype of `:map`, _and_ you add the `fields` constraint which specifies field names and their types, [`AshGraphql`](external_link) will automatically derive an appropriate GraphQL type for it.

For example:
    
    
    defmodule MyApp.Types.Metadata do
      @moduledoc false
      use Ash.Type.NewType, subtype_of: :map, constraints: [
        fields: [
          title: [
            type: :string
          ],
          description: [
            type: :string
          ]
        ]
      ]
    
      def graphql_type, do: :metadata
    end
    

##  __ Bypassing type generation for an map

Add the `graphql_define_type?/1` callback, like so, to skip Ash's generation (i.e if you're defining it yourself)
    
    
    @impl true
    def graphql_define_type?(_), do: false

[ ← Previous Page  Use Unions with GraphQL  ](external_link)

[ Next Page →  Monitoring  ](external_link)
