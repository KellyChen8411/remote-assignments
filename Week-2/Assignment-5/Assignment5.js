function binarySearchPosition(arry, target){
    let minIndex;
    let maxIndex;
    let guessIndex;
    let targetIndex;

    minIndex = 0;
    maxIndex = arry.length - 1;

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

    }
    // // ------------Assign guessIndex as middle index of reasonable guesses range------------
    // guessIndex = Math.round((minIndex+maxIndex)/2);
    // // ------------Check if element of guessIndex is target, if not: reset reasonable guesses range------------
    // if(arry[guessIndex] === target){
    //     targetIndex = guessIndex;
    //     return targetIndex;
    // } else if(arry[guessIndex] > target){
    //     maxIndex = guessIndex;
    // } else {
    //     minIndex = guessIndex;
    // }


}

// binarySearchPosition([1, 2, 5, 6, 7], 1)
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) );

