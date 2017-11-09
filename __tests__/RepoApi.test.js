jest.mock("lib/ApiCaller");

import * as RepoApi from "api/Repo";
import _ from "lodash";

describe("Languages API", () => {
  it("expects true output of languages to contain array with [name, bytes] as keys", () => {
    return RepoApi.GetLanguages("bike-navigation").then(output => {
      expect(output).toBeDefined();
      var props = ["name", "bytes"];
      _.each(output, val => {
        props.forEach(function(prop) {
          expect(_.has(val, prop)).toBeTruthy();
        });
      })
    });
  });
});

describe("Languages API", () => {
  it("expects the languages to not be found", () => {
    return expect(RepoApi.GetLanguages("not-found")).rejects.toBeTruthy();
  });
});