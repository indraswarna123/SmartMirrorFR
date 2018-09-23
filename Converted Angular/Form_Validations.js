/// <reference path="angular.min.js" />
 
var FormValidationsApp = angular.module("FormValidationsModule",[]);
var FormValidationsController = function($scope){
    
    //Show Content of Validations
    $scope.HeaderContent = "Form - Validations";
    $scope.ShowTraditionalValidation = "true";
    $scope.ShowIconValidation = "true";
    $scope.ShowCondensedValidation = "true";
    $scope.ShowFormWizard = "true";
    $scope.ShowAceConcepts = "true";
       
};
FormValidationsApp.controller("FormValidationsController",FormValidationsController);

