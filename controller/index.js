module.exports = (router) => {
    router.all('/dogs/tekkel/add', {
        params: {

        },
        func: (params, client) => {
            return params;
        }
    });
    router.get('/setupdb', () => {
        let knex = require('../model').knex;
        knex.schema.createTableIfNotExists('tekkel', (table) => {
            table.increments('id').primary();
            table.string('name');
            table.string('email');
            table.string('password');
            table.integer('cuddletimes');
        })
    });
    return router;
}