# AshAdmin.Gettext — ash_admin v0.11.5

Project: ash_admin v0.11.5

## Table of Contents

- [ __ View Source ](external_link) AshAdmin.Gettext (ash_admin v0.11.5)
- __ Summary
  - Functions
- __ Functions
- handle_missing_bindings(exception, incomplete)
- handle_missing_plural_translation(locale, domain, msgctxt, msgid, msgid_plural, n, bindings)
- handle_missing_translation(locale, domain, msgctxt, msgid, bindings)

__

Search documentation of ash_admin __ __

__ Settings

#  [ __ View Source ](external_link) AshAdmin.Gettext (ash_admin v0.11.5)

A module providing Internationalization with a gettext-based API.

By using [Gettext](external_link), your module gains a set of macros for translations, for example:
    
    
    use Gettext, backend: AshAdmin.Gettext
    
    # Simple translation
    gettext("Here is the string to translate")
    
    # Plural translation
    ngettext("Here is the string to translate",
             "Here are the strings to translate",
             3)
    
    # Domain-based translation
    dgettext("errors", "Here is the error message to translate")

See the [Gettext Docs](external_link) for detailed usage.

#  __ Summary

##  Functions

handle_missing_bindings(exception, incomplete)

Callback implementation for [`Gettext.Backend.handle_missing_bindings/2`](external_link).

handle_missing_plural_translation(locale, domain, msgctxt, msgid, msgid_plural, n, bindings)

Callback implementation for [`Gettext.Backend.handle_missing_plural_translation/7`](external_link).

handle_missing_translation(locale, domain, msgctxt, msgid, bindings)

Callback implementation for [`Gettext.Backend.handle_missing_translation/5`](external_link).

#  __ Functions

__ Link to this function

# handle_missing_bindings(exception, incomplete)

[ __ View Source ](external_link)

Callback implementation for [`Gettext.Backend.handle_missing_bindings/2`](external_link).

__ Link to this function

# handle_missing_plural_translation(locale, domain, msgctxt, msgid, msgid_plural, n, bindings)

[ __ View Source ](external_link)

Callback implementation for [`Gettext.Backend.handle_missing_plural_translation/7`](external_link).

__ Link to this function

# handle_missing_translation(locale, domain, msgctxt, msgid, bindings)

[ __ View Source ](external_link)

Callback implementation for [`Gettext.Backend.handle_missing_translation/5`](external_link).
