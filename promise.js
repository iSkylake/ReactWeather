function addPromise(a, b){
	return new Promise(function(resolve, reject){
		if(typeof a === 'number' && typeof b === 'number'){
			var c = a + b;
			resolve(c);
		}
		reject('Both must be a number');
	});
}

addPromise(5, 'no').then(function(c){
	console.log(c);
}, function(err){
	console.log('promise error', err);
});

var addExpression = (a, b) => a + b;
console.log(addExpression(1, 3));
console.log(addExpression(0, 9));

var addStatement = (a, b) => {
	console.log(a+b);
}
addStatement(1, 3);
addStatement(0, 9)