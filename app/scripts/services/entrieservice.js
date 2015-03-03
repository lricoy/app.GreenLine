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
                $resource(url + name).save(data).$promise.then(function success(data, status){
                    callback(data, status);
                }, function error(data, status){
                    callback(data, status);
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
