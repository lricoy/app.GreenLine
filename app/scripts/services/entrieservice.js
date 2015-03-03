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

            post = function (name, data, callback) {
                $resource(url + name).save(data).$promise.then(function success(response){
                    callback(response.data, null);
                }, function error(response){
                    callback(null, response.data);
                })
            },

            get = function (name) {
                objects = $resource(url + name).query();
                return objects;
            };

        return {
            get: get,
            post: post
        }
    });
