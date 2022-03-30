function binarySearchPosition(arry, target){
    let minIndex = 0;
    let maxIndex = arry.length - 1;
    let guessIndex;
    let targetIndex;

    // ------------Check if target is first or last element in array------------
    if(arry[minIndex] === target){
        targetIndex = minIndex;
        return targetIndex;
    } else if(arry[maxIndex] === target){
        targetIndex = maxIndex;
        return targetIndex;
    }
    // ------------Binary Search: now full array is reasonable guesses range------------

     while(true){

         // ------------Assign guessIndex as middle index of reasonable guesses range------------
         guessIndex = Math.round((minIndex+maxIndex)/2);
         // ------------Check if element of guessIndex is target, if not: reset reasonable guesses range------------
         if(arry[guessIndex] === target){
             targetIndex = guessIndex;
             return targetIndex;
        } else if(arry[guessIndex] > target){
            maxIndex = guessIndex;
        } else {
            minIndex = guessIndex;
         }

         if((maxIndex-minIndex) === 1){
           return -1;
         }

     }
}

console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3