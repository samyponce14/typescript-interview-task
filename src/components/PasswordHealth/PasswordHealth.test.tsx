import renderer from 'react-test-renderer';

import PasswordHealth from './PasswordHealth';

describe('PasswordHealth', () => {
  test('renders PasswordHealth', () => {
    const tree = renderer.create(<PasswordHealth />);
    expect(tree).toMatchSnapshot();
  });
});
