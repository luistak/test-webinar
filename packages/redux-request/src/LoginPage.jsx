import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthenticate } from "./reducer";

export default function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const user = useSelector((user) => user);

  if (user.isLoading) {
    return <div>Carregando...</div>;
  }

  if (user.isAuth) {
    return <div>Olá, {user.name}</div>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchAuthenticate(dispatch, username, password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>Nome de Usuário:</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Senha:</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
      {user.error && <span role="alert">{user.error}</span>}
    </div>
  );
}
