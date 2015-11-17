(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.aircrafts = [];
    
    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  /////////////// 
    
    global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });
    
    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });
    
    //////////////////////////////////////////////////////////////////////////////////////
    
    // DONE
    global.UAM.addAircraft = function (newAircraftCode) {
        UAM.aircrafts.push({code: newAircraftCode, services: []});
        return {code: newAircraftCode, services: []};
    };
    
    // DONE
    global.UAM.removeAircraft = function (aircraftObj) {
        for(var aircraft in UAM.aircrafts){          
            if(aircraftObj.code === UAM.aircrafts[aircraft].code){
                UAM.aircrafts.splice(aircraft,1);
            }
        }
    };

    // DONE
    global.UAM.addWorkToAircraft = function(aircraftObj, name, timeToExecute) {
	for(var aircraft in UAM.aircrafts){          
            if(aircraftObj.code === UAM.aircrafts[aircraft].code){
                UAM.aircrafts[aircraft].services.push( {
                    name: name,
                    timeToExecute: timeToExecute
                } );
            }
        }
    };

    // DONE  
    global.UAM.reduceTimeToExecute = function(aircraftObj, time) {
        for(var aircraft in UAM.aircrafts){ 
            if(aircraftObj.code === UAM.aircrafts[aircraft].code){
                for(var service in UAM.aircrafts[aircraft].services){
                    UAM.aircrafts[aircraft].services[service].timeToExecute = UAM.aircrafts[aircraft].services[service].timeToExecute - time;
                }
            }
        }
    };

    // DONE
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        for(var aircraft in UAM.aircrafts){
            for(var service in UAM.aircrafts[aircraft].services){
                if(UAM.aircrafts[aircraft].services[service].timeToExecute <= maxTimeToExecute){
                    UAM.aircrafts[aircraft].services.splice(service,1);
                }
            }
        }
    };

}(window));


/*
Przykład użycia:
var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');
addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);
var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);
getAircraftsForRepairs(100); // [ newAircraft1 ]
removeAircraft(newAircraft1);
getAircraftsForRepairs(100); // []
reduceTimeToExecute(newAircraft2, 20);
getAircraftsForRepairs(100); // [ newAircraft2 ]
*/

// na maila link do repo - andrzej.matlosz@gmail.com
// wtorek 17:00 dl
