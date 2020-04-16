import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createStore } from "redux";
import LoginPage from "./LoginPage";
import reducer from "./reducer";
import { authenticate } from "./service";

jest.mock("./service");

const renderRedux = (ui, options) => {
  return render(ui, {
    ...options,
    wrapper: ({ children }) => {
      return <Provider store={createStore(reducer)}>{children}</Provider>;
    },
  });
};

test("logging in", async () => {
  authenticate.mockImplementationOnce(() => ({ name: "usuario" }));

  renderRedux(<LoginPage />);

  const userInput = screen.getByLabelText(/nome/i);
  const passwordInput = screen.getByLabelText(/senha/i);
  const submitButton = screen.getByText(/entrar/i);

  user.type(userInput, "usuario");
  user.type(passwordInput, "123123");
  user.click(submitButton);

  await screen.findByText(/olá/i);

  expect(authenticate).toHaveBeenCalledWith("usuario", "123123");
});
