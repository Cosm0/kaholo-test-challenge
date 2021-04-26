# KAHOLO APP

### Preparation
Simply `npm i`.

### Usage
Simply `npm start`.

### Notes
I am developing on Ubuntu.
Node version 14.12.0

# CYPRESS TESTS
I have selected Cypress as an e2e framework mainly because it's ability to mock backend requests. Since the app to test is strictly frontend and uses 3rd party open source API, I wanted to make tests independent from the 3rd party API which cannot be influenced. In a real project some test cases utilizing a real API must be performed, however for the sake of this recruitment I decided to just mock the API. <br/><br/>
Other reasones which spoke for Cypress was: <br/>
1. the same programming language for the production app and tests which can be benefitial in a real project
2. speed and reliability of the test framework which saves some work by solving some problems out of the box (like wrapping page elements actions by timeouts)
3. I just like it :)

### Run locally
Cypress configuration is located in `./cypress.json` <br/>
To run tests locally execute following steps: <br>
1. install dependencies by running `npm i`
2. launch Kaholo test app by executing `npm start`
3. change the `baseUrl` in cypress.json to match the url under which the Kaholo test app is available (http://localhost:5000/ by default)
4. run tests by running `npm run cy:report` (or `npx cypress run` if test report does not matter)

After above steps tests will be executed headlessly in Electron browser (which can be changed in cypress.json).

#### Tests re-run
Tests are re-run in case of failure, however this only applies to running tests by `npx cypress run`
Tests are not re-run when executed via test runner GUI (`npx cypress open`)
This can be changed in `cypress.json`

#### Snapshots & report
Test report is available in `./cypress/reports`
Screenshots presenting the browser state are available in `./cypress/screenshots` (only failed tests)

### Run inside a docker container
I have containerized both the app under test (hosted in a docker container using nginx) and the e2e tests. It can be run by simply executing `docker-compose up` while beeing in the project root (the `baseUrl` in `cypress.json` must be changed to `http://kaholo-app/` )<br/>
There are some issues with this which I didn't have time to solve so this solution must still be polished. I decided to keep this, just to show off. <br/><br/>
Current problems:
1. container with tests does not shut down gracefully when the process inside it is finished
2. despite docker volumes set, screenshots and test report are not available outside container

### Final remarks
Some more test cases probably could have been designed, but due to time constraint, the most important have been named, some of them implemented.
