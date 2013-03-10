---
layout: docs
title: Deployment
prev_section: customization
next_section: client-integration
---

If you did not setup your CASino installation directly on the productive server, you have several possibilities to deploy your code. Other deployment methods (such as a simple `scp`) may also work fine – we documented just some common scenarios.

## Capistrano

Capistrano is one of the most popular deployment tools. Please take a look at the [Capistrano Wiki](https://github.com/capistrano/capistrano/wiki) for more details.

{% highlight bash %}
bundle install
cp config/deployment-config.example.yml config/deployment-config.yml
cp config/deploy.example.rb config/deploy.rb
cap deploy:setup
cap deploy:migrations
{% endhighlight %}

## Heroku

Install heroku toolbelt as heroku describes it.

* Create Heroku app
{% highlight bash %}
heroku create
git push heroku master
{% endhighlight %}
