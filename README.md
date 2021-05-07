# QuickQuote

## Development server

Run `npm link` in extensible-ui-framework repo and execute `npm link extensible-ui-framework` in the quick quote application. So we can use lit elements inside the quick quote application.

## Build
Run `npm run build` to build the project. It will create a bundle.js file into the staticresources directory which would be ready to deploy to Salesforce.

## SFDC Deployment
The app right now is setup to be SFDC ready. If you setup Visual Studio and deploy the force-app folder into an org, you can access the app at
https://salesforceinstance.com/apex/NameSpace__ReactPOC


## Local Deployment
Modifications would need to be done to index.tsx so that we do not store the render into window.mount