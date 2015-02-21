'use strict';

/**
 * @ngdoc service
 * @name greenLineApp.AuthService
 * @description
 * # AuthService
 * Factory in the greenLineApp.
 */
angular.module('greenLineApp')
    .factory('AuthService', function ($http, $window) {
        var url_login = domain + 'auth/api/login/',

            _user = null,

            isLogged = function(){
                return (_user !== null);
            },

            login = function (data, callback) {
                console.log(data)
                $http.post(url_login, data)
                    .success(function (response) {
                        _user = response;

                        $window.localStorage['apptoken'] = response['token'];

                        $http.defaults.headers.common['x-access-token'] = window.localStorage['apptoken'];

                        callback(_user, null)
                    })
                    .error(function (response, status) {
                        callback({error: status})
                    });
            };

        return {
            login: login,
            isLogged: isLogged,
            user: _user
        }
    });
