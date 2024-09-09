# Ash.Resource.Attribute — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Attribute (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- create_timestamp_schema()
- integer_primary_key_schema()
- transform(attribute)
- update_timestamp_schema()
- uuid_primary_key_schema()
- uuid_v7_primary_key_schema()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Attribute (ash v3.4.8)

Represents an attribute on a resource

#  __ Summary

##  Types

t()

##  Functions

create_timestamp_schema()

integer_primary_key_schema()

transform(attribute)

update_timestamp_schema()

uuid_primary_key_schema()

uuid_v7_primary_key_schema()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Attribute{
      allow_nil?: [term](external_link)(),
      always_select?: [term](external_link)(),
      constraints: [Keyword.t](external_link)(),
      default: nil | [term](external_link)() | (-> [term](external_link)()),
      description: [term](external_link)(),
      filterable?: [term](external_link)(),
      generated?: [term](external_link)(),
      match_other_defaults?: [term](external_link)(),
      name: [atom](external_link)(),
      primary_key?: [boolean](external_link)(),
      public?: [boolean](external_link)(),
      sensitive?: [boolean](external_link)(),
      sortable?: [boolean](external_link)(),
      source: [term](external_link)(),
      type: [Ash.Type.t](external_link)(),
      update_default:
        nil | [term](external_link)() | (-> [term](external_link)()) | ([Ash.Resource.record](external_link)() -> [term](external_link)()),
      writable?: [boolean](external_link)()
    }

#  __ Functions

__ Link to this function

# create_timestamp_schema()

[ __ View Source ](external_link)

__ Link to this function

# integer_primary_key_schema()

[ __ View Source ](external_link)

__ Link to this function

# transform(attribute)

[ __ View Source ](external_link)

__ Link to this function

# update_timestamp_schema()

[ __ View Source ](external_link)

__ Link to this function

# uuid_primary_key_schema()

[ __ View Source ](external_link)

__ Link to this function

# uuid_v7_primary_key_schema()

[ __ View Source ](external_link)
