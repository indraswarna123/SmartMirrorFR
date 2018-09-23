/// <reference path="angular.min.js" />
 
var SendEmailApp = angular.module("SendEmailModule",[]);
var SendEmailController = function($scope){
   
   //Form to sent email bind in line 500 
   var SendEmailData = [
            {
                Sender : "",
                Content : "",
                Subject       : ""
            }
        ];
   $scope.SendEmailData = SendEmailData;
   //Line 533 Save Button
   $scope.SaveButton = function(){
        //What to do if Save clicked
   };
   //Line 531 Send Button
   $scope.SendButton = function(){
        //What to do if Send clicked
   };
    
};
SendEmailApp.controller("SendEmailController",SendEmailController);

