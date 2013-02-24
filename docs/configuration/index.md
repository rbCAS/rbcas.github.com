---
layout: docs
title: Configuration
prev_section: installation
next_section: customization
---

CASino allows you to change it's behavior through multiple configuration parameters. These configuration parameters are stored in [YAML](http://en.wikipedia.org/wiki/YAML) files. The first level of the hierarchy is always the environment such as `development`, `staging` or `production`. This allows you to configure all your environment in the same configuration file.

## Database

CASino needs a database to store session data, user settings and other CAS-related stuff. The database configuration is located in `config/database.yml`.

We included example configurations for the most commonly used databases (SQLite, MySQL and PostgreSQL) under `config/database.yml.example.<database>`. But it doesn't stop it here: As CASino uses Rails' ActiveRecord, many more databases such as DB2, Oracle, SQL Server and many more are usable.

If you change your database settings, be sure to load the empty database schema:
{% highlight bash %}
bundle exec rake casino_core:db:schema:load
{% endhighlight %}

## CAS

These are the default parameters, that you can overwrite within the `config/cas.yml`:

{% highlight yaml %}
login_ticket:
  lifetime: 600
ticket_granting_ticket:
  lifetime: 86400
service_ticket:
  lifetime_unconsumed: 300
  lifetime_consumed: 86400
  single_sign_out_notification:
    timeout: 10
proxy_ticket:
  lifetime_unconsumed: 300
  lifetime_consumed: 86400
two_factor_authenticator:
  lifetime_inactive: 300
  drift: 30
{% endhighlight %}

<table width="100%">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Option</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p class="name">
          <strong>Login Ticket</strong>
        </p>
        <p class="description">
          A login ticket is used to ensure, a user can not resubmit his credentials.
        </p>
      </td>
      <td>
        <code>login_ticket:</code>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 10px">
        <p class="name">
          <strong>Lifetime</strong>
        </p>
        <p class="description">
          Specifies how long the login ticket should live before it expires (in seconds). This is, how much time the user gets from seeing to submitting the login form.
        </p>
      </td>
      <td style="padding-left: 10px">
        <code>lifetime: [integer]</code>
      </td>
    </tr>
    <tr>
      <td>
        <p class="name">
          <strong>Ticket-granting ticket</strong>
        </p>
        <p class="description">
          A ticket-granting ticket is used as an identifier of the Single-sign on session. It's identifier is stored as a cookie by the user's browser.
        </p>
      </td>
      <td>
        <code>login_ticket:</code>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 10px">
        <p class="name">
          <strong>Lifetime</strong>
        </p>
        <p class="description">
          Specifies how long the ticket-granting ticket should live before it expires (in seconds). This is, how long the user can stay loggedin to your SSO before he has to relogin to your CASino installation.
        </p>
      </td>
      <td style="padding-left: 10px">
        <code>lifetime: [integer]</code>
      </td>
    </tr>
  </tbody>
</table>