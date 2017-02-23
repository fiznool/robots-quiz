'use strict';

angular
  .module('robots')
  .controller('RobotController', function($stateParams, RobotsFactory, $cordovaInAppBrowser) {
    var $ctrl = this;

    $ctrl.robot = RobotsFactory.getRobotById($stateParams.id);

    $ctrl.openFilm = function() {
      $cordovaInAppBrowser.open($ctrl.robot.filmUrl, '_blank');
    };
  });
