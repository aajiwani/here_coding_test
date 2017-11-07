import ErrorCreator from "lib/ErrorCreator";

export default class ApiCaller {
  static Call(apiUrl) {
    return fetch(apiUrl).then(response => {
      // Handle errors before continuing
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else if (response.status === 408) {
        throw ErrorCreator.CreateAPITimeoutError();
      } else {
        return response.json().then(resp => {
          throw ErrorCreator.CreateAPIResponseError(resp);
        });
      }
    });
  }
}
