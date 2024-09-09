# About — AshPyroComponents v0.1.0

Project: AshPyroComponents v0.1.0

## Table of Contents

- [ __ View Source ](external_link) About
  - __ What "problem" is it solving?

__

Search documentation of AshPyroComponents __ __

__ Settings

#  [ __ View Source ](external_link) About

Pyro is a suite of libraries for building UI in Phoenix.

  * [Pyro](external_link)

Component tooling for Phoenix.

    * Customizable "overrides" system for granularly customizable themes
    * Extended component attributes, e.g. CSS merging
  * [PyroComponents](external_link)

Ready-made Phoenix components, built with pyro.

    * Heex component library
    * Overrides presets to get started quickly while allowing deep customization
  * [AshPyro](external_link)

Declarative UI for Ash Framework.

    * Ash extensions providing a declarative UI DSL
  * [AshPyroComponents](external_link)

Components that automatically render PyroComponents declaratively via AshPyro.




To install AshPyroComponents and and hit the ground running, follow the [Get Started](external_link) guide. For the other features, please see the "Get Started" guide for the appropriate library instead.

##  __ What "problem" is it solving?

The default model of Phoenix is to generate, then customize. While this does provide great isolation, I have found it pretty tedious to repeatedly make very similar copy & paste boilerplate changes to the generated code every time I create a new Phoenix app. Additionally, some things (like timezone localization) are quite complicated and it would be nice for them to be handled by a library that is updated with future improvements. Copy & pasting boilerplate will lead to maintenance burdens down the road.

The tricky part is handling all the bespoke features in each app while sharing as much as possible. The goal is to provide a wide array of tooling, helpers and components with sane defaults, while allowing very granular overrides and optional libraries. By separating each level of features, you can choose which parts of Pyro to leverage, and which to implement yourself.

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Get Started  ](external_link)
