# SmartRecruiters Postings List App

> Job List App for candidates that displays a list and details of postings published by Smartrecruiters which are available via [SmartRecruiters Public API](https://github.com/smartrecruiters-coding/ict-postings-ui-matthias-yinusa#public-api).

 

## Getting Started

`git clone https://github.com/smartrecruiters-coding/ict-postings-ui-matthias-yinusa.git`

`cd https://github.com/smartrecruiters-coding/ict-postings-ui-matthias-yinusa`

`npm install`

`npm run start`



## Testing

`cd tests`

`npm install`

`npm run test`



## Project Structure

| Name                                            | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- |
| src/index.js                                    | Application entry point                         |
| src/App.js                                      | Defines routes, history and loads components    |
| src/store/reducers/index.js                     | List of reducers that are the combined          |
| src/store/actions                               | Necessary files for action of redux             |
| src/services/index.js                           | Endpoints that are called in action of redux    |
| src/helpers/history.js                          | access the history object outside of components |
| src/components/Body/body.js                     | Posting list                                    |
| src/components/PostingDetails/postingDetails.js | Posting details                                 |
| src/components/styles/styles.js                 | Styling for application                         |
| tests/cypress/integration                       | test cases for cypress                          |

## Dependencies

| List of Dependencies | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| bootstrap            | front-end framework for developing responsive, mobile first projects on the web. |
| cypress              | Cypress.io end to end testing tool                           |
| react-loader-spinner | react-spinner-loader provides simple React.js spinner component |
| react-redux          | Official React bindings for Redux                            |
| react-router-dom     | DOM bindings for React Router                                |
| react-thunk          | Functional stateless React components returning thunks       |
| redux                | Predictable state container for JavaScript apps              |
| redux-thunk          | Thunk middleware for Redux.                                  |