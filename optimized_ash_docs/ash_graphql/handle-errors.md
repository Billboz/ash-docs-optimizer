# Handling Errors — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) Handling Errors
  - __ Showing raised errors
  - __ Root level errors
  - __ Error Handler
  - __ Custom Errors

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) Handling Errors

There are various options that can be set on the Domain module to determine how errors behave and/or are shown in the GraphQL.

##  __ Showing raised errors

For security purposes, if an error is _raised_ as opposed to returned somewhere, the error is hidden. Set this to `true` in dev/test environments for an easier time debugging.
    
    
    graphql do
      show_raised_errors? true
    end
    
    # or it can be done in config
    # make sure you've set `otp_app` in your domain, i.e use Ash.Domain, otp_app: :my_app
    
    config :my_app, YourDomain, [
      graphql: [
        show_raised_errors?: true
      ]
    ]

##  __ Root level errors

By default, action errors are simply shown in the `errors` field for mutations. Set this to `true` to return them as root level errors instead.
    
    
    graphql do
      root_level_errors? true
    end

##  __ Error Handler

Setting an error handler allows you to use things like `gettext` to translate errors and/or modify errors in some way. This error handler will take the error object to be returned, and the context. See the [absinthe docs](external_link) for adding to the absinthe context (i.e for setting a locale).
    
    
    graphql do
      error_handler {MyApp.GraphqlErrorHandler, :handle_error, []}
    end

Keep in mind, that you will want to ensure that any custom error handler you add performs the logic to replace variables in error messages. 

This is what the default error handler looks like, for example:
    
    
    defmodule AshGraphql.DefaultErrorHandler do
      @moduledoc "Replaces any text in message or short_message with variables"
    
      def handle_error(
            %{message: message, short_message: short_message, vars: vars} = error,
            _context
          ) do
        %{
          error
          | message: replace_vars(message, vars),
            short_message: replace_vars(short_message, vars)
        }
      end
    
      def handle_error(other, _), do: other
    
      defp replace_vars(string, vars) do
        vars =
          if is_map(vars) do
            vars
          else
            List.wrap(vars)
          end
    
        Enum.reduce(vars, string, fn {key, value}, acc ->
          if String.contains?(acc, "%{#{key}}") do
            String.replace(acc, "%{#{key}}", to_string(value))
          else
            acc
          end
        end)
      end
    end

##  __ Custom Errors

If you created your own Errors as described in the [Ash Docs](error-handling.html#using-a-custom-exception) you also need to implement the protocol for it to be displayed in the Api.
    
    
    defmodule Ash.Error.Action.InvalidArgument do
      @moduledoc "Used when an invalid value is provided for an action argument"
      use Splode.Error, fields: [:field, :message, :value], class: :invalid
    
      def message(error) do
        """
        Invalid value provided#{for_field(error)}#{do_message(error)}
    
        #{inspect(error.value)}
        """
      end
      
      defimpl AshGraphql.Error, for: Ash.Error.Changes.InvalidArgument do
        def to_error(error) do
          %{
            message: error.message,
            short_message: error.message,
            code: "invalid_argument",
            vars: Map.new(error.vars),
            fields: [error.field]
          }
        end
      end
    end

[ ← Previous Page  Authorize with GraphQL  ](external_link)

[ Next Page →  Using the SDL File  ](external_link)
