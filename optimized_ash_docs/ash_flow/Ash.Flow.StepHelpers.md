# Ash.Flow.StepHelpers — ash_flow v0.1.1

Project: ash_flow v0.1.1

## Table of Contents

- [ __ View Source ](external_link) Ash.Flow.StepHelpers (ash_flow v0.1.1)
- __ Summary
  - Functions
- __ Functions
- arg(name)
- element(element)
- expr(expr)
- merge(results)
- path(template, path)
- range(start, finish)
- result(step)

__

Search documentation of ash_flow __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Flow.StepHelpers (ash_flow v0.1.1)

Template functions available while declaring steps.

#  __ Summary

##  Functions

arg(name)

Accesses a flow argument

element(element)

Accesses the value being iterated over for a given map step. The name is required so that `map` steps can be nested.

expr(expr)

Constructs an expression that can access

merge(results)

Accesses a flow argument

path(template, path)

Accesses a path in a value lazily. Supports the value being a template, e.g `path(result(:foo), [:bar, 0, :baz])`

range(start, finish)

Creates a range lazily. Supports the start or finish being a template, e.g `range(result(:foo), result(:bar))`

result(step)

Accesses the result of a step

#  __ Functions

__ Link to this function

# arg(name)

[ __ View Source ](external_link)

Accesses a flow argument

__ Link to this function

# element(element)

[ __ View Source ](external_link)

Accesses the value being iterated over for a given map step. The name is required so that `map` steps can be nested.

__ Link to this macro

# expr(expr)

[ __ View Source ](external_link) (macro)

Constructs an expression that can access

__ Link to this function

# merge(results)

[ __ View Source ](external_link)

Accesses a flow argument

__ Link to this function

# path(template, path)

[ __ View Source ](external_link)

Accesses a path in a value lazily. Supports the value being a template, e.g `path(result(:foo), [:bar, 0, :baz])`

__ Link to this function

# range(start, finish)

[ __ View Source ](external_link)

Creates a range lazily. Supports the start or finish being a template, e.g `range(result(:foo), result(:bar))`

__ Link to this function

# result(step)

[ __ View Source ](external_link)

Accesses the result of a step
