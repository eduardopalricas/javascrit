const cpfs = `
Os CPFs são:
254.224.877-45
215.978.456-12
047.258.369-96
963.987.321-00
`

const ips = `
Os ips são:
0.0.0.0
256.255.255.255
192.168.0.25
10.10.5.12`
var regexp1 = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g;
//Melhoramento de expressoes
var regexp1 = /(\d{3}\.){2}\d{3}\-\d{2}/g;

var ipregexp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

console.log(cpfs.match(regexp1))
console.log(ips.match(ipregexp))