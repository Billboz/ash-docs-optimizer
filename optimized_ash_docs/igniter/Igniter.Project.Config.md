# Igniter.Project.Config — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Project.Config (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- configure(igniter, file_name, app_name, config_path, value, opts \\\ [])
  - __ Opts
- configure_new(igniter, file_path, app_name, config_path, value, opts \\\ [])
  - __ Opts
- configure_runtime_env(igniter, env, app_name, config_path, value, opts \\\ [])
- configures?(zipper, path, app_name)
- configures?(igniter, config_file_name, path, app_name)
- configures_key?(zipper, root_key, key_or_path)
- configures_key?(igniter, config_file_name, root_key, key_or_path)
- configures_root_key?(zipper, root_key)
- configures_root_key?(igniter, config_file_name, root_key)
- modify_configuration_code(zipper, config_path, app_name, value, updater \\\ nil)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Project.Config (igniter v0.3.29)

Codemods and utilities for modifying Elixir config files.

#  __ Summary

##  Functions

configure(igniter, file_name, app_name, config_path, value, opts \\\ [])

Sets a config value in the given configuration file, updating it with `updater` if it is already set.

configure_new(igniter, file_path, app_name, config_path, value, opts \\\ [])

Sets a config value in the given configuration file, if it is not already set.

configure_runtime_env(igniter, env, app_name, config_path, value, opts \\\ [])

configures?(zipper, path, app_name) deprecated

configures?(igniter, config_file_name, path, app_name) deprecated

Returns `true` if the given configuration path is set somewhere after the provided zipper, or in the given configuration file.

configures_key?(zipper, root_key, key_or_path)

Same as `configures_key?/4` but accepts a Zipper.

configures_key?(igniter, config_file_name, root_key, key_or_path)

If the last argument is key, checks if either `config :root_key, :key, ...` or `config :root_key, key: ...` is set.

configures_root_key?(zipper, root_key)

Same as `configures_root_key?/3` but accepts a Zipper instead.

configures_root_key?(igniter, config_file_name, root_key)

Checks if either `config :root_key, _` or `config :root_key, _, _` is present in the provided config file.

modify_configuration_code(zipper, config_path, app_name, value, updater \\\ nil)

Modifies elixir configuration code starting at the configured zipper.

#  __ Functions

__ Link to this function

# configure(igniter, file_name, app_name, config_path, value, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec configure(
      [Igniter.t](external_link)(),
      [Path.t](external_link)(),
      [atom](external_link)(),
      [[atom](external_link)()],
      [term](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Igniter.t](external_link)()

Sets a config value in the given configuration file, updating it with `updater` if it is already set.

If the value is source code, pass `{:code, value}`, otherwise pass just the value.

To produce this source code, we suggest using `Sourceror.parse_string!`. For example:
    
    
    |> Igniter.Project.Config.configure(
      "fake.exs",
      :tailwind,
      [:default, :args],
      {:code,
       Sourceror.parse_string!("""
       ~w(--config=tailwind.config.js --input=css/app.css --output=../output/assets/app.css)
       """)}
    )

##  __ Opts

  * `:updater` \- A function that takes a zipper at a currently configured value and returns a new zipper with the value updated.
  * `failure_message` \- A message to display to the user if the configuration change is unsuccessful.



__ Link to this function

# configure_new(igniter, file_path, app_name, config_path, value, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec configure_new(
      [Igniter.t](external_link)(),
      [Path.t](external_link)(),
      [atom](external_link)(),
      [[atom](external_link)()],
      [term](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Igniter.t](external_link)()

Sets a config value in the given configuration file, if it is not already set.

See `configure/6` for more.

##  __ Opts

  * `failure_message` \- A message to display to the user if the configuration change is unsuccessful.



__ Link to this function

# configure_runtime_env(igniter, env, app_name, config_path, value, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec configure_runtime_env(
      [Igniter.t](external_link)(),
      [atom](external_link)(),
      [atom](external_link)(),
      [[atom](external_link)()],
      [term](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Igniter.t](external_link)()

__ Link to this function

# configures?(zipper, path, app_name)

[ __ View Source ](external_link)

This function is deprecated. Use configures_root_key?/2 or configures_key?/3 instead.. 
    
    
    @spec configures?([Sourceror.Zipper.t](external_link)(), [[atom](external_link)()], [atom](external_link)()) :: [boolean](external_link)()

__ Link to this function

# configures?(igniter, config_file_name, path, app_name)

[ __ View Source ](external_link)

This function is deprecated. Use configures_root_key?/3 or configures_key?/4 instead.. 
    
    
    @spec configures?([Igniter.t](external_link)(), [String.t](external_link)(), [[atom](external_link)()], [atom](external_link)()) :: [boolean](external_link)()

Returns `true` if the given configuration path is set somewhere after the provided zipper, or in the given configuration file.

__ Link to this function

# configures_key?(zipper, root_key, key_or_path)

[ __ View Source ](external_link)
    
    
    @spec configures_key?([Sourceror.Zipper.t](external_link)(), [atom](external_link)(), [atom](external_link)() | [[atom](external_link)()]) :: [boolean](external_link)()

Same as `configures_key?/4` but accepts a Zipper.

__ Link to this function

# configures_key?(igniter, config_file_name, root_key, key_or_path)

[ __ View Source ](external_link)
    
    
    @spec configures_key?(
      [Igniter.t](external_link)(),
      [String.t](external_link)(),
      [atom](external_link)(),
      [atom](external_link)() | [[atom](external_link)()]
    ) :: [boolean](external_link)()

If the last argument is key, checks if either `config :root_key, :key, ...` or `config :root_key, key: ...` is set.

If the last argument is a keyword path, checks if `config :root_key, path_head, [...]` defines `path_rest` or if `config :root_key, [...]` defines `path`, where `path_head` is the first element of `path` and `path_rest` are the remaining elements.

Note: `config_file_name` should _not_ include the `config/` prefix.

__ Link to this function

# configures_root_key?(zipper, root_key)

[ __ View Source ](external_link)
    
    
    @spec configures_root_key?([Sourceror.Zipper.t](external_link)(), [atom](external_link)()) :: [boolean](external_link)()

Same as `configures_root_key?/3` but accepts a Zipper instead.

__ Link to this function

# configures_root_key?(igniter, config_file_name, root_key)

[ __ View Source ](external_link)
    
    
    @spec configures_root_key?([Igniter.t](external_link)(), [String.t](external_link)(), [atom](external_link)()) :: [boolean](external_link)()

Checks if either `config :root_key, _` or `config :root_key, _, _` is present in the provided config file.

Note: The config file name should _not_ include the `config/` prefix.

__ Link to this function

# modify_configuration_code(zipper, config_path, app_name, value, updater \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec modify_configuration_code(
      [Sourceror.Zipper.t](external_link)(),
      [[atom](external_link)()],
      [atom](external_link)(),
      [term](external_link)(),
      ([Sourceror.Zipper.t](external_link)() -> {:ok, [Sourceror.Zipper.t](external_link)()} | :error) | nil
    ) :: [Sourceror.Zipper.t](external_link)()

Modifies elixir configuration code starting at the configured zipper.

If you want to set configuration, use `configure/6` or `configure_new/5` instead. This is a lower-level tool for modifying configuration files when you need to adjust some specific part of them.
