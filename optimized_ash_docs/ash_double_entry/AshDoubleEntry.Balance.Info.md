# AshDoubleEntry.Balance.Info — ash_double_entry v1.0.6

Project: ash_double_entry v1.0.6

## Table of Contents

- [ __ View Source ](external_link) AshDoubleEntry.Balance.Info (ash_double_entry v1.0.6)
- __ Summary
  - Functions
- __ Functions
- balance_account_resource(dsl_or_extended)
- balance_account_resource!(dsl_or_extended)
- balance_data_layer_can_add_money?(dsl_or_extended)
- balance_money_composite_type?(dsl_or_extended)
- balance_options(dsl_or_extended)
- balance_pre_check_identities_with(dsl_or_extended)
- balance_pre_check_identities_with!(dsl_or_extended)
- balance_transfer_resource(dsl_or_extended)
- balance_transfer_resource!(dsl_or_extended)

__

Search documentation of ash_double_entry __ __

__ Settings

#  [ __ View Source ](external_link) AshDoubleEntry.Balance.Info (ash_double_entry v1.0.6)

Introspection helpers for [`AshDoubleEntry.Balance`](external_link)

#  __ Summary

##  Functions

balance_account_resource(dsl_or_extended)

The resource used for accounts

balance_account_resource!(dsl_or_extended)

The resource used for accounts

balance_data_layer_can_add_money?(dsl_or_extended)

Whether or not the data layer supports adding money.

balance_money_composite_type?(dsl_or_extended)

Whether the balance is stored as a composite type.

balance_options(dsl_or_extended)

balance DSL options

balance_pre_check_identities_with(dsl_or_extended)

A domain to use to precheck generated identities. Required by certain data layers.

balance_pre_check_identities_with!(dsl_or_extended)

A domain to use to precheck generated identities. Required by certain data layers.

balance_transfer_resource(dsl_or_extended)

The resource used for transfers

balance_transfer_resource!(dsl_or_extended)

The resource used for transfers

#  __ Functions

__ Link to this function

# balance_account_resource(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec balance_account_resource(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [module](external_link)()} | :error

The resource used for accounts

__ Link to this function

# balance_account_resource!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec balance_account_resource!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [module](external_link)() | [no_return](external_link)()

The resource used for accounts

__ Link to this function

# balance_data_layer_can_add_money?(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec balance_data_layer_can_add_money?(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [boolean](external_link)()

Whether or not the data layer supports adding money.

__ Link to this function

# balance_money_composite_type?(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec balance_money_composite_type?(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [boolean](external_link)()

Whether the balance is stored as a composite type.

__ Link to this function

# balance_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec balance_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

balance DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# balance_pre_check_identities_with(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec balance_pre_check_identities_with(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [module](external_link)()} | :error

A domain to use to precheck generated identities. Required by certain data layers.

__ Link to this function

# balance_pre_check_identities_with!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec balance_pre_check_identities_with!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [module](external_link)() | [no_return](external_link)()

A domain to use to precheck generated identities. Required by certain data layers.

__ Link to this function

# balance_transfer_resource(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec balance_transfer_resource(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [module](external_link)()} | :error

The resource used for transfers

__ Link to this function

# balance_transfer_resource!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec balance_transfer_resource!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [module](external_link)() | [no_return](external_link)()

The resource used for transfers
