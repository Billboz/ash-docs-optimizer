# Igniter.Code.Map — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Code.Map (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- mappify(list, value)
- put_in_map(zipper, path, value, updater \\\ nil)
- set_map_key(zipper, key, value, updater)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Code.Map (igniter v0.3.29)

Utilities for working with maps.

#  __ Summary

##  Functions

mappify(list, value)

Puts a value into nested maps at the given path

put_in_map(zipper, path, value, updater \\\ nil)

Puts a value at a path into a map, calling `updater` on the zipper at the value if the key is already present

set_map_key(zipper, key, value, updater)

Puts a key into a map, calling `updater` on the zipper at the value if the key is already present

#  __ Functions

__ Link to this function

# mappify(list, value)

[ __ View Source ](external_link)

Puts a value into nested maps at the given path

__ Link to this function

# put_in_map(zipper, path, value, updater \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec put_in_map(
      [Sourceror.Zipper.t](external_link)(),
      [[term](external_link)()],
      [term](external_link)(),
      ([Sourceror.Zipper.t](external_link)() -> {:ok, [Sourceror.Zipper.t](external_link)()} | :error) | nil
    ) :: {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Puts a value at a path into a map, calling `updater` on the zipper at the value if the key is already present

__ Link to this function

# set_map_key(zipper, key, value, updater)

[ __ View Source ](external_link)
    
    
    @spec set_map_key([Sourceror.Zipper.t](external_link)(), [term](external_link)(), [term](external_link)(), ([Sourceror.Zipper.t](external_link)() ->
                                                         {:ok, [Sourceror.Zipper.t](external_link)()}
                                                         | :error)) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Puts a key into a map, calling `updater` on the zipper at the value if the key is already present
