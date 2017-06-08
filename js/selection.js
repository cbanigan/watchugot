// address of server
var serverAddress = "http://127.0.0.1:5000/";
var tableData = [];
var table = document.getElementById("eventTable");


function selectItem1(object) {
    
    document.getElementById('sspan1').className = 'strikethrough';
    
    return false;
}

function selectItem2(object) {
    
    document.getElementById('sspan2').className = 'strikethrough';
    
    return false;
}
function selectItem3(object) {
    
    document.getElementById('sspan3').className = 'strikethrough';
    
    return false;
}
function selectItem4(object) {
    
    document.getElementById('sspan4').className = 'strikethrough';
    
    return false;
}
function selectItem5(object) {
    
    document.getElementById('sspan5').className = 'strikethrough';
    
    return false;
}
function selectItem6(object) {
    
    document.getElementById('sspan6').className = 'strikethrough';
    
    return false;
}

function selectItem7(object) {
    
    document.getElementById('sspan7').className = 'strikethrough';
    
    return false;
}

function selectItem8(object) {
    
    document.getElementById('sspan8').className = 'strikethrough';
    
    return false;
}

function selectItem9(object) {
    
    document.getElementById('sspan9').className = 'strikethrough';
    
    return false;
}

function selectItem10(object) {
    
    document.getElementById('sspan10').className = 'strikethrough';
    
    return false;
}

function selectItem11(object) {
    
    document.getElementById('sspan11').className = 'strikethrough';
    
    return false;
}

angular.module("app", []).controller("Ctrl", Ctrl);

function Ctrl($http) {
	var vm = this;
	vm.eventItems = [];
	vm.eventName = "";

    // add a new event to data
    vm.addEvent = function(eventName) {
        eventItems = tableData;
        
        
        // ADD LATER to http.post "+ "/" + eventItems"
        $http.post(serverAddress + "addEvent/" + eventName + "/" + JSON.stringfy(eventItems)).then(function(data) {
            console.log("Data from Server: " + JSON.stringify(data));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        })  
    };    
};
