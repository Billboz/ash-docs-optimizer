# Getting Started With AshMoney — ash_money v0.1.12

Project: ash_money v0.1.12

## Table of Contents

- [ __ View Source ](external_link) Getting Started With AshMoney
  - __ Bring in the ash_money dependency
  - __ Setup
    - __ Using Igniter (recommended)
    - __ Manual
  - __ Add to known types
  - __ Referencing with `:money`
  - __ Adding AshPostgres Support
  - __ AshPostgres Support
  - __ AshGraphql Support

__

Search documentation of ash_money __ __

__ Settings

#  [ __ View Source ](external_link) Getting Started With AshMoney

##  __ Bring in the ash_money dependency
    
    
    def deps()
      [
        ...
        {:ash_money, "~> 0.1.12"}
      ]
    end

##  __ Setup

###  __ Using Igniter (recommended)
    
    
    mix igniter.install ash_money
    

###  __ Manual

The primary thing that AshMoney provides is [`AshMoney.Types.Money`](external_link). This is backed by `ex_money`. You can use it out of the box like so:
    
    
    attribute :balance, AshMoney.Types.Money

##  __ Add to known types

To support money operations in runtime expressions, which use [`Ash`](3.3.3/Ash.html)'s operator overloading feature, we have to tell Ash about the `Ash.Type.Money` using the `known_type` configuration.
    
    
    config :ash, :known_types, [AshMoney.Types.Money]

##  __ Referencing with `:money`

You can add it to your compile time list of types for easier reference:
    
    
    config :ash, :custom_types, money: AshMoney.Types.Money

Then compile ash again, `mix deps.compile ash --force`, and refer to it like so:
    
    
    attribute :balance, :money

##  __ Adding AshPostgres Support

First, add the `:ex_money_sql` dependency to your `mix.exs` file.

Then add [`AshMoney.AshPostgresExtension`](external_link) to your list of `installed_extensions` in your repo, and generate migrations.
    
    
    defmodule YourRepo do
      def installed_extensions do
        [..., AshMoney.AshPostgresExtension]
      end
    end

##  __ AshPostgres Support

Thanks to `ex_money_sql`, there are excellent tools for lowering support for money into your postgres database. This allows for things like aggregates that sum amounts, and referencing money in expressions:
    
    
    sum :sum_of_usd_balances, :accounts, :balance do
      filter expr(balance[:currency_code] == "USD")
    end

##  __ AshGraphql Support

Add the following to your schema file:
    
    
      object :money do
        field(:amount, non_null(:decimal))
        field(:currency, non_null(:string))
      end
    
      input_object :money do
        field(:amount, non_null(:decimal))
        field(:currency, non_null(:string))
      end

[ ← Previous Page  Home  ](external_link)

[ Next Page →  Change Log  ](external_link)
