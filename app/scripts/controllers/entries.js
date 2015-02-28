'use strict';

/**
 * @ngdoc function
 * @name greenLineApp.controller:EntriesCtrl
 * @description
 * # EntriesCtrl
 * Controller of the greenLineApp
 */
angular.module('greenLineApp')
    .controller('EntriesCtrl', function ($scope, objects, $location) {
        var vm = $scope;

        vm.objects = objects;

        vm.object = {};

        vm.location = function (url) {
            $location.path(url);
        }

    });
