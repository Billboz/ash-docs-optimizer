# Spark.Options.ValidationError — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Options.ValidationError exception (spark v2.2.24)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- %Spark.Options.ValidationError{}

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Options.ValidationError exception (spark v2.2.24)

An error that is returned (or raised) when options are invalid.

Since this is an exception, you can either raise it directly with [`raise/1`](external_link) or turn it into a message string with [`Exception.message/1`](external_link).

See `%Spark.Options.ValidationError{}` for documentation on the fields.

#  __ Summary

##  Types

t()

##  Functions

%Spark.Options.ValidationError{}

The error struct.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Spark.Options.ValidationError{
      __exception__: true,
      key: [atom](external_link)(),
      keys_path: [[atom](external_link)()],
      message: [term](external_link)(),
      value: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# %Spark.Options.ValidationError{}

[ __ View Source ](external_link) (struct)

The error struct.

Only the following documented fields are considered public. All other fields are considered private and should not be referenced:

  * `:key` ([`atom/0`](external_link)) - The key that did not successfully validate.

  * `:keys_path` (list of [`atom/0`](external_link)) - If the key is nested, this is the path to the key.

  * `:value` ([`term/0`](external_link)) - The value that failed to validate. This field is `nil` if there was no value provided.



