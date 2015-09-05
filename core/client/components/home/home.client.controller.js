(function () {
    "use strict";

    angular.module('app')
        .controller('homeController', function ($scope, jibbirService) {
            $scope.test = "test";
            
            $scope.setUsername = function(){
                jibbirService.setUsername($scope.username);
            };
            
            
        });
        


} ());