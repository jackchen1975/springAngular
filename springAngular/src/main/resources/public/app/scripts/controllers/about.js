'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the publicApp
 */
// this will reference the module in the app.js
angular.module('routerApp')
// below use the angular module  ctrlModule in app.js
//angular.module('ctrlModule')
  .controller('AboutCtrl', function ($scope,$window,$stateParams,$http) {

	  $scope.openalert=function(){
		 //when rest and angular is deploy in the same domain(web project) there are no CROS problem
		  //you can use the below two way to call rest
		//  $http.get('http://localhost:8083/ChattingAngular/app/test').
		  // if you want to create the shared rest for different devises you can use the Crosrestfulfilter.java
		  //below is same as above
		  $http.get('test').
	      success(function(data) {
	    	  console.log(data);
				$window.alert(data+' '+$stateParams.content);
	      });		
		}
		$scope.openalert();
  });
