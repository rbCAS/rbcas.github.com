---
layout: docs
title: Configuration
prev_section: installation
next_section: customization
---

CASino allows you to change it's behavior through multiple configuration parameters. These configuration parameters are stored in [YAML](http://en.wikipedia.org/wiki/YAML) files. The first level of the hierarchy is always the environment such as `development`, `staging` or `production`. This allows you to configure all your environments in the same configuration file.

## Database

CASino needs a database to store session data, user settings and other CAS-related stuff. The database configuration is located in `config/database.yml`.

We included example configurations for the most commonly used databases (SQLite, MySQL and PostgreSQL) under `config/database.yml.example.<database>`. But it doesn't stop it here: As CASino uses Rails' ActiveRecord, many more databases such as DB2, Oracle, SQL Server and many more are usable.

If you change your database settings, be sure to load the empty database schema:
{% highlight bash %}
bundle exec rake casino_core:db:schema:load
{% endhighlight %}

## CAS

### Authenticators

### Parameters
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
      <th width="25%">Option</th>
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
      <td style="padding-left: 20px">
        <p class="name">
          <strong>Lifetime</strong>
        </p>
        <p class="description">
          Specifies how long (in seconds) the login ticket should live before it expires. This is how much time the user gets from seeing to submitting the login form.
        </p>
      </td>
      <td style="padding-left: 20px">
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
        <code>ticket_granting_ticket:</code>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 20px">
        <p class="name">
          <strong>Lifetime</strong>
        </p>
        <p class="description">
          Specifies how long (in seconds) the ticket-granting ticket should live before it expires. This is, how long the user can stay loggedin to your SSO before he has to relogin to your CASino installation.
        </p>
      </td>
      <td style="padding-left: 20px">
        <code>lifetime: [integer]</code>
      </td>
    </tr>
    <tr>
      <td>
        <p class="name">
          <strong>Service ticket</strong>
        </p>
        <p class="description">
          Service tickets are used by service's as an identifier of the Single-sign on session. A service ticket is only valid for one validation request. This is why services have to store the result in their own session.
        </p>
      </td>
      <td>
        <code>service_ticket:</code>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 20px">
        <p class="name">
          <strong>Lifetime (unconsumed)</strong>
        </p>
        <p class="description">
          Specifies how much time (in seconds) the service may have for it's validation request.
        </p>
      </td>
      <td style="padding-left: 20px">
        <code>lifetime_unconsumed: [integer]</code>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 20px">
        <p class="name">
          <strong>Lifetime (consumed)</strong>
        </p>
        <p class="description">
          Specifies how long (in seconds) the user should stayed loggedin in services using this SSO. After this period, SSO will send out a single sign-out notification to the service. Not all services handle this notifications!
        </p>
      </td>
      <td style="padding-left: 20px">
        <code>lifetime_consumed: [integer]</code>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 20px">
        <p class="name">
          <strong>Single sign-out notification</strong>
        </p>
        <p class="description">
          Single sign-out notifications are used to forward logout requests to all services.
        </p>
      </td>
      <td style="padding-left: 20px">
        <code>single_sign_out_notification:</code>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 40px">
        <p class="name">
          <strong>Timeout</strong>
        </p>
        <p class="description">
          If the service does not handle the single sign-out notification after this period (in seconds), CASino will try again later.
        </p>
      </td>
      <td style="padding-left: 40px">
        <code>timeout: [integer]</code>
      </td>
    </tr>
    <tr>
      <td>
        <p class="name">
          <strong>Proxy ticket</strong>
        </p>
        <p class="description">
          Proxy tickets can be obtained by services to allow services without a web frontend the usage of SSO data. This section supports the same configuration parameters as the Service Ticket (see above).
        </p>
      </td>
      <td>
        <code>proxy_ticket:</code>
      </td>
    </tr>
    <tr>
      <td>
        <p class="name">
          <strong>Two-factor authenticator</strong>
        </p>
        <p class="description">
          CASino supports two-factor authentication with HOTP systems such as the <a href="http://support.google.com/accounts/bin/answer.py?hl=en&amp;answer=1066447">Google Authenticator</a>.
        </p>
      </td>
      <td>
        <code>two_factor_authentication:</code>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 20px">
        <p class="name">
          <strong>Enabled</strong>
        </p>
        <p class="description">
          This allows you to disable two-factor authentication.
        </p>
      </td>
      <td style="padding-left: 20px">
        <code>enabled: [boolean]</code>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 20px">
        <p class="name">
          <strong>Lifetime (inactive)</strong>
        </p>
        <p class="description">
          Specifies how much time the user has to initially validate and activate the two-factor authenticator.
        </p>
      </td>
      <td style="padding-left: 20px">
        <code>lifetime_inactive: [integer]</code>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 20px">
        <p class="name">
          <strong>Drift</strong>
        </p>
        <p class="description">
          HOTP is a time-based solution. Server and mobile phone should have exactly the same time set. This options allows you to specify, how much the server and mobile phone clock may differ (in seconds). Please use a multiple of 30.
        </p>
      </td>
      <td style="padding-left: 20px">
        <code>drift: [integer]</code>
      </td>
    </tr>
  </tbody>
</table>