function twoSum(nums, target){
    let complement;
    for(let i=0; i<nums.length; i++){
        complement = target - nums[i];
        for(let j=i+1; j<nums.length; j++){
            if(nums[j] === complement){
                return [i,j];
            }
        }
    }
}


console.log(twoSum([2, 7, 11, 15], 9));

