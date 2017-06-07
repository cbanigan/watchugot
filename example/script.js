angular.module("app", [])
.controller("Ctrl", Ctrl);


function Ctrl($http) {

	var vm=this;
	vm.username="";
	vm.test = "dddddd";
	vm.eventid= "";

	vm.login = function(username, eventid) {
		$http.post("http://127.0.0.1:5000/login/"+username+"/"+eventid).then(function(data){
			console.log("data:" + JSON.stringify(data));
			vm.test = data.data.user;
		}, function(err) {
			console.log("err:" + JSON.stringify(err));
	}
)};
	};