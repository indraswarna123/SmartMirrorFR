/// <reference path="angular.min.js" />
 
var DraftApp = angular.module("DraftModule",[]);
var DraftController = function($scope){
    
   $scope.ShowContent = "true";
   //Draft Email Data
   var DraftData = [
            {
            	Checkbox : "8",
            	Star  : "9",
                Sender : "David Nester",
                Content : "Less spam, and mobile access. Gmail is email that intuitive,...efficient, and useful.And maybe even fun.",
                Day       : "Yesterday"
            },
            {
            	Checkbox : "10",
            	Star  : "11",
                Sender : "Jane Smith",
                Content : "Open the door to success, maximum revanue efficient, and useful",
                Day       : "Yesterday"
            },
            {
            	Checkbox : "12",
            	Star  : "13",
                Sender : "David Nester",
                Content : "Less spam, and mobile access. Gmail is email that intuitive,...efficient, and useful.And maybe even fun.",
                Day       : "Yesterday"
            },
            {
            	Checkbox : "13",
            	Star  : "14",
                Sender : "David Nester",
                Content : "Less spam, and mobile access. Gmail is email that intuitive,...efficient, and useful.And maybe even fun.",
                Day       : "Yesterday"
            },
            {
            	Checkbox : "15",
            	Star  : "16",
                Sender : "Jane Smith",
                Content : "Open the door to success, maximum revanue efficient, and useful",
                Day       : "Yesterday"
            },
            {
            	Checkbox : "17",
            	Star  : "18",
                Sender : "David Nester",
                Content : "Less spam, and mobile access. Gmail is email that intuitive,...efficient, and useful.And maybe even fun.",
                Day       : "Yesterday"
            },
            {
            	Checkbox : "19",
            	Star  : "20",
                Sender : "David Nester",
                Content : "Less spam, and mobile access. Gmail is email that intuitive,...efficient, and useful.And maybe even fun.",
                Day       : "Yesterday"
            },
            {
            	Checkbox : "21",
            	Star  : "22",
                Sender : "Jane Smith",
                Content : "Open the door to success, maximum revanue efficient, and useful",
                Day       : "Yesterday"
            },
            {
            	Checkbox : "23",
            	Star  : "24",
                Sender : "David Nester",
                Content : "Less spam, and mobile access. Gmail is email that intuitive,...efficient, and useful.And maybe even fun.",
                Day       : "Yesterday"
            },
        ];
   $scope.DraftData = DraftData;
    
    
};
DraftApp.controller("DraftController",DraftController);

