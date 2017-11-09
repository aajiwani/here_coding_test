jest.mock('lib/ApiCaller');

import React from 'react';
import RepositoryLanguages from 'views/RepositoryLanguages/components/success_component';
import renderer from 'react-test-renderer';
import {MemoryRouter, Switch, Route} from 'react-router-dom';
import * as RepoApi from 'api/Repo';

test('Renders the list of repositories owned by heremaps', () => {
  const repoName = 'bike-navigation';
  return RepoApi.GetLanguages(repoName).then(output => {
    const component = renderer.create(
      <MemoryRouter
        initialEntries={['/repositories', '/languages/:repo']}
        initialIndex={0}
      >
        <RepositoryLanguages
          result={output}
          repo_name={repoName}
          goBack={() => {}}
        />
      </MemoryRouter>
    );

    expect(output).toBeDefined();

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
