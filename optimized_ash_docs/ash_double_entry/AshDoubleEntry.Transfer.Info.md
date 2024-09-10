# AshDoubleEntry.Transfer.Info — ash_double_entry v1.0.6

Project: ash_double_entry v1.0.6

## Table of Contents

- [ __ View Source ](external_link) AshDoubleEntry.Transfer.Info (ash_double_entry v1.0.6)
- __ Summary
  - Functions
- __ Functions
- transfer_account_resource(dsl_or_extended)
- transfer_account_resource!(dsl_or_extended)
- transfer_balance_resource(dsl_or_extended)
- transfer_balance_resource!(dsl_or_extended)
- transfer_create_accept(dsl_or_extended)
- transfer_create_accept!(dsl_or_extended)
- transfer_destroy_balances?(dsl_or_extended)
- transfer_options(dsl_or_extended)
- transfer_pre_check_identities_with(dsl_or_extended)
- transfer_pre_check_identities_with!(dsl_or_extended)

__

Search documentation of ash_double_entry __ __

__ Settings

#  [ __ View Source ](external_link) AshDoubleEntry.Transfer.Info (ash_double_entry v1.0.6)

Introspection helpers for [`AshDoubleEntry.Transfer`](external_link)

#  __ Summary

##  Functions

transfer_account_resource(dsl_or_extended)

The resource to use for account balances

transfer_account_resource!(dsl_or_extended)

The resource to use for account balances

transfer_balance_resource(dsl_or_extended)

The resource being used for balances

transfer_balance_resource!(dsl_or_extended)

The resource being used for balances

transfer_create_accept(dsl_or_extended)

Additional attributes to accept when creating a transfer

transfer_create_accept!(dsl_or_extended)

Additional attributes to accept when creating a transfer

transfer_destroy_balances?(dsl_or_extended)

Whether or not balances must be manually destroyed. See the getting started guide for more.

transfer_options(dsl_or_extended)

transfer DSL options

transfer_pre_check_identities_with(dsl_or_extended)

A domain to use to precheck generated identities. Required by certain data layers.

transfer_pre_check_identities_with!(dsl_or_extended)

A domain to use to precheck generated identities. Required by certain data layers.

#  __ Functions

__ Link to this function

# transfer_account_resource(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec transfer_account_resource(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [module](external_link)()} | :error

The resource to use for account balances

__ Link to this function

# transfer_account_resource!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec transfer_account_resource!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [module](external_link)() | [no_return](external_link)()

The resource to use for account balances

__ Link to this function

# transfer_balance_resource(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec transfer_balance_resource(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [module](external_link)()} | :error

The resource being used for balances

__ Link to this function

# transfer_balance_resource!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec transfer_balance_resource!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [module](external_link)() | [no_return](external_link)()

The resource being used for balances

__ Link to this function

# transfer_create_accept(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec transfer_create_accept(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

Additional attributes to accept when creating a transfer

__ Link to this function

# transfer_create_accept!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec transfer_create_accept!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

Additional attributes to accept when creating a transfer

__ Link to this function

# transfer_destroy_balances?(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec transfer_destroy_balances?(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [boolean](external_link)()

Whether or not balances must be manually destroyed. See the getting started guide for more.

__ Link to this function

# transfer_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec transfer_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

transfer DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# transfer_pre_check_identities_with(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec transfer_pre_check_identities_with(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [module](external_link)()} | :error

A domain to use to precheck generated identities. Required by certain data layers.

__ Link to this function

# transfer_pre_check_identities_with!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec transfer_pre_check_identities_with!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [module](external_link)() | [no_return](external_link)()

A domain to use to precheck generated identities. Required by certain data layers.
