# Getting Started with AshAdmin — ash_admin v0.11.5

Project: ash_admin v0.11.5

## Table of Contents

- [ __ View Source ](external_link) Getting Started with AshAdmin
  - __ Demo
  - __ Installation
  - __ Setup
    - __ Content Security Policy
  - __ Troubleshooting
      - UI issues
      - Router issues

__

Search documentation of ash_admin __ __

__ Settings

#  [ __ View Source ](external_link) Getting Started with AshAdmin

##  __ Demo

<https://www.youtube.com/watch?v=aFMLz3cpQ8c>

##  __ Installation

Add the `ash_admin` dependency to your `mix.exs` file:
    
    
    {:ash_admin, "~> 0.11.4"}

##  __ Setup

Ensure your domains are configured in `config.exs`:
    
    
    config :my_app, ash_domains: [MyApp.Foo, MyApp.Bar]

Add the [`AshAdmin.Domain`](external_link) extension to each domain you want to show in the AshAdmin dashboard, and configure it to show. See [DSL: AshAdmin.Domain](external_link) for more configuration options.
    
    
    # In your Domain(s)
    use Ash.Domain,
      extensions: [AshAdmin.Domain]
    
    admin do
      show? true
    end

All resources in each Domain will automatically be included in AshAdmin. To configure a resource, use the [`AshAdmin.Resource`](external_link) extension, and then use the [DSL: AshAdmin.Resource](external_link) configuration options. Specifically, if your app has an actor you will want to configure that.
    
    
    # In your resource that acts as an actor (e.g. User)
    use Ash.Resource,
      domain: YourDomain,
      extensions: [AshAdmin.Resource]
    
    admin do
      actor? true
    end

Modify your router to add AshAdmin at whatever path you'd like to serve it at.
    
    
    defmodule MyAppWeb.Router do
      use Phoenix.Router
    
      import AshAdmin.Router
    
      # AshAdmin requires a Phoenix LiveView `:browser` pipeline
      # If you DO NOT have a `:browser` pipeline already, then AshAdmin has a `:browser` pipeline
      # Most applications will not need this:
      admin_browser_pipeline :browser
    
      scope "/" do
        # Pipe it through your browser pipeline
        pipe_through [:browser]
    
        ash_admin "/admin"
      end
    end

> #### Warning
> 
> There is no builtin security for your AshAdmin (except your app's normal policies). In most cases you will want to secure your AshAdmin routes in some way to prevent them from being publicly accessible.

Start your project (usually by running [`mix phx.server`](external_link) in a terminal) and visit `/admin` in your browser (or the path you configured `ash_admin` with in your router).

###  __ Content Security Policy

If your app specifies a content security policy header, eg. via
    
    
    plug :put_secure_browser_headers, %{"content-security-policy" => "default-src 'self'"}

in your router, then the stylesheets and JavaScript used to power AshAdmin will be blocked by your browser.

To avoid this, you can add the default AshAdmin nonces to the `default-src` allowlist, ie.
    
    
    plug :put_secure_browser_headers, %{"content-security-policy" => "default-src 'nonce-ash_admin-Ed55GFnX' 'self'"}

Alternatively you can supply your own nonces to the `ash_admin` route, by setting a `:csp_nonce_assign_key` in the options list, ie.
    
    
    ash_admin "/admin", csp_nonce_assign_key: :csp_nonce_value

This will allow AshAdmin-generated inline CSS and JS blocks to execute normally.

##  __ Troubleshooting

#### UI issues

If your admin UI is not responding as expected, check your browser's developer console for content-security-policy violations (see above).

#### Router issues

If you are seeing the following error `(UndefinedFunctionError) function YourAppWeb.AshAdmin.PageLive.__live__/0 is undefined (module YourAppWeb.AshAdmin.PageLive is not available)` it likely means that you added the ash admin route macro under a scope with a prefix. Make sure that you add it under a scope without any prefixes.
    
    
      # Incorrect (with YourAppWeb prefix)
      scope "/", YourAppWeb do
        pipe_through [:browser]
    
        ash_admin "/admin"
      end
    
      # Correct (without prefix)
      scope "/" do
        pipe_through [:browser]
    
        ash_admin "/admin"
      end

[ ← Previous Page  README  ](external_link)

[ Next Page →  Contributing to AshAdmin  ](external_link)
