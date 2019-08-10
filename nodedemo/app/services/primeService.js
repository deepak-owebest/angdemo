'user strict';
var primeModel = require('../models/primeModel.js');
var prime = function(use){

};

prime.list =  async function(number,limit,offset,result){
    const res = await primeModel.list(number,limit,offset);
    var responseData = {
        "data":res
    }
    result(null, responseData);
}
module.exports= prime;