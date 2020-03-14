const knex = require('./knex');

module.exports = {
    getAll() {
        return knex('applications');
    },
    getOne(id) {
        return knex('applications').where('id', id).first();
    },
    create(application) {
        return knex('applications').insert(application, '*');
    },
}