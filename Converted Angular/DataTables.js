/// <reference path="angular.min.js" />

//Form_Elements.html Line 467 
var DataTablesApp = angular.module("DataTablesModule",[]);
var DataTablesController = function($scope){
    
    //Begin Page Container
    $scope.ContainerHeader="Advance - Table";
    //1st Table Style Show in Line 456
    $scope.Show1stTable = "true";
    //Row Header in Table
    $scope.Table1stRowHeader1 = "Project Name";
    $scope.Table1stRowHeader2 = "Description";
    $scope.Table1stRowHeader3 = "Price";
    $scope.Table1stRowHeader4 = "Progress";
    //Row Data in Table
    var Table1stData = [
            {
                ProjectName : "Early Bird",
                Description : "Redesign project template",
                Price       : "$4,500",
                Progress    : "79%"   
            },
            {
                ProjectName : "Early Bird",
                Description : "Redesign project template",
                Price       : "$5,500",
                Progress    : "89%"   
            },
            {
                ProjectName : "Early Bird",
                Description : "Redesign project template",
                Price       : "$4,500",
                Progress    : "79%"   
            },
            {
                ProjectName : "Early Bird",
                Description : "Redesign project template",
                Price       : "$4,500",
                Progress    : "79%"   
            },
            {
                ProjectName : "Early Bird",
                Description : "Redesign project template",
                Price       : "$4,500",
                Progress    : "79%"   
            }
        ];
    $scope.Table1stData = Table1stData;
    

    //2nd Table Style Show in Line 715   
    $scope.Show2ndTable = "true";
    $scope.Table2ndRowHeader1 = "Rendering engine";
    $scope.Table2ndRowHeader2 = "Browser";
    $scope.Table2ndRowHeader3 = "Platform(s)";
    $scope.Table2ndRowHeader4 = "Engine version";
    $scope.Table2ndRowHeader5 = "CSS grade";

    //3rd Table Advance Option Show in Line 
    $scope.Show3rdTable = "true";
    $scope.Table3rdRowHeader1 = "Rendering engine";
    $scope.Table3rdRowHeader2 = "Browser";
    $scope.Table3rdRowHeader3 = "Platform(s)";
    $scope.Table3rdRowHeader4 = "Engine version";
    $scope.Table3rdRowHeader5 = "CSS grade";
    var Table3rdData = [
            {
                RenderingEngine : "Webkit",
                Browser : "Safari 3.0",
                Platform       : "OSX.4+",
                Version    : "522.1",
                Grade   : "A"   
            },
            {
                RenderingEngine : "Webkit",
                Browser : "Safari 3.0",
                Platform       : "OSX.4+",
                Version    : "522.1",
                Grade   : "A"   
            }
    ];
    $scope.Table3rdData = Table3rdData;
        
    
};
DataTablesApp.controller("DataTablesController",DataTablesController);