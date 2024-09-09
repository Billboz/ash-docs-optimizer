# AshGeo.Geometry — AshGeo v0.3.0

Project: AshGeo v0.3.0

## Table of Contents

- AshGeo.Geometry (AshGeo v0.3.0)
    - __ Example
  - __ Options
      - Examples
      - Examples
      - See also
      - Examples
      - Examples

__

Search documentation of AshGeo __ __

__ Settings

#  AshGeo.Geometry (AshGeo v0.3.0)

Base geometry type

To create a constrained geometry type, `use AshGeo.Geometry` accepts several options that may be useful. Options provided to `use` define constraints that are applied statically to a new type instance, and may be further added or overridden using `:constraints` on instances of that type, with the exception of `:storage_type`.

###  __ Example
    
    
    defmodule App.Type.Point26918 do
      use AshGeo.Geometry,
        storage_type: :"geometry(Point,26918)",
        geo_types: :point
    end
    
    defmodule App.Resource.PointOfInterest do
      alias App.Type.Point26918
    
      attributes do
        attribute :name, :string
        attribute :location, Point26918, allow_nil?: false
      end
    
      actions do
        create :create do
          argument :location, Point26918 do
            allow_nil? false
            constraits: [force_srid: 26918]
          end
    
          change set_attribute(:location, arg(:location))
        end
      end
    end

##  __ Options

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



