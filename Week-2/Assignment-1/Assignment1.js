function max(number){
    let maxValue = number[0];
    for(let i = 1; i<number.length; i++){
        if(number[i] > maxValue){
            maxValue = number[i];
        }
    }    
    return maxValue;
}


function findPosition(numbers, target){

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === target){
            return i;
        }
        if(i === numbers.length-1){
            return -1;
        }
    }

}

console.log( max([1, 2, 4, 5]) ); // should print 5
console.log( max([5, 2, 7, 1, 6]) ); // should print 7
console.log( findPosition([5, 2, 7, 1, 6], 5) ); // should print 0
console.log( findPosition([5, 2, 7, 1, 6], 7) ); // should print 2
console.log( findPosition([5, 2, 7, 7, 7, 1, 6], 7) ); // should print 2 (the first position)
console.log( findPosition([5, 2, 7, 1, 6], 8) ); // should print -1