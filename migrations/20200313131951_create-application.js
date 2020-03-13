
exports.up = function (knex) {
    return knex.schema.createTable('applications', (table) => {
        table.increments();
        table.integer('cohort_id').unsigned()
            .references('cohorts.id');
        table.string('name');
        table.string('email');
        table.string('phone');
        table.string('address');
        table.string('city');
        table.string('state');
        table.string('zip');
        table.date('birth_date');
        table.string('gender');
        table.string('ethnicity');
        table.string('linkedin');
        table.string('github');
        table.string('extra_link');
        table.text('cover_letter');
        table.string('highest_degree');
        table.string('college_major');
        table.string('college_location');
        table.boolean('is_employed');
        table.string('employer');
        table.boolean('is_military');
        table.string('income');
        table.boolean('has_laptop');
        table.string('why_interested');
        table.text('how_heard');
        table.string('skill_level');
        table.string('app_status');
        table.text('reviewer_comments');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('applications')
};
