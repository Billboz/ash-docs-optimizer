# Expressions — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) Expressions
- Fragments
    - __ Examples
      - Simple expressions
      - Calling functions
      - Using entire queries
      - In calculations
      - In migrations
  - __ Like

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) Expressions

In addition to the expressions listed in the [Ash expressions guide](expressions.html), AshSqlite provides the following expressions

# Fragments

Fragments allow you to use arbitrary sqlite expressions in your queries. Fragments can often be an escape hatch to allow you to do things that don't have something officially supported with Ash.

###  __ Examples

#### Simple expressions
    
    
    fragment("? / ?", points, count)

#### Calling functions
    
    
    fragment("repeat('hello', 4)")

#### Using entire queries
    
    
    fragment("points > (SELECT SUM(points) FROM games WHERE user_id = ? AND id != ?)", user_id, id)

> ###  __ a last resport
> 
> Using entire queries as shown above is a last resort, but can sometimes be the best way to accomplish a given task.

#### In calculations
    
    
    calculations do
      calculate :lower_name, :string, expr(
        fragment("LOWER(?)", name)
      )
    end

#### In migrations
    
    
    create table(:managers, primary_key: false) do
      add :id, :uuid, null: false, default: fragment("UUID_GENERATE_V4()"), primary_key: true
    end

##  __ Like

These wrap the sqlite builtin like operator

Please be aware, these match _patterns_ not raw text. Use `contains/1` if you want to match text without supporting patterns, i.e `%` and `_` have semantic meaning!

For example:
    
    
    Ash.Query.filter(User, like(name, "%obo%")) # name contains obo anywhere in the string, case sensitively

[ ← Previous Page  Testing With Sqlite  ](external_link)

[ Next Page →  Join Manual Relationships  ](external_link)
