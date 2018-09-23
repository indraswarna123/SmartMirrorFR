/// <reference path="angular.min.js" />
 
var LoginV2App = angular.module("LoginV2Module",[]);
var LoginV2Controller = function($scope){
    
    	
    //Begin Basic Form Element
    	//Line 51 LoginV2Input
	    var LoginV2Input = {
	        Username: "",
	        Password : ""
	    };
	    $scope.LoginV2Input = LoginV2Input;
	    //Line 48 Login Button
	    $scope.LoginButton = "Login";
	    $scope.LoginButtonShow = "true";
	    //Line 49 Register Button
	    $scope.RegisterButton = "Create a new Account";
	    $scope.RegisterButtonShow = "true";

	    $scope.SubmitFunction = function() {
	    	// What to do when button submit clicked
	    };
	    $scope.RegisterFunction = function() {
	    	// What to do when Register button clicked
	    };
	    $scope.TroubleFunction = function() {
	    	// What to do when Trouble Login button clicked
	    };
};
LoginV2App.controller("LoginV2Controller",LoginV2Controller);

