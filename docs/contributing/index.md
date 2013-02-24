---
layout: docs
title: Contributing
prev_section: client-integration
---

## Architecture

Before you start working on CASino you probably should know a bit about the architecture.

CASino is separated into a web app and core components:

* [CASinoCore](https://github.com/rbCAS/CASinoCore) contains all the CAS server logic
* [CASino](https://github.com/rbCAS/CASino) is essentially a [Rails::Engine](http://edgeapi.rubyonrails.org/classes/Rails/Engine.html) which contains all the web related parts
* [CASinoApp](https://github.com/rbCAS/CASinoApp) is a ready to use CAS server which mounts the CASino Rails::Eninge

This simplifies the creation of a CAS server implementation for other developers.

## Workflow

* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
* Fork the project.
* Start a feature/bugfix branch.
* Commit and push until you are happy with your contribution.
* Make sure to add tests for it. **Contributions will not be accepted without tests**.
