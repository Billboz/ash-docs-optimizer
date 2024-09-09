# API Reference — ash_paper_trail v0.1.4

Project: ash_paper_trail v0.1.4

## Table of Contents

- [ __ View Source ](external_link) API Reference ash_paper_trail v0.1.4
  - __ Modules

__

Search documentation of ash_paper_trail __ __

__ Settings

#  [ __ View Source ](external_link) API Reference ash_paper_trail v0.1.4

##  __ Modules

[AshPaperTrail](external_link)

Documentation for [`AshPaperTrail`](external_link).

[AshPaperTrail.ChangeBuilders.FullDiff](external_link)

Builds a diff of the changeset that is both fairly easy read and includes a complete representation of the changes mades.

[AshPaperTrail.ChangeBuilders.FullDiff.EmbeddedChange](external_link)

A simple attribute change will be represented as a map

[AshPaperTrail.ChangeBuilders.FullDiff.Helpers](external_link)

Misc helpers for building a full diff of a changeset.

[AshPaperTrail.ChangeBuilders.FullDiff.ListChange](external_link)

A list of changes represented as a map

[AshPaperTrail.ChangeBuilders.FullDiff.SimpleChange](external_link)

A simple attribute change will be represented as a map

[AshPaperTrail.ChangeBuilders.FullDiff.UnionChange](external_link)

A non-embedded union attribute change will be represented as a map

[AshPaperTrail.Domain](external_link)

Documentation for [`AshPaperTrail.Domain`](external_link).

[AshPaperTrail.Domain.Info](external_link)

Introspection helpers for [`AshPaperTrail.Domain`](external_link)

[AshPaperTrail.Domain.Transformers.AllowResourceVersions](external_link)

Adds any version resources to the domain for any resources.

[AshPaperTrail.Resource](external_link)

Documentation for [`AshPaperTrail.Resource`](external_link).

[AshPaperTrail.Resource.BelongsToActor](external_link)

Represents a belongs_to_actor relationship on a version resource

[AshPaperTrail.Resource.Changes.CreateNewVersion](external_link)

Creates a new version whenever a resource is created, deleted, or updated

[AshPaperTrail.Resource.Info](external_link)

Introspection helpers for [`AshPaperTrail.Resource`](external_link)

[AshPaperTrail.Resource.Transformers.CreateVersionResource](external_link)

Creates a version resource for a given resource

[AshPaperTrail.Resource.Transformers.RelateVersionResource](external_link)

Relates the resource to its created version resource

[AshPaperTrail.Resource.Transformers.ValidateBelongsToActor](external_link)

Validates that when multiple belongs_to_actor options are defined that they all allow_nil? true

[AshPaperTrail.Resource.Transformers.VersionOnChange](external_link)

Adds the `CreateNewVersion` change to the resource.

[ Next Page →  Home  ](external_link)
