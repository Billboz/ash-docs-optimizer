# AshPhoenix.FormData.Error — ash_phoenix v2.1.2

Project: ash_phoenix v2.1.2

## Table of Contents

- [ __ View Source ](external_link) AshPhoenix.FormData.Error protocol (ash_phoenix v2.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- to_form_error(exception)

__

Search documentation of ash_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshPhoenix.FormData.Error protocol (ash_phoenix v2.1.2)

A protocol for allowing errors to be rendered into a form.

To implement, define a `to_form_error/1` and return a single error or list of errors of the following shape:

`{:field_name, message, replacements}`

Replacements is a keyword list to allow for translations, by extracting out the constants like numbers from the message.

#  __ Summary

##  Types

t()

All the types that implement this protocol.

##  Functions

to_form_error(exception)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [term](external_link)()

All the types that implement this protocol.

#  __ Functions

__ Link to this function

# to_form_error(exception)

[ __ View Source ](external_link)
