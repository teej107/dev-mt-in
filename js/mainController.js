app.controller('mainController', function ($scope)
{
    $scope.currentView = "initView";
    $scope.switchView = function (element ,view)
    {
        $scope.currentView = view;
        var aTags = document.getElementById('footer-div').getElementsByTagName('a');
        for(var i = 0; i < aTags.length; i++)
        {
            aTags[i].style.textDecoration = "none";
        }
        if(element instanceof HTMLAnchorElement)
        {
            element.style.textDecoration = "underline";
        }
    }

    $scope.createUser = function ()
    {
        if(!isWhitespace($scope.name, $scope.tagline, $scope.bio))
        {
            $scope.switchView(null, 'landingView');
        }
    };
});

function isWhitespace()
{
    for(var i = 0; i < arguments.length; i++)
    {
        if(arguments[i].trim().length === 0)
            return true;
    }
    return false;
}