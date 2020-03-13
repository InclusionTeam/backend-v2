
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { starts: new Date('Jan 27 2020').toISOString(), ispublished: true },
        { starts: new Date('Mar 09 2020').toISOString(), ispublished: true },
        { starts: new Date('Apr 20 2020').toISOString(), ispublished: true },
        { starts: new Date('Jun 01 2020').toISOString(), ispublished: false }
      ]);
    });
};