function finalPrice(tax){
    return function(price){
        return price * (1+tax)
    }
}

console.log(finalPrice(0.23, 25))