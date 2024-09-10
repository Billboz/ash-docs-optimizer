# Igniter — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter (igniter v0.3.29)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- zipper_updater()
- __ Functions
- add_issue(igniter, issue)
- add_notice(igniter, notice)
- add_task(igniter, task, argv \\\ [])
- add_warning(igniter, warning)
- apply_and_fetch_dependencies(igniter, opts \\\ [])
  - __ Options
- assign(igniter, key_vals)
- assign(igniter, key, value)
- compose_task(igniter, task, argv \\\ [], fallback \\\ nil)
- copy_template(igniter, source, target, assigns, opts \\\ [])
- create_new_elixir_file(igniter, path, contents \\\ "", opts \\\ [])
- create_new_file(igniter, path, contents \\\ "", opts \\\ [])
  - __ Options
- create_or_update_elixir_file(igniter, path, contents, updater)
- create_or_update_file(igniter, path, contents, updater)
- do_or_dry_run(igniter, opts \\\ [])
- exists?(igniter, path)
- has_changes?(igniter, paths \\\ nil)
- include_all_elixir_files(igniter)
- include_existing_elixir_file(igniter, path, opts \\\ [])
- include_existing_file(igniter, path, opts \\\ [])
- include_glob(igniter, glob)
- include_or_create_elixir_file(igniter, path, contents \\\ "")
- include_or_create_file(igniter, path, contents \\\ "")
- move_file(igniter, from, from, opts \\\ [])
- new()
- update_assign(igniter, key, default, fun)
- update_elixir_file(igniter, path, func)
- update_file(igniter, path, updater, opts \\\ [])
- update_glob(igniter, glob, func)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter (igniter v0.3.29)

Tools for generating and patching code into an Elixir project.

#  __ Summary

##  Types

t()

zipper_updater()

##  Functions

add_issue(igniter, issue)

Adds an issue to the issues list. Any issues will prevent writing and be displayed to the user.

add_notice(igniter, notice)

Adds a notice to the notices list. Notices are displayed to the user once the igniter finishes running.

add_task(igniter, task, argv \\\ [])

Adds a task to the tasks list. Tasks will be run after all changes have been commited

add_warning(igniter, warning)

Adds a warning to the warnings list. Warnings will not prevent writing, but will be displayed to the user.

apply_and_fetch_dependencies(igniter, opts \\\ [])

Applies the current changes to the `mix.exs` in the Igniter and fetches dependencies.

assign(igniter, key_vals)

assign(igniter, key, value)

Stores the key/value pair in `igniter.assigns`

compose_task(igniter, task, argv \\\ [], fallback \\\ nil)

Finds the [`Igniter.Mix.Task`](external_link) task by name and composes it (calls its `igniter/2`) into the current igniter. If the task doesn't exist, a fallback implementation may be provided as the last argument.

copy_template(igniter, source, target, assigns, opts \\\ [])

Copies an EEx template file from the source path to the target path.

create_new_elixir_file(igniter, path, contents \\\ "", opts \\\ []) deprecated

create_new_file(igniter, path, contents \\\ "", opts \\\ [])

Creates a new file in the project with the provided string contents. Adds an error if it already exists.

create_or_update_elixir_file(igniter, path, contents, updater)

Creates the given file in the project with the provided string contents, or updates it with a function of type `zipper_updater()` if it already exists.

create_or_update_file(igniter, path, contents, updater)

Creates the given file in the project with the provided string contents, or updates it with a function as in `update_file/3` (or with `zipper_updater()` for elixir files) if it already exists.

do_or_dry_run(igniter, opts \\\ [])

Executes or dry-runs a given Igniter.

exists?(igniter, path)

Checks if a file exists on the file system or in the igniter.

has_changes?(igniter, paths \\\ nil)

Returns whether the current Igniter has pending changes.

include_all_elixir_files(igniter)

This function stores in the igniter if its been run before, so it is only run once, which is expensive.

include_existing_elixir_file(igniter, path, opts \\\ []) deprecated

include_existing_file(igniter, path, opts \\\ [])

Includes the given file in the project, expecting it to exist. Does nothing if its already been added.

include_glob(igniter, glob)

Includes all files matching the given glob, expecting them all (for now) to be elixir files.

include_or_create_elixir_file(igniter, path, contents \\\ "") deprecated

