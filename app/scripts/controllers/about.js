'use strict';

/**
 * @ngdoc function
 * @name i18ntestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the i18ntestApp
 */
angular.module('i18ntestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
