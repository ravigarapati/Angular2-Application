var app = angular.module('crudApp', []);

app.factory('restAPI', function($http) {

    var apiUrl = 'http://localhost/ng-crud/api/'

    function getUsers() {
        var requestURL = {
            method: 'GET',
            url: apiUrl + 'users'
        };
        var responseData = function(resp) {
            console.log(resp.data)
            return resp.data;
        }
        var modalErrMsg = function(err) {
            return err;
        }
        return $http(requestURL).then(responseData, modalErrMsg);
    }

    var addUsers = function(username, first_name, last_name, address) {

        var requestURL = {
            method: 'POST',
            url: apiUrl + 'add_user',
            data: {
                username: username,
                first_name: first_name,
                last_name: last_name,
                address: address
            }
        };
        var responseData = function(resp) {
            return resp.data;
        }
        var modalErrMsg = function(err) {
            return err;
        }
        return $http(requestURL).then(responseData, modalErrMsg);



    }

    function updateUsers(username, first_name, last_name, address, id) {
        var requestURL = {
            method: 'PUT',
            url: apiUrl + 'users/' + id,
            data: {
                username: username,
                first_name: first_name,
                last_name: last_name,
                address: address,
                id: id
            }
        };
        var responseData = function(resp) {
            console.log(resp.data)
            return resp.data;
        }
        var modalErrMsg = function(err) {
            return err;
        }
        return $http(requestURL).then(responseData, modalErrMsg);
    }

    function deleteUsers(id) {
        var requestURL = {
            method: 'DELETE',
            url: apiUrl + 'users/' + id
        };
        var responseData = function(resp) {
            // console.log(resp.data)
            return resp.data;
        }
        var modalErrMsg = function(err) {
            return err;
        }
        return $http(requestURL).then(responseData, modalErrMsg);
    }

    return {
        getUsers: getUsers,
        addUsers: addUsers,
        updateUsers: updateUsers,
        deleteUsers: deleteUsers
    }

});
app.controller('crudController', function(restAPI, $q, $window) {
    var vm = this;
    vm.isAdd = false;
    //getUsers
    $q.all([restAPI.getUsers()]).then(function(promises) {
        vm.fetchUsers = promises[0];
        return promises;
    });

    vm.addUsers = function() {

        var username = vm.username,
            first_name = vm.first_name,
            last_name = vm.last_name,
            address = vm.address;

        $q.all([restAPI.addUsers(username, first_name, last_name, address)]).then(function(promises) {
            return promises[0];
        });


        $window.location.reload();



    }

    vm.toggleUser = function() {
        vm.isAdd = vm.isAdd ? false : true;
    }

    vm.updateUsers = function(u, id) {
         $q.all([restAPI.updateUsers(u.username, u.first_name, u.last_name, u.address, u.id)]).then(function(promises) {
            return promises[0];
        });
     //   $window.location.reload();
    }

    vm.isToggle = [];

    vm.updateToggle = function(index){
        //console.log(index);
        vm.isToggle[index] = vm.isToggle[index] ? false : true;
    }




    vm.deleteUsers = function(id) {
        console.log(id);
        $q.all([restAPI.deleteUsers(id)]).then(function(promises) {
            return promises[0];
        });

        $window.location.reload();

    }
});