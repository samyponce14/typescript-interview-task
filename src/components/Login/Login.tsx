import { SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '~/constants';
import login from '~/services/login';
import ErrorBlock from '../ErrorBlock';

import './login-style.scss';

const Login = () => {
  const { push } = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const [usernameError, setUsernameError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();

  const requiredValidator = (value?: string) => {
    return !value;
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setUsernameError(null);
    setPasswordError(null);

    try {
      await login(username, password);
      push(Routes.PasswordHealth);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const validateForm = () => {
    return requiredValidator(username) && requiredValidator(username);
  };

  const validateUsername = () => {
    if (requiredValidator(username)) {
      setUsernameError('Username is required');
    } else {
      setUsernameError(null);
    }
  };

  const validatePassword = () => {
    if (requiredValidator(password)) {
      setPasswordError('Password is required');
    } else {
      setPasswordError(null);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">
          Password Health
        </h1>
        <input
          className={"input mt-52px " + (usernameError ? 'input-error' : null)}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          onBlur={() => validateUsername()}
          placeholder="Username"
          type="text"
        />
        <ErrorBlock error={usernameError} />
        <input
          className={"input mt-24px " + (passwordError ? 'input-error' : null)}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onBlur={() => validatePassword()}
          placeholder="Password"
          type="password"
        />
        <ErrorBlock error={passwordError} />
        <ErrorBlock error={errorMessage} />
        <button type="submit" className="button mt-24px" disabled={validateForm()}>
          Login
        </button>
      </form>
    </div>
  )
};

export default Login;
