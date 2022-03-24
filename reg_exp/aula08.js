const html2 = '<p class experimento> Olá mundo</p>  <p>                             Olá de novo</p>'

console.log(html2)
console.log(html2.replace(/<(\w+)([\s\S]*?>)([\s\S]*?)(<\/\1>)/gi, 'AHAHAHHA $3 AHAHAAHA'))