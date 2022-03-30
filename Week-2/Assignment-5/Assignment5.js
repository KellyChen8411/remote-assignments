function binarySearchPosition(numbers, target){
    let minIndex = 0;
    let maxIndex = numbers.length - 1;
    let guessIndex;
    let targetIndex;

    // ------------Full array is reasonable guesses range------------

    while(minIndex <= maxIndex){

        // ------------Assign guessIndex as middle index of reasonable guesses range------------
        guessIndex = Math.round((minIndex+maxIndex)/2);
        // ------------Check if element of guessIndex is target, if not: reset reasonable guesses range------------
        if(numbers[guessIndex] === target){
            targetIndex = guessIndex;
            return targetIndex;
        } else if(numbers[guessIndex] > target){
            maxIndex = guessIndex - 1;
        } else {
            minIndex = guessIndex + 1;
        }

    }

    return -1; //target is not in array

}

console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3

