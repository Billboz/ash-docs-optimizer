# Domains — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Domains
  - __ Grouping Resources
  - __ Centralized [Code Interface](external_link)
  - __ Configuring Cross-cutting Concerns
    - __ Built in configuration
    - __ Extensions
    - __ Policies

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Domains

Domains serve three primary purposes:

  1. They group related resources together, providing organization and structure to your project.
  2. They allow you to define a centralized [code interface](external_link)
  3. They allow you to configure certain cross-cutting concerns of those resources in a single place.



If you are familiar with a [Phoenix Context](external_link), you can think of a domain as the Ash equivalent.

##  __ Grouping Resources

In an [`Ash.Domain`](external_link), you will typically see something like this:
    
    
    defmodule MyApp.Tweets do
      use Ash.Domain
    
      resources do
        resource MyApp.Tweets.Tweet
        resource MyApp.Tweets.Comment
      end
    end

With this definition, you can do things like placing all of these resources into a GraphQL Api with AshGraphql. You'd see a line like this:
    
    
    use AshGraphql, domains: [MyApp.Tweets]

##  __ Centralized [Code Interface](external_link)

Working with our domain & resources in code _can_ be done the long form way, by building changesets/queries/action inputs and calling the relevant function in [`Ash`](external_link). However, we generally want to expose a well defined code API for working with our resources. This makes our code much clearer, and gives us nice things like auto complete and inline documentation.
    
    
    defmodule MyApp.Tweets do
      use Ash.Domain
    
      resources do
        resource MyApp.Tweets.Tweet do
          # define a function called `tweet` that uses
          # the `:create` action on MyApp.Tweets.Tweet
          define :tweet, action: :create, args: [:text]
        end
    
        resource MyApp.Tweets.Comment do
          # define a function called `comment` that uses
          # the `:create` action on MyApp.Tweets.Comment
          define :comment, action: :create, args: [:tweet_id, :text]
        end
      end
    end

With these definitions, we can now do things like this:
    
    
    tweet = MyApp.Tweets.tweet!("My first tweet!", actor: user1)
    comment = MyApp.Tweets.comment!(tweet.id, "What a cool tweet!", actor: user2)

##  __ Configuring Cross-cutting Concerns

###  __ Built in configuration

[`Ash.Domain`](external_link) comes with a number of built-in configuration options. See `[Ash.Domain](external_link)` for more.

For example:
    
    
    defmodule MyApp.Tweets do
      use Ash.Domain
    
      resources do
        resource MyApp.Tweets.Tweet
        resource MyApp.Tweets.Comment
      end
    
      execution do
        # raise the default timeout for all actions in this domain from 30s to 60s
        timeout :timer.seconds(60)
      end
    
      authorization do
        # disable using the authorize?: false flag when calling actions
        authorize :always
      end
    end

###  __ Extensions

Extensions will often come with "domain extensions" to allow you to configure the behavior of all resources within a domain, as it pertains to that extension. For example:
    
    
    defmodule MyApp.Tweets do
      use Ash.Domain,
        extensions: [AshGraphql.Domain]
    
      graphql do
        # skip authorization for these resources
        authorize? false
      end
    
      resources do
        resource MyApp.Tweets.Tweet
        resource MyApp.Tweets.Comment
      end
    end

###  __ Policies

You can also use [`Ash.Policy.Authorizer`](external_link) on your domains. This allows you to add policies that apply to _all_ actions using this domain. For example:
    
    
    defmodule MyApp.Tweets do
      use Ash.Domain,
        extensions: [Ash.Policy.Authorizer]
    
      resources do
        resource MyApp.Tweets.Tweet
        resource MyApp.Tweets.Comment
      end
    
      policies do
        # add a bypass up front to allow administrators to do whatever they want
        bypass actor_attribute_equals(:is_admin, true) do
          authorize_if always()
        end
    
        # forbid all access from disabled users
        policy actor_attribute_equals(:disabled, true) do
          forbid_if always()
        end
      end
    end

[ ← Previous Page  Changelog  ](external_link)

[ Next Page →  Attributes  ](external_link)
