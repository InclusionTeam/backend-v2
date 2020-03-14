const express = require('express');
const router = express.Router();
const appqueries = require('../db/appqueries');

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
    appqueries.getAll().then(applications => {
        res.json(applications);
    });
});

router.get('/:id', isValidId, (req, res, next) => {
    appqueries.getOne(req.params.id).then(application => {
        if (application) {
            res.json(application);
        } else {
            next();
        }
    });
});

router.post('/', (req, res, next) => {
    if (isValidApplication(req.body)) {
        appqueries.create(req.body).then(application => {
            res.json(application[0]);
        });
    } else {
        next(new Error('Invalid application.'));
    }
});

module.exports = router;