(function () {
    "use strict";

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('home');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'components/home/home.client.template.html',
                    controller: 'homeController'
                });
            $stateProvider
                .state('jibbir', {
                    url: '/jibbir',
                    templateUrl: 'components/jibbir/jibbir.client.template.html',
                    controller: 'jibbirController'
                });
        });


} ());