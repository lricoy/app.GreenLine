'use strict';

/**
 * @ngdoc function
 * @name greenLineApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the greenLineApp
 */
angular.module('greenLineApp')
    .controller('LoginCtrl', function ($scope, AuthService, $mdToast, $location) {
        var vm = $scope;

        vm.user = {
            username:"",
            password: ""
        };

        vm.load_login = false;

        vm.keepConn = false;

        vm.login = function () {
            vm.load_login = true;
            AuthService.login(vm.user,vm.keepConn, function(data, error){
                if (!error) {
                    $location.path("/");
                } else {
                    var msg = "";
                    vm.load_login = false;
                    if (error.status === 401) {
                        msg = error.error.detail;
                    } else {
                        msg = "Erro ao efetuar login.";
                    }

                    $mdToast.show(
                        $mdToast.simple()
                            .content(msg)
                            .position("top left")
                    );
                }
            });
        };
    });
