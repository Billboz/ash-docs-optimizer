# Reactor.Error.Internal.UnreachableError — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Error.Internal.UnreachableError exception (reactor v0.9.1)
- __ Summary
  - Functions
- __ Functions
- exception()
- unreachable(message)
- unreachable!(message)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Error.Internal.UnreachableError exception (reactor v0.9.1)

An error that should never happen.

#  __ Summary

##  Functions

exception()

unreachable(message)

Create an unreachable error.

unreachable!(message)

Bang version of `unreachable/1`.

#  __ Functions

__ Link to this function

# exception()

[ __ View Source ](external_link)

__ Link to this macro

# unreachable(message)

[ __ View Source ](external_link) (macro)
    
    
    @spec unreachable([String.t](external_link)()) :: [Macro.output](external_link)()

Create an unreachable error.

__ Link to this macro

# unreachable!(message)

[ __ View Source ](external_link) (macro)
    
    
    @spec unreachable!([String.t](external_link)()) :: [Macro.output](external_link)()

Bang version of `unreachable/1`.
