
exports.up = function (knex) {
    return knex.schema.createTable('cohorts', (table) => {
        table.increments();
        table.date('starts')
        table.boolean('ispublished');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('cohorts')
};