include_or_create_file(igniter, path, contents \\\ "")

Includes or creates the given file in the project with the provided contents. Does nothing if its already been added.

move_file(igniter, from, from, opts \\\ [])

new()

Returns a new igniter

update_assign(igniter, key, default, fun)

update_elixir_file(igniter, path, func)

Updates the source code of the given elixir file

update_file(igniter, path, updater, opts \\\ [])

Updates a given file's [`Rewrite.Source`](external_link)

update_glob(igniter, glob, func)

Updates all files matching the given glob with the given zipper function.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Igniter{
      assigns: [map](external_link)(),
      issues: [[String.t](external_link)()],
      moves: %{optional([String.t](external_link)()) => [String.t](external_link)()},
      notices: [[String.t](external_link)()],
      rewrite: [Rewrite.t](external_link)(),
      tasks: [[String.t](external_link)() | {[String.t](external_link)(), [[String.t](external_link)()]}],
      warnings: [[String.t](external_link)()]
    }

__ Link to this type

# zipper_updater()

[ __ View Source ](external_link)
    
    
    @type zipper_updater() :: ([Sourceror.Zipper.t](external_link)() ->
                           {:ok, [Sourceror.Zipper.t](external_link)()}
                           | {:error, [String.t](external_link)() | [[String.t](external_link)()]})

#  __ Functions

__ Link to this function

# add_issue(igniter, issue)

[ __ View Source ](external_link)
    
    
    @spec add_issue(t(), [term](external_link)() | [[term](external_link)()]) :: t()

Adds an issue to the issues list. Any issues will prevent writing and be displayed to the user.

__ Link to this function

# add_notice(igniter, notice)

[ __ View Source ](external_link)
    
    
    @spec add_notice(t(), [String.t](external_link)()) :: t()

Adds a notice to the notices list. Notices are displayed to the user once the igniter finishes running.

__ Link to this function

# add_task(igniter, task, argv \\\ [])

[ __ View Source ](external_link)

Adds a task to the tasks list. Tasks will be run after all changes have been commited

__ Link to this function

# add_warning(igniter, warning)

[ __ View Source ](external_link)
    
    
    @spec add_warning(t(), [term](external_link)() | [[term](external_link)()]) :: t()

Adds a warning to the warnings list. Warnings will not prevent writing, but will be displayed to the user.

__ Link to this function

# apply_and_fetch_dependencies(igniter, opts \\\ [])

[ __ View Source ](external_link)

Applies the current changes to the `mix.exs` in the Igniter and fetches dependencies.

Returns the remaining changes in the Igniter if successful.

##  __ Options

  * `:error_on_abort?` \- If `true`, raises an error if the user aborts the operation. Returns the original igniter if not.
  * `:yes` \- If `true`, automatically applies the changes without prompting the user.



__ Link to this function

# assign(igniter, key_vals)

[ __ View Source ](external_link)

__ Link to this function

# assign(igniter, key, value)

[ __ View Source ](external_link)
    
    
    @spec assign(t(), [atom](external_link)(), [term](external_link)()) :: t()

Stores the key/value pair in `igniter.assigns`

__ Link to this function

# compose_task(igniter, task, argv \\\ [], fallback \\\ nil)

[ __ View Source ](external_link)

Finds the [`Igniter.Mix.Task`](external_link) task by name and composes it (calls its `igniter/2`) into the current igniter. If the task doesn't exist, a fallback implementation may be provided as the last argument.

__ Link to this function

