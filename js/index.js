// Toggle Function
// $('.toggle').click(function(){
  // Switches the Icon
//   $(this).children('i').toggleClass('fa-pencil');
//   // Switches the forms  
//   $('.form').animate({
//     height: "toggle",
//     'padding-top': 'toggle',
//     'padding-bottom': 'toggle',
//     opacity: "toggle"
//   }, "slow");
// });

var tableData = [];
var table = document.getElementById("eventTable");

function addItem() {
    // get new item from input
    var newItem = document.getElementById("newItem");
    
    // make sure something was entered
    if(newItem.value == "") {
        newItem.value="Must Enter an Item";
        return false;
    }
    
    if(tableData.length == 0 && table.rows.length == 1) {
        table.deleteRow(0);
    }
    
    // add new item to data array
    tableData.push(newItem.value);
    
    // insert new row into table
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= newItem.value;
    row.insertCell(1).innerHTML= '<input type="button" value = "Delete" onClick="deleteRow(this)">';
    
    // clear input value
    newItem.value="";
    
    return false;
}

function deleteRow(object) {
    // delete row from table
    var index = object.parentNode.parentNode.rowIndex;
    table.deleteRow(index);
    
    // remove item from data array
    var tempData = [];
    for(i = 0; i < tableData.length; i++) {
        if(i != index) 
            tempData.push(tableData[i]);
    }
    tableData = tempData;
    
    return false;
}

// add event for "Enter" button
/*
function (event) {
    if (event.which == 13 || event.keyCode == 13) {
        //add new row to table
        var row = table.insertRow(tableSize);
        tableSize++;
    }
};*/