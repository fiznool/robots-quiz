'use strict';

angular
  .module('robots')
  .controller('RobotController', function($stateParams, RobotsFactory) {
    var $ctrl = this;

    $ctrl.robot = RobotsFactory.getRobotById($stateParams.id);
  });
