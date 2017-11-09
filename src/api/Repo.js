import APICaller from "lib/ApiCaller";
import _ from "lodash";

export function GetLanguages(repoName) {
  var apiUrl = "https://api.github.com/repos/heremaps/@name/languages".replace(
    "@name",
    repoName
  );

  return APICaller.Call(apiUrl).then(response => {
    return _.map(Object.keys(response), key => {
      return {
        name: key,
        bytes: response[key]
      };
    });
  });
}
