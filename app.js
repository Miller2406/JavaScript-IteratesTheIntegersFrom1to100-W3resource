// // Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz".For numbers multiples of both three and five print "FizzBuzz".

const nums = []
for (let i = 1; i <= 100; i++) {
    nums.push(i)
}

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 == 0) {
        if (nums[i] % 5 == 0) {
            console.log(`${nums[i]} FizzBuzz`);
        } else {
            console.log(`${nums[i]} Fizz`);
        }
    } else if (nums[i] % 5 == 0) {
        console.log(`${nums[i]} Buzz`);
    } else {
        console.log(nums[i].toString());

    }

}