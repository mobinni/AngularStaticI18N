'use strict';

/**
 * @ngdoc overview
 * @name i18ntestApp
 * @description
 * # i18ntestApp
 *
 * Main module of the application.
 */
angular
    .module('i18ntestApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'pascalprecht.translate'
    ])
    .config(function($routeProvider, $translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: '/locales/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).run(function($location, $translate) {
        var splitUrl = $location.absUrl().split('/');
        if (splitUrl.indexOf('nl') > -1) $translate.use('nl')
        else $translate.use('en')
    });
