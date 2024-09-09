# Ash.Type.String — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type.String (ash v3.4.8)
    - __ Constraints
- __ Summary
  - Functions
- __ Functions
- match(regex)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type.String (ash v3.4.8)

Stores a string in the database.

A built-in type that can be referenced via `:string`.

By default, values are trimmed and empty values are set to `nil`. You can use the `allow_empty?` and `trim?` constraints to change these behaviors.

###  __ Constraints

  * `:max_length` ([`non_neg_integer/0`](external_link)) - Enforces a maximum length on the value

  * `:min_length` ([`non_neg_integer/0`](external_link)) - Enforces a minimum length on the value

  * `:match` \- Enforces that the string matches a passed in regex

  * `:trim?` ([`boolean/0`](external_link)) - Trims the value. The default value is `true`.

  * `:allow_empty?` ([`boolean/0`](external_link)) - If false, the value is set to `nil` if it's empty. The default value is `false`.




#  __ Summary

##  Functions

match(regex)

#  __ Functions

__ Link to this function

# match(regex)

[ __ View Source ](external_link)
