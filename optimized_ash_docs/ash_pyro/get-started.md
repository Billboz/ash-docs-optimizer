# Get Started — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) Get Started
  - __ Installation
    - __ Steps

__

Search documentation of AshPyro __ __

__ Settings

#  [ __ View Source ](external_link) Get Started

This guide steps through the installation process for AshPyro.

##  __ Installation

The installation process is pretty straightforward.

###  __ Steps

These steps assume you understand how to install and use Ash, and does not cover its installation or configuration.

  1. Add the appropriate dependencies:
    
        def deps do
      [
     {:ash_pyro, "~> 0.2.1"},
     {:ash, "~> 2.4"},
      ]
    end

  2. Compare your `.formatter.exs` to this example and add anything you are missing:
    
        [
      import_deps: [:ash_pyro, :ash],
      plugins: [Spark.Formatter]
    ]




[ ← Previous Page  About  ](external_link)
