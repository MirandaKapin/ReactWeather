// function getTempCallback (location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }
// 
// getTempCallback('Philadelphia', function( err, temp) {
//  if(err) {
// 	 console.log('error', err);
//  } else {
// 	 console.log('sucess', temp);
//  }
// });
// 
// function getTempPromise (location) {
// 	return new Promise(function(resolve, reject){
// 		setTimeout(function () {
// 			resolve(79);
// 			reject('City not found');
// 			}, 1000);
// 		});
// }
// 
// getTempPromise('Philadelphia').then(function (temp) {
// 	console.log('promise sucess', temp);
// }, function (err) {
// 	console.log('Promise error', err);
// })
//

//Challenge Area

function addPromise (a, b) {
	return new Promise (function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number'){
			resolve(a+b);
		} else {
			reject('One or more of the data entered are not numbers');
		}
	});
}

function printAddPromise (a, b) {
	addPromise(a, b).then( function (temp) {
		console.log(temp);
	}, function(err) {
		console.log(err);
	});
}

printAddPromise(10, 2);
printAddPromise('a', 10);
printAddPromise('a', 'b');
