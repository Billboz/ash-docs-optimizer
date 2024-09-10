# Ash.SatSolver — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.SatSolver (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- b(statement)
- contains?(l1, l2)
- find_non_equal_overlap(expression)
- left_excludes_right(left, right)
- left_implies_right(left, right)
- lift_equals_out_of_in(expression)
- mutually_exclusive(predicates, acc \\\ [])
- mutually_exclusive_and_collectively_exhaustive(predicates)
- mutually_inclusive(predicates, acc \\\ [])
- right_excludes_left(left, right)
- right_implies_left(left, right)
- solutions_to_predicate_values(solution, bindings)
- solve_expression(cnf)
- split_in_expressions(sub_expr, non_equal_overlap)
- strict_filter_subset(filter, candidate)
- synonymous_relationship_paths?(left_resource, candidate, search, right_resource \\\ nil)
- to_cnf(expression)
- transform(resource, expression)
- transform_and_solve(resource, expression)
- unbind(expression, map)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.SatSolver (ash v3.4.8)

Tools for working with the satsolver that drives filter subset checking (for authorization)

#  __ Summary

##  Functions

b(statement)

Creates tuples of a boolean statement.

contains?(l1, l2)

find_non_equal_overlap(expression)

left_excludes_right(left, right)

Returns `b(not (left and right))`

left_implies_right(left, right)

Returns `b(not (left and not right))`

lift_equals_out_of_in(expression)

mutually_exclusive(predicates, acc \\\ [])

Returns a statement expressing that the predicates are mutually exclusive.

mutually_exclusive_and_collectively_exhaustive(predicates)

Returns a statement expressing that the predicates are mutually exclusive and collectively exhaustive.

mutually_inclusive(predicates, acc \\\ [])

Returns a statement expressing that the predicates are mutually inclusive

right_excludes_left(left, right)

Returns `b(not (right and left))`

right_implies_left(left, right)

Returns `b(not (right and not left))`

solutions_to_predicate_values(solution, bindings)

solve_expression(cnf)

split_in_expressions(sub_expr, non_equal_overlap)

strict_filter_subset(filter, candidate)

Returns true if the candidate filter returns the same or less data than the filter

synonymous_relationship_paths?(left_resource, candidate, search, right_resource \\\ nil)

Returns `true` if the relationship paths are synonymous from a data perspective

to_cnf(expression)

Transforms a statement to Conjunctive Normal Form(CNF), as lists of lists of integers.

transform(resource, expression)

Prepares a filter for comparison

transform_and_solve(resource, expression)

Calls `transform/2` and solves the expression

unbind(expression, map)

Remaps integers back to clauses

#  __ Functions

__ Link to this macro

# b(statement)

[ __ View Source ](external_link) (macro)

Creates tuples of a boolean statement.

i.e `b(1 and 2) #=> {:and, 1, 2}`

__ Link to this function

# contains?(l1, l2)

[ __ View Source ](external_link)

__ Link to this function

# find_non_equal_overlap(expression)

[ __ View Source ](external_link)

__ Link to this function

# left_excludes_right(left, right)

[ __ View Source ](external_link)

Returns `b(not (left and right))`

__ Link to this function

# left_implies_right(left, right)

[ __ View Source ](external_link)

Returns `b(not (left and not right))`

__ Link to this function

# lift_equals_out_of_in(expression)

[ __ View Source ](external_link)

__ Link to this function

# mutually_exclusive(predicates, acc \\\ [])

[ __ View Source ](external_link)

Returns a statement expressing that the predicates are mutually exclusive.

__ Link to this function

# mutually_exclusive_and_collectively_exhaustive(predicates)

[ __ View Source ](external_link)

Returns a statement expressing that the predicates are mutually exclusive and collectively exhaustive.

__ Link to this function

# mutually_inclusive(predicates, acc \\\ [])

[ __ View Source ](external_link)

Returns a statement expressing that the predicates are mutually inclusive

__ Link to this function

# right_excludes_left(left, right)

[ __ View Source ](external_link)

Returns `b(not (right and left))`

__ Link to this function

# right_implies_left(left, right)

[ __ View Source ](external_link)

Returns `b(not (right and not left))`

__ Link to this function

# solutions_to_predicate_values(solution, bindings)

[ __ View Source ](external_link)

__ Link to this function

# solve_expression(cnf)

[ __ View Source ](external_link)

__ Link to this function

# split_in_expressions(sub_expr, non_equal_overlap)

[ __ View Source ](external_link)

__ Link to this function

# strict_filter_subset(filter, candidate)

[ __ View Source ](external_link)

Returns true if the candidate filter returns the same or less data than the filter

__ Link to this function

# synonymous_relationship_paths?(left_resource, candidate, search, right_resource \\\ nil)

[ __ View Source ](external_link)

Returns `true` if the relationship paths are synonymous from a data perspective

__ Link to this function

# to_cnf(expression)

[ __ View Source ](external_link)

Transforms a statement to Conjunctive Normal Form(CNF), as lists of lists of integers.

__ Link to this function

# transform(resource, expression)

[ __ View Source ](external_link)

Prepares a filter for comparison

__ Link to this function

# transform_and_solve(resource, expression)

[ __ View Source ](external_link)

Calls `transform/2` and solves the expression

__ Link to this function

# unbind(expression, map)

[ __ View Source ](external_link)

Remaps integers back to clauses
