// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;
// Start coding here
for (let i = 0; i < numbers.length; i++) {
  if (minNumber === undefined || numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}
console.log(minNumber);
