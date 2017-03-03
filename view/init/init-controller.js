/**
 * Created by tanner on 2/23/17.
 */
app.controller('initController', function ($scope, $rootScope, $state)
{
    var user = getSessionUser();
    if (user)
    {
        $rootScope.user = user;
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
            $rootScope.user = new User($scope.name, $scope.tagline, $scope.profileUrl, $scope.bio);
            $rootScope.user.setSessionUser();
            $state.go('landing');
        }
    }
});