// Database connection info / properties
module.exports = {
    // sqlite3 - SQLITE client
    client: 'sqlite3',
    //Debug for now.
    debug: true,
    // Connection place.
    connection: {
        filename: '../dogs.db'
    },
    useNullAsDefault: true
}