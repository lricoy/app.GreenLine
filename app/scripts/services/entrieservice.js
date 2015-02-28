'use strict';

/**
 * @ngdoc service
 * @name greenLineApp.EntriesService
 * @description
 * # EntriesService
 * Factory in the greenLineApp.
 */
angular.module('greenLineApp')
    .factory('EntrieService', function ($resource) {
        var url = domain + 'cadastro/api/',
            objects = [],

            get = function (name) {
                objects = $resource(url + name).query();
                return objects;
            };

        return {
            get: get
        }
    });
