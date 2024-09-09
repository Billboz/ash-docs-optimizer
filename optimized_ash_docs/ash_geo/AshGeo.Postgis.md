# AshGeo.Postgis — AshGeo v0.3.0

Project: AshGeo v0.3.0

## Table of Contents

- AshGeo.Postgis (AshGeo v0.3.0)
- __ Summary
  - Functions
- __ Functions
- gis_index(column, name \\\ nil)
- st_area(geometry)
- st_as_binary(geometry)
- st_as_text(geometry)
- st_bd_m_poly_from_text(wkt, srid)
- st_bd_poly_from_text(wkt, srid)
- st_boundary(geometry)
- st_buffer(geometry, double)
- st_buffer(geometry, double, integer)
- st_build_area(geometryA)
- st_centroid(geometry)
- st_collect(geometryList)
- st_collect(geometryA, geometryB)
- st_contains(geometryA, geometryB)
- st_convex_hull(geometry)
- st_covered_by(geometryA, geometryB)
- st_covers(geometryA, geometryB)
- st_crosses(geometryA, geometryB)
- st_difference(geometryA, geometryB)
- st_dimension(geometry)
- st_disjoint(geometryA, geometryB)
- st_distance(geometryA, geometryB)
- st_distance_in_meters(geometryA, geometryB)
- st_distance_sphere(geometryA, geometryB)
- st_distancesphere(geometryA, geometryB)
- st_dwithin(geometryA, geometryB, float)
- st_dwithin_in_meters(geometryA, geometryB, float)
- st_end_point(geometry)
- st_envelope(geometry)
- st_equals(geometryA, geometryB)
- st_extent(geometry)
- st_exterior_ring(geometry)
- st_flip_coordinates(geometryA)
- st_generate_points(geometryA, npoints)
- st_generate_points(geometryA, npoints, seed)
- st_geom_coll_from_wkb(bytea, srid \\\ -1)
- st_geom_from_text(text, srid \\\ -1)
- st_geometry_n(geometry, int)
- st_geometry_type(geometry)
- st_interior_ring_n(geometry, int)
- st_intersection(geometryA, geometryB)
- st_intersects(geometryA, geometryB)
- st_is_closed(geometry)
- st_is_ring(geometry)
- st_is_simple(geometry)
- st_length(geometry)
- st_line_from_text(text, srid \\\ -1)
- st_line_from_wkb(bytea, srid \\\ -1)
- st_linestring_from_text(text, srid \\\ -1)
- st_linestring_from_wkb(bytea, srid \\\ -1)
- st_m(geometry)
- st_m_geom_coll_from_text(text, srid \\\ -1)
- st_m_geom_from_wkb(bytea, srid \\\ -1)
- st_m_geometry_from_wkb(bytea, srid \\\ -1)
- st_m_line_from_text(text, srid \\\ -1)
- st_m_line_from_wkb(bytea, srid \\\ -1)
- st_m_point_from_text(text, srid \\\ -1)
- st_m_point_from_wkb(bytea, srid \\\ -1)
- st_m_poly_from_text(text, srid \\\ -1)
- st_m_poly_from_wkb(bytea, srid \\\ -1)
- st_make_box_2d(geometryA, geometryB)
- st_mem_union(geometryList)
- st_num_geometries(geometry)
- st_num_interior_ring(geometry)
- st_num_interior_rings(geometry)
- st_num_points(geometry)
- st_overlaps(geometryA, geometryB)
- st_point(x, y)
- st_point_from_text(text, srid \\\ -1)
- st_point_from_wkb(bytea, srid \\\ -1)
- st_point_n(geometry, int)
- st_point_on_surface(geometry)
- st_poly_from_wkb(bytea, srid \\\ -1)
- st_polygon_from_text(text, srid \\\ -1)
- st_polygon_from_wkb(bytea, srid \\\ -1)
- st_relate(geometryA, geometryB)
- st_relate(geometryA, geometryB, intersectionPatternMatrix)
- st_set_srid(geometry, srid)
- st_shift_longitude(geometry)
- st_srid(geometry)
- st_start_point(geometry)
- st_sym_difference(geometryA, geometryB)
- st_touches(geometryA, geometryB)
- st_transform(wkt, srid)
- st_union(geometryList)
- st_union(geometryA, geometryB)
- st_within(geometryA, geometryB)
- st_x(geometry)
- st_y(geometry)
- st_z(geometry)

__

Search documentation of AshGeo __ __

