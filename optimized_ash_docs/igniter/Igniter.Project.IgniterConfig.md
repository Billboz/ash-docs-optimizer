# Igniter.Project.IgniterConfig — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Project.IgniterConfig (igniter v0.3.29)
  - __ Options
- __ Summary
  - Functions
- __ Functions
- get(igniter, config)
- setup(igniter)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Project.IgniterConfig (igniter v0.3.29)

Tools for reading and modifying the `.igniter.exs` file.

The command [`mix igniter.setup`](external_link) will generate this file, as well as keep it up to date with any new configurations. You can run this command at any time to update the file without overriding your own config.

If the file does not exist, all values are considered to have their default value.

##  __ Options

  * `module_location` \- 

    * `:outside_matching_folder`, modules will be placed in a folder exactly matching their path.
    * `:inside_matching_folder`, modules who's name matches an existing folder will be placed inside that folder, or moved there if the folder is created.
  * `source_folders` \- A list of folders to manage elixir files in.

  * `dont_move_files` \- A list of strings or regexes. Any files that equal (in the case of strings) or match (in the case of regexes) will not be moved.




#  __ Summary

##  Functions

get(igniter, config)

setup(igniter)

#  __ Functions

__ Link to this function

# get(igniter, config)

[ __ View Source ](external_link)

__ Link to this function

# setup(igniter)

[ __ View Source ](external_link)
