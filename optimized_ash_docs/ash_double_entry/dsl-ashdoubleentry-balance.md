# DSL: AshDoubleEntry.Balance — ash_double_entry v1.0.6

Project: ash_double_entry v1.0.6

## Table of Contents

- [ __ View Source ](external_link) DSL: AshDoubleEntry.Balance
  - __ balance
    - __ Options

__

Search documentation of ash_double_entry __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshDoubleEntry.Balance

An extension for creating a double entry ledger balance. See the getting started guide for more.

##  __ balance

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transfer_resource`| `module`| | The resource used for transfers  
`account_resource`| `module`| | The resource used for accounts  
`pre_check_identities_with`| `module`| | A domain to use to precheck generated identities. Required by certain data layers.  
`money_composite_type?`| `boolean`| `true`| Whether the balance is stored as a composite type.  
`data_layer_can_add_money?`| `boolean`| `true`| Whether or not the data layer supports adding money.  
  
[ ← Previous Page  DSL: AshDoubleEntry.Account  ](external_link)

[ Next Page →  DSL: AshDoubleEntry.Transfer  ](external_link)
