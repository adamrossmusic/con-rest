#conREST#
conREST is an application to configure and chain multiple REST calls.

[![Build Status](https://travis-ci.org/Jumio/con-rest.svg?branch=travis)](https://travis-ci.org/EnoF/con-rest)

##Introduction##
While testing our `REST services` we noticed that our `REST services test tool` are focusing on single calls.
This resulted in manual actions in order to reuse the result retrieved from the previous requests to perform a test
for an `workflow`.

This also implied that the knowledge of the `workflow` has to be stored outside of the test tool. We want to have all
information grouped together, easy accessable and sharable.

##Features##
###Implemented###
* REST call deletion
* REST call editing
* REST call execution
* REST call registration
* Workflow deletion
* Workflow editing
* Workflow execution
* Workflow registration
* Connectors
* Mappers

###Roadmap###
* User authentication (IN PROGRESS)
* User roles/rights
* Assertions

##Setup##
The setup requires:
* MongoDB
* nodejs
* conREST artifact (IN PROGRESS)

###MongoDB###
Setting up your MongoDB by downloading and installing it from: http://www.mongodb.org/

Configure `conREST` to point to your db location, with either `ENVIRONMENT VARIABLES` or with the `config file`.

####ENVIRONMENT VARIABLES####
Set the `MONGO_CONNECTION` variable like:

    MONGO_CONNECTION=mongodb://<username>:<password>@<url>:<port>/<dbname>

####config file####
If you rather have the settings stored in a file, you can edit the `config.json` at the root of the artifact folder.

###node.js###
`conREST` is tested against node.js version is 0.10.x.

###Artifacts(IN PROGRESS)###
The artifacts will be available on github. Head over to the Releases and download the release.

###E2E tests###
E2E tests are performed with `protractor` with `mocha` and `yadda`. To run the E2E tests along with the other tests:

    grunt package

To kick off the tests on a running server:

    # this will start the server with the db pointed to the test db
    grunt server:e2e

    # in a second terminal
    grunt e2e
