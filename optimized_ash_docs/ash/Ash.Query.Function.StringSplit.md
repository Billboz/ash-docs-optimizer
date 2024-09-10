# Ash.Query.Function.StringSplit — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query.Function.StringSplit (ash v3.4.8)
  - __ Options
- __ Summary
  - Functions
- __ Functions
- args()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query.Function.StringSplit (ash v3.4.8)

Split a string into a list of strings

Splits a string on the given delimiter. The delimiter defaults to a single space. Also supports options.

Keep in mind, this function does _not_ support regexes the way that [`String.split/3`](external_link) does, only raw strings.
    
    
    string_split(employee_code)
    string_split(full_name, "foo")
    string_split(full_name, "foo", trim?: true)

##  __ Options

  * `:trim?` ([`boolean/0`](external_link)) - Whether or not to trim empty strings from the beginning or end of the result. Equivalent to the `trim` option to [`String.split/3`](external_link) The default value is `false`.



#  __ Summary

##  Functions

args()

Callback implementation for [`Ash.Query.Function.args/0`](external_link).

#  __ Functions

__ Link to this function

# args()

[ __ View Source ](external_link)

Callback implementation for [`Ash.Query.Function.args/0`](external_link).
