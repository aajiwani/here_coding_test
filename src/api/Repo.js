import APICaller from 'lib/ApiCaller';

export function GetLanguages(repoName) {
  var apiUrl = 'https://api.github.com/repos/heremaps/@name/languages'.replace(
    '@name',
    repoName
  );

  return APICaller.Call(apiUrl);
}
