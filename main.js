const input = 'turpentine and turtles';

const vowles = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowles.length; j++) {
        if (input[i] === vowles[j]) {
            resultArray.push(input[i]);
        }
    }
}

let resultString = resultArray.join('').toUpperCase();

console.log(resultString);