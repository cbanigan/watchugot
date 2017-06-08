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

// good resource for dynamic tables: http://www.mysamplecode.com/2012/04/generate-html-table-using-javascript.html

var tableData = [];
var table = document.getElementById("eventTable");

var item = document.getElementById("newItem");
item.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        addItem();
    }
});

function addItem() {
    // get new item from input
    var newItem = document.getElementById("newItem");
    
    // make sure something was entered
    if(newItem.value == "") {
        newItem.value="Must Enter an Item";
        return false;
    }
    
    // add new item to data array
    tableData.push(newItem.value);
    
    // insert new row into table
    
    var div = document.createElement('div');
    div.className = 'row';
    div.innerHTML= '<p class="new-item">' + newItem.value + '</p><input type="button" class="delete-button" value = "Delete" onClick="deleteRow(this)">';
    table.appendChild(div);
    
    /*
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= '<div class="new-item">' + newItem.value + '</div>';
    row.insertCell(1).innerHTML= '<input type="button" class="delete-button" value = "Delete" onClick="deleteRow(this)">';
    */
    
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

function selectItem(object) {
    
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