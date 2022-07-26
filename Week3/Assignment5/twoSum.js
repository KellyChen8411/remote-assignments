function twoSum(nums, target){
    let hashmap = new Map();
    let complement;
    for(let i=0; i<nums.length; i++){
        complement = target - nums[i];
        if(hashmap.has(complement)){
            return [hashmap.get(complement), i]
        } else{
            hashmap.set(nums[i], i);
        }
    }
}


console.log(twoSum([11, 15 ,2, 7], 9));

