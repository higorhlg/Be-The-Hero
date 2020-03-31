
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();
        
        table.string('ngo_id').notNullable();

        table.foreign('ngo_id').references('id').inTable('ngos');
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('incidents');
};
