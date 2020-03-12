const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');
const app = require('../app');
const fixtures = require('./fixtures');

describe('CRUD cohorts', () => {
    before((done) => {
        knex.migrate.latest()
            .then(() => {
                return knex.seed.run();
            }).then(() => done())
    });

    it('Lists all records', (done) => {
        request(app)
            .get('/cohorts')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                expect(response.body).to.be.deep.equal(fixtures.cohorts);
                console.log(response.body);
                done();
            })
    })
})