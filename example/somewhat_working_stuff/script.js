angular.module("app", [])
.controller("Ctrl", Ctrl);


function Person(name) {
	this.name = name;
	this.items = [1];
}

function Ctrl($http) {

	var vm=this;
	vm.items = [];
	vm.people = [];

	vm.addPerson = addPerson;
	vm.addItem = addItem;
	vm.addToPerson = addToPerson;
	vm.selectPerson = selectPerson;
	vm.newItem = "";
	vm.personName = "";

	vm.personSelected = null;


	function addPerson(name){
		vm.people.push(new Person(name));
	}

	function addItem(item) {
		vm.items.push(item);
	}

	function addToPerson(item) {
		vm.personSelected.items.push(item);
		var index = vm.items.indexOf(item);    // <-- Not supported in <IE9
		if (index !== -1) {
			vm.items.splice(index, 1);
		}
	}

	function selectPerson(name) {
		var result = $.grep(vm.people, function(e){ return e.name === name; });
		if (result.length == 0) {
  // not found
		} else if (result.length == 1) {
  			vm.personSelected = result[0];
		} else {
  // multiple items found
}
}

};