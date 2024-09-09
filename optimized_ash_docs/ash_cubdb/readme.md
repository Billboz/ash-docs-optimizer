# AshCubDB — ash_cubdb v0.6.2

Project: ash_cubdb v0.6.2

## Table of Contents

- [ __ View Source ](external_link) AshCubDB
  - __ Status
  - __ Github Mirror
  - __ Installation
  - __ License

__

Search documentation of ash_cubdb __ __

__ Settings

#  [ __ View Source ](external_link) AshCubDB

[![Build Status](external_link)](https://drone.harton.dev/james/ash_cubdb) [![Hex.pm](external_link)](https://hex.pm/packages/ash_cubdb) [![Hippocratic License HL3-FULL](external_link)](https://firstdonoharm.dev/version/3/0/full.html)

An [Ash DataLayer](external_link) which adds support for [CubDB](external_link).

##  __ Status

AshCubDb is still a work in progress. Feel free to give it a go.

Feature| Status  
---|---  
Create| ✅  
Upsert (by primary key)| ✅  
Upsert (by identity)| ❌  
Read (all)| ✅  
Read (by primary key)| ✅  
Read (filters)| ✅  
Read (sort)| ✅  
Read (distinct sort)| ✅  
Read (calculations)| ✅  
Read (aggregates)| ❌  
Update| ✅  
Destroy| ✅  
Transactions| ❌  
  
##  __ Github Mirror

This repository is mirrored [on Github](external_link) from it's primary location [on my Forgejo instance](external_link). Feel free to raise issues and open PRs on Github.

##  __ Installation

AshCubDB is [available in Hex](external_link), the package can be installed by adding `ash_cubdb` to your list of dependencies in `mix.exs`:
    
    
    def deps do
      [
        {:ash_cubdb, "~> 0.6.2"}
      ]
    end

Documentation for the latest release can be found on [HexDocs](external_link) and for the `main` branch on [docs.harton.nz](external_link).

##  __ License

This software is licensed under the terms of the [HL3-FULL](external_link), see the `LICENSE.md` file included with this package for the terms.

This license actively proscribes this software being used by and for some industries, countries and activities. If your usage of this software doesn't comply with the terms of this license, then [contact me](external_link) with the details of your use-case to organise the purchase of a license - the cost of which may include a donation to a suitable charity or NGO.

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Change Log  ](external_link)
