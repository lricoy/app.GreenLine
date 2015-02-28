'use strict';

/**
 * @ngdoc function
 * @name greenLineApp.controller:UserbottomsheetCtrl
 * @description
 * # UserbottomsheetCtrl
 * Controller of the greenLineApp
 */
angular.module('greenLineApp')
    .controller('BottomSheetCtrl', function ($scope, $mdBottomSheet, $location, AuthService) {
        var vm = $scope;

        vm.location = function (url) {
            $mdBottomSheet.hide();
            $location.path(url);
        };

        vm.logout = function () {
            $mdBottomSheet.hide();
            AuthService.logout();
        }

    });
