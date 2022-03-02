let num = [5,3,4]
num.push(8)
num[4]=6
var a = num.length
num.sort()
console.log(num)
console.log(a)
for(var c=0; c<num.length; c++){
    console.log(`Para a posição ${c} o valor é ${num[c]}`
    )}
for(var c in num){
    console.log(num[c])
}