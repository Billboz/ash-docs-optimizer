# Spark.InfoGenerator — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.InfoGenerator (spark v2.2.24)
  - __ Usage
- __ Summary
  - Types
  - Functions
- __ Types
- options()
- __ Functions
- generate_config_functions(extension, sections)
- generate_entity_functions(extension, sections)
- generate_options_functions(extension, sections)
- spec_for_type(terminal, opts)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.InfoGenerator (spark v2.2.24)

Used to dynamically generate configuration functions for Spark extensions based on their DSL.

##  __ Usage
    
    
    defmodule MyConfig do
      use Spark.InfoGenerator, extension: MyDslExtension, sections: [:my_section]
    end

#  __ Summary

##  Types

options()

##  Functions

generate_config_functions(extension, sections)

Given an extension and a list of DSL sections generate individual config functions for each option.

generate_entity_functions(extension, sections)

Given an extension and a list of DSL sections, generate an entities function which returns a list of entities.

generate_options_functions(extension, sections)

Given an extension and a list of DSL sections, generate an options function which returns a map of all configured options for a resource (including defaults).

spec_for_type(terminal, opts)

#  __ Types

__ Link to this type

# options()

[ __ View Source ](external_link)
    
    
    @type options() :: [extension: [module](external_link)(), sections: [[atom](external_link)()]]

#  __ Functions

__ Link to this macro

# generate_config_functions(extension, sections)

[ __ View Source ](external_link) (macro)
    
    
    @spec generate_config_functions([module](external_link)(), [[atom](external_link)()]) :: [Macro.t](external_link)()

Given an extension and a list of DSL sections generate individual config functions for each option.

__ Link to this macro

# generate_entity_functions(extension, sections)

[ __ View Source ](external_link) (macro)
    
    
    @spec generate_entity_functions([module](external_link)(), [[atom](external_link)()]) :: [Macro.t](external_link)()

Given an extension and a list of DSL sections, generate an entities function which returns a list of entities.

__ Link to this macro

# generate_options_functions(extension, sections)

[ __ View Source ](external_link) (macro)
    
    
    @spec generate_options_functions([module](external_link)(), [[atom](external_link)()]) :: [Macro.t](external_link)()

Given an extension and a list of DSL sections, generate an options function which returns a map of all configured options for a resource (including defaults).

__ Link to this function

# spec_for_type(terminal, opts)

[ __ View Source ](external_link)
