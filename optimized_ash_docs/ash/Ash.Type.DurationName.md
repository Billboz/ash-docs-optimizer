# Ash.Type.DurationName — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type.DurationName (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type.DurationName (ash v3.4.8)

An interval of time, primarily meant to be used in expression functions

Valid intervals are (as strings or atoms): [:year, :month, :week, :day, :hour, :minute, :second, :millisecond, :microsecond]

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() ::
      :microsecond
      | :millisecond
      | :second
      | :minute
      | :hour
      | :day
      | :week
      | :month
      | :year
