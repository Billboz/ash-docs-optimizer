# Spark.CodeHelpers — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.CodeHelpers (spark v2.2.24)
- __ Summary
  - Functions
- __ Functions
- code_identifier(code)
- lift_functions(value, key, caller)
- prewalk(ast, fun)
- prewalk(ast, acc, branch_acc, fun)
- traverse(ast, acc, branch_acc, pre, post)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.CodeHelpers (spark v2.2.24)

Helpers for meta programming around code and code snippets

#  __ Summary

##  Functions

code_identifier(code)

Given a section of Elixir AST, generate a hash of the code to help with generating unique names.

lift_functions(value, key, caller)

Lift anonymous and captured functions.

prewalk(ast, fun)

Copy of [`Macro.prewalk/2`](external_link) w/ a branch accumulator

prewalk(ast, acc, branch_acc, fun)

Copy of [`Macro.prewalk/3`](external_link) w/ a branch accumulator

traverse(ast, acc, branch_acc, pre, post)

A copy of the corresponding `Macro.traverse` function that has a separate accumulator that only goes _down_ each branch, only for `pre`

#  __ Functions

__ Link to this function

# code_identifier(code)

[ __ View Source ](external_link)
    
    
    @spec code_identifier([Macro.t](external_link)()) :: [binary](external_link)()

Given a section of Elixir AST, generate a hash of the code to help with generating unique names.

__ Link to this function

# lift_functions(value, key, caller)

[ __ View Source ](external_link)
    
    
    @spec lift_functions([Macro.t](external_link)(), [atom](external_link)(), [Macro.Env.t](external_link)()) :: [Macro.t](external_link)()

Lift anonymous and captured functions.

Acts as an AST transformer to allow these kinds of functions to be added in the AST:

In the case of captured functions, it ensures they are all captured remote functions (ie calls with both the module and function name present) - this often requires the definition of a new public function on the target module.

In the case of anonymous functions, it converts them into a new public function on the module and returns a (remote) function capture much like that of above.

__ Link to this function

# prewalk(ast, fun)

[ __ View Source ](external_link)

Copy of [`Macro.prewalk/2`](external_link) w/ a branch accumulator

__ Link to this function

# prewalk(ast, acc, branch_acc, fun)

[ __ View Source ](external_link)

Copy of [`Macro.prewalk/3`](external_link) w/ a branch accumulator

__ Link to this function

# traverse(ast, acc, branch_acc, pre, post)

[ __ View Source ](external_link)

A copy of the corresponding `Macro.traverse` function that has a separate accumulator that only goes _down_ each branch, only for `pre`
