
exports.up = function (knex) {
    return knex.schema.createTable('cohorts', (table) => {
        table.increments();
        table.date('start_date')
        table.string('cohort_nickname');
        table.boolean('is_published');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('cohorts')
};
