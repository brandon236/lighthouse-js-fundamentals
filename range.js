function range(start, end, step){
	rangeArray = [];
	if (start === undefined || end === undefined || (step < 0 || step === undefined) || start > end){
		return rangeArray;
	}
	for (let i = start; i <= end; i += step){
		rangeArray.push(i);
	}
	return rangeArray;
}

console.log(range(-5, 2, 3));
