/**
 * Created by tanner on 2/23/17.
 */
app.controller('landingController', function ($scope, $rootScope, $state)
{
    $scope.user = $rootScope.user;
    if (!$scope.user)
    {
        $state.go('init');
        return;
    }

    var name = $scope.user.name.split(' ');
    $scope.firstName = name[0];
    $scope.lastName = name[1];
});