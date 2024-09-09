# AshThrift — ash_thrift v0.2.0

Project: ash_thrift v0.2.0

## Table of Contents

- AshThrift (ash_thrift v0.2.0)
- Link to this section Summary
  - Functions
- Link to this section Functions
- dump(resource, variant \\\ nil, dest \\\ nil)
  - Specs
- into(data, resource, variant, dest \\\ nil)
  - Specs
- relationship_variant(resource, variant)
  - Specs
- variant_module(resource, variant)
  - Specs

[ ash_thrift ](external_link) **v0.2.0**

  * Pages
  * Modules
  * Mix Tasks






#  AshThrift (ash_thrift v0.2.0)

#  Link to this section Summary 

##  Functions

dump(resource, variant \\\ nil, dest \\\ nil)

Dumps an Ash resource to a thrift struct

into(data, resource, variant, dest \\\ nil)

Builds an Ash resource from a thrift struct

relationship_variant(resource, variant)

variant_module(resource, variant)

#  Link to this section Functions 

Link to this function

# dump(resource, variant \\\ nil, dest \\\ nil)

## Specs
    
    
    dump(
      resource :: resource_t,
      variant :: [String.t](external_link)() | nil,
      thrift_struct :: [map](external_link)() | nil
    ) :: resource_t
    when resource_t: [struct](external_link)()

Dumps an Ash resource to a thrift struct

Link to this function

# into(data, resource, variant, dest \\\ nil)

## Specs
    
    
    into(
      data :: [map](external_link)(),
      resource :: [module](external_link)(),
      variant :: [String.t](external_link)() | nil,
      dest :: resource_t | nil
    ) :: resource_t
    when resource_t: [term](external_link)()

Builds an Ash resource from a thrift struct

Link to this function

# relationship_variant(resource, variant)

## Specs
    
    
    relationship_variant(resource :: [module](external_link)(), variant :: [String.t](external_link)() | nil) ::
      [String.t](external_link)()

Link to this function

# variant_module(resource, variant)

## Specs
    
    
    variant_module(resource :: [module](external_link)(), variant :: [String.t](external_link)() | nil) :: [module](external_link)()
