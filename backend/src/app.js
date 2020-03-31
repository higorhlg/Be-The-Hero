const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());

// API needs to understand json
app.use(express.json());
// Load routes
app.use(routes);

app.use(errors());

module.exports = app;




/**
 * SQL ACESS TYPES: 
 * 
 * DRIVER: SELECT * FROM  users
 * QUERY BUILDER: table.select()
 */

/**
 * Parameter types:
 * 
 * Query Params: Named parameters, specified after a "?" in the route, more parameters could be added after a "&"
 * Example: /users?name="name"&age=10
 * 
 * Route Params: Used to identify resources, specified after a "/" (usually a id)
 * Example :/users/1
 * 
 * Request body: Body of the request, usually used to create or alter resources (usually sent as JSON)
 * Example : { user: "user1", pass: "randomPass"}
 */