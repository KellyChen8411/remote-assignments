function count(input) {
    let countObj = {};
    for(const item of input){
        if(item in countObj){
            countObj[item] += 1;
        }else {
            countObj[item] = 1;
        }
    }

    return countObj;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1)); 
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
    let groupByKeyObj = {};
    let values;
        for(const item of input){
            values = Object.values(item);
            let key = values[0];
            let value = values[1];
            if(key in groupByKeyObj){
                groupByKeyObj[key] += value;
            }else {
                groupByKeyObj[key] = value;
            }
        }
    
        return groupByKeyObj;
    }

    let input2 = [
        {key: 'a', value: 3},
        {key: 'b', value: 1},
        {key: 'c', value: 2},
        {key: 'a', value: 3},
        {key: 'c', value: 5}
       ]
       console.log(groupByKey(input2)); 
       // should print {a:6, b:1, c:7}