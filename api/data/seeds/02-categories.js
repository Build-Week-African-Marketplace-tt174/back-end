exports.seed = function (knex) {
    return knex('categories').then(function () {
        // Insert seed entries
        return knex('categories').insert([
            { type: "Animal Products" }, // 1
            { type: "Beans" }, // 2
            { type: "Cereals" }, // 3
            { type: "Fruits" }, // 4
            { type: "Peas" }, // 5
            { type: "Roots & Tubers" }, // 6
            { type: "Seeds & Nuts" }, // 7
            { type: "Vegetables" }, // 8
            { type: "Livestock" }, // 9
            { type: "Poultry"}, // 10
            { type: "Other" } // 11
        ])
    })
}