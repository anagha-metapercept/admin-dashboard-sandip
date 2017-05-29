(function(){
	var app = angular.module('adminDashboard', ['ngRoute']);
	app.config(function($routeProvider){
		$routeProvider
		  .when("/home", {
			templateUrl: "src/app/views/main.html",
			controller: "MainController"
		  })
		  .when("/dashboard",{
			templateUrl: "src/app/views/dashboard.html",
			controller: ""
		  })
		  .otherwise({redirectTo:"/home"});
		});
}());