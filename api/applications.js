const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

const isValidApplication = (application) => {
    const hasName = typeof application.name == 'string'
    const hasEmail = typeof application.email == 'string' && application.email.trim() != '';
    return hasName && hasEmail;
}

router.get('/', (req, res) => {
    queries.getAll('applications').then(applications => {
        res.json(applications);
    });
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne('applications', req.params.id).then(application => {
        if (application) {
            res.json(application);
        } else {
            next();
        }
    });
});

router.get('/by/:column/:contents', (req, res) => {
    queries.getWithParams(req.params.column, req.params.contents).then(apps => {
        res.json(apps);
    });
});

router.post('/', (req, res, next) => {
    if (isValidApplication(req.body)) {
        queries.create('applications', req.body).then(application => {
            res.json(application[0]);
        });
    } else {
        next(new Error('Invalid application.'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if (req.body) {
        queries.update('applications', req.params.id, req.body).then(applications => {
            res.json(applications[0]);
        });
    } else {
        next(new Error('Invalid application.'));
    }
});

router.delete('/:id', isValidId, (req, res) => {
    queries.delete('applications', req.params.id).then(() => {
        res.json({ deleted: true });
    });
});

module.exports = router;