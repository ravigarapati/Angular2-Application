var app = angular.module('crudApp', []);


app.factory('restAPI', function($http) {

	var apiUrl = 'http://localhost/ng-crud/api/'

    var getUsers = function() {

        var requestURL = {
            method: 'GET',
            url: apiUrl + 'users'
        };
        var responseData = function(resp) {
            return resp;
        }
        var modalErrMsg = function(err){
        	return err;
        }
        return $http(requestURL).then(responseData, modalErrMsg);

    }

    var addUsers = function() {

    }

    var updateUsers = function() {

    }

    var deleteUsers = function() {

    }

    return {
        getUsers: getUsers,
        addUsers: addUsers,
        updateUsers: updateUsers,
        deleteUsers: deleteUsers
    }

});
app.controller('crudController', function(restAPI) {
    var vm = this;

    vm.getUsers = restAPI.getUsers();

    vm.addUsers = function(users) {

    }

    vm.someVal = "Hello";

    vm.updateUsers = function(id) {

    }




    vm.deleteUsers = function(id) {

    }
});