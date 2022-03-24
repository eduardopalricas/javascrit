const lookahead ='ofline ABC 190.34 inactive'

//console.log(lookahead)
//console.log(lookahead.match(/.+(?=[^in]active)/gim))
//console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))
//console.log(lookahead.match(/(?<=online\s+)\S+.*/gim))
console.log(lookahead.match(/(?<!online.+).*/gim))
