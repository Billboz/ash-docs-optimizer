# Charts — ash_state_machine v0.2.6

Project: ash_state_machine v0.2.6

## Table of Contents

- [ __ View Source ](external_link) Charts

__

Search documentation of ash_state_machine __ __

__ Settings

#  [ __ View Source ](external_link) Charts

Run [`mix ash_state_machine.generate_flow_charts`](external_link) to generate flow charts for your resources. See the task documentation for more. Here is an example:
    
    
    stateDiagram-v2
    pending --> confirmed: confirm
    confirmed --> on_its_way: begin_delivery
    on_its_way --> arrived: package_arrived
    on_its_way --> error: error
    confirmed --> error: error
    pending --> error: error

[ ← Previous Page  What is AshStateMachine?  ](external_link)

[ Next Page →  Working with Ash.can?  ](external_link)
