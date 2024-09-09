# AshGeo.GeoAny — AshGeo v0.3.0

Project: AshGeo v0.3.0

## Table of Contents

- AshGeo.GeoAny (AshGeo v0.3.0)
    - __ Options
      - Examples
      - Examples
      - See also
      - Examples
      - Examples
- __ Summary
  - Functions
- __ Functions
- cast_input(value, constraints)

__

Search documentation of AshGeo __ __

__ Settings

#  AshGeo.GeoAny (AshGeo v0.3.0)

Geometry type which attempts to auto-detect and decode from JSON, WKT and WKB

Accepts all options for [`AshGeo.Geometry`](external_link), plus `prefer_binary_encoding`, and may also be narrowed with `use` in the same way.

###  __ Options

  * `:prefer_binary_encoding` \- Which binary encoding format to attempt first: WKT or WKB. Valid values are :wkt, :wkb The default value is `:wkt`.

  * `:storage_type` ([`atom/0`](external_link)) - Column type in the database  
 _May**NOT** be overridden using `:constraints`._

#### Examples
    
        use AshGeo.Geometry, storage_type: :"geometry(Point,26918)"

  * `:geo_types` \- Allowed [`Geo`](external_link) types 

#### Examples
    
        use AshGeo.Geometry, geo_types: :point
    
        use AshGeo.Geometry, geo_types: [:point, :point_z, :point_zm]
    
        use AshGeo.Geometry, geo_types: [:point, Geo.PointZ, :point_zm]

#### See also

    * [`AshGeo.geo_types/0`](external_link)
    * [`AshGeo.geo_type_aliases/0`](external_link)
  * `:force_srid` ([`integer/0`](external_link)) - SRID to force on the geometry 

#### Examples
    
        use AshGeo.Geometry, force_srid: 4326

  * `:check_srid` ([`integer/0`](external_link)) - SRID to check on the geometry 

#### Examples
    
        use AshGeo.Geometry, check_srid: 4326




#  __ Summary

##  Functions

cast_input(value, constraints)

Try decoding with [`Geo.WKB`](external_link) and [`Geo.WKT`](external_link), in the order specified by `:prefer`.

#  __ Functions

__ Link to this function

# cast_input(value, constraints)

(since 0.1.0)

Try decoding with [`Geo.WKB`](external_link) and [`Geo.WKT`](external_link), in the order specified by `:prefer`.
