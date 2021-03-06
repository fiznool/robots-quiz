(function() {
  'use strict';

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'climatic' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  angular.module('robots', [
    'ionic',
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('feedState', {
        url: '/robots',
        templateUrl: 'tmpl/feed.html',
        controller: 'FeedController',
        controllerAs: '$ctrl'
      })
      .state('robotState', {
        url: '/robots/:id',
        templateUrl: 'robot.html',
        controller: 'RobotController'
      });

    $urlRouterProvider.otherwise('robots');
  })

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        window.cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        window.StatusBar.styleDefault();
      }
    });
  });
})();
