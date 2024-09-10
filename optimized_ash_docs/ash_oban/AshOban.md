# AshOban — ash_oban v0.2.4

Project: ash_oban v0.2.4

## Table of Contents

- [ __ View Source ](external_link) AshOban (ash_oban v0.2.4)
- __ Summary
  - Types
  - Functions
- __ Types
- result()
- triggerable()
- __ Functions
- authorize?()
- build_trigger(record, trigger, opts \\\ [])
  - __ Options
- config(domains, base, opts \\\ [])
- Options
- do_schedule_and_run_triggers(resources_or_domains_or_otp_apps, opts)
- lookup_actor(actor_json)
- run_trigger(record, trigger, opts \\\ [])
  - __ Options
- schedule(resource, trigger, opts \\\ [])
  - __ Options
- schedule_and_run_triggers(resources_or_domains_or_otp_apps, opts \\\ [])
- stacktrace(arg1)
- store_actor(args, actor)

__

Search documentation of ash_oban __ __

__ Settings

#  [ __ View Source ](external_link) AshOban (ash_oban v0.2.4)

Tools for working with AshOban triggers.

#  __ Summary

##  Types

result()

triggerable()

##  Functions

authorize?()

build_trigger(record, trigger, opts \\\ [])

Builds a specific trigger for the record provided, but does not insert it into the database.

config(domains, base, opts \\\ [])

Alters your oban configuration to include the required AshOban configuration.

do_schedule_and_run_triggers(resources_or_domains_or_otp_apps, opts)

lookup_actor(actor_json)

run_trigger(record, trigger, opts \\\ [])

Runs a specific trigger for the record provided.

schedule(resource, trigger, opts \\\ [])

Schedules all relevant jobs for the provided trigger or scheduled action

schedule_and_run_triggers(resources_or_domains_or_otp_apps, opts \\\ [])

Runs the schedulers for the given resource, domain, or otp_app, or list of resources, domains, or otp_apps.

stacktrace(arg1)

store_actor(args, actor)

#  __ Types

__ Link to this type

# result()

[ __ View Source ](external_link)
    
    
    @type result() :: %{
      discard: [non_neg_integer](external_link)(),
      cancelled: [non_neg_integer](external_link)(),
      success: [non_neg_integer](external_link)(),
      failure: [non_neg_integer](external_link)(),
      snoozed: [non_neg_integer](external_link)(),
      queues_not_drained: [[atom](external_link)()]
    }

__ Link to this type

# triggerable()

[ __ View Source ](external_link)
    
    
    @type triggerable() ::
      [Ash.Resource.t](3.2.2/Ash.Resource.html#t:t/0)() | {[Ash.Resource.t](3.2.2/Ash.Resource.html#t:t/0)(), [atom](external_link)()} | [Ash.Domain.t](3.2.2/Ash.Domain.html#t:t/0)() | [atom](external_link)()

#  __ Functions

__ Link to this function

# authorize?()

[ __ View Source ](external_link)
    
    
    @spec authorize?() :: [boolean](external_link)()

__ Link to this function

# build_trigger(record, trigger, opts \\\ [])

[ __ View Source ](external_link)

Builds a specific trigger for the record provided, but does not insert it into the database.

##  __ Options

  * `:actor` \- the actor to set on the job. Requires configuring an actor persister.



All other options are passed through to [`Oban.Worker.new/2`](external_link)

__ Link to this function

# config(domains, base, opts \\\ [])

[ __ View Source ](external_link)

Alters your oban configuration to include the required AshOban configuration.

# Options

  * `:require?` ([`boolean/0`](external_link)) - Whether to require queues and plugins to be defined in your oban config. This can be helpful to allow the ability to split queues between nodes. See <https://hexdocs.pm/oban/splitting-queues.html> The default value is `true`.



__ Link to this function

# do_schedule_and_run_triggers(resources_or_domains_or_otp_apps, opts)

[ __ View Source ](external_link)

__ Link to this function

# lookup_actor(actor_json)

[ __ View Source ](external_link)
    
    
    @spec lookup_actor(actor_json :: [any](external_link)()) :: [any](external_link)()

__ Link to this function

# run_trigger(record, trigger, opts \\\ [])

[ __ View Source ](external_link)

Runs a specific trigger for the record provided.

##  __ Options

  * `:actor` \- the actor to set on the job. Requires configuring an actor persister.



All other options are passed through to [`Oban.Worker.new/2`](external_link)

__ Link to this function

# schedule(resource, trigger, opts \\\ [])

[ __ View Source ](external_link)

Schedules all relevant jobs for the provided trigger or scheduled action

##  __ Options

`:actor` \- the actor to set on the job. Requires configuring an actor persister.

__ Link to this function

# schedule_and_run_triggers(resources_or_domains_or_otp_apps, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec schedule_and_run_triggers(
      triggerable() | [triggerable()],
      [keyword](external_link)()
    ) :: result()

Runs the schedulers for the given resource, domain, or otp_app, or list of resources, domains, or otp_apps.

Options:

  * `drain_queues?` \- Defaults to false, drains the queues after scheduling. This is primarily for testing
  * `queue`, `with_limit`, `with_recursion`, `with_safety`, `with_scheduled` \- passed through to [`Oban.drain_queue/2`](external_link), if it is called
  * `scheduled_actions?` \- Defaults to false, unless a scheduled action name was explicitly provided. Schedules all applicable scheduled actions.
  * `triggers?` \- Defaults to true, schedules all applicable scheduled actions.
  * `actor` \- The actor to schedule and run the triggers with
  * `oban` \- The oban module to use. Defaults to [`Oban`](external_link)



If the input is:

  * a list - each item is passed into `schedule_and_run_triggers/1`, and the results are merged together.
  * an otp_app - each domain configured in the `ash_domains` of that otp_app is passed into `schedule_and_run_triggers/1`, and the results are merged together.
  * a domain - each reosurce configured in that domain is passed into `schedule_and_run_triggers/1`, and the results are merged together.
  * a tuple of {resource, :trigger_name} - that trigger is scheduled, and the results are merged together.
  * a resource - each trigger configured in that resource is scheduled, and the results are merged together.



__ Link to this function

# stacktrace(arg1)

[ __ View Source ](external_link)

__ Link to this function

# store_actor(args, actor)

[ __ View Source ](external_link)
    
    
    @spec store_actor(args :: [map](external_link)(), actor :: [any](external_link)()) :: [any](external_link)()
