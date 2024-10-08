# Test Resources — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Test Resources
  - __ Introduction
  - __ Testing Resources
  - __ Examples
  - __ Write some tests

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Test Resources

![Run in Livebook](external_link)
    
    
    Mix.install([{:ash, "~> 3.0"}, {:simple_sat, "~> 0.1"}],
      consolidate_protocols: false
    )
    
    Logger.configure(level: :warning)
    ExUnit.start()

##  __ Introduction

We recommend testing your resources _thoroughly_. Often, folks think that testing an [`Ash.Resource`](external_link) is "testing the framework", and in some very simple cases this may be true, like a simple create that just accepts a few attributes.

However, testing has two primary roles:

  1. Confirming our understanding of the way that our application behaves _now_
  2. Ensuring that our application does not change in unintended ways _later_



To this end, we highly recommend writing tests even for your simple actions. A single test that confirms that, with simple inputs, the action returns what you expect, can be very powerful.

Additionally, Ash offers unique ways of testing individual components of our resources, similar to a unit test.

While you don't necessarily need to follow all steps below, we show the various ways you may want to go about testing your resources.

##  __ Testing Resources

  * Add tests for action inputs using property testing
  * Add tests for calling action invocation using property testing
  * Add explicit tests for action inputs/invocation.
  * Add tests for our calculations
  * Test policies "in isolation" using `Ash.can?` (or `Domain.can_*`, provided by code interfaces)



##  __ Examples
    
    
    defmodule User do
      use Ash.Resource,
        domain: Domain,
        data_layer: Ash.DataLayer.Ets
    
      actions do
        defaults [:read, create: [:admin?]]
      end
    
      attributes do
        uuid_primary_key :id
        attribute :admin?, :boolean do
          allow_nil? false
          default false
        end
      end
    end
    
    defmodule Tweet do
      use Ash.Resource,
        domain: Domain,
        data_layer: Ash.DataLayer.Ets,
        authorizers: [Ash.Policy.Authorizer]
    
      attributes do
        uuid_primary_key :id
        attribute :text, :string do
          allow_nil? false
          constraints max_length: 144
          public? true
        end
    
        attribute :hidden?, :boolean do
          allow_nil? false
          default false
          public? true
        end
      end
    
      calculations do
        calculate :tweet_length, :integer, expr(string_length(text))
      end
    
      relationships do
        belongs_to :user, User, allow_nil?: false
      end
    
      actions do
        defaults [:read, update: [:text]]
    
        create :create do
          primary? true
          accept [:text]
          change relate_actor(:user)
        end
      end
    
      policies do
        policy action_type(:read) do
          description "If a tweet is hidden, only the author can read it. Otherwise, anyone can."
          authorize_if relates_to_actor_via(:user)
          forbid_if expr(hidden? == true)
          authorize_if always()
        end
    
        policy action_type(:create) do
          description "Anyone can create a tweet"
          authorize_if always()
        end
    
        policy action_type(:update) do
          description "Only an admin or the user who tweeted can edit their tweet"
          authorize_if actor_attribute_equals(:admin?, true)
          authorize_if relates_to_actor_via(:user)
        end
      end
    end
    
    defmodule Domain do
      use Ash.Domain,
        validate_config_inclusion?: false
    
      resources do
        resource Tweet do
          define :create_tweet, action: :create, args: [:text]
          define :update_tweet, action: :update, args: [:text]
          define :list_tweets, action: :read
        end
    
        resource User do
          define :create_user, action: :create
        end
      end
    end
    
    
    {:module, Domain, <<70, 79, 82, 49, 0, 2, 46, ...>>,
     [
       Ash.Domain.Dsl.Resources.Resource,
       Ash.Domain.Dsl.Resources.Options,
       Ash.Domain.Dsl,
       %{opts: [], entities: [...]},
       Ash.Domain.Dsl,
       Ash.Domain.Dsl.Resources.Options,
       ...
     ]}

##  __ Write some tests
    
    
    defmodule ActionInvocationTest do
      use ExUnit.Case
      import ExUnitProperties
    
      describe "valid inputs" do
        # now if our action inputs are invalid when we think they should be valid, we will find out here
        property "accepts all valid input" do
          user = Domain.create_user!()
    
          check all(input <- Ash.Generator.action_input(Tweet, :create)) do
            {text, other_inputs} = Map.pop!(input, :text)
    
            assert Domain.changeset_to_create_tweet(
                     text,
                     other_inputs,
                     authorize?: false,
                     actor: user
                   ).valid?
          end
        end
    
        # same as the above, but actually call the action. This tests the underlying action implementation
        # not just initial validation
        property "succeeds on all valid input" do
          user = Domain.create_user!()
    
          check all(input <- Ash.Generator.action_input(Tweet, :create)) do
            {text, other_inputs} = Map.pop!(input, :text)
            Domain.create_tweet!(text, other_inputs, authorize?: false, actor: user)
          end
        end
    
        test "can tweet some specific text, in addition to any other valid inputs" do
          user = Domain.create_user!()
    
          check all(
                  input <- Ash.Generator.action_input(Tweet, :create, %{text: "some specific text"})
                ) do
            {text, other_inputs} = Map.pop!(input, :text)
            Domain.create_tweet!(text, other_inputs, actor: user)
          end
        end
      end
    
      describe "authorization" do
        test "allows a user to update their own tweet" do
          user = Domain.create_user!()
          tweet = Domain.create_tweet!("Hello world!", actor: user)
    
          assert Domain.can_update_tweet?(user, tweet, "Goodbye world!")
        end
    
        test "does not allow a user to update someone elses tweet" do
          user = Domain.create_user!()
          user2 = Domain.create_user!()
          tweet = Domain.create_tweet!("Hello world!", actor: user)
    
          refute Domain.can_update_tweet?(user2, tweet, "Goodbye world!")
        end
    
        test "allows an admin user to update someone elses tweet" do
          user = Domain.create_user!()
          user2 = Domain.create_user!(%{admin?: true})
          tweet = Domain.create_tweet!("Hello world!", actor: user)
    
          assert Domain.can_update_tweet?(user2, tweet, "Goodbye world!")
        end
      end
    
      describe "calculations" do
        test "text length calculation computes the length of the text" do
          user = Domain.create_user!()
          tweet = Domain.create_tweet!("Hello world!", actor: user)
          assert Ash.calculate!(tweet, :tweet_length) == 12
        end
      end
    end
    
    ExUnit.run()
    
    
    .......
    Finished in 0.07 seconds (0.00s async, 0.07s sync)
    2 properties, 5 tests, 0 failures
    
    Randomized with seed 42546
    
    
    %{total: 7, failures: 0, skipped: 0, excluded: 0}

[ ← Previous Page  Writing Extensions  ](external_link)

[ Next Page →  Authorize Access to Resources  ](external_link)
