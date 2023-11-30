var n = 4;

function addedStar(n) {
	let output = ''; // initialize an empty string to store the output
	for (let i = 1; i <= n; i++) {
		// loop from 1 to n
		for (let j = 0; j <= n + 2; j++) {
			if (j == i || j == i + 1) {
				output += '*';
			} else {
				output += j + 1;
			}
		}
		output += '\n'; // add a new line after each row
	}
	console.log(output);
}

addedStar(n);
