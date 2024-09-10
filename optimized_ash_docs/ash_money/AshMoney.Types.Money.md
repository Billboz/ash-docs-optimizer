# AshMoney.Types.Money — ash_money v0.1.12

Project: ash_money v0.1.12

## Table of Contents

- [ __ View Source ](external_link) AshMoney.Types.Money (ash_money v0.1.12)

__

Search documentation of ash_money __ __

__ Settings

#  [ __ View Source ](external_link) AshMoney.Types.Money (ash_money v0.1.12)

A money type for Ash that uses the `ex_money` library.

When constructing a composite type, use a tuple in the following structure:

`composite_type(%{currency: "USD", amount: Decimal.new("0")}}, AshMoney.Types.Money)`

If you've added a custom type, like `:money`:
    
    
    composite_type(%{currency: "USD", amount: Decimal.new("0")}}, :money)
