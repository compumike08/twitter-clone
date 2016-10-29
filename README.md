# twitter-clone

App built following the Pluralsight `React.js on Rails: Building a Full Stack Web App` course.

## Prerequisites
-   [Ruby 2.2.x](http://rubyinstaller.org/downloads)
-   Ruby DevKit for Ruby version 2.0 and up
    -   [Ruby DevKit 4.7.2 (32-bit Windows)](http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-32-4.7.2-20130224-1151-sfx.exe)
    -   [Ruby DevKit 4.7.2 (64-bit Windows)](http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe)
-   [PostgreSQL Database](http://www.enterprisedb.com/products-services-training/pgdownload)

## Development Setup

### Configuration
1.  Create a new file named `secrets.yml` and save it in your `config/` directory _(the `secrets.yml` file is ignored by Git source control)_.
2.  Copy and paste the following into your `secrets.yml` file:

```yaml
# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure the secrets in this file are kept private
# if you're sharing your code publicly.

development:
  secret_key_base: b20a0e6e0df58703f845ad4e0ab8e096eed11262209a5c0b0f597160c073a994df3509fd87c1ad24b704d62506ae1d148ffc7bbfe36c319e5ae34c4e8860b2b2

test:
  secret_key_base: 822afffa5da2b36dbcad905eff42581e66148392543ef78f3e640b1c7749fb401aa469b5a211dd999555b60be696469cdf507bcba8ca1d533dea07a7f85a2bfc

# Do not keep production secrets in the repository,
# instead read values from the environment.
production:
  secret_key_base: <%= ENV["SECRET_KEY_BASE"] %>

```
**NOTE:** You can use the command `rake secret` to generate new random secret keys. You can then use that generated secret key to replace the sample key(s) used in the example code above within your own local `secrets.yml` file. Make sure to use different randomly generated secret keys for the `development` and `test` environments specified in `secrets.yml`.

### Development Setup Known Issues
When trying to pull and install Ruby Gem(s) for the first time, you may experience the following error:
```
SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed
```
If that error happens, follow the instructions on [this webpage](http://guides.rubygems.org/ssl-certificate-update/#manual-solution-to-ssl-issue) to manually fix the SSL issue.
