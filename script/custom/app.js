

    var app = angular.module("myApp", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/create", {
                templateUrl: "../SiteAssets/SharepointLibrary/view/create.html"

            })
            .when("/read", {
                templateUrl: "../SiteAssets/SharepointLibrary/view/read.html",
                controller: "readController"
                
            })
            .when("/update", {
                templateUrl: "../SiteAssets/SharepointLibrary/view/update.html"
            })
            .when("/delete", {
                templateUrl: "../SiteAssets/SharepointLibrary/view/delete.html"
            })
            .when("/", {
                templateUrl: "../SiteAssets/SharepointLibrary/view/deafult.html"
            });
    });






