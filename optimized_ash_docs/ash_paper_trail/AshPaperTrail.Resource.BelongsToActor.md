# AshPaperTrail.Resource.BelongsToActor — ash_paper_trail v0.1.4

Project: ash_paper_trail v0.1.4

## Table of Contents

- [ __ View Source ](external_link) AshPaperTrail.Resource.BelongsToActor (ash_paper_trail v0.1.4)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash_paper_trail __ __

__ Settings

#  [ __ View Source ](external_link) AshPaperTrail.Resource.BelongsToActor (ash_paper_trail v0.1.4)

Represents a belongs_to_actor relationship on a version resource

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshPaperTrail.Resource.BelongsToActor{
      allow_nil?: [boolean](external_link)(),
      attribute_type: [term](external_link)(),
      define_attribute?: [boolean](external_link)(),
      destination: [Ash.Resource.t](3.1.2/Ash.Resource.html#t:t/0)(),
      domain: [atom](external_link)(),
      name: [atom](external_link)(),
      public?: [boolean](external_link)()
    }
