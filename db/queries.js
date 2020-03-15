const knex = require('./knex');

module.exports = {
    getAll(table) {
        return knex(table);
    },
    getOne(table, id) {
        return knex(table).where('id', id).first();
    },
    getAllfromCohort(id) {
        return knex('applications').where('cohort_id', id);
    },
    getWithParams(column, contents) {
        return knex('applications').where(column, contents);
    },
    create(table, element) {
        return knex(table).insert(element, '*');
    },
    update(table, id, element) {
        return knex(table).where('id', id).update(element, '*');
    },
    delete(table, id) {
        return knex(table).where('id', id).del();
    }
}