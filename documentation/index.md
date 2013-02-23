---
layout: default
title: "CASino Documentation"
---

# Welcome

This site aims to be a comprehensive guide to CASino. We'll cover everything from getting your Single sign-on (SSO) up and running, customizing the way it works and looks, deploying to various environments, get your applications to work with your brand new SSO, as well as some advice on participating in the future development of CASino itself.

## So what is CASino, exactly?

CASino is a simple Single sign-on server application. It supports the [CAS protocol](http://www.jasig.org/cas/protocol) and can therefore be used in combination with almost every web programming language out there.

## Quick-start guide

For the impatient, here’s how to get CASino up and running:

``` bash
gem install bundler
git clone https://github.com/rbCAS/CASinoApp.git
cd CASinoApp
./script/install <database>
```