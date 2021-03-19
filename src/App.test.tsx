import renderer from 'react-test-renderer';

import App from './App';

describe('App', () => {
  test('renders App', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
