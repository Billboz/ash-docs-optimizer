# Ash.Changeset.ManagedRelationshipHelpers — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Changeset.ManagedRelationshipHelpers (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- could_create?(opts)
- could_handle_missing?(opts)
- could_lookup?(opts)
- could_update?(opts)
- must_load?(opts, must_load_opts \\\ [])
- on_lookup_read_action(opts, relationship)
- on_lookup_update_action(opts, relationship)
- on_match_destination_actions(opts, relationship)
- on_missing_destination_actions(opts, relationship)
- on_no_match_destination_actions(opts, relationship)
- sanitize_opts(relationship, opts)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Changeset.ManagedRelationshipHelpers (ash v3.4.8)

Tools for introspecting managed relationships.

Extensions can use this to look at an argument that will be passed to a `manage_relationship` change and determine what their behavior should be. For example, AshAdmin uses these to find out what kind of nested form it should offer for each argument that manages a relationship.

#  __ Summary

##  Functions

could_create?(opts)

could_handle_missing?(opts)

could_lookup?(opts)

could_update?(opts)

must_load?(opts, must_load_opts \\\ [])

on_lookup_read_action(opts, relationship)

on_lookup_update_action(opts, relationship)

on_match_destination_actions(opts, relationship)

on_missing_destination_actions(opts, relationship)

on_no_match_destination_actions(opts, relationship)

sanitize_opts(relationship, opts)

#  __ Functions

__ Link to this function

# could_create?(opts)

[ __ View Source ](external_link)

__ Link to this function

# could_handle_missing?(opts)

[ __ View Source ](external_link)

__ Link to this function

# could_lookup?(opts)

[ __ View Source ](external_link)

__ Link to this function

# could_update?(opts)

[ __ View Source ](external_link)

__ Link to this function

# must_load?(opts, must_load_opts \\\ [])

[ __ View Source ](external_link)

__ Link to this function

# on_lookup_read_action(opts, relationship)

[ __ View Source ](external_link)

__ Link to this function

# on_lookup_update_action(opts, relationship)

[ __ View Source ](external_link)

__ Link to this function

# on_match_destination_actions(opts, relationship)

[ __ View Source ](external_link)

__ Link to this function

# on_missing_destination_actions(opts, relationship)

[ __ View Source ](external_link)

__ Link to this function

# on_no_match_destination_actions(opts, relationship)

[ __ View Source ](external_link)

__ Link to this function

# sanitize_opts(relationship, opts)

[ __ View Source ](external_link)
