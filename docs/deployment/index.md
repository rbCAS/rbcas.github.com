---
layout: docs
title: Deployment
prev_section: customization
next_section: upgrading
---

If you did not setup your CASino installation directly on the productive server, you have several possibilities to deploy your code. Other deployment methods (such as a simple `scp`) may also work fine – we documented just some common scenarios.

## Capistrano

Capistrano is one of the most popular deployment tools. Please take a look at the [Capistrano Wiki](https://github.com/capistrano/capistrano/wiki) for more details.

### Install the needed tools
{% highlight bash %}
bundle install
{% endhighlight %}

### Copy the example configurations
{% highlight bash %}
cp config/deployment-config.example.yml config/deployment-config.yml
cp config/deploy.example.rb config/deploy.rb
cp config/cas.yml.example config/deploy/cas.yml
cp config/database.yml.<database-type> config/deploy/database.yml
{% endhighlight %}

### Configure the setup
{% highlight bash %}
vim config/deployment-config.yml # Settings for the deployment
vim config/deploy/cas.yml        # CAS-settings
vim config/deploy/database.yml   # Database settings
{% endhighlight %}

### Deploy
{% highlight bash %}
cap deploy:setup
cap deploy:migrations
{% endhighlight %}

