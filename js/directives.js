'use strict';

var appDirectives = angular.module('appDirectives', []);


appDirectives.directive("panel", function() {
    return{
        restrict: 'E',
        transclude:true,
        scope:{
            title: "@"
        },
        template:"<div style='border:3px solid #953b39'>" +
                "<div class='alert alert-danger'>{{title}}</div>"+
                "<div ng-transclude></div>"+
                "</div>"
    }
})





