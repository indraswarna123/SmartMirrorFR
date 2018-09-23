/// <reference path="angular.min.js" />

//Form_Elements.html Line 467 
var TablesApp = angular.module("TablesModule",[]);
var TablesController = function($scope){
    
    //Begin Page Container
    $scope.ContainerHeader="Basic - Table"; 

        //Begin Basic Table
        $scope.BasicTable="Basic Table";
        $scope.BasicTableRowHeader1 = "Project Name2";
        $scope.BasicTableRowHeader2 = "Description";
        $scope.BasicTableRowHeader3 = "Price";
        $scope.BasicTableRowHeader4 = "Progress";
        var BasicTableData = [
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
            }
        ];
        $scope.BasicTableData = BasicTableData;
        //Basic Table Show in 449
        //End Basic Table

        //Begin Striped Table
        $scope.StripedTable="Striped Table";
        $scope.StripedTableDescription="Description ....";
        $scope.StripedTableRowHeader1="First Name";
        $scope.StripedTableRowHeader2="Last Name";
        $scope.StripedTableRowHeader3="Status";
        var StripedTableData = [
            {
                FirstName  : "Mark",
                LastName   : "Otto",
                Status     : "Alert!"  
            },
            {
                FirstName  : "Ted",
                LastName   : "X",
                Status     : "Gaswat!"  
            }
        ];
        $scope.StripedTableData = StripedTableData;
        //Striped Table and Hover Table Show in 561
        //End Striped Table

        //Begin Hover Table
        $scope.HoverTable = "Hover Table";
        $scope.HoverTableDescription = "Description ....";
        $scope.HoverTableHeaderRow1="#";
        $scope.HoverTableHeaderRow2="FIRST NAME";
        $scope.HoverTableHeaderRow3="LAST NAME";
        $scope.HoverTableHeaderRow4="USERNAME";
        var HoverTableData = [
            {
                Number : "1",
                FirstName : "Mark",
                LastName : "Otto",
                Username : "@mdo"
            },
            {
                Number : "2",
                FirstName : "Sain",
                LastName : "Tain",
                Username : "@Std"
            }
        ];
        $scope.HoverTableData = HoverTableData;
        //End Hover Table

        //Begin Bordered Table
        $scope.BorderedTable = "Bordered Table";
        $scope.BorderedTableDescription = "Description ....";
        $scope.BorderedTableHeaderRow1="Month";
        $scope.BorderedTableHeaderRow2="Sales";
        $scope.BorderedTableHeaderRow3="Graph";
        var BorderedTableData = [
            {
                Month : "January",
                Sales : "$56,000.00",
                Graph : "1,5,4,6,3,5,2"
            }
        ];
        $scope.BorderedTableData = BorderedTableData;
        //Bordered Table Show in 673
        //End Bordered Table
    
};
TablesApp.controller("TablesController",TablesController);