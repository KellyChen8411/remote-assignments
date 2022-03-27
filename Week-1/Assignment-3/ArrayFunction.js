function countAandB(inputArray){
     let count = 0;
     for (let i = 0; i < inputArray.length; i++) {
         if(inputArray[i] === "a" || inputArray[i] === "b"){
             count++;
         }
     }

    return count;
  }


  function toNumber(inputArray){
      let newArr = [];
      for (let i = 0; i < inputArray.length; i++) {

            newArr.push(inputArray[i].charCodeAt(0) - 96);
      }

      return newArr;
  }

  let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
  console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
  console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
  let input2 = ['e', 'd', 'c', 'd', 'e'];
  console.log(countAandB(input2)); // should print 0
  console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]

