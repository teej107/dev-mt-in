/**
 * Created by tanner on 2/23/17.
 */
function isWhitespace()
{
    for (var i = 0; i < arguments.length; i++)
    {
        if (arguments[i] === undefined || arguments[i].trim().length === 0)
            return true;
    }
    return false;
}

function User(name, tagline, profileUrl, bio)
{
    this.name = name;
    this.tagline = tagline;
    this.profileUrl = profileUrl;
    this.bio = bio;

    this.getFirstName = function ()
    {
        return name.split(' ')[0];
    };
    this.getLastName = function ()
    {
        return name.split(' ')[1];
    };
}

User.prototype.setSessionUser = function ()
{
    sessionStorage.setItem('user', JSON.stringify(this));
};

function clearSessionUser()
{
    sessionStorage.removeItem('user');
}

function getSessionUser()
{
    var userStr = sessionStorage.getItem('user');
    if(!userStr)
        return null;

    var user = JSON.parse(userStr);
    return new User(user.name, user.tagline, user.profileUrl, user.bio);
}