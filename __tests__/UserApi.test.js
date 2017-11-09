jest.mock("lib/ApiCaller");

import * as UserApi from "api/User";
import _ from "lodash";

describe("Users API", () => {
  it("expects true output of repositories to contain array with [name, full_name, image] as keys", () => {
    return UserApi.GetRepositories().then(output => {
      expect(output).toBeDefined();
      var props = ["name", "full_name", "image"];
      _.each(output, val => {
        props.forEach(function(prop) {
          expect(_.has(val, prop)).toBeTruthy();
        });
      })
    });
  });
});
