searchData={"items":[{"type":"module","title":"AshRbac","doc":"","ref":"AshRbac.html"},{"type":"module","title":"AshRbac.Actions","doc":"Adds the policies for actions to the dsl_state","ref":"AshRbac.Actions.html"},{"type":"function","title":"AshRbac.Actions.after?/1","doc":"","ref":"AshRbac.Actions.html#after?/1"},{"type":"function","title":"AshRbac.Actions.after_compile?/0","doc":"","ref":"AshRbac.Actions.html#after_compile?/0"},{"type":"function","title":"AshRbac.Actions.before?/1","doc":"","ref":"AshRbac.Actions.html#before?/1"},{"type":"module","title":"AshRbac.Fields","doc":"Adds the policies for fields to the dsl_state","ref":"AshRbac.Fields.html"},{"type":"function","title":"AshRbac.Fields.after?/1","doc":"","ref":"AshRbac.Fields.html#after?/1"},{"type":"function","title":"AshRbac.Fields.after_compile?/0","doc":"","ref":"AshRbac.Fields.html#after_compile?/0"},{"type":"function","title":"AshRbac.Fields.before?/1","doc":"","ref":"AshRbac.Fields.html#before?/1"},{"type":"module","title":"AshRbac.HasRole","doc":"Check to determine if the actor has a specific role or if the actor has any of the roles in a list","ref":"AshRbac.HasRole.html"},{"type":"function","title":"AshRbac.HasRole.requires_original_data?/2","doc":"","ref":"AshRbac.HasRole.html#requires_original_data?/2"},{"type":"function","title":"AshRbac.HasRole.strict_check/3","doc":"","ref":"AshRbac.HasRole.html#strict_check/3"},{"type":"function","title":"AshRbac.HasRole.type/0","doc":"","ref":"AshRbac.HasRole.html#type/0"},{"type":"module","title":"AshRbac.Info","doc":"Introspection functions for the Rbac Extension","ref":"AshRbac.Info.html"},{"type":"function","title":"AshRbac.Info.bypass/1","doc":"","ref":"AshRbac.Info.html#bypass/1"},{"type":"function","title":"AshRbac.Info.bypass_roles_field/1","doc":"","ref":"AshRbac.Info.html#bypass_roles_field/1"},{"type":"function","title":"AshRbac.Info.public?/1","doc":"","ref":"AshRbac.Info.html#public?/1"},{"type":"function","title":"AshRbac.Info.roles/1","doc":"","ref":"AshRbac.Info.html#roles/1"},{"type":"module","title":"AshRbac.Policies","doc":"Adds the configured policies to the resource","ref":"AshRbac.Policies.html"},{"type":"function","title":"AshRbac.Policies.after_compile?/0","doc":"","ref":"AshRbac.Policies.html#after_compile?/0"},{"type":"module","title":"AshRbac.Role","doc":"The Role entity for the DSL of the rbac extension","ref":"AshRbac.Role.html"},{"type":"extras","title":"Getting Started","doc":"# Getting Started","ref":"getting_started.html"},{"type":"extras","title":"Installation - Getting Started","doc":"Add the ash_rbac dependency to your mix.exs\n\n```elixir\ndefp deps do\n  [\n    {:ash_rbac, \"~> 0.6.0\"}\n  ]\nend\n```","ref":"getting_started.html#installation"},{"type":"extras","title":"Adding AshRbac to your resource - Getting Started","doc":"First, the authorizer and the extension need to be added.\n\n```elixir\ndefmodule RootResource do\n    @moduledoc false\n    use Ash.Resource,\n      data_layer: Ash.DataLayer.Ets,\n      authorizers: [Ash.Policy.Authorizer], # Add the authorizer\n      extensions: [AshRbac] # Add the extension\n  ...\nend\n```\n\nAfterwards, you can add a rbac block to your resource.\n\n```elixir\n  rbac do\n    role :user do\n      fields [:name, :email]\n      actions [:read]\n    end\n  end\n```\n\nThe options defined in the rbac block are transformed into policies during compile time.\n\nThe previous example will generate the following policies:\n\n```elixir\nfield_policies do\n  field_policy [:name, :email], [{AshRbac.HasRole, [role: [:user]]}] do\n    authorize_if always()\n  end\n\n  # it also adds a policy for all other fields like this\n  field_policy [:other_fields, ...] do\n    forbid_if always()\n  end\nend\n\npolicies do\n  policy [action(:read), {AshRbac.HasRole, [role: [:user]]}] do\n    authorize_if always()\n  end\nend\n```\n\nIt is possible to add extra conditions to fields and actions:\n\n```elixir\n  rbac do\n    role :user do\n      fields [:name, {:email, actor_attribute_equals(:field, \"value\")}]\n      actions [{:read, accessing_from(RelatedResource, :path)}]\n    end\n  end\n```\n\nThe conditions are added to the generated policies as well.\n\n```elixir\nfield_policies do\n  field_policy [:name], [{AshRbac.HasRole, [role: [:user]]}] do\n    authorize_if always()\n  end\n\n  field_policy [:email], [{AshRbac.HasRole, [role: [:user], actor_attribute_equals(:field, \"value\")]}] do\n    authorize_if always()\n  end\n\n  # it also adds a policy for all other fields like this\n  field_policy [:other_fields, ...] do\n    forbid_if always()\n  end\nend\n\npolicies do\n  policy [action(:read), {hAshRbac.HasRole, [role: [:user]]}, accessing_from(RelatedResource, :path)] do\n    authorize_if always()\n  end\nend\n```","ref":"getting_started.html#adding-ashrbac-to-your-resource"},{"type":"extras","title":"Relationships","doc":"# Relationships\n\nAs relationships are not part of field policies it is necessary to protect them with an action policy.\nThis can be done by passing a custom condition to the action.\n\n```elixir\n# only allow read access if accessed from a parent\nrbac do\n  role :user do\n    actions [\n      {:read, accessing_from(Parent, :child)}\n    ]\n  end\nend\n\n# result\npolicies do\n  policy [action(:read), accessing_from(Parent, :child)] do\n    authorize_if {AshRbac.HasRole, [role: :user]}\n  end\nend\n```","ref":"relationships.html"},{"type":"extras","title":"Readme","doc":"# AshRbac\n\nA small extension that allows for easier application of policies\n\n```elixir\nrbac do\n  role :user do\n    fields [:fields, :user, :can, :see]\n    actions [:actions, :user, :can :use]\n  end\nend\n```","ref":"readme.html"},{"type":"extras","title":"Installation - Readme","doc":"The package can be installed by adding `ash_rbac` to your list of dependencies in `mix.exs`:\n\n```elixir\ndef deps do\n  [\n    {:ash_rbac, \"~> 0.6.0\"},\n  ]\nend\n```\n\nDocumentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)\nand published on [HexDocs](https://hexdocs.pm). Once published, the docs can\nbe found at  .","ref":"readme.html#installation"}],"content_type":"text/markdown","producer":{"name":"ex_doc","version":[48,46,51,52,46,48]}}