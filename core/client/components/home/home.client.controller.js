(function () {
    "use strict";

    angular.module('app')
        .controller('homeController', function ($scope, jibbirService, $mdBottomSheet) {
            $scope.test = "test";
            
            $scope.setUsername = function(){
                jibbirService.setUsername($scope.username);
            };
            $scope.openBottomSheet = function($event) {
                $mdBottomSheet.show({
                    templateUrl: '/components/bottomSheet/bottom.sheet.template.html',
                    // controller: '.'
                });
            };
            
        });
        


} ());