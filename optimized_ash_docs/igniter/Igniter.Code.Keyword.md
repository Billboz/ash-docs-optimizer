# Igniter.Code.Keyword — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Code.Keyword (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- get_key(zipper, key)
- keyword_has_path?(zipper, list)
- keywordify(list, value)
- put_in_keyword(zipper, path, value, updater \\\ nil)
- remove_keyword_key(zipper, key)
- set_keyword_key(zipper, key, value, updater)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Code.Keyword (igniter v0.3.29)

Utilities for working with keyword.

#  __ Summary

##  Functions

get_key(zipper, key)

Returns true if the node is a nested keyword list containing a value at the given path.

keyword_has_path?(zipper, list)

Returns true if the node is a nested keyword list containing a value at the given path.

keywordify(list, value)

Puts into nested keyword lists represented by `path`

put_in_keyword(zipper, path, value, updater \\\ nil)

Puts a value at a path into a keyword, calling `updater` on the zipper at the value if the key is already present

remove_keyword_key(zipper, key)

Removes a key from a keyword list if present. Returns `:error` only if the node is not a list

set_keyword_key(zipper, key, value, updater)

#  __ Functions

__ Link to this function

# get_key(zipper, key)

[ __ View Source ](external_link)
    
    
    @spec get_key([Sourceror.Zipper.t](external_link)(), [atom](external_link)()) :: [term](external_link)()

Returns true if the node is a nested keyword list containing a value at the given path.

__ Link to this function

# keyword_has_path?(zipper, list)

[ __ View Source ](external_link)
    
    
    @spec keyword_has_path?([Sourceror.Zipper.t](external_link)(), [[atom](external_link)()]) :: [boolean](external_link)()

Returns true if the node is a nested keyword list containing a value at the given path.

__ Link to this function

# keywordify(list, value)

[ __ View Source ](external_link)
    
    
    @spec keywordify(path :: [[atom](external_link)()], value :: [any](external_link)()) :: [any](external_link)()

Puts into nested keyword lists represented by `path`

__ Link to this function

# put_in_keyword(zipper, path, value, updater \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec put_in_keyword(
      [Sourceror.Zipper.t](external_link)(),
      [[atom](external_link)()],
      [term](external_link)(),
      ([Sourceror.Zipper.t](external_link)() -> {:ok, [Sourceror.Zipper.t](external_link)()} | :error) | nil
    ) :: {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Puts a value at a path into a keyword, calling `updater` on the zipper at the value if the key is already present

__ Link to this function

# remove_keyword_key(zipper, key)

[ __ View Source ](external_link)
    
    
    @spec remove_keyword_key([Sourceror.Zipper.t](external_link)(), [atom](external_link)()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Removes a key from a keyword list if present. Returns `:error` only if the node is not a list

__ Link to this function

# set_keyword_key(zipper, key, value, updater)

[ __ View Source ](external_link)
    
    
    @spec set_keyword_key(
      [Sourceror.Zipper.t](external_link)(),
      [atom](external_link)(),
      [term](external_link)(),
      ([Sourceror.Zipper.t](external_link)() -> {:ok, [Sourceror.Zipper.t](external_link)()} | :error)
    ) :: {:ok, [Sourceror.Zipper.t](external_link)()} | :error
