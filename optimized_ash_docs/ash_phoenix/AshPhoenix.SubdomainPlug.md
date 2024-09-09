# AshPhoenix.SubdomainPlug — ash_phoenix v2.1.2

Project: ash_phoenix v2.1.2

## Table of Contents

- [ __ View Source ](external_link) AshPhoenix.SubdomainPlug (ash_phoenix v2.1.2)
- __ Summary
  - Functions
- __ Functions
- live_tenant(socket, url)

__

Search documentation of ash_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshPhoenix.SubdomainPlug (ash_phoenix v2.1.2)

This is a basic plug that loads the current tenant assign from a given value set on subdomain.

This was copied from `Triplex.SubdomainPlug`, here: <https://github.com/ateliware/triplex/blob/master/lib/triplex/plugs/subdomain_plug.ex>

Options:

  * `:endpoint` ([`atom/0`](external_link)) - Required. The endpoint that the plug is in, used for deterining the host

  * `:assign` ([`atom/0`](external_link)) - The key to use when assigning the current tenant The default value is `:current_tenant`.

  * `:handle_subdomain` \- An mfa to call with the conn and a subdomain value. Can be used to do something like fetch the current user given the tenant. Must return the new conn.




To plug it on your router, you can use:
    
    
    plug AshPhoenix.SubdomainPlug,
      endpoint: MyApp.Endpoint

An additional helper here can be used for determining the host in your liveview, and/or using the host that was already assigned to the conn.

For example:
    
    
    def handle_params(params, uri, socket) do
      socket =
        assign_new(socket, :current_tenant, fn ->
          AshPhoenix.SubdomainPlug.live_tenant(socket, uri)
        end)
    
      socket =
        assign_new(socket, :current_organization, fn ->
          if socket.assigns[:current_tenant] do
            MyApp.Accounts.Ash.get!(MyApp.Accounts.Organization,
              subdomain: socket.assigns[:current_tenant]
            )
          end
        end)
    
      {:noreply, socket}
    end

#  __ Summary

##  Functions

live_tenant(socket, url)

#  __ Functions

__ Link to this function

# live_tenant(socket, url)

[ __ View Source ](external_link)
