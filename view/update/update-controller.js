app.controller('updateController', function ($scope, $state, appService)
{
    $scope.getUser = function ()
    {
        return appService.getMainUser();
    };

    if(!appService.getMainUser())
    {
        $state.go('landing');
        return;
    }

    var user = $scope.getUser();
    $scope.name = user.name;
    $scope.tagline = user.tagline;
    $scope.profileUrl = user.profileUrl;
    $scope.bio = user.bio;

    $scope.saveChanges = function ()
    {
        if(!isWhitespace($scope.name, $scope.tagline, $scope.bio))
        {
            user.name = $scope.name;
            user.tagline = $scope.tagline;
            user.profileUrl = $scope.profileUrl;
            user.bio = $scope.bio;
            $state.go('landing');
        }
    }
});