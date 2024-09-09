# AshGeo.Validation — AshGeo v0.3.0

Project: AshGeo v0.3.0

## Table of Contents

- AshGeo.Validation (AshGeo v0.3.0)
- __ Summary
  - Functions
- __ Functions
- contains(geometry_a, geometry_b)
- disjoint(geometry_a, geometry_b)
- equals(geometry_a, geometry_b)
- intersects(geometry_a, geometry_b)
- is_geometry_collection(argument)
- is_line_string(argument)
- is_line_string_z(argument)
- is_multi_line_string(argument)
- is_multi_line_string_z(argument)
- is_multi_point(argument)
- is_multi_point_z(argument)
- is_multi_polygon(argument)
- is_multi_polygon_z(argument)
- is_point(argument)
- is_point_m(argument)
- is_point_z(argument)
- is_point_zm(argument)
- is_polygon(argument)
- is_polygon_z(argument)
- within(geometry_a, geometry_b)

__

Search documentation of AshGeo __ __

__ Settings

#  AshGeo.Validation (AshGeo v0.3.0)

Validation shorthands for `Geo.PostGIS` types for use with Ash `validate`
    
    
    actions do
      read :containing do
        argument :point, :geo_any
    
        validate is_point(:point)
    
        filter expr(^st_contains(^arg(:point)))
      end
    end

#  __ Summary

##  Functions

contains(geometry_a, geometry_b)

Check geometry A against geometry B using `Topo.contains?/2`

disjoint(geometry_a, geometry_b)

Check geometry A against geometry B using `Topo.disjoint?/2`

equals(geometry_a, geometry_b)

Check geometry A against geometry B using `Topo.equals?/2`

intersects(geometry_a, geometry_b)

Check geometry A against geometry B using `Topo.intersects?/2`

is_geometry_collection(argument)

Check argument is a `:geometry_collection` ([`Geo.GeometryCollection`](external_link))

is_line_string(argument)

Check argument is a `:line_string` ([`Geo.LineString`](external_link))

is_line_string_z(argument)

Check argument is a `:line_string_z` ([`Geo.LineStringZ`](external_link))

is_multi_line_string(argument)

Check argument is a `:multi_line_string` ([`Geo.MultiLineString`](external_link))

is_multi_line_string_z(argument)

Check argument is a `:multi_line_string_z` ([`Geo.MultiLineStringZ`](external_link))

is_multi_point(argument)

Check argument is a `:multi_point` ([`Geo.MultiPoint`](external_link))

is_multi_point_z(argument)

Check argument is a `:multi_point_z` ([`Geo.MultiPointZ`](external_link))

is_multi_polygon(argument)

Check argument is a `:multi_polygon` ([`Geo.MultiPolygon`](external_link))

is_multi_polygon_z(argument)

Check argument is a `:multi_polygon_z` ([`Geo.MultiPolygonZ`](external_link))

is_point(argument)

Check argument is a `:point` ([`Geo.Point`](external_link))

is_point_m(argument)

Check argument is a `:point_m` ([`Geo.PointM`](external_link))

is_point_z(argument)

Check argument is a `:point_z` ([`Geo.PointZ`](external_link))

is_point_zm(argument)

Check argument is a `:point_zm` ([`Geo.PointZM`](external_link))

is_polygon(argument)

Check argument is a `:polygon` ([`Geo.Polygon`](external_link))

is_polygon_z(argument)

Check argument is a `:polygon_z` ([`Geo.PolygonZ`](external_link))

within(geometry_a, geometry_b)

Check geometry A against geometry B using `Topo.within?/2`

#  __ Functions

__ Link to this macro

# contains(geometry_a, geometry_b)

(since 0.1.0) (macro)

Check geometry A against geometry B using `Topo.contains?/2`

__ Link to this macro

# disjoint(geometry_a, geometry_b)

(since 0.1.0) (macro)

Check geometry A against geometry B using `Topo.disjoint?/2`

__ Link to this macro

# equals(geometry_a, geometry_b)

(since 0.1.0) (macro)

Check geometry A against geometry B using `Topo.equals?/2`

__ Link to this macro

# intersects(geometry_a, geometry_b)

(since 0.1.0) (macro)

Check geometry A against geometry B using `Topo.intersects?/2`

__ Link to this macro

# is_geometry_collection(argument)

(since 0.1.0) (macro)

Check argument is a `:geometry_collection` ([`Geo.GeometryCollection`](external_link))

__ Link to this macro

# is_line_string(argument)

(since 0.1.0) (macro)

Check argument is a `:line_string` ([`Geo.LineString`](external_link))

__ Link to this macro

# is_line_string_z(argument)

(since 0.1.0) (macro)

Check argument is a `:line_string_z` ([`Geo.LineStringZ`](external_link))

__ Link to this macro

# is_multi_line_string(argument)

(since 0.1.0) (macro)

Check argument is a `:multi_line_string` ([`Geo.MultiLineString`](external_link))

__ Link to this macro

# is_multi_line_string_z(argument)

(since 0.1.0) (macro)

Check argument is a `:multi_line_string_z` ([`Geo.MultiLineStringZ`](external_link))

__ Link to this macro

# is_multi_point(argument)

(since 0.1.0) (macro)

Check argument is a `:multi_point` ([`Geo.MultiPoint`](external_link))

__ Link to this macro

# is_multi_point_z(argument)

(since 0.1.0) (macro)

Check argument is a `:multi_point_z` ([`Geo.MultiPointZ`](external_link))

__ Link to this macro

# is_multi_polygon(argument)

(since 0.1.0) (macro)

Check argument is a `:multi_polygon` ([`Geo.MultiPolygon`](external_link))

__ Link to this macro

# is_multi_polygon_z(argument)

(since 0.1.0) (macro)

Check argument is a `:multi_polygon_z` ([`Geo.MultiPolygonZ`](external_link))

__ Link to this macro

# is_point(argument)

(since 0.1.0) (macro)

Check argument is a `:point` ([`Geo.Point`](external_link))

__ Link to this macro

# is_point_m(argument)

(since 0.1.0) (macro)

Check argument is a `:point_m` ([`Geo.PointM`](external_link))

__ Link to this macro

# is_point_z(argument)

(since 0.1.0) (macro)

Check argument is a `:point_z` ([`Geo.PointZ`](external_link))

__ Link to this macro

# is_point_zm(argument)

(since 0.1.0) (macro)

Check argument is a `:point_zm` ([`Geo.PointZM`](external_link))

__ Link to this macro

# is_polygon(argument)

(since 0.1.0) (macro)

Check argument is a `:polygon` ([`Geo.Polygon`](external_link))

__ Link to this macro

# is_polygon_z(argument)

(since 0.1.0) (macro)

Check argument is a `:polygon_z` ([`Geo.PolygonZ`](external_link))

__ Link to this macro

# within(geometry_a, geometry_b)

(since 0.1.0) (macro)

Check geometry A against geometry B using `Topo.within?/2`
