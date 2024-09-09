# Ashton.Schema — ashton v0.4.1

Project: ashton v0.4.1

## Table of Contents

  - v0.4.1
- ashton v0.4.1 Ashton.Schema [ View Source ](external_link)
- Link to this section Summary
  - Types
  - Functions
- Link to this section Types
- t() [ View Source ](external_link)
- Link to this section Functions
- merge(left, right, opts \\\ []) [ View Source ](external_link)
  - Opts
- new() [ View Source ](external_link)
  - Opts
- new(opts) [ View Source ](external_link)

[ ashton ](external_link)

##  v0.4.1 

  * Pages
  * Modules






#  ashton v0.4.1 Ashton.Schema [ View Source ](external_link)

Functions for generating and validating the opts that generate a schema.

#  Link to this section Summary 

##  Types

t()

##  Functions

merge(left, right, opts \\\ [])

Merges two ashton schemas to create a superset schema.

new()

Create a new schema.

new(opts)

#  Link to this section Types 

Link to this type

# t() [ View Source ](external_link)
    
    
    t() :: %Ashton.Schema{
      annotations: [Keyword.t](external_link)(),
      constraints: [Keyword.t](external_link)(),
      custom: [Keyword.t](external_link)(),
      defaults: [Keyword.t](external_link)(),
      describe: [Keyword.t](external_link)(),
      extra_keys?: [boolean](external_link)(),
      opts: [[atom](external_link)()],
      required: [[atom](external_link)()],
      types: [Keyword.t](external_link)()
    }

#  Link to this section Functions 

Link to this function

# merge(left, right, opts \\\ []) [ View Source ](external_link)
    
    
    merge(left :: t(), right :: t(), opts :: [Keyword.t](external_link)()) :: t()

Merges two ashton schemas to create a superset schema.

* * *

##  Opts 

  * `annotate`(`:string`): Annotates the source of the opt, to be used in displaying documentation. 
  * `add_required?`(`:boolean`): "If true, all required fields from left/right are marked as required. Otherwise, only takes required fields from the left." 



* * *

Link to this function

# new() [ View Source ](external_link)
    
    
    new() :: t()

Create a new schema.

* * *

##  Opts 

  * `opts`(`[{:list, :atom}, :keyword]`): A list of opts accepted, or a keyword of opt name to opt type - Default: [] 
  * `required`(`{:list, :atom}`): A list of required opts (all of which must be in `opts` as well) - Default: [] 
  * `defaults`(`:keyword`): A keyword list of option name to a default value. Values must pass type rules - Default: [] 
  * `extra_keys?`(`:boolean`): If enabled, extra keys not specified by the schema do not fail validation - Default: false 
  * `custom`(`:keyword`): A keyword list of option name (for errors) and custom validations. See README - Default: [] 
  * `describe`(`:keyword`): A keyword list of option names to short descriptions (like these) - Default: [] 



* * *

A custom validation is run on the types provided at schema creation time, to ensure they are all valid types.

Link to this function

# new(opts) [ View Source ](external_link)
    
    
    new(opts :: [Keyword.t](external_link)()) :: t() | [no_return](external_link)()
