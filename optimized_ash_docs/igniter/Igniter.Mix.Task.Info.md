# Igniter.Mix.Task.Info — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Mix.Task.Info (igniter v0.3.29)
  - __ Configurable Keys
  - __ Positonal Arguments
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- global_options()

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Mix.Task.Info (igniter v0.3.29)

Info for an [`Igniter.Mix.Task`](external_link), returned from the `info/2` callback

##  __ Configurable Keys

  * `schema` \- The option schema for this task, in the format given to [`OptionParser`](external_link), i.e `[name: :string]`
  * `positional` \- A list of positional arguments that this task accepts. A list of atoms, or a keyword list with the option and config. See the positional arguments section for more.
  * `aliases` \- A map of aliases to the schema keys.
  * `composes` \- A list of tasks that this task might compose.
  * `installs` \- A list of dependencies that should be installed before continuing.
  * `adds_deps` \- A list of dependencies that should be added to the `mix.exs`, but do not need to be installed before continuing.
  * `extra_args?` \- Whether or not to allow extra arguments. This forces all tasks that compose this task to allow extra args as well.
  * `example` \- An example usage of the task. This is used in the help output.



Your task should _always_ use `switches` and not `strict` to validate provided options!

##  __ Positonal Arguments

Each positional argument can provide the following options:

  * `:optional` \- Whether or not the argument is optional. Defaults to `false`.
  * `:rest` \- Whether or not the argument consumes the rest of the positional arguments. Defaults to `false`.
    
              The value will be converted to a list automatically.




#  __ Summary

##  Types

t()

##  Functions

global_options()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Igniter.Mix.Task.Info{
      adds_deps: [{[atom](external_link)(), [String.t](external_link)()}],
      aliases: [Keyword.t](external_link)(),
      composes: [[String.t](external_link)()],
      example: [String.t](external_link)() | nil,
      extra_args?: [boolean](external_link)(),
      installs: [{[atom](external_link)(), [String.t](external_link)()}],
      only: [[atom](external_link)()],
      positional: [[atom](external_link)() | {[atom](external_link)(), optional: [boolean](external_link)(), rest: [boolean](external_link)()}],
      schema: [Keyword.t](external_link)()
    }

#  __ Functions

__ Link to this function

# global_options()

[ __ View Source ](external_link)
