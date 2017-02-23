'use strict';

angular
  .module('robots')
  .controller('RobotController', function($stateParams, RobotsFactory) {
    var $ctrl = this;

    $ctrl.tobor = RobotsFactory.getRobotById($stateParams.id);
  });
