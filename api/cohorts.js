const express = require('express');
const router = express.Router();
const queries = require('../db/queries');


function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

const isValidCohort = (cohort) => {
    console.log(typeof cohort.starts);
    const hasDate = typeof cohort.starts == 'string' && cohort.starts.trim() != '';
    const hasStatus = typeof cohort.ispublished == 'boolean'

    return hasDate && hasStatus;
}


router.get('/', (req, res) => {
    queries.getAll().then(cohorts => {
        res.json(cohorts);
    });
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(cohort => {
        if (cohort) {
            res.json(cohort);
        } else {
            next();
        }
    });
});

router.post('/', (req, res, next) => {
    if (isValidCohort(req.body)) {
        queries.create(req.body).then(cohorts => {
            res.json(cohorts[0]);
        });
    } else {
        next(new Error('Invalid cohort.'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if (isValidCohort(req.body)) {
        queries.update(req.params.id, req.body).then(cohorts => {
            res.json(cohorts[0]);
        });
    } else {
        next(new Error('Invalid cohort.'));
    }
});

router.delete('/:id', isValidId, (req, res) => {
    queries.delete(req.params.id).then(() => {
        res.json({ deleted: true });
    });
});

module.exports = router;