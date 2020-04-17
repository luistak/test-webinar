import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import LoginPage from './components/pages/LoginPage';

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <LoginPage />
    </Provider>
  );
}
