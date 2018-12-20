// Constructs and exports a configured bookshelf object.
var bookshelf = require('bookshelf')(require('./Knex'));
// Load bookshelf plugins
bookshelf.plugin('registry');
// Export bookshelf
module.exports = bookshelf;