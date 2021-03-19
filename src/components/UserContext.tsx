import { createContext, useContext, useEffect, useState, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '~/constants';
import getUser from '~/services/getUser';

interface IUser {
  updateUser: () => void;
  deleteData: () => void;
  errorMessage: string;
  isLoading: boolean;
  username: string;
  email: string;
  id: string;
}

const UserContext = createContext<IUser>({
  updateUser: () => { },
  deleteData: () => { },
  errorMessage: null,
  isLoading: true,
  username: null,
  email: null,
  id: null,
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: FC = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState<string>(null);
  const [email, setEmail] = useState<string>(null);
  const [id, setId] = useState<string>(null);

  const { push } = useHistory();

  const updateUser = async (): Promise<void> => {
    setErrorMessage(null);
    setIsLoading(true);

    try {

      const data = await getUser();

      setUsername(data?.username);
      setEmail(data?.email);
      setId(data?.id);

    } catch (error) {
      setErrorMessage(error.message);
      push(Routes.Login);
    }

    setIsLoading(false);
  }

  const deleteData = (): void => {
    setErrorMessage(null);
    setIsLoading(false);
    setUsername(null);
    setEmail(null);
    setId(null);
  };

  useEffect(() => {
    const abortController = new AbortController();
    updateUser();
    return () => {
      abortController.abort();
    };
  }, []);

  const value = {
    updateUser,
    deleteData,
    errorMessage,
    isLoading,
    username,
    email,
    id,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;