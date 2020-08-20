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

function remove(id) {
  return db("projects")
    .where({ id })
    .del()
    .then(() => {
      return db("projects");
    });
}
