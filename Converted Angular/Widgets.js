/// <reference path="angular.min.js" />
 
var WidgetsApp = angular.module("WidgetsModule",[]);
var WidgetsController = function($scope){
    
	//ng-show ( True or False ) BigBox1 start from line  453
    $scope.BigBox1 = "true";
    //Small Box 1 in line 485
    $scope.SmallBox1 = "true";
    //Small Box 2 in line 507
    $scope.SmallBox2 = "true";
    //Small Box 3 in line 551
    $scope.SmallBox3 = "true";
    //Small Box 4 in line 580
    $scope.SmallBox4 = "true";
    //Quick View in line 729
    $scope.QuickView = "true";
    //You Have Earned Box in line 769
    $scope.YouHaveEarned = "true";
    //Weather Box in line 810
    $scope.Weather = "true";
    //Maps Box in line 1990
    $scope.Maps = "true";
    //Notification in line 2101
    $scope.Notification = "true";
    //Orders in line 2203
    $scope.Orders = "true";
    //Status in line 2249
    $scope.Status = "true";
    //WebStatus in line 2554
    $scope.WebStatus = "true";
    	
    
    
};
WidgetsApp.controller("WidgetsController",WidgetsController);