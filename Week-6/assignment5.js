let nums = [5, 10, 3, 2, 50, 80,2]
let target = 78
let count = 0;
let sort = nums.sort((a, b) => a - b);

for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] - nums[i] == target) {
            count += 1;
        }
    }
}
console.log(count);