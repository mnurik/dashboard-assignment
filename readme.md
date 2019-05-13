# callstats.io Dashboard assignment

## About
The task required no dependencies, so I had to survive somehow without new FE technologies. User has two options to show metrics. I am not master of visualization, please forgive me if visualization is wrong or too simple.

## Installing

Dependencies: Node.js, Yarn/npm.

`yarn install`

## Running
```sh
yarn start
```
or
```sh
npm start
```

Then open http://localhost:8081/ to see your app.

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
