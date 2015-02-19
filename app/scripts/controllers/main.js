'use strict';

/**
 * @ngdoc function
 * @name greenLineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the greenLineApp
 */
angular.module('greenLineApp')
    .controller('MainCtrl', function ($scope, cadastroService) {
        var vm = $scope;

        vm.funcionarios = cadastroService.list('funcionario/')

    });
