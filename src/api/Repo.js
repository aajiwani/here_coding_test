import APICaller from "lib/ApiCaller";

export default class ReposApi {
  static GetLanguages(repoName) {
    var apiUrl = 'https://api.github.com/repos/heremaps/@name/languages'.replace(
      '@name',
      repoName
    );

    return APICaller.Call(apiUrl).then(response => {});
  }
}
