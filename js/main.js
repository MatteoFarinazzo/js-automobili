
let cars = [
    {
        marca: "Fiat",
        modello: "Uno",
        alimentazione: "Benzina",
    },
    {
        marca: "Renault",
        modello: "Twingo",
        alimentazione: "Elettrica",
    },
    {
        marca: "Citroen",
        modello: "C1",
        alimentazione: "Ibrida",
    },
    {
        marca: "Opel",
        modello: "Corsa",
        alimentazione: "Diesel",
    },
    {
        marca: "Alfa Romeo",
        modello: "Giulietta",
        alimentazione: "Benzina",
    },
    {
        marca: "Fiat",
        modello: "Panda",
        alimentazione: "Gpl",
    },
    {
        marca: "Volkswagen",
        modello: "Taigo",
        alimentazione: "Benzina",
    },
    {
        marca: "Opel",
        modello: "Mokka",
        alimentazione: "Ibrida",
    },
    {
        marca: "Smart",
        modello: "ForFour",
        alimentazione: "Elettrica",
    },
    {
        marca: "Fiat",
        modello: "500",
        alimentazione: "Diesel",
    },

];

    let car = printCarArray(cars);




    cars.forEach(function(car) {
        console.log(alimentazione);
        
    });





    //-------FUNZIONI---


    function printObject(object) {
        let string = "";
    
        string += "{\n";
    
        for (let key in object) {
            string += "\t " + key + ": " + object[key] + "\n";
        }
    
        string += "}";
    
        console.log(string);
    
    }


    function printCarArray(cars){
        for (let i=0; i<cars.length; i++){

            let car = cars[i];
            printObject(car);
        }
    }
