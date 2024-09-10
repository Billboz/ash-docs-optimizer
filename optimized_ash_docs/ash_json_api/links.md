# Links — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) Links
  - __ Self links to routes
  - __ Pagination links on index routes
  - __ Self links on individual entities
  - __ Related links
    - __ Relationship Self Links
    - __ Relationship Related Links

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) Links

In JSON:API, there are various pre-specified links.

##  __ Self links to routes

Whenever you hit a route, there will be a `self` link in the top-level `links` object that points to the current request url.

##  __ Pagination links on index routes

There will be `first`, `last`, `prev`, and `next` links on paginatable index routes, allowing clients to navigate through the pages of results.

##  __ Self links on individual entities

In order to get a self link generated for an individual entity, you must designate one of your `get` routes as `primary? true`. For example:
    
    
    get :read, primary?: true

Then, each entity will have a `self` link in its `links` key.

##  __ Related links

###  __ Relationship Self Links

Relationship self links are links to endpoints that return only the linkage, _not_ the actual data of the related entities. To generate a relationship self link for a relationship, mark one of your `relationship` routes as `primary? true`. For example:
    
    
    relationship :comments, :read, primary?: true

###  __ Relationship Related Links

Relationship _related_ links, on the other hand, are endpoints that return the related entities themselves, acting as modified index routes over the destination of the relationship. To generate one of these, mark one of your `related` routes as `primary? true`. For example:
    
    
    related :comments, :read, primary?: true

[ ← Previous Page  Relationships  ](external_link)

[ Next Page →  Upgrading to AshJsonApi to 1.0  ](external_link)
