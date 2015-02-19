'use strict';

/**
 * @ngdoc service
 * @name greenLineApp.cadastroService
 * @description
 * # cadastroService
 * Factory in the greenLineApp.
 */
angular.module('greenLineApp')
    .factory('cadastroService', function ($resource) {
        var api_url = domain + 'cadastro/api/';

        return {
            list: function(name){
                return $resource(api_url + name).query();
            }
        };
    });
