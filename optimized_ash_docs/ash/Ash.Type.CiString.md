# Ash.Type.CiString — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type.CiString (ash v3.4.8)
    - __ Constraints
- __ Summary
  - Functions
- __ Functions
- match(regex)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type.CiString (ash v3.4.8)

Stores a case insensitive string in the database

See [`Ash.CiString`](external_link) for more information.

A builtin type that can be referenced via `:ci_string`

###  __ Constraints

  * `:max_length` ([`non_neg_integer/0`](external_link)) - Enforces a maximum length on the value

  * `:min_length` ([`non_neg_integer/0`](external_link)) - Enforces a minimum length on the value

  * `:match` \- Enforces that the string matches a passed in regex

  * `:trim?` ([`boolean/0`](external_link)) - Trims the value. The default value is `true`.

  * `:allow_empty?` ([`boolean/0`](external_link)) - Sets the value to `nil` if it's empty. The default value is `false`.

  * `:casing` \- Lowercases or uppercases the value, fully discarding case information.  
For example, if you don't set this, a value of `FrEd` could be saved to the data layer. `FrEd` and `fReD` would still compare as equal, but the original casing information is retained. In many cases, this is what you want. In some cases, however, you want to remove all case information. For example, in an email, you may want to support a user inputting an upper case letter, but discard it when saved. Valid values are :upper, :lower, nil The default value is `nil`.




#  __ Summary

##  Functions

match(regex)

#  __ Functions

__ Link to this function

# match(regex)

[ __ View Source ](external_link)
