# AshAuthentication.Supervisor — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Supervisor (ash_authentication v4.0.4)
  - __ Example
- __ Summary
  - Functions
- __ Functions
- child_spec(init_arg)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Supervisor (ash_authentication v4.0.4)

Starts and manages any processes required by AshAuthentication.

Add to your application supervisor:

##  __ Example
    
    
    defmodule MyApp.Application do
      use Application
    
      def start(_type, _args) do
        children = [
          {AshAuthentication.Supervisor, otp_app: :my_app}
        ]
    
        Supervisor.start_link(children, strategy: :one_for_one, name: MyApp.Supervisor)
      end
    end

#  __ Summary

##  Functions

child_spec(init_arg)

Returns a specification to start this module under a supervisor.

#  __ Functions

__ Link to this function

# child_spec(init_arg)

[ __ View Source ](external_link)

Returns a specification to start this module under a supervisor.

See [`Supervisor`](external_link).
