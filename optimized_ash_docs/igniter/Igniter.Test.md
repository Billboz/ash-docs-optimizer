# Igniter.Test — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Test (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- apply_igniter(igniter)
- apply_igniter!(igniter)
- assert_creates(igniter, path, content \\\ nil)
- assert_has_patch(igniter, path, patch)
- puts_diff(igniter, opts \\\ [])
  - __ Options
- test_project(opts \\\ [])
  - __ Starting point
  - __ Limitations
  - __ Options
  - __ Examples

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Test (igniter v0.3.29)

Tools for testing with igniter.

#  __ Summary

##  Functions

apply_igniter(igniter)

Fakes applying the changes of an igniter.

apply_igniter!(igniter)

Applies an igniter, raising an error if there are any issues.

assert_creates(igniter, path, content \\\ nil)

assert_has_patch(igniter, path, patch)

puts_diff(igniter, opts \\\ [])

IO.puts the current igniter diff, and returns the igniter

test_project(opts \\\ [])

Sets up a test igniter that has only the files passed to it.

#  __ Functions

__ Link to this function

# apply_igniter(igniter)

[ __ View Source ](external_link)
    
    
    @spec apply_igniter([Igniter.t](external_link)()) ::
      {:ok, [Igniter.t](external_link)(),
       %{
         tasks: [{[String.t](external_link)(), [[String.t](external_link)()]}],
         warnings: [[String.t](external_link)()],
         notices: [[String.t](external_link)()]
       }}
      | {:error, [[String.t](external_link)()]}

Fakes applying the changes of an igniter.

This function returns any tasks, errors, warnings.

__ Link to this function

# apply_igniter!(igniter)

[ __ View Source ](external_link)
    
    
    @spec apply_igniter!([Igniter.t](external_link)()) :: [Igniter.t](external_link)() | [no_return](external_link)()

Applies an igniter, raising an error if there are any issues.

See `apply_igniter/1` for more.

__ Link to this macro

# assert_creates(igniter, path, content \\\ nil)

[ __ View Source ](external_link) (macro)

__ Link to this macro

# assert_has_patch(igniter, path, patch)

[ __ View Source ](external_link) (macro)

__ Link to this function

# puts_diff(igniter, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec puts_diff([Igniter.t](external_link)(), opts :: [Keyword.t](external_link)()) :: [Igniter.t](external_link)()

IO.puts the current igniter diff, and returns the igniter

##  __ Options

  * `label` \- A label to put before the diff.



__ Link to this function

# test_project(opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec test_project(opts :: [Keyword.t](external_link)()) :: [Igniter.t](external_link)()

Sets up a test igniter that has only the files passed to it.

##  __ Starting point

All of the files of an empty mix project are added by default. You can specify more or overwrite the default files by passing a map of file paths to their contents.

##  __ Limitations

You cannot install new dependencies, or use dependencies your own project does not have. If you need to do that kind of thing, you will have to do a test that uses tools like `System.cmd` in a temporary directory.

##  __ Options

  * `files` \- A map of file paths to file contents. The file paths should be relative to the project root.
  * `app_name` \- The name of the application. Defaults to `:test`.



##  __ Examples
    
    
    test_project(files: %{
      "lib/foo.ex" => """
      defmodule MyApp.Foo do
        use Ash.Resource
      end
      """
    })
