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
                done();
            }).catch((e) => {
                console.log(e);
            });
    });

    it('Lists one record by id', (done) => {
        request(app)
            .get('/cohorts/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.be.deep.equal(fixtures.cohorts[0]);
                done();
            });
    });

    it('Lists another record by id', (done) => {
        request(app)
            .get('/cohorts/2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.be.deep.equal(fixtures.cohorts[1]);
                done();
            });
    });

    it('Creates a record', (done) => {
        request(app)
            .post('/cohorts')
            .send(fixtures.cohort)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, response) => {
                expect(response.body).to.be.a('object');
                fixtures.cohort.id = response.body.id;
                expect(response.body).to.deep.equal(fixtures.cohort);
                done();
            });
    });

    // PASSING WITH SYNTAX ERRORS

    it('Updates a record', (done) => {
        fixtures.cohort.is_published = false
        fixtures.cohort.id = 1
        request(app)
            .put('/cohorts/1')
            .send(fixtures.cohort)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done())
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(fixtures.cohort);
                done();
            }).catch((e) => {
                console.log(e);
            });
    });


    it('Deletes a record', (done) => {
        request(app)
            .delete('/cohorts/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done())
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal({ deleted: true });
                done();
            }).catch((e) => {
                console.log(e);
            });
    });

});