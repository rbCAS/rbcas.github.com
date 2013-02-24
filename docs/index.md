---
layout: docs
title: Welcome
next_section: installation
---

This site aims to be a comprehensive guide to CASino. We'll cover everything from getting your Single sign-on (SSO) up and running, customizing the way it works and looks, deploying to various environments, get your applications to work with your brand new SSO, as well as some advice on participating in the future development of CASino itself.

## So what is CASino, exactly?

CASino is a simple Single sign-on server application. It supports the [CAS protocol](http://www.jasig.org/cas/protocol) and can therefore be used in combination with almost every web programming language out there.

CAS is an authentication system originally created by Yale University to provide a trusted way for an application to authenticate a user. CAS <strong>centralizes</strong> authentication: It allows all your applications to ask users to login to a single sign-on server.<br />
CAS became a <a href="http://www.jasig.org/cas">Jasig project</a> in December 2004.

## Quick-start guide

For the impatient, here’s how to get CASino up and running:

{% highlight bash %}
gem install bundler
git clone https://github.com/rbCAS/CASinoApp.git
cd CASinoApp
./script/install <database>
{% endhighlight %}
