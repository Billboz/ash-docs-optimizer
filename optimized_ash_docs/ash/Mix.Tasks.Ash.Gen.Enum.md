# mix ash.gen.enum — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) mix ash.gen.enum (ash v3.4.8)
  - __ Example
  - __ Options

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) mix ash.gen.enum (ash v3.4.8)

Generates an Ash.Type.Enum

##  __ Example
    
    
    mix ash.gen.enum MyApp.Support.Ticket.Types.Status open,closed --short-name ticket_status
    

##  __ Options

  * `--short-name`, `-s`: Register the type under the provided shortname, so it can be referenced like `:short_name` instead of the module name.


