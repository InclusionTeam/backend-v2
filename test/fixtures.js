const cohorts = [
    { id: 1, start_date: '2020-01-27T05:00:00.000Z', cohort_nickname: 'Winter 2020',  is_published: true },
    { id: 2, start_date: '2020-03-09T04:00:00.000Z', cohort_nickname: 'Spring 2020',  is_published: true },
    { id: 3, start_date: '2020-04-20T04:00:00.000Z', cohort_nickname: 'Spring 2020 II', is_published: true },
    { id: 4, start_date: '2020-06-01T04:00:00.000Z', cohort_nickname: 'Summer 2020',  is_published: false }
];

const cohort = {
    "start_date": "2020-01-27T05:00:00.000Z",
    "cohort_nickname": 'Winter 2020',
    "is_published": true
};

module.exports = {
    cohorts,
    cohort
}