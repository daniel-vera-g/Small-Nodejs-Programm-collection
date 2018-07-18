const input = process.argv;

let sum = 0;

// loop through the input arguments
for (let n = 2; n < input.length; n++) {
	sum += Number(input[n]);
}

console.log(sum);
