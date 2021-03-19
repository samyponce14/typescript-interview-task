import renderer from 'react-test-renderer';

import LoadingScreen from '../LoadingScreen';

describe('LoadingScreen', () => {
  test('renders LoadingScreen', () => {
    const tree = renderer.create(<LoadingScreen />);
    expect(tree).toMatchSnapshot();
  });
});
