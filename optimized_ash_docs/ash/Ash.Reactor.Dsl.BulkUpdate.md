# Ash.Reactor.Dsl.BulkUpdate — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor.Dsl.BulkUpdate (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor.Dsl.BulkUpdate (ash v3.4.8)

The `bulk_update` entity for the [`Ash.Reactor`](external_link) reactor extension.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Reactor.Dsl.BulkUpdate{
      __identifier__: [any](external_link)(),
      action: [atom](external_link)(),
      action_step?: true,
      actor: nil | [Ash.Reactor.Dsl.Actor.t](external_link)(),
      allow_stream_with: :keyset | :offset | :full_read,
      assume_casted?: [boolean](external_link)(),
      async?: [boolean](external_link)(),
      atomic_update: %{optional([atom](external_link)()) => [Ash.Expr.t](external_link)()},
      authorize?: [boolean](external_link)() | nil,
      authorize_changeset_with: :filter | :error,
      authorize_query?: [boolean](external_link)(),
      authorize_query_with: :filter | :error,
      batch_size: nil | [pos_integer](external_link)(),
      description: [String.t](external_link)() | nil,
      domain: [Ash.Domain.t](external_link)(),
      filter:
        %{
          optional([String.t](external_link)()) => %{
            required([String.t](external_link)()) => [String.t](external_link)() | [number](external_link)() | [boolean](external_link)()
          }
        }
        | [Keyword.t](external_link)([Keyword.t](external_link)([String.t](external_link)() | [number](external_link)() | [boolean](external_link)())),
      initial: [Reactor.Template.t](external_link)(),
      inputs: [[Ash.Reactor.Dsl.Inputs.t](external_link)()],
      load: nil | [Ash.Reactor.Dsl.ActionLoad.t](external_link)(),
      lock: nil | [Ash.DataLayer.lock_type](external_link)(),
      max_concurrency: [non_neg_integer](external_link)(),
      name: [atom](external_link)(),
      notification_metadata: [map](external_link)() | [Reactor.Template.t](external_link)(),
      notify?: [boolean](external_link)(),
      page: [Keyword.t](external_link)(),
      read_action: [atom](external_link)(),
      resource: [module](external_link)(),
      return_errors?: [boolean](external_link)(),
      return_records?: [boolean](external_link)(),
      return_stream?: [boolean](external_link)(),
      reuse_values?: [boolean](external_link)(),
      rollback_on_error?: [boolean](external_link)(),
      select: [[atom](external_link)()],
      skip_unknown_inputs: [[atom](external_link)() | [String.t](external_link)()],
      sorted?: [boolean](external_link)(),
      stop_on_error?: [boolean](external_link)(),
      strategy: :atomic | :atomic_batches | :stream,
      stream_batch_size: nil | [pos_integer](external_link)(),
      stream_with: nil | :keyset | :offset | :full_read,
      success_state: :success | :partial_success,
      tenant: nil | [Ash.Reactor.Dsl.Tenant.t](external_link)(),
      timeout: nil | [timeout](external_link)(),
      transaction: :all | :batch | false,
      transform: [term](external_link)(),
      type: :bulk_create,
      undo: :never,
      undo_action: nil,
      wait_for: [term](external_link)()
    }
