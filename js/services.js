'use strict';

/* Services */

var appServices = angular.module('appServices', ['ngResource', 'LocalStorageModule']);

appServices.factory('Wordstack', function() {
    var wordsStack = ['chonco','proyecto','navidadsinti','chucknorris','tangamandapio'];
    return wordsStack;
});