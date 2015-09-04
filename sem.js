function factorial(n){
	if(n===0){
		factorial(n)=1;
	}
	else{
		factorial(n)= (n*factorial(n-1));
	}
	return factorial(n);
}
console.log(factorial(5));
