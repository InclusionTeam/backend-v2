# Application system backend

## Running the development version
* Clone repo and cd into its directory.
* Run npm install.
* Then run `createdb api-server`
* Then run the migrations by running `knex migrate:latest`
* Then seed the database with `knex seed:run`
* Finally, run the server by running `npm start`

## The routes
There's currently only one path called `/cohorts/`, but it follows RESTful conventions so you can hit:

* GET `/cohorts/` to get all cohorts.
* GET `/cohorts/:id` to get a specific cohort.
* POST to `/cohorts/` to create a new one.
* PUT to `/cohorts/:id` to edit a cohort.
* DELETE to `/cohorts/:id` to delete a cohort.

## Running the tests
Just run `npm test` and wait for the good stuff to happen! :alien: