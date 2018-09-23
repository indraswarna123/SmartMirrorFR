/// <reference path="angular.min.js" />

//Form_Elements.html Line 467 
var BasicFormElementApp = angular.module("BasicFormElementModule",[]);
var FormElementController = function($scope){
    //Submit Disable when the box are empty in line 529
    //Line 490 Check whether Username input is empty or not
    //Line 495 Check whether Password input is empty or not
    //Line 504 Check whether Email input is empty or not
    //Begin Basic Form Element
	    var BasicFormElementInput = {
	        Name: "",
	        Password : "",
	        Email      : "",
	        Placeholder : "You can put anything"
	    };
	    $scope.BasicFormElementInput = BasicFormElementInput;
	    $scope.BasicFormElementHeader = "Simple Element";
	    $scope.BasicFormElementExampleName = "E.G : Indra";
	    $scope.BasicFormElementExamplePassword = "E.G : ******";
	    $scope.BasicFormElementExampleEmail = "E.G : Indra@gmail.com";
	    $scope.BasicFormElementExamplePlaceholder = "E.G : Input Anything You Want";
	    $scope.BasicFormElementExampleDisabled = "E.G : DISABLED";
	    $scope.SubmitFunction = function(){
	    	//What to do when Submit button clicked
	    };
    //End Basic Form Element

    //Begin Form Options
        $scope.FormOptionHeader = "Form Options";
        $scope.FormOptionHeaderBody = "Simple Editor";
        $scope.FormOptionParagraph = "Basic buttons are traditional buttons with borders and background."
                                     +" Use any of the available button classes to quickly create a styled button."
                                     +" Compatible for bootstrap version 2 and 3.";

        var FormOptionInput = {
            Inputlg: "",
            DefaultInput:"",
            Inputsm:""
        };
        $scope.FormOptionInput = FormOptionInput;
    //Begin Form Control
        $scope.FormControlHeader = "Form Controls";
        $scope.FormControlParagraph = "Adding on top of existing browser controls, Bootstrap includes other useful form components. Add text or buttons before or after any text-based input. Do note that select elements are not supported here.";
        $scope.FormControlUsername = "";
            
    //End Form Options
    
};
BasicFormElementApp.controller("BasicFormElementController",FormElementController);