# AshArchival.Resource.Info — ash_archival v1.0.3

Project: ash_archival v1.0.3

## Table of Contents

- [ __ View Source ](external_link) AshArchival.Resource.Info (ash_archival v1.0.3)
- __ Summary
  - Functions
- __ Functions
- archive_archive_related(dsl_or_extended)
- archive_archive_related!(dsl_or_extended)
- archive_attribute(dsl_or_extended)
- archive_attribute!(dsl_or_extended)
- archive_base_filter?(dsl_or_extended)
- archive_exclude_destroy_actions(dsl_or_extended)
- archive_exclude_destroy_actions!(dsl_or_extended)
- archive_exclude_read_actions(dsl_or_extended)
- archive_exclude_read_actions!(dsl_or_extended)
- archive_exclude_upsert_actions(dsl_or_extended)
- archive_exclude_upsert_actions!(dsl_or_extended)
- archive_options(dsl_or_extended)

__

Search documentation of ash_archival __ __

__ Settings

#  [ __ View Source ](external_link) AshArchival.Resource.Info (ash_archival v1.0.3)

Introspection helpers for [`AshArchival.Resource`](external_link)

#  __ Summary

##  Functions

archive_archive_related(dsl_or_extended)

A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.

archive_archive_related!(dsl_or_extended)

A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.

archive_attribute(dsl_or_extended)

The attribute in which to store the archival flag (the current datetime).

archive_attribute!(dsl_or_extended)

The attribute in which to store the archival flag (the current datetime).

archive_base_filter?(dsl_or_extended)

Whether or not a base filter exists that applies the `is_nil(archived_at)` rule.

archive_exclude_destroy_actions(dsl_or_extended)

A destroy action or actions that should _not_ archive, but instead be left alone. This allows for having a destroy _or_ archive pattern.

archive_exclude_destroy_actions!(dsl_or_extended)

A destroy action or actions that should _not_ archive, but instead be left alone. This allows for having a destroy _or_ archive pattern.

archive_exclude_read_actions(dsl_or_extended)

A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.

archive_exclude_read_actions!(dsl_or_extended)

A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.

archive_exclude_upsert_actions(dsl_or_extended)

This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.

archive_exclude_upsert_actions!(dsl_or_extended)

This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.

archive_options(dsl_or_extended)

archive DSL options

#  __ Functions

__ Link to this function

# archive_archive_related(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_archive_related(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.

__ Link to this function

# archive_archive_related!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_archive_related!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.

__ Link to this function

# archive_attribute(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_attribute(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: {:ok, [atom](external_link)()} | :error

The attribute in which to store the archival flag (the current datetime).

__ Link to this function

# archive_attribute!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_attribute!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [atom](external_link)() | [no_return](external_link)()

The attribute in which to store the archival flag (the current datetime).

__ Link to this function

# archive_base_filter?(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_base_filter?(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [atom](external_link)()

Whether or not a base filter exists that applies the `is_nil(archived_at)` rule.

__ Link to this function

# archive_exclude_destroy_actions(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_exclude_destroy_actions(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

A destroy action or actions that should _not_ archive, but instead be left alone. This allows for having a destroy _or_ archive pattern.

__ Link to this function

# archive_exclude_destroy_actions!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_exclude_destroy_actions!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

A destroy action or actions that should _not_ archive, but instead be left alone. This allows for having a destroy _or_ archive pattern.

__ Link to this function

# archive_exclude_read_actions(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_exclude_read_actions(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.

__ Link to this function

# archive_exclude_read_actions!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_exclude_read_actions!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.

__ Link to this function

# archive_exclude_upsert_actions(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_exclude_upsert_actions(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.

__ Link to this function

# archive_exclude_upsert_actions!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_exclude_upsert_actions!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.

__ Link to this function

# archive_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec archive_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

archive DSL options

Returns a map containing the and any configured or default values.
