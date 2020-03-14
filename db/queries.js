const knex = require('./knex');

module.exports = {
    getAll() {
        return knex('cohorts');
    },
    getOne(id) {
        return knex('cohorts').where('id', id).first();
    },
    getAllfromCohort(id) {
        return knex('applications').where('cohort_id', id)
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