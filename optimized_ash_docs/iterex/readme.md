# README — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) README
- Iterex
  - __ Sponsors
  - __ Installation
  - __ Contributing
  - __ Licence

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) README

![Logo Light](external_link)![Logo Dark](external_link)

# Iterex

![Elixir CI](external_link) [![License: MIT](external_link)](https://opensource.org/licenses/MIT) [![Hex version badge](external_link)](https://hex.pm/packages/iterex)

Iterex is a library that provides external iterators for Elixir collections.

Iterators provide the flexibility of [`Enum`](external_link) with the laziness of [`Stream`](external_link) and the ability to pause and resume iteration.

The [`Iter`](external_link) module provides the public interface to working with iterators, which wraps an [`Iter.Iterable`](external_link) (to make it easier to pattern match, etc). You'll find most of the functions you'd want from [`Stream`](external_link) and [`Enum`](external_link) provided by this module, but often with different return values to enable you to resume iteration where possible. The [`Enumerable`](external_link) and [`Collectable`](external_link) protocols have been implemented for [`Iter`](external_link) so you can use them as drop in replacements for other collection types where needed.

Some differences from [`Enum`](external_link) and [`Stream`](external_link):

  * [`Iter.next/1`](external_link) \- the core advantage of iterators over streams. Allows you to retrieve the next element from an iterator and a new iterator.
  * [`Iter.prepend/2`](external_link), [`Iter.append/2`](external_link) and `Iter.peek/1..2` \- iterators can be easily composed allowing features that might otherwise break [`Stream`](external_link) semantics.



See the [documentation on hexdocs](external_link) for more information.

##  __ Sponsors

Thanks to [Alembic Pty Ltd](external_link) for sponsoring a portion of this project's development.

##  __ Installation

The package can be installed by adding `iterex` to your list of dependencies in `mix.exs`:
    
    
    def deps do
      [
        {:iterex, "~> 0.1.2"}
      ]
    end

##  __ Contributing

  * To contribute updates, fixes or new features please fork and open a pull-request against `main`.
  * Please use [conventional commits](external_link) \- this allows us to dynamically generate the changelog.



##  __ Licence

`iterex` is licensed under the terms of the [MIT license](external_link). See the [`LICENSE` file in this repository](external_link) for details.

[ ← Previous Page  API Reference  ](external_link)
