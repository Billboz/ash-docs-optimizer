# Comparable — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Comparable protocol (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- ord()
- t()
- __ Functions
- compare(left_and_right)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Comparable protocol (ash v3.4.8)

Protocol which describes ordering relation for pair of types

#  __ Summary

##  Types

ord()

t()

##  Functions

compare(left_and_right)

Accepts struct with fields :left and :right and returns ord value

#  __ Types

__ Link to this type

# ord()

[ __ View Source ](external_link)
    
    
    @type ord() :: :gt | :lt | :eq

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: t()

#  __ Functions

__ Link to this function

# compare(left_and_right)

[ __ View Source ](external_link)
    
    
    @spec compare(t()) :: ord()

Accepts struct with fields :left and :right and returns ord value
