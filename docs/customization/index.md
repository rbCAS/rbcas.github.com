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

## Views

You can overwrite any layout or template file, by placing it in the `app/views` folder. Just use the same path as the original template or layout: [Browse `views` tree](https://github.com/rbCAS/CASino/tree/master/app/views)

Example: If you would like to use a custom logout page, place it in `app/views/casino/sessions/logout.html.erb`:
{% highlight rhtml %}
<h1>OMG, logged out!</h1>
<% unless @url.nil? %>
  <a href="<%= @url %>"><%= @url %></a>
<% end %>
{% endhighlight %}

**Warning**: If you can, stick to CSS customization and don't overwrite layouts or templates. Custom views may make it harder to upgrade your CASino installation to the latest version.
