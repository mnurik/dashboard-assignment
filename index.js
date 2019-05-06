const http = require('http');
const express = require("express");
const app = express();
app.use(express.static("public"));

const knex = require('knex')({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: "./assignment.sqlite"
  }
})

const helper = require('./helper')(knex('assignment'));

app.get('/app', (req, res) => {
  knex('assignment').select('appID').groupBy('appID')
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

app.get('/app/:appID', (req, res) => {
  knex('assignment').select().where({ appID: req.params.appID })
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

app.get('/app/:appID/:field', (req, res) => {
  knex('assignment').select(req.params.field).where({ appID: req.params.appID })
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

app.get('/fields', (req, res) => {
  helper.getFields()
    .then(fields => res.json(fields))
    .catch(err => res.status(500).send(err))
})

console.log('App listening on http://localhost:8081')
app.listen(8081)
