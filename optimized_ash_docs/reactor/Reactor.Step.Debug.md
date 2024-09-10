# Reactor.Step.Debug — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Step.Debug (reactor v0.9.1)
  - __ Options
- __ Summary
  - Types
- __ Types
- level_option()
- options()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Step.Debug (reactor v0.9.1)

A very simple step which sends debug information to [`Logger`](external_link).

##  __ Options

  * `level` \- the log level to use.



#  __ Summary

##  Types

level_option()

options()

#  __ Types

__ Link to this type

# level_option()

[ __ View Source ](external_link)
    
    
    @type level_option() :: {:level, [Logger.level](external_link)()}

__ Link to this type

# options()

[ __ View Source ](external_link)
    
    
    @type options() :: [level_option()]
