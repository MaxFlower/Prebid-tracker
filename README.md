# Predib.js events tracker

## Quick setup

* Clone project from repository:
```bash
git clone git@github.com:MaxFlower/Prebid-tracker.git
```

* Install dependencies: 
```bash
cd Prebid-tracker
npm install
```

## Run server
  
* Run dev server on localhost:8080
 ```bash
  npm run start 
```

## Testing

* Testing is based on Cypress end-to-end testing framework.

In order to run testing in browser mode and get a coverage report:
 ```bash
  npm run cypress 
``` 
or run following command to execute test and then get summary:
 ```bash
  npm run test-summary 
``` 

Run testing in console mode:
 ```bash
  npm run test 
```


### Technical stack:
- [Javascript](https://github.com/tc39/proposals)
- [Webpack](https://webpack.js.org/)
- [Cypress](https://www.cypress.io)
