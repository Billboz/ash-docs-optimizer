# Readme — ash_rbac v0.6.0

Project: ash_rbac v0.6.0

## Table of Contents

- [ __ View Source ](external_link) AshRbac
  - __ Installation

__

Search documentation of ash_rbac __ __

__ Settings

#  [ __ View Source ](external_link) AshRbac

A small extension that allows for easier application of policies
    
    
    rbac do
      role :user do
        fields [:fields, :user, :can, :see]
        actions [:actions, :user, :can :use]
      end
    end

##  __ Installation

The package can be installed by adding `ash_rbac` to your list of dependencies in `mix.exs`:
    
    
    def deps do
      [
        {:ash_rbac, "~> 0.6.0"},
      ]
    end

Documentation can be generated with [ExDoc](external_link) and published on [HexDocs](external_link). Once published, the docs can be found at <https://hexdocs.pm/ash_rbac>.

[ ← Previous Page  Relationships  ](external_link)
