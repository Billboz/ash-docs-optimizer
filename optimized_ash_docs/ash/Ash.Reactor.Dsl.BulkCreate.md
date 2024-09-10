# Ash.Reactor.Dsl.BulkCreate — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor.Dsl.BulkCreate (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor.Dsl.BulkCreate (ash v3.4.8)

The `bulk_create` entity for the [`Ash.Reactor`](external_link) reactor extension.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Reactor.Dsl.BulkCreate{
      __identifier__: [any](external_link)(),
      action: [atom](external_link)(),
      action_step?: true,
      actor: nil | [Ash.Reactor.Dsl.Actor.t](external_link)(),
      assume_casted?: [boolean](external_link)(),
      async?: [boolean](external_link)(),
      authorize?: [boolean](external_link)() | nil,
      authorize_changeset_with: :filter | :error,
      authorize_query_with: :filter | :error,
      batch_size: nil | [pos_integer](external_link)(),
      description: [String.t](external_link)() | nil,
      domain: [Ash.Domain.t](external_link)(),
      initial: [Reactor.Template.t](external_link)(),
      load: nil | [Ash.Reactor.Dsl.ActionLoad.t](external_link)(),
      max_concurrency: [non_neg_integer](external_link)(),
      name: [atom](external_link)(),
      notification_metadata: [map](external_link)(),
      notify?: [boolean](external_link)(),
      read_action: [atom](external_link)(),
      resource: [module](external_link)(),
      return_errors?: [boolean](external_link)(),
      return_records?: [boolean](external_link)(),
      return_stream?: [boolean](external_link)(),
      rollback_on_error?: [boolean](external_link)(),
      select: [[atom](external_link)()],
      skip_unknown_inputs: [[atom](external_link)() | [String.t](external_link)()],
      sorted?: [boolean](external_link)(),
      stop_on_error?: [boolean](external_link)(),
      success_state: :success | :partial_success,
      tenant: nil | [Ash.Reactor.Dsl.Tenant.t](external_link)(),
      timeout: nil | [timeout](external_link)(),
      transaction: :all | :batch | false,
      transform: [term](external_link)(),
      type: :bulk_create,
      undo: :never,
      undo_action: nil,
      upsert?: [term](external_link)(),
      upsert_fields: [],
      upsert_identity: nil,
      wait_for: [term](external_link)()
    }
