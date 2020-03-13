const knex = require('./knex');


module.exports = {
    getAll() {
        return knex('cohorts');
    },
    getOne(id) {
        return knex('cohorts').where('id', id).first();
    },
    create(cohort) {
        return knex('cohorts').insert(cohort, '*');
    },
    update(id, cohort) {
        return knex('cohorts').where('id', id).update(cohort, '*');
    },
    delete(id) {
        return knex('cohorts').where('id', id).del();
    }
}