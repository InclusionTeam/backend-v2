
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { start_date: new Date('Jan 27 2020').toISOString(), cohort_nickname: 'Winter 2020', is_published: true },
        { start_date: new Date('Mar 09 2020').toISOString(), cohort_nickname: 'Spring 2020', is_published: true },
        { start_date: new Date('Apr 20 2020').toISOString(), cohort_nickname: 'Spring 2020 II', is_published: true },
        { start_date: new Date('Jun 01 2020').toISOString(), cohort_nickname: 'Summer 2020', is_published: false }
      ]);
    });
};