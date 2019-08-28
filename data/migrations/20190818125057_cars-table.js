exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('id');
    tbl
      .text('name', 128)
      .unique()
      .notNullable();
    tbl
      .text('color', 128)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
