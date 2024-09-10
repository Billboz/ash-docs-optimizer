# DSL: AshDoubleEntry.Account — ash_double_entry v1.0.6

Project: ash_double_entry v1.0.6

## Table of Contents

- [ __ View Source ](external_link) DSL: AshDoubleEntry.Account
  - __ account
    - __ Options

__

Search documentation of ash_double_entry __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshDoubleEntry.Account

An extension for creating a double entry ledger account. See the getting started guide for more.

##  __ account

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`transfer_resource`| `module`| | The resource used for transfers  
`balance_resource`| `module`| | The resource used for balances  
`open_action_accept`| `list(atom)`| `[]`| A list of extra attributes to be accepted by the open action. The `identifier` and `currency` attributes are always accepted.  
`pre_check_identities_with`| `module`| | A domain to use to precheck generated identities. Required by certain data layers.  
  
[ ← Previous Page  Getting Started with Ash Double Entry  ](external_link)

[ Next Page →  DSL: AshDoubleEntry.Balance  ](external_link)
