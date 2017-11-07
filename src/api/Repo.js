export default class ReposApi
{
    static GetLanguages(repoName)
    {
        return "https://api.github.com/repos/heremaps/@name/languages".replace("@name", repoName);
    }

    static GetError()
    {
        return "https://api.github.com/repos/heremaps/@name/languages";
    }
}