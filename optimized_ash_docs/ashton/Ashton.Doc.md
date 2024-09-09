# Ashton.Doc — ashton v0.4.1

Project: ashton v0.4.1

## Table of Contents

  - v0.4.1
- ashton v0.4.1 Ashton.Doc [ View Source ](external_link)
- Link to this section Summary
  - Functions
  - Opts
- Link to this section Functions
- document(schema, doc_opts \\\ []) [ View Source ](external_link)
  - Opts
- positive?(integer) [ View Source ](external_link)

[ ashton ](external_link)

##  v0.4.1 

  * Pages
  * Modules






#  ashton v0.4.1 Ashton.Doc [ View Source ](external_link)

Automatic opt documentation, to be placed into your function docstrings

#  Link to this section Summary 

##  Functions

document(schema, doc_opts \\\ [])

* * *

## Opts

  * `name`(`:string`): The top level header for the opts documentation - Default: "Opts" 
  * `header_depth`(`:int`): How many `#` to prepend before any heading - Default: 1 



* * *

positive?(integer)

#  Link to this section Functions 

Link to this function

# document(schema, doc_opts \\\ []) [ View Source ](external_link)
    
    
    document(schema :: [Ashton.schema](external_link)(), doc_opts :: [Keyword.t](external_link)()) :: [String.t](external_link)()

* * *

##  Opts 

  * `name`(`:string`): The top level header for the opts documentation - Default: "Opts" 
  * `header_depth`(`:int`): How many `#` to prepend before any heading - Default: 1 



* * *

Link to this function

# positive?(integer) [ View Source ](external_link)
