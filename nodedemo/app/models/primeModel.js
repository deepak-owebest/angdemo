'user strict';
var prime = function(use){

};

function getpaginate(dataArr,limit,offset){		
	var newlimit	=	parseInt(limit)+parseInt(offset);
	var obj = [];
	obj = Object.keys(dataArr).map(i => dataArr[i])
	if(obj.length > 0){
		var newDataArr	=	[];
		var counter	=	0;
		for (i = 0; i < obj.length; i++){
			if(i >= offset && i < newlimit){
				newDataArr[counter] = obj[i];		
				counter++;
			}
		}
	}
	return newDataArr;
}
prime.list = async function(number,limit,offset) {
    return new Promise((resolve) => {
        max = number
        var store  = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) 
        {
            if (!store [i]) 
            {
                primes.push(i);
                for (j = i << 1; j <= max; j += i){
                    store[j] = true;
                }
            }
        }
        results		=	getpaginate(primes,limit,offset);
        res = {
            'status':'success',
            'data':results,
            'recordsTotal': primes.length
        }
        resolve(res)
    });
}
module.exports= prime;