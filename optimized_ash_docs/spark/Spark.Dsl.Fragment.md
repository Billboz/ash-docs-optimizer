# Spark.Dsl.Fragment — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Dsl.Fragment (spark v2.2.24)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Dsl.Fragment (spark v2.2.24)

Allows splitting up a DSL into multiple modules, potentially organizing large DSLs

Use the `of` option to expression what your fragment is a fragment of. You can add extensions as you would normally to that resource, and they will be added to the parent resource.
    
    
    defmodule MyApp.Resource.Graphql do
      use Spark.Dsl.Fragment, of: Ash.Resource, extensions: AshGraphql.Resource
    
      graphql do
        ...
      end
    end

Then add the fragment to the parent resource.
    
    
    defmodule MyApp.Resource do
      use Ash.Resource, fragments: [MyApp.Resource.Graphql], ...
    end
