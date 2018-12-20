const sqlite3 = require('sqlite3');
// let db = new sqlite3.Database('./app.db');
// db.on('open', () => {
//     db.run(`CREATE TABLE IF NOT EXISTS test(
//         id int PRIMARY KEY,
//         name varchar(255)
//     );`);
// });


var path = require('path')
    , fs = require('fs')
    , knex = require('knex')
    , bookshelf = require('bookshelf')
    , dbFile = path.join(__dirname, 'app.db')
    , db = null // bookshelf db instance

// init db
db = bookshelf(knex({
    client: 'sqlite3'
    , connection: { filename: dbFile }
}))

// create a schema if no db found
fs.exists(dbFile, function(exists) {
    if (!exists) {
        db.knex.schema.createTable('test_table', function(table) {
            table.increments()
            table.string('some_col')
        })
    }
})