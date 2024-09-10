# DSL: AshOban — ash_oban v0.2.4

Project: ash_oban v0.2.4

## Table of Contents

- [ __ View Source ](external_link) DSL: AshOban
  - __ oban
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ oban.triggers
    - __ Nested DSLs
    - __ Examples
  - __ oban.triggers.trigger
    - __ Examples
    - __ Arguments
    - __ Options
    - __ Introspection
  - __ oban.scheduled_actions
    - __ Nested DSLs
    - __ Examples
  - __ oban.scheduled_actions.schedule
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash_oban __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshOban

Tools for working with AshOban triggers.

##  __ oban

###  __ Nested DSLs

  * triggers
    * trigger
  * scheduled_actions
    * schedule



###  __ Examples
    
    
    oban do
      triggers do
        trigger :process do
          action :process
          where expr(processed != true)
          worker_read_action(:read)
        end
      end
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`domain`| `module`| | The Domain to use when calling actions on this resource. Defaults to the resource's domain.  
  
##  __ oban.triggers

###  __ Nested DSLs

  * trigger



###  __ Examples
    
    
    triggers do
      trigger :process do
        action :process
        where expr(processed != true)
        worker_read_action(:read)
      end
    end
    

##  __ oban.triggers.trigger
    
    
    trigger name

###  __ Examples
    
    
    trigger :process do
      action :process
      where expr(processed != true)
      worker_read_action(:read)
    end
    

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique identifier for this trigger.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`action`| `atom`| | The action to be triggered. Defaults to the identifier of the resource plus the name of the trigger  
`action_input`| `map`| | Static inputs to supply to the update/destroy action when it is called. Any metadata produced by `read_metadata` will overwrite these values.  
`scheduler_queue`| `atom`| | The queue to place the scheduler job in. The same queue as job is used by default (but with a priority of 1 so schedulers run first).  
`debug?`| `boolean`| `false`| If set to `true`, detailed debug logging will be enabled for this trigger. You can also set `config :ash_oban, debug_all_triggers?: true` to enable debug logging for all triggers.  
`scheduler_cron`| `String.t | false`| `"* * * * *"`| A crontab configuration for when the job should run. Defaults to once per minute ("__ __ *"). Use `false` to disable the scheduler entirely.  
`stream_batch_size`| `pos_integer`| | The batch size to pass when streaming records from using [`Ash.stream!/2`](3.2.2/Ash.html#stream!/2). No batch size is passed if none is provided here, so the default is used.  
`queue`| `atom`| | The queue to place the worker job in. The trigger name is used by default.  
`record_limit`| `pos_integer`| | If set, any given run of the scheduler will only ever schedule this many items maximum  
`log_errors?`| `boolean`| `true`| Whether or not to log errors that occur when performing an action.  
`log_final_error?`| `boolean`| `true`| If true, logs that an error occurred on the final attempt to perform an action even if `log_errors?` is set to false.  
`worker_priority`| `non_neg_integer`| `2`| A number from 0 to 3, where 0 is the highest priority and 3 is the lowest.  
`scheduler_priority`| `non_neg_integer`| `3`| A number from 0 to 3, where 0 is the highest priority and 3 is the lowest.  
`max_scheduler_attempts`| `pos_integer`| `1`| How many times to attempt scheduling of the triggered action.  
`max_attempts`| `pos_integer`| `1`| How many times to attempt the job. After all attempts have been exhausted, the scheduler may just reschedule it. Use the `on_error` action to update the record to make the scheduler no longer apply.  
`read_metadata`| `(any -> any)`| | Takes a record, and returns metadata to be given to the update action as an argument called `metadata`.  
`state`| `:active | :paused | :deleted`| `:active`| Describes the state of the cron job. See the getting started guide for more information. The most important thing is that you _do not remove a trigger from a resource if you are using oban pro_.  
`read_action`| `atom`| | The read action to use when querying records. Defaults to the primary read. This action _must_ support keyset pagination.  
`worker_read_action`| `atom`| | The read action to use when fetching the individual records for the trigger. Defaults to `read_action`. If you customize this, ensure your action handles scenarios where the trigger is no longer relevant.  
`where`| `any`| | The filter expression to determine if something should be triggered  
`on_error`| `atom`| | An update action to call after the last attempt has failed. See the getting started guide for more.  
  
###  __ Introspection

Target: [`AshOban.Trigger`](external_link)

##  __ oban.scheduled_actions

A section for configured scheduled actions. Supports generic and create actions.

###  __ Nested DSLs

  * schedule



###  __ Examples
    
    
    scheduled_actions do
      schedule :import, "0 */6 * * *", action: :import
    end
    

##  __ oban.scheduled_actions.schedule
    
    
    schedule name, cron

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | A unique identifier for this scheduled action.  
`cron`| `String.t`| | The schedule in crontab notation  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`action_input`| `map`| | Inputs to supply to the action when it is called.  
`action`| `atom`| | The generic or create action to call when the schedule is triggered.  
`queue`| `atom`| | The queue to place the job in. Defaults to the resources short name plus the name of the scheduled action (not the action name).  
`state`| `:active | :paused | :deleted`| `:active`| Describes the state of the cron job. See the getting started guide for more information. The most important thing is that you _do not remove a scheduled action from a resource if you are using oban pro_.  
`max_attempts`| `pos_integer`| `1`| How many times to attempt the job. The action will receive a `last_oban_attempt?` argument on the last attempt, and you should handle errors accordingly.  
`priority`| `non_neg_integer`| `3`| A number from 0 to 3, where 0 is the highest priority and 3 is the lowest.  
`debug?`| `boolean`| `false`| If set to `true`, detailed debug logging will be enabled for this trigger. You can also set `config :ash_oban, debug_all_triggers?: true` to enable debug logging for all triggers.  
  
###  __ Introspection

Target: [`AshOban.Schedule`](external_link)

[ ← Previous Page  Getting Started With Ash Oban  ](external_link)

[ Next Page →  Change Log  ](external_link)