# copy_template(igniter, source, target, assigns, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec copy_template(
      igniter :: t(),
      target :: [Path.t](external_link)(),
      source :: [Path.t](external_link)(),
      assigns :: [Keyword.t](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: t()

Copies an EEx template file from the source path to the target path.

Accepts the same options as `create_new_file/4`.

__ Link to this function

# create_new_elixir_file(igniter, path, contents \\\ "", opts \\\ [])

[ __ View Source ](external_link)

This function is deprecated. Use `create_new_file/4`. 

__ Link to this function

# create_new_file(igniter, path, contents \\\ "", opts \\\ [])

[ __ View Source ](external_link)

Creates a new file in the project with the provided string contents. Adds an error if it already exists.

##  __ Options

  * `:on_exists` \- The action to take if the file already exists. Can be
    * `:error` (default) - Adds an error that prevents any eventual write.
    * `:warning` \- Warns when writing but continues (without overwriting)
    * `:skip` \- Skips writing the file without a warning
    * `:overwrite` \- Warns when writing and overwrites the content with the new content



__ Link to this function

# create_or_update_elixir_file(igniter, path, contents, updater)

[ __ View Source ](external_link)
    
    
    @spec create_or_update_elixir_file(t(), [Path.t](external_link)(), [String.t](external_link)(), zipper_updater()) :: t()

Creates the given file in the project with the provided string contents, or updates it with a function of type `zipper_updater()` if it already exists.

__ Link to this function

# create_or_update_file(igniter, path, contents, updater)

[ __ View Source ](external_link)

Creates the given file in the project with the provided string contents, or updates it with a function as in `update_file/3` (or with `zipper_updater()` for elixir files) if it already exists.

__ Link to this function

# do_or_dry_run(igniter, opts \\\ [])

[ __ View Source ](external_link)

Executes or dry-runs a given Igniter.

__ Link to this function

# exists?(igniter, path)

[ __ View Source ](external_link)
    
    
    @spec exists?(t(), [Path.t](external_link)()) :: [boolean](external_link)()

Checks if a file exists on the file system or in the igniter.

__ Link to this function

# has_changes?(igniter, paths \\\ nil)

[ __ View Source ](external_link)

Returns whether the current Igniter has pending changes.

__ Link to this function

# include_all_elixir_files(igniter)

[ __ View Source ](external_link)

This function stores in the igniter if its been run before, so it is only run once, which is expensive.

__ Link to this function

# include_existing_elixir_file(igniter, path, opts \\\ [])

[ __ View Source ](external_link)

This function is deprecated. Use `include_existing_file/3` instead. 
    
    
    @spec include_existing_elixir_file(t(), [Path.t](external_link)(), opts :: [Keyword.t](external_link)()) :: t()

__ Link to this function

# include_existing_file(igniter, path, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec include_existing_file(t(), [Path.t](external_link)(), opts :: [Keyword.t](external_link)()) :: t()

Includes the given file in the project, expecting it to exist. Does nothing if its already been added.

__ Link to this function

# include_glob(igniter, glob)

[ __ View Source ](external_link)
    
    
    @spec include_glob(t(), [Path.t](external_link)() | [GlobEx.t](external_link)()) :: t()

Includes all files matching the given glob, expecting them all (for now) to be elixir files.

__ Link to this function

# include_or_create_elixir_file(igniter, path, contents \\\ "")

[ __ View Source ](external_link)

This function is deprecated. Use `include_or_create_file/3` instead. 
    
    
    @spec include_or_create_elixir_file(t(), [Path.t](external_link)(), contents :: [String.t](external_link)()) :: t()

__ Link to this function

# include_or_create_file(igniter, path, contents \\\ "")

[ __ View Source ](external_link)
    
    
    @spec include_or_create_file(t(), [Path.t](external_link)(), contents :: [String.t](external_link)()) :: t()

Includes or creates the given file in the project with the provided contents. Does nothing if its already been added.

__ Link to this function

# move_file(igniter, from, from, opts \\\ [])

[ __ View Source ](external_link)

__ Link to this function

# new()

[ __ View Source ](external_link)
    
    
    @spec new() :: t()

Returns a new igniter

__ Link to this function

# update_assign(igniter, key, default, fun)

[ __ View Source ](external_link)

__ Link to this function

# update_elixir_file(igniter, path, func)

[ __ View Source ](external_link)
    
    
    @spec update_elixir_file(t(), [Path.t](external_link)(), zipper_updater()) :: t()

Updates the source code of the given elixir file

__ Link to this function

# update_file(igniter, path, updater, opts \\\ [])

[ __ View Source ](external_link)

Updates a given file's [`Rewrite.Source`](external_link)

__ Link to this function

# update_glob(igniter, glob, func)

[ __ View Source ](external_link)
    
    
    @spec update_glob(
      t(),
      [Path.t](external_link)() | [GlobEx.t](external_link)(),
      zipper_updater()
    ) :: t()

Updates all files matching the given glob with the given zipper function.

Adds any new files matching that glob to the igniter first.
