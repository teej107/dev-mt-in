app.controller('landingController', function ($scope, $state, appService)
{
    $scope.getUser = function ()
    {
        return appService.getMainUser();
    };
    if (!appService.getMainUser())
    {
        $state.go('init');
        return;
    }

    $scope.getProfileUrl = function ()
    {
        if(appService.getMainUser().profileUrl)
            return appService.getMainUser().profileUrl;

        return 'images/img-placeholder.png';
    }
});