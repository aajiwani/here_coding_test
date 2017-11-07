import APICaller from 'lib/ApiCaller';

export default class UsersApi {
  static GetRepositories() {
    var apiUrl = "https://api.github.com/users/heremaps/repos";

    return APICaller.Call(apiUrl).then(response => {});
  }
}
