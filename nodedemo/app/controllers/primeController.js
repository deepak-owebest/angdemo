'use strict';
var prime = require('../services/primeService.js');
const { body } = require('express-validator')

exports.validate = (method) => {
  switch (method) {
    case 'list': {
     return [
        body('number', 'Number is required.').not().isEmpty(),
        body('number', 'Only numeric value are allowed.').isDecimal(),
        body('limit', 'Number is required.').not().isEmpty(),
        body('limit', 'Only numeric value are allowed.').isDecimal(),
        body('offset', 'Number is required.').not().isEmpty(),
        body('offset', 'Only numeric value are allowed.').isDecimal(),
       ]
    }
  }
}

const { validationResult } = require('express-validator');
exports.list = function(req, res){
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    res.status(422).json({ errors: errors.array() });
    return;
  }
  prime.list(req.body.number,req.body.limit,req.body.offset,function(err, result){
    if (err)
      res.send(err);
      res.json(result);
  });
};
