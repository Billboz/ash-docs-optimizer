# DSL: AshDoubleEntry.Transfer — ash_double_entry v1.0.6

Project: ash_double_entry v1.0.6

## Table of Contents

- [ __ View Source ](external_link) DSL: AshDoubleEntry.Transfer
  - __ transfer
    - __ Options

__

Search documentation of ash_double_entry __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshDoubleEntry.Transfer

An extension for creating a double entry ledger transfer. See the getting started guide for more.

##  __ transfer

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`account_resource`| `module`| | The resource to use for account balances  
`pre_check_identities_with`| `module`| | A domain to use to precheck generated identities. Required by certain data layers.  
`balance_resource`| `module`| | The resource being used for balances  
`create_accept`| `atom | list(atom)`| `[]`| Additional attributes to accept when creating a transfer  
`destroy_balances?`| `boolean`| `false`| Whether or not balances must be manually destroyed. See the getting started guide for more.  
  
[ ← Previous Page  DSL: AshDoubleEntry.Balance  ](external_link)

[ Next Page →  Change Log  ](external_link)
