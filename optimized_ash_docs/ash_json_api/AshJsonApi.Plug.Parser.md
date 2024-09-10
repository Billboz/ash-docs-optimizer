# AshJsonApi.Plug.Parser — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) AshJsonApi.Plug.Parser (ash_json_api v1.4.7)
  - __ Examples
  - __ Protocol
  - __ Example HTTP Message

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) AshJsonApi.Plug.Parser (ash_json_api v1.4.7)

Extracts ash multipart request body.

For use with [`Plug.Parsers`](external_link), as in the example below.

##  __ Examples

Should be used with [`Plug.Parsers`](external_link):
    
    
    plug Plug.Parsers,
      parsers: [:urlencoded, :multipart, :json, AshJsonApi.Plug.Parser],
      pass: ["*/*"],
      json_decoder: Jason

##  __ Protocol

To use files in your request, send a [multipart](external_link) with the content type `multipart/x.ash+form-data`. The request MUST contain a JSON object with the key `data` and the value of the object you want to send.

The request MAY contain other keys with the value of the file you want to send. The parser will walk through all of the `data` JSON and replace each string equal to a part name with the content of the part. This means that if you have a part named `users_csv` and a key in the `data` JSON object with the value `users_csv`, the parser will replace the string with the content of the part.

> #### Conflicting Part names
> 
> Ensure that each part name is unique and does not naturally occur inside as a string in the `data` JSON object. If a part name is found in the `data` JSON object, the parser will replace it with the content of the part.
> 
> It is recommended to use a unique value like a UUID as the part name.

##  __ Example HTTP Message
    
    
    POST /action
    Host: example.com
    Content-Length: 2740
    Content-Type: multipart/x.ash+form-data; boundary=abcde12345
    --abcde12345
    Content-Disposition: form-data; name="data"
    Content-Type: application/vnd.api+json
    
    {"users": "users_csv", "meatdata": "metadata_json"}
    --abcde12345
    Content-Disposition: form-data; name="users_csv"; filename="users.csv"
    Content-Type: text/csv
    
    [file content goes here]
    --abcde12345
    Content-Disposition: form-data; name="metadata_json"; filename="metadata.json"
    Content-Type: application/json
    
    [file content goes there]
    --abcde12345--
