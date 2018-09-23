/// <reference path="angular.min.js" />
 
var GroupListApp = angular.module("GroupListModule",[]);
var GroupListController = function($scope){
    $scope.HeaderContent = "Sortable List";
    $scope.ShowMessageBoxes = "true";
    
    
};
GroupListApp.controller("GroupListController",GroupListController);

