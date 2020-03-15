const express = require('express');
const router = express.Router();
const queries = require('../db/queries');


function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

const isValidCohort = (cohort) => {
    // console.log(typeof cohort.start_date);
    const hasDate = typeof cohort.start_date == 'string' && cohort.start_date.trim() != '';
    const hasStatus = typeof cohort.is_published == 'boolean'
    const hasNickname = typeof cohort.cohort_nickname == 'string'
    return hasDate && hasStatus && hasNickname;
}


router.get('/', (req, res) => {
    queries.getAll('cohorts').then(cohorts => {
        res.json(cohorts);
    });
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne('cohorts', req.params.id).then(cohort => {
        if (cohort) {
            res.json(cohort);
        } else {
            next();
        }
    });
});

router.get('/:id/applications', isValidId, (req, res, next) => {
    queries.getAllfromCohort(req.params.id).then(cohorts => {
        res.json(cohorts);
    });
});

router.post('/', (req, res, next) => {
    if (isValidCohort(req.body)) {
        queries.create('cohorts', req.body).then(cohorts => {
            res.json(cohorts[0]);
        });
    } else {
        next(new Error('Invalid cohort.'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if (req.body) {
        queries.update('cohorts', req.params.id, req.body).then(cohorts => {
            res.json(cohorts[0]);
        });
    } else {
        next(new Error('Invalid cohort.'));
    }
});

router.delete('/:id', isValidId, (req, res) => {
    queries.delete('cohorts', req.params.id).then(() => {
        res.json({ deleted: true });
    });
});

module.exports = router;