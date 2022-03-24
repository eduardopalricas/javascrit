const carro = {
    "marca": "Fiat",
    "modelo" : "Uno",
    "ano": 2001
}
let texto = JSON.stringify(carro)
//Convertemos para texto
let area = document.getElementById('area')
area.innerHTML = texto
let jsonobj = JSON.parse(texto)
var modelo = texto["modelo"]
//Convertemos para objeto para pegar so uma propriedade
var marca = jsonobj['marca']
area.innerHTML += marca
