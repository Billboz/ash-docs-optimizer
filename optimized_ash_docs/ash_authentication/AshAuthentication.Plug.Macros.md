# AshAuthentication.Plug.Macros — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Plug.Macros (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- define_load_from_bearer(otp_app)
- define_load_from_session(otp_app)
- define_revoke_bearer_tokens(otp_app)
- validate_subject_name_uniqueness(otp_app)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Plug.Macros (ash_authentication v4.0.4)

Generators used within `use AshAuthentication.Plug`.

#  __ Summary

##  Functions

define_load_from_bearer(otp_app)

Generates the `load_from_bearer/2` plug with the `otp_app` prefilled.

define_load_from_session(otp_app)

Generates the `load_from_session/2` plug with the `otp_app` prefilled.

define_revoke_bearer_tokens(otp_app)

Generates the `revoke_bearer_tokens/2` plug with the `otp_app` prefilled.

validate_subject_name_uniqueness(otp_app)

Generates the subject name validation code for the auth plug.

#  __ Functions

__ Link to this macro

# define_load_from_bearer(otp_app)

[ __ View Source ](external_link) (macro)
    
    
    @spec define_load_from_bearer([atom](external_link)()) :: [Macro.t](external_link)()

Generates the `load_from_bearer/2` plug with the `otp_app` prefilled.

__ Link to this macro

# define_load_from_session(otp_app)

[ __ View Source ](external_link) (macro)
    
    
    @spec define_load_from_session([atom](external_link)()) :: [Macro.t](external_link)()

Generates the `load_from_session/2` plug with the `otp_app` prefilled.

__ Link to this macro

# define_revoke_bearer_tokens(otp_app)

[ __ View Source ](external_link) (macro)
    
    
    @spec define_revoke_bearer_tokens([atom](external_link)()) :: [Macro.t](external_link)()

Generates the `revoke_bearer_tokens/2` plug with the `otp_app` prefilled.

__ Link to this macro

# validate_subject_name_uniqueness(otp_app)

[ __ View Source ](external_link) (macro)
    
    
    @spec validate_subject_name_uniqueness([atom](external_link)()) :: [Macro.t](external_link)()

Generates the subject name validation code for the auth plug.
