'use strict';

/**
 * @ngdoc function
 * @name greenLineApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the greenLineApp
 */
angular.module('greenLineApp')
    .controller('LoginCtrl', function ($scope, AuthService) {
        var vm = $scope;

        vm.user = {
            username:"",
            password: ""
        };

        vm.login = function () {
            AuthService.login(vm.user, function(data){
                console.log(data);
            })
        }
    });
