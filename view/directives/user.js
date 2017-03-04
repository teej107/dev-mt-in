/**
 * Created by tanner on 3/4/17.
 */
app.directive('user', function ()
{
    return {
        templateUrl: 'view/directives/user-template.html',
        restrict: 'E',
        scope: {
            user: '&'
        }
    }
});