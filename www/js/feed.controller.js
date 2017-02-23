'use strict';

angular
  .module('robots')
  .controller('FeedController', function(RobotsFactory, $scope, $q) {
    var $ctrl = this;

    $ctrl.load = function() {
      RobotsFactory
        .getRobots()
        .then(function(response) {
          robotsLoaded(response);
        });
    };

    $ctrl.loadNext = function() {
      RobotsFactory
        .getNextRobots()
        .then(function(response) {
          robotsLoaded(response);
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    function robotsLoaded(response) {
      console.log('Robots loaded:', response.robots);
      $ctrl.robots = response.robots;
      $ctrl.hasMoreRobots = response.hasMore;
    }

    $ctrl.load();
  });
