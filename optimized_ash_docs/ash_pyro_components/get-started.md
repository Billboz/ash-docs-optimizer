# Get Started — AshPyroComponents v0.1.0

Project: AshPyroComponents v0.1.0

## Table of Contents

- [ __ View Source ](external_link) Get Started
  - __ Installation
    - __ Steps

__

Search documentation of AshPyroComponents __ __

__ Settings

#  [ __ View Source ](external_link) Get Started

This guide steps through the installation process for AshPyroComponents.

##  __ Installation

The installation process is pretty straightforward, and many of the steps can be customized depending on how you want to use AshPyroComponents.

###  __ Steps

These steps assume you are adding AshPyroComponents to an existing Phoenix LiveView app, as generated from the most recent version of `phx.new`.

  1. Add the appropriate dependencies:
    
        def deps do
      [
     {:ash_postgres, "~> 1.0"},
     {:ash_pyro_components, "~> 0.1.0"},
     {:ash_pyro, "~> 0.1.0"},
     {:ash, "~> 2.4"},
     {:pyro, "~> 0.2.0"},
    
     # Heroicon support in components
     {:heroicons,
       github: "tailwindlabs/heroicons",
       tag: "v2.1.1",
       app: false,
       compile: false,
       sparse: "optimized"},
    
     ### OPTIONAL DEPS BELOW ###
    
     # Date/Time/Zone components & tooling
     {:tz, "~> 0.26"},
     {:tz_extra, "~> 0.26"},
     #   or
     {:tzdata, "~> 1.1"},
    
     # Code highlighting components:
     {:makeup, "~> 1.1"},
     {:makeup_eex, "~> 0.1"},
     {:makeup_elixir, "~> 0.16"},
     {:makeup_html, "~> 0.1"},
     {:makeup_js, "~> 0.1"},
     {:makeup_json, "~> 0.1"},
      ]
    end

  2. Compare your `.formatter.exs` to this example and add anything you are missing:
    
        [
      import_deps: [:phoenix, :pyro, :ash_pyro, :ash, :ash_postgres],
      subdirectories: ["priv/*/migrations"],
      plugins: [Spark.Formatter, Phoenix.LiveView.HTMLFormatter],
      inputs: ["*.{heex,ex,exs}", "{config,lib,test}/**/*.{heex,ex,exs}"]
    ]

  3. Add the following to your `config.exs`:
    
        config :pyro, :overrides, [AshPyroComponents.Overrides.BEM, PyroComponents.Overrides.BEM]
    config :pyro, gettext: MyApp.Gettext # optional

  4. Configure your `tailwind.config.js` according to this example:
    
        const path = require('path')
    
    module.exports = {
      // Dark mode support
      darkMode: 'class',
      content: [
        // The usual defaults
        './js/**/*.js',
        '../lib/my_app_web.ex',
        '../lib/my_app_web/**/*.*ex',
    
        // Add the directory you will be keeping resources since
        // we need to include any classes referenced in the UI DSL
        '../lib/my_app/**/*.ex',
    
        // Add your chosen Pyro overrides file(s)
        '../deps/pyro_components/lib/pyro_components/overrides/bem.ex',
        '../deps/ash_pyro_components/lib/ash_pyro_components/overrides/bem.ex',
      ],
      plugins: [
        // Pyro expects the forms plugin
        require('@tailwindcss/forms'),
        // Add Pyro's Tailwind plugin
        require(path.join(
          __dirname,
          '../deps/pyro/assets/js/tailwind-plugin.js',
        ))({
          heroIconsPath: path.join(__dirname, '../deps/heroicons/optimized'),
          addBase: true,
        }),
    
        // Pyro replaces Phoenix's generated plugin stuff, you can delete it!
      ],
    }

> #### Note:
> 
> Using `path.join(.__dirname, '...')` is important; Tailwind CLI will get confused without it!

  5. Add the following lines to `assets/js/app.js`:
    
        import { hooks as pyro_components_hooks, getTimezone } from 'pyro_components'
    import { hooks as ash_pyro_components_hooks } from 'ash_pyro_components'
    
    let liveSocket = new LiveSocket('/live', Socket, {
      params: { _csrf_token: csrfToken, timezone: getTimezone() },
      hooks: { ...pyro_components_hooks, ...ash_pyro_components_hooks },
    })

  6. Edit your `assets/css.app.css` file to import the default styles:



    
    
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import '../../deps/pyro_components/assets/css/bem.css';
    @import '../../deps/ash_pyro_components/assets/css/bem.css';
    @import 'tailwindcss/utilities';

  6. Edit your `my_app_web.ex` file, replacing:

     * [`Phoenix.Component`](external_link) with [`AshPyroComponents.Component`](external_link)
     * [`Phoenix.LiveComponent`](external_link) with [`AshPyroComponents.LiveComponent`](external_link)
     * [`Phoenix.LiveView`](external_link) with [`AshPyroComponents.LiveView`](external_link)

**Note:** _Only_ replace those top-level modules, _do not_ replace submodules, e.g. [`Phoenix.LiveView.Router`](external_link).

  7. (Optional) Import the Pyro components into your `my_app_web.ex` helpers to make the available in your views/components:
    
        defp html_helpers do
      quote do
        # Import all Pyro/AshPyro components
        use AshPyroComponents
        # Don't import CoreComponents since AshPyro replaces it and will conflict
        # import MyAppWeb.CoreComponents
        # ...

  8. (Optional) Add the color scheme JS to your `root.html.heex` template (prevents [FOUC](external_link)):
    
        <head>
      <.color_scheme_switcher_js />
      <script defer phx-track-static type="text/javascript" src={~p"/assets/app.js"}>
    </head>

At this point, you probably want to delete the old `core_components.ex` file, since AshPyro will replace that functionality (mostly API-compatible).

  9. (Optional) configure some runtime options in `runtime.exs`:
    
        config :pyro, default_timezone: "America/Chicago"




[ ← Previous Page  About  ](external_link)
