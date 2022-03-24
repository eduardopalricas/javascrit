const cpfs = `
Os CPFs são:
-254.224.877-45
215.978.456-12
047.258.369-96
963.987.321-00
`

var regexp1 = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
//É mais restrito, pois não podemos por nada a tras- como podemos observar no primeiro CPF//


console.log(cpfs.match(regexp1))