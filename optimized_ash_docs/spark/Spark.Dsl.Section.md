# Spark.Dsl.Section — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Dsl.Section (spark v2.2.24)
- __ Summary
  - Types
- __ Types
- auto_set_fields()
- describe()
- docs()
- entities()
- examples()
- imports()
- links()
- modules()
- name()
- no_depend_modules()
- patchable?()
- sections()
- snippet()
- t()
- top_level?()
  - __ Example

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Dsl.Section (spark v2.2.24)

Declares a DSL section.

A dsl section allows you to organize related configurations. All extensions configure sections, they cannot add DSL builders to the top level. This keeps things organized, and concerns separated.

A section may have nested sections, which will be configured the same as other sections. Getting the options/entities of a section is done by providing a path, so you would use the nested path to retrieve that configuration. See [`Spark.Dsl.Extension.get_entities/2`](external_link) and [`Spark.Dsl.Extension.get_opt/4`](external_link).

A section may have entities, which are constructors that produce instances of structs. For more on entities, see [`Spark.Dsl.Entity`](external_link).

A section may also have a `schema`, which you can learn more about in [`Spark.Options`](external_link). Spark will produce builders for those options, so that they may be configured. They are retrieved with [`Spark.Dsl.Extension.get_opt/4`](external_link).

To create a section that is available at the top level (i.e not nested inside of its own name), use `top_level?: true`. Remember, however, that this has no effect on sections nested inside of other sections.

For a full example, see [`Spark.Dsl.Extension`](external_link).

#  __ Summary

##  Types

auto_set_fields()

describe()

User provided documentation.

docs()

Internal field. Not set by user.

entities()

examples()

imports()

links()

modules()

name()

no_depend_modules()

patchable?()

sections()

snippet()

t()

top_level?()

Determines whether a section can be declared directly in a module.

#  __ Types

__ Link to this type

# auto_set_fields()

[ __ View Source ](external_link)
    
    
    @type auto_set_fields() :: [keyword](external_link)([any](external_link)())

__ Link to this type

# describe()

[ __ View Source ](external_link)
    
    
    @type describe() :: [String.t](external_link)()

User provided documentation.

Documentation provided in a `Section`'s `describe` field will be included by [`Spark`](external_link) in any generated documentation that includes the `Section`.

__ Link to this type

# docs()

[ __ View Source ](external_link)
    
    
    @type docs() :: [String.t](external_link)()

Internal field. Not set by user.

__ Link to this type

# entities()

[ __ View Source ](external_link)
    
    
    @type entities() :: [[Spark.Dsl.Entity.t](external_link)()]

__ Link to this type

# examples()

[ __ View Source ](external_link)
    
    
    @type examples() :: [[String.t](external_link)()]

__ Link to this type

# imports()

[ __ View Source ](external_link)
    
    
    @type imports() :: [[module](external_link)()]

__ Link to this type

# links()

[ __ View Source ](external_link)
    
    
    @type links() :: nil | [keyword](external_link)([[String.t](external_link)()])

__ Link to this type

# modules()

[ __ View Source ](external_link)
    
    
    @type modules() :: [[atom](external_link)()]

__ Link to this type

# name()

[ __ View Source ](external_link)
    
    
    @type name() :: [atom](external_link)()

__ Link to this type

# no_depend_modules()

[ __ View Source ](external_link)
    
    
    @type no_depend_modules() :: [[atom](external_link)()]

__ Link to this type

# patchable?()

[ __ View Source ](external_link)
    
    
    @type patchable?() :: [boolean](external_link)()

__ Link to this type

# sections()

[ __ View Source ](external_link)
    
    
    @type sections() :: [t()]

__ Link to this type

# snippet()

[ __ View Source ](external_link)
    
    
    @type snippet() :: [String.t](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Spark.Dsl.Section{
      auto_set_fields: auto_set_fields(),
      deprecations: [term](external_link)(),
      describe: describe(),
      docs: docs(),
      entities: entities(),
      examples: examples(),
      imports: imports(),
      links: links(),
      modules: modules(),
      name: name(),
      no_depend_modules: no_depend_modules(),
      patchable?: patchable?(),
      schema: [Spark.Options.schema](external_link)(),
      sections: sections(),
      snippet: snippet(),
      top_level?: top_level?()
    }

__ Link to this type

# top_level?()

[ __ View Source ](external_link)
    
    
    @type top_level?() :: [boolean](external_link)()

Determines whether a section can be declared directly in a module.

When `top_level?: true`, that Section's DSL can be declared outside of a `do` block in a module.

##  __ Example

A `Section` declared with `top_level?: true`:
    
    
    @my_section %Spark.Dsl.Section{
      top_level?: true,
      name: :my_section,
      schema: [my_field: [type: :atom, required: true]]
    }

Can be declared like this:
    
    
    defmodule MyDslModule do
      my_field :value
    end

With `top_level?: false`, the DSL section would need to be declared explicitly/:
    
    
    defmodule MyDslModule do
      my_section do
        my_field :value
      end
    end
