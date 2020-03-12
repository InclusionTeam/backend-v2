
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { id: 1, starts: new Date('Jan 27 2020').toISOString(), ispublished: true },
        { id: 2, starts: new Date('Mar 09 2020').toISOString(), ispublished: true },
        { id: 3, starts: new Date('Apr 20 2020').toISOString(), ispublished: true },
        { id: 4, starts: new Date('Jun 01 2020').toISOString(), ispublished: false }
      ]);
    });
};
