# Home — ash_slug v0.1.0

Project: ash_slug v0.1.0

## Table of Contents

- [ __ View Source ](external_link) Home
- AshSlug
    - __ Example usage
  - __ Reference

__

Search documentation of ash_slug __ __

__ Settings

#  [ __ View Source ](external_link) Home

![Logo](external_link) ![Logo](external_link)

![Elixir CI](external_link) [![License: MIT](external_link)](https://opensource.org/licenses/MIT) [![Hex version badge](external_link)](https://hex.pm/packages/ash_slug) [![Hexdocs badge](external_link)](https://hexdocs.pm/ash_slug)

# AshSlug

AshSlug is an [Ash](external_link) extension to slugify string attributes on a resource.

The extension is a thin wrapper around the [Slugify](external_link) library, and supports the same options.

###  __ Example usage
    
    
    defmodule MyDomain.Resource do
      @moduledoc false
    
      use Ash.Resource,
        domain: MyDomain,
        data_layer: Ash.DataLayer.Ets,
        extensions: [AshSlug]
    
      ets do
        private?(true)
      end
    
      attributes do
        uuid_primary_key(:id)
        attribute(:text, :string, public?: true)
        attribute(:text_slug, :string)
      end
    
      actions do
        create :create do
          accept([:text])
          change slugify(:text, into: :text_slug)
        end
      end
    end

##  __ Reference

  * [AshSlug DSL](external_link)



[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  DSL: AshSlug  ](external_link)
