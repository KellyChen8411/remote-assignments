function sumNum(num){
    if(num>0){
        return num + sumNum(num - 1);
    } else{
        return num;
    }

}

module.exports = sumNum;