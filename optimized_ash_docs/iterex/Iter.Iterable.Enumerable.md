# Iter.Iterable.Enumerable — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.Enumerable (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- child_spec(init_arg)
- new(enum)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.Enumerable (iterex v0.1.2)

Can we convert a enum into an iterable? Let's find out.

#  __ Summary

##  Types

t()

##  Functions

child_spec(init_arg)

Returns a specification to start this module under a supervisor.

new(enum)

Wrap an enumerable in a genserver

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.Enumerable{pid: [pid](external_link)()}

#  __ Functions

__ Link to this function

# child_spec(init_arg)

[ __ View Source ](external_link)

Returns a specification to start this module under a supervisor.

See [`Supervisor`](external_link).

__ Link to this function

# new(enum)

[ __ View Source ](external_link)
    
    
    @spec new([Enumerable.t](external_link)()) :: t()

Wrap an enumerable in a genserver
