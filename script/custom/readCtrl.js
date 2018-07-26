var varReadController = function ($scope, $http) {

   // console.log("hello!");
    $scope.errorMessage="";


    $scope.test = function () {

        getData($scope.searchTerm);
    };


    // Function to Get List Data
    function getData(listName) {
        var siteURL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('" + listName + "')/items";

        $http.get(siteURL).
            then(function (response) {
                console.log(response.data);
                $scope.listData = response.data.value;
            }, function (data) {
                $scope.errorMessage ="Something Went Wrong check in console";
                console.log("Error handling");
            });
    }

}

app.controller('readController', ['$scope', '$http', varReadController]);



