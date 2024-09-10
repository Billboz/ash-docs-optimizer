# Ash.Query.Parent — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query.Parent (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- new(expr)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query.Parent (ash v3.4.8)

Used to access values from the "source" of a given expression.

This is used in cases where expressions are given for some relationship path, for example:any()
    
    
     has_many :foo, Foo do
       filter expr(priority == :foo and type == parent(foo_type))
     end

This is supported on a case by case basis by a given data layer and in specific usages.

#  __ Summary

##  Functions

new(expr)

#  __ Functions

__ Link to this function

# new(expr)

[ __ View Source ](external_link)
