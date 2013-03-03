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

Using the CASinoApp is the easiest and recommended way to get your CAS server up and running. Once you downloaded the latest version follow this simple steps to get a basic configuration:

{% highlight bash %}
cd CASinoApp
gem install bundler
./script/install sqlite # choose either postgres, mysql or sqlite
{% endhighlight %}

This will generate a basic configuration. You'll learn how to change the configuration in the next chapter.

## Install from scratch

### 1. Create a Ruby on Rails application

Make sure you installed Ruby on Rails 3.2.x (for example through `gem install rails -v '~> 3.2.11'`).

{% highlight bash %}
rails new my-casino --skip-active-record --skip-test-unit --skip-bundle
cd my-casino
{% endhighlight %}

### 2. Include and install CASino engine gem

Edit your application's Gemfile and add these lines if missing:

{% highlight bash %}
gem 'sqlite3'   # for sqlite support
gem 'mysql2'    # for mysql support
gem 'pg'        # for postgresql support
gem 'casino'
{% endhighlight %}

Run `bundle install` afterwards.

### 3. Generate the initial configuration

{% highlight bash %}
bundle exec rails g casino:install
{% endhighlight %}
Now continue to the next chapter to learn how to change the configuration and load the initial database schema.

## Cronjob

Regardless of the installation method, it's highly recommended to add the following cleanup task as a cronjob (`crontab -e`):

{% highlight bash %}
*/5 * * * * cd /path/to/CASinoApp && RAILS_ENV=production bundle exec rake casino_core:cleanup:all > /dev/null
{% endhighlight %}
