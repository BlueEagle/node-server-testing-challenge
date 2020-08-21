const db = require("../database/connection");

module.exports = {
  get,
  add,
  remove,
};

function get() {
  return db("projects");
}

function add(project) {
  return db("projects").insert(project);
}

async function remove(id) {
  return await db("projects").where({ id }).del();
}
