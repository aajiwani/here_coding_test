import APICaller from "lib/ApiCaller";
import _ from "lodash";

export function GetRepositories() {
  var apiUrl = "https://api.github.com/users/heremaps/repos";

  return APICaller.Call(apiUrl).then(response => {
    return _.map(response, val => {
      return {
        name: val.name,
        full_name: val.full_name,
        image: val.owner.avatar_url
      };
    });
  });
}
