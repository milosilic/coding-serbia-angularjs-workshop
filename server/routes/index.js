/*jshint maxstatements:50 */

'use strict';

var path = require('path');
var dirty = require('dirty');

exports = module.exports = function (movieDb) {

    var dataDir = path.resolve(__dirname, '../../data');

    // Default case: Connect to or create a new node-dirty in-process database
    if (!movieDb) {
        movieDb = dirty(path.resolve(dataDir, 'movie.db'));
    }
    // Otherwise the caller has provided a db instance that we will use (this
    // mechanism is used by tests to inject a db stub).

    var exports = {};

    exports.movies = require('./movies')(movieDb);

    return exports;
};
