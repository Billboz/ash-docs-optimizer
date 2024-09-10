# Read Me — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Read Me
- Reactor
  - __ Sponsors
  - __ Installation
  - __ Documentation
  - __ Contributing
  - __ Licence

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Read Me

![Logo Light](external_link)![Logo Dark](external_link)

# Reactor

![Elixir CI](external_link) [![License: MIT](external_link)](https://opensource.org/licenses/MIT) [![Hex version badge](external_link)](https://hex.pm/packages/reactor)

Reactor is a dynamic, concurrent, dependency resolving saga orchestrator.

Woah. That's a lot. Let's break it down:

  * **Saga orchestrator** A [saga](external_link) is a way of providing transaction-like semantics across multiple distinct resources.
  * **Dependency resolving** reactor allows you to describe the dependencies between your saga steps using _arguments_ which are converted into a [DAG](external_link) and used to compute execution order.
  * **Concurrent** unless otherwise specified reactor will run as many steps as possible concurrently whilst taking into account the results of the dependency resolution.
  * **Dynamic** whilst you can define a reactor statically using our awesome DSL, you can also build workflows dynamically - and even add steps while the reactor is running.



[saga pattern](external_link)

##  __ Sponsors

Thanks to [Alembic Pty Ltd](external_link) for sponsoring a portion of this project's development.

##  __ Installation

The package can be installed by adding `reactor` to your list of dependencies in `mix.exs`:
    
    
    def deps do
      [
        {:reactor, "~> 0.9.1"}
      ]
    end

##  __ Documentation

Documentation for the latest release will be [available on hexdocs](external_link) and for the [`main` branch](external_link).

##  __ Contributing

  * To contribute updates, fixes or new features please fork and open a pull-request against `main`.
  * Please use [conventional commits](external_link) \- this allows us to dynamically generate the changelog.
  * Feel free to ask any questions on the `#reactor` channel on the [Ash Discord](external_link).



##  __ Licence

`reactor` is licensed under the terms of the [MIT license](external_link). See the [`LICENSE` file in this repository](external_link) for details.

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Getting started with Reactor  ](external_link)
