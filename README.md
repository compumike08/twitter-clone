# twitter-clone

App built following the Pluralsight `React.js on Rails: Building a Full Stack Web App` course.

### Prerequisites
-   [Ruby 2.2.x](http://rubyinstaller.org/downloads)
-   Ruby DevKit for Ruby version 2.0 and up
    -   [Ruby DevKit 4.7.2 (32-bit Windows)](http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-32-4.7.2-20130224-1151-sfx.exe)
    -   [Ruby DevKit 4.7.2 (64-bit Windows)](http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe)
-   [PostgreSQL Database](http://www.enterprisedb.com/products-services-training/pgdownload)

### Development Setup Known Issues
When trying to pull and install Ruby Gem(s) for the first time, you may experience the following error:
```
SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed
```
If that error happens, follow the instructions on [this webpage](http://guides.rubygems.org/ssl-certificate-update/#manual-solution-to-ssl-issue) to manually fix the SSL issue.
