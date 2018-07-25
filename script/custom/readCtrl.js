"use strict";
(function () {

    app.controller("readController", function ($scope) {
        // alert("hello!");

        getData();
    });

    function getData() {
        var _spPageContextInfo = { "webAbsoluteUrl": "https://xyz.sharepoint.com/sites/TESTSITE" }
        /* GET code*/
        $http({
            method: 'GET',

            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('LicensingInformation')/items?$select=ID,CompanyName0/Id,CompanyName0/Company_x0020_Name,ManufacturerName0/Manufacturer_x0020_Name,ManufacturerName0/Id,Attachments,AttachmentFiles,ProductName,PONo,Created,Author/Title,Modified,SalesOrderNumber&$expand=ManufacturerName0/Manufacturer_x0020_Name, CompanyName0/Company_x0020_Name,Author/Id,AttachmentFiles",


            headers: { "Accept": "application/json;odata=verbose" }

        }).success(function (data, status, headers, config) {



            $scope.customers = data.d.results;


        }).error(function (data, status, headers, config) {

        });

        /* End of GET code*/
    }



})

