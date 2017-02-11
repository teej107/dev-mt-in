/**
 * Created by tanner on 2/11/17.
 */
angular.module('devmtnin').config(function ($routeProvider)
{
    $routeProvider.when('/', new View('view/initView.html'))
});

function View(url)
{
    this.templateUrl = url;
}