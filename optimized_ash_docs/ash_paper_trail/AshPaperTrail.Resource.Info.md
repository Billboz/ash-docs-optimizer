# AshPaperTrail.Resource.Info — ash_paper_trail v0.1.4

Project: ash_paper_trail v0.1.4

## Table of Contents

- [ __ View Source ](external_link) AshPaperTrail.Resource.Info (ash_paper_trail v0.1.4)
- __ Summary
  - Functions
- __ Functions
- attributes_as_attributes(resource)
- belongs_to_actor(resource)
- change_tracking_mode(resource)
- ignore_attributes(resource)
- mixin(resource)
- on_actions(resource)
- reference_source?(resource)
- relationship_opts(resource)
- store_action_name?(resource)
- version_extensions(resource)
- version_resource(resource)

__

Search documentation of ash_paper_trail __ __

__ Settings

#  [ __ View Source ](external_link) AshPaperTrail.Resource.Info (ash_paper_trail v0.1.4)

Introspection helpers for [`AshPaperTrail.Resource`](external_link)

#  __ Summary

##  Functions

attributes_as_attributes(resource)

belongs_to_actor(resource)

change_tracking_mode(resource)

ignore_attributes(resource)

mixin(resource)

on_actions(resource)

reference_source?(resource)

relationship_opts(resource)

store_action_name?(resource)

version_extensions(resource)

version_resource(resource)

#  __ Functions

__ Link to this function

# attributes_as_attributes(resource)

[ __ View Source ](external_link)
    
    
    @spec attributes_as_attributes([Spark.Dsl.t](external_link)() | [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()) :: [[atom](external_link)()]

__ Link to this function

# belongs_to_actor(resource)

[ __ View Source ](external_link)
    
    
    @spec belongs_to_actor([Spark.Dsl.t](external_link)() | [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()) :: [[atom](external_link)()]

__ Link to this function

# change_tracking_mode(resource)

[ __ View Source ](external_link)
    
    
    @spec change_tracking_mode([Spark.Dsl.t](external_link)() | [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()) :: [atom](external_link)()

__ Link to this function

# ignore_attributes(resource)

[ __ View Source ](external_link)
    
    
    @spec ignore_attributes([Spark.Dsl.t](external_link)() | [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()) :: [[atom](external_link)()]

__ Link to this function

# mixin(resource)

[ __ View Source ](external_link)
    
    
    @spec mixin([Spark.Dsl.t](external_link)() | [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()) ::
      {[module](external_link)(), [atom](external_link)(), [list](external_link)()} | [module](external_link)() | nil

__ Link to this function

# on_actions(resource)

[ __ View Source ](external_link)
    
    
    @spec on_actions([Spark.Dsl.t](external_link)() | [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()) :: [[atom](external_link)()]

__ Link to this function

# reference_source?(resource)

[ __ View Source ](external_link)
    
    
    @spec reference_source?([Spark.Dsl.t](external_link)() | [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()) :: [boolean](external_link)()

__ Link to this function

# relationship_opts(resource)

[ __ View Source ](external_link)
    
    
    @spec relationship_opts([Spark.Dsl.t](external_link)() | [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()) :: [Keyword.t](external_link)()

__ Link to this function

# store_action_name?(resource)

[ __ View Source ](external_link)
    
    
    @spec store_action_name?([Spark.Dsl.t](external_link)() | [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()) :: [boolean](external_link)()

__ Link to this function

# version_extensions(resource)

[ __ View Source ](external_link)
    
    
    @spec version_extensions([Spark.Dsl.t](external_link)() | [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()) :: [Keyword.t](external_link)()

__ Link to this function

# version_resource(resource)

[ __ View Source ](external_link)
    
    
    @spec version_resource([Spark.Dsl.t](external_link)() | [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()) :: [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)()
