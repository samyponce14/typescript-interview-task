import renderer from 'react-test-renderer';

import List from './List';

const testProps = {
  'items': [
    {
      'id': '001',
      'title': 'Google',
      'description': 'My personal account',
      'password': 'Password123',
      'createdAt': '2021-03-19T20:10:28.387Z'
    },
    {
      'id': '002',
      'title': 'Facebook',
      'description': 'Facebook account that I manage',
      'password': 'SuperDuper5trong!',
      'createdAt': '2021-01-19T20:10:28.387Z'
    },
    {
      'id': '003',
      'title': 'Github',
      'description': 'This is where I store my projects',
      'password': 'Password123',
      'createdAt': '2021-03-19T20:10:28.388Z'
    },
    {
      'id': '004',
      'title': 'Reddit',
      'description': 'Front page of internet',
      'password': '12345678',
      'createdAt': '2021-03-19T20:10:28.388Z'
    },
    {
      'id': '005',
      'title': 'Discogs',
      'description': 'still waiting for new album',
      'password': 'Vardenis2000',
      'createdAt': '2021-03-19T20:10:28.388Z'
    },
    {
      'id': '006',
      'title': 'keybr',
      'description': 'Lets practice',
      'password': 'Vardenis2000',
      'createdAt': '2021-03-19T20:10:28.388Z'
    },
    {
      'id': '007',
      'title': 'hackaday',
      'description': 'tech news',
      'password': 'password@',
      'createdAt': '2021-03-19T20:10:28.388Z'
    },
    {
      'id': '008',
      'title': 'soundcloud',
      'description': 'music',
      'password': 'pavardenis321',
      'createdAt': '2021-03-19T20:10:28.388Z'
    },
    {
      'id': '009',
      'title': 'discord',
      'description': 'rumors',
      'password': 'discordPassword123.',
      'createdAt': '2021-03-19T20:10:28.388Z'
    },
    {
      'id': '010',
      'title': 'airdroid',
      'description': 'replace android',
      'password': 'pass1',
      'createdAt': '2021-03-19T20:10:28.388Z'
    }
  ]
}

describe('List', () => {
  test('renders List', () => {
    const tree = renderer.create(<List {...testProps} />);
    expect(tree).toMatchSnapshot();
  });
});
