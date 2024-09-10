# Spark.Dsl.Patch.AddEntity — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Dsl.Patch.AddEntity (spark v2.2.24)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Dsl.Patch.AddEntity (spark v2.2.24)

Supply this when defining an extension to add entity builders to another extension's section.

For example
    
    
    @entity %Spark.Dsl.Entity{
      ...
    }
    
    @dsl_patch %Spark.Dsl.Patch.AddEntity{section_path: [:foo, :bar], entity: @entity}
    
    use Spark.Dsl.Extension, dsl_patches: [@dsl_patch]

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Spark.Dsl.Patch.AddEntity{
      entity: [Spark.Dsl.Entity.t](external_link)(),
      section_path: [[atom](external_link)()]
    }
