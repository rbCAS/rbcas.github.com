---
layout: docs
title: Client integration
prev_section: deployment
next_section: contributing
---

## Ruby

[Rack-CAS](https://github.com/biola/rack-cas) is simple Rack middleware to perform CAS client authentication. It works with any rack-compatible framework such as Rails or Sinatra. Please check the [offical documentation](https://github.com/biola/rack-cas#readme) to learn how to use Rack CAS.

## Java

[JA-SIG CAS Client for Java 3.1](https://wiki.jasig.org/display/CASC/CAS+Client+for+Java+3.1) can be used to get Java web applications such as [Jira](https://wiki.jasig.org/display/CASC/Configuring+Jira+with+JASIG+CAS+Client+for+Java+3.1) or [Confluence](https://wiki.jasig.org/display/CASC/Configuring+Confluence+with+JASIG+CAS+Client+for+Java+3.1) to work with your CAS single sign-on server.

## PHP

[phpCAS](https://wiki.jasig.org/display/CASC/phpCAS) can be used to CAS-ify your PHP applications. There are plugins for [many popular applications](https://wiki.jasig.org/display/CASC/Applications+CASified+with+phpCAS) such as [Drupal](http://drupal.org/project/cas) and [Horde](http://wiki.horde.org/CASAuthHowTo) based on phpCAS. Please check the official [examples](https://wiki.jasig.org/display/CASC/phpCAS+examples) to learn how to integrate phpCAS.

## .NET

[Jasig .NET CAS client](https://wiki.jasig.org/display/CASC/.Net+Cas+Client) provides CAS integration for the Microsoft Windows platform via the .NET framework. It can also be used to [CAS-ify other types of applications](https://wiki.jasig.org/pages/viewpage.action?pageId=35389878) running on top of IIS 7.0/7.5.

## Apache

[mod_auth_cas](https://wiki.jasig.org/display/CASC/mod_auth_cas) is an Apache 2.0/2.2 compliant module. It can be used CAS-ify any application or static content running on Apache. Many Linux distributions include ready to use binaries of mod_auth_cas such as `libapache2-mod-auth-cas` for Debian/Ubuntu via aptitude.<br />
**Pro tip:** Set `CASScope` to `/` to avoid redirect loops.
