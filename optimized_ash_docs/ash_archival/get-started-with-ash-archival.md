# Get Started with AshArchival — ash_archival v1.0.3

Project: ash_archival v1.0.3

## Table of Contents

- [ __ View Source ](external_link) Get Started with AshArchival
  - __ Installation
  - __ Adding to a resource
  - __ Base Filter
    - __ Benefits of base_filter
  - __ More

__

Search documentation of ash_archival __ __

__ Settings

#  [ __ View Source ](external_link) Get Started with AshArchival

##  __ Installation

First, add the dependency to your `mix.exs` file
    
    
    {:ash_archival, "~> 1.0.3"}

and add `:ash_archival` to your `.formatter.exs`
    
    
    import_deps: [..., :ash_archival]

##  __ Adding to a resource

To add archival to a resource, add the extension to the resource:
    
    
    use Ash.Resource,
      extensions: [..., AshArchival.Resource]

And thats it! Now, when you destroy a record, it will be archived instead, using an `archived_at` attribute.

See [How Does Ash Archival Work?](external_link) for what modifications are made to a resource, and read on for info on the tradeoffs of leveraging `[Ash.Resource.Dsl.resource.base_filter](dsl-ash-resource.html#resource-base_filter)`.

##  __ Base Filter

Using a `[Ash.Resource.Dsl.resource.base_filter](dsl-ash-resource.html#resource-base_filter)` for your `archived_at` field has a lot of benefits if you are using `ash_postgres`, but comes with one major drawback, which is that it is not possible to exclude certain read actions from archival. If you wish to use a base filter, you will need to create a separate resource to read from the archived items. We may introduce a way to bypass the base filter at some point in the future.

To add a `base_filter` and `base_filter_sql` to your resource:
    
    
    resource do
      base_filter expr(is_nil(archived_at))
    end
    
    postgres do
      ...
      base_filter_sql "(archived_at IS NULL)"
    end

Add `base_filter? true` to the `archive` configuration of your resource to tell it that it doesn't need to add the filter itself.

###  __ Benefits of base_filter

  1. unique indexes will exclude archived items
  2. custom indexes will exclude archived items
  3. check constraints will not be applied to archived items



If you want these benefits, add the appropriate `base_filter`.

##  __ More

See the [Unarchiving guide](external_link) For more.

[ ← Previous Page  Change Log  ](external_link)

[ Next Page →  Un-archiving  ](external_link)
