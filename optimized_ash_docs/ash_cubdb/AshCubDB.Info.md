# AshCubDB.Info — ash_cubdb v0.6.2

Project: ash_cubdb v0.6.2

## Table of Contents

- [ __ View Source ](external_link) AshCubDB.Info (ash_cubdb v0.6.2)
- __ Summary
  - Functions
- __ Functions
- cubdb_auto_compact?(dsl_or_extended)
- cubdb_auto_file_sync?(dsl_or_extended)
- cubdb_directory(dsl_or_extended)
- cubdb_directory!(dsl_or_extended)
- cubdb_name(dsl_or_extended)
- cubdb_name!(dsl_or_extended)
- cubdb_options(dsl_or_extended)
- cubdb_otp_app(dsl_or_extended)
- cubdb_otp_app!(dsl_or_extended)
- field_layout(resource_or_dsl_state)

__

Search documentation of ash_cubdb __ __

__ Settings

#  [ __ View Source ](external_link) AshCubDB.Info (ash_cubdb v0.6.2)

Auto-generated introspection for the AshCubDB DSL.

#  __ Summary

##  Functions

cubdb_auto_compact?(dsl_or_extended)

Whether or not to automatically compact the CubDB database.

cubdb_auto_file_sync?(dsl_or_extended)

Whether or not to automatically flush the buffer to disk on write.

cubdb_directory(dsl_or_extended)

The directory within which to store the CubDB data.

cubdb_directory!(dsl_or_extended)

The directory within which to store the CubDB data.

cubdb_name(dsl_or_extended)

The name of the CubDB database.

cubdb_name!(dsl_or_extended)

The name of the CubDB database.

cubdb_options(dsl_or_extended)

cubdb DSL options

cubdb_otp_app(dsl_or_extended)

The OTP application in whose `priv` directory data should be stored.

cubdb_otp_app!(dsl_or_extended)

The OTP application in whose `priv` directory data should be stored.

field_layout(resource_or_dsl_state)

Retrieve the cached field layout for the resource.

#  __ Functions

__ Link to this function

# cubdb_auto_compact?(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cubdb_auto_compact?(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [boolean](external_link)()

Whether or not to automatically compact the CubDB database.

See [the CubDB documentation](external_link) for more information.

__ Link to this function

# cubdb_auto_file_sync?(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cubdb_auto_file_sync?(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [boolean](external_link)()

Whether or not to automatically flush the buffer to disk on write.

See [the CubDB documentation](external_link)

__ Link to this function

# cubdb_directory(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cubdb_directory(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, nil | [String.t](external_link)()} | :error

The directory within which to store the CubDB data.

If none is supplied, then one will be automatically generated in the `priv` directory of the parent OTP application.

__ Link to this function

# cubdb_directory!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cubdb_directory!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      (nil | [String.t](external_link)()) | [no_return](external_link)()

The directory within which to store the CubDB data.

If none is supplied, then one will be automatically generated in the `priv` directory of the parent OTP application.

__ Link to this function

# cubdb_name(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cubdb_name(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: {:ok, [atom](external_link)()} | :error

The name of the CubDB database.

By default this is the name of the resource module, however in some (rare) circumstances you may wish to specifically name the database.

__ Link to this function

# cubdb_name!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cubdb_name!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [atom](external_link)() | [no_return](external_link)()

The name of the CubDB database.

By default this is the name of the resource module, however in some (rare) circumstances you may wish to specifically name the database.

__ Link to this function

# cubdb_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cubdb_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

cubdb DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# cubdb_otp_app(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cubdb_otp_app(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: {:ok, [atom](external_link)()} | :error

The OTP application in whose `priv` directory data should be stored.

Only used if `directory` is not supplied. When not provided [`Application.get_application/1`](external_link) will be called for the resource.

__ Link to this function

# cubdb_otp_app!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cubdb_otp_app!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [atom](external_link)() | [no_return](external_link)()

The OTP application in whose `priv` directory data should be stored.

Only used if `directory` is not supplied. When not provided [`Application.get_application/1`](external_link) will be called for the resource.

__ Link to this function

# field_layout(resource_or_dsl_state)

[ __ View Source ](external_link)
    
    
    @spec field_layout([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)() | [Spark.Dsl.t](external_link)()) :: nil | {[tuple](external_link)(), [tuple](external_link)()}

Retrieve the cached field layout for the resource.
