/// <reference path="angular.min.js" />

//Form_Elements.html Line 467 
var GridDraggableApp = angular.module("GridDraggableModule",[]);
var GridDraggableController = function($scope){
    
    //Begin Page Container
    $scope.ContainerHeader="Draggable Grids - Portlets";
    //1st Grid Style Show in Line 464
    $scope.Show1stGrid = "true";
    //2nd Grid Style Show in Line 485
    $scope.Show2ndGrid = "true";
    //3rd Grid Style Show in Line 519
    $scope.Show3rdGrid = "true";
    //4th Grid Style Show in Line 538
    $scope.Show4thGrid = "true";
    
        
    
};
GridDraggableApp.controller("GridDraggableController",GridDraggableController);