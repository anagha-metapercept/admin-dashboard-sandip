(function(){
	angular
	.module('app')
	.controller('MainController', MainController);
	function MainController($scope){
		$scope.sidebar = "SideBar";
	});
}());