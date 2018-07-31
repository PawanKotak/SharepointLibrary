var varReadController = function ($scope, $http) {

    // console.log("hello!");
    $scope.errorMessage = "";  

    $scope.test = function () {
        //  getData($scope.searchTerm);
        getField($scope.searchTerm);
    };
    $scope.searchItem = function () {
        getData($scope.searchTerm);
    };
    $scope.boolShowFieldArea=false;
    $scope.Fields = [];

    // Function to Get List Data
    function getData(listName) {
         fnReset();
        var selectedField = selectFieldInList();
        var fixed = '?$select=';
        var siteURL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('" + listName + "')/items";

        var completeURL = siteURL + fixed + selectedField
        $http.get(completeURL).
            then(function (response) {
                console.log(response.data);
                $scope.listData = response.data.value;               
            }, function (error) {
                $scope.errorMessage = "Error Detail: " + error.data['odata.error'].message.value;
                console.log("Error handling");
            });
    }

    // Function to Get List Field
    function getField(listName) {
         fnReset();
        var siteURL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('" + listName + "')/Fields";
        $http.get(siteURL).
            then(function (response) {               
                // console.log("Field Detail"+response.data); 
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

    //Function Get Selection Clause for Rest API for Item Selected
    function selectFieldInList() {
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
    //Function Reset Error Message
    function fnReset(){
        $scope.errorMessage='';
    }  

}

app.controller('readController', ['$scope', '$http', varReadController]);



