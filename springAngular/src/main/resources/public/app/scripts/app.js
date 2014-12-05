'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */

  
 var routerApp = angular.module('routerApp', ['ui.router','ctrlModule']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
        	  url: '/about/{content}',
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
        });
        
});
//define a new module which will use in the another js module files in 
// another file it will use angular.module("ctrlModule") to reference the module here defined
// this js file must declare first in html file than another js module config file
angular.module("ctrlModule", []);

