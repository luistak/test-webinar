import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthenticate } from '../../reducers/userReducer';
import Login from '../Login/Login';

export default function LoginPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  if (user.isLoading) {
    return <div>Carregando...</div>;
  }

  if (user.isAuth) {
    return <div>Olá, {user.name}</div>;
  }

  function handleSubmit(email, password) {
    fetchAuthenticate(dispatch, email, password);
  }

  return <Login onSubmit={handleSubmit} />;
}
