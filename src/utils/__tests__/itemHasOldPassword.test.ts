import itemHasOldPassword from '../itemHasOldPassword';
import { IItem } from '../../services/getUserItems';

// Todo fix problem that causes this test to fail
describe('should return true if password do not match requirements', () => {
  test.each([
    [
      true,
      {
        createdAt: new Date(new Date().setMonth(new Date().getMonth() - 2)).toISOString()
      }
    ],
    [
      false,
      {
        createdAt: new Date().toISOString()
      }
    ],
    [
      true,
      {
        createdAt: new Date(new Date().setMonth(new Date().getMonth() - 2)).toISOString()
      }
    ]
  ])('should return %s', (expectedResult, item) => {
    expect(itemHasOldPassword(item as IItem)).toBe(expectedResult);
  })
});