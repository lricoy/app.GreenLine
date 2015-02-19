'use strict';

/**
 * @ngdoc overview
 * @name greenLineApp
 * @description
 * # greenLineApp
 *
 * Main module of the application.
 */

var domain = 'http://localhost:8000/';

angular
    .module('greenLineApp', [
        'ngAnimate',
        'ngAria',
        'ngMessages',
        'ngRoute',
        'ngMaterial',
        'ngResource'
    ])
    .config(function ($routeProvider, $resourceProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $resourceProvider.defaults.stripTrailingSlashes = false;
    });
