var varReadController = function ($scope, $http) {

    // console.log("hello!");
    $scope.errorMessage = "";

    $scope.test = function () {
        //  getData($scope.searchTerm);
        getListField($scope.searchTerm);
    };
    $scope.searchItem = function () {
        getListData($scope.searchTerm);
    };
    $scope.boolShowFieldArea = false;
    $scope.Fields = [];


    function getListData(listName)
    {
        fnResetValue();
        var selectedField = getSelectedFieldInList();
        var restAPI_Select = '?$select=';
        var siteRest_API_URL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('" + listName + "')/items";

        var completeURL = siteRest_API_URL + restAPI_Select + selectedField
        $http.get(completeURL).
            then(function (response)
            {
                console.log(response.data);
                $scope.listData = response.data.value;
            }, function (error) {
                $scope.errorMessage = "Error Detail: " + error.data['odata.error'].message.value;
                console.log("Error handling");
            });
    }

    function getListField(listName)
     {
        fnResetValue();
        var siteRest_API_URL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('" + listName + "')/Fields";
        $http.get(siteRest_API_URL).
            then(function (response)
             {

                $scope.listField = response.data.value;
                response.data.value.forEach(function (element) {
                    console.log(element.Title);
                }, this);
                $scope.boolShowFieldArea = true;
            }, function (error) {
                $scope.errorMessage = "Error Detail: " + error.data['odata.error'].message.value;
                console.log("Error handling");
            });
    }

    function getSelectedFieldInList()
     {
        var fieldsFromList = '';
        $scope.Fields = [];
        $scope.listField.forEach(function (element) {
            console.log(element.Title);
            if (element.selectCheck) {
                fieldsFromList = fieldsFromList + element.StaticName + ',';
                var temp = new Object();
                temp["Name"] = element.StaticName;
                $scope.Fields.push(temp);
            }
        });
        // Remove last ','
        fieldsFromList = fieldsFromList.substring(0, fieldsFromList.length - 1);
        return fieldsFromList;
    }

    function fnResetValue()
     {
        $scope.errorMessage = '';
    }

}

app.controller('readController', ['$scope', '$http', varReadController]);



