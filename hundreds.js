function howManyHundreds(value){
	hundredCount = 0;
	while (value >= 100){
		value -= 100;
		hundredCount = hundredCount + 1
	}
	return hundredCount;
}

console.log(howManyHundreds(375))
