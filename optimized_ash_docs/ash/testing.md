# Testing — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Testing
  - __ Async tests
  - __ Missed notifications

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Testing

Take a look at [the how-to guide](external_link) for a practical look at writing tests

The configuration you likely want to add to your `config/test.exs` is:
    
    
    # config/test.exs
    config :ash, :disable_async?, true
    config :ash, :missed_notifications, :ignore

Each option is explained in more detail below.

##  __ Async tests

The first thing you will likely want to do, especially if you are using `AshPostgres`, is to add the following config to your `config/test.exs`.
    
    
    # config/test.exs
    config :ash, :disable_async?, true

This ensures that Ash does not spawn tasks when executing your requests, which is necessary for doing transactional tests with `AshPostgres`.

##  __ Missed notifications

If you are using Ecto's transactional features to ensure that your tests all run in a transaction, Ash will detect that it had notifications to send (if you have any notifiers set up) but couldn't because it was still in a transaction. The default behavior when notifications are missed is to warn. However, this can get pretty noisy in tests. So we suggest adding the following config to your `config/test.exs`.
    
    
    # config/test.exs
    config :ash, :missed_notifications, :ignore

[ ← Previous Page  Error Handling  ](external_link)

[ Next Page →  Development Utilities  ](external_link)
