# DSL: AshCsv.DataLayer — ash_csv v0.9.7

Project: ash_csv v0.9.7

## Table of Contents

- [ __ View Source ](external_link) DSL: AshCsv.DataLayer
  - __ csv
    - __ Examples
    - __ Options

__

Search documentation of ash_csv __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshCsv.DataLayer

The data layer implementation for AshCsv

##  __ csv

###  __ Examples
    
    
    csv do
      file "priv/data/tags.csv"
      create? true
      header? true
      separator '-'
      columns [:id, :name]
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`file`| `String.t`| | The file to read the data from  
`create?`| `boolean`| `false`| Whether or not the file should be created if it does not exist (this will only happen on writes)  
`header?`| `boolean`| `false`| If the csv file has a header that should be skipped  
`separator`| `any`| `44`| The separator to use, defaults to a comma. Pass in a character (not a string).  
`columns`| `any`| | The order that the attributes appear in the columns of the CSV  
  
[ ← Previous Page  Getting Started with CSV  ](external_link)

[ Next Page →  Change Log  ](external_link)
