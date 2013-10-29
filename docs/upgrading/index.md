---
layout: docs
title: Upgrading
prev_section: deployment
next_section: client-integration
---

The easiest way to upgrade a CASinoApp installation is to download the newest version from our servers and copy your existing configuration and other customized files.

## 1. Copy customized files

Typically you need to copy over the following files from your old CASinoApp installation to your new one:

* `config/database.yml`
* `config/cas.yml`
* `app/assets/stylesheets/casino_and_overrides.scss` (if you customized it)

## 2. Database migrations

Install and run required database migrations:

{% highlight bash %}
export RAILS_ENV=production # depends on your setup

bundle exec rake casino:install:migrations
bundle exec rake db:migrate SCOPE=casino
{% endhighlight %}

## 3. Restart app server

Restart your app server. Running the following command should do it for most app servers:

{% highlight bash %}
touch tmp/restart.txt
{% endhighlight %}
