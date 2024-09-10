# Configuring Igniter — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Configuring Igniter
  - __ Setting up igniter
  - __ Moving files
  - __ `:outside_matching_folder`
  - __ `:inside_matching_folder`

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Configuring Igniter

This guide is for those who are _end-users_ of igniter, for example, using the generators provided by a library that are backed by igniter.

##  __ Setting up igniter

Use [`mix igniter.setup`](external_link) to create a `.igniter.exs` file in your project root. This file configures igniter for your project. You can run this command repeatedly to keep the file up to date over time.

See the documentation in [`Igniter.Project.IgniterConfig`](external_link) for available configuration.

##  __ Moving files

One available configuration is `module_location`. This configuration dictates where modules are placed when there is a folder that exactly matches their module name. There are two available strategies for this, and with igniter not only can you change your mind, but you can actually _move back and forth_ between each strategy. To move any modules to their rightful place, use [`mix igniter.move_files`](external_link).

> ###  __ Only for matching modules
> 
> The following rules are _only applied_ when a top-level module is defined in the file. If it is not, then the file will always be left exactly where it is. It is generally considered best-practice to define one top-level module per file.

##  __ `:outside_matching_folder`

The "standard" way to place a module is to place it in a folder path that exactly matches its module name, inside of `lib/`. For example, a module named `MyApp.MyModule` would be placed in `lib/my_app/my_module.ex`.

Use the default `:outside_matching_folder` to follow this convention in all cases.

##  __ `:inside_matching_folder`

What some people don't like about the previously described strategy is that it can split up related modules. For example:
    
    
    lib/
    └── my_app/
        ├── accounts/
        │   ├── user.ex
        │   ├── organization.ex
        ├── social/
        │   ├── post.ex
        │   ├── comment.ex
        ├── accounts.ex # <- This feels to some like it should be in `/accounts`
        └── social.ex

They would prefer to put that leaf-node module in its matching folder _if it exists_ , and otherwise follow the original convention if not.
    
    
    lib/
    └── my_app/
        ├── accounts/
        │   ├── user.ex
        │   ├── organization.ex
        │   ├── accounts.ex
        ├── social/
        │   ├── post.ex
        │   ├── comment.ex
        │   └── social.ex

[ ← Previous Page  Writing Generators  ](external_link)

[ Next Page →  Change Log  ](external_link)
