
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


    let autoBenzina = [];
    let autoDiesel = [];
    let altreAuto = [];




    cars.forEach(function(car) {

       if (car.alimentazione == "Benzina"){
        autoBenzina.push(car);
       } else if(car.alimentazione == "Diesel") {
        autoDiesel.push(car);
       } else{
        altreAuto.push(car);
       }
        
    });

    console.log(autoBenzina);
    console.log(autoDiesel);
    console.log(altreAuto);


    autoBenzina.forEach(function (car) {
        let carSpec = `
            <div class="col-4">
                    <h5 class="">${car.modello}</h5>
                    <p class="">Marca:    ${car.marca}</p>
                    <p class="">Tipo di alimentazione:    ${car.alimentazione}</p>
            </div>
        `;
        document.getElementById("autoBenzina").innerHTML += carSpec;

    });

    autoDiesel.forEach(function (car) {
        let carSpec = `
            <div class="col-4">
                    <h5 class="">${car.modello}</h5>
                    <p class="">Marca:    ${car.marca}</p>
                    <p class="">Tipo di alimentazione:    ${car.alimentazione}</p>
            </div>
        `;
        document.getElementById("autoDiesel").innerHTML += carSpec;

    });

    altreAuto.forEach(function (car) {
        let carSpec = `
            <div class="col-4">
                    <h5 class="">${car.modello}</h5>
                    <p class="">Marca:    ${car.marca}</p>
                    <p class="">Tipo di alimentazione:    ${car.alimentazione}</p>
            </div>
        `;
        document.getElementById("altreAuto").innerHTML += carSpec;

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



    function addCar(event) {
        event.preventDefault();
    
        let newCarModel = document.getElementById("nameInput").value;
        let newCarMarca = document.getElementById("marcaInput").value;
        let newCarTipo = document.getElementById("tipoInput").value;
    
        let newCar = {
            marca: newCarModel,
            modello: newCarMarca,
            alimentazione: newCarTipo,
        };
    
        cars.push(newCar);
        console.log(newCar);


        if (newCarTipo == "Benzina"){
            let carSpec = `
            <div class="col-4">
                    <h5 class="">${newCarModel}</h5>
                    <p class="">Marca:    ${newCarMarca}</p>
                    <p class="">Tipo di alimentazione:    ${newCarTipo}</p>
            </div>
        `;
        document.getElementById("autoBenzina").innerHTML += carSpec;

           } else if(newCarTipo == "Diesel") {
                    let carSpec = `
            <div class="col-4">
                    <h5 class="">${newCarModel}</h5>
                    <p class="">Marca:    ${newCarMarca}</p>
                    <p class="">Tipo di alimentazione:    ${newCarTipo}</p>
            </div>
        `;
        document.getElementById("autoDiesel").innerHTML += carSpec;

           } else{
                    let carSpec = `
            <div class="col-4">
                    <h5 class="">${newCarModel}</h5>
                    <p class="">Marca:    ${newCarMarca}</p>
                    <p class="">Tipo di alimentazione:    ${newCarTipo}</p>
            </div>
        `;
        document.getElementById("altreAuto").innerHTML += carSpec;
           }

    
    }
