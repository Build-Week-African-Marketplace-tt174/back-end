exports.seed = function(knex) {
  return knex('items').insert([
    {
      name: 'Eggs',
      description: 'Local, cage-free fresh farm eggs sold by the dozen.',
      price: 2.75,
      market: 'Bungoma',
      category_id: 10,
      user_id: 1
    },
    {
      name: 'Milk',
      description: 'Local, unpasteurized milk sold by the gallon.',
      price: 2.25,
      market: 'Bungoma',
      category_id: 1,
      user_id: 1
    },
    {
      name: 'Potatoes',
      description: '5 lbs',
      price: 3.80,
      market: 'Bungoma',
      category_id: 6,
      user_id: 1
    },
    {
      name: 'Tomatoes',
      description: 'Delicious 2 lb bag of organic locally produced tomatoes',
      price: 4,
      market: 'Dodoma',
      category_id: 4,
      user_id: 2
    },
    {
      name: 'Oranges',
      description: 'Best oranges in the markets',
      price: 3.1,
      market: 'Dodoma',
      category_id: 4,
      user_id: 2
    }
  ]);
};