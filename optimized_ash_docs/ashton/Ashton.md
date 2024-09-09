# Ashton — ashton v0.4.1

Project: ashton v0.4.1

## Table of Contents

  - v0.4.1
- ashton v0.4.1 Ashton [ View Source ](external_link)
- Link to this section Summary
  - Types
  - Functions
- Link to this section Types
- error() [ View Source ](external_link)
- schema() [ View Source ](external_link)
- validation_result() [ View Source ](external_link)
- Link to this section Functions
- document(schema) [ View Source ](external_link)
- document(schema, opts) [ View Source ](external_link)
- merge(left, right) [ View Source ](external_link)
- merge(left, right, opts) [ View Source ](external_link)
- schema() [ View Source ](external_link)
- schema(opts) [ View Source ](external_link)
- validate(opts, schema) [ View Source ](external_link)
- validate!(opts, schema) [ View Source ](external_link)

[ ashton ](external_link)

##  v0.4.1 

  * Pages
  * Modules






#  ashton v0.4.1 Ashton [ View Source ](external_link)

Documentation for Ashton.

#  Link to this section Summary 

##  Types

error()

schema()

validation_result()

##  Functions

document(schema)

See [`Ashton.Doc.document/1`](external_link).

document(schema, opts)

See [`Ashton.Doc.document/2`](external_link)

merge(left, right)

See [`Ashton.Schema.merge/2`](external_link)

merge(left, right, opts)

See [`Ashton.Schema.merge/3`](external_link).

schema()

See [`Ashton.Schema.new/0`](external_link).

schema(opts)

See [`Ashton.Schema.new/1`](external_link)

validate(opts, schema)

validate!(opts, schema)

Validates opts according to a schema or the constructor for a schema. Raises on invalid opts.

#  Link to this section Types 

Link to this type

# error() [ View Source ](external_link)
    
    
    error() :: {[atom](external_link)(), [String.t](external_link)()}

Link to this type

# schema() [ View Source ](external_link)
    
    
    schema() :: [Ashton.Schema.t](external_link)()

Link to this type

# validation_result() [ View Source ](external_link)
    
    
    validation_result() :: {:ok, [Keyword.t](external_link)()} | {:error, [error()]}

#  Link to this section Functions 

Link to this function

# document(schema) [ View Source ](external_link)

See [`Ashton.Doc.document/1`](external_link).

Link to this function

# document(schema, opts) [ View Source ](external_link)

See [`Ashton.Doc.document/2`](external_link)

Link to this function

# merge(left, right) [ View Source ](external_link)

See [`Ashton.Schema.merge/2`](external_link)

Link to this function

# merge(left, right, opts) [ View Source ](external_link)

See [`Ashton.Schema.merge/3`](external_link).

Link to this function

# schema() [ View Source ](external_link)

See [`Ashton.Schema.new/0`](external_link).

Link to this function

# schema(opts) [ View Source ](external_link)

See [`Ashton.Schema.new/1`](external_link)

Link to this function

# validate(opts, schema) [ View Source ](external_link)
    
    
    validate(opts :: [Keyword.t](external_link)(), schema :: [Ashton.Schema.t](external_link)()) ::
      {:ok, [Keyword.t](external_link)()} | {:error, [error()]}

Link to this function

# validate!(opts, schema) [ View Source ](external_link)
    
    
    validate!(opts :: [Keyword.t](external_link)(), schema :: schema()) :: [Keyword.t](external_link)() | [no_return](external_link)()

Validates opts according to a schema or the constructor for a schema. Raises on invalid opts.
    
    
    iex> Ashton.validate!([reticulate_splines?: true], opts: [:reticulate_splines?])
    [reticulate_splines?: true]
    iex> Ashton.validate!([reticulate_splines?: true], opts: [:load_textures?], extra_keys?: true)
    [reticulate_splines?: true]
    iex> schema = Ashton.schema(opts: [:reticulate_splines?], required: [:reticulate_splines?], extra_keys?: true)
    ...> Ashton.validate!([reticulate_splines?: true, hack_interwebs?: true], schema)
    [reticulate_splines?: true, hack_interwebs?: true]
    iex> Ashton.validate!([], opts: [:reticulate_splines?], required: [:reticulate_splines?])
    ** (ArgumentError) Opt Validation Error: reticulate_splines? - is required
