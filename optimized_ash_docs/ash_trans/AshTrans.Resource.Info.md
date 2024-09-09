# AshTrans.Resource.Info — ash_trans v0.1.1

Project: ash_trans v0.1.1

## Table of Contents

- [ __ View Source ](external_link) AshTrans.Resource.Info (ash_trans v0.1.1)
- __ Summary
  - Functions
- __ Functions
- translations_fields(dsl_or_extended)
- translations_fields!(dsl_or_extended)
- translations_locales(dsl_or_extended)
- translations_locales!(dsl_or_extended)
- translations_options(dsl_or_extended)
- translations_public?(dsl_or_extended)

__

Search documentation of ash_trans __ __

__ Settings

#  [ __ View Source ](external_link) AshTrans.Resource.Info (ash_trans v0.1.1)

#  __ Summary

##  Functions

translations_fields(dsl_or_extended)

A list of fields to add to the translation fields

translations_fields!(dsl_or_extended)

A list of fields to add to the translation fields

translations_locales(dsl_or_extended)

The locales to add to the translations resource

translations_locales!(dsl_or_extended)

The locales to add to the translations resource

translations_options(dsl_or_extended)

translations DSL options

translations_public?(dsl_or_extended)

Whether the embedded resource should be public or not

#  __ Functions

__ Link to this function

# translations_fields(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec translations_fields(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

A list of fields to add to the translation fields

__ Link to this function

# translations_fields!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec translations_fields!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

A list of fields to add to the translation fields

__ Link to this function

# translations_locales(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec translations_locales(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

The locales to add to the translations resource

__ Link to this function

# translations_locales!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec translations_locales!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

The locales to add to the translations resource

__ Link to this function

# translations_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec translations_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

translations DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# translations_public?(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec translations_public?(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [boolean](external_link)()

Whether the embedded resource should be public or not
