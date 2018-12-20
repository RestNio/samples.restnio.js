const RestNio = require('restnio');
let dogSite = new RestNio(7070, null, require('./controller'));
dogSite.bind();