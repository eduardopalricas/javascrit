const html = '<p>Olá mundo</p>  <p>Olá de novo</p>'

const regexp1 = /<.+?>.+?<\/.+?>/gi;

console.log(html.match(regexp1))

