# AshDoubleEntry.Account.Info — ash_double_entry v1.0.6

Project: ash_double_entry v1.0.6

## Table of Contents

- [ __ View Source ](external_link) AshDoubleEntry.Account.Info (ash_double_entry v1.0.6)
- __ Summary
  - Functions
- __ Functions
- account_balance_resource(dsl_or_extended)
- account_balance_resource!(dsl_or_extended)
- account_open_action_accept(dsl_or_extended)
- account_open_action_accept!(dsl_or_extended)
- account_options(dsl_or_extended)
- account_pre_check_identities_with(dsl_or_extended)
- account_pre_check_identities_with!(dsl_or_extended)
- account_transfer_resource(dsl_or_extended)
- account_transfer_resource!(dsl_or_extended)

__

Search documentation of ash_double_entry __ __

__ Settings

#  [ __ View Source ](external_link) AshDoubleEntry.Account.Info (ash_double_entry v1.0.6)

Introspection helpers for [`AshDoubleEntry.Account`](external_link)

#  __ Summary

##  Functions

account_balance_resource(dsl_or_extended)

The resource used for balances

account_balance_resource!(dsl_or_extended)

The resource used for balances

account_open_action_accept(dsl_or_extended)

A list of extra attributes to be accepted by the open action. The `identifier` and `currency` attributes are always accepted.

account_open_action_accept!(dsl_or_extended)

A list of extra attributes to be accepted by the open action. The `identifier` and `currency` attributes are always accepted.

account_options(dsl_or_extended)

account DSL options

account_pre_check_identities_with(dsl_or_extended)

A domain to use to precheck generated identities. Required by certain data layers.

account_pre_check_identities_with!(dsl_or_extended)

A domain to use to precheck generated identities. Required by certain data layers.

account_transfer_resource(dsl_or_extended)

The resource used for transfers

account_transfer_resource!(dsl_or_extended)

The resource used for transfers

#  __ Functions

__ Link to this function

# account_balance_resource(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec account_balance_resource(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [module](external_link)()} | :error

The resource used for balances

__ Link to this function

# account_balance_resource!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec account_balance_resource!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [module](external_link)() | [no_return](external_link)()

The resource used for balances

__ Link to this function

# account_open_action_accept(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec account_open_action_accept(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

A list of extra attributes to be accepted by the open action. The `identifier` and `currency` attributes are always accepted.

__ Link to this function

# account_open_action_accept!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec account_open_action_accept!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

A list of extra attributes to be accepted by the open action. The `identifier` and `currency` attributes are always accepted.

__ Link to this function

# account_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec account_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

account DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# account_pre_check_identities_with(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec account_pre_check_identities_with(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [module](external_link)()} | :error

A domain to use to precheck generated identities. Required by certain data layers.

__ Link to this function

# account_pre_check_identities_with!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec account_pre_check_identities_with!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [module](external_link)() | [no_return](external_link)()

A domain to use to precheck generated identities. Required by certain data layers.

__ Link to this function

# account_transfer_resource(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec account_transfer_resource(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [module](external_link)()} | :error

The resource used for transfers

__ Link to this function

# account_transfer_resource!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec account_transfer_resource!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [module](external_link)() | [no_return](external_link)()

The resource used for transfers
