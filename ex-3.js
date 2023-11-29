// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;
for(let x = 1; x < numbers.length; x++)
{
    if(numbers[x-1] > numbers[x])
        minNumber = numbers[x];
    else
        minNumber = numbers[x-1];
}

console.log(minNumber);
