# AshGeo — AshGeo v0.3.0

Project: AshGeo v0.3.0

## Table of Contents

- AshGeo (AshGeo v0.3.0)
- __ Summary
  - Functions
- __ Functions
- geo_type_aliases()
- geo_types()
- is_geo(struct)
- module_suffix_to_snake(module)
- topo_functions()

__

Search documentation of AshGeo __ __

__ Settings

#  AshGeo (AshGeo v0.3.0)

Base module containing common utility functions

This module contains some things used internally that may also be useful outside of [`AshGeo`](external_link) itself, but depending upon what you what to do, you should probably be using one of:

  * [`AshGeo.Validation`](external_link) for validations of [`Geo`](external_link) types and using `Topo` functions
  * [`AshGeo.Postgis`](external_link) for [PostGIS `st_*` functions](external_link) for use with [`Ash.Expr`](3.3.1/Ash.Expr.html)
  * [`AshGeo.GeoAny`](external_link), [`AshGeo.GeoJson`](external_link), [`AshGeo.GeoWkt`](external_link), [`AshGeo.GeoWkb`](external_link) for input types
  * [`AshGeo.Geometry`](external_link) for base geometry type



#  __ Summary

##  Functions

geo_type_aliases()

Type aliases for [`Geo`](external_link) types, auto-generated from the module names

geo_types()

List of [`Geo`](external_link) types

is_geo(struct)

Macro to check whether a module is a [`Geo`](external_link) type, suitable for use in guards

module_suffix_to_snake(module)

Transform the last element of a module path into a snake-cased atom.

topo_functions()

List of `Topo` functions

#  __ Functions

__ Link to this function

# geo_type_aliases()

(since 0.1.0)

Type aliases for [`Geo`](external_link) types, auto-generated from the module names

For example, the alias derived from [`Geo.PointZM`](external_link) is `:point_zm`.

__ Link to this function

# geo_types()

(since 0.1.0)

List of [`Geo`](external_link) types

__ Link to this macro

# is_geo(struct)

(since 0.1.0) (macro)

Macro to check whether a module is a [`Geo`](external_link) type, suitable for use in guards

__ Link to this function

# module_suffix_to_snake(module)

(since 0.1.0)

Transform the last element of a module path into a snake-cased atom.

__ Link to this function

# topo_functions()

(since 0.1.0)

List of `Topo` functions
