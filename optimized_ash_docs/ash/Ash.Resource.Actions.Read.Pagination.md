# Ash.Resource.Actions.Read.Pagination — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Actions.Read.Pagination (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- transform(pagination)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Actions.Read.Pagination (ash v3.4.8)

Represents the pagination configuration of a read action

#  __ Summary

##  Types

t()

##  Functions

transform(pagination)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Actions.Read.Pagination{
      countable: [term](external_link)(),
      default_limit: [term](external_link)(),
      keyset?: [term](external_link)(),
      max_page_size: [term](external_link)(),
      offset?: [term](external_link)(),
      required?: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# transform(pagination)

[ __ View Source ](external_link)
