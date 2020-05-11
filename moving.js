const finalPosition = function (moves) {
	let finalPosition = [0, 0]
	for (let x = 0; x < moves.length; x++){
		if (move[x] === 'north'){
			finalPosition[1] = finalPosition[1] + 1;
		} else if (move[x] === 'south'){
			finalPosition[1] = finalPosition[1] - 1;
		} else if (move[x] === 'east'){
			finalPosition[0] = finalPosition[0] + 1;
		} else if (move[x] === 'west'){
			finalPosition[0] = finalPosition[0] - 1;
		}
	}
	return finalPosition
}

const move = ['north', 'north', 'west', 'west', 'north', 'east','north', 'north']  

console.log(finalPosition(move));
