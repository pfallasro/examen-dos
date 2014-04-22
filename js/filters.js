'use strict';

/* Filters */
var appFilters = angular.module('appFilters', []);

appFilters.filter('aceptado', function () {
    return function (items) {
        var result = [];

            angular.forEach(items, function (value, key) {
                if(value.estado)
                    result.push(value);
            }, items);

        return result;

    };
});

appFilters.filter('removido', function () {
    return function (items) {
        var result = [];

        angular.forEach(items, function (value, key) {
            if(!value.estado)
                result.push(value);
        }, items);

        return result;

    };
});

appFilters.filter('codigo', function () {
    return function (param) {
        var result = param.nombre.substring(0,1) + param.papellido.substring(0,1) + param.sapellido.substring(0,1) + param.id;

        return result;

    };
});