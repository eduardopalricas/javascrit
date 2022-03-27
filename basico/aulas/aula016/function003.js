function fat(n){
    f = 1
    for(c=1; c<=n; c++){
        f= f*c    }
    return f
}
console.log(fat(4))

function fa(n){
    if (n==1){
        return 1
    }
    else{
        return n * fa(n-1)
    }
}
console.log(fa(4))