import { FC, SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IItem } from "~/services/getUserItems";
import { Routes } from '~/constants';
import logout from '../../../../services/logout';

import './header-style.scss';

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({ items, username }) => {
  const { push } = useHistory();
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleClick = async (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await logout();
      push(Routes.Login);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="header">
      <div className="user-section">
        <button onClick={handleClick}>{`Logout ${username}`}</button>
      </div>
      <h1>{`${items.length} Items are vulnerable`}</h1>
      <span>Create new complex passwords to protect your accounts</span>
    </div>
  )
};

export default Header;
