# Ash.Type.Enum — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type.Enum behaviour (ash v3.4.8)
  - __ Custom input values
    - __ Caveats
  - __ Value descriptions
- __ Summary
  - Callbacks
- __ Callbacks
- description(arg1)
- match(term)
- match?(term)
- values()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type.Enum behaviour (ash v3.4.8)

A type for abstracting enums into a single type.

For example, your existing attribute might look like:
    
    
    attribute :status, :atom, constraints: [one_of: [:open, :closed]]

But as that starts to spread around your system, you may find that you want to centralize that logic. To do that, use this module to define an Ash type easily:
    
    
    defmodule MyApp.TicketStatus do
      use Ash.Type.Enum, values: [:open, :closed]
    end

Then, you can rewrite your original attribute as follows:
    
    
    attribute :status, MyApp.TicketStatus

Valid values are:

  * The atom itself, e.g `:open`
  * A string that matches the atom, e.g `"open"`
  * A string that matches the atom after being downcased, e.g `"OPEN"` or `"oPeN"`
  * A string that matches the stringified, downcased atom, after itself being downcased. This allows for enum values like `:Open`, `:SomeState` and `:Some_State`



##  __ Custom input values

If you need to accept inputs beyond those described above while still mapping them to one of the enum values, you can override the `match/1` callback.

For example, if you want to map both the `:half_empty` and `:half_full` states to the same enum value, you could implement it as follows:
    
    
    defmodule MyApp.GlassState do
      use Ash.Type.Enum, values: [:empty, :half_full, :full]
    
      def match(:half_empty), do: {:ok, :half_full}
      def match("half_empty"), do: {:ok, :half_full}
      def match(value), do: super(value)
    end

In the provided example, if no additional value is matched, `super(value)` is called, invoking the default implementation of `match/1`. This approach is typically suitable if you only aim to extend default matching rather than completely reimplementing it.

###  __ Caveats

Additional input values are not exposed in derived interfaces. For example, `HALF_EMPTY` will not be present as a possible enum value when using `ash_graphql`.

Moreover, only explicitly matched values are mapped to the enum value. For instance, `"HaLf_emPty"` would not be accepted by the code provided earlier. If case normalization is needed for additional values, it must be explicitly implemented.

##  __ Value descriptions

It's possible to associate a description with a value by passing a `{value, description}` tuple inside the values list, which becomes a keyword list:
    
    
    defmodule MyApp.TicketStatus do
      use Ash.Type.Enum,
        values: [
          open: "An open ticket",
          closed: "A closed ticket"
        ]
    end

This can be used by extensions to provide detailed descriptions of enum values.

The description of a value can be retrieved with `description/1`:
    
    
    MyApp.TicketStatus.description(:open)
    iex> "An open ticket"

#  __ Summary

##  Callbacks

description(arg1)

The description of the value, if existing

match(term)

finds the valid value that matches a given input term

match?(term)

true if a given term matches a value

values()

The list of valid values (not all input types that match them)

#  __ Callbacks

__ Link to this callback

# description(arg1)

[ __ View Source ](external_link)
    
    
    @callback description([atom](external_link)() | [String.t](external_link)()) :: [String.t](external_link)() | nil

The description of the value, if existing

__ Link to this callback

# match(term)

[ __ View Source ](external_link)
    
    
    @callback match([term](external_link)()) :: {:ok, [atom](external_link)()} | :error

finds the valid value that matches a given input term

__ Link to this callback

# match?(term)

[ __ View Source ](external_link)
    
    
    @callback match?([term](external_link)()) :: [boolean](external_link)()

true if a given term matches a value

__ Link to this callback

# values()

[ __ View Source ](external_link)
    
    
    @callback values() :: [[atom](external_link)() | [String.t](external_link)()]

The list of valid values (not all input types that match them)
