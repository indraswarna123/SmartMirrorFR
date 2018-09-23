/// <reference path="angular.min.js" />
 
var LockScreenApp = angular.module("LockScreenModule",[]);
var LockScreenController = function($scope){
    
   //Line 38 Username 
   $scope.Username = "John Smith";
   //Line 39 Password
   $scope.Password = "";
   $scope.Submit = function(){
        //What happen when submit clicked
   };

    
};
LockScreenApp.controller("LockScreenController",LockScreenController);

