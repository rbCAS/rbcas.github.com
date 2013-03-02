---
layout: docs
title: Customization
prev_section: configuration
next_section: deployment
---

## CSS

Customizing the CSS of your CASino installation is an easy and straightforward process. Open up `app/assets/stylesheets/casino_and_overrides.scss` to start. You can define the following variables:

{% highlight scss %}
$buttonColor: #a91974;          // Color of buttons (like "Login")
$buttonSecondaryColor: #ddd8d0; // Color of secondary buttons (like "Cancel")
$logo: "logo.png";              // Path to your logo (place it in app/assets/images)
$logoRetina: "logo@2x.png";     // Path to your retina logo (two times the size of logo.png)
$logoWidth: 146px;              // Width of your logo
$logoHeight: 34px;              // Height of your logo
{% endhighlight %}

You can also add custom CSS to this file. Place your own CSS code right after `@import 'casino'`:

{% highlight scss %}
@import 'casino';
body {
  font-family: "Comic Sans MS";
}
{% endhighlight %}

## Layout / Templates
