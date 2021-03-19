import { API } from '~/constants';
import getUrl from '../utils/getUrl';

export interface IItem {
  id: string,
  username: string,
  email: string,
}

const getUser = async (): Promise<IItem> => {

  const response = await fetch(getUrl(API.User), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  });

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else if (response.status === 401) {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    throw new Error('Invalid token');
  } else {
    throw new Error('Error getting user');
  }

};

export default getUser;
