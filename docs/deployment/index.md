---
layout: docs
title: Deployment
prev_section: customization
next_section: client-integration
---

# Capistrano

{% highlight bash %}
bundle install
cp config/deployment-config.example.yml config/deployment-config.yml
cp config/deploy.example.rb config/deploy.rb
cap deploy:setup
cap deploy:migrations
{% endhighlight %}

# Heroku

Install heroku toolbelt as heroku describes it.

* Create Heroku app
{% highlight bash %}
heroku create
git push heroku master
{% endhighlight %}
