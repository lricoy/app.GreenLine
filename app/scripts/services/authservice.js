'use strict';

/**
 * @ngdoc service
 * @name greenLineApp.AuthService
 * @description
 * # AuthService
 * Factory in the greenLineApp.
 */
angular.module('greenLineApp')
    .factory('AuthService', function ($http, $window, $location) {
        var _urlLogin = domain + 'auth/api/login/',

            _user = null,

            isLogged = function () {
                return (_user !== null);
            },

            getUser = function () {
                return _user;
            },

            login = function (data, keepConn, callback) {
                $http.post(_urlLogin, data)
                    .success(function (response) {
                        _user = response.user;

                        if (keepConn){
                            $window.localStorage.setItem('token', response.token);
                        } else {
                            $window.sessionStorage.setItem('token', response.token);
                        }

                        $http.defaults.headers.common['Authorization'] = 'Token ' + response.token;

                        callback(response.user, null)
                    })
                    .error(function (response, status) {
                        callback(null, {error:response, status: status});
                    })
            },

            logout = function () {
                _user = null;
                $window.localStorage.removeItem('token');
                $window.sessionStorage.removeItem('token');
                $http.defaults.headers.common['Authorization'] = null;
                $location.path("/login")

            },

            checkStoredAuth = function () {
                var token = $window.sessionStorage.getItem('token') || $window.localStorage.getItem('token');
                if (token !== null){
                    $http.defaults.headers.common['Authorization'] = 'Token ' + token;
                    $http.get(_urlLogin + 'get_user/')
                        .success(function (data) {
                            _user = data;
                        });
                }
            };


        return {
            login: login,
            isLogged: isLogged,
            getUser: getUser,
            checkStoredAuth: checkStoredAuth,
            logout: logout
        }
    });
