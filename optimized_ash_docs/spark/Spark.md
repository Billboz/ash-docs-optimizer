# Spark — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark (spark v2.2.24)
- __ Summary
  - Functions
- __ Functions
- extensions(module)
- implements_behaviour?(module, behaviour)
- otp_app(module)
- sparks(otp_app, spark)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark (spark v2.2.24)

Documentation for [`Spark`](external_link).

#  __ Summary

##  Functions

extensions(module)

Returns the extensions a given DSL uses

implements_behaviour?(module, behaviour)

Returns true if the module implements the specified behavior

otp_app(module)

Returns the configured otp_app of a given DSL instance

sparks(otp_app, spark)

Returns all modules that implement the specified behaviour for a given otp_app.

#  __ Functions

__ Link to this function

# extensions(module)

[ __ View Source ](external_link)

Returns the extensions a given DSL uses

__ Link to this function

# implements_behaviour?(module, behaviour)

[ __ View Source ](external_link)

Returns true if the module implements the specified behavior

__ Link to this function

# otp_app(module)

[ __ View Source ](external_link)

Returns the configured otp_app of a given DSL instance

__ Link to this function

# sparks(otp_app, spark)

[ __ View Source ](external_link)

Returns all modules that implement the specified behaviour for a given otp_app.

Should only be called at runtime, not at compile time, as it will have inconsistent results at compile time.
