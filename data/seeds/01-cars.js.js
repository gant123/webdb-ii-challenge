exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, name: 'rowValue1', color: 'red' },
        { id: 2, name: 'rowValue2', color: 'blue' },
        { id: 3, name: 'rowValue3', color: 'white' }
      ]);
    });
};
