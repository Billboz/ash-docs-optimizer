# mix igniter.install — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) mix igniter.install (igniter v0.3.29)
  - __ Args
  - __ Package formats
  - __ Switches

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) mix igniter.install (igniter v0.3.29)

Install a package or packages, and run any associated installers.

##  __ Args

mix igniter.install package1 package2 package3

##  __ Package formats

  * `package` \- The latest version of the package will be installed, pinned at the major version, or minor version if there is no major version yet.
  * `package@version` \- The package will be installed at the specified version. If the version given is generic, like `3.0`, it will be pinned as described above. if it is specific, like `3.0.1`, it will be pinned at that _exact_ version with `==`.
  * `package@git:git_url` \- The package will be installed from the specified git url.
  * `package@github:project/repo` \- The package will be installed from the specified github repo.
  * `package@path:path/to/dep` \- The package will be installed from the specified path.



##  __ Switches

  * `--dry-run` \- Run the task without making any changes.
  * `--yes` \- Automatically answer yes to any prompts.
  * `--example` \- Request that installed packages include initial example code.


