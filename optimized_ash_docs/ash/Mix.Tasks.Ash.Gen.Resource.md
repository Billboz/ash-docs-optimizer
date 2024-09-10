# mix ash.gen.resource — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) mix ash.gen.resource (ash v3.4.8)
  - __ Example
  - __ Options

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) mix ash.gen.resource (ash v3.4.8)

Generate and configure an Ash.Resource.

If the domain does not exist, we create it. If it does, we add the resource to it if it is not already present.

##  __ Example
    
    
    mix ash.gen.resource Helpdesk.Support.Ticket \
      --default-actions read \
      --uuid-primary-key id \
      --attribute subject:string:required:public \
      --relationship belongs_to:representative:Helpdesk.Support.Representative \
      --timestamps \
      --extend postgres,graphql
    
    

##  __ Options

  * `--attribute` or `-a` \- An attribute or comma separated list of attributes to add, as `name:type`. Modifiers: `primary_key`, `public`, `sensitive`, and `required`. i.e `-a name:string:required`
  * `--relationship` or `-r` \- A relationship or comma separated list of relationships to add, as `type:name:dest`. Modifiers: `public`. `belongs_to` only modifiers: `primary_key`, `sensitive`, and `required`. i.e `-r belongs_to:author:MyApp.Accounts.Author:required`
  * `--default-actions` or `-da` \- A csv list of default action types to add, i.e `-da read,create`. The `create` and `update` actions accept the public attributes being added.
  * `--uuid-primary-key` or `-u` \- Adds a UUID primary key with that name. i.e `-u id`
  * `--uuid-v7-primary-key` or `-u` \- Adds a UUID primary key with that name. i.e `-u7 id`
  * `--integer-primary-key` or `-i` \- Adds an integer primary key with that name. i.e `-i id`
  * `--domain` or `-d` \- The domain module to add the resource to. i.e `-d MyApp.MyDomain`. This defaults to the resource's module name, minus the last segment.
  * `--extend` or `-e` \- A comma separated list of modules or builtins to extend the resource with. i.e `-e postgres,Some.Extension`
  * `--base` or `-b` \- The base module to use for the resource. i.e `-b Ash.Resource`. Requires that the module is in `config :your_app, :base_resources`
  * `--timestamps` or `-t` \- If set adds `inserted_at` and `updated_at` timestamps to the resource.


