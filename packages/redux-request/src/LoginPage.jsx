import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthenticate } from './reducer';
import './LoginPage.css';

export default function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();
  const user = useSelector((user) => user);

  if (user.isLoading) {
    return (
      <div className="login-page">Carregando...</div>
    );
  }

  if (user.isAuth) {
    return (
      <div className="login-page">
        Olá, {user.name}
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetchAuthenticate(dispatch, username, password);
  }

  return (
    <div className="login-page">
      <form
        onSubmit={handleSubmit}
        className="login-form"
      >
        <label>
          <div className="login-form__field">
            <span>Nome de Usuário</span>
            <input
              type="text"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />
          </div>
        </label>
        <label>
          <div className="login-form__field">
            <span>Senha</span>
            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>
        </label>
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
      {user.error && (
        <span role="alert">{user.error}</span>
      )}
    </div>
  );
}
