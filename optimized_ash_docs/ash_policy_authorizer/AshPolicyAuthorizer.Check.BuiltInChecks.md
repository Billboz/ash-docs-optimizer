# AshPolicyAuthorizer.Check.BuiltInChecks — ash_policy_authorizer v0.16.5

Project: ash_policy_authorizer v0.16.5

## Table of Contents

- AshPolicyAuthorizer.Check.BuiltInChecks (ash_policy_authorizer v0.16.5) [ View Source ](external_link)
- Link to this section Summary
  - Functions
- Link to this section Functions
- action(action)
- action_type(action_type)
- actor_attribute_equals(attribute, value)
- always()
- attribute(attribute, filter)
- changing_attributes(opts)
- changing_relationship(relationship)
- changing_relationships(relationships)
- never()
- relates_to_actor_via(relationship_path)
- relating_to_actor(relationship)
- selecting(attribute)

[ ash_policy_authorizer ](external_link) **v0.16.5**

[ ![ash_policy_authorizer](external_link) ](https://github.com/ash-project/ash_policy_authorizer)

  * GUIDES
  * Modules






#  AshPolicyAuthorizer.Check.BuiltInChecks (ash_policy_authorizer v0.16.5) [ View Source ](external_link)

The global authorization checks built into ash

#  Link to this section Summary 

##  Functions

action(action)

This check is true when the action name matches the provided action name

action_type(action_type)

This check is true when the action type matches the provided type

actor_attribute_equals(attribute, value)

This check is true when the value of the specified attribute equals the specified value

always()

This check always passes

attribute(attribute, filter)

This check is true when a field on the record matches a specific filter

changing_attributes(opts)

This check is true when attribute changes correspond to the provided options.

changing_relationship(relationship)

This check is true when the specified relationship is changing

changing_relationships(relationships)

This check is true when the specified relationships are changing

never()

this check never passes

relates_to_actor_via(relationship_path)

This check passes if the data relates to the actor via the specified relationship or path of relationships

relating_to_actor(relationship)

This check is true when the specified relationship is being changed to the current actor

selecting(attribute)

This check is true when the field is being selected and false when it is not

#  Link to this section Functions 

Link to this function

# action(action)

[ View Source ](external_link)

This check is true when the action name matches the provided action name

Link to this function

# action_type(action_type)

[ View Source ](external_link)

This check is true when the action type matches the provided type

Link to this function

# actor_attribute_equals(attribute, value)

[ View Source ](external_link)

This check is true when the value of the specified attribute equals the specified value

Link to this function

# always()

[ View Source ](external_link)

This check always passes

Link to this function

# attribute(attribute, filter)

[ View Source ](external_link)

This check is true when a field on the record matches a specific filter

Link to this function

# changing_attributes(opts)

[ View Source ](external_link)

This check is true when attribute changes correspond to the provided options.

Provide a keyword list of options or just an atom representing the attribute.

For example:
    
    
    # if you are changing both first name and last name
    changing_attributes([:first_name, :last_name])
    
    # if you are changing first name to fred
    changing_attributes(first_name: [to: "fred"])
    
    # if you are changing last name from bob
    changing_attributes(last_name: [from: "bob"])
    
    # if you are changing :first_name at all, last_name from "bob" and middle name from "tom" to "george"
    changing_attributes([:first_name, last_name: [from: "bob"], middle_name: [from: "tom", to: "george]])

Link to this function

# changing_relationship(relationship)

[ View Source ](external_link)

This check is true when the specified relationship is changing

Link to this function

# changing_relationships(relationships)

[ View Source ](external_link)

This check is true when the specified relationships are changing

Link to this function

# never()

[ View Source ](external_link)

this check never passes

Link to this function

# relates_to_actor_via(relationship_path)

[ View Source ](external_link)

This check passes if the data relates to the actor via the specified relationship or path of relationships

Link to this function

# relating_to_actor(relationship)

[ View Source ](external_link)

This check is true when the specified relationship is being changed to the current actor

Link to this function

# selecting(attribute)

[ View Source ](external_link)

This check is true when the field is being selected and false when it is not
