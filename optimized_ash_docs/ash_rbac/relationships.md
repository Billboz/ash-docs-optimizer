# Relationships — ash_rbac v0.6.0

Project: ash_rbac v0.6.0

## Table of Contents

- [ __ View Source ](external_link) Relationships

__

Search documentation of ash_rbac __ __

__ Settings

#  [ __ View Source ](external_link) Relationships

As relationships are not part of field policies it is necessary to protect them with an action policy. This can be done by passing a custom condition to the action.
    
    
    # only allow read access if accessed from a parent
    rbac do
      role :user do
        actions [
          {:read, accessing_from(Parent, :child)}
        ]
      end
    end
    
    # result
    policies do
      policy [action(:read), accessing_from(Parent, :child)] do
        authorize_if {AshRbac.HasRole, [role: :user]}
      end
    end

[ ← Previous Page  Getting Started  ](external_link)

[ Next Page →  Readme  ](external_link)
