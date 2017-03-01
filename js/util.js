/**
 * Created by tanner on 2/23/17.
 */
function isWhitespace()
{
    for(var i = 0; i < arguments.length; i++)
    {
        if(arguments[i] === undefined || arguments[i].trim().length === 0)
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
}
