const donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
	donut += " hole";
	donut = donut.toUpperCase();
	return donut;
});

console.log(donuts);
console.log(improvedDonuts);