__ Settings

#  AshGeo.Postgis (AshGeo v0.3.0)

PostGIS functions for use with [`Ash.Expr`](3.3.1/Ash.Expr.html)

#  __ Summary

##  Functions

gis_index(column, name \\\ nil)

Create

st_area(geometry)

st_as_binary(geometry)

st_as_text(geometry)

st_bd_m_poly_from_text(wkt, srid)

st_bd_poly_from_text(wkt, srid)

st_boundary(geometry)

st_buffer(geometry, double)

st_buffer(geometry, double, integer)

st_build_area(geometryA)

st_centroid(geometry)

st_collect(geometryList)

st_collect(geometryA, geometryB)

st_contains(geometryA, geometryB)

st_convex_hull(geometry)

st_covered_by(geometryA, geometryB)

st_covers(geometryA, geometryB)

st_crosses(geometryA, geometryB)

st_difference(geometryA, geometryB)

st_dimension(geometry)

st_disjoint(geometryA, geometryB)

st_distance(geometryA, geometryB)

st_distance_in_meters(geometryA, geometryB)

Casts the 2 geometries given to geographies in order to return distance in meters.

st_distance_sphere(geometryA, geometryB)

Please note that ST_Distance_Sphere has been deprecated as of Postgis 2.2. Postgis 2.1 is no longer supported on PostgreSQL >= 9.5. This macro is still in place to support users of PostgreSQL <= 9.4.x.

st_distancesphere(geometryA, geometryB)

st_dwithin(geometryA, geometryB, float)

st_dwithin_in_meters(geometryA, geometryB, float)

Casts the 2 geometries given to geographies in order to check for distance in meters.

st_end_point(geometry)

st_envelope(geometry)

st_equals(geometryA, geometryB)

st_extent(geometry)

st_exterior_ring(geometry)

st_flip_coordinates(geometryA)

st_generate_points(geometryA, npoints)

st_generate_points(geometryA, npoints, seed)

st_geom_coll_from_wkb(bytea, srid \\\ -1)

st_geom_from_text(text, srid \\\ -1)

st_geometry_n(geometry, int)

st_geometry_type(geometry)

st_interior_ring_n(geometry, int)

st_intersection(geometryA, geometryB)

st_intersects(geometryA, geometryB)

st_is_closed(geometry)

st_is_ring(geometry)

st_is_simple(geometry)

st_length(geometry)

st_line_from_text(text, srid \\\ -1)

st_line_from_wkb(bytea, srid \\\ -1)

st_linestring_from_text(text, srid \\\ -1)

st_linestring_from_wkb(bytea, srid \\\ -1)

st_m(geometry)

st_m_geom_coll_from_text(text, srid \\\ -1)

st_m_geom_from_wkb(bytea, srid \\\ -1)

st_m_geometry_from_wkb(bytea, srid \\\ -1)

st_m_line_from_text(text, srid \\\ -1)

st_m_line_from_wkb(bytea, srid \\\ -1)

st_m_point_from_text(text, srid \\\ -1)

st_m_point_from_wkb(bytea, srid \\\ -1)

st_m_poly_from_text(text, srid \\\ -1)

st_m_poly_from_wkb(bytea, srid \\\ -1)

st_make_box_2d(geometryA, geometryB)

st_mem_union(geometryList)

st_num_geometries(geometry)

st_num_interior_ring(geometry)

st_num_interior_rings(geometry)

st_num_points(geometry)

st_overlaps(geometryA, geometryB)

st_point(x, y)

st_point_from_text(text, srid \\\ -1)

st_point_from_wkb(bytea, srid \\\ -1)

st_point_n(geometry, int)

st_point_on_surface(geometry)

st_poly_from_wkb(bytea, srid \\\ -1)

st_polygon_from_text(text, srid \\\ -1)

st_polygon_from_wkb(bytea, srid \\\ -1)

st_relate(geometryA, geometryB)

st_relate(geometryA, geometryB, intersectionPatternMatrix)

st_set_srid(geometry, srid)

st_shift_longitude(geometry)

st_srid(geometry)

st_start_point(geometry)

st_sym_difference(geometryA, geometryB)

st_touches(geometryA, geometryB)

st_transform(wkt, srid)

st_union(geometryList)

st_union(geometryA, geometryB)

st_within(geometryA, geometryB)

st_x(geometry)

st_y(geometry)

st_z(geometry)

#  __ Functions

__ Link to this macro

# gis_index(column, name \\\ nil)

