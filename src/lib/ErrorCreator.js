import errorCodes from "config/ErrorCodes";

function ComposedError(message, code, info) {
  var err = new Error(message);
  err.errorCode = code;
  err.attachedInfo = info;
  err.type = "HereError";
  return err;
}

export default class ErrorCreator {
  static CreateAPIResponseError(response) {
    return ComposedError(
      "API resulted in error",
      errorCodes.API_RESULT_ERROR,
      response
    );
  }

  static CreateAPITimeoutError() {
    return ComposedError(
      "Failed at calling the API to retrieve data",
      errorCodes.API_TIMEOUT,
      null
    );
  }
}
