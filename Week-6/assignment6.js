let threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b) 
    
    let closestSum = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < nums.length; i++){ 
        const currentNum = nums[i];
        
        let left = i + 1, right = nums.length - 1;
        
        while (left < right) { 
            const currentSum = currentNum + nums[left] + nums[right];
            
            if (currentSum < target) {
                left += 1;
            } else if (currentSum > target){
                right -= 1;
            } else {
                return currentSum;
            }
            
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)){
                closestSum = currentSum
            }
        }
    }
    
    return closestSum;
};

console.log(threeSumClosest([-1,2,1,-4],1));
