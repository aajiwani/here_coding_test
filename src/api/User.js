import APICaller from 'lib/ApiCaller';

export function GetRepositories() {
  var apiUrl = 'https://api.github.com/users/heremaps/repos';

  return APICaller.Call(apiUrl);
}