(since 0.1.0) (macro)

Create

__ Link to this macro

# st_area(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_as_binary(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_as_text(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_bd_m_poly_from_text(wkt, srid)

(since 0.1.0) (macro)

__ Link to this macro

# st_bd_poly_from_text(wkt, srid)

(since 0.1.0) (macro)

__ Link to this macro

# st_boundary(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_buffer(geometry, double)

(since 0.1.0) (macro)

__ Link to this macro

# st_buffer(geometry, double, integer)

(since 0.1.0) (macro)

__ Link to this macro

# st_build_area(geometryA)

(since 0.1.0) (macro)

__ Link to this macro

# st_centroid(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_collect(geometryList)

(since 0.1.0) (macro)

__ Link to this macro

# st_collect(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_contains(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_convex_hull(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_covered_by(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_covers(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_crosses(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_difference(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_dimension(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_disjoint(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_distance(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_distance_in_meters(geometryA, geometryB)

(since 0.1.0) (macro)

Casts the 2 geometries given to geographies in order to return distance in meters.

__ Link to this macro

# st_distance_sphere(geometryA, geometryB)

(since 0.1.0) (macro)

Please note that ST_Distance_Sphere has been deprecated as of Postgis 2.2. Postgis 2.1 is no longer supported on PostgreSQL >= 9.5. This macro is still in place to support users of PostgreSQL <= 9.4.x.

__ Link to this macro

# st_distancesphere(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_dwithin(geometryA, geometryB, float)

(since 0.1.0) (macro)

__ Link to this macro

# st_dwithin_in_meters(geometryA, geometryB, float)

(since 0.1.0) (macro)

Casts the 2 geometries given to geographies in order to check for distance in meters.

__ Link to this macro

# st_end_point(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_envelope(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_equals(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_extent(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_exterior_ring(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_flip_coordinates(geometryA)

(since 0.1.0) (macro)

__ Link to this macro

# st_generate_points(geometryA, npoints)

(since 0.1.0) (macro)

__ Link to this macro

# st_generate_points(geometryA, npoints, seed)

(since 0.1.0) (macro)

__ Link to this macro

# st_geom_coll_from_wkb(bytea, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_geom_from_text(text, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_geometry_n(geometry, int)

(since 0.1.0) (macro)

__ Link to this macro

# st_geometry_type(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_interior_ring_n(geometry, int)

(since 0.1.0) (macro)

__ Link to this macro

# st_intersection(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_intersects(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_is_closed(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_is_ring(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_is_simple(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_length(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_line_from_text(text, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_line_from_wkb(bytea, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_linestring_from_text(text, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_linestring_from_wkb(bytea, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_m(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_m_geom_coll_from_text(text, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_m_geom_from_wkb(bytea, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_m_geometry_from_wkb(bytea, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_m_line_from_text(text, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_m_line_from_wkb(bytea, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_m_point_from_text(text, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_m_point_from_wkb(bytea, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_m_poly_from_text(text, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_m_poly_from_wkb(bytea, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_make_box_2d(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_mem_union(geometryList)

(since 0.1.0) (macro)

__ Link to this macro

# st_num_geometries(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_num_interior_ring(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_num_interior_rings(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_num_points(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_overlaps(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_point(x, y)

(since 0.1.0) (macro)

__ Link to this macro

# st_point_from_text(text, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_point_from_wkb(bytea, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_point_n(geometry, int)

(since 0.1.0) (macro)

__ Link to this macro

# st_point_on_surface(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_poly_from_wkb(bytea, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_polygon_from_text(text, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_polygon_from_wkb(bytea, srid \\\ -1)

(since 0.1.0) (macro)

__ Link to this macro

# st_relate(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_relate(geometryA, geometryB, intersectionPatternMatrix)

(since 0.1.0) (macro)

__ Link to this macro

# st_set_srid(geometry, srid)

(since 0.1.0) (macro)

__ Link to this macro

# st_shift_longitude(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_srid(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_start_point(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_sym_difference(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_touches(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_transform(wkt, srid)

(since 0.1.0) (macro)

__ Link to this macro

# st_union(geometryList)

(since 0.1.0) (macro)

__ Link to this macro

# st_union(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_within(geometryA, geometryB)

(since 0.1.0) (macro)

__ Link to this macro

# st_x(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_y(geometry)

(since 0.1.0) (macro)

__ Link to this macro

# st_z(geometry)

(since 0.1.0) (macro)
