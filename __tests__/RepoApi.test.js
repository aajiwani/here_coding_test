jest.mock('lib/ApiCaller');

import * as RepoApi from 'api/Repo';

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    RepoApi.GetLanguages('bike-navigation').then(output => console.log(output));
    expect(2 + 2).toBe(4);
  });
});
