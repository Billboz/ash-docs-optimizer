# AshAuthentication.Phoenix.Components.HorizontalRule — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.HorizontalRule (ash_authentication_phoenix v2.1.1)
  - __ Overrides
  - __ Props
- __ Summary
  - Types
- __ Types
- props()

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.HorizontalRule (ash_authentication_phoenix v2.1.1)

A horizontal rule with text.

This component is pretty tailwind-specific, but I (@jimsynz) really wanted a certain look. If you think I'm wrong then please let me know.

##  __ Overrides

This component provides the following overrides:

  * `:text` \- Text to display in front of the horizontal rule.
  * `:root_class` \- CSS class for the root `div` element.
  * `:hr_outer_class` \- CSS class for the outer `div` element of the horizontal rule.
  * `:hr_inner_class` \- CSS class for the inner `div` element of the horizontal rule.
  * `:text_outer_class` \- CSS class for the outer `div` element of the text area.
  * `:text_inner_class` \- CSS class for the inner `div` element of the text area.



See [`AshAuthentication.Phoenix.Overrides`](external_link) for more information.

##  __ Props
    
    
    * `overrides` - A list of override modules.

#  __ Summary

##  Types

props()

#  __ Types

__ Link to this type

# props()

[ __ View Source ](external_link)
    
    
    @type props() :: %{optional(:overrides) => [[module](external_link)()]}
