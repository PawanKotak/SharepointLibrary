
app.controller("readController", ['$scope', '$http', function ($scope, $http) {
    
    console.log("hello!");


   /* angular.element(document).ready(function () {
        // Your document is ready, place your code here
        alert(_spPageContextInfo);
        getData("Documents");
    });*/

     getData("Documents");
    // Function to Get List Data
    function getData(listName) {
        var siteURL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('" + listName + "')/items";

        $http.get(siteURL).
            then(function (response) {
                console.log(response.data);
                //$scope.greeting = response.data;
            });
    }


}]);






