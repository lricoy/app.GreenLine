'use strict';

/**
 * @ngdoc function
 * @name greenLineApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the greenLineApp
 */
angular.module('greenLineApp')
    .controller('MenuCtrl', function ($scope, AuthService, $mdBottomSheet) {
        var vm = $scope;

        vm.user = AuthService.getUser();

        vm.showBottomSheet = function (templateUrl, $event){
            $mdBottomSheet.show({
                templateUrl: 'views/bottomsheet/' + templateUrl + ".html",
                controller: 'BottomSheetCtrl',
                targetEvent: $event
            });
        }
    });