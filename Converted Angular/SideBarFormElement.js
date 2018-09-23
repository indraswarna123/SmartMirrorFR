/// <reference path="angular.min.js" />

//Form_Elements.html Line 467 
var FormElementApp = angular.module("FormElementModule",[]);
var FormElementController = function($scope){
    //Begin Header
    	$scope.Title="Webarch - Responsive Admin Dashboard";
    	$scope.Username = "Fred Smith";
    	$scope.Status = "Life goes on...";
    	$scope.Dashboard = "Dashboard";
    	$scope.Widgets = "Widgets";
    	$scope.Email = "Email";
    	$scope.Themes = "Themes";
    	$scope.Layouts = "Layouts";
    	$scope.UIElements = "UI Elements";
    	$scope.Forms = "Forms";
    	$scope.Grids = "Grids";
    	$scope.Tables = "Tables";
    	$scope.Maps = "Maps";
    	$scope.Charts = "Charts";
    	$scope.Extra = "Extra";
    	$scope.MenuLevels = "Menu Levels";
};
FormElementApp.controller("FormElementController",FormElementController);