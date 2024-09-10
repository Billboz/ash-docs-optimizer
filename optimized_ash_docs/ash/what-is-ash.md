# What is Ash? — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) What is Ash?
  - __ Why should I use it?
  - __ Watch the ElixirConf 2023 Talk

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) What is Ash?

Ash is an opinionated, composable set of application building blocks designed for extensibility. It shines when building web apps, APIs and services (though it can be used for any kind of Elixir application). It has integrations for Phoenix, LiveView, Postgres, GraphQL, Oban, and many more.

To achieve this Ash provides a "Resource" abstraction you use to model the heart of your application. These resources then determine the database schema, API endpoints, state machines, background jobs, and more. Resources are the source of truth for your entire application, and everything stems from them.

Ash is a declarative framework with deep extensibility. We provide a suite of extensions informed from building production apps, as well as a toolkit so you can build your own. We provide escape hatches ranging from the simple and small to the ability to override large pieces of behavior. Your Ash application is just an Elixir application, so if you want to do something completely custom then Ash won’t get in your way.

It is not a web framework, like Phoenix or Rails. It is a framework for building your application layer, independent of how it is exposed or consumed. It is not an **alternative** to frameworks like Phoenix, rather a **complement** to them.

> #### Model your domain, derive the rest
> 
> Ash derives significant portions of your application directly from your resources, with little to no effort required. This allows you to focus on what matters most: your business logic. We leverage the best of the Elixir ecosystem under the hood, providing a single unified tool-chain for our users.

* * *

A good analogy is design systems in the world of web development. When you use a design system, you get a set of components that are designed to work together, and you can build your application by combining these components in different ways. Ash is like a design system for your application's domain model.

Or, for a less technical analogy, Ash is like a fully stocked workshop. When you arrive at the workshop, you may need to learn where everything is, but once you do, you have everything you need to build anything you can dream up.

##  __ Why should I use it?

The fundamental idea behind Ash is that when the various components of your system can have consistent expectations of how the other components around them work, you can ultimately do a significant amount more, with less. For example, once you've defined your resources, it takes only a few additional lines of code to have your database structure generated, and a full featured API built around it.

Ash has many use cases, with varying degrees of complexity. Ash helps you on day 1 of your project, removing boiler plate and allowing you to focus on the essential complexity of your application. It also helps you on year 5, lending consistency, code reuse, and maintainability.

> #### Ash is a force multiplier
> 
> Things that once took days or weeks can be done in hours, and to a degree of quality that would have been unreasonable before. Entire classes of bugs are eliminated. And the best part is, you can do all of this without sacrificing the flexibility, robustness and ecosystem that Elixir is known for.

##  __ Watch the ElixirConf 2023 Talk

[ ← Previous Page  Get Started  ](external_link)

[ Next Page →  Design Principles  ](external_link)
