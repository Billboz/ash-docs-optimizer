# mix ash.patch.extend — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) mix ash.patch.extend (ash v3.4.8)
    - __ Ash.Domain
    - __ Ash.Resource
  - __ Example

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) mix ash.patch.extend (ash v3.4.8)

Adds an extension or extensions to the domain/resource

Extensions can either be a fully qualified module name, or one of the following list, based on the thing being extended

###  __ Ash.Domain

  * `json_api` \- `AshJsonApi.Domain`
  * `graphql` \- `AshGraphql.Domain`



###  __ Ash.Resource

  * `postgres` \- `AshPostgres.DataLayer`
  * `sqlite` \- `AshSqlite.DataLayer`
  * `mysql` \- `AshMysql.DataLayer`
  * `ets` \- [`Ash.DataLayer.Ets`](external_link)
  * `mnesia` \- [`Ash.DataLayer.Mnesia`](external_link)
  * `embedded` \- `data_layer: :embedded`
  * `json_api` \- `AshJsonApi.Resource`
  * `graphql` \- `AshGraphql.Resource`



##  __ Example
    
    
    mix ash.patch.extend My.Domain.Resource postgres,Ash.Policy.Authorizer
    
