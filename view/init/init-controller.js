/**
 * Created by tanner on 2/23/17.
 */
app.controller('initController', function ($scope, $rootScope, $state)
{
    if($rootScope.user)
    {
        $state.go('landing');
    }

    $scope.createUser = function ()
    {
        if(!isWhitespace($scope.name, $scope.tagline, $scope.bio))
        {
            $state.go('landing');
            $rootScope.user = new User($scope.name, $scope.tagline, $scope.profileUrl, $scope.bio);
        }
    }
});