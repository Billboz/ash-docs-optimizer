# Error Handling — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Error Handling
  - __ Error Classes
  - __ Generating Errors
  - __ Return a keyword list in changes and validations
  - __ Using a Builtin Exception
  - __ Using a Custom Exception

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Error Handling

As of 3.0, Ash uses [`Splode`](external_link) to as our basis for errors. The documentation below still applies, but it is powered by [`Splode`](external_link) under the hood.

There is a difficult balance to cut between informative errors and enabling simple reactions to those errors. Since many extensions may need to work with and/or adapt their behavior based on errors coming from Ash, we need rich error messages. However, when you have a hundred different exceptions to represent the various kinds of errors a system can produce, it becomes difficult to say something like "try this code, and if it is invalid, do x, if it is forbidden, do y. To this effect, exceptions in Ash have one of four classes mapping to the top level exceptions.

##  __ Error Classes

  * forbidden - [`Ash.Error.Forbidden`](external_link)
  * invalid - [`Ash.Error.Invalid`](external_link)
  * framework - [`Ash.Error.Framework`](external_link)
  * unknown - [`Ash.Error.Unknown`](external_link)



Since many actions can be happening at once, we want to support the presence of multiple errors as a result of a request to Ash. We do this by grouping up the errors into one before returning or raising. We choose an exception based on the order of the exceptions listed above. If there is a single forbidden, we choose [`Ash.Error.Forbidden`](external_link), if there is a single invalid, we choose [`Ash.Error.Invalid`](external_link) and so on. The actual errors will be included in the `errors` key on the exception. The exception's message will contain a bulleted list of all the underlying exceptions that occurred. This makes it easy to react to specific kinds of errors, as well as to react to _any/all_ of the errors present.

An example of a single error being raised, representing multiple underlying errors:
    
    
    AshExample.Representative
    |> Ash.Changeset.for_create(:create, %{employee_id: "the best"})
    |> Ash.create!()
     ** (Ash.Error.Invalid) Invalid Error
     * employee_id: must be absent.
     * first_name, last_name: at least 1 must be present.

This allows easy rescuing of the major error classes, as well as inspection of the underlying cases
    
    
    try do
      AshExample.Representative
      |> Ash.Changeset.for_create(:create, %{employee_id: "dabes"})
      |> Ash.create!()
    rescue
      e in Ash.Error.Invalid ->
        "Encountered #{Enum.count(e.errors)} errors"
    end
    
    "Encountered 2 errors"

This pattern does add some additional overhead when you want to rescue specific kinds of errors. For example, you may need to do something like this:
    
    
    try do
      AshExample.Representative
      |> Ash.Changeset.for_create(:create, %{employee_id: "dabes"})
      |> Ash.create!()
    rescue
      e in Ash.Error.Invalid ->
        case Enum.find(e.errors, &(&1.__struct__ == A.Specific.Error)) do
          nil ->
            ...handle errors
          error ->
            ...handle specific error you found
        end
    end

##  __ Generating Errors

When returning errors in your application, you can a few different things:

##  __ Return a keyword list in changes and validations

A shortcut for creating errors is to return a keyword list containing `field` and `message`. This works in changes and validations. For example:
    
    
    # in a change, you use `Ash.Changeset.add_error/2`
    def change(changeset, _, _) do
      if under_21?(changeset) do
        Ash.Changeset.add_error(changeset, field: :age, message: "must be 21 or older")
      else
        changeset
      end
    end
    
    # in a validation, you return the error in an `{:error, error}` tuple.
    def change(changeset, _, _) do
      if under_21?(changeset) do
        {:error,  field: :age, message: "must be 21 or older"}
      else
        :ok
      end
    end

##  __ Using a Builtin Exception

These are all modules under `Ash.Error.*`. You can create a new one with `error.exception(options)`, and the options are documented in each exception. This documentation is missing in some cases. Go to the source code of the exception to see its special options. All of them support the `vars` option, which are values to be interpolated into the message, useful for things like translation.

For example:
    
    
    def change(changeset, _, _) do
      if some_condition(changeset) do
        error = Ash.Error.Changes.Required.new(
          field: :foo,
          type: :attribute,
          resource: changeset.resource
        )
    
        Ash.Changeset.add_error(changeset, error)
      else
        changeset
      end
    end

##  __ Using a Custom Exception

You can create a custom exception like so. This is an example of a builtin exception that you could mirror to build your own
    
    
    defmodule Ash.Error.Action.InvalidArgument do
      @moduledoc "Used when an invalid value is provided for an action argument"
      use Splode.Error, fields: [:field, :message, :value], class: :invalid
    
      def message(error) do
        """
        Invalid value provided#{for_field(error)}#{do_message(error)}
    
        #{inspect(error.value)}
        """
      end
    end

[ ← Previous Page  Generators  ](external_link)

[ Next Page →  Testing  ](external_link)
