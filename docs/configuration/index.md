---
layout: docs
title: Configuration
prev_section: installation
next_section: customization
---

CASino allows you to change it's behavior through multiple configuration parameters. These configuration parameters are stored in [YAML](http://en.wikipedia.org/wiki/YAML) files. The first level of the hierarchy is always the environment such as `development`, `staging` or `production`. This allows you to configure all your environments in the same configuration file.

## Database

CASino needs a database to store session data, user settings and other CAS-related data. Like in any other Rails application, the database configuration is located in `config/database.yml`.

We included example configurations for the most commonly used databases (SQLite, MySQL and PostgreSQL) under `config/database.yml.example.<database>`. But it doesn't stop here: As CASino uses Rails' ActiveRecord, databases such as DB2, Oracle, SQL Server and many more are also usable.
**Warning**: Using SQLite in a production environment is not recommended.

If you change your database settings, be sure to load the empty database schema:

{% highlight bash %}
bundle exec rake db:migrate SCOPE=casino
{% endhighlight %}

## CAS

The CAS configuration is stored under `config/cas.yml`. This is where you configure how your SSO handles logins. An example configuration can be found in the file `config/cas.yml.example`.

### Authenticators

CASino has an extensible authenticator interface to support a wide range of different authentication stores such as an [LDAP](https://github.com/rbCAS/casino-ldap_authenticator) directory or an [SQL database](https://github.com/rbCAS/casino-activerecord_authenticator). Multiple authenticators can be active – **simultaneously**.

Each authenticator must have a unique identifier which is used internally in combination with the username to distinguish the users of your CAS server.

#### LDAP

Example configuration for an authentication against an LDAP directory service:

{% highlight yaml %}
authenticators:
  my_company_ldap:
    authenticator: "LDAP"
      options:
        host: "localhost"
        port: 636
        base: "ou=People,dc=example,dc=com"
        username_attribute: "uid"
        encryption: "simple_tls"
        admin_user: "cn=admin,dc=example,dc=com"
        admin_password: "password"
        extra_attributes:
          email: "mail"
          fullname: "displayname"
{% endhighlight %}

In the example above, we chose `my_company_ldap` as our unique identifier. `extra_attributes` allows you to pass additional data to the services using your SSO. With our example configuration, services would get a field named `email` which would contain the value stored in the LDAP as `mail` and `fullname` stored in the LDAP as `displayname`.

`admin_user` and `admin_password` are the credentials to perform user lookup. If your LDAP server allows anonymous access, you don't need to provide these two parameters.

#### Database

Example configuration for an authentication against a MySQL table:

{% highlight yaml %}
authenticators:
  my_user_database:
    authenticator: "ActiveRecord"
    options:
      connection:
        adapter: "mysql2"
        host: "localhost"
        username: "casino"
        password: "secret"
        database: "users"
      table: "users"
      username_column: "username"
      password_column: "password"
      extra_attributes:
        email: "email_database_column"
        fullname: "displayname_database_column"
{% endhighlight %}

In this example, we chose `my_user_database` as our unique identifier. CASino will search for users in the `users` table. The column `username` contains the usernames whereas `password` contains the corresponding passwords. The authenticator supports [Unix crypt style](http://www.kernel.org/doc/man-pages/online/pages/man3/crypt.3.html#NOTES) stored passwords. Supported algorithms are salted MD5, salted SHA256 and SHA512 as well as the recommended bcrypt algorithm.

### Parameters
These are the default parameters, that you can overwrite within the `config/cas.yml`:

{% highlight yaml %}
frontend:
  sso_name: 'CASinoApp'
  footer_text: 'Powered by <a href="http://casino.rbcas.com/">CASino</a>'
login_ticket:
  lifetime: 600
ticket_granting_ticket:
  lifetime: 86400
  lifetime_long_term: 864000
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

* #### Frontend

  Configuration parameters for the UI part of CASino.

  * ##### SSO name

    `sso_name: [string]`

    The name of your SSO. This is used as title in the header etc.

  * ##### Footer text

    `footer_text: [string]`

    Text for the footer, displayed on every page.

* #### Login Ticket

  A login ticket is used to ensure, a user can not resubmit his credentials.

   * ##### Lifetime

     `lifetime: [integer]`

     Specifies how long (in seconds) the login ticket should live before it expires. This is how much time the user gets from seeing to submitting the login form.

* #### Ticket-granting ticket

  A ticket-granting ticket is used as an identifier of the Single-sign on session. It's identifier is stored as a cookie by the user's browser.

   * ##### Lifetime

     `lifetime: [integer]`

     Specifies how long (in seconds) the ticket-granting ticket should live before it expires. This is, how long the user can stay loggedin to your SSO before he has to relogin to your CASino installation.

   * ##### Lifetime (long-term)

     `lifetime_long_term: [integer]`

     This is the maximum lifetime of long-term ticket-granting tickets ("Stay logged in").

* #### Service ticket

  Service tickets are used by service's as an identifier of the Single-sign on session. A service ticket is only valid for one validation request. This is why services have to store the result in their own session.

   * ##### Lifetime (unconsumed)

     `lifetime_unconsumed: [integer]`

     Specifies how much time (in seconds) the service may have for it's validation request.

   * ##### Lifetime (consumed)

     `lifetime_consumed: [integer]`

     Specifies how long (in seconds) the user should stayed loggedin in services using this SSO. After this period, SSO will send out a single sign-out notification to the service. Not all services handle this notifications!

   * ##### Single sign-out notification

     Single sign-out notifications are used to forward logout requests to all services.

      * ###### Timeout

        `timeout: [integer]`

        If the service does not handle the single sign-out notification after this period (in seconds), CASino will try again later.

* #### Proxy ticket

  Proxy tickets can be obtained by services to allow services without a web frontend the usage of SSO data. This section supports the same configuration parameters as the Service Ticket (see above).

* #### Two-factor authenticator

  CASino supports two-factor authentication with HOTP systems such as the <a href="http://support.google.com/accounts/bin/answer.py?hl=en&amp;answer=1066447">Google Authenticator</a>.

   * ##### Enabled

     `enabled: [boolean]`

     This allows you to disable two-factor authentication.

   * ##### Lifetime (inactive)

     `lifetime_inactive: [integer]`

     Specifies how much time the user has to initially validate and activate the two-factor authenticator.

   * ##### Drift

     `drift: [integer]`

     HOTP is a time-based solution. Server and mobile phone should have exactly the same time set. This options allows you to specify, how much the server and mobile phone clock may differ (in seconds). Please use a multiple of 30.

## Limit allowed services

By default, CASino has an empty service rule list and accepts all services as valid. CASino has several commands to manage a whitelist of allowed services:

{% highlight bash %}
# if you are in production, execute the following command first:
#export RAILS_ENV=production

bundle exec rake casino:service_rule:flush           # Delete all servcice rules.
bundle exec rake casino:service_rule:list            # List all service rules.
bundle exec rake casino:service_rule:delete[$ID]     # Remove a servcice rule.

bundle exec rake casino:service_rule:add[$NAME,$URL] # Add a service rule (prefix the url parameter with "regex:" to add a regular expression)
# Allow all HTTPS services:
bundle exec rake casino:service_rule:add["HTTPS","regex:^https:"]
# Allow a domain:
bundle exec rake casino:service_rule:add["example.org","regex:^https?://example.org/"]
# Allow exactly one page:
bundle exec rake casino:service_rule:add["example.com","https://example.com/"]
{% endhighlight %}

