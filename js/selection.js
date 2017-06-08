// address of server
var serverAddress = "http://127.0.0.1:5000/";
var tableData = [];
var table = document.getElementById("eventTable");


function setItems() {
    
    var listOfItems = []
    
    
    //TODO: figure out if how to access the item data correctly
    for(int i = 0; i < listOfItems.length; i++){
        var div = document.createElement('div');
        div.className = 'row';
        div.idName = listOfItems[i];
        div.innerHTML= '<p class="new-item">' + newItem.value + '</p><input type="button" class="delete-button" value = "Delete" onClick="selectItem(this)">';
        table.appendChild(div);
    }
    
    return false;
}

function selectItem(object) {
    
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