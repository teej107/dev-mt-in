/**
 * Created by tanner on 2/9/17.
 */
var app = angular.module('devmtnin', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider)
{
    $stateProvider
        .state('init', new Route('/', 'init/init-view.html', 'initController'))
        .state('find', new Route('/find', 'find/find-view.html'))
        .state('friends', new Route('/friends', 'friends/friends-view.html'))
        .state('landing', new Route('/landing', 'landing/landing-view.html', 'landingController'));

    $urlRouterProvider.otherwise('/');
});

function Route(url, templateUrl, controller)
{
    this.url = url;
    this.templateUrl = "view/" + templateUrl;
    this.controller = controller;
}

