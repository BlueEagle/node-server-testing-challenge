exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments();
    tbl.string("project_name", 255).notNullable().index();
    tbl.text("description").notNullable();
    tbl.integer("priority").unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
