(function (global) {
    var mapArray;


    if (!global.UAM) {
        global.UAM = {};
    }


    global.UAM.aircrafts = [];

    /*
    global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });


    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });
    */

    global.UAM.addAircraft = function () {
        var newAircraftCode = document.getElementById("aircraft").value;
        if (typeof newAircraftCode !== "string" || newAircraftCode === "") {
            this.showAircraft(this.aircrafts);
            return;
        }
        var aircraft = { code: newAircraftCode, services: [] };
        this.aircrafts.push(aircraft);
        
        this.showAircraft(this.aircrafts);
        return aircraft;
    };


    global.UAM.removeAircraft = function () {
        var index = this.aircrafts.indexOf(this.getAircraftByName());
        if (index >= 0) {
            this.aircrafts.splice(index, 1);
            this.showAircraft(this.aircrafts);
            return true;
        } else {
            this.showAircraft(this.aircrafts);
            return false;
        }
        
    };


    global.UAM.addWorkToAircraft = function () {
        var name = document.getElementById("service").value;
        var timeToExecute = Number(document.getElementById("time").value);
        var aircraftObj = this.getAircraftByName();
        timeToExecute = parseInt(timeToExecute);
        if (aircraftObj === null ||
            typeof aircraftObj !== "object" ||
            typeof name !== "string" ||
            isNaN(timeToExecute)) {
            return;
        }


        var work = { name: name, timeToExecute: timeToExecute };
        aircraftObj.services.push(work);
        this.showAircraftService(this.aircrafts);
        return work;
    };


    global.UAM.reduceTimeToExecute = function () {
        var time = Number(document.getElementById("time").value);
        var aircraftObj = this.getAircraftByName();
        time = parseInt(time);
        if (aircraftObj == null ||
            typeof aircraftObj !== "object" ||
            !(aircraftObj.services instanceof Array) ||
            isNaN(time)) {
            return;
        }


        aircraftObj.services.forEach(function(service) {
            service.timeToExecute -= time;
        });
    };


    global.UAM.getAircraftsForRepairs = function() {
        maxTimeToExecute = parseInt(Number(document.getElementById("time").value));
        if (isNaN(maxTimeToExecute)) {
            return;
        }


        var aircraftsForRepairs = [];


        this.aircrafts.forEach(function(aircraft) {
            if (aircraft.services instanceof Array) {
                aircraft.services.forEach(function(service) {
                    if (service.timeToExecute <= maxTimeToExecute &&
                        aircraftsForRepairs.indexOf(aircraft) < 0) {
                        aircraftsForRepairs.push(aircraft);
                    }
                });
            }
        });
        
        this.showAircraft(aircraftsForRepairs);
        return aircraftsForRepairs;
    };

    
    global.UAM.showAircraft = function(objArray) {
        var text = "<ul>";
        for(var i = 0; i< objArray.length; i++){
            text += "<li>" + objArray[i].code + "</li>";
        }
        text += "</ul>";
        document.getElementById("aircraft_list").innerHTML = text;
    };
    
    global.UAM.showAircraftService = function(objArray) {
        var text = " ";
        for(var i = 0; i < objArray.length; i++){
            if (objArray[i].code === document.getElementById("aircraft").value){
                text += "<h2>" + objArray[i].code + "</h2>";
                for(var j = 0; j < objArray[i].services.length; j++){
                    text += "<ul><li>" + objArray[i].services[j].name;
                    text += " [time: " + objArray[i].services[j].timeToExecute + "]</li></ul>";
                }
            }
        }
        //text += "</ul>";
        document.getElementById("services_list").innerHTML = text;  
    };
    
    global.UAM.getAircraftByName = function(){
        for(var i=0; i<this.aircrafts.length; i++){
            if(this.aircrafts[i].code == document.getElementById("aircraft").value){ 
                return this.aircrafts[i];
            }
        }
    };
    
}(window));