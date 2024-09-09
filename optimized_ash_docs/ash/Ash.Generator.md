# Ash.Generator — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Generator (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- action_input(resource_or_record, action, generators \\\ %{})
- changeset(resource_or_record, action, generators \\\ %{}, changeset_options \\\ [])
- initialize_sequence(identifier)
- many_changesets(resource_or_record, action, n, generators \\\ %{}, changeset_options \\\ [])
- many_queries(resource, action, n, generators \\\ %{}, changeset_options \\\ [])
- mixed_map(map, keys)
- query(resource, action, generators \\\ %{}, changeset_options \\\ [])
- seed!(resource, generators \\\ %{})
- seed_input(resource, generators \\\ %{})
- seed_many!(resource, n, generators \\\ %{})
- sequence(identifier, generator, sequencer \\\ fn i -> (i || -1) + 1 end)
  - __ Using a different sequencer
- stop_sequence(identifier)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Generator (ash v3.4.8)

Tools for generating input to Ash resource actions, as well as for seeds.

These tools are young, and various factors are not taken into account. For example, validations and identities are not automatically considered.

If you want to use this with stream data testing, you will likely want to get familiar with [`StreamData`](external_link).

Many functions in this module support overrides, which allow passing down either constant values or your own generators.

For example:
    
    
    # All generated posts will have text as `"text"`. Equivalent to providing `StreamData.constant("text")`.
    Ash.Generator.seed_input(Post, %{text: "text"})

#  __ Summary

##  Functions

action_input(resource_or_record, action, generators \\\ %{})

Generate input meant to be passed into a resource action.

changeset(resource_or_record, action, generators \\\ %{}, changeset_options \\\ [])

Creates the input for the provided action with `action_input/3`, and creates a changeset for that action with that input.

initialize_sequence(identifier)

Starts and links an agent for a sequence, or returns the existing agent pid if it already exists.

many_changesets(resource_or_record, action, n, generators \\\ %{}, changeset_options \\\ [])

Generate n changesets and return them as a list.

many_queries(resource, action, n, generators \\\ %{}, changeset_options \\\ [])

Generate n queries and return them as a list.

mixed_map(map, keys)

Creates a generator map where the keys are required except the list provided

query(resource, action, generators \\\ %{}, changeset_options \\\ [])

Creates the input for the provided action with `action_input/3`, and creates a query for that action with that input.

seed!(resource, generators \\\ %{})

Gets input using `seed_input/2` and passes it to [`Ash.Seed.seed!/2`](external_link), returning the result

seed_input(resource, generators \\\ %{})

Generate input meant to be passed into [`Ash.Seed.seed!/2`](external_link).

seed_many!(resource, n, generators \\\ %{})

Generates an input `n` times, and passes them all to seed, returning the list of seeded items.

sequence(identifier, generator, sequencer \\\ fn i -> (i || -1) + 1 end)

Generate globally unique values.

stop_sequence(identifier)

Stops the agent for a sequence.

#  __ Functions

__ Link to this function

# action_input(resource_or_record, action, generators \\\ %{})

[ __ View Source ](external_link)

Generate input meant to be passed into a resource action.

Currently input for arguments that are passed to a `manage_relationship` are excluded, and you will have to generate them yourself by passing your own generators/values down. See the module documentation for more.

__ Link to this function

# changeset(resource_or_record, action, generators \\\ %{}, changeset_options \\\ [])

[ __ View Source ](external_link)

Creates the input for the provided action with `action_input/3`, and creates a changeset for that action with that input.

See `action_input/3` and the module documentation for more.

__ Link to this function

# initialize_sequence(identifier)

[ __ View Source ](external_link)
    
    
    @spec initialize_sequence([atom](external_link)()) :: [pid](external_link)()

Starts and links an agent for a sequence, or returns the existing agent pid if it already exists.

See `sequence/3` for more.

__ Link to this function

# many_changesets(resource_or_record, action, n, generators \\\ %{}, changeset_options \\\ [])

[ __ View Source ](external_link)

Generate n changesets and return them as a list.

__ Link to this function

# many_queries(resource, action, n, generators \\\ %{}, changeset_options \\\ [])

[ __ View Source ](external_link)

Generate n queries and return them as a list.

__ Link to this function

# mixed_map(map, keys)

[ __ View Source ](external_link)

Creates a generator map where the keys are required except the list provided

__ Link to this function

# query(resource, action, generators \\\ %{}, changeset_options \\\ [])

[ __ View Source ](external_link)

Creates the input for the provided action with `action_input/3`, and creates a query for that action with that input.

See `action_input/3` and the module documentation for more.

__ Link to this function

# seed!(resource, generators \\\ %{})

[ __ View Source ](external_link)

Gets input using `seed_input/2` and passes it to [`Ash.Seed.seed!/2`](external_link), returning the result

__ Link to this function

# seed_input(resource, generators \\\ %{})

[ __ View Source ](external_link)

Generate input meant to be passed into [`Ash.Seed.seed!/2`](external_link).

A map of custom [`StreamData`](external_link) generators can be provided to add to or overwrite the generated input, for example: `Ash.Generator.for_seed(Post, %{text: StreamData.constant("Post")})`

__ Link to this function

# seed_many!(resource, n, generators \\\ %{})

[ __ View Source ](external_link)

Generates an input `n` times, and passes them all to seed, returning the list of seeded items.

__ Link to this function

# sequence(identifier, generator, sequencer \\\ fn i -> (i || -1) + 1 end)

[ __ View Source ](external_link)
    
    
    @spec sequence([pid](external_link)() | [atom](external_link)(), (iterator | nil -> value), (iterator | nil -> iterator)) ::
      [StreamData.t](external_link)(value)
    when iterator: [term](external_link)(), value: [term](external_link)()

Generate globally unique values.

This is useful for generating values that are unique across all resources, such as email addresses, or for generating values that are unique across a single resource, such as identifiers. The values will be unique for anything using the same sequence name.

The name of the identifier will be used as the name of the agent process, so use a unique name not in use anywhere else.

The lifecycle of this generator is tied to the process that initially starts it. In general, that will be the test. In the rare case where you are running async processes that need to share a sequence that is not created in the test process, you can initialize a sequence in the test using `initialize_sequence/1`.

Example:
    
    
    Ash.Generator.sequence(:unique_email, fn i -> "user#{i}@example.com" end) |> Enum.take(3)
    iex> ["user0@example.com", "user1@example.com", "user2@example.com"]

##  __ Using a different sequencer

By default we use an incrementing integer starting at 0. However, if you want to use something else, you can provide your own sequencer. The initial value will be `nil`, which you can use to detect that you are the start of the sequence.

Example:
    
    
    Ash.Generator.sequence(:unique_email, fn i -> "user#{i}@example.com" end, fn num -> (num || 1) - 1 end) |> Enum.take(3)
    iex> ["user0@example.com", "user-1@example.com", "user-2@example.com"]

__ Link to this function

# stop_sequence(identifier)

[ __ View Source ](external_link)

Stops the agent for a sequence.

See `sequence/3` for more.
