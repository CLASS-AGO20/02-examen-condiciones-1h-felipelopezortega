export default class App {

    convertir(pesos){

        if(pesos<2000){

            return (pesos * 20.5)

        }else if(pesos>=2000){

            return (pesos * 22.7)
        }
    }

    costoRenta(kilometros){

        if(kilometros<50){

            return kilometros*3

        }else if(kilometros>=50 && kilometros<100){

            return kilometros*5

        }else if(kilometros>=100 && kilometros<200){

            return kilometros*6

        }else if(kilometros>=200){

            return kilometros*6.5
        }
    }

    puedeCircular(dia, terminacion){

        if(dia==1 && terminacion==0){

            return true

        }else if(dia!=1 && terminacion==0){

            return false 

        }else if(dia==2 && terminacion==1){

            return true

        }else if (dia!=2 && terminacion==1){

            return false 

        }else if((dia==3 || dia==4) && terminacion==2){

            return true

        

        }else if((dia!=3 || dia!=4) && terminacion==2){

            return false

        }else if(((((((dia!=1 || dia!=2) || dia!=3) || dia!=4) || dia!=5) || dia!=6) || dia!=7)){

            return false
        
        }else {

            true
        }
    }
}

let app = new App();

//Función de pesos a dólares o euros
console.log(app.convertir(1999))
console.log(app.convertir(2000))
console.log(app.convertir(10000))

//Función para ver el costo por kilometros recorridos
console.log(app.costoRenta(49))
console.log(app.costoRenta(50))
console.log(app.costoRenta(99))
console.log(app.costoRenta(100))
console.log(app.costoRenta(150))
console.log(app.costoRenta(199))
console.log(app.costoRenta(200))
console.log(app.costoRenta(249))

//Función para ver si puede circular
console.log(app.puedeCircular(1,1))
console.log(app.puedeCircular(2,1))
console.log(app.puedeCircular(3,1))
console.log(app.puedeCircular(4,1))
console.log(app.puedeCircular(5,1))
console.log(app.puedeCircular(6,1))
console.log(app.puedeCircular(7,1))
console.log(app.puedeCircular(1,0))
console.log(app.puedeCircular(4,2))
console.log(app.puedeCircular(3,2))
console.log(app.puedeCircular(8,1))

