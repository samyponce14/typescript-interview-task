import renderer from 'react-test-renderer';

import ErrorBlock from '../ErrorBlock';

describe('ErrorBlock', () => {
  test('renders ErrorBlock', () => {
    const tree = renderer.create(<ErrorBlock error={'Error'} />);
    expect(tree).toMatchSnapshot();
  });
});
