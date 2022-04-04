class animal {
    constructor(name){
        this.name = name
    }
    getname(){
        return this.name
    }   
}
const smaug = new animal('cobra')
console.log(smaug)

class cão extends animal {  
    falar(){
        this.barulho = 'AOaoaoaoaoaoao'
        return this.barulho
    }   
    andar(){
        return 'ando com 4 patas'
    }
}
const cao = new cão('cao')
console.log(cao)
console.log(cao.falar())
console.log(cao.andar())
