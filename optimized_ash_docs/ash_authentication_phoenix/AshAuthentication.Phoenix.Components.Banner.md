# AshAuthentication.Phoenix.Components.Banner — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Banner (ash_authentication_phoenix v2.1.1)
  - __ Props
  - __ Overrides
- __ Summary
  - Types
- __ Types
- props()

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Banner (ash_authentication_phoenix v2.1.1)

Renders a very simple banner at the top of the sign-in component.

Can show either an image or some text, depending on the provided overrides.

##  __ Props

  * `overrides` \- A list of override modules.



##  __ Overrides

This component provides the following overrides:

  * `:text` \- Banner text. Set to `nil` to disable.
  * `:root_class` \- CSS class for the root `div` element.
  * `:href_class` \- CSS class for the `a` tag.
  * `:href_url` \- A URL for the banner image to link to. Set to `nil` to disable.
  * `:image_class` \- CSS class for the `img` tag.
  * `:dark_image_class` \- Css class for the `img` tag in dark mode.
  * `:image_url` \- A URL for the `img` `src` attribute. Set to `nil` to disable.
  * `:dark_image_url` \- A URL for the `img` `src` attribute in dark mode. Set to `nil` to disable.
  * `:text_class` \- CSS class for the text `div`.



See [`AshAuthentication.Phoenix.Overrides`](external_link) for more information.

#  __ Summary

##  Types

props()

#  __ Types

__ Link to this type

# props()

[ __ View Source ](external_link)
    
    
    @type props() :: %{optional(:overrides) => [[module](external_link)()]}
