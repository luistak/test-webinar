import React from "react";
import LoginPage from "./LoginPage";
import { createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "./reducer";
import "./App.css";

function App() {
  return (
    <Provider store={createStore(userReducer)}>
      <div className="App">
        <LoginPage />
      </div>
    </Provider>
  );
}

export default App;
