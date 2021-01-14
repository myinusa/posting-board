# SmartRecruiters Postings List App - Testing Suite

This directory contains e2e test suite based on [Cypress](https://www.cypress.io/), that can be used to verify basic scenarios of SmartRecruiters Postings List App.

## Prerequisites

* Node >= 12.x
* Before launching this suite, make sure that your app is live, running at `http://localhost:8080`

To make specific elements reachable from within this test suite, mark them using `data-test` attributes:

* app container - `data-test="app"`
* posting list entry - `data-test="posting"`
  * posting name - `data-test="posting-name"`
  * posting location - `data-test="posting-location"`
* posting details
  * back button - `data-test="back"`
  * posting name - `data-test="posting-name"`
  * posting location - `data-test="posting-location"`
  * job description - `data-test="job-description"`
  * job qualification - `data-test="job-qualifications"`

## Setup

1. Run `nvm use` to use the proper Node.js version
2. Run `npm install` to install required dependencies
3. Run `npm test` to start Cypress and verify prepared scenarios

## Test Scenarios

### App

Spec file - `tests/cypress/integration/app_spec.js`

1. The app should be available at desired URL

* Open `http://localhost:8080`
* Verify if served document contains an element marked as app container

### List

Spec file - `tests/cypress/integration/list_spec.js`

1. The app should display postings list

* Open `http://localhost:8080`
* Verify if posting list elements are available within desired timespan
* Verify if posting list elements contain posting name and posting location.

2. It should be possible to navigate to posting details from the list

* Open `http://localhost:8080`
* Verify if posting list elements are available within desired timespan
* Click on the first posting list element
* Verify if new page contains elements such as job description and job qualifications

### Details

Spec file - `tests/cypress/integration/details_spec.js`

1. It should be possible to navigate to posting details and back to the list

* Open `http://localhost:8080`
* Verify if posting list elements are available within desired timespan
* Click on the first posting list element
* Verify if new page contains all the required elements
* Click on "Back" button to navigate to the list
* Verify if posting list elements are available within desired timespan
