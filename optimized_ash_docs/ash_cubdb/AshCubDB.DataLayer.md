# AshCubDB.DataLayer — ash_cubdb v0.6.2

Project: ash_cubdb v0.6.2

## Table of Contents

- [ __ View Source ](external_link) AshCubDB.DataLayer (ash_cubdb v0.6.2)
  - __ DSL Documentation
    - __ Index
    - __ Docs
  - __ cubdb

__

Search documentation of ash_cubdb __ __

__ Settings

#  [ __ View Source ](external_link) AshCubDB.DataLayer (ash_cubdb v0.6.2)

A CubDB data layer for Ash.

##  __ DSL Documentation

###  __ Index

  * cubdb



###  __ Docs

##  __ cubdb

CubDB data layer configuration.

Examples:
    
    
    cubdb do
      directory "/opt/storage/my_awesome_resource"
      auto_compact? true
      auto_file_sync? true
      name :my_awesome_resource
    end
    

* * *

  * `:directory` \- The directory within which to store the CubDB data.  
If none is supplied, then one will be automatically generated in the `priv` directory of the parent OTP application.

  * `:otp_app` ([`atom/0`](external_link)) - The OTP application in whose `priv` directory data should be stored.  
Only used if `directory` is not supplied. When not provided [`Application.get_application/1`](external_link) will be called for the resource.

  * `:auto_compact?` ([`boolean/0`](external_link)) - Whether or not to automatically compact the CubDB database.  
See [the CubDB documentation](external_link) for more information. The default value is `true`.

  * `:auto_file_sync?` ([`boolean/0`](external_link)) - Whether or not to automatically flush the buffer to disk on write.  
See [the CubDB documentation](external_link) The default value is `true`.

  * `:name` ([`atom/0`](external_link)) - The name of the CubDB database.  
By default this is the name of the resource module, however in some (rare) circumstances you may wish to specifically name the database.



