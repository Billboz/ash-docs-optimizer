# Ash.Resource.Verifiers.VerifyActionsAtomic — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Verifiers.VerifyActionsAtomic (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- verify(dsl)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Verifiers.VerifyActionsAtomic (ash v3.4.8)

Raises an error on update or destroy actions with `require_atomic?` set to true when it is known at compile time that they will not be atomic.

#  __ Summary

##  Functions

verify(dsl)

Callback implementation for [`Spark.Dsl.Verifier.verify/1`](external_link).

#  __ Functions

__ Link to this function

# verify(dsl)

[ __ View Source ](external_link)

Callback implementation for [`Spark.Dsl.Verifier.verify/1`](external_link).
