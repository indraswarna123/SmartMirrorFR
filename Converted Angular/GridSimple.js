/// <reference path="angular.min.js" />

//Form_Elements.html Line 467 
var GridSimpleApp = angular.module("GridSimpleModule",[]);
var GridSimpleController = function($scope){
    
    //Begin Page Container
    $scope.ContainerHeader="Simple Grids - Portlets";
    //1st Grid Style Show in Line 456
    $scope.Show1stGrid = "true";
    //2nd Grid Style Show in Line 456
    $scope.Show2ndGrid = "true";
    //3rd Grid Style Show in Line 456
    $scope.Show3rdGrid = "true";
    //4th Grid Style Show in Line 456
    $scope.Show4thGrid = "true";
    //5th Grid Style Show in Line 456
    $scope.Show5thGrid = "true";
    //6th Grid Style Show in Line 456
    $scope.Show6thGrid = "true";
    
        
    
};
GridSimpleApp.controller("GridSimpleController",GridSimpleController);