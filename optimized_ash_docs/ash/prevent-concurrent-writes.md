# Prevent concurrent writes — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Prevent concurrent writes
  - __ Introduction
  - __ Add Optimistic Locking
  - __ Examples
  - __ Triggering a StaleRecord error
  - __ Refetching a record to get the latest version

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Prevent concurrent writes

![Run in Livebook](external_link)
    
    
    Mix.install([{:ash, "~> 3.0"}], consolidate_protocols: false)
    # Set to `:debug` if you want to see ETS logs
    Logger.configure(level: :warning)

##  __ Introduction

Often, when working with resources, we want to ensure that a record has not been edited since we last read it. We may want this for UX reasons, or for ensuring data consistency, etc.

To ensure that a record hasn't been updated since the last time we read it, we use Optimistic Locking.

For more information, see the documentation for [`Ash.Resource.Change.OptimisticLock`](external_link).

##  __ Add Optimistic Locking

  1. Add a `:version` attribute to your resource, of type `:integer`, with a default of `1` and `allow_nil?: false`
  2. Add `change optimistic_lock(:version)`. Where you add it depends on which actions you want to prevent concurrent writes for:
     * If you want optimistic locking to occur for _specific actions_ :
       1. Add `change optimistic_lock(:version)` to those specific actions
     * If you want optimistic locking to occur for _all action types_ :
       1. Add a global `changes` block to the resource, if you do not have one
       2. Add `change optimistic_lock(:version), on: [:create, :update, :destroy]`
     * If you want to apply optimistic locking to _many but not all actions_ :
       1. Add a global `changes` block to the resource, if you do not have one
       2. Add `change optimistic_lock(:version), where: action_is([:action1, :action2, :action3])`



##  __ Examples
    
    
    defmodule Address do
      use Ash.Resource,
        domain: Domain,
        data_layer: Ash.DataLayer.Ets
    
      attributes do
        uuid_primary_key :id
        attribute :version, :integer, allow_nil?: false, default: 1
        attribute :state, :string, allow_nil?: false
        attribute :county, :string, allow_nil?: false
      end
    
      actions do
        defaults [:read, create: [:state, :county]]
    
        update :update do
          accept [:state, :county]
          change optimistic_lock(:version)
        end
      end
    
      # apply to all actions
      # changes do
      #   change optimistic_lock(:version), on: [:create, :update, :destroy]
      # end
    
      # apply to a list of actions
      # changes do
      #   change optimistic_lock(:version), where: action_is([:action1, :action2, :action3])
      # end
    end
    
    defmodule Domain do
      use Ash.Domain,
        validate_config_inclusion?: false
    
      resources do
        resource Address do
          define(:get_address, action: :read, get_by: [:id])
          define(:create_address, action: :create, args: [:state, :county])
          define(:update_address, action: :update)
        end
      end
    end
    
    
    {:module, Domain, <<70, 79, 82, 49, 0, 2, 1, ...>>,
     [
       Ash.Domain.Dsl.Resources.Resource,
       Ash.Domain.Dsl.Resources.Options,
       Ash.Domain.Dsl,
       %{opts: [], entities: [...]},
       Ash.Domain.Dsl,
       Ash.Domain.Dsl.Resources.Options,
       ...
     ]}

##  __ Triggering a StaleRecord error
    
    
    address = Domain.create_address!("FL", "Pinellas")
    Domain.update_address!(address, %{state: "NC", county: "Guilford"})
    
    # `address` still has a version of `1`, so our optimistic lock should catch it!
    Domain.update_address(address, %{county: "Miami-Dade"})
    
    
    {:error,
     %Ash.Error.Invalid{
       changeset: "#Changeset<>",
       errors: [
         %Ash.Error.Changes.StaleRecord{
           resource: "Address",
           filter: %{"version" => 1},
           splode: Ash.Error,
           bread_crumbs: [],
           vars: [],
           path: [],
           stacktrace: #Splode.Stacktrace<>,
           class: :invalid
         }
       ]
     }}

##  __ Refetching a record to get the latest version
    
    
    address = Domain.create_address!("FL", "Pinellas")
    Domain.update_address!(address, %{state: "NC", county: "Guilford"})
    
    case Domain.update_address(address, %{county: "Miami-Dade"}) do
      {:error, %Ash.Error.Invalid{errors: [%Ash.Error.Changes.StaleRecord{}]}} ->
        # In a liveview, you wouldn't just refetch and resubmit
        # you would show the user an error and have them submit the form again
        address = Domain.get_address!(address.id)
        Domain.update_address!(address, %{county: "Miami-Dade"})
    
      {:ok, domain} ->
        domain
    end
    
    
    #Address<
      __meta__: #Ecto.Schema.Metadata<:loaded>,
      id: "91e552e1-3307-4d68-969f-1b7e6651e695",
      version: 3,
      state: "NC",
      county: "Miami-Dade",
      aggregates: %{},
      calculations: %{},
      ...
    >

[ ← Previous Page  Encrypt Attributes  ](external_link)

[ Next Page →  Wrap External APIs  ](external_link)
