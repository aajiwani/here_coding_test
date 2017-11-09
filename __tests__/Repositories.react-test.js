jest.mock('lib/ApiCaller');

import React from 'react';
import Repositories from 'views/Repositories/components/success_component';
import renderer from 'react-test-renderer';
import {MemoryRouter, Switch, Route} from 'react-router-dom';
import * as UserApi from 'api/User';

test('Renders the list of repositories owned by heremaps', () => {
  return UserApi.GetRepositories().then(output => {
    const component = renderer.create(
      <MemoryRouter
        initialEntries={['/repositories', '/languages/:repo']}
        initialIndex={0}
      >
        <Repositories result={output} />
      </MemoryRouter>
    );

    expect(output).toBeDefined();

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
