# Writing Extensions — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Writing Extensions
  - __ The DSL declaration
  - __ Transformers
  - __ Introspection

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Writing Extensions

Writing extensions generally involves three main components.

##  __ The DSL declaration

The DSL is declared as a series of [`Spark.Dsl.Section`](external_link), which can contain [`Spark.Dsl.Entity`](external_link) and further [`Spark.Dsl.Section`](external_link) structs. See [`Spark.Dsl.Section`](external_link) and [`Spark.Dsl.Entity`](external_link) for more information.

##  __ Transformers

Extension writing gets a bit more complicated when you get into the world of transformers, but this is also where a lot of the power is. Each transformer can declare other transformers it must go before or after, and then is given the opportunity to modify the entirety of the DSL it is extending up to that point. This allows extensions to make rich modifications to the structure in question. See [`Spark.Dsl.Transformer`](external_link) for more information

##  __ Introspection

Use functions in [`Spark.Dsl.Extension`](external_link) to retrieve the stored values from the DSL and expose them in a module. The convention is to place functions for something like `MyApp.MyExtension` in `MyApp.MyExtension.Info`. Using introspection functions like this allows for a richer introspection API (i.e not just getting and retrieving raw values), and it also allows us to add type specs and documentation, which is helpful when working generically. I.e `module_as_variable.table()` can't be known by dialyzer, whereas `Extension.table(module)` can be.

[ ← Previous Page  Upgrading to 2.0  ](external_link)

[ Next Page →  Splitting Up Large DSLs  ](external_link)
