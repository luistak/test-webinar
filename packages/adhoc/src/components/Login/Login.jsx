import React from 'react';

export default function Login({ onSubmit }) {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(user, password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>User:</span>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <label>
        <span>Senha:</span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
}
