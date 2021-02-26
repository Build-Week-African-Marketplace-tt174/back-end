exports.seed = function(knex) {
  return knex('items').insert([
    { name: 'Eggs', description: 'Local, cage-free fresh farm eggs sold by the dozen.', price: 2.75, location: 'Bungoma' },
    { name: 'Milk', description: 'Local, unpasteurized milk sold by the gallon.', price: 2.25, location: 'Eldoret' },
    { name: 'Potatoes', description: '5 lbs', price: 3.80, location: 'Kigali' },
    { name: 'Tomatoes', description: 'Delicious 2 lb bag of organic locally produced tomatoes', price: 4, location: 'Dodoma' }
  ]);
};