const knex = require("knex");

const config = require("../knexfile");
const environment = "development"; //process.env.NODE_ENV ||

module.exports = knex(config[environment]);
