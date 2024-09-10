# Ash.BulkResult — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.BulkResult (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.BulkResult (ash v3.4.8)

The return value for bulk actions.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.BulkResult{
      error_count: [non_neg_integer](external_link)(),
      errors: [[Ash.Error.t](external_link)() | [Ash.Changeset.t](external_link)()] | nil,
      notifications: [[Ash.Notifier.Notification.t](external_link)()] | nil,
      records: [[Ash.Resource.record](external_link)()] | nil,
      status: :success | :partial_success | :error
    }
