searchData={"content_type":"text/markdown","items":[{"doc":"A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.\n","ref":"dsl-asharchival-resource.html#archive-archive_related","title":"AshArchival.Resource.archive.archive_related","type":"DSL"},{"doc":"A destroy action or actions that should *not* archive, but instead be left alone. This allows for having a destroy *or* archive pattern.\n","ref":"dsl-asharchival-resource.html#archive-exclude_destroy_actions","title":"AshArchival.Resource.archive.exclude_destroy_actions","type":"DSL"},{"doc":"This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.\n","ref":"dsl-asharchival-resource.html#archive-exclude_upsert_actions","title":"AshArchival.Resource.archive.exclude_upsert_actions","type":"DSL"},{"doc":"A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.\n","ref":"dsl-asharchival-resource.html#archive-exclude_read_actions","title":"AshArchival.Resource.archive.exclude_read_actions","type":"DSL"},{"doc":"Whether or not a base filter exists that applies the `is_nil(archived_at)` rule.","ref":"dsl-asharchival-resource.html#archive-base_filter?","title":"AshArchival.Resource.archive.base_filter?","type":"DSL"},{"doc":"The attribute in which to store the archival flag (the current datetime).","ref":"dsl-asharchival-resource.html#archive-attribute","title":"AshArchival.Resource.archive.attribute","type":"DSL"},{"doc":"A section for configuring how archival is configured for a resource.","ref":"dsl-asharchival-resource.html#archive","title":"AshArchival.Resource.archive","type":"DSL"},{"doc":"Mod Docs","ref":"AshArchival.Resource.Archive.Options.html","title":"AshArchival.Resource.Archive.Options","type":"module"},{"doc":"Hello 3","ref":"AshArchival.Resource.Archive.Options.html#archive_related/1","title":"AshArchival.Resource.Archive.Options.archive_related/1","type":"macro"},{"doc":"Hello 3","ref":"AshArchival.Resource.Archive.Options.html#attribute/1","title":"AshArchival.Resource.Archive.Options.attribute/1","type":"macro"},{"doc":"Hello 3","ref":"AshArchival.Resource.Archive.Options.html#base_filter?/1","title":"AshArchival.Resource.Archive.Options.base_filter?/1","type":"macro"},{"doc":"Hello 3","ref":"AshArchival.Resource.Archive.Options.html#exclude_destroy_actions/1","title":"AshArchival.Resource.Archive.Options.exclude_destroy_actions/1","type":"macro"},{"doc":"Hello 3","ref":"AshArchival.Resource.Archive.Options.html#exclude_read_actions/1","title":"AshArchival.Resource.Archive.Options.exclude_read_actions/1","type":"macro"},{"doc":"Hello 3","ref":"AshArchival.Resource.Archive.Options.html#exclude_upsert_actions/1","title":"AshArchival.Resource.Archive.Options.exclude_upsert_actions/1","type":"macro"},{"doc":"An Archival extension for `Ash.Resource`","ref":"AshArchival.html","title":"AshArchival","type":"module"},{"doc":"Configures a resource to be archived instead of destroyed for all destroy actions.\n\nFor more information, see [the getting started guide](/documentation/tutorials/get-started-with-ash-archival.md)","ref":"AshArchival.Resource.html","title":"AshArchival.Resource","type":"module"},{"doc":"Hello!","ref":"AshArchival.Resource.html#archive/1","title":"AshArchival.Resource.archive/1","type":"macro"},{"doc":"Introspection helpers for `AshArchival.Resource`","ref":"AshArchival.Resource.Info.html","title":"AshArchival.Resource.Info","type":"module"},{"doc":"A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.","ref":"AshArchival.Resource.Info.html#archive_archive_related/1","title":"AshArchival.Resource.Info.archive_archive_related/1","type":"function"},{"doc":"A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.","ref":"AshArchival.Resource.Info.html#archive_archive_related!/1","title":"AshArchival.Resource.Info.archive_archive_related!/1","type":"function"},{"doc":"The attribute in which to store the archival flag (the current datetime).","ref":"AshArchival.Resource.Info.html#archive_attribute/1","title":"AshArchival.Resource.Info.archive_attribute/1","type":"function"},{"doc":"The attribute in which to store the archival flag (the current datetime).","ref":"AshArchival.Resource.Info.html#archive_attribute!/1","title":"AshArchival.Resource.Info.archive_attribute!/1","type":"function"},{"doc":"Whether or not a base filter exists that applies the `is_nil(archived_at)` rule.","ref":"AshArchival.Resource.Info.html#archive_base_filter?/1","title":"AshArchival.Resource.Info.archive_base_filter?/1","type":"function"},{"doc":"A destroy action or actions that should *not* archive, but instead be left alone. This allows for having a destroy *or* archive pattern.","ref":"AshArchival.Resource.Info.html#archive_exclude_destroy_actions/1","title":"AshArchival.Resource.Info.archive_exclude_destroy_actions/1","type":"function"},{"doc":"A destroy action or actions that should *not* archive, but instead be left alone. This allows for having a destroy *or* archive pattern.","ref":"AshArchival.Resource.Info.html#archive_exclude_destroy_actions!/1","title":"AshArchival.Resource.Info.archive_exclude_destroy_actions!/1","type":"function"},{"doc":"A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.","ref":"AshArchival.Resource.Info.html#archive_exclude_read_actions/1","title":"AshArchival.Resource.Info.archive_exclude_read_actions/1","type":"function"},{"doc":"A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.","ref":"AshArchival.Resource.Info.html#archive_exclude_read_actions!/1","title":"AshArchival.Resource.Info.archive_exclude_read_actions!/1","type":"function"},{"doc":"This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.","ref":"AshArchival.Resource.Info.html#archive_exclude_upsert_actions/1","title":"AshArchival.Resource.Info.archive_exclude_upsert_actions/1","type":"function"},{"doc":"This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.","ref":"AshArchival.Resource.Info.html#archive_exclude_upsert_actions!/1","title":"AshArchival.Resource.Info.archive_exclude_upsert_actions!/1","type":"function"},{"doc":"archive DSL options\n\nReturns a map containing the and any configured or default values.","ref":"AshArchival.Resource.Info.html#archive_options/1","title":"AshArchival.Resource.Info.archive_options/1","type":"function"},{"doc":"![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only)\n![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)\n\n![Elixir CI](https://github.com/ash-project/ash_archival/workflows/CI/badge.svg)\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n[![Hex version badge](https://img.shields.io/hexpm/v/ash_archival.svg)](https://hex.pm/packages/ash_archival)\n[![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](https://hexdocs.pm/ash_archival)\n\n# AshArchival\n\nAshArchival is an [Ash](https://hexdocs.pm/ash) extension that provides a push-button solution for soft deleting records, instead of destroying them.","ref":"readme.html","title":"Home","type":"extras"},{"doc":"- [Get Started with AshArchival](documentation/tutorials/get-started-with-ash-archival.md)","ref":"readme.html#tutorials","title":"Tutorials - Home","type":"extras"},{"doc":"- [How does AshArchival work?](documentation/topics/how-does-ash-archival-work.md)\n- [Unarchiving](documentation/topics/unarchiving.md)","ref":"readme.html#topics","title":"Topics - Home","type":"extras"},{"doc":"- [AshArchival DSL](documentation/dsls/DSL:-AshArchival.Resource.md)","ref":"readme.html#reference","title":"Reference - Home","type":"extras"},{"doc":"# Change Log\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](Https://conventionalcommits.org) for commit guidelines.\n\n<!-- changelog -->\n\n## [v1.0.3](https://github.com/ash-project/ash_archival/compare/v1.0.2...v1.0.3) (2024-08-16)\n\n\n\n\n#","ref":"changelog.html","title":"Change Log","type":"extras"},{"doc":"* deprecate exclude_upsert_actions, as it had unintended side effects\n\n* add `exclude_upsert_actions` configuration\n\n## [v1.0.2](https://github.com/ash-project/ash_archival/compare/v1.0.1...v1.0.2) (2024-07-11)\n\n\n\n\n#","ref":"changelog.html#improvements","title":"Improvements: - Change Log","type":"extras"},{"doc":"* only add archive attribute if it doesn't already exists\n\n## [v1.0.1](https://github.com/ash-project/ash_archival/compare/v1.0.0...v1.0.1) (2024-06-23)\n\n\n\n\n#","ref":"changelog.html#improvements","title":"Improvements: - Change Log","type":"extras"},{"doc":"* set `ash_archival` on the bulk destroy read query\n\n* ensure `ash_archival: true` is set on all destroy invocations\n\n#","ref":"changelog.html#bug-fixes","title":"Bug Fixes: - Change Log","type":"extras"},{"doc":"* update ash for `atomic_upgrade_with` feature\n\n## [v1.0.0](https://github.com/ash-project/ash_archival/compare/v1.0.0...v1.0.0) (2024-05-10)\n\n\n\n\n#","ref":"changelog.html#improvements","title":"Improvements: - Change Log","type":"extras"},{"doc":"* support `base_filter? true` option\n\n## [v1.0.0](https://github.com/ash-project/ash_archival/compare/v1.0.0...v1.0.0) (2024-05-10)\n\n\n\n\n#","ref":"changelog.html#improvements","title":"Improvements: - Change Log","type":"extras"},{"doc":"* support `base_filter? true` option\n\n## [v1.0.0](https://github.com/ash-project/ash_archival/compare/v1.0.0-rc.1...v1.0.0) (2024-05-10)\n\n\n\n\n#","ref":"changelog.html#improvements","title":"Improvements: - Change Log","type":"extras"},{"doc":"* support `base_filter? true` option\n\n## [v1.0.0](https://github.com/ash-project/ash_archival/compare/v1.0.0-rc.0...v0.1.5)\n\nThe changelog is being restarted. See `/documentation/0.x-CHANGELOG.md` in GitHub for previous changelogs.\n\n#","ref":"changelog.html#improvements","title":"Improvements: - Change Log","type":"extras"},{"doc":"- [AshArchival] don't use `base_filter` anymore, allowing for more flexible design\n\n#","ref":"changelog.html#breaking-changes","title":"Breaking Changes: - Change Log","type":"extras"},{"doc":"- [AshArchival] support filters on upsert actions\n\n#","ref":"changelog.html#improvements","title":"Improvements: - Change Log","type":"extras"},{"doc":"- [AshArchival] rewritten to support atomics & bulk actions to take advantage of new bulk actions\n- [AshArchival] add `exclude_read_actions` to exclude some actions from filtering archived items\n- [AshArchival] add `exclude_destroy_actions` to exclude some actions from being intercepted","ref":"changelog.html#improvements","title":"Improvements: - Change Log","type":"extras"},{"doc":"# Get Started with AshArchival","ref":"get-started-with-ash-archival.html","title":"Get Started with AshArchival","type":"extras"},{"doc":"First, add the dependency to your `mix.exs` file\n\n```elixir\n{:ash_archival, \"~> 1.0.3\"}\n```\n\nand add `:ash_archival` to your `.formatter.exs`\n\n```elixir\nimport_deps: [..., :ash_archival]\n```","ref":"get-started-with-ash-archival.html#installation","title":"Installation - Get Started with AshArchival","type":"extras"},{"doc":"To add archival to a resource, add the extension to the resource:\n\n```elixir\nuse Ash.Resource,\n  extensions: [..., AshArchival.Resource]\n```\n\nAnd thats it! Now, when you destroy a record, it will be archived instead, using an `archived_at` attribute.\n\nSee [How Does Ash Archival Work?](/documentation/tutorials/get-started-with-ash-archival.md) for what modifications are made to a resource, and read on for info on the tradeoffs of leveraging `d:Ash.Resource.Dsl.resource.base_filter`.","ref":"get-started-with-ash-archival.html#adding-to-a-resource","title":"Adding to a resource - Get Started with AshArchival","type":"extras"},{"doc":"Using a `d:Ash.Resource.Dsl.resource.base_filter` for your `archived_at` field has a lot of benefits if you are using `ash_postgres`, but comes with one major drawback, which is that it is not possible to exclude certain read actions from archival. If you wish to use a base filter, you will need to create a separate resource to read from the archived items. We may introduce a way to bypass the base filter at some point in the future.\n\nTo add a `base_filter` and `base_filter_sql` to your resource:\n\n```elixir\nresource do\n  base_filter expr(is_nil(archived_at))\nend\n\npostgres do\n  ...\n  base_filter_sql \"(archived_at IS NULL)\"\nend\n```\n\nAdd `base_filter? true` to the `archive` configuration of your resource to tell it that it doesn't need to add the filter itself.\n\n#","ref":"get-started-with-ash-archival.html#base-filter","title":"Base Filter - Get Started with AshArchival","type":"extras"},{"doc":"1. unique indexes will exclude archived items\n2. custom indexes will exclude archived items\n3. check constraints will not be applied to archived items\n\nIf you want these benefits, add the appropriate `base_filter`.","ref":"get-started-with-ash-archival.html#benefits-of-base_filter","title":"Benefits of base_filter - Get Started with AshArchival","type":"extras"},{"doc":"See the [Unarchiving guide](/documentation/topics/unarchiving.md) For more.","ref":"get-started-with-ash-archival.html#more","title":"More - Get Started with AshArchival","type":"extras"},{"doc":"# Un-archiving\n\nIf you want to unarchive a resource that uses a base filter, you will need to define a separate resource that uses the same storage and has no base filter. The rest of this guide applies for folks who _aren't_ using a `base_filter`.\n\nUn-archiving can be accomplished by creating a read action that is skipped, using `exclude_read_actions`. Then, you can create an update action that sets that attribute to `nil`. For example:\n\n```elixir\narchive do\n  ...\n  exclude_read_actions :archived\nend\n\nactions do\n  read :archived do\n    filter expr(not is_nil(archived_at))\n  end\n\n  update :unarchive do\n    change set_attribute(:archived_at, nil)\n    # if an individual record is used to unarchive\n    # it must use the `archived` read action for its atomic upgrade\n    atomic_upgrade_with :archived\n  end\nend\n```\n\nYou could then do something like this:\n\n```elixir\nResource\n|> Ash.get!(id, action: :archived)\n|> Ash.Changeset.for_update(:unarchive, %{})\n|> Ash.update!()\n```\n\nMore idiomatically, you would define a code interfaceon the domain, and call that:\n\n```elixir\n# to unarchive by `id`\nResource\n|> Ash.Query.for_read(:archived, %{})\n|> Ash.Query.filter(id == ^id)\n|> Domain.unarchive!()\n```","ref":"unarchiving.html","title":"Un-archiving","type":"extras"},{"doc":"# How does Archival Work?\n\nWe make modifications to the resource to enable soft deletes. Here's a breakdown of what the extension does:","ref":"how-does-ash-archival-work.html","title":"How does Archival Work?","type":"extras"},{"doc":"1. Adds a private `archived_at` `utc_datetime_usec` attribute.\n2. Adds a preparation that filters each action for `is_nil(archived_at)` (except for excluded actions, or if you have `base_filter?` set to `true`).\n3. Marks all destroy actions as `soft?`, turning them into updates (except for excluded actions)\n4. Adds a change to all destroy actions that sets `archived_at` to the current timestamp\n5. Adds a change that will iteratively load and destroy anything configured in `d:AshArchival.Resource.archive|archive_related`","ref":"how-does-ash-archival-work.html#resource-modifications","title":"Resource Modifications - How does Archival Work?","type":"extras"},{"doc":"# Upserts & Identities\n\nIts important to consider identities when using AshArchival _without_ a `base_filter` set up.\n\nIf you are using a `base_filter`, then all identities implicitly include that `base_filter` in their\n`where` (handled by the data layer).\n\nTake the following identities, for example:\n\n```elixir\nidentities do\n  identity :unique_email, [:email], where: expr(is_nil(archived_at))\n  # and\n  identity :unique_email, [:email]\nend\n```","ref":"upserts-and-identities.html","title":"Upserts & Identities","type":"extras"},{"doc":"Using this identity allows multiple archived records with the same email, but only one _non-archived_ record per email.\nIt enables reuse of archived email addresses for new active records, maintaining data integrity by preventing duplicate\nactive records while preserving archived data.\n\nWhen you upsert a record using this identity, it will only consider active records.","ref":"upserts-and-identities.html#with-is_nil-archived_at","title":"With `is_nil(archived_at)` - Upserts & Identities","type":"extras"},{"doc":"This identity configuration enforces strict email uniqueness across all records. Once an email is used, it can't be used\nagain, even after that record is archived.\n\nWhen you upsert a record using this identity, it will consider all records.","ref":"upserts-and-identities.html#without-is_nil-archived_at","title":"Without `is_nil(archived_at)` - Upserts & Identities","type":"extras"},{"doc":"<!--\nThis file was generated by Spark. Do not edit it by hand.\n-->\n# DSL: AshArchival.Resource\n\nConfigures a resource to be archived instead of destroyed for all destroy actions.\n\nFor more information, see [the getting started guide](/documentation/tutorials/get-started-with-ash-archival.md)","ref":"dsl-asharchival-resource.html","title":"DSL: AshArchival.Resource","type":"extras"},{"doc":"A section for configuring how archival is configured for a resource.\n\n\n\n\n\n\n#","ref":"dsl-asharchival-resource.html#archive","title":"archive - DSL: AshArchival.Resource","type":"extras"},{"doc":"| Name | Type | Default | Docs |\n|------|------|---------|------|\n| [`attribute`](#archive-attribute){: #archive-attribute } | `atom` | `:archived_at` | The attribute in which to store the archival flag (the current datetime). |\n| [`base_filter?`](#archive-base_filter?){: #archive-base_filter? } | `atom` | `false` | Whether or not a base filter exists that applies the `is_nil(archived_at)` rule. |\n| [`exclude_read_actions`](#archive-exclude_read_actions){: #archive-exclude_read_actions } | `atom \\| list(atom)` | `[]` | A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter. |\n| [`exclude_upsert_actions`](#archive-exclude_upsert_actions){: #archive-exclude_upsert_actions } | `atom \\| list(atom)` | `[]` | This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more. |\n| [`exclude_destroy_actions`](#archive-exclude_destroy_actions){: #archive-exclude_destroy_actions } | `atom \\| list(atom)` | `[]` | A destroy action or actions that should *not* archive, but instead be left alone. This allows for having a destroy *or* archive pattern. |\n| [`archive_related`](#archive-archive_related){: #archive-archive_related } | `list(atom)` | `[]` | A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation. |\n\n\n\n\n\n\n\n .spark-required::after { content: \"*\"; color: red !important; }","ref":"dsl-asharchival-resource.html#options","title":"Options - DSL: AshArchival.Resource","type":"extras"}],"producer":{"name":"ex_doc","version":[48,46,51,49,46,49]}}