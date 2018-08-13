var varCreateController = function ($scope) {


    $scope.SubmitClick = function () {

        alert('CreateController');

        sprLib.list('Test')
            .create({
                Title: 'PawanTest',               
            })
            .then(function (objItem) {
                console.log('New Item:');
                console.table(objItem);
            })
            .catch(function (strErr) { console.error(strErr); });
    }


}

app.controller('createController', ['$scope', varCreateController]);