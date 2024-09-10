# Ash.DataLayer.Ets — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.DataLayer.Ets (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- do_add_calculations(records, resource, calculations, domain)
- ets(body)
- stop(resource, tenant \\\ nil)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.DataLayer.Ets (ash v3.4.8)

An ETS (Erlang Term Storage) backed Ash Datalayer, for testing and lightweight usage.

Remember, this does not have support for transactions! This is not recommended for production use, especially in multi-user applications. It can, however, be great for prototyping.

#  __ Summary

##  Functions

do_add_calculations(records, resource, calculations, domain)

ets(body)

stop(resource, tenant \\\ nil)

Stops the storage for a given resource/tenant (deleting all of the data)

#  __ Functions

__ Link to this function

# do_add_calculations(records, resource, calculations, domain)

[ __ View Source ](external_link)

__ Link to this macro

# ets(body)

[ __ View Source ](external_link) (macro)

__ Link to this function

# stop(resource, tenant \\\ nil)

[ __ View Source ](external_link)

Stops the storage for a given resource/tenant (deleting all of the data)
