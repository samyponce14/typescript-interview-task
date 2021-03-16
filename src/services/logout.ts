import { API } from '~/constants';
import getUrl from '../utils/getUrl';

const logout = async () => {
    const url = getUrl(API.Logout);

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    });

    if (response.status === 200) {
        localStorage.removeItem('token');
    }
};

export default logout;