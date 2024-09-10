# Change Log — ash_oban v0.2.4

Project: ash_oban v0.2.4

## Table of Contents

- [ __ View Source ](external_link) Change Log
  - __ [v0.2.4](external_link) (2024-07-19)
    - __ Improvements:
  - __ [v0.2.3](external_link) (2024-05-10)
    - __ Bug Fixes:
  - __ [v0.2.3-rc.1](external_link) (2024-04-03)
    - __ Bug Fixes:
  - __ [v0.2.3-rc.0](external_link) (2024-03-29)
    - __ Improvements:
  - __ [v0.2.2](external_link) (2024-03-05)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.2.1](external_link) (2024-02-28)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.2.0](external_link) (2024-02-20)
    - __ Breaking Changes:
    - __ Improvements:
  - __ [v0.1.14](external_link) (2024-02-16)
    - __ Improvements:
  - __ [v0.1.13](external_link) (2024-01-12)
    - __ Bug Fixes:
  - __ [v0.1.12](external_link) (2023-12-12)
    - __ Improvements:
  - __ [v0.1.11](external_link) (2023-12-12)
    - __ Improvements:
  - __ [v0.1.10](external_link) (2023-12-07)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.1.9](external_link) (2023-10-04)
    - __ Improvements:
  - __ [v0.1.8](external_link) (2023-09-16)
    - __ Improvements:
  - __ [v0.1.7](external_link) (2023-09-16)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.1.6](external_link) (2023-08-29)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.1.5](external_link) (2023-08-15)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.1.4](external_link) (2023-06-10)
    - __ Improvements:
  - __ [v0.1.3](external_link) (2023-05-18)
    - __ Bug Fixes:
  - __ [v0.1.2](external_link) (2023-05-08)
    - __ Improvements:
  - __ [v0.1.1](external_link) (2023-05-01)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.1.0](external_link) (2023-04-28)
    - __ Features:

__

Search documentation of ash_oban __ __

__ Settings

#  [ __ View Source ](external_link) Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](external_link) for commit guidelines.

##  __ [v0.2.4](external_link) (2024-07-19)

###  __ Improvements:

  * loosen postgrex version requirement



##  __ [v0.2.3](external_link) (2024-05-10)

###  __ Bug Fixes:

  * plugins can just be modules



##  __ [v0.2.3-rc.1](external_link) (2024-04-03)

###  __ Bug Fixes:

  * use `skip_unknown_inputs` to avoid unnecessary errors

  * oban pro state active (#22)

  * detect oban pro plugin usage and support dynamic queues (#20)




##  __ [v0.2.3-rc.0](external_link) (2024-03-29)

###  __ Improvements:

  * update to ash 3.0



##  __ [v0.2.2](external_link) (2024-03-05)

###  __ Bug Fixes:

  * properly catch when trigger no longer applies



###  __ Improvements:

  * validate primary keys provided for job scheduling

  * builds_trigger/3 to enable job composition without execution (#18)




##  __ [v0.2.1](external_link) (2024-02-28)

###  __ Bug Fixes:

  * only drain queues when oban is in testing mode

  * properly discard all non applicable jobs




###  __ Improvements:

  * support `Oban.Pro.Testing.drain_jobs`



##  __ [v0.2.0](external_link) (2024-02-20)

###  __ Breaking Changes:

  * authorize always by default



###  __ Improvements:

  * allow turning new authorization behavior off

  * add `actor_persister`, and use it automatically

  * authorize?: true always




##  __ [v0.1.14](external_link) (2024-02-16)

###  __ Improvements:

  * properly schedule scheduled actions



##  __ [v0.1.13](external_link) (2024-01-12)

###  __ Bug Fixes:

  * Do not wrap `paused` and `delete` Cron options into `events` (#15)

  * properly honor the `drain_queues?` option




##  __ [v0.1.12](external_link) (2023-12-12)

###  __ Improvements:

  * make draining queues optional for `AshOban.schedule_and_run_triggers`



##  __ [v0.1.11](external_link) (2023-12-12)

###  __ Improvements:

  * move schedule_and_run_triggers to [`AshOban`](external_link)



##  __ [v0.1.10](external_link) (2023-12-07)

###  __ Bug Fixes:

  * fallback clause to match valid configurations

  * add `cron` to opt schema

  * reverted part of refactor in 82cb0f90d9c0550c98ca5a8081ef8bd581c66e0d (#14)

  * nested pausing states under `events` option

  * only supply metadata if `read_metadata` is set

  * pass metadata argument on the udpate action




###  __ Improvements:

  * make [`AshOban.Test`](external_link) more configurable for scheduled actions

  * add `scheduled_action` for scheduling create/generic actions

  * log all errors by default, using `log_errors?` config

  * expose drain options to AshOban.Test.schedule_and_run_triggers (#12)

  * add `log_final_error?` and default it to `true`

  * don't log on raised exception, for consistency

  * support `require?: false` option on `config/3`.

  * support `action_input` on triggers




##  __ [v0.1.9](external_link) (2023-10-04)

###  __ Improvements:

  * more granular & more broad testing helpers

  * more debug logs, make debugging opt-in




##  __ [v0.1.8](external_link) (2023-09-16)

###  __ Improvements:

  * still validate queues even when no schedulers present



##  __ [v0.1.7](external_link) (2023-09-16)

###  __ Bug Fixes:

  * don't schedule triggers with no scheduler

  * make override job options optional (#8)




###  __ Improvements:

  * support providing an otp app to schedule and run triggers

  * support apis/resources for ash_oban

  * support overriding job opts in run_trigger (#7)

  * support destroy actions in the trigger action

  * debug logs




##  __ [v0.1.6](external_link) (2023-08-29)

###  __ Bug Fixes:

  * verify trigger action exists in transformer



###  __ Improvements:

  * use read_metadata when manually scheduling

  * allow `false` as the value for `scheduler_cron`

  * add worker/scheduler priorities




##  __ [v0.1.5](external_link) (2023-08-15)

###  __ Bug Fixes:

  * use same read_action in handle_error and in work

  * another syntax issue with `drain_queue/2`

  * drain_queue syntax issue

  * Update base engine to support rename Oban.Pro.Engines.Smart




###  __ Improvements:

  * only invoke error handler on last attempt

  * drain each queue twice

  * add test helper for running triggers

  * trigger_read_action, defaulting to read action

  * read with primary read for trigger

  * log error on scheduler failure




##  __ [v0.1.4](external_link) (2023-06-10)

###  __ Improvements:

  * support `record_limit` to limit max processed records



##  __ [v0.1.3](external_link) (2023-05-18)

###  __ Bug Fixes:

  * properly raise errors instead of swallowing them

  * don't use `authorize?: false` for operations.




##  __ [v0.1.2](external_link) (2023-05-08)

###  __ Improvements:

  * make scheduler default queue the same as worker



##  __ [v0.1.1](external_link) (2023-05-01)

###  __ Bug Fixes:

  * add_error/1 does not exist

  * `insert_all/1` not `insert_all!/1`




###  __ Improvements:

  * handle actions w/ before_transaction/after_transaction hooks better



##  __ [v0.1.0](external_link) (2023-04-28)

###  __ Features:

  * initial feature set



[ ← Previous Page  DSL: AshOban  ](external_link)
