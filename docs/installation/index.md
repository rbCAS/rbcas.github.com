---
layout: docs
title: Installation
prev_section: ""
next_section: configuration
---

## Requirements

Installing CASino is easy and straight-forward, but there's a few requirements you'll need to make sure your system has before you start.

* [Ruby](http://www.ruby-lang.org/en/downloads/)
* [RubyGems](http://rubygems.org/pages/download)
* Linux, Unix, or Mac OS X

**Running CASino on Windows**: Theoretically CASino should run fine on Windows machines but the official documentation does not support it.

## Install using CASinoApp

Using the CASinoApp is the easiest way to get your CAS server up and running. Once you downloaded the latest version follow this simple steps to get a basic configuration:

{% highlight bash %}
cd CASinoApp
gem install bundler
./script/install sqlite # choose either postgres, mysql or sqlite
{% endhighlight %}

This will generate a basic configuration. You'll learn how to change the configuration in the next chapter.
