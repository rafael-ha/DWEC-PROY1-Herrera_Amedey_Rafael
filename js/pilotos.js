"use strict";
// Funcion que calcula la edad.
function calcularEdad(fecha) {
    let hoy = new Date();
    let fechaNac = new Date(fecha);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad;
}
// Funcion que rellena los datos de la tabla Lewis Hamilton
function setHamiltonStats(){
    Promise.all([
        fetch('http://ergast.com/api/f1/drivers/hamilton/driverStandings/1/seasons.json'),
        fetch('http://ergast.com/api/f1/drivers/hamilton/status.json'),
        fetch('http://ergast.com/api/f1/drivers/hamilton/grid/1/status.json'),
        fetch('http://ergast.com/api/f1/drivers/hamilton/results/1/status.json'),
        fetch('http://ergast.com/api/f1/current/drivers/hamilton/constructors.json'),
        fetch('http://ergast.com/api/f1/drivers/hamilton.json')
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        let tables = document.querySelectorAll(".table__hamilton");
        for (const table of tables) { // Con el for of, introducimos los valores en todas las tablas de la pagina (version movil).
            let trs = table.children;
            let totalCarreras = 0;
            let poles = 0;

            trs[0].lastElementChild.innerText = calcularEdad(data[5].MRData.DriverTable.Drivers[0].dateOfBirth);

            trs[1].firstElementChild.innerText = data[0].MRData.total;

            trs[1].firstElementChild.nextElementSibling.innerText = data[3].MRData.StatusTable.Status[0].count;

            for (const element of data[1].MRData.StatusTable.Status) {
                totalCarreras = totalCarreras+(+element.count);
            }
            trs[2].lastElementChild.innerText = totalCarreras;

            for (const element of data[2].MRData.StatusTable.Status) {
                poles = poles+(+element.count);
            }
            trs[3].firstElementChild.innerText = poles;

            trs[3].lastElementChild.innerText = data[4].MRData.ConstructorTable.Constructors[0].name;
        }
    }).catch(function (error) {
        console.log(error);
    });
}
// Funcion que rellena los datos de la tabla Michael Schumacher
function setSchumacherStats(){
    Promise.all([
        fetch('http://ergast.com/api/f1/drivers/michael_schumacher/driverStandings/1/seasons.json'),
        fetch('http://ergast.com/api/f1/drivers/michael_schumacher/status.json'),
        fetch('http://ergast.com/api/f1/drivers/michael_schumacher/grid/1/status.json'),
        fetch('http://ergast.com/api/f1/drivers/michael_schumacher/results/1/status.json'),
        fetch('http://ergast.com/api/f1/2012/drivers/michael_schumacher/constructors.json'),
        fetch('http://ergast.com/api/f1/drivers/michael_schumacher.json')
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        let tables = document.querySelectorAll(".table__schumacher");
        for (const table of tables) { 
            let trs = table.children;
            let totalCarreras = 0;
            let poles = 0;

            trs[0].lastElementChild.innerText = calcularEdad(data[5].MRData.DriverTable.Drivers[0].dateOfBirth);

            trs[1].firstElementChild.innerText = data[0].MRData.total;

            trs[1].firstElementChild.nextElementSibling.innerText = data[3].MRData.StatusTable.Status[0].count;

            for (const element of data[1].MRData.StatusTable.Status) {
                totalCarreras = totalCarreras+(+element.count);
            }
            trs[2].lastElementChild.innerText = totalCarreras;

            for (const element of data[2].MRData.StatusTable.Status) {
                poles = poles+(+element.count);
            }
            trs[3].firstElementChild.innerText = poles;

            trs[3].lastElementChild.innerText = data[4].MRData.ConstructorTable.Constructors[0].name;
        }
    }).catch(function (error) {
        console.log(error);
    });
}
// Funcion que rellena los datos de la tabla Sebastian Vettel
function setVettelStats(){
    Promise.all([
        fetch('http://ergast.com/api/f1/drivers/vettel/driverStandings/1/seasons.json'),
        fetch('http://ergast.com/api/f1/drivers/vettel/status.json'),
        fetch('http://ergast.com/api/f1/drivers/vettel/grid/1/status.json'),
        fetch('http://ergast.com/api/f1/drivers/vettel/results/1/status.json'),
        fetch('http://ergast.com/api/f1/current/drivers/vettel/constructors.json'),
        fetch('http://ergast.com/api/f1/drivers/vettel.json')
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        let tables = document.querySelectorAll(".table__vettel");
        for (const table of tables) { 
            let trs = table.children;
            let totalCarreras = 0;
            let poles = 0;

            trs[0].lastElementChild.innerText = calcularEdad(data[5].MRData.DriverTable.Drivers[0].dateOfBirth);

            trs[1].firstElementChild.innerText = data[0].MRData.total;

            trs[1].firstElementChild.nextElementSibling.innerText = data[3].MRData.StatusTable.Status[0].count;

            for (const element of data[1].MRData.StatusTable.Status) {
                totalCarreras = totalCarreras+(+element.count);
            }
            trs[2].lastElementChild.innerText = totalCarreras;

            for (const element of data[2].MRData.StatusTable.Status) {
                poles = poles+(+element.count);
            }
            trs[3].firstElementChild.innerText = poles;

            trs[3].lastElementChild.innerText = data[4].MRData.ConstructorTable.Constructors[0].name;
        }
    }).catch(function (error) {
        console.log(error);
    });
}
// Funcion que rellena los datos de la tabla Alain Prost.
function setProstStats(){
    Promise.all([
        fetch('http://ergast.com/api/f1/drivers/prost/driverStandings/1/seasons.json'),
        fetch('http://ergast.com/api/f1/drivers/prost/status.json'),
        fetch('http://ergast.com/api/f1/drivers/prost/grid/1/status.json'),
        fetch('http://ergast.com/api/f1/drivers/prost/results/1/status.json'),
        fetch('http://ergast.com/api/f1/1993/drivers/prost/constructors.json'),
        fetch('http://ergast.com/api/f1/drivers/prost.json')
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        let tables = document.querySelectorAll(".table__prost");
        for (const table of tables) { 
            let trs = table.children;
            let totalCarreras = 0;
            let poles = 0;

            trs[0].lastElementChild.innerText = calcularEdad(data[5].MRData.DriverTable.Drivers[0].dateOfBirth);

            trs[1].firstElementChild.innerText = data[0].MRData.total;

            trs[1].firstElementChild.nextElementSibling.innerText = data[3].MRData.StatusTable.Status[0].count;

            for (const element of data[1].MRData.StatusTable.Status) {
                totalCarreras = totalCarreras+(+element.count);
            }
            trs[2].lastElementChild.innerText = totalCarreras;

            for (const element of data[2].MRData.StatusTable.Status) {
                poles = poles+(+element.count);
            }
            trs[3].firstElementChild.innerText = poles;

            trs[3].lastElementChild.innerText = data[4].MRData.ConstructorTable.Constructors[0].name;
        }
    }).catch(function (error) {
        console.log(error);
    });
}