import { API } from '~/constants';
import getUrl from '../utils/getUrl';

const login = async (username: string, password: string): Promise<void> => {
  const url = getUrl(API.Login, {
    username,
    password,
  });

  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    const { token } = data;
    localStorage.setItem('token', token);
  } else {
    throw new Error('Invalid user or password');
  }

};

export default login;
