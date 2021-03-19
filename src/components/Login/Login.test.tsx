import React from 'react';
import renderer from 'react-test-renderer';

import Login from './Login';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Login', () => {
  it('renders Login', () => {
    const tree = renderer.create(<Login />);
    expect(tree).toMatchSnapshot();
  });
});
