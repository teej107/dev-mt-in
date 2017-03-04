/**
 * Created by tanner on 2/23/17.
 */
app.controller('initController', function ($scope, appService, $state)
{
    var user = getSessionUser();
    if (user)
    {
        appService.setMainUser(user);
        $state.go('landing');
    }

    $scope.createUser = function ()
    {
        if (isWhitespace($scope.name, $scope.tagline, $scope.bio))
        {
            alert('You forgot to fill in some data :(');
        }
        else
        {
            appService.setMainUser(new User($scope.name, $scope.tagline, $scope.profileUrl, $scope.bio)).setSessionUser();
            $state.go('landing');
        }
    }
});