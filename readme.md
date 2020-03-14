# Application system backend

## Running the development version
* Clone repo and cd into its directory.
* Run `npm install -g knex`.
* Run `npm install`.
* Then run `createdb api-server`
* Then run the migrations by running `knex migrate:latest`
* Then seed the database with `knex seed:run`
* Finally, run the server by running `npm start`

## The routes
There are two paths called `/cohorts/` and `/applications/`, they follow RESTful conventions so you can hit:


### Cohort model:
* GET `/cohorts` to get all cohorts.
* GET `/cohorts/:id/applications` to get all the applications for a specific cohort.
* GET `/cohorts/:id` to get a specific cohort.
* POST to `/cohorts` to create a new one.
* PUT to `/cohorts/:id` to edit a cohort.
* DELETE to `/cohorts/:id` to delete a cohort.

### Application model:
* GET `/applications` to get all applications.
* GET `/applications/:id` to get a specific application.
* POST to `/aplications/:id` to create a new application.

## TODO:
* Add remaining routes.
* write tests for Application model.

## Running the tests
Just run `npm test` and wait for the good stuff to happen! :alien: