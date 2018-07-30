var varReadController = function ($scope, $http) {

    // console.log("hello!");
    $scope.errorMessage = "";


    $scope.test = function () {

        getData($scope.searchTerm);
        getField($scope.searchTerm);
    };


    // Function to Get List Data
    function getData(listName) {
        var siteURL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('" + listName + "')/items";

        $http.get(siteURL).
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
        var siteURL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('" + listName + "')/Fields";
          $http.get(siteURL).
            then(function (response) {
               // console.log("Field Detail"+response.data); 
               $scope.listField = response.data.value;
               response.data.value.forEach(function(element) {
                   console.log(element.Title);
               }, this);

            }, function (error) {
                $scope.errorMessage = "Error Detail: " + error.data['odata.error'].message.value;
                console.log("Error handling");
            });



    }

}

app.controller('readController', ['$scope', '$http', varReadController]);



