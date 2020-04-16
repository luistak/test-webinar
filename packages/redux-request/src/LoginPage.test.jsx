import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import LoginPage from "./LoginPage";

test("logging in", async () => {
  const screen = render(<LoginPage />);

  const userInput = screen.getByLabelText(/nome/i);
  const passwordInput = screen.getByLabelText(/senha/i);
  const submitButton = screen.getByText(/entrar/i);

  user.type(userInput, "usuario");
  user.type(passwordInput, "123123");
  user.click(submitButton);

  await screen.findByText(/olá/i);
});
