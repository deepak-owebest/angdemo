'use strict';
module.exports = function(app) {
  var prime = require('../controllers/primeController');
  app.post('/prime', prime.validate('list'), prime.list);
};