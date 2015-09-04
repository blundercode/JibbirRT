(function () {
    "use strict";

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
            
            $mdThemingProvider.theme('default')
                .primaryPalette('pink', {
                    'hue-1' : '300',
                    'hue-2' : '200',
                    'hue-3' : '50'
                })
                
                .accentPalette('pink', {
                    'default': '400',
                    'hue-1'   : '300',
                    'hue-2'   : '200',
                    'hue-3'   : '50'
                });
        
                // .backgroundPalette('light-green', {
                //     'default' : '50',
                //     'hue-1'   : '300',
                //     'hue-2'   : '200',
                //     'hue-3'   : '50'
                // })
                
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