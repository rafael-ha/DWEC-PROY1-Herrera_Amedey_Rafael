"use strict";
// Funcion para introducir datos en la tabla Circuit of the Americas
function setCotaTable() {
    Promise.all([
        // Fetch a las distintas partes de la API que necesitamos para rellenar la tabla.
        fetch('http://ergast.com/api/f1/2021/17/qualifying.json'),
        fetch('http://ergast.com/api/f1/2021/17/results.json')
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        // Guardamos en una variable las tablas del HTML
        let tables = document.querySelectorAll(".table__cota");
        for (const table of tables) { // Y por cada tabla, insertamos los datos correspondientes.
            let trs = table.children;
            let cont = 0;
            while(cont<=2){
                let tdQualyNom = document.createElement("td");
                let tdQualyTime = document.createElement("td");
                let tdRaceNom = document.createElement("td");
                let tdRaceTime = document.createElement("td");
                let textQualyNom = document.createTextNode(data[0].MRData.RaceTable.Races[0].QualifyingResults[cont].Driver.code);
                let textQualyTime = document.createTextNode(data[0].MRData.RaceTable.Races[0].QualifyingResults[cont].Q3);
                let textRaceNom = document.createTextNode(data[1].MRData.RaceTable.Races[0].Results[cont].Driver.code);
                let textRaceTime = document.createTextNode(data[1].MRData.RaceTable.Races[0].Results[cont].Time.time);
                tdQualyNom.appendChild(textQualyNom);
                tdQualyTime.appendChild(textQualyTime);
                tdRaceNom.appendChild(textRaceNom);
                tdRaceTime.appendChild(textRaceTime);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdQualyNom);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdQualyTime);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdRaceNom);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdRaceTime);
                cont++;
            }  
        }
        console.log(data);                
    }).catch(function (error) {
        console.log(error);
    });
}
// Funcion para introducir datos en la tabla Istanbul Park.
function setIstanbulTable() {
    Promise.all([
        fetch('http://ergast.com/api/f1/2021/16/qualifying.json'),
        fetch('http://ergast.com/api/f1/2021/16/results.json')
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        console.log(data);
        let tables = document.querySelectorAll(".table__istanbul");
        for (const table of tables) {
            let trs = table.children;
            let cont = 0;
            while(cont<=2){
                let tdQualyNom = document.createElement("td");
                let tdQualyTime = document.createElement("td");
                let tdRaceNom = document.createElement("td");
                let tdRaceTime = document.createElement("td");
                let textQualyNom = document.createTextNode(data[0].MRData.RaceTable.Races[0].QualifyingResults[cont].Driver.code);
                let textQualyTime = document.createTextNode(data[0].MRData.RaceTable.Races[0].QualifyingResults[cont].Q3);
                let textRaceNom = document.createTextNode(data[1].MRData.RaceTable.Races[0].Results[cont].Driver.code);
                let textRaceTime = document.createTextNode(data[1].MRData.RaceTable.Races[0].Results[cont].Time.time);
                tdQualyNom.appendChild(textQualyNom);
                tdQualyTime.appendChild(textQualyTime);
                tdRaceNom.appendChild(textRaceNom);
                tdRaceTime.appendChild(textRaceTime);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdQualyNom);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdQualyTime);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdRaceNom);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdRaceTime);
                cont++;
            }  
        }        
    }).catch(function (error) {
        console.log(error);
    });
}
// Funcion para introducir datos en la tabla Sochi Autodrom.
function setSochiTable() {
    Promise.all([
        fetch('http://ergast.com/api/f1/2021/15/qualifying.json'),
        fetch('http://ergast.com/api/f1/2021/15/results.json')
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        console.log(data);
        let tables = document.querySelectorAll(".table__sochi");
        for (const table of tables) {
            let trs = table.children;
            let cont = 0;
            while(cont<=2){
                let tdQualyNom = document.createElement("td");
                let tdQualyTime = document.createElement("td");
                let tdRaceNom = document.createElement("td");
                let tdRaceTime = document.createElement("td");
                let textQualyNom = document.createTextNode(data[0].MRData.RaceTable.Races[0].QualifyingResults[cont].Driver.code);
                let textQualyTime = document.createTextNode(data[0].MRData.RaceTable.Races[0].QualifyingResults[cont].Q3);
                let textRaceNom = document.createTextNode(data[1].MRData.RaceTable.Races[0].Results[cont].Driver.code);
                let textRaceTime = document.createTextNode(data[1].MRData.RaceTable.Races[0].Results[cont].Time.time);
                tdQualyNom.appendChild(textQualyNom);
                tdQualyTime.appendChild(textQualyTime);
                tdRaceNom.appendChild(textRaceNom);
                tdRaceTime.appendChild(textRaceTime);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdQualyNom);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdQualyTime);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdRaceNom);
                trs[cont].lastElementChild.insertAdjacentElement('afterend', tdRaceTime);
                cont++;
            }  
        }        
    }).catch(function (error) {
        console.log(error);
    });
}
// Funcion para introducir datos en la tabla Autodromo Nazionale di Monza.
function setMonzaTable() {
    Promise.all([
        fetch('http://ergast.com/api/f1/2021/14/qualifying.json'),
        fetch('http://ergast.com/api/f1/2021/14/results.json')
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        console.log(data);
        let table = document.querySelector(".table__monza");
        let trs = table.children;
        let cont = 0;
        while(cont<=2){
            let tdQualyNom = document.createElement("td");
            let tdQualyTime = document.createElement("td");
            let tdRaceNom = document.createElement("td");
            let tdRaceTime = document.createElement("td");
            let textQualyNom = document.createTextNode(data[0].MRData.RaceTable.Races[0].QualifyingResults[cont].Driver.code);
            let textQualyTime = document.createTextNode(data[0].MRData.RaceTable.Races[0].QualifyingResults[cont].Q3);
            let textRaceNom = document.createTextNode(data[1].MRData.RaceTable.Races[0].Results[cont].Driver.code);
            let textRaceTime = document.createTextNode(data[1].MRData.RaceTable.Races[0].Results[cont].Time.time);
            tdQualyNom.appendChild(textQualyNom);
            tdQualyTime.appendChild(textQualyTime);
            tdRaceNom.appendChild(textRaceNom);
            tdRaceTime.appendChild(textRaceTime);
            trs[cont].lastElementChild.insertAdjacentElement('afterend', tdQualyNom);
            trs[cont].lastElementChild.insertAdjacentElement('afterend', tdQualyTime);
            trs[cont].lastElementChild.insertAdjacentElement('afterend', tdRaceNom);
            trs[cont].lastElementChild.insertAdjacentElement('afterend', tdRaceTime);
            cont++;
        }        
    }).catch(function (error) {
        console.log(error);
    });
}