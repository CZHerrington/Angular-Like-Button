import angular from 'angular';

// Import all controllers

import {MainController} from './controllers/main.controller';

angular
  .module('app', []) // Register the module
  .controller('MainController', MainController); // Register controller
