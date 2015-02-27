function Fizzbuzz(){

}

Fizzbuzz.prototype.convert = function(number){
	var result = number;

	arrayNumberString = (''+number).split('');
	comp_3 = arrayNumberString.indexOf('3');
	comp_5 = arrayNumberString.indexOf('5');
	
	has_3 = comp_3>=0 ? true : false;
	has_5 = comp_5>=0 ? true : false;
	
	if(number%15==0 || (has_3&&has_5)){
		result = 'fizzbuzz';
	}
	else if (number %3 == 0 || has_3){
		result = 'fizz';
	}	
	else if(number%5==0 || has_5){
		result = 'buzz';
	}

	return result;
}