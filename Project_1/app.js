
var app = angular.module('raviApp', []);
app.service('myServices', function(){

	//return {
		this.hello = "Helllo";
	//}
});


app.factory('myFactory', function($http){
	var users = [
		{
			"name": "Ravi"
		},
		{
			"name": "Mallesh"
		},
		{
			"name": "Narasimha"
		},
		{
			"name": "Mounika"
		},
		 {
			"name": "Subbu"
		}
	];


	var getUsers = function(){


		var req = {
		 method: 'GET',
		 url: 'https://reqres.in/api/users?page=2'
		}

		$http(req).then(function(res){
			//console.log(res);
			return res.data;

		}, function(err){return err;});
	}

	return {
		hello: 'World',
		users: users,
		getUsers: getUsers
	}
});


app.controller('myController', function($scope, myServices, myFactory){
	$scope.myName = "Hello World";

	$scope.clickMe = function(){
		console.log("NTFASDAS", myFactory.getUsers());
		$scope.users = myFactory.users;
	}
});

