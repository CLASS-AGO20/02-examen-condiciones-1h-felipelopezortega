export default class App {

    convertir(pesos){

        if(pesos<2000){

            return pesos/ 20.5
        }else if(pesos>=2000){

            return pesos/ 22.7
        }
    }
}

let app = new App();

//Función de pesos a dólares o euros
console.log(app.convertir(1999))
console.log(app.convertir(2000))
console.log(app.convertir(10000))