# callstats.io Dashboard assignment

## About
This repository provides a sqlite database and API for the assignment data.

Feel free to edit the API, create your own or use the source assignment.csv file.

## Installing

Dependencies: Node.js, Yarn/npm.

`yarn install`

## Running
`yarn start`

The API is available at http://localhost:8081.

## API routes
All routes use the GET method. 

`/app`
 
Return a list of all appIDs. 

`/app/:appID`
 
Return all data for given `appID`. Number of rows differ between appIDs. 


`/app/:appID/:field`
 
Return all data for given `field` for given `appID`.


`/fields`
 
Return all table columns. 
