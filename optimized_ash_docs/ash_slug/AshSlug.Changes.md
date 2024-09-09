# AshSlug.Changes — ash_slug v0.1.0

Project: ash_slug v0.1.0

## Table of Contents

- [ __ View Source ](external_link) AshSlug.Changes (ash_slug v0.1.0)
- __ Summary
  - Functions
- __ Functions
- slugify(attribute, opts \\\ [])
  - __ Options
  - __ Examples

__

Search documentation of ash_slug __ __

__ Settings

#  [ __ View Source ](external_link) AshSlug.Changes (ash_slug v0.1.0)

Change functions for the [`AshSlug`](external_link) extension.

#  __ Summary

##  Functions

slugify(attribute, opts \\\ [])

Slugify a string attribute on a changeset.

#  __ Functions

__ Link to this function

# slugify(attribute, opts \\\ [])

[ __ View Source ](external_link)

Slugify a string attribute on a changeset.

##  __ Options

  * `:attribute` ([`atom/0`](external_link)) - Required. The attribute to slugify.

  * `:into` ([`atom/0`](external_link)) - The attribute to store the slug in. Unless specified, the slug will be stored in the same attribute.

  * `:lowercase?` ([`boolean/0`](external_link)) - Whether to lowercase the slug. The default value is `true`.

  * `:separator` ([`String.t/0`](external_link)) - The separator to use between words in the slug. The default value is `"-"`.

  * `:truncate` ([`integer/0`](external_link)) - Truncates the slug at this character length, shortened to the nearest word.

  * `:ignore` (one or a list of [`String.t/0`](external_link)) - A string or list of strings of characters to ignore when slugifying. The default value is `[]`.




##  __ Examples
    
    
    change slugify(:text)
    change slugify(:text, into: :text_slug, lowercase?: false, ignore: [".", "!"])
