app.controller('mainController', function ($scope)
{
    $scope.currentView = "initView";
    $scope.switchView = function ($event ,view)
    {
        $scope.currentView = view;
        var aTags = document.getElementById('footer-div').getElementsByTagName('a');
        for(var i = 0; i < aTags.length; i++)
        {
            aTags[i].style.textDecoration = "none";
        }
        $event.target.style.textDecoration = "underline";
    }
});