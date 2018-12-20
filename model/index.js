//Wrapper module to provide easy access to the database.
module.exports = {
    dbConfig: require('./DBConfig'),
    knex: require('./knex'),
    shelf: require('./Bookshelf')
};