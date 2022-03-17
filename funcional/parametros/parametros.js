function logParams(a, b, c){
    console.log(a, b, c)
}

logParams(1, 2, 3)
logParams()
logParams(1,2,3,4,5)


function sumNums(...nums){
    let total = 0
    console.log(nums)
    for(let n of nums){
        total += n          
    }
    return total
}
console.log(sumNums(1,2,3,4))