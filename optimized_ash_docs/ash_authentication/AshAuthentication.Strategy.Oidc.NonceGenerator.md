# AshAuthentication.Strategy.Oidc.NonceGenerator — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.Oidc.NonceGenerator (ash_authentication v4.0.4)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.Oidc.NonceGenerator (ash_authentication v4.0.4)

An implmentation of [`AshAuthentication.Secret`](external_link) that generates nonces for OpenID Connect strategies.

Defaults to `16` bytes of random data. You can change this by setting the `byte_size` option in your DSL:
    
    
    oidc do
      nonce {AshAuthentication.NonceGenerator, byte_size: 32}
      # ...
    end
