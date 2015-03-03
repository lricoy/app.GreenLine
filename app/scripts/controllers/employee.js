'use strict';

/**
 * @ngdoc function
 * @name greenLineApp.controller:EmployeeCtrl
 * @description
 * # EmployeeCtrl
 * Controller of the greenLineApp
 */
angular.module('greenLineApp')
    .controller('EmployeeCtrl', function ($scope, EntrieService, $filter) {
        var vm = $scope;

        vm.objects = EntrieService.get('funcionario/');

        vm.lengthOfObjects = function (filter){
            var objects = $filter('filter')(vm.objects, filter);
            return objects.length;
        };

        vm.genderOpt = [{
            char: 'f',
            verbose: 'feminino'
        }, {
            char: 'm',
            verbose: 'masculino'
        }];

        vm.newObject = {
            nome: "",
            cpf: "",
            rg: "",
            data_nascimento: "",
            sexo: "",
            setor: "",
            cargo: "",
            data_admissao: "",
            data_registro: "",
            ctps: "",
            pis_pasep: "",
            salario: "",
            transporte: "",
            refeicao: "",
            carga_horaria_semanal:"",
            tel: "",
            cel: "",
            email: "",
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            municipio: "",
            uf: ""
        };

        vm.postNewObject = function (){
            EntrieService.post('funcionario/', vm.newObject, function (data, error){
                console.log(vm.newObject)
                if (error){
                    console.log(error);
                } else {
                    vm.objects.push(data);
                }
            });
        }
    });

