(function(){
	var app = angular.module("adminDashboard");
	var MainController = function(navService){
		var mc = this;
		mc.menuItems = [];
		navService
			.loadAllItems()
			.then(function(menuItems) {
				mc.menuItems = [].concat(menuItems);
			});
		mc.sidebar = "SideBar";
	};
	
	app.controller("MainController", ['navService', MainController]);
}());