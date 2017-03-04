/**
 * Created by tanner on 3/4/17.
 */
app.service('appService', function ()
{
    var mainUser;
    this.setMainUser = function (user)
    {
        mainUser = user;
        return user;
    };
    this.getMainUser = function ()
    {
        return mainUser;
    };
});