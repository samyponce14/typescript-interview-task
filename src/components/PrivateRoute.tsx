import { FC, useEffect } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { Routes } from '~/constants';

const PrivateRoute: FC<RouteProps> = ({
  path,
  component,
}) => {
  const { push } = useHistory();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const abortController = new AbortController();
    if (!token) {
      push(Routes.Login);
    }
    return () => {
      abortController.abort();
    };
  }, []);

  return <Route path={path} component={component} />
};

export default PrivateRoute;
