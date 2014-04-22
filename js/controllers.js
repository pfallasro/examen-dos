'use strict'

var appControllers = angular.module('appControllers', []);

appControllers.controller('AhorcadoCntrl', ['$scope', 'Wordstack', function($scope, Wordstack) {

    $scope.camposRandom = function () {
        angular.forEach($scope.letrasActual, function (value, key) {
            if ( (Math.floor((Math.random()*2)+1)) == 1 ) {
                $scope.campos[key].letra = value;
            }
        });
    };

    $scope.agregarCampos = function (param) {
        $scope.letrasActual = param.split('');
        $scope.campos = [];
        for (var i = 0; i < $scope.letrasActual.length; i++) {
            $scope.campos.push({});
        }
        $scope.camposRandom();
    };

    $scope.removerLetras = function (param) {
        var temp = [];
        temp = param.letra.split('');
        param.letra = temp[0];
    };

    $scope.validar = function () {
        var result = true;

        angular.forEach($scope.letrasActual, function (value, key) {
            if ( !(value == $scope.campos[key].letra) ) {
                result = false;
            }
        });

        if (result) {
            if ($scope.numeroPalabra == 4) {
                $scope.success = true;
                $scope.cuerpoJuego = true;
            } else {
                $scope.intentos = 0;
                $scope.numeroPalabra = $scope.numeroPalabra + 1;
                $scope.agregarCampos($scope.stack[$scope.numeroPalabra]);
            }
        } else {
            if ($scope.intentos >= 3) {
                $scope.fail = true;
                $scope.cuerpoJuego = true;
            } else {
                $scope.intentos = $scope.intentos + 1 ;
            }
        }
    };

    $scope.init = function () {
        $scope.success = false;
        $scope.fail = false;
        $scope.cuerpoJuego = false;

        $scope.stack = Wordstack;
        $scope.numeroPalabra = 0;
        $scope.campos = [];
        $scope.letrasActual = [];
        $scope.intentos = 0;
        $scope.agregarCampos($scope.stack[$scope.numeroPalabra]);
    };

    $scope.init();

}]);


